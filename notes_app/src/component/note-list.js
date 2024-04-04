import gsap from 'gsap'

class NotesApp extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.filteredNotesData = []
    this.archivedNotesData = []
    this.unarchivedNoteIndices = {}
    this.shadowRoot.innerHTML = `
        <style>
        
        .notes-grid {
          justify-content: center;
          margin: 50px;
          display: grid;
          grid-template-columns: repeat(auto-fill, 360px);
          gap: 15px;
        }
        .note-card, add-note {
          height: 300px; 
          background-color: #fff;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .note-card h3 {
          margin-top: 0;
        }

        .note-card p {
          margin-bottom: auto;
        }

        .note-card small {
          color: #666;
          margin-top: auto;
        }

        add-note {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .add-note-icon {
          font-size: 48px;
          color: #ccc;
        }
        .button-container {
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
        
        .button-container button {
          margin-left: 5px;
          cursor: pointer;
        }

        .edit-button {
          padding: 10px;
          border-radius: 5px;
          background-color: #C6EBC5;
          border: none;
          transition: background-color 0.3s, color 0.3s;
        }

        .edit-button {
          background-color : #4CAF50;
          color: white;
        }

        .delete-button {
          background-color: #f44336;
          color: white;
          border: none;
          border-radius : 5px;
          padding: 10px;
        }

        .edit-button:hover, .delete-button:hover {
          background-color: #45a049; 
          color: white; 
        }

        delete-button:hover {
          background-color : #f44336;
          color: white;
        }

        .note-card hr{
          margin: 10px 0;
          border: none;
          border-top: 1px solid #ccc;
        }

        .note-card h3{
          margin-top : 9px;
          text-align: center;
        }

        .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 999; 
        }
        
        .popup-content {
            background-color: #fff;
            padding: 20px 40px;
            margin-right: 40px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            z-index: 1000; 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content : center;
            width: calc(100% - 50px); 
            max-width: 360px;
            height: 300px;
            position: relative; 
        }

        .close-icon {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            font-size: 24px;
            color: #fff; 
            font-size: 12px;
        }
        
        .add-note-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2px;
        }

        .add-note-content p {
            margin: 0;
        }
        
       .add-note-content .icon {
            font-size : 24px;
            font-weight: bold;
            color: #76885B;
       }
       
        input[type="text"],
        textarea, button[type="submit"] {
        width: calc(100% - 20px); 
        margin-right: 10px; 
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: border-color 0.3s;
        }

        button[type="submit"] {
        width: 100%; 
        margin-right: 10px; 
        margin-bottom: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
        transition: border-color 0.3s;
        }

        input[type="text"]:focus,
        textarea:focus {
            outline: none;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
        }

        button {
            padding: 8px 16px;
            background-color: #627254;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .edit-button:hover {
            background-color: #a9dfbf;
            color: white;
        }

        .delete-button:hover{
          background-color: #ff6961;
          color: white;

          
        }
        .header-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .header-grid button.archive {
            background-color: transparent; 
            border: 1px solid #627254; 
            color: #627254; 
            margin-left: 0 auto;
        }
        
        .header-grid button.archive:hover {
            background-color: #C6EBC5; 
        }
        
        .archived-notes-grid {
            justify-content: center;
            margin: 50px;
            display: grid;
            grid-template-columns: repeat(auto-fill, 360px);
            gap: 15px;
          
          }
        
        </style>
            <div class="notes-grid"></div>
            <div class="archived-notes-grid"></div>
            <div class="popup-overlay">
                <div class="popup-content">
                    <h2>Edit Note</h2>
                    <button class="close-icon">X</button>
                    <form id="editNoteForm">
                        <input type="text" placeholder="Title" id="titleInput" required>
                        <textarea placeholder="Description" rows="4" id="bodyInput" required></textarea>
                        <button type="submit">Update</button>
                    </form>
                </div>
            </div>
        `
    this.shadowRoot
      .querySelector('.close-icon')
      .addEventListener('click', () => this.removePopup())
  }

  generateId() {
    return Math.random().toString(36).substring(2)
  }

  connectedCallback() {
    this.renderLoading()
    setTimeout(() => {
      this.fetchNotesFromAPI()
    }, 3000)
    this.renderAddNoteCard()
    this.setupSearch()
    this.renderNotes()
    this.setupArchiveButton()
    this.setupUnarchiveButton()
  }

  async fetchNotesFromAPI() {
    try {
      const response = await fetch('https://notes-api.dicoding.dev/v2/notes')
      if (!response.ok) {
        throw new Error('Failed to fetch notes: ' + response.statusText)
      }
      const data = await response.json()
      this.notesData = data.data
      this.renderNotes()
    } catch (error) {
      console.error('Error fetching notes:', error.message)
    } finally {
      const loadingIndicator =
        this.shadowRoot.querySelector('#loadingIndicator')
      if (loadingIndicator) {
        loadingIndicator.remove()
      }
    }
  }

  renderAddNoteCard() {
    const notesGrid = this.shadowRoot.querySelector('.notes-grid')
    const addNoteCard = document.createElement('add-note')
    if (notesGrid.firstChild) {
      notesGrid.insertBefore(addNoteCard, notesGrid.firstChild)
    } else {
      notesGrid.appendChild(addNoteCard)
    }
  }
  updateNotesData(newNotesData) {
    this.notesData = newNotesData
  }
  archiveNoteHandler(noteId) {
    const noteIndex = this.notesData.findIndex((note) => note.id === noteId)
    if (noteIndex !== -1) {
      const archivedNote = this.notesData.splice(noteIndex, 1)[0]
      archivedNote.archived = true
      this.archivedNotesData.unshift(archivedNote)
      this.updateNotesData(this.notesData)
      this.renderNotes()
    }
  }
  renderLoading() {
    const loadingIndicator = document.createElement('div')
    loadingIndicator.id = 'loadingIndicator'
    loadingIndicator.innerHTML = '<div class="loading-spinner"></div>'
    this.shadowRoot.appendChild(loadingIndicator)

    const style = document.createElement('style')
    style.textContent = `
            .loading-spinner {
                border: 4px solid rgba(0, 0, 0, 0.1);
                border-left-color: #3498db;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 1s linear infinite;
                margin: auto;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
            }
            
            @keyframes spin {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `
    this.shadowRoot.appendChild(style)
  }

  unarchiveNoteHandler(noteId) {
    const noteIndex = this.archivedNotesData.findIndex(
      (note) => note.id === noteId,
    )
    if (noteIndex !== -1) {
      const unarchivedNote = this.archivedNotesData.splice(noteIndex, 1)[0]
      unarchivedNote.archived = false
      this.notesData.unshift(unarchivedNote)
      this.updateNotesData(this.notesData)
      this.renderNotes()
    }
  }

  setupUnarchiveButton() {
    const unarchiveButtons = this.shadowRoot.querySelectorAll('.unarchive')
    unarchiveButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const noteId = button.closest('.note-card').dataset.noteId
        this.unarchiveNoteHandler(noteId)
      })
    })
  }

  async addNoteToAPI(note) {
    try {
      const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      })
      if (!response.ok) {
        throw new Error('Failed to add note: ' + response.statusText)
      }
      const data = await response.json()
      this.notesData.unshift(data)
      this.renderNotes()
    } catch (error) {
      console.error('Error adding note:', error.message)
    }
  }

  async deleteNoteHandler(noteId) {
    try {
      const response = await fetch(
        `https://notes-api.dicoding.dev/v2/notes/${noteId}`,
        {
          method: 'DELETE',
        },
      )
      if (!response.ok) {
        throw new Error('Failed to delete note')
      }
      const noteIndex = this.notesData.findIndex((note) => note.id === noteId)
      if (noteIndex !== -1) {
        this.notesData.splice(noteIndex, 1)
      } else {
        const archivedNoteIndex = this.archivedNotesData.findIndex(
          (note) => note.id === noteId,
        )
        if (archivedNoteIndex !== -1) {
          this.archivedNotesData.splice(archivedNoteIndex, 1)
        }
      }
      this.renderNotes()
      console.log('Note deleted successfully')

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Note deleted successfully',
      })
    } catch (error) {
      console.error('Error deleting note:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to delete note',
      })
    }
  }

  setupArchiveButton() {
    const archiveButtons = this.shadowRoot.querySelectorAll('.archive')
    archiveButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const noteId = button.closest('.note-card').dataset.noteId
        this.archiveNoteHandler(noteId)
      })
    })
  }

  async updateNoteToAPI(noteId, updatedNote) {
    try {
      const response = await fetch(
        `https://notes-api.dicoding.dev/v2/notes/${noteId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedNote),
        },
      )
      if (!response.ok) {
        throw new Error(`Failed to update note: ${response.statusText}`)
      }
      const data = await response.json()
      const updatedIndex = this.notesData.findIndex(
        (note) => note.id === noteId,
      )
      if (updatedIndex !== -1) {
        this.notesData[updatedIndex] = data
      } else {
        const archivedIndex = this.archivedNotesData.findIndex(
          (note) => note.id === noteId,
        )
        if (archivedIndex !== -1) {
          this.archivedNotesData[archivedIndex] = data
        }
      }
      this.renderNotes()
    } catch (error) {
      console.error('Error updating note:', error.message)
    }
  }

  setupSearch() {
    const noteSearchElement = document.querySelector('note-search')
    if (noteSearchElement) {
      noteSearchElement.addEventListener('search', (event) => {
        const searchValue = event.detail.toLowerCase()
        this.filteredNotesData = this.notesData.filter(
          (note) =>
            note.title.toLowerCase().includes(searchValue) ||
            note.body.toLowerCase().includes(searchValue),
        )
        if (this.filteredNotesData.length === 0) {
          const noMatchMessage = document.createElement('div')
          noMatchMessage.textContent = 'Tidak ada catatan yang sesuai.'
          const notesGrid = this.shadowRoot.querySelector('.notes-grid')
          notesGrid.innerHTML = ''
          notesGrid.appendChild(noMatchMessage)
        } else {
          this.renderNotes()
        }
      })
    } else {
      console.error('Elemen <note-search> tidak ditemukan di dalam dokumen.')
    }
  }

  showEditPopup(note, isArchived) {
    if (note) {
      const titleInput = this.shadowRoot.querySelector('#titleInput')
      const bodyInput = this.shadowRoot.querySelector('#bodyInput')
      titleInput.value = note.title || ''
      bodyInput.value = note.body || ''
      const titleText = note.editedAt ? `${note.title} (edited)` : note.title
      titleInput.value = titleText || ''
      this.shadowRoot.querySelector('.popup-content h2').textContent =
        'Edit Note'
      this.showPopup()
      const editForm = this.shadowRoot.getElementById('editNoteForm')
      editForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const updatedTitle = titleInput.value
        const updatedBody = bodyInput.value
        const updatedNote = {
          title: updatedTitle,
          body: updatedBody,
          editedAt: new Date().toISOString(),
        }
        if (isArchived) {
          this.updateNoteToAPI(note.id, updatedNote)
        } else {
          this.updateNoteToAPI(
            this.notesData.find((item) => item.id === note.id).id,
            updatedNote,
          )
        }
        this.removePopup()
      })
    }
  }

  showPopup() {
    this.shadowRoot.querySelector('.popup-overlay').style.display = 'flex'
  }

  removePopup() {
    console.log('Menghapus popup')
    this.shadowRoot.querySelector('.popup-overlay').style.display = 'none'
  }

  renderNotes() {
    const notesGrid = this.shadowRoot.querySelector('.notes-grid')
    const archivedNotesGrid = this.shadowRoot.querySelector(
      '.archived-notes-grid',
    )

    notesGrid.innerHTML = ''
    archivedNotesGrid.innerHTML = ''

    const notesToRender =
      this.filteredNotesData.length > 0
        ? this.filteredNotesData
        : this.notesData

    if (Array.isArray(notesToRender) && notesToRender.length > 0) {
      const unarchivedNotes = notesToRender.filter((note) => !note.archived)
      unarchivedNotes.forEach((note, index) => {
        const noteElement = this.createNoteElement(note)
        // Apply animation here
        noteElement.style.opacity = 0
        gsap.to(noteElement, {
          opacity: 1,
          duration: 0.7,
          ease: 'power2.inOut',
          delay: index * 0.1,
        })
        notesGrid.appendChild(noteElement)
      })
    }

    if (this.archivedNotesData.length > 0) {
      this.archivedNotesData.forEach((note) => {
        const noteElement = this.createNoteElement(note, true)
        archivedNotesGrid.appendChild(noteElement)
      })
    }

    this.setupUnarchiveButton()
    this.renderAddNoteCard()
  }

  createNoteElement(note, isArchived = false) {
    const noteElement = document.createElement('div')
    noteElement.classList.add('note-card')
    noteElement.dataset.noteId = note.id
    const editedText = note.editedAt ? ` (edited)` : ''
    const createdAtText = `${new Date(note.createdAt).toLocaleString()}${editedText}`

    let unarchiveButton
    if (isArchived) {
      unarchiveButton = document.createElement('button')
      unarchiveButton.classList.add('unarchive')
      unarchiveButton.textContent = 'Unarchive'
      unarchiveButton.addEventListener('click', () =>
        this.unarchiveNoteHandler(note.id),
      )
      noteElement.appendChild(unarchiveButton)
    }

    noteElement.innerHTML += `
            <div class="header-grid">
                
                <h3>${note.title}</h3>
                <button class="archive">arsip</button>
            </div>
            <hr>
            <p>${note.body}</p>
            <small>${createdAtText}</small> 
            <div class="button-container">
                <button class="edit-button"><i class="fas fa-edit"></i>Edit</button>
                <button class="delete-button">Delete</button>
            </div>`

    const deleteButton = noteElement.querySelector('.delete-button')
    deleteButton.addEventListener('click', () =>
      this.deleteNoteHandler(note.id),
    )
    const editButton = noteElement.querySelector('.edit-button')
    editButton.addEventListener('click', () => this.editNoteHandler(note))
    const archiveButton = noteElement.querySelector('.archive')
    archiveButton.addEventListener('click', () =>
      this.archiveNoteHandler(note.id),
    )
    if (isArchived) {
      unarchiveButton.addEventListener('click', () =>
        this.unarchiveNoteHandler(note.id),
      )
    }

    return noteElement
  }

  editNoteHandler(note, isArchived) {
    if (note) {
      const noteIndex = isArchived
        ? this.archivedNotesData.findIndex((item) => item.id === note.id)
        : this.notesData.findIndex((item) => item.id === note.id)
      if (noteIndex !== -1) {
        this.showEditPopup(note, isArchived)
      }
    }
  }
}

customElements.define('note-list', NotesApp)
