/*! For license information please see bundle.js.LICENSE.txt */
;(() => {
  var t = {
      25: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
                  }),
            t(e)
          )
        }
        function e() {
          'use strict'
          e = function () {
            return r
          }
          var n,
            r = {},
            i = Object.prototype,
            o = i.hasOwnProperty,
            a =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value
              },
            s = 'function' == typeof Symbol ? Symbol : {},
            u = s.iterator || '@@iterator',
            c = s.asyncIterator || '@@asyncIterator',
            l = s.toStringTag || '@@toStringTag'
          function h(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            )
          }
          try {
            h({}, '')
          } catch (n) {
            h = function (t, e, n) {
              return (t[e] = n)
            }
          }
          function f(t, e, n, r) {
            var i = e && e.prototype instanceof g ? e : g,
              o = Object.create(i.prototype),
              s = new A(r || [])
            return a(o, '_invoke', { value: P(t, n, s) }), o
          }
          function p(t, e, n) {
            try {
              return { type: 'normal', arg: t.call(e, n) }
            } catch (t) {
              return { type: 'throw', arg: t }
            }
          }
          r.wrap = f
          var d = 'suspendedStart',
            v = 'suspendedYield',
            m = 'executing',
            y = 'completed',
            _ = {}
          function g() {}
          function b() {}
          function x() {}
          var w = {}
          h(w, u, function () {
            return this
          })
          var T = Object.getPrototypeOf,
            O = T && T(T(D([])))
          O && O !== i && o.call(O, u) && (w = O)
          var k = (x.prototype = g.prototype = Object.create(w))
          function E(t) {
            ;['next', 'throw', 'return'].forEach(function (e) {
              h(t, e, function (t) {
                return this._invoke(e, t)
              })
            })
          }
          function S(e, n) {
            function r(i, a, s, u) {
              var c = p(e[i], e, a)
              if ('throw' !== c.type) {
                var l = c.arg,
                  h = l.value
                return h && 'object' == t(h) && o.call(h, '__await')
                  ? n.resolve(h.__await).then(
                      function (t) {
                        r('next', t, s, u)
                      },
                      function (t) {
                        r('throw', t, s, u)
                      },
                    )
                  : n.resolve(h).then(
                      function (t) {
                        ;(l.value = t), s(l)
                      },
                      function (t) {
                        return r('throw', t, s, u)
                      },
                    )
              }
              u(c.arg)
            }
            var i
            a(this, '_invoke', {
              value: function (t, e) {
                function o() {
                  return new n(function (n, i) {
                    r(t, e, n, i)
                  })
                }
                return (i = i ? i.then(o, o) : o())
              },
            })
          }
          function P(t, e, r) {
            var i = d
            return function (o, a) {
              if (i === m) throw Error('Generator is already running')
              if (i === y) {
                if ('throw' === o) throw a
                return { value: n, done: !0 }
              }
              for (r.method = o, r.arg = a; ; ) {
                var s = r.delegate
                if (s) {
                  var u = M(s, r)
                  if (u) {
                    if (u === _) continue
                    return u
                  }
                }
                if ('next' === r.method) r.sent = r._sent = r.arg
                else if ('throw' === r.method) {
                  if (i === d) throw ((i = y), r.arg)
                  r.dispatchException(r.arg)
                } else 'return' === r.method && r.abrupt('return', r.arg)
                i = m
                var c = p(t, e, r)
                if ('normal' === c.type) {
                  if (((i = r.done ? y : v), c.arg === _)) continue
                  return { value: c.arg, done: r.done }
                }
                'throw' === c.type &&
                  ((i = y), (r.method = 'throw'), (r.arg = c.arg))
              }
            }
          }
          function M(t, e) {
            var r = e.method,
              i = t.iterator[r]
            if (i === n)
              return (
                (e.delegate = null),
                ('throw' === r &&
                  t.iterator.return &&
                  ((e.method = 'return'),
                  (e.arg = n),
                  M(t, e),
                  'throw' === e.method)) ||
                  ('return' !== r &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method",
                    )))),
                _
              )
            var o = p(i, t.iterator, e.arg)
            if ('throw' === o.type)
              return (
                (e.method = 'throw'), (e.arg = o.arg), (e.delegate = null), _
              )
            var a = o.arg
            return a
              ? a.done
                ? ((e[t.resultName] = a.value),
                  (e.next = t.nextLoc),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = n)),
                  (e.delegate = null),
                  _)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                _)
          }
          function L(t) {
            var e = { tryLoc: t[0] }
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e)
          }
          function C(t) {
            var e = t.completion || {}
            ;(e.type = 'normal'), delete e.arg, (t.completion = e)
          }
          function A(t) {
            ;(this.tryEntries = [{ tryLoc: 'root' }]),
              t.forEach(L, this),
              this.reset(!0)
          }
          function D(e) {
            if (e || '' === e) {
              var r = e[u]
              if (r) return r.call(e)
              if ('function' == typeof e.next) return e
              if (!isNaN(e.length)) {
                var i = -1,
                  a = function t() {
                    for (; ++i < e.length; )
                      if (o.call(e, i))
                        return (t.value = e[i]), (t.done = !1), t
                    return (t.value = n), (t.done = !0), t
                  }
                return (a.next = a)
              }
            }
            throw new TypeError(t(e) + ' is not iterable')
          }
          return (
            (b.prototype = x),
            a(k, 'constructor', { value: x, configurable: !0 }),
            a(x, 'constructor', { value: b, configurable: !0 }),
            (b.displayName = h(x, l, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var e = 'function' == typeof t && t.constructor
              return (
                !!e &&
                (e === b || 'GeneratorFunction' === (e.displayName || e.name))
              )
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, x)
                  : ((t.__proto__ = x), h(t, l, 'GeneratorFunction')),
                (t.prototype = Object.create(k)),
                t
              )
            }),
            (r.awrap = function (t) {
              return { __await: t }
            }),
            E(S.prototype),
            h(S.prototype, c, function () {
              return this
            }),
            (r.AsyncIterator = S),
            (r.async = function (t, e, n, i, o) {
              void 0 === o && (o = Promise)
              var a = new S(f(t, e, n, i), o)
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next()
                  })
            }),
            E(k),
            h(k, l, 'Generator'),
            h(k, u, function () {
              return this
            }),
            h(k, 'toString', function () {
              return '[object Generator]'
            }),
            (r.keys = function (t) {
              var e = Object(t),
                n = []
              for (var r in e) n.push(r)
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop()
                    if (r in e) return (t.value = r), (t.done = !1), t
                  }
                  return (t.done = !0), t
                }
              )
            }),
            (r.values = D),
            (A.prototype = {
              constructor: A,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = n),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = n),
                  this.tryEntries.forEach(C),
                  !t)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      o.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = n)
              },
              stop: function () {
                this.done = !0
                var t = this.tryEntries[0].completion
                if ('throw' === t.type) throw t.arg
                return this.rval
              },
              dispatchException: function (t) {
                if (this.done) throw t
                var e = this
                function r(r, i) {
                  return (
                    (s.type = 'throw'),
                    (s.arg = t),
                    (e.next = r),
                    i && ((e.method = 'next'), (e.arg = n)),
                    !!i
                  )
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    s = a.completion
                  if ('root' === a.tryLoc) return r('end')
                  if (a.tryLoc <= this.prev) {
                    var u = o.call(a, 'catchLoc'),
                      c = o.call(a, 'finallyLoc')
                    if (u && c) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                    } else if (u) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0)
                    } else {
                      if (!c)
                        throw Error('try statement without catch or finally')
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc)
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n]
                  if (
                    r.tryLoc <= this.prev &&
                    o.call(r, 'finallyLoc') &&
                    this.prev < r.finallyLoc
                  ) {
                    var i = r
                    break
                  }
                }
                i &&
                  ('break' === t || 'continue' === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null)
                var a = i ? i.completion : {}
                return (
                  (a.type = t),
                  (a.arg = e),
                  i
                    ? ((this.method = 'next'), (this.next = i.finallyLoc), _)
                    : this.complete(a)
                )
              },
              complete: function (t, e) {
                if ('throw' === t.type) throw t.arg
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === t.type && e && (this.next = e),
                  _
                )
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e]
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), C(n), _
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e]
                  if (n.tryLoc === t) {
                    var r = n.completion
                    if ('throw' === r.type) {
                      var i = r.arg
                      C(n)
                    }
                    return i
                  }
                }
                throw Error('illegal catch attempt')
              },
              delegateYield: function (t, e, r) {
                return (
                  (this.delegate = {
                    iterator: D(t),
                    resultName: e,
                    nextLoc: r,
                  }),
                  'next' === this.method && (this.arg = n),
                  _
                )
              },
            }),
            r
          )
        }
        function n(t, e, n, r, i, o, a) {
          try {
            var s = t[o](a),
              u = s.value
          } catch (t) {
            return void n(t)
          }
          s.done ? e(u) : Promise.resolve(u).then(r, i)
        }
        function r(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(t, i(r.key), r)
          }
        }
        function i(e) {
          var n = (function (e, n) {
            if ('object' != t(e) || !e) return e
            var r = e[Symbol.toPrimitive]
            if (void 0 !== r) {
              var i = r.call(e, 'string')
              if ('object' != t(i)) return i
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              )
            }
            return String(e)
          })(e)
          return 'symbol' == t(n) ? n : n + ''
        }
        function o(t) {
          var e = 'function' == typeof Map ? new Map() : void 0
          return (
            (o = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    )
                  } catch (e) {
                    return 'function' == typeof t
                  }
                })(t)
              )
                return t
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t)
                e.set(t, n)
              }
              function n() {
                return (function (t, e, n) {
                  if (a()) return Reflect.construct.apply(null, arguments)
                  var r = [null]
                  r.push.apply(r, e)
                  var i = new (t.bind.apply(t, r))()
                  return n && s(i, n.prototype), i
                })(t, arguments, u(this).constructor)
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                s(n, t)
              )
            }),
            o(t)
          )
        }
        function a() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            )
          } catch (t) {}
          return (a = function () {
            return !!t
          })()
        }
        function s(t, e) {
          return (
            (s = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t
                }),
            s(t, e)
          )
        }
        function u(t) {
          return (
            (u = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                }),
            u(t)
          )
        }
        var c = (function (i) {
          function o() {
            var e, n, r, i
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              })(this, o),
              ((n = this),
              (r = o),
              (r = u(r)),
              (e = (function (e, n) {
                if (n && ('object' === t(n) || 'function' == typeof n)) return n
                if (void 0 !== n)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined',
                  )
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    )
                  return t
                })(e)
              })(
                n,
                a()
                  ? Reflect.construct(r, i || [], u(n).constructor)
                  : r.apply(n, i),
              ))).attachShadow({ mode: 'open' }),
              (e.shadowRoot.innerHTML =
                '\n        <style>\n        .popup-content h2 {\n            color: #627254; \n            margin-bottom: 20px; \n            font-family: \'Poppins\'\n        }\n        .add-note-card {\n            width: 100px;\n            height: 100px;\n            background-color: #f9f9f9;\n            border: 2px dashed #ccc;\n            border-radius: 8px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            cursor: pointer;\n            border-radius: 50px\n        }\n        .add-note-icon {\n            font-size: 48px;\n            color: #ccc;\n        }\n        \n        .popup-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgba(0, 0, 0, 0.5);\n            display: none;\n            justify-content: center;\n            align-items: center;\n            z-index: 999; \n        }\n        \n        .popup-content {\n            background-color: #fff;\n            padding: 20px 40px;\n            margin-right: 40px;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n            z-index: 1000; \n            flex-direction: column;\n            align-items: center;\n            justify-content : center;\n            width: calc(100% - 50px); \n            max-width: 360px;\n            height: 300px;\n            position: relative; \n        }\n\n        .close-icon {\n            position: absolute;\n            top: 10px;\n            right: 10px;\n            cursor: pointer;\n            font-size: 24px;\n            color: #fff; \n            font-size: 12px;\n        }\n        \n        .add-note-content {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            margin-top: 2px;\n        }\n\n        .add-note-content p {\n            margin: 0;\n        }\n        \n       .add-note-content .icon {\n            font-size : 24px;\n            font-weight: bold;\n            color: #76885B;\n       }\n        \n        input[type="text"],\n        textarea, button[type="submit"] {\n        width: calc(100% - 20px); \n        margin-right: 10px; \n        margin-bottom: 10px;\n        padding: 8px;\n        border: 1px solid #ccc;\n        border-radius: 5px;\n        transition: border-color 0.3s;\n        }\n\n        button[type="submit"] {\n        width: 100%; \n        margin-right: 10px; \n        margin-bottom: 10px;\n        padding: 8px;\n        border: 1px solid #ccc;\n        border-radius: 5px;\n        transition: border-color 0.3s;\n        }\n\n        input[type="text"]:focus,\n        textarea:focus {\n            outline: none;\n            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); \n        }\n\n        button {\n            padding: 8px 16px;\n            background-color: #627254;\n            color: #fff;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n\n        button:hover {\n            background-color: #76885B;\n        }\n    </style>\n                <div class="add-note-card">\n                <div class="add-note-content">\n                    <p class="icon">+</p>\n                    <p>Add Note</p>\n                </div>\n                \x3c!-- Popup --\x3e\n                <div class="popup-overlay">\n                    <div class="popup-content">\n                        <h2>Add Note</h2>\n                        <button class="close-icon">X</button>\n                        <form id="addNoteForm">\n                            <input type="text" placeholder="Title" id="titleInput" required>\n                            <textarea placeholder="Description" rows="4" id="bodyInput" required></textarea>\n                            <button type="submit">Tambah</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        '),
              e
            )
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              ;(t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && s(t, e)
            })(o, i),
            (c = o),
            (l = [
              {
                key: 'connectedCallback',
                value: function () {
                  var t = this
                  this.shadowRoot
                    .querySelector('.add-note-card')
                    .addEventListener('click', function () {
                      return t.showPopup()
                    }),
                    this.shadowRoot
                      .querySelector('.close-icon')
                      .addEventListener('click', function (e) {
                        e.stopPropagation(), t.removePopup()
                      })
                  var e = this.shadowRoot.querySelector('.popup-overlay')
                  e.addEventListener('click', function (n) {
                    n.target === e && t.removePopup()
                  }),
                    this.shadowRoot
                      .getElementById('addNoteForm')
                      .addEventListener('submit', function (e) {
                        return t.addNoteHandler(e)
                      })
                },
              },
              {
                key: 'showPopup',
                value: function () {
                  console.log('Show Popup: Showing popup'),
                    (this.shadowRoot.querySelector(
                      '.popup-overlay',
                    ).style.display = 'flex')
                },
              },
              {
                key: 'removePopup',
                value: function () {
                  console.log('Remove Popup: Removing popup'),
                    (this.shadowRoot.querySelector(
                      '.popup-overlay',
                    ).style.display = 'none')
                },
              },
              {
                key: 'addNoteHandler',
                value:
                  ((h = e().mark(function t(n) {
                    var r, i, o, a, s, u
                    return e().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                n.preventDefault(),
                                (r =
                                  this.shadowRoot.querySelector(
                                    '#titleInput',
                                  ).value),
                                (i =
                                  this.shadowRoot.querySelector(
                                    '#bodyInput',
                                  ).value),
                                (o = { title: r, body: i }),
                                (t.prev = 4),
                                (t.next = 7),
                                fetch(
                                  'https://notes-api.dicoding.dev/v2/notes',
                                  {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(o),
                                  },
                                )
                              )
                            case 7:
                              if ((a = t.sent).ok) {
                                t.next = 13
                                break
                              }
                              return (t.next = 11), a.text()
                            case 11:
                              throw (
                                ((s = t.sent),
                                new Error('Failed to add note: ' + s))
                              )
                            case 13:
                              ;(u = document.querySelector('note-list'))
                                ? u.fetchNotesFromAPI()
                                : console.error(
                                    'NoteList component not found.',
                                  ),
                                Swal.fire({
                                  icon: 'success',
                                  title: 'Success',
                                  text: 'Note added successfully',
                                }),
                                (t.next = 22)
                              break
                            case 18:
                              ;(t.prev = 18),
                                (t.t0 = t.catch(4)),
                                console.error(
                                  'Error adding note:',
                                  t.t0.message,
                                ),
                                Swal.fire({
                                  icon: 'error',
                                  title: 'Error',
                                  text: 'Failed to create note',
                                })
                            case 22:
                              this.removePopup()
                            case 23:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[4, 18]],
                    )
                  })),
                  (f = function () {
                    var t = this,
                      e = arguments
                    return new Promise(function (r, i) {
                      var o = h.apply(t, e)
                      function a(t) {
                        n(o, r, i, a, s, 'next', t)
                      }
                      function s(t) {
                        n(o, r, i, a, s, 'throw', t)
                      }
                      a(void 0)
                    })
                  }),
                  function (t) {
                    return f.apply(this, arguments)
                  }),
              },
            ]),
            l && r(c.prototype, l),
            Object.defineProperty(c, 'prototype', { writable: !1 }),
            c
          )
          var c, l, h, f
        })(o(HTMLElement))
        customElements.define('add-note', c)
      },
      520: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
                  }),
            t(e)
          )
        }
        function e(t) {
          var o = 'function' == typeof Map ? new Map() : void 0
          return (
            (e = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    )
                  } catch (e) {
                    return 'function' == typeof t
                  }
                })(t)
              )
                return t
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              if (void 0 !== o) {
                if (o.has(t)) return o.get(t)
                o.set(t, e)
              }
              function e() {
                return (function (t, e, i) {
                  if (n()) return Reflect.construct.apply(null, arguments)
                  var o = [null]
                  o.push.apply(o, e)
                  var a = new (t.bind.apply(t, o))()
                  return i && r(a, i.prototype), a
                })(t, arguments, i(this).constructor)
              }
              return (
                (e.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                r(e, t)
              )
            }),
            e(t)
          )
        }
        function n() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            )
          } catch (t) {}
          return (n = function () {
            return !!t
          })()
        }
        function r(t, e) {
          return (
            (r = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t
                }),
            r(t, e)
          )
        }
        function i(t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                }),
            i(t)
          )
        }
        var o = (function (e) {
          function o() {
            var e, r, a, s
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              })(this, o),
              ((r = this),
              (a = o),
              (a = i(a)),
              (e = (function (e, n) {
                if (n && ('object' === t(n) || 'function' == typeof n)) return n
                if (void 0 !== n)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined',
                  )
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    )
                  return t
                })(e)
              })(
                r,
                n()
                  ? Reflect.construct(a, s || [], i(r).constructor)
                  : a.apply(r, s),
              ))).attachShadow({ mode: 'open' }),
              (e.shadowRoot.innerHTML =
                '\n            <style>\n                h1 {\n                    text-align: center;\n                    font-size: 50px;\n                    color: #627254;\n                }\n            </style>\n            <h1>Notes App</h1>\n        '),
              e
            )
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              ;(t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && r(t, e)
            })(o, e),
            (a = o),
            Object.defineProperty(a, 'prototype', { writable: !1 }),
            a
          )
          var a
        })(e(HTMLElement))
        customElements.define('custom-header', o)
      },
      747: () => {
        function t(e) {
          return (
            (t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
                  }),
            t(e)
          )
        }
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r]
            ;(i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              'value' in i && (i.writable = !0),
              Object.defineProperty(t, n(i.key), i)
          }
        }
        function n(e) {
          var n = (function (e, n) {
            if ('object' != t(e) || !e) return e
            var r = e[Symbol.toPrimitive]
            if (void 0 !== r) {
              var i = r.call(e, 'string')
              if ('object' != t(i)) return i
              throw new TypeError(
                '@@toPrimitive must return a primitive value.',
              )
            }
            return String(e)
          })(e)
          return 'symbol' == t(n) ? n : n + ''
        }
        function r(t) {
          var e = 'function' == typeof Map ? new Map() : void 0
          return (
            (r = function (t) {
              if (
                null === t ||
                !(function (t) {
                  try {
                    return (
                      -1 !== Function.toString.call(t).indexOf('[native code]')
                    )
                  } catch (e) {
                    return 'function' == typeof t
                  }
                })(t)
              )
                return t
              if ('function' != typeof t)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              if (void 0 !== e) {
                if (e.has(t)) return e.get(t)
                e.set(t, n)
              }
              function n() {
                return (function (t, e, n) {
                  if (i()) return Reflect.construct.apply(null, arguments)
                  var r = [null]
                  r.push.apply(r, e)
                  var a = new (t.bind.apply(t, r))()
                  return n && o(a, n.prototype), a
                })(t, arguments, a(this).constructor)
              }
              return (
                (n.prototype = Object.create(t.prototype, {
                  constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                o(n, t)
              )
            }),
            r(t)
          )
        }
        function i() {
          try {
            var t = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            )
          } catch (t) {}
          return (i = function () {
            return !!t
          })()
        }
        function o(t, e) {
          return (
            (o = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t
                }),
            o(t, e)
          )
        }
        function a(t) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t)
                }),
            a(t)
          )
        }
        var s = (function (n) {
          function r() {
            var e, n, o, s
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError('Cannot call a class as a function')
              })(this, r),
              ((n = this),
              (o = r),
              (o = a(o)),
              (e = (function (e, n) {
                if (n && ('object' === t(n) || 'function' == typeof n)) return n
                if (void 0 !== n)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined',
                  )
                return (function (t) {
                  if (void 0 === t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called",
                    )
                  return t
                })(e)
              })(
                n,
                i()
                  ? Reflect.construct(o, s || [], a(n).constructor)
                  : o.apply(n, s),
              ))).attachShadow({ mode: 'open' }),
              (e.shadowRoot.innerHTML =
                '\n            <style>\n                .search-container {\n                    margin: 20px auto;\n                    width: 70%;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                }\n                \n                input[type="text"] {\n                    padding: 15px;\n                    width: 70%;\n                    border-radius: 5px;\n                    border: 1px solid #ccc;\n                    margin-right: 10px;\n                    outline: none;\n                    transition: box-shadow 0.3s;\n                }\n\n                input[type = "text"]:focus {\n                    box-shadow: 0 0 10px rgba(0,0,0,0.3);\n                }\n                \n                button[type="submit"] {\n                    padding: 15px;\n                    background-color: #627254;\n                    color: #fff;\n                    border: none;\n                    border-radius: 5px;\n                    cursor: pointer;\n                }\n                \n                button[type="submit"]:hover {\n                    background-color: #76885B;\n                }\n            </style>\n            <div class="search-container">\n            <input type="text" id="searchInput" placeholder="Search...">\n            <button type="submit" id="searchButton">Search</button>\n        </div>\n        '),
              e
            )
          }
          return (
            (function (t, e) {
              if ('function' != typeof e && null !== e)
                throw new TypeError(
                  'Super expression must either be null or a function',
                )
              ;(t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                e && o(t, e)
            })(r, n),
            (s = r),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  var t = this,
                    e = this.shadowRoot.getElementById('searchInput')
                  e.addEventListener('input', function () {
                    var n = e.value.trim().toLowerCase(),
                      r = new CustomEvent('search', { detail: n })
                    t.dispatchEvent(r)
                  })
                },
              },
            ]) && e(s.prototype, u),
            Object.defineProperty(s, 'prototype', { writable: !1 }),
            s
          )
          var s, u
        })(r(HTMLElement))
        customElements.define('note-search', s)
      },
      106: (t, e, n) => {
        'use strict'
        n.d(e, { A: () => s })
        var r = n(601),
          i = n.n(r),
          o = n(314),
          a = n.n(o)()(i())
        a.push([
          t.id,
          "* {\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Poppins', sans-serif;\n}\n\nhtml {\n  background-color: #c6ebc5;\n}\n",
          '',
        ])
        const s = a
      },
      314: (t) => {
        'use strict'
        t.exports = function (t) {
          var e = []
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = '',
                  r = void 0 !== e[5]
                return (
                  e[4] && (n += '@supports ('.concat(e[4], ') {')),
                  e[2] && (n += '@media '.concat(e[2], ' {')),
                  r &&
                    (n += '@layer'.concat(
                      e[5].length > 0 ? ' '.concat(e[5]) : '',
                      ' {',
                    )),
                  (n += t(e)),
                  r && (n += '}'),
                  e[2] && (n += '}'),
                  e[4] && (n += '}'),
                  n
                )
              }).join('')
            }),
            (e.i = function (t, n, r, i, o) {
              'string' == typeof t && (t = [[null, t, void 0]])
              var a = {}
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var u = this[s][0]
                  null != u && (a[u] = !0)
                }
              for (var c = 0; c < t.length; c++) {
                var l = [].concat(t[c])
                ;(r && a[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = n))
                      : (l[2] = n)),
                  i &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = i))
                      : (l[4] = ''.concat(i))),
                  e.push(l))
              }
            }),
            e
          )
        }
      },
      601: (t) => {
        'use strict'
        t.exports = function (t) {
          return t[1]
        }
      },
      72: (t) => {
        'use strict'
        var e = []
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r
              break
            }
          return n
        }
        function r(t, r) {
          for (var o = {}, a = [], s = 0; s < t.length; s++) {
            var u = t[s],
              c = r.base ? u[0] + r.base : u[0],
              l = o[c] || 0,
              h = ''.concat(c, ' ').concat(l)
            o[c] = l + 1
            var f = n(h),
              p = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              }
            if (-1 !== f) e[f].references++, e[f].updater(p)
            else {
              var d = i(p, r)
              ;(r.byIndex = s),
                e.splice(s, 0, { identifier: h, updater: d, references: 1 })
            }
            a.push(h)
          }
          return a
        }
        function i(t, e) {
          var n = e.domAPI(e)
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return
                n.update((t = e))
              } else n.remove()
            }
          )
        }
        t.exports = function (t, i) {
          var o = r((t = t || []), (i = i || {}))
          return function (t) {
            t = t || []
            for (var a = 0; a < o.length; a++) {
              var s = n(o[a])
              e[s].references--
            }
            for (var u = r(t, i), c = 0; c < o.length; c++) {
              var l = n(o[c])
              0 === e[l].references && (e[l].updater(), e.splice(l, 1))
            }
            o = u
          }
        }
      },
      659: (t) => {
        'use strict'
        var e = {}
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t)
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head
                } catch (t) {
                  n = null
                }
              e[t] = n
            }
            return e[t]
          })(t)
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            )
          r.appendChild(n)
        }
      },
      540: (t) => {
        'use strict'
        t.exports = function (t) {
          var e = document.createElement('style')
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
        }
      },
      56: (t, e, n) => {
        'use strict'
        t.exports = function (t) {
          var e = n.nc
          e && t.setAttribute('nonce', e)
        }
      },
      825: (t) => {
        'use strict'
        t.exports = function (t) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} }
          var e = t.insertStyleElement(t)
          return {
            update: function (n) {
              !(function (t, e, n) {
                var r = ''
                n.supports && (r += '@supports ('.concat(n.supports, ') {')),
                  n.media && (r += '@media '.concat(n.media, ' {'))
                var i = void 0 !== n.layer
                i &&
                  (r += '@layer'.concat(
                    n.layer.length > 0 ? ' '.concat(n.layer) : '',
                    ' {',
                  )),
                  (r += n.css),
                  i && (r += '}'),
                  n.media && (r += '}'),
                  n.supports && (r += '}')
                var o = n.sourceMap
                o &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      ' */',
                    )),
                  e.styleTagTransform(r, t, e.options)
              })(e, t, n)
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1
                t.parentNode.removeChild(t)
              })(e)
            },
          }
        }
      },
      113: (t) => {
        'use strict'
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild)
            e.appendChild(document.createTextNode(t))
          }
        }
      },
    },
    e = {}
  function n(r) {
    var i = e[r]
    if (void 0 !== i) return i.exports
    var o = (e[r] = { id: r, exports: {} })
    return t[r](o, o.exports, n), o.exports
  }
  ;(n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t
    return n.d(e, { a: e }), e
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] })
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      'use strict'
      function t(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          )
        return t
      }
      function e(t, e) {
        ;(t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e)
      }
      n(520), n(747)
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        l,
        h,
        f,
        p,
        d,
        v,
        m,
        y,
        _,
        g,
        b = {
          autoSleep: 120,
          force3D: 'auto',
          nullTargetWarn: 1,
          units: { lineHeight: '' },
        },
        x = { duration: 0.5, overwrite: !1, delay: 0 },
        w = 1e8,
        T = 1e-8,
        O = 2 * Math.PI,
        k = O / 4,
        E = 0,
        S = Math.sqrt,
        P = Math.cos,
        M = Math.sin,
        L = function (t) {
          return 'string' == typeof t
        },
        C = function (t) {
          return 'function' == typeof t
        },
        A = function (t) {
          return 'number' == typeof t
        },
        D = function (t) {
          return void 0 === t
        },
        R = function (t) {
          return 'object' == typeof t
        },
        N = function (t) {
          return !1 !== t
        },
        j = function () {
          return 'undefined' != typeof window
        },
        F = function (t) {
          return C(t) || L(t)
        },
        I =
          ('function' == typeof ArrayBuffer && ArrayBuffer.isView) ||
          function () {},
        z = Array.isArray,
        B = /(?:-?\.?\d|\.)+/gi,
        q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        H = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Y = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        U = /[+-]=-?[.\d]+/,
        G = /[^,'"\[\]\s]+/gi,
        X = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        V = {},
        W = {},
        Q = function (t) {
          return (W = Ot(t, V)) && kn
        },
        J = function (t, e) {
          return console.warn(
            'Invalid property',
            t,
            'set to',
            e,
            'Missing plugin? gsap.registerPlugin()',
          )
        },
        Z = function (t, e) {
          return !e && console.warn(t)
        },
        $ = function (t, e) {
          return (t && (V[t] = e) && W && (W[t] = e)) || V
        },
        K = function () {
          return 0
        },
        tt = { suppressEvents: !0, isStart: !0, kill: !1 },
        et = { suppressEvents: !0, kill: !1 },
        nt = { suppressEvents: !0 },
        rt = {},
        it = [],
        ot = {},
        at = {},
        st = {},
        ut = 30,
        ct = [],
        lt = '',
        ht = function (t) {
          var e,
            n,
            r = t[0]
          if ((R(r) || C(r) || (t = [t]), !(e = (r._gsap || {}).harness))) {
            for (n = ct.length; n-- && !ct[n].targetTest(r); );
            e = ct[n]
          }
          for (n = t.length; n--; )
            (t[n] && (t[n]._gsap || (t[n]._gsap = new Ie(t[n], e)))) ||
              t.splice(n, 1)
          return t
        },
        ft = function (t) {
          return t._gsap || ht(ee(t))[0]._gsap
        },
        pt = function (t, e, n) {
          return (n = t[e]) && C(n)
            ? t[e]()
            : (D(n) && t.getAttribute && t.getAttribute(e)) || n
        },
        dt = function (t, e) {
          return (t = t.split(',')).forEach(e) || t
        },
        vt = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0
        },
        mt = function (t) {
          return Math.round(1e7 * t) / 1e7 || 0
        },
        yt = function (t, e) {
          var n = e.charAt(0),
            r = parseFloat(e.substr(2))
          return (
            (t = parseFloat(t)),
            '+' === n ? t + r : '-' === n ? t - r : '*' === n ? t * r : t / r
          )
        },
        _t = function (t, e) {
          for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; );
          return r < n
        },
        gt = function () {
          var t,
            e,
            n = it.length,
            r = it.slice(0)
          for (ot = {}, it.length = 0, t = 0; t < n; t++)
            (e = r[t]) &&
              e._lazy &&
              (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        bt = function (t, e, n, r) {
          it.length && !i && gt(),
            t.render(e, n, r || (i && e < 0 && (t._initted || t._startAt))),
            it.length && !i && gt()
        },
        xt = function (t) {
          var e = parseFloat(t)
          return (e || 0 === e) && (t + '').match(G).length < 2
            ? e
            : L(t)
              ? t.trim()
              : t
        },
        wt = function (t) {
          return t
        },
        Tt = function (t, e) {
          for (var n in e) n in t || (t[n] = e[n])
          return t
        },
        Ot = function (t, e) {
          for (var n in e) t[n] = e[n]
          return t
        },
        kt = function t(e, n) {
          for (var r in n)
            '__proto__' !== r &&
              'constructor' !== r &&
              'prototype' !== r &&
              (e[r] = R(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r])
          return e
        },
        Et = function (t, e) {
          var n,
            r = {}
          for (n in t) n in e || (r[n] = t[n])
          return r
        },
        St = function (t) {
          var e,
            n = t.parent || a,
            r = t.keyframes
              ? ((e = z(t.keyframes)),
                function (t, n) {
                  for (var r in n)
                    r in t ||
                      ('duration' === r && e) ||
                      'ease' === r ||
                      (t[r] = n[r])
                })
              : Tt
          if (N(t.inherit))
            for (; n; ) r(t, n.vars.defaults), (n = n.parent || n._dp)
          return t
        },
        Pt = function (t, e, n, r, i) {
          void 0 === n && (n = '_first'), void 0 === r && (r = '_last')
          var o,
            a = t[r]
          if (i) for (o = e[i]; a && a[i] > o; ) a = a._prev
          return (
            a
              ? ((e._next = a._next), (a._next = e))
              : ((e._next = t[n]), (t[n] = e)),
            e._next ? (e._next._prev = e) : (t[r] = e),
            (e._prev = a),
            (e.parent = e._dp = t),
            e
          )
        },
        Mt = function (t, e, n, r) {
          void 0 === n && (n = '_first'), void 0 === r && (r = '_last')
          var i = e._prev,
            o = e._next
          i ? (i._next = o) : t[n] === e && (t[n] = o),
            o ? (o._prev = i) : t[r] === e && (t[r] = i),
            (e._next = e._prev = e.parent = null)
        },
        Lt = function (t, e) {
          t.parent &&
            (!e || t.parent.autoRemoveChildren) &&
            t.parent.remove &&
            t.parent.remove(t),
            (t._act = 0)
        },
        Ct = function (t, e) {
          if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; ) (n._dirty = 1), (n = n.parent)
          return t
        },
        At = function (t, e, n, r) {
          return (
            t._startAt &&
            (i
              ? t._startAt.revert(et)
              : (t.vars.immediateRender && !t.vars.autoRevert) ||
                t._startAt.render(e, !0, r))
          )
        },
        Dt = function t(e) {
          return !e || (e._ts && t(e.parent))
        },
        Rt = function (t) {
          return t._repeat
            ? Nt(t._tTime, (t = t.duration() + t._rDelay)) * t
            : 0
        },
        Nt = function (t, e) {
          var n = Math.floor((t /= e))
          return t && n === t ? n - 1 : n
        },
        jt = function (t, e) {
          return (
            (t - e._start) * e._ts +
            (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
          )
        },
        Ft = function (t) {
          return (t._end = mt(
            t._start + (t._tDur / Math.abs(t._ts || t._rts || T) || 0),
          ))
        },
        It = function (t, e) {
          var n = t._dp
          return (
            n &&
              n.smoothChildTiming &&
              t._ts &&
              ((t._start = mt(
                n._time -
                  (t._ts > 0
                    ? e / t._ts
                    : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts),
              )),
              Ft(t),
              n._dirty || Ct(n, t)),
            t
          )
        },
        zt = function (t, e) {
          var n
          if (
            ((e._time ||
              (!e._dur && e._initted) ||
              (e._start < t._time && (e._dur || !e.add))) &&
              ((n = jt(t.rawTime(), e)),
              (!e._dur || Zt(0, e.totalDuration(), n) - e._tTime > T) &&
                e.render(n, !0)),
            Ct(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
          ) {
            if (t._dur < t.duration())
              for (n = t; n._dp; )
                n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp)
            t._zTime = -1e-8
          }
        },
        Bt = function (t, e, n, r) {
          return (
            e.parent && Lt(e),
            (e._start = mt(
              (A(n) ? n : n || t !== a ? Wt(t, n, e) : t._time) + e._delay,
            )),
            (e._end = mt(
              e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
            )),
            Pt(t, e, '_first', '_last', t._sort ? '_start' : 0),
            Ut(e) || (t._recent = e),
            r || zt(t, e),
            t._ts < 0 && It(t, t._tTime),
            t
          )
        },
        qt = function (t, e) {
          return (
            (V.ScrollTrigger || J('scrollTrigger', e)) &&
            V.ScrollTrigger.create(e, t)
          )
        },
        Ht = function (t, e, n, r, o) {
          return (
            Xe(t, e, o),
            t._initted
              ? !n &&
                t._pt &&
                !i &&
                ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
                h !== ke.frame
                ? (it.push(t), (t._lazy = [o, r]), 1)
                : void 0
              : 1
          )
        },
        Yt = function t(e) {
          var n = e.parent
          return (
            n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
          )
        },
        Ut = function (t) {
          var e = t.data
          return 'isFromStart' === e || 'isStart' === e
        },
        Gt = function (t, e, n, r) {
          var i = t._repeat,
            o = mt(e) || 0,
            a = t._tTime / t._tDur
          return (
            a && !r && (t._time *= o / t._dur),
            (t._dur = o),
            (t._tDur = i
              ? i < 0
                ? 1e10
                : mt(o * (i + 1) + t._rDelay * i)
              : o),
            a > 0 && !r && It(t, (t._tTime = t._tDur * a)),
            t.parent && Ft(t),
            n || Ct(t.parent, t),
            t
          )
        },
        Xt = function (t) {
          return t instanceof Be ? Ct(t) : Gt(t, t._dur)
        },
        Vt = { _start: 0, endTime: K, totalDuration: K },
        Wt = function t(e, n, r) {
          var i,
            o,
            a,
            s = e.labels,
            u = e._recent || Vt,
            c = e.duration() >= w ? u.endTime(!1) : e._dur
          return L(n) && (isNaN(n) || n in s)
            ? ((o = n.charAt(0)),
              (a = '%' === n.substr(-1)),
              (i = n.indexOf('=')),
              '<' === o || '>' === o
                ? (i >= 0 && (n = n.replace(/=/, '')),
                  ('<' === o ? u._start : u.endTime(u._repeat >= 0)) +
                    (parseFloat(n.substr(1)) || 0) *
                      (a ? (i < 0 ? u : r).totalDuration() / 100 : 1))
                : i < 0
                  ? (n in s || (s[n] = c), s[n])
                  : ((o = parseFloat(n.charAt(i - 1) + n.substr(i + 1))),
                    a &&
                      r &&
                      (o = (o / 100) * (z(r) ? r[0] : r).totalDuration()),
                    i > 1 ? t(e, n.substr(0, i - 1), r) + o : c + o))
            : null == n
              ? c
              : +n
        },
        Qt = function (t, e, n) {
          var r,
            i,
            o = A(e[1]),
            a = (o ? 2 : 1) + (t < 2 ? 0 : 1),
            s = e[a]
          if ((o && (s.duration = e[1]), (s.parent = n), t)) {
            for (r = s, i = n; i && !('immediateRender' in r); )
              (r = i.vars.defaults || {}), (i = N(i.vars.inherit) && i.parent)
            ;(s.immediateRender = N(r.immediateRender)),
              t < 2 ? (s.runBackwards = 1) : (s.startAt = e[a - 1])
          }
          return new Ze(e[0], s, e[a + 1])
        },
        Jt = function (t, e) {
          return t || 0 === t ? e(t) : e
        },
        Zt = function (t, e, n) {
          return n < t ? t : n > e ? e : n
        },
        $t = function (t, e) {
          return L(t) && (e = X.exec(t)) ? e[1] : ''
        },
        Kt = [].slice,
        te = function (t, e) {
          return (
            t &&
            R(t) &&
            'length' in t &&
            ((!e && !t.length) || (t.length - 1 in t && R(t[0]))) &&
            !t.nodeType &&
            t !== s
          )
        },
        ee = function (t, e, n) {
          return o && !e && o.selector
            ? o.selector(t)
            : !L(t) || n || (!u && Ee())
              ? z(t)
                ? (function (t, e, n) {
                    return (
                      void 0 === n && (n = []),
                      t.forEach(function (t) {
                        var r
                        return (L(t) && !e) || te(t, 1)
                          ? (r = n).push.apply(r, ee(t))
                          : n.push(t)
                      }) || n
                    )
                  })(t, n)
                : te(t)
                  ? Kt.call(t, 0)
                  : t
                    ? [t]
                    : []
              : Kt.call((e || c).querySelectorAll(t), 0)
        },
        ne = function (t) {
          return (
            (t = ee(t)[0] || Z('Invalid scope') || {}),
            function (e) {
              var n = t.current || t.nativeElement || t
              return ee(
                e,
                n.querySelectorAll
                  ? n
                  : n === t
                    ? Z('Invalid scope') || c.createElement('div')
                    : t,
              )
            }
          )
        },
        re = function (t) {
          return t.sort(function () {
            return 0.5 - Math.random()
          })
        },
        ie = function (t) {
          if (C(t)) return t
          var e = R(t) ? t : { each: t },
            n = De(e.ease),
            r = e.from || 0,
            i = parseFloat(e.base) || 0,
            o = {},
            a = r > 0 && r < 1,
            s = isNaN(r) || a,
            u = e.axis,
            c = r,
            l = r
          return (
            L(r)
              ? (c = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
              : !a && s && ((c = r[0]), (l = r[1])),
            function (t, a, h) {
              var f,
                p,
                d,
                v,
                m,
                y,
                _,
                g,
                b,
                x = (h || e).length,
                T = o[x]
              if (!T) {
                if (!(b = 'auto' === e.grid ? 0 : (e.grid || [1, w])[1])) {
                  for (
                    _ = -w;
                    _ < (_ = h[b++].getBoundingClientRect().left) && b < x;

                  );
                  b < x && b--
                }
                for (
                  T = o[x] = [],
                    f = s ? Math.min(b, x) * c - 0.5 : r % b,
                    p = b === w ? 0 : s ? (x * l) / b - 0.5 : (r / b) | 0,
                    _ = 0,
                    g = w,
                    y = 0;
                  y < x;
                  y++
                )
                  (d = (y % b) - f),
                    (v = p - ((y / b) | 0)),
                    (T[y] = m =
                      u ? Math.abs('y' === u ? v : d) : S(d * d + v * v)),
                    m > _ && (_ = m),
                    m < g && (g = m)
                'random' === r && re(T),
                  (T.max = _ - g),
                  (T.min = g),
                  (T.v = x =
                    (parseFloat(e.amount) ||
                      parseFloat(e.each) *
                        (b > x
                          ? x - 1
                          : u
                            ? 'y' === u
                              ? x / b
                              : b
                            : Math.max(b, x / b)) ||
                      0) * ('edges' === r ? -1 : 1)),
                  (T.b = x < 0 ? i - x : i),
                  (T.u = $t(e.amount || e.each) || 0),
                  (n = n && x < 0 ? Ce(n) : n)
              }
              return (
                (x = (T[t] - T.min) / T.max || 0),
                mt(T.b + (n ? n(x) : x) * T.v) + T.u
              )
            }
          )
        },
        oe = function (t) {
          var e = Math.pow(10, ((t + '').split('.')[1] || '').length)
          return function (n) {
            var r = mt(Math.round(parseFloat(n) / t) * t * e)
            return (r - (r % 1)) / e + (A(n) ? 0 : $t(n))
          }
        },
        ae = function (t, e) {
          var n,
            r,
            i = z(t)
          return (
            !i &&
              R(t) &&
              ((n = i = t.radius || w),
              t.values
                ? ((t = ee(t.values)), (r = !A(t[0])) && (n *= n))
                : (t = oe(t.increment))),
            Jt(
              e,
              i
                ? C(t)
                  ? function (e) {
                      return (r = t(e)), Math.abs(r - e) <= n ? r : e
                    }
                  : function (e) {
                      for (
                        var i,
                          o,
                          a = parseFloat(r ? e.x : e),
                          s = parseFloat(r ? e.y : 0),
                          u = w,
                          c = 0,
                          l = t.length;
                        l--;

                      )
                        (i = r
                          ? (i = t[l].x - a) * i + (o = t[l].y - s) * o
                          : Math.abs(t[l] - a)) < u && ((u = i), (c = l))
                      return (
                        (c = !n || u <= n ? t[c] : e),
                        r || c === e || A(e) ? c : c + $t(e)
                      )
                    }
                : oe(t),
            )
          )
        },
        se = function (t, e, n, r) {
          return Jt(z(t) ? !e : !0 === n ? !!(n = 0) : !r, function () {
            return z(t)
              ? t[~~(Math.random() * t.length)]
              : (n = n || 1e-5) &&
                  (r = n < 1 ? Math.pow(10, (n + '').length - 2) : 1) &&
                  Math.floor(
                    Math.round(
                      (t - n / 2 + Math.random() * (e - t + 0.99 * n)) / n,
                    ) *
                      n *
                      r,
                  ) / r
          })
        },
        ue = function (t, e, n) {
          return Jt(n, function (n) {
            return t[~~e(n)]
          })
        },
        ce = function (t) {
          for (var e, n, r, i, o = 0, a = ''; ~(e = t.indexOf('random(', o)); )
            (r = t.indexOf(')', e)),
              (i = '[' === t.charAt(e + 7)),
              (n = t.substr(e + 7, r - e - 7).match(i ? G : B)),
              (a +=
                t.substr(o, e - o) +
                se(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5)),
              (o = r + 1)
          return a + t.substr(o, t.length - o)
        },
        le = function (t, e, n, r, i) {
          var o = e - t,
            a = r - n
          return Jt(i, function (e) {
            return n + (((e - t) / o) * a || 0)
          })
        },
        he = function (t, e, n) {
          var r,
            i,
            o,
            a = t.labels,
            s = w
          for (r in a)
            (i = a[r] - e) < 0 == !!n &&
              i &&
              s > (i = Math.abs(i)) &&
              ((o = r), (s = i))
          return o
        },
        fe = function (t, e, n) {
          var r,
            i,
            a,
            s = t.vars,
            u = s[e],
            c = o,
            l = t._ctx
          if (u)
            return (
              (r = s[e + 'Params']),
              (i = s.callbackScope || t),
              n && it.length && gt(),
              l && (o = l),
              (a = r ? u.apply(i, r) : u.call(i)),
              (o = c),
              a
            )
        },
        pe = function (t) {
          return (
            Lt(t),
            t.scrollTrigger && t.scrollTrigger.kill(!!i),
            t.progress() < 1 && fe(t, 'onInterrupt'),
            t
          )
        },
        de = [],
        ve = function (t) {
          if (t)
            if (((t = (!t.name && t.default) || t), j() || t.headless)) {
              var e = t.name,
                n = C(t),
                r =
                  e && !n && t.init
                    ? function () {
                        this._props = []
                      }
                    : t,
                i = {
                  init: K,
                  render: sn,
                  add: Ue,
                  kill: cn,
                  modifier: un,
                  rawVars: 0,
                },
                o = {
                  targetTest: 0,
                  get: 0,
                  getSetter: nn,
                  aliases: {},
                  register: 0,
                }
              if ((Ee(), t !== r)) {
                if (at[e]) return
                Tt(r, Tt(Et(t, i), o)),
                  Ot(r.prototype, Ot(i, Et(t, o))),
                  (at[(r.prop = e)] = r),
                  t.targetTest && (ct.push(r), (rt[e] = 1)),
                  (e =
                    ('css' === e
                      ? 'CSS'
                      : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin')
              }
              $(e, r), t.register && t.register(kn, r, fn)
            } else de.push(t)
        },
        me = 255,
        ye = {
          aqua: [0, me, me],
          lime: [0, me, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, me],
          navy: [0, 0, 128],
          white: [me, me, me],
          olive: [128, 128, 0],
          yellow: [me, me, 0],
          orange: [me, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [me, 0, 0],
          pink: [me, 192, 203],
          cyan: [0, me, me],
          transparent: [me, me, me, 0],
        },
        _e = function (t, e, n) {
          return (
            ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
              ? e + (n - e) * t * 6
              : t < 0.5
                ? n
                : 3 * t < 2
                  ? e + (n - e) * (2 / 3 - t) * 6
                  : e) *
              me +
              0.5) |
            0
          )
        },
        ge = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            h,
            f,
            p = t ? (A(t) ? [t >> 16, (t >> 8) & me, t & me] : 0) : ye.black
          if (!p) {
            if (
              (',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t])
            )
              p = ye[t]
            else if ('#' === t.charAt(0)) {
              if (
                (t.length < 6 &&
                  ((r = t.charAt(1)),
                  (i = t.charAt(2)),
                  (o = t.charAt(3)),
                  (t =
                    '#' +
                    r +
                    r +
                    i +
                    i +
                    o +
                    o +
                    (5 === t.length ? t.charAt(4) + t.charAt(4) : ''))),
                9 === t.length)
              )
                return [
                  (p = parseInt(t.substr(1, 6), 16)) >> 16,
                  (p >> 8) & me,
                  p & me,
                  parseInt(t.substr(7), 16) / 255,
                ]
              p = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & me, t & me]
            } else if ('hsl' === t.substr(0, 3))
              if (((p = f = t.match(B)), e)) {
                if (~t.indexOf('='))
                  return (p = t.match(q)), n && p.length < 4 && (p[3] = 1), p
              } else
                (a = (+p[0] % 360) / 360),
                  (s = +p[1] / 100),
                  (r =
                    2 * (u = +p[2] / 100) -
                    (i = u <= 0.5 ? u * (s + 1) : u + s - u * s)),
                  p.length > 3 && (p[3] *= 1),
                  (p[0] = _e(a + 1 / 3, r, i)),
                  (p[1] = _e(a, r, i)),
                  (p[2] = _e(a - 1 / 3, r, i))
            else p = t.match(B) || ye.transparent
            p = p.map(Number)
          }
          return (
            e &&
              !f &&
              ((r = p[0] / me),
              (i = p[1] / me),
              (o = p[2] / me),
              (u = ((c = Math.max(r, i, o)) + (l = Math.min(r, i, o))) / 2),
              c === l
                ? (a = s = 0)
                : ((h = c - l),
                  (s = u > 0.5 ? h / (2 - c - l) : h / (c + l)),
                  (a =
                    c === r
                      ? (i - o) / h + (i < o ? 6 : 0)
                      : c === i
                        ? (o - r) / h + 2
                        : (r - i) / h + 4),
                  (a *= 60)),
              (p[0] = ~~(a + 0.5)),
              (p[1] = ~~(100 * s + 0.5)),
              (p[2] = ~~(100 * u + 0.5))),
            n && p.length < 4 && (p[3] = 1),
            p
          )
        },
        be = function (t) {
          var e = [],
            n = [],
            r = -1
          return (
            t.split(we).forEach(function (t) {
              var i = t.match(H) || []
              e.push.apply(e, i), n.push((r += i.length + 1))
            }),
            (e.c = n),
            e
          )
        },
        xe = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s = '',
            u = (t + s).match(we),
            c = e ? 'hsla(' : 'rgba(',
            l = 0
          if (!u) return t
          if (
            ((u = u.map(function (t) {
              return (
                (t = ge(t, e, 1)) &&
                c +
                  (e
                    ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3]
                    : t.join(',')) +
                  ')'
              )
            })),
            n && ((o = be(t)), (r = n.c).join(s) !== o.c.join(s)))
          )
            for (a = (i = t.replace(we, '1').split(H)).length - 1; l < a; l++)
              s +=
                i[l] +
                (~r.indexOf(l)
                  ? u.shift() || c + '0,0,0,0)'
                  : (o.length ? o : u.length ? u : n).shift())
          if (!i)
            for (a = (i = t.split(we)).length - 1; l < a; l++) s += i[l] + u[l]
          return s + i[a]
        },
        we = (function () {
          var t,
            e =
              '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b'
          for (t in ye) e += '|' + t + '\\b'
          return new RegExp(e + ')', 'gi')
        })(),
        Te = /hsl[a]?\(/,
        Oe = function (t) {
          var e,
            n = t.join(' ')
          if (((we.lastIndex = 0), we.test(n)))
            return (
              (e = Te.test(n)),
              (t[1] = xe(t[1], e)),
              (t[0] = xe(t[0], e, be(t[1]))),
              !0
            )
        },
        ke = (function () {
          var t,
            e,
            n,
            r,
            i,
            o,
            a = Date.now,
            h = 500,
            f = 33,
            d = a(),
            v = d,
            m = 1e3 / 240,
            y = m,
            _ = [],
            g = function n(s) {
              var u,
                c,
                l,
                p,
                g = a() - v,
                b = !0 === s
              if (
                ((g > h || g < 0) && (d += g - f),
                ((u = (l = (v += g) - d) - y) > 0 || b) &&
                  ((p = ++r.frame),
                  (i = l - 1e3 * r.time),
                  (r.time = l /= 1e3),
                  (y += u + (u >= m ? 4 : m - u)),
                  (c = 1)),
                b || (t = e(n)),
                c)
              )
                for (o = 0; o < _.length; o++) _[o](l, i, p, s)
            }
          return (r = {
            time: 0,
            frame: 0,
            tick: function () {
              g(!0)
            },
            deltaRatio: function (t) {
              return i / (1e3 / (t || 60))
            },
            wake: function () {
              l &&
                (!u &&
                  j() &&
                  ((s = u = window),
                  (c = s.document || {}),
                  (V.gsap = kn),
                  (s.gsapVersions || (s.gsapVersions = [])).push(kn.version),
                  Q(W || s.GreenSockGlobals || (!s.gsap && s) || {}),
                  de.forEach(ve)),
                (n =
                  'undefined' != typeof requestAnimationFrame &&
                  requestAnimationFrame),
                t && r.sleep(),
                (e =
                  n ||
                  function (t) {
                    return setTimeout(t, (y - 1e3 * r.time + 1) | 0)
                  }),
                (p = 1),
                g(2))
            },
            sleep: function () {
              ;(n ? cancelAnimationFrame : clearTimeout)(t), (p = 0), (e = K)
            },
            lagSmoothing: function (t, e) {
              ;(h = t || 1 / 0), (f = Math.min(e || 33, h))
            },
            fps: function (t) {
              ;(m = 1e3 / (t || 240)), (y = 1e3 * r.time + m)
            },
            add: function (t, e, n) {
              var i = e
                ? function (e, n, o, a) {
                    t(e, n, o, a), r.remove(i)
                  }
                : t
              return r.remove(t), _[n ? 'unshift' : 'push'](i), Ee(), i
            },
            remove: function (t, e) {
              ~(e = _.indexOf(t)) && _.splice(e, 1) && o >= e && o--
            },
            _listeners: _,
          })
        })(),
        Ee = function () {
          return !p && ke.wake()
        },
        Se = {},
        Pe = /^[\d.\-M][\d.\-,\s]/,
        Me = /["']/g,
        Le = function (t) {
          for (
            var e,
              n,
              r,
              i = {},
              o = t.substr(1, t.length - 3).split(':'),
              a = o[0],
              s = 1,
              u = o.length;
            s < u;
            s++
          )
            (n = o[s]),
              (e = s !== u - 1 ? n.lastIndexOf(',') : n.length),
              (r = n.substr(0, e)),
              (i[a] = isNaN(r) ? r.replace(Me, '').trim() : +r),
              (a = n.substr(e + 1).trim())
          return i
        },
        Ce = function (t) {
          return function (e) {
            return 1 - t(1 - e)
          }
        },
        Ae = function t(e, n) {
          for (var r, i = e._first; i; )
            i instanceof Be
              ? t(i, n)
              : !i.vars.yoyoEase ||
                (i._yoyo && i._repeat) ||
                i._yoyo === n ||
                (i.timeline
                  ? t(i.timeline, n)
                  : ((r = i._ease),
                    (i._ease = i._yEase),
                    (i._yEase = r),
                    (i._yoyo = n))),
              (i = i._next)
        },
        De = function (t, e) {
          return (
            (t &&
              (C(t)
                ? t
                : Se[t] ||
                  (function (t) {
                    var e,
                      n,
                      r,
                      i,
                      o = (t + '').split('('),
                      a = Se[o[0]]
                    return a && o.length > 1 && a.config
                      ? a.config.apply(
                          null,
                          ~t.indexOf('{')
                            ? [Le(o[1])]
                            : ((e = t),
                              (n = e.indexOf('(') + 1),
                              (r = e.indexOf(')')),
                              (i = e.indexOf('(', n)),
                              e.substring(
                                n,
                                ~i && i < r ? e.indexOf(')', r + 1) : r,
                              ))
                                .split(',')
                                .map(xt),
                        )
                      : Se._CE && Pe.test(t)
                        ? Se._CE('', t)
                        : a
                  })(t))) ||
            e
          )
        },
        Re = function (t, e, n, r) {
          void 0 === n &&
            (n = function (t) {
              return 1 - e(1 - t)
            }),
            void 0 === r &&
              (r = function (t) {
                return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
              })
          var i,
            o = { easeIn: e, easeOut: n, easeInOut: r }
          return (
            dt(t, function (t) {
              for (var e in ((Se[t] = V[t] = o),
              (Se[(i = t.toLowerCase())] = n),
              o))
                Se[
                  i +
                    ('easeIn' === e
                      ? '.in'
                      : 'easeOut' === e
                        ? '.out'
                        : '.inOut')
                ] = Se[t + '.' + e] = o[e]
            }),
            o
          )
        },
        Ne = function (t) {
          return function (e) {
            return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2
          }
        },
        je = function t(e, n, r) {
          var i = n >= 1 ? n : 1,
            o = (r || (e ? 0.3 : 0.45)) / (n < 1 ? n : 1),
            a = (o / O) * (Math.asin(1 / i) || 0),
            s = function (t) {
              return 1 === t ? 1 : i * Math.pow(2, -10 * t) * M((t - a) * o) + 1
            },
            u =
              'out' === e
                ? s
                : 'in' === e
                  ? function (t) {
                      return 1 - s(1 - t)
                    }
                  : Ne(s)
          return (
            (o = O / o),
            (u.config = function (n, r) {
              return t(e, n, r)
            }),
            u
          )
        },
        Fe = function t(e, n) {
          void 0 === n && (n = 1.70158)
          var r = function (t) {
              return t ? --t * t * ((n + 1) * t + n) + 1 : 0
            },
            i =
              'out' === e
                ? r
                : 'in' === e
                  ? function (t) {
                      return 1 - r(1 - t)
                    }
                  : Ne(r)
          return (
            (i.config = function (n) {
              return t(e, n)
            }),
            i
          )
        }
      dt('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
        var n = e < 5 ? e + 1 : e
        Re(
          t + ',Power' + (n - 1),
          e
            ? function (t) {
                return Math.pow(t, n)
              }
            : function (t) {
                return t
              },
          function (t) {
            return 1 - Math.pow(1 - t, n)
          },
          function (t) {
            return t < 0.5
              ? Math.pow(2 * t, n) / 2
              : 1 - Math.pow(2 * (1 - t), n) / 2
          },
        )
      }),
        (Se.Linear.easeNone = Se.none = Se.Linear.easeIn),
        Re('Elastic', je('in'), je('out'), je()),
        (d = 7.5625),
        (y = 2 * (m = 1 / (v = 2.75))),
        (_ = 2.5 * m),
        Re(
          'Bounce',
          function (t) {
            return 1 - g(1 - t)
          },
          (g = function (t) {
            return t < m
              ? d * t * t
              : t < y
                ? d * Math.pow(t - 1.5 / v, 2) + 0.75
                : t < _
                  ? d * (t -= 2.25 / v) * t + 0.9375
                  : d * Math.pow(t - 2.625 / v, 2) + 0.984375
          }),
        ),
        Re('Expo', function (t) {
          return t ? Math.pow(2, 10 * (t - 1)) : 0
        }),
        Re('Circ', function (t) {
          return -(S(1 - t * t) - 1)
        }),
        Re('Sine', function (t) {
          return 1 === t ? 1 : 1 - P(t * k)
        }),
        Re('Back', Fe('in'), Fe('out'), Fe()),
        (Se.SteppedEase =
          Se.steps =
          V.SteppedEase =
            {
              config: function (t, e) {
                void 0 === t && (t = 1)
                var n = 1 / t,
                  r = t + (e ? 0 : 1),
                  i = e ? 1 : 0
                return function (t) {
                  return (((r * Zt(0, 0.99999999, t)) | 0) + i) * n
                }
              },
            }),
        (x.ease = Se['quad.out']),
        dt(
          'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
          function (t) {
            return (lt += t + ',' + t + 'Params,')
          },
        )
      var Ie = function (t, e) {
          ;(this.id = E++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : pt),
            (this.set = e ? e.getSetter : nn)
        },
        ze = (function () {
          function t(t) {
            ;(this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Gt(this, +t.duration, 1, 1),
              (this.data = t.data),
              o && ((this._ctx = o), o.data.push(this)),
              p || ke.wake()
          }
          var e = t.prototype
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0
                      ? t + (t + this._rDelay) * this._repeat
                      : t,
                  )
                : this.totalDuration() && this._dur
            }),
            (e.totalDuration = function (t) {
              return arguments.length
                ? ((this._dirty = 0),
                  Gt(
                    this,
                    this._repeat < 0
                      ? t
                      : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                  ))
                : this._tDur
            }),
            (e.totalTime = function (t, e) {
              if ((Ee(), !arguments.length)) return this._tTime
              var n = this._dp
              if (n && n.smoothChildTiming && this._ts) {
                for (
                  It(this, t), !n._dp || n.parent || zt(n, this);
                  n && n.parent;

                )
                  n.parent._time !==
                    n._start +
                      (n._ts >= 0
                        ? n._tTime / n._ts
                        : (n.totalDuration() - n._tTime) / -n._ts) &&
                    n.totalTime(n._tTime, !0),
                    (n = n.parent)
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  Bt(this._dp, this, this._start - this._delay)
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === T) ||
                  (!t && !this._initted && (this.add || this._ptLookup))) &&
                  (this._ts || (this._pTime = t), bt(this, t, e)),
                this
              )
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Rt(this)) %
                      (this._dur + this._rDelay) || (t ? this._dur : 0),
                    e,
                  )
                : this._time
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                  ? Math.min(1, this._tTime / this._tDur)
                  : this.rawTime() > 0
                    ? 1
                    : 0
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Rt(this),
                    e,
                  )
                : this.duration()
                  ? Math.min(1, this._time / this._dur)
                  : this.rawTime() > 0
                    ? 1
                    : 0
            }),
            (e.iteration = function (t, e) {
              var n = this.duration() + this._rDelay
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * n, e)
                : this._repeat
                  ? Nt(this._tTime, n) + 1
                  : 1
            }),
            (e.timeScale = function (t, e) {
              if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts
              if (this._rts === t) return this
              var n =
                this.parent && this._ts
                  ? jt(this.parent._time, this)
                  : this._tTime
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
                this.totalTime(
                  Zt(-Math.abs(this._delay), this._tDur, n),
                  !1 !== e,
                ),
                Ft(this),
                (function (t) {
                  for (var e = t.parent; e && e.parent; )
                    (e._dirty = 1), e.totalDuration(), (e = e.parent)
                  return t
                })(this)
              )
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (Ee(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            Math.abs(this._zTime) !== T &&
                            (this._tTime -= T),
                        ))),
                  this)
                : this._ps
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t
                var e = this.parent || this._dp
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    Bt(e, this, t - this._delay),
                  this
                )
              }
              return this._start
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (N(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts || 1)
              )
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                    ? jt(e.rawTime(t), this)
                    : this._tTime
                : this._tTime
            }),
            (e.revert = function (t) {
              void 0 === t && (t = nt)
              var e = i
              return (
                (i = t),
                (this._initted || this._startAt) &&
                  (this.timeline && this.timeline.revert(t),
                  this.totalTime(-0.01, t.suppressEvents)),
                'nested' !== this.data && !1 !== t.kill && this.kill(),
                (i = e),
                this
              )
            }),
            (e.globalTime = function (t) {
              for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
                (n = e._start + n / (Math.abs(e._ts) || 1)), (e = e._dp)
              return !this.parent && this._sat ? this._sat.globalTime(t) : n
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t === 1 / 0 ? -2 : t), Xt(this))
                : -2 === this._repeat
                  ? 1 / 0
                  : this._repeat
            }),
            (e.repeatDelay = function (t) {
              if (arguments.length) {
                var e = this._time
                return (this._rDelay = t), Xt(this), e ? this.time(e) : this
              }
              return this._rDelay
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Wt(this, t), N(e))
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, N(e))
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              )
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0)
            }),
            (e.resume = function () {
              return this.paused(!1)
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                  this)
                : this._rts < 0
            }),
            (e.invalidate = function () {
              return (
                (this._initted = this._act = 0), (this._zTime = -1e-8), this
              )
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                n = this._start
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= n &&
                  t < this.endTime(!0) - T
                )
              )
            }),
            (e.eventCallback = function (t, e, n) {
              var r = this.vars
              return arguments.length > 1
                ? (e
                    ? ((r[t] = e),
                      n && (r[t + 'Params'] = n),
                      'onUpdate' === t && (this._onUpdate = e))
                    : delete r[t],
                  this)
                : r[t]
            }),
            (e.then = function (t) {
              var e = this
              return new Promise(function (n) {
                var r = C(t) ? t : wt,
                  i = function () {
                    var t = e.then
                    ;(e.then = null),
                      C(r) && (r = r(e)) && (r.then || r === e) && (e.then = t),
                      n(r),
                      (e.then = t)
                  }
                ;(e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? i()
                  : (e._prom = i)
              })
            }),
            (e.kill = function () {
              pe(this)
            }),
            t
          )
        })()
      Tt(ze.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1,
      })
      var Be = (function (n) {
        function r(e, r) {
          var i
          return (
            void 0 === e && (e = {}),
            ((i = n.call(this, e) || this).labels = {}),
            (i.smoothChildTiming = !!e.smoothChildTiming),
            (i.autoRemoveChildren = !!e.autoRemoveChildren),
            (i._sort = N(e.sortChildren)),
            a && Bt(e.parent || a, t(i), r),
            e.reversed && i.reverse(),
            e.paused && i.paused(!0),
            e.scrollTrigger && qt(t(i), e.scrollTrigger),
            i
          )
        }
        e(r, n)
        var o = r.prototype
        return (
          (o.to = function (t, e, n) {
            return Qt(0, arguments, this), this
          }),
          (o.from = function (t, e, n) {
            return Qt(1, arguments, this), this
          }),
          (o.fromTo = function (t, e, n, r) {
            return Qt(2, arguments, this), this
          }),
          (o.set = function (t, e, n) {
            return (
              (e.duration = 0),
              (e.parent = this),
              St(e).repeatDelay || (e.repeat = 0),
              (e.immediateRender = !!e.immediateRender),
              new Ze(t, e, Wt(this, n), 1),
              this
            )
          }),
          (o.call = function (t, e, n) {
            return Bt(this, Ze.delayedCall(0, t, e), n)
          }),
          (o.staggerTo = function (t, e, n, r, i, o, a) {
            return (
              (n.duration = e),
              (n.stagger = n.stagger || r),
              (n.onComplete = o),
              (n.onCompleteParams = a),
              (n.parent = this),
              new Ze(t, n, Wt(this, i)),
              this
            )
          }),
          (o.staggerFrom = function (t, e, n, r, i, o, a) {
            return (
              (n.runBackwards = 1),
              (St(n).immediateRender = N(n.immediateRender)),
              this.staggerTo(t, e, n, r, i, o, a)
            )
          }),
          (o.staggerFromTo = function (t, e, n, r, i, o, a, s) {
            return (
              (r.startAt = n),
              (St(r).immediateRender = N(r.immediateRender)),
              this.staggerTo(t, e, r, i, o, a, s)
            )
          }),
          (o.render = function (t, e, n) {
            var r,
              o,
              s,
              u,
              c,
              l,
              h,
              f,
              p,
              d,
              v,
              m,
              y = this._time,
              _ = this._dirty ? this.totalDuration() : this._tDur,
              g = this._dur,
              b = t <= 0 ? 0 : mt(t),
              x = this._zTime < 0 != t < 0 && (this._initted || !g)
            if (
              (this !== a && b > _ && t >= 0 && (b = _),
              b !== this._tTime || n || x)
            ) {
              if (
                (y !== this._time &&
                  g &&
                  ((b += this._time - y), (t += this._time - y)),
                (r = b),
                (p = this._start),
                (l = !(f = this._ts)),
                x && (g || (y = this._zTime), (t || !e) && (this._zTime = t)),
                this._repeat)
              ) {
                if (
                  ((v = this._yoyo),
                  (c = g + this._rDelay),
                  this._repeat < -1 && t < 0)
                )
                  return this.totalTime(100 * c + t, e, n)
                if (
                  ((r = mt(b % c)),
                  b === _
                    ? ((u = this._repeat), (r = g))
                    : ((u = ~~(b / c)) && u === b / c && ((r = g), u--),
                      r > g && (r = g)),
                  (d = Nt(this._tTime, c)),
                  !y &&
                    this._tTime &&
                    d !== u &&
                    this._tTime - d * c - this._dur <= 0 &&
                    (d = u),
                  v && 1 & u && ((r = g - r), (m = 1)),
                  u !== d && !this._lock)
                ) {
                  var w = v && 1 & d,
                    O = w === (v && 1 & u)
                  if (
                    (u < d && (w = !w),
                    (y = w ? 0 : b % g ? g : b),
                    (this._lock = 1),
                    (this.render(y || (m ? 0 : mt(u * c)), e, !g)._lock = 0),
                    (this._tTime = b),
                    !e && this.parent && fe(this, 'onRepeat'),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    (y && y !== this._time) ||
                      l !== !this._ts ||
                      (this.vars.onRepeat && !this.parent && !this._act))
                  )
                    return this
                  if (
                    ((g = this._dur),
                    (_ = this._tDur),
                    O &&
                      ((this._lock = 2),
                      (y = w ? g : -1e-4),
                      this.render(y, !0),
                      this.vars.repeatRefresh && !m && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !l)
                  )
                    return this
                  Ae(this, m)
                }
              }
              if (
                (this._hasPause &&
                  !this._forcing &&
                  this._lock < 2 &&
                  ((h = (function (t, e, n) {
                    var r
                    if (n > e)
                      for (r = t._first; r && r._start <= n; ) {
                        if ('isPause' === r.data && r._start > e) return r
                        r = r._next
                      }
                    else
                      for (r = t._last; r && r._start >= n; ) {
                        if ('isPause' === r.data && r._start < e) return r
                        r = r._prev
                      }
                  })(this, mt(y), mt(r))),
                  h && (b -= r - (r = h._start))),
                (this._tTime = b),
                (this._time = r),
                (this._act = !f),
                this._initted ||
                  ((this._onUpdate = this.vars.onUpdate),
                  (this._initted = 1),
                  (this._zTime = t),
                  (y = 0)),
                !y && r && !e && !u && (fe(this, 'onStart'), this._tTime !== b))
              )
                return this
              if (r >= y && t >= 0)
                for (o = this._first; o; ) {
                  if (
                    ((s = o._next),
                    (o._act || r >= o._start) && o._ts && h !== o)
                  ) {
                    if (o.parent !== this) return this.render(t, e, n)
                    if (
                      (o.render(
                        o._ts > 0
                          ? (r - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (r - o._start) * o._ts,
                        e,
                        n,
                      ),
                      r !== this._time || (!this._ts && !l))
                    ) {
                      ;(h = 0), s && (b += this._zTime = -1e-8)
                      break
                    }
                  }
                  o = s
                }
              else {
                o = this._last
                for (var k = t < 0 ? t : r; o; ) {
                  if (
                    ((s = o._prev), (o._act || k <= o._end) && o._ts && h !== o)
                  ) {
                    if (o.parent !== this) return this.render(t, e, n)
                    if (
                      (o.render(
                        o._ts > 0
                          ? (k - o._start) * o._ts
                          : (o._dirty ? o.totalDuration() : o._tDur) +
                              (k - o._start) * o._ts,
                        e,
                        n || (i && (o._initted || o._startAt)),
                      ),
                      r !== this._time || (!this._ts && !l))
                    ) {
                      ;(h = 0), s && (b += this._zTime = k ? -1e-8 : T)
                      break
                    }
                  }
                  o = s
                }
              }
              if (
                h &&
                !e &&
                (this.pause(),
                (h.render(r >= y ? 0 : -1e-8)._zTime = r >= y ? 1 : -1),
                this._ts)
              )
                return (this._start = p), Ft(this), this.render(t, e, n)
              this._onUpdate && !e && fe(this, 'onUpdate', !0),
                ((b === _ && this._tTime >= this.totalDuration()) ||
                  (!b && y)) &&
                  ((p !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                    this._lock ||
                    ((t || !g) &&
                      ((b === _ && this._ts > 0) || (!b && this._ts < 0)) &&
                      Lt(this, 1),
                    e ||
                      (t < 0 && !y) ||
                      (!b && !y && _) ||
                      (fe(
                        this,
                        b === _ && t >= 0 ? 'onComplete' : 'onReverseComplete',
                        !0,
                      ),
                      this._prom &&
                        !(b < _ && this.timeScale() > 0) &&
                        this._prom())))
            }
            return this
          }),
          (o.add = function (t, e) {
            var n = this
            if ((A(e) || (e = Wt(this, e, t)), !(t instanceof ze))) {
              if (z(t))
                return (
                  t.forEach(function (t) {
                    return n.add(t, e)
                  }),
                  this
                )
              if (L(t)) return this.addLabel(t, e)
              if (!C(t)) return this
              t = Ze.delayedCall(0, t)
            }
            return this !== t ? Bt(this, t, e) : this
          }),
          (o.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === n && (n = !0),
              void 0 === r && (r = -w)
            for (var i = [], o = this._first; o; )
              o._start >= r &&
                (o instanceof Ze
                  ? e && i.push(o)
                  : (n && i.push(o),
                    t && i.push.apply(i, o.getChildren(!0, e, n)))),
                (o = o._next)
            return i
          }),
          (o.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
              if (e[n].vars.id === t) return e[n]
          }),
          (o.remove = function (t) {
            return L(t)
              ? this.removeLabel(t)
              : C(t)
                ? this.killTweensOf(t)
                : (Mt(this, t),
                  t === this._recent && (this._recent = this._last),
                  Ct(this))
          }),
          (o.totalTime = function (t, e) {
            return arguments.length
              ? ((this._forcing = 1),
                !this._dp &&
                  this._ts &&
                  (this._start = mt(
                    ke.time -
                      (this._ts > 0
                        ? t / this._ts
                        : (this.totalDuration() - t) / -this._ts),
                  )),
                n.prototype.totalTime.call(this, t, e),
                (this._forcing = 0),
                this)
              : this._tTime
          }),
          (o.addLabel = function (t, e) {
            return (this.labels[t] = Wt(this, e)), this
          }),
          (o.removeLabel = function (t) {
            return delete this.labels[t], this
          }),
          (o.addPause = function (t, e, n) {
            var r = Ze.delayedCall(0, e || K, n)
            return (
              (r.data = 'isPause'),
              (this._hasPause = 1),
              Bt(this, r, Wt(this, t))
            )
          }),
          (o.removePause = function (t) {
            var e = this._first
            for (t = Wt(this, t); e; )
              e._start === t && 'isPause' === e.data && Lt(e), (e = e._next)
          }),
          (o.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--; )
              qe !== r[i] && r[i].kill(t, e)
            return this
          }),
          (o.getTweensOf = function (t, e) {
            for (var n, r = [], i = ee(t), o = this._first, a = A(e); o; )
              o instanceof Ze
                ? _t(o._targets, i) &&
                  (a
                    ? (!qe || (o._initted && o._ts)) &&
                      o.globalTime(0) <= e &&
                      o.globalTime(o.totalDuration()) > e
                    : !e || o.isActive()) &&
                  r.push(o)
                : (n = o.getTweensOf(i, e)).length && r.push.apply(r, n),
                (o = o._next)
            return r
          }),
          (o.tweenTo = function (t, e) {
            e = e || {}
            var n,
              r = this,
              i = Wt(r, t),
              o = e,
              a = o.startAt,
              s = o.onStart,
              u = o.onStartParams,
              c = o.immediateRender,
              l = Ze.to(
                r,
                Tt(
                  {
                    ease: e.ease || 'none',
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: 'auto',
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (a && 'time' in a ? a.time : r._time)) /
                          r.timeScale(),
                      ) ||
                      T,
                    onStart: function () {
                      if ((r.pause(), !n)) {
                        var t =
                          e.duration ||
                          Math.abs(
                            (i - (a && 'time' in a ? a.time : r._time)) /
                              r.timeScale(),
                          )
                        l._dur !== t && Gt(l, t, 0, 1).render(l._time, !0, !0),
                          (n = 1)
                      }
                      s && s.apply(l, u || [])
                    },
                  },
                  e,
                ),
              )
            return c ? l.render(0) : l
          }),
          (o.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, Tt({ startAt: { time: Wt(this, t) } }, n))
          }),
          (o.recent = function () {
            return this._recent
          }),
          (o.nextLabel = function (t) {
            return void 0 === t && (t = this._time), he(this, Wt(this, t))
          }),
          (o.previousLabel = function (t) {
            return void 0 === t && (t = this._time), he(this, Wt(this, t), 1)
          }),
          (o.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.previousLabel(this._time + T)
          }),
          (o.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0)
            for (var r, i = this._first, o = this.labels; i; )
              i._start >= n && ((i._start += t), (i._end += t)), (i = i._next)
            if (e) for (r in o) o[r] >= n && (o[r] += t)
            return Ct(this)
          }),
          (o.invalidate = function (t) {
            var e = this._first
            for (this._lock = 0; e; ) e.invalidate(t), (e = e._next)
            return n.prototype.invalidate.call(this, t)
          }),
          (o.clear = function (t) {
            void 0 === t && (t = !0)
            for (var e, n = this._first; n; )
              (e = n._next), this.remove(n), (n = e)
            return (
              this._dp && (this._time = this._tTime = this._pTime = 0),
              t && (this.labels = {}),
              Ct(this)
            )
          }),
          (o.totalDuration = function (t) {
            var e,
              n,
              r,
              i = 0,
              o = this,
              s = o._last,
              u = w
            if (arguments.length)
              return o.timeScale(
                (o._repeat < 0 ? o.duration() : o.totalDuration()) /
                  (o.reversed() ? -t : t),
              )
            if (o._dirty) {
              for (r = o.parent; s; )
                (e = s._prev),
                  s._dirty && s.totalDuration(),
                  (n = s._start) > u && o._sort && s._ts && !o._lock
                    ? ((o._lock = 1), (Bt(o, s, n - s._delay, 1)._lock = 0))
                    : (u = n),
                  n < 0 &&
                    s._ts &&
                    ((i -= n),
                    ((!r && !o._dp) || (r && r.smoothChildTiming)) &&
                      ((o._start += n / o._ts),
                      (o._time -= n),
                      (o._tTime -= n)),
                    o.shiftChildren(-n, !1, -Infinity),
                    (u = 0)),
                  s._end > i && s._ts && (i = s._end),
                  (s = e)
              Gt(o, o === a && o._time > i ? o._time : i, 1, 1), (o._dirty = 0)
            }
            return o._tDur
          }),
          (r.updateRoot = function (t) {
            if ((a._ts && (bt(a, jt(t, a)), (h = ke.frame)), ke.frame >= ut)) {
              ut += b.autoSleep || 120
              var e = a._first
              if ((!e || !e._ts) && b.autoSleep && ke._listeners.length < 2) {
                for (; e && !e._ts; ) e = e._next
                e || ke.sleep()
              }
            }
          }),
          r
        )
      })(ze)
      Tt(Be.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
      var qe,
        He,
        Ye = function (t, e, n, r, i, o, a) {
          var s,
            u,
            c,
            l,
            h,
            f,
            p,
            d,
            v = new fn(this._pt, t, e, 0, 1, an, null, i),
            m = 0,
            y = 0
          for (
            v.b = n,
              v.e = r,
              n += '',
              (p = ~(r += '').indexOf('random(')) && (r = ce(r)),
              o && (o((d = [n, r]), t, e), (n = d[0]), (r = d[1])),
              u = n.match(Y) || [];
            (s = Y.exec(r));

          )
            (l = s[0]),
              (h = r.substring(m, s.index)),
              c ? (c = (c + 1) % 5) : 'rgba(' === h.substr(-5) && (c = 1),
              l !== u[y++] &&
                ((f = parseFloat(u[y - 1]) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: h || 1 === y ? h : ',',
                  s: f,
                  c: '=' === l.charAt(1) ? yt(f, l) - f : parseFloat(l) - f,
                  m: c && c < 4 ? Math.round : 0,
                }),
                (m = Y.lastIndex))
          return (
            (v.c = m < r.length ? r.substring(m, r.length) : ''),
            (v.fp = a),
            (U.test(r) || p) && (v.e = 0),
            (this._pt = v),
            v
          )
        },
        Ue = function (t, e, n, r, i, o, a, s, u, c) {
          C(r) && (r = r(i || 0, t, o))
          var l,
            h = t[e],
            f =
              'get' !== n
                ? n
                : C(h)
                  ? u
                    ? t[
                        e.indexOf('set') || !C(t['get' + e.substr(3)])
                          ? e
                          : 'get' + e.substr(3)
                      ](u)
                    : t[e]()
                  : h,
            p = C(h) ? (u ? tn : Ke) : $e
          if (
            (L(r) &&
              (~r.indexOf('random(') && (r = ce(r)),
              '=' === r.charAt(1) &&
                ((l = yt(f, r) + ($t(f) || 0)) || 0 === l) &&
                (r = l)),
            !c || f !== r || He)
          )
            return isNaN(f * r) || '' === r
              ? (!h && !(e in t) && J(e, r),
                Ye.call(this, t, e, f, r, p, s || b.stringFilter, u))
              : ((l = new fn(
                  this._pt,
                  t,
                  e,
                  +f || 0,
                  r - (f || 0),
                  'boolean' == typeof h ? on : rn,
                  0,
                  p,
                )),
                u && (l.fp = u),
                a && l.modifier(a, this, t),
                (this._pt = l))
        },
        Ge = function (t, e, n, r, i, o) {
          var a, s, u, c
          if (
            at[t] &&
            !1 !==
              (a = new at[t]()).init(
                i,
                a.rawVars
                  ? e[t]
                  : (function (t, e, n, r, i) {
                      if (
                        (C(t) && (t = We(t, i, e, n, r)),
                        !R(t) || (t.style && t.nodeType) || z(t) || I(t))
                      )
                        return L(t) ? We(t, i, e, n, r) : t
                      var o,
                        a = {}
                      for (o in t) a[o] = We(t[o], i, e, n, r)
                      return a
                    })(e[t], r, i, o, n),
                n,
                r,
                o,
              ) &&
            ((n._pt = s =
              new fn(n._pt, i, t, 0, 1, a.render, a, 0, a.priority)),
            n !== f)
          )
            for (
              u = n._ptLookup[n._targets.indexOf(i)], c = a._props.length;
              c--;

            )
              u[a._props[c]] = s
          return a
        },
        Xe = function t(e, n, o) {
          var s,
            u,
            c,
            l,
            h,
            f,
            p,
            d,
            v,
            m,
            y,
            _,
            g,
            b = e.vars,
            O = b.ease,
            k = b.startAt,
            E = b.immediateRender,
            S = b.lazy,
            P = b.onUpdate,
            M = b.runBackwards,
            L = b.yoyoEase,
            C = b.keyframes,
            A = b.autoRevert,
            D = e._dur,
            R = e._startAt,
            j = e._targets,
            F = e.parent,
            I = F && 'nested' === F.data ? F.vars.targets : j,
            z = 'auto' === e._overwrite && !r,
            B = e.timeline
          if (
            (B && (!C || !O) && (O = 'none'),
            (e._ease = De(O, x.ease)),
            (e._yEase = L ? Ce(De(!0 === L ? O : L, x.ease)) : 0),
            L &&
              e._yoyo &&
              !e._repeat &&
              ((L = e._yEase), (e._yEase = e._ease), (e._ease = L)),
            (e._from = !B && !!b.runBackwards),
            !B || (C && !b.stagger))
          ) {
            if (
              ((_ = (d = j[0] ? ft(j[0]).harness : 0) && b[d.prop]),
              (s = Et(b, rt)),
              R &&
                (R._zTime < 0 && R.progress(1),
                n < 0 && M && E && !A
                  ? R.render(-1, !0)
                  : R.revert(M && D ? et : tt),
                (R._lazy = 0)),
              k)
            ) {
              if (
                (Lt(
                  (e._startAt = Ze.set(
                    j,
                    Tt(
                      {
                        data: 'isStart',
                        overwrite: !1,
                        parent: F,
                        immediateRender: !0,
                        lazy: !R && N(S),
                        startAt: null,
                        delay: 0,
                        onUpdate:
                          P &&
                          function () {
                            return fe(e, 'onUpdate')
                          },
                        stagger: 0,
                      },
                      k,
                    ),
                  )),
                ),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 && (i || (!E && !A)) && e._startAt.revert(et),
                E && D && n <= 0 && o <= 0)
              )
                return void (n && (e._zTime = n))
            } else if (M && D && !R)
              if (
                (n && (E = !1),
                (c = Tt(
                  {
                    overwrite: !1,
                    data: 'isFromStart',
                    lazy: E && !R && N(S),
                    immediateRender: E,
                    stagger: 0,
                    parent: F,
                  },
                  s,
                )),
                _ && (c[d.prop] = _),
                Lt((e._startAt = Ze.set(j, c))),
                (e._startAt._dp = 0),
                (e._startAt._sat = e),
                n < 0 &&
                  (i ? e._startAt.revert(et) : e._startAt.render(-1, !0)),
                (e._zTime = n),
                E)
              ) {
                if (!n) return
              } else t(e._startAt, T, T)
            for (
              e._pt = e._ptCache = 0, S = (D && N(S)) || (S && !D), u = 0;
              u < j.length;
              u++
            ) {
              if (
                ((p = (h = j[u])._gsap || ht(j)[u]._gsap),
                (e._ptLookup[u] = m = {}),
                ot[p.id] && it.length && gt(),
                (y = I === j ? u : I.indexOf(h)),
                d &&
                  !1 !== (v = new d()).init(h, _ || s, e, y, I) &&
                  ((e._pt = l =
                    new fn(e._pt, h, v.name, 0, 1, v.render, v, 0, v.priority)),
                  v._props.forEach(function (t) {
                    m[t] = l
                  }),
                  v.priority && (f = 1)),
                !d || _)
              )
                for (c in s)
                  at[c] && (v = Ge(c, s, e, y, h, I))
                    ? v.priority && (f = 1)
                    : (m[c] = l =
                        Ue.call(e, h, c, 'get', s[c], y, I, 0, b.stringFilter))
              e._op && e._op[u] && e.kill(h, e._op[u]),
                z &&
                  e._pt &&
                  ((qe = e),
                  a.killTweensOf(h, m, e.globalTime(n)),
                  (g = !e.parent),
                  (qe = 0)),
                e._pt && S && (ot[p.id] = 1)
            }
            f && hn(e), e._onInit && e._onInit(e)
          }
          ;(e._onUpdate = P),
            (e._initted = (!e._op || e._pt) && !g),
            C && n <= 0 && B.render(w, !0, !0)
        },
        Ve = function (t, e, n, r) {
          var i,
            o,
            a = e.ease || r || 'power1.inOut'
          if (z(e))
            (o = n[t] || (n[t] = [])),
              e.forEach(function (t, n) {
                return o.push({ t: (n / (e.length - 1)) * 100, v: t, e: a })
              })
          else
            for (i in e)
              (o = n[i] || (n[i] = [])),
                'ease' === i || o.push({ t: parseFloat(t), v: e[i], e: a })
        },
        We = function (t, e, n, r, i) {
          return C(t)
            ? t.call(e, n, r, i)
            : L(t) && ~t.indexOf('random(')
              ? ce(t)
              : t
        },
        Qe = lt + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert',
        Je = {}
      dt(Qe + ',id,stagger,delay,duration,paused,scrollTrigger', function (t) {
        return (Je[t] = 1)
      })
      var Ze = (function (n) {
        function o(e, i, o, s) {
          var u
          'number' == typeof i && ((o.duration = i), (i = o), (o = null))
          var c,
            l,
            h,
            f,
            p,
            d,
            v,
            m,
            y = (u = n.call(this, s ? i : St(i)) || this).vars,
            _ = y.duration,
            g = y.delay,
            x = y.immediateRender,
            w = y.stagger,
            T = y.overwrite,
            O = y.keyframes,
            k = y.defaults,
            E = y.scrollTrigger,
            S = y.yoyoEase,
            P = i.parent || a,
            M = (z(e) || I(e) ? A(e[0]) : 'length' in i) ? [e] : ee(e)
          if (
            ((u._targets = M.length
              ? ht(M)
              : Z(
                  'GSAP target ' + e + ' not found. https://gsap.com',
                  !b.nullTargetWarn,
                ) || []),
            (u._ptLookup = []),
            (u._overwrite = T),
            O || w || F(_) || F(g))
          ) {
            if (
              ((i = u.vars),
              (c = u.timeline =
                new Be({
                  data: 'nested',
                  defaults: k || {},
                  targets: P && 'nested' === P.data ? P.vars.targets : M,
                })).kill(),
              (c.parent = c._dp = t(u)),
              (c._start = 0),
              w || F(_) || F(g))
            ) {
              if (((f = M.length), (v = w && ie(w)), R(w)))
                for (p in w) ~Qe.indexOf(p) && (m || (m = {}), (m[p] = w[p]))
              for (l = 0; l < f; l++)
                ((h = Et(i, Je)).stagger = 0),
                  S && (h.yoyoEase = S),
                  m && Ot(h, m),
                  (d = M[l]),
                  (h.duration = +We(_, t(u), l, d, M)),
                  (h.delay = (+We(g, t(u), l, d, M) || 0) - u._delay),
                  !w &&
                    1 === f &&
                    h.delay &&
                    ((u._delay = g = h.delay), (u._start += g), (h.delay = 0)),
                  c.to(d, h, v ? v(l, d, M) : 0),
                  (c._ease = Se.none)
              c.duration() ? (_ = g = 0) : (u.timeline = 0)
            } else if (O) {
              St(Tt(c.vars.defaults, { ease: 'none' })),
                (c._ease = De(O.ease || i.ease || 'none'))
              var L,
                C,
                D,
                j = 0
              if (z(O))
                O.forEach(function (t) {
                  return c.to(M, t, '>')
                }),
                  c.duration()
              else {
                for (p in ((h = {}), O))
                  'ease' === p || 'easeEach' === p || Ve(p, O[p], h, O.easeEach)
                for (p in h)
                  for (
                    L = h[p].sort(function (t, e) {
                      return t.t - e.t
                    }),
                      j = 0,
                      l = 0;
                    l < L.length;
                    l++
                  )
                    ((D = {
                      ease: (C = L[l]).e,
                      duration: ((C.t - (l ? L[l - 1].t : 0)) / 100) * _,
                    })[p] = C.v),
                      c.to(M, D, j),
                      (j += D.duration)
                c.duration() < _ && c.to({}, { duration: _ - c.duration() })
              }
            }
            _ || u.duration((_ = c.duration()))
          } else u.timeline = 0
          return (
            !0 !== T || r || ((qe = t(u)), a.killTweensOf(M), (qe = 0)),
            Bt(P, t(u), o),
            i.reversed && u.reverse(),
            i.paused && u.paused(!0),
            (x ||
              (!_ &&
                !O &&
                u._start === mt(P._time) &&
                N(x) &&
                Dt(t(u)) &&
                'nested' !== P.data)) &&
              ((u._tTime = -1e-8), u.render(Math.max(0, -g) || 0)),
            E && qt(t(u), E),
            u
          )
        }
        e(o, n)
        var s = o.prototype
        return (
          (s.render = function (t, e, n) {
            var r,
              o,
              a,
              s,
              u,
              c,
              l,
              h,
              f,
              p = this._time,
              d = this._tDur,
              v = this._dur,
              m = t < 0,
              y = t > d - T && !m ? d : t < T ? 0 : t
            if (v) {
              if (
                y !== this._tTime ||
                !t ||
                n ||
                (!this._initted && this._tTime) ||
                (this._startAt && this._zTime < 0 !== m)
              ) {
                if (((r = y), (h = this.timeline), this._repeat)) {
                  if (((s = v + this._rDelay), this._repeat < -1 && m))
                    return this.totalTime(100 * s + t, e, n)
                  if (
                    ((r = mt(y % s)),
                    y === d
                      ? ((a = this._repeat), (r = v))
                      : ((a = ~~(y / s)) && a === mt(y / s) && ((r = v), a--),
                        r > v && (r = v)),
                    (c = this._yoyo && 1 & a) &&
                      ((f = this._yEase), (r = v - r)),
                    (u = Nt(this._tTime, s)),
                    r === p && !n && this._initted && a === u)
                  )
                    return (this._tTime = y), this
                  a !== u &&
                    (h && this._yEase && Ae(h, c),
                    this.vars.repeatRefresh &&
                      !c &&
                      !this._lock &&
                      this._time !== s &&
                      this._initted &&
                      ((this._lock = n = 1),
                      (this.render(mt(s * a), !0).invalidate()._lock = 0)))
                }
                if (!this._initted) {
                  if (Ht(this, m ? t : r, n, e, y))
                    return (this._tTime = 0), this
                  if (
                    !(
                      p === this._time ||
                      (n && this.vars.repeatRefresh && a !== u)
                    )
                  )
                    return this
                  if (v !== this._dur) return this.render(t, e, n)
                }
                if (
                  ((this._tTime = y),
                  (this._time = r),
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  (this.ratio = l = (f || this._ease)(r / v)),
                  this._from && (this.ratio = l = 1 - l),
                  r &&
                    !p &&
                    !e &&
                    !a &&
                    (fe(this, 'onStart'), this._tTime !== y))
                )
                  return this
                for (o = this._pt; o; ) o.r(l, o.d), (o = o._next)
                ;(h &&
                  h.render(
                    t < 0 ? t : h._dur * h._ease(r / this._dur),
                    e,
                    n,
                  )) ||
                  (this._startAt && (this._zTime = t)),
                  this._onUpdate &&
                    !e &&
                    (m && At(this, t, 0, n), fe(this, 'onUpdate')),
                  this._repeat &&
                    a !== u &&
                    this.vars.onRepeat &&
                    !e &&
                    this.parent &&
                    fe(this, 'onRepeat'),
                  (y !== this._tDur && y) ||
                    this._tTime !== y ||
                    (m && !this._onUpdate && At(this, t, 0, !0),
                    (t || !v) &&
                      ((y === this._tDur && this._ts > 0) ||
                        (!y && this._ts < 0)) &&
                      Lt(this, 1),
                    e ||
                      (m && !p) ||
                      !(y || p || c) ||
                      (fe(
                        this,
                        y === d ? 'onComplete' : 'onReverseComplete',
                        !0,
                      ),
                      this._prom &&
                        !(y < d && this.timeScale() > 0) &&
                        this._prom()))
              }
            } else
              !(function (t, e, n, r) {
                var o,
                  a,
                  s,
                  u = t.ratio,
                  c =
                    e < 0 ||
                    (!e &&
                      ((!t._start && Yt(t) && (t._initted || !Ut(t))) ||
                        ((t._ts < 0 || t._dp._ts < 0) && !Ut(t))))
                      ? 0
                      : 1,
                  l = t._rDelay,
                  h = 0
                if (
                  (l &&
                    t._repeat &&
                    ((h = Zt(0, t._tDur, e)),
                    (a = Nt(h, l)),
                    t._yoyo && 1 & a && (c = 1 - c),
                    a !== Nt(t._tTime, l) &&
                      ((u = 1 - c),
                      t.vars.repeatRefresh && t._initted && t.invalidate())),
                  c !== u || i || r || t._zTime === T || (!e && t._zTime))
                ) {
                  if (!t._initted && Ht(t, e, r, n, h)) return
                  for (
                    s = t._zTime,
                      t._zTime = e || (n ? T : 0),
                      n || (n = e && !s),
                      t.ratio = c,
                      t._from && (c = 1 - c),
                      t._time = 0,
                      t._tTime = h,
                      o = t._pt;
                    o;

                  )
                    o.r(c, o.d), (o = o._next)
                  e < 0 && At(t, e, 0, !0),
                    t._onUpdate && !n && fe(t, 'onUpdate'),
                    h && t._repeat && !n && t.parent && fe(t, 'onRepeat'),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === c &&
                      (c && Lt(t, 1),
                      n ||
                        i ||
                        (fe(t, c ? 'onComplete' : 'onReverseComplete', !0),
                        t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
              })(this, t, e, n)
            return this
          }),
          (s.targets = function () {
            return this._targets
          }),
          (s.invalidate = function (t) {
            return (
              (!t || !this.vars.runBackwards) && (this._startAt = 0),
              (this._pt =
                this._op =
                this._onUpdate =
                this._lazy =
                this.ratio =
                  0),
              (this._ptLookup = []),
              this.timeline && this.timeline.invalidate(t),
              n.prototype.invalidate.call(this, t)
            )
          }),
          (s.resetTo = function (t, e, n, r, i) {
            p || ke.wake(), this._ts || this.play()
            var o = Math.min(
              this._dur,
              (this._dp._time - this._start) * this._ts,
            )
            return (
              this._initted || Xe(this, o),
              (function (t, e, n, r, i, o, a, s) {
                var u,
                  c,
                  l,
                  h,
                  f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e]
                if (!f)
                  for (
                    f = t._ptCache[e] = [],
                      l = t._ptLookup,
                      h = t._targets.length;
                    h--;

                  ) {
                    if ((u = l[h][e]) && u.d && u.d._pt)
                      for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                        u = u._next
                    if (!u)
                      return (
                        (He = 1),
                        (t.vars[e] = '+=0'),
                        Xe(t, a),
                        (He = 0),
                        s ? Z(e + ' not eligible for reset') : 1
                      )
                    f.push(u)
                  }
                for (h = f.length; h--; )
                  ((u = (c = f[h])._pt || c).s =
                    (!r && 0 !== r) || i ? u.s + (r || 0) + o * u.c : r),
                    (u.c = n - u.s),
                    c.e && (c.e = vt(n) + $t(c.e)),
                    c.b && (c.b = u.s + $t(c.b))
              })(this, t, e, n, r, this._ease(o / this._dur), o, i)
                ? this.resetTo(t, e, n, r, 1)
                : (It(this, 0),
                  this.parent ||
                    Pt(
                      this._dp,
                      this,
                      '_first',
                      '_last',
                      this._dp._sort ? '_start' : 0,
                    ),
                  this.render(0))
            )
          }),
          (s.kill = function (t, e) {
            if ((void 0 === e && (e = 'all'), !(t || (e && 'all' !== e))))
              return (this._lazy = this._pt = 0), this.parent ? pe(this) : this
            if (this.timeline) {
              var n = this.timeline.totalDuration()
              return (
                this.timeline.killTweensOf(t, e, qe && !0 !== qe.vars.overwrite)
                  ._first || pe(this),
                this.parent &&
                  n !== this.timeline.totalDuration() &&
                  Gt(this, (this._dur * this.timeline._tDur) / n, 0, 1),
                this
              )
            }
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l = this._targets,
              h = t ? ee(t) : l,
              f = this._ptLookup,
              p = this._pt
            if (
              (!e || 'all' === e) &&
              (function (t, e) {
                for (
                  var n = t.length, r = n === e.length;
                  r && n-- && t[n] === e[n];

                );
                return n < 0
              })(l, h)
            )
              return 'all' === e && (this._pt = 0), pe(this)
            for (
              r = this._op = this._op || [],
                'all' !== e &&
                  (L(e) &&
                    ((s = {}),
                    dt(e, function (t) {
                      return (s[t] = 1)
                    }),
                    (e = s)),
                  (e = (function (t, e) {
                    var n,
                      r,
                      i,
                      o,
                      a = t[0] ? ft(t[0]).harness : 0,
                      s = a && a.aliases
                    if (!s) return e
                    for (r in ((n = Ot({}, e)), s))
                      if ((r in n))
                        for (i = (o = s[r].split(',')).length; i--; )
                          n[o[i]] = n[r]
                    return n
                  })(l, e))),
                c = l.length;
              c--;

            )
              if (~h.indexOf(l[c]))
                for (s in ((i = f[c]),
                'all' === e
                  ? ((r[c] = e), (a = i), (o = {}))
                  : ((o = r[c] = r[c] || {}), (a = e)),
                a))
                  (u = i && i[s]) &&
                    (('kill' in u.d && !0 !== u.d.kill(s)) ||
                      Mt(this, u, '_pt'),
                    delete i[s]),
                    'all' !== o && (o[s] = 1)
            return this._initted && !this._pt && p && pe(this), this
          }),
          (o.to = function (t, e) {
            return new o(t, e, arguments[2])
          }),
          (o.from = function (t, e) {
            return Qt(1, arguments)
          }),
          (o.delayedCall = function (t, e, n, r) {
            return new o(e, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: e,
              onReverseComplete: e,
              onCompleteParams: n,
              onReverseCompleteParams: n,
              callbackScope: r,
            })
          }),
          (o.fromTo = function (t, e, n) {
            return Qt(2, arguments)
          }),
          (o.set = function (t, e) {
            return (
              (e.duration = 0), e.repeatDelay || (e.repeat = 0), new o(t, e)
            )
          }),
          (o.killTweensOf = function (t, e, n) {
            return a.killTweensOf(t, e, n)
          }),
          o
        )
      })(ze)
      Tt(Ze.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0,
      }),
        dt('staggerTo,staggerFrom,staggerFromTo', function (t) {
          Ze[t] = function () {
            var e = new Be(),
              n = Kt.call(arguments, 0)
            return (
              n.splice('staggerFromTo' === t ? 5 : 4, 0, 0), e[t].apply(e, n)
            )
          }
        })
      var $e = function (t, e, n) {
          return (t[e] = n)
        },
        Ke = function (t, e, n) {
          return t[e](n)
        },
        tn = function (t, e, n, r) {
          return t[e](r.fp, n)
        },
        en = function (t, e, n) {
          return t.setAttribute(e, n)
        },
        nn = function (t, e) {
          return C(t[e]) ? Ke : D(t[e]) && t.setAttribute ? en : $e
        },
        rn = function (t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        on = function (t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        an = function (t, e) {
          var n = e._pt,
            r = ''
          if (!t && e.b) r = e.b
          else if (1 === t && e.e) r = e.e
          else {
            for (; n; )
              (r =
                n.p +
                (n.m
                  ? n.m(n.s + n.c * t)
                  : Math.round(1e4 * (n.s + n.c * t)) / 1e4) +
                r),
                (n = n._next)
            r += e.c
          }
          e.set(e.t, e.p, r, e)
        },
        sn = function (t, e) {
          for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next)
        },
        un = function (t, e, n, r) {
          for (var i, o = this._pt; o; )
            (i = o._next), o.p === r && o.modifier(t, e, n), (o = i)
        },
        cn = function (t) {
          for (var e, n, r = this._pt; r; )
            (n = r._next),
              (r.p === t && !r.op) || r.op === t
                ? Mt(this, r, '_pt')
                : r.dep || (e = 1),
              (r = n)
          return !e
        },
        ln = function (t, e, n, r) {
          r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
        },
        hn = function (t) {
          for (var e, n, r, i, o = t._pt; o; ) {
            for (e = o._next, n = r; n && n.pr > o.pr; ) n = n._next
            ;(o._prev = n ? n._prev : i) ? (o._prev._next = o) : (r = o),
              (o._next = n) ? (n._prev = o) : (i = o),
              (o = e)
          }
          t._pt = r
        },
        fn = (function () {
          function t(t, e, n, r, i, o, a, s, u) {
            ;(this.t = e),
              (this.s = r),
              (this.c = i),
              (this.p = n),
              (this.r = o || rn),
              (this.d = a || this),
              (this.set = s || $e),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this)
          }
          return (
            (t.prototype.modifier = function (t, e, n) {
              ;(this.mSet = this.mSet || this.set),
                (this.set = ln),
                (this.m = t),
                (this.mt = n),
                (this.tween = e)
            }),
            t
          )
        })()
      dt(
        lt +
          'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
        function (t) {
          return (rt[t] = 1)
        },
      ),
        (V.TweenMax = V.TweenLite = Ze),
        (V.TimelineLite = V.TimelineMax = Be),
        (a = new Be({
          sortChildren: !1,
          defaults: x,
          autoRemoveChildren: !0,
          id: 'root',
          smoothChildTiming: !0,
        })),
        (b.stringFilter = Oe)
      var pn = [],
        dn = {},
        vn = [],
        mn = 0,
        yn = 0,
        _n = function (t) {
          return (dn[t] || vn).map(function (t) {
            return t()
          })
        },
        gn = function () {
          var t = Date.now(),
            e = []
          t - mn > 2 &&
            (_n('matchMediaInit'),
            pn.forEach(function (t) {
              var n,
                r,
                i,
                o,
                a = t.queries,
                u = t.conditions
              for (r in a)
                (n = s.matchMedia(a[r]).matches) && (i = 1),
                  n !== u[r] && ((u[r] = n), (o = 1))
              o && (t.revert(), i && e.push(t))
            }),
            _n('matchMediaRevert'),
            e.forEach(function (t) {
              return t.onMatch(t, function (e) {
                return t.add(null, e)
              })
            }),
            (mn = t),
            _n('matchMedia'))
        },
        bn = (function () {
          function t(t, e) {
            ;(this.selector = e && ne(e)),
              (this.data = []),
              (this._r = []),
              (this.isReverted = !1),
              (this.id = yn++),
              t && this.add(t)
          }
          var e = t.prototype
          return (
            (e.add = function (t, e, n) {
              C(t) && ((n = e), (e = t), (t = C))
              var r = this,
                i = function () {
                  var t,
                    i = o,
                    a = r.selector
                  return (
                    i && i !== r && i.data.push(r),
                    n && (r.selector = ne(n)),
                    (o = r),
                    (t = e.apply(r, arguments)),
                    C(t) && r._r.push(t),
                    (o = i),
                    (r.selector = a),
                    (r.isReverted = !1),
                    t
                  )
                }
              return (
                (r.last = i),
                t === C
                  ? i(r, function (t) {
                      return r.add(null, t)
                    })
                  : t
                    ? (r[t] = i)
                    : i
              )
            }),
            (e.ignore = function (t) {
              var e = o
              ;(o = null), t(this), (o = e)
            }),
            (e.getTweens = function () {
              var e = []
              return (
                this.data.forEach(function (n) {
                  return n instanceof t
                    ? e.push.apply(e, n.getTweens())
                    : n instanceof Ze &&
                        !(n.parent && 'nested' === n.parent.data) &&
                        e.push(n)
                }),
                e
              )
            }),
            (e.clear = function () {
              this._r.length = this.data.length = 0
            }),
            (e.kill = function (t, e) {
              var n = this
              if (
                (t
                  ? (function () {
                      for (var e, r = n.getTweens(), i = n.data.length; i--; )
                        'isFlip' === (e = n.data[i]).data &&
                          (e.revert(),
                          e.getChildren(!0, !0, !1).forEach(function (t) {
                            return r.splice(r.indexOf(t), 1)
                          }))
                      for (
                        r
                          .map(function (t) {
                            return {
                              g:
                                t._dur ||
                                t._delay ||
                                (t._sat && !t._sat.vars.immediateRender)
                                  ? t.globalTime(0)
                                  : -1 / 0,
                              t,
                            }
                          })
                          .sort(function (t, e) {
                            return e.g - t.g || -1 / 0
                          })
                          .forEach(function (e) {
                            return e.t.revert(t)
                          }),
                          i = n.data.length;
                        i--;

                      )
                        (e = n.data[i]) instanceof Be
                          ? 'nested' !== e.data &&
                            (e.scrollTrigger && e.scrollTrigger.revert(),
                            e.kill())
                          : !(e instanceof Ze) && e.revert && e.revert(t)
                      n._r.forEach(function (e) {
                        return e(t, n)
                      }),
                        (n.isReverted = !0)
                    })()
                  : this.data.forEach(function (t) {
                      return t.kill && t.kill()
                    }),
                this.clear(),
                e)
              )
                for (var r = pn.length; r--; )
                  pn[r].id === this.id && pn.splice(r, 1)
            }),
            (e.revert = function (t) {
              this.kill(t || {})
            }),
            t
          )
        })(),
        xn = (function () {
          function t(t) {
            ;(this.contexts = []), (this.scope = t), o && o.data.push(this)
          }
          var e = t.prototype
          return (
            (e.add = function (t, e, n) {
              R(t) || (t = { matches: t })
              var r,
                i,
                a,
                u = new bn(0, n || this.scope),
                c = (u.conditions = {})
              for (i in (o && !u.selector && (u.selector = o.selector),
              this.contexts.push(u),
              (e = u.add('onMatch', e)),
              (u.queries = t),
              t))
                'all' === i
                  ? (a = 1)
                  : (r = s.matchMedia(t[i])) &&
                    (pn.indexOf(u) < 0 && pn.push(u),
                    (c[i] = r.matches) && (a = 1),
                    r.addListener
                      ? r.addListener(gn)
                      : r.addEventListener('change', gn))
              return (
                a &&
                  e(u, function (t) {
                    return u.add(null, t)
                  }),
                this
              )
            }),
            (e.revert = function (t) {
              this.kill(t || {})
            }),
            (e.kill = function (t) {
              this.contexts.forEach(function (e) {
                return e.kill(t, !0)
              })
            }),
            t
          )
        })(),
        wn = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n]
            e.forEach(function (t) {
              return ve(t)
            })
          },
          timeline: function (t) {
            return new Be(t)
          },
          getTweensOf: function (t, e) {
            return a.getTweensOf(t, e)
          },
          getProperty: function (t, e, n, r) {
            L(t) && (t = ee(t)[0])
            var i = ft(t || {}).get,
              o = n ? wt : xt
            return (
              'native' === n && (n = ''),
              t
                ? e
                  ? o(((at[e] && at[e].get) || i)(t, e, n, r))
                  : function (e, n, r) {
                      return o(((at[e] && at[e].get) || i)(t, e, n, r))
                    }
                : t
            )
          },
          quickSetter: function (t, e, n) {
            if ((t = ee(t)).length > 1) {
              var r = t.map(function (t) {
                  return kn.quickSetter(t, e, n)
                }),
                i = r.length
              return function (t) {
                for (var e = i; e--; ) r[e](t)
              }
            }
            t = t[0] || {}
            var o = at[e],
              a = ft(t),
              s = (a.harness && (a.harness.aliases || {})[e]) || e,
              u = o
                ? function (e) {
                    var r = new o()
                    ;(f._pt = 0),
                      r.init(t, n ? e + n : e, f, 0, [t]),
                      r.render(1, r),
                      f._pt && sn(1, f)
                  }
                : a.set(t, s)
            return o
              ? u
              : function (e) {
                  return u(t, s, n ? e + n : e, a, 1)
                }
          },
          quickTo: function (t, e, n) {
            var r,
              i = kn.to(
                t,
                Ot((((r = {})[e] = '+=0.1'), (r.paused = !0), r), n || {}),
              ),
              o = function (t, n, r) {
                return i.resetTo(e, t, n, r)
              }
            return (o.tween = i), o
          },
          isTweening: function (t) {
            return a.getTweensOf(t, !0).length > 0
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = De(t.ease, x.ease)), kt(x, t || {})
          },
          config: function (t) {
            return kt(b, t || {})
          },
          registerEffect: function (t) {
            var e = t.name,
              n = t.effect,
              r = t.plugins,
              i = t.defaults,
              o = t.extendTimeline
            ;(r || '').split(',').forEach(function (t) {
              return (
                t &&
                !at[t] &&
                !V[t] &&
                Z(e + ' effect requires ' + t + ' plugin.')
              )
            }),
              (st[e] = function (t, e, r) {
                return n(ee(t), Tt(e || {}, i), r)
              }),
              o &&
                (Be.prototype[e] = function (t, n, r) {
                  return this.add(st[e](t, R(n) ? n : (r = n) && {}, this), r)
                })
          },
          registerEase: function (t, e) {
            Se[t] = De(e)
          },
          parseEase: function (t, e) {
            return arguments.length ? De(t, e) : Se
          },
          getById: function (t) {
            return a.getById(t)
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {})
            var n,
              r,
              i = new Be(t)
            for (
              i.smoothChildTiming = N(t.smoothChildTiming),
                a.remove(i),
                i._dp = 0,
                i._time = i._tTime = a._time,
                n = a._first;
              n;

            )
              (r = n._next),
                (!e &&
                  !n._dur &&
                  n instanceof Ze &&
                  n.vars.onComplete === n._targets[0]) ||
                  Bt(i, n, n._start - n._delay),
                (n = r)
            return Bt(a, i, 0), i
          },
          context: function (t, e) {
            return t ? new bn(t, e) : o
          },
          matchMedia: function (t) {
            return new xn(t)
          },
          matchMediaRefresh: function () {
            return (
              pn.forEach(function (t) {
                var e,
                  n,
                  r = t.conditions
                for (n in r) r[n] && ((r[n] = !1), (e = 1))
                e && t.revert()
              }) || gn()
            )
          },
          addEventListener: function (t, e) {
            var n = dn[t] || (dn[t] = [])
            ~n.indexOf(e) || n.push(e)
          },
          removeEventListener: function (t, e) {
            var n = dn[t],
              r = n && n.indexOf(e)
            r >= 0 && n.splice(r, 1)
          },
          utils: {
            wrap: function t(e, n, r) {
              var i = n - e
              return z(e)
                ? ue(e, t(0, e.length), n)
                : Jt(r, function (t) {
                    return ((i + ((t - e) % i)) % i) + e
                  })
            },
            wrapYoyo: function t(e, n, r) {
              var i = n - e,
                o = 2 * i
              return z(e)
                ? ue(e, t(0, e.length - 1), n)
                : Jt(r, function (t) {
                    return (
                      e + ((t = (o + ((t - e) % o)) % o || 0) > i ? o - t : t)
                    )
                  })
            },
            distribute: ie,
            random: se,
            snap: ae,
            normalize: function (t, e, n) {
              return le(t, e, 0, 1, n)
            },
            getUnit: $t,
            clamp: function (t, e, n) {
              return Jt(n, function (n) {
                return Zt(t, e, n)
              })
            },
            splitColor: ge,
            toArray: ee,
            selector: ne,
            mapRange: le,
            pipe: function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n]
              return function (t) {
                return e.reduce(function (t, e) {
                  return e(t)
                }, t)
              }
            },
            unitize: function (t, e) {
              return function (n) {
                return t(parseFloat(n)) + (e || $t(n))
              }
            },
            interpolate: function t(e, n, r, i) {
              var o = isNaN(e + n)
                ? 0
                : function (t) {
                    return (1 - t) * e + t * n
                  }
              if (!o) {
                var a,
                  s,
                  u,
                  c,
                  l,
                  h = L(e),
                  f = {}
                if ((!0 === r && (i = 1) && (r = null), h))
                  (e = { p: e }), (n = { p: n })
                else if (z(e) && !z(n)) {
                  for (u = [], c = e.length, l = c - 2, s = 1; s < c; s++)
                    u.push(t(e[s - 1], e[s]))
                  c--,
                    (o = function (t) {
                      t *= c
                      var e = Math.min(l, ~~t)
                      return u[e](t - e)
                    }),
                    (r = n)
                } else i || (e = Ot(z(e) ? [] : {}, e))
                if (!u) {
                  for (a in n) Ue.call(f, e, a, 'get', n[a])
                  o = function (t) {
                    return sn(t, f) || (h ? e.p : e)
                  }
                }
              }
              return Jt(r, o)
            },
            shuffle: re,
          },
          install: Q,
          effects: st,
          ticker: ke,
          updateRoot: Be.updateRoot,
          plugins: at,
          globalTimeline: a,
          core: {
            PropTween: fn,
            globals: $,
            Tween: Ze,
            Timeline: Be,
            Animation: ze,
            getCache: ft,
            _removeLinkedListItem: Mt,
            reverting: function () {
              return i
            },
            context: function (t) {
              return t && o && (o.data.push(t), (t._ctx = o)), o
            },
            suppressOverwrites: function (t) {
              return (r = t)
            },
          },
        }
      dt('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
        return (wn[t] = Ze[t])
      }),
        ke.add(Be.updateRoot),
        (f = wn.to({}, { duration: 0 }))
      var Tn = function (t, e) {
          for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
            n = n._next
          return n
        },
        On = function (t, e) {
          return {
            name: t,
            rawVars: 1,
            init: function (t, n, r) {
              r._onInit = function (t) {
                var r, i
                if (
                  (L(n) &&
                    ((r = {}),
                    dt(n, function (t) {
                      return (r[t] = 1)
                    }),
                    (n = r)),
                  e)
                ) {
                  for (i in ((r = {}), n)) r[i] = e(n[i])
                  n = r
                }
                !(function (t, e) {
                  var n,
                    r,
                    i,
                    o = t._targets
                  for (n in e)
                    for (r = o.length; r--; )
                      (i = t._ptLookup[r][n]) &&
                        (i = i.d) &&
                        (i._pt && (i = Tn(i, n)),
                        i && i.modifier && i.modifier(e[n], t, o[r], n))
                })(t, n)
              }
            },
          }
        },
        kn =
          wn.registerPlugin(
            {
              name: 'attr',
              init: function (t, e, n, r, i) {
                var o, a, s
                for (o in ((this.tween = n), e))
                  (s = t.getAttribute(o) || ''),
                    ((a = this.add(
                      t,
                      'setAttribute',
                      (s || 0) + '',
                      e[o],
                      r,
                      i,
                      0,
                      0,
                      o,
                    )).op = o),
                    (a.b = s),
                    this._props.push(o)
              },
              render: function (t, e) {
                for (var n = e._pt; n; )
                  i ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d), (n = n._next)
              },
            },
            {
              name: 'endArray',
              init: function (t, e) {
                for (var n = e.length; n--; )
                  this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
              },
            },
            On('roundProps', oe),
            On('modifiers'),
            On('snap', ae),
          ) || wn
      ;(Ze.version = Be.version = kn.version = '3.12.5'),
        (l = 1),
        j() && Ee(),
        Se.Power0,
        Se.Power1,
        Se.Power2,
        Se.Power3,
        Se.Power4,
        Se.Linear,
        Se.Quad,
        Se.Cubic,
        Se.Quart,
        Se.Quint,
        Se.Strong,
        Se.Elastic,
        Se.Back,
        Se.SteppedEase,
        Se.Bounce,
        Se.Sine,
        Se.Expo,
        Se.Circ
      var En,
        Sn,
        Pn,
        Mn,
        Ln,
        Cn,
        An,
        Dn,
        Rn = {},
        Nn = 180 / Math.PI,
        jn = Math.PI / 180,
        Fn = Math.atan2,
        In = /([A-Z])/g,
        zn = /(left|right|width|margin|padding|x)/i,
        Bn = /[\s,\(]\S/,
        qn = {
          autoAlpha: 'opacity,visibility',
          scale: 'scaleX,scaleY',
          alpha: 'opacity',
        },
        Hn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e,
          )
        },
        Yn = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
            e,
          )
        },
        Un = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
            e,
          )
        },
        Gn = function (t, e) {
          var n = e.s + e.c * t
          e.set(e.t, e.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + e.u, e)
        },
        Xn = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        Vn = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Wn = function (t, e, n) {
          return (t.style[e] = n)
        },
        Qn = function (t, e, n) {
          return t.style.setProperty(e, n)
        },
        Jn = function (t, e, n) {
          return (t._gsap[e] = n)
        },
        Zn = function (t, e, n) {
          return (t._gsap.scaleX = t._gsap.scaleY = n)
        },
        $n = function (t, e, n, r, i) {
          var o = t._gsap
          ;(o.scaleX = o.scaleY = n), o.renderTransform(i, o)
        },
        Kn = function (t, e, n, r, i) {
          var o = t._gsap
          ;(o[e] = n), o.renderTransform(i, o)
        },
        tr = 'transform',
        er = tr + 'Origin',
        nr = function t(e, n) {
          var r = this,
            i = this.target,
            o = i.style,
            a = i._gsap
          if (e in Rn && o) {
            if (((this.tfm = this.tfm || {}), 'transform' === e))
              return qn.transform.split(',').forEach(function (e) {
                return t.call(r, e, n)
              })
            if (
              (~(e = qn[e] || e).indexOf(',')
                ? e.split(',').forEach(function (t) {
                    return (r.tfm[t] = br(i, t))
                  })
                : (this.tfm[e] = a.x ? a[e] : br(i, e)),
              e === er && (this.tfm.zOrigin = a.zOrigin),
              this.props.indexOf(tr) >= 0)
            )
              return
            a.svg &&
              ((this.svgo = i.getAttribute('data-svg-origin')),
              this.props.push(er, n, '')),
              (e = tr)
          }
          ;(o || n) && this.props.push(e, n, o[e])
        },
        rr = function (t) {
          t.translate &&
            (t.removeProperty('translate'),
            t.removeProperty('scale'),
            t.removeProperty('rotate'))
        },
        ir = function () {
          var t,
            e,
            n = this.props,
            r = this.target,
            i = r.style,
            o = r._gsap
          for (t = 0; t < n.length; t += 3)
            n[t + 1]
              ? (r[n[t]] = n[t + 2])
              : n[t + 2]
                ? (i[n[t]] = n[t + 2])
                : i.removeProperty(
                    '--' === n[t].substr(0, 2)
                      ? n[t]
                      : n[t].replace(In, '-$1').toLowerCase(),
                  )
          if (this.tfm) {
            for (e in this.tfm) o[e] = this.tfm[e]
            o.svg &&
              (o.renderTransform(),
              r.setAttribute('data-svg-origin', this.svgo || '')),
              ((t = An()) && t.isStart) ||
                i[tr] ||
                (rr(i),
                o.zOrigin &&
                  i[er] &&
                  ((i[er] += ' ' + o.zOrigin + 'px'),
                  (o.zOrigin = 0),
                  o.renderTransform()),
                (o.uncache = 1))
          }
        },
        or = function (t, e) {
          var n = { target: t, props: [], revert: ir, save: nr }
          return (
            t._gsap || kn.core.getCache(t),
            e &&
              e.split(',').forEach(function (t) {
                return n.save(t)
              }),
            n
          )
        },
        ar = function (t, e) {
          var n = Sn.createElementNS
            ? Sn.createElementNS(
                (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
                t,
              )
            : Sn.createElement(t)
          return n && n.style ? n : Sn.createElement(t)
        },
        sr = function t(e, n, r) {
          var i = getComputedStyle(e)
          return (
            i[n] ||
            i.getPropertyValue(n.replace(In, '-$1').toLowerCase()) ||
            i.getPropertyValue(n) ||
            (!r && t(e, cr(n) || n, 1)) ||
            ''
          )
        },
        ur = 'O,Moz,ms,Ms,Webkit'.split(','),
        cr = function (t, e, n) {
          var r = (e || Ln).style,
            i = 5
          if (t in r && !n) return t
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(ur[i] + t in r);

          );
          return i < 0 ? null : (3 === i ? 'ms' : i >= 0 ? ur[i] : '') + t
        },
        lr = function () {
          'undefined' != typeof window &&
            window.document &&
            ((En = window),
            (Sn = En.document),
            (Pn = Sn.documentElement),
            (Ln = ar('div') || { style: {} }),
            ar('div'),
            (tr = cr(tr)),
            (er = tr + 'Origin'),
            (Ln.style.cssText =
              'border-width:0;line-height:0;position:absolute;padding:0'),
            (Dn = !!cr('perspective')),
            (An = kn.core.reverting),
            (Mn = 1))
        },
        hr = function t(e) {
          var n,
            r = ar(
              'svg',
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute('xmlns')) ||
                'http://www.w3.org/2000/svg',
            ),
            i = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText
          if (
            (Pn.appendChild(r),
            r.appendChild(this),
            (this.style.display = 'block'),
            e)
          )
            try {
              ;(n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t)
            } catch (t) {}
          else this._gsapBBox && (n = this._gsapBBox())
          return (
            i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
            Pn.removeChild(r),
            (this.style.cssText = a),
            n
          )
        },
        fr = function (t, e) {
          for (var n = e.length; n--; )
            if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        pr = function (t) {
          var e
          try {
            e = t.getBBox()
          } catch (n) {
            e = hr.call(t, !0)
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === hr ||
              (e = hr.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +fr(t, ['x', 'cx', 'x1']) || 0,
                  y: +fr(t, ['y', 'cy', 'y1']) || 0,
                  width: 0,
                  height: 0,
                }
          )
        },
        dr = function (t) {
          return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !pr(t))
        },
        vr = function (t, e) {
          if (e) {
            var n,
              r = t.style
            e in Rn && e !== er && (e = tr),
              r.removeProperty
                ? (('ms' !== (n = e.substr(0, 2)) &&
                    'webkit' !== e.substr(0, 6)) ||
                    (e = '-' + e),
                  r.removeProperty(
                    '--' === n ? e : e.replace(In, '-$1').toLowerCase(),
                  ))
                : r.removeAttribute(e)
          }
        },
        mr = function (t, e, n, r, i, o) {
          var a = new fn(t._pt, e, n, 0, 1, o ? Vn : Xn)
          return (t._pt = a), (a.b = r), (a.e = i), t._props.push(n), a
        },
        yr = { deg: 1, rad: 1, turn: 1 },
        _r = { grid: 1, flex: 1 },
        gr = function t(e, n, r, i) {
          var o,
            a,
            s,
            u,
            c = parseFloat(r) || 0,
            l = (r + '').trim().substr((c + '').length) || 'px',
            h = Ln.style,
            f = zn.test(n),
            p = 'svg' === e.tagName.toLowerCase(),
            d = (p ? 'client' : 'offset') + (f ? 'Width' : 'Height'),
            v = 100,
            m = 'px' === i,
            y = '%' === i
          if (i === l || !c || yr[i] || yr[l]) return c
          if (
            ('px' !== l && !m && (c = t(e, n, r, 'px')),
            (u = e.getCTM && dr(e)),
            (y || '%' === l) && (Rn[n] || ~n.indexOf('adius')))
          )
            return (
              (o = u ? e.getBBox()[f ? 'width' : 'height'] : e[d]),
              vt(y ? (c / o) * v : (c / 100) * o)
            )
          if (
            ((h[f ? 'width' : 'height'] = v + (m ? l : i)),
            (a =
              ~n.indexOf('adius') || ('em' === i && e.appendChild && !p)
                ? e
                : e.parentNode),
            u && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== Sn && a.appendChild) || (a = Sn.body),
            (s = a._gsap) &&
              y &&
              s.width &&
              f &&
              s.time === ke.time &&
              !s.uncache)
          )
            return vt((c / s.width) * v)
          if (!y || ('height' !== n && 'width' !== n))
            (y || '%' === l) &&
              !_r[sr(a, 'display')] &&
              (h.position = sr(e, 'position')),
              a === e && (h.position = 'static'),
              a.appendChild(Ln),
              (o = Ln[d]),
              a.removeChild(Ln),
              (h.position = 'absolute')
          else {
            var _ = e.style[n]
            ;(e.style[n] = v + i), (o = e[d]), _ ? (e.style[n] = _) : vr(e, n)
          }
          return (
            f && y && (((s = ft(a)).time = ke.time), (s.width = a[d])),
            vt(m ? (o * c) / v : o && c ? (v / o) * c : 0)
          )
        },
        br = function (t, e, n, r) {
          var i
          return (
            Mn || lr(),
            e in qn &&
              'transform' !== e &&
              ~(e = qn[e]).indexOf(',') &&
              (e = e.split(',')[0]),
            Rn[e] && 'transform' !== e
              ? ((i = Cr(t, r)),
                (i =
                  'transformOrigin' !== e
                    ? i[e]
                    : i.svg
                      ? i.origin
                      : Ar(sr(t, er)) + ' ' + i.zOrigin + 'px'))
              : (!(i = t.style[e]) ||
                  'auto' === i ||
                  r ||
                  ~(i + '').indexOf('calc(')) &&
                (i =
                  (Or[e] && Or[e](t, e, n)) ||
                  sr(t, e) ||
                  pt(t, e) ||
                  ('opacity' === e ? 1 : 0)),
            n && !~(i + '').trim().indexOf(' ') ? gr(t, e, i, n) + n : i
          )
        },
        xr = function (t, e, n, r) {
          if (!n || 'none' === n) {
            var i = cr(e, t, 1),
              o = i && sr(t, i, 1)
            o && o !== n
              ? ((e = i), (n = o))
              : 'borderColor' === e && (n = sr(t, 'borderTopColor'))
          }
          var a,
            s,
            u,
            c,
            l,
            h,
            f,
            p,
            d,
            v,
            m,
            y = new fn(this._pt, t.style, e, 0, 1, an),
            _ = 0,
            g = 0
          if (
            ((y.b = n),
            (y.e = r),
            (n += ''),
            'auto' == (r += '') &&
              ((h = t.style[e]),
              (t.style[e] = r),
              (r = sr(t, e) || r),
              h ? (t.style[e] = h) : vr(t, e)),
            Oe((a = [n, r])),
            (r = a[1]),
            (u = (n = a[0]).match(H) || []),
            (r.match(H) || []).length)
          ) {
            for (; (s = H.exec(r)); )
              (f = s[0]),
                (d = r.substring(_, s.index)),
                l
                  ? (l = (l + 1) % 5)
                  : ('rgba(' !== d.substr(-5) && 'hsla(' !== d.substr(-5)) ||
                    (l = 1),
                f !== (h = u[g++] || '') &&
                  ((c = parseFloat(h) || 0),
                  (m = h.substr((c + '').length)),
                  '=' === f.charAt(1) && (f = yt(c, f) + m),
                  (p = parseFloat(f)),
                  (v = f.substr((p + '').length)),
                  (_ = H.lastIndex - v.length),
                  v ||
                    ((v = v || b.units[e] || m),
                    _ === r.length && ((r += v), (y.e += v))),
                  m !== v && (c = gr(t, e, h, v) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: d || 1 === g ? d : ',',
                    s: c,
                    c: p - c,
                    m: (l && l < 4) || 'zIndex' === e ? Math.round : 0,
                  }))
            y.c = _ < r.length ? r.substring(_, r.length) : ''
          } else y.r = 'display' === e && 'none' === r ? Vn : Xn
          return U.test(r) && (y.e = 0), (this._pt = y), y
        },
        wr = {
          top: '0%',
          bottom: '100%',
          left: '0%',
          right: '100%',
          center: '50%',
        },
        Tr = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var n,
              r,
              i,
              o = e.t,
              a = o.style,
              s = e.u,
              u = o._gsap
            if ('all' === s || !0 === s) (a.cssText = ''), (r = 1)
            else
              for (i = (s = s.split(',')).length; --i > -1; )
                (n = s[i]),
                  Rn[n] && ((r = 1), (n = 'transformOrigin' === n ? er : tr)),
                  vr(o, n)
            r &&
              (vr(o, tr),
              u &&
                (u.svg && o.removeAttribute('transform'),
                Cr(o, 1),
                (u.uncache = 1),
                rr(a)))
          }
        },
        Or = {
          clearProps: function (t, e, n, r, i) {
            if ('isFromStart' !== i.data) {
              var o = (t._pt = new fn(t._pt, e, n, 0, 0, Tr))
              return (o.u = r), (o.pr = -10), (o.tween = i), t._props.push(n), 1
            }
          },
        },
        kr = [1, 0, 0, 1, 0, 0],
        Er = {},
        Sr = function (t) {
          return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t
        },
        Pr = function (t) {
          var e = sr(t, tr)
          return Sr(e) ? kr : e.substr(7).match(q).map(vt)
        },
        Mr = function (t, e) {
          var n,
            r,
            i,
            o,
            a = t._gsap || ft(t),
            s = t.style,
            u = Pr(t)
          return a.svg && t.getAttribute('transform')
            ? '1,0,0,1,0,0' ===
              (u = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(',')
              ? kr
              : u
            : (u !== kr ||
                t.offsetParent ||
                t === Pn ||
                a.svg ||
                ((i = s.display),
                (s.display = 'block'),
                ((n = t.parentNode) && t.offsetParent) ||
                  ((o = 1), (r = t.nextElementSibling), Pn.appendChild(t)),
                (u = Pr(t)),
                i ? (s.display = i) : vr(t, 'display'),
                o &&
                  (r
                    ? n.insertBefore(t, r)
                    : n
                      ? n.appendChild(t)
                      : Pn.removeChild(t))),
              e && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
        },
        Lr = function (t, e, n, r, i, o) {
          var a,
            s,
            u,
            c = t._gsap,
            l = i || Mr(t, !0),
            h = c.xOrigin || 0,
            f = c.yOrigin || 0,
            p = c.xOffset || 0,
            d = c.yOffset || 0,
            v = l[0],
            m = l[1],
            y = l[2],
            _ = l[3],
            g = l[4],
            b = l[5],
            x = e.split(' '),
            w = parseFloat(x[0]) || 0,
            T = parseFloat(x[1]) || 0
          n
            ? l !== kr &&
              (s = v * _ - m * y) &&
              ((u = w * (-m / s) + T * (v / s) - (v * b - m * g) / s),
              (w = w * (_ / s) + T * (-y / s) + (y * b - _ * g) / s),
              (T = u))
            : ((w =
                (a = pr(t)).x + (~x[0].indexOf('%') ? (w / 100) * a.width : w)),
              (T =
                a.y +
                (~(x[1] || x[0]).indexOf('%') ? (T / 100) * a.height : T))),
            r || (!1 !== r && c.smooth)
              ? ((g = w - h),
                (b = T - f),
                (c.xOffset = p + (g * v + b * y) - g),
                (c.yOffset = d + (g * m + b * _) - b))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = w),
            (c.yOrigin = T),
            (c.smooth = !!r),
            (c.origin = e),
            (c.originIsAbsolute = !!n),
            (t.style[er] = '0px 0px'),
            o &&
              (mr(o, c, 'xOrigin', h, w),
              mr(o, c, 'yOrigin', f, T),
              mr(o, c, 'xOffset', p, c.xOffset),
              mr(o, c, 'yOffset', d, c.yOffset)),
            t.setAttribute('data-svg-origin', w + ' ' + T)
        },
        Cr = function (t, e) {
          var n = t._gsap || new Ie(t)
          if ('x' in n && !e && !n.uncache) return n
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            h,
            f,
            p,
            d,
            v,
            m,
            y,
            _,
            g,
            x,
            w,
            T,
            O,
            k,
            E,
            S,
            P,
            M,
            L,
            C,
            A,
            D,
            R,
            N,
            j = t.style,
            F = n.scaleX < 0,
            I = 'px',
            z = 'deg',
            B = getComputedStyle(t),
            q = sr(t, er) || '0'
          return (
            (r = i = o = u = c = l = h = f = p = 0),
            (a = s = 1),
            (n.svg = !(!t.getCTM || !dr(t))),
            B.translate &&
              (('none' === B.translate &&
                'none' === B.scale &&
                'none' === B.rotate) ||
                (j[tr] =
                  ('none' !== B.translate
                    ? 'translate3d(' +
                      (B.translate + ' 0 0').split(' ').slice(0, 3).join(', ') +
                      ') '
                    : '') +
                  ('none' !== B.rotate ? 'rotate(' + B.rotate + ') ' : '') +
                  ('none' !== B.scale
                    ? 'scale(' + B.scale.split(' ').join(',') + ') '
                    : '') +
                  ('none' !== B[tr] ? B[tr] : '')),
              (j.scale = j.rotate = j.translate = 'none')),
            (m = Mr(t, n.svg)),
            n.svg &&
              (n.uncache
                ? ((P = t.getBBox()),
                  (q = n.xOrigin - P.x + 'px ' + (n.yOrigin - P.y) + 'px'),
                  (S = ''))
                : (S = !e && t.getAttribute('data-svg-origin')),
              Lr(t, S || q, !!S || n.originIsAbsolute, !1 !== n.smooth, m)),
            (d = n.xOrigin || 0),
            (v = n.yOrigin || 0),
            m !== kr &&
              ((x = m[0]),
              (w = m[1]),
              (T = m[2]),
              (O = m[3]),
              (r = k = m[4]),
              (i = E = m[5]),
              6 === m.length
                ? ((a = Math.sqrt(x * x + w * w)),
                  (s = Math.sqrt(O * O + T * T)),
                  (u = x || w ? Fn(w, x) * Nn : 0),
                  (h = T || O ? Fn(T, O) * Nn + u : 0) &&
                    (s *= Math.abs(Math.cos(h * jn))),
                  n.svg &&
                    ((r -= d - (d * x + v * T)), (i -= v - (d * w + v * O))))
                : ((N = m[6]),
                  (D = m[7]),
                  (L = m[8]),
                  (C = m[9]),
                  (A = m[10]),
                  (R = m[11]),
                  (r = m[12]),
                  (i = m[13]),
                  (o = m[14]),
                  (c = (y = Fn(N, A)) * Nn),
                  y &&
                    ((S = k * (_ = Math.cos(-y)) + L * (g = Math.sin(-y))),
                    (P = E * _ + C * g),
                    (M = N * _ + A * g),
                    (L = k * -g + L * _),
                    (C = E * -g + C * _),
                    (A = N * -g + A * _),
                    (R = D * -g + R * _),
                    (k = S),
                    (E = P),
                    (N = M)),
                  (l = (y = Fn(-T, A)) * Nn),
                  y &&
                    ((_ = Math.cos(-y)),
                    (R = O * (g = Math.sin(-y)) + R * _),
                    (x = S = x * _ - L * g),
                    (w = P = w * _ - C * g),
                    (T = M = T * _ - A * g)),
                  (u = (y = Fn(w, x)) * Nn),
                  y &&
                    ((S = x * (_ = Math.cos(y)) + w * (g = Math.sin(y))),
                    (P = k * _ + E * g),
                    (w = w * _ - x * g),
                    (E = E * _ - k * g),
                    (x = S),
                    (k = P)),
                  c &&
                    Math.abs(c) + Math.abs(u) > 359.9 &&
                    ((c = u = 0), (l = 180 - l)),
                  (a = vt(Math.sqrt(x * x + w * w + T * T))),
                  (s = vt(Math.sqrt(E * E + N * N))),
                  (y = Fn(k, E)),
                  (h = Math.abs(y) > 2e-4 ? y * Nn : 0),
                  (p = R ? 1 / (R < 0 ? -R : R) : 0)),
              n.svg &&
                ((S = t.getAttribute('transform')),
                (n.forceCSS =
                  t.setAttribute('transform', '') || !Sr(sr(t, tr))),
                S && t.setAttribute('transform', S))),
            Math.abs(h) > 90 &&
              Math.abs(h) < 270 &&
              (F
                ? ((a *= -1),
                  (h += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((s *= -1), (h += h <= 0 ? 180 : -180))),
            (e = e || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!e && n.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (t.offsetWidth * n.xPercent) / 100
                : 0) +
              I),
            (n.y =
              i -
              ((n.yPercent =
                i &&
                ((!e && n.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * n.yPercent) / 100
                : 0) +
              I),
            (n.z = o + I),
            (n.scaleX = vt(a)),
            (n.scaleY = vt(s)),
            (n.rotation = vt(u) + z),
            (n.rotationX = vt(c) + z),
            (n.rotationY = vt(l) + z),
            (n.skewX = h + z),
            (n.skewY = f + z),
            (n.transformPerspective = p + I),
            (n.zOrigin =
              parseFloat(q.split(' ')[2]) || (!e && n.zOrigin) || 0) &&
              (j[er] = Ar(q)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = b.force3D),
            (n.renderTransform = n.svg ? zr : Dn ? Ir : Rr),
            (n.uncache = 0),
            n
          )
        },
        Ar = function (t) {
          return (t = t.split(' '))[0] + ' ' + t[1]
        },
        Dr = function (t, e, n) {
          var r = $t(e)
          return vt(parseFloat(e) + parseFloat(gr(t, 'x', n + 'px', r))) + r
        },
        Rr = function (t, e) {
          ;(e.z = '0px'),
            (e.rotationY = e.rotationX = '0deg'),
            (e.force3D = 0),
            Ir(t, e)
        },
        Nr = '0deg',
        jr = '0px',
        Fr = ') ',
        Ir = function (t, e) {
          var n = e || this,
            r = n.xPercent,
            i = n.yPercent,
            o = n.x,
            a = n.y,
            s = n.z,
            u = n.rotation,
            c = n.rotationY,
            l = n.rotationX,
            h = n.skewX,
            f = n.skewY,
            p = n.scaleX,
            d = n.scaleY,
            v = n.transformPerspective,
            m = n.force3D,
            y = n.target,
            _ = n.zOrigin,
            g = '',
            b = ('auto' === m && t && 1 !== t) || !0 === m
          if (_ && (l !== Nr || c !== Nr)) {
            var x,
              w = parseFloat(c) * jn,
              T = Math.sin(w),
              O = Math.cos(w)
            ;(w = parseFloat(l) * jn),
              (x = Math.cos(w)),
              (o = Dr(y, o, T * x * -_)),
              (a = Dr(y, a, -Math.sin(w) * -_)),
              (s = Dr(y, s, O * x * -_ + _))
          }
          v !== jr && (g += 'perspective(' + v + Fr),
            (r || i) && (g += 'translate(' + r + '%, ' + i + '%) '),
            (b || o !== jr || a !== jr || s !== jr) &&
              (g +=
                s !== jr || b
                  ? 'translate3d(' + o + ', ' + a + ', ' + s + ') '
                  : 'translate(' + o + ', ' + a + Fr),
            u !== Nr && (g += 'rotate(' + u + Fr),
            c !== Nr && (g += 'rotateY(' + c + Fr),
            l !== Nr && (g += 'rotateX(' + l + Fr),
            (h === Nr && f === Nr) || (g += 'skew(' + h + ', ' + f + Fr),
            (1 === p && 1 === d) || (g += 'scale(' + p + ', ' + d + Fr),
            (y.style[tr] = g || 'translate(0, 0)')
        },
        zr = function (t, e) {
          var n,
            r,
            i,
            o,
            a,
            s = e || this,
            u = s.xPercent,
            c = s.yPercent,
            l = s.x,
            h = s.y,
            f = s.rotation,
            p = s.skewX,
            d = s.skewY,
            v = s.scaleX,
            m = s.scaleY,
            y = s.target,
            _ = s.xOrigin,
            g = s.yOrigin,
            b = s.xOffset,
            x = s.yOffset,
            w = s.forceCSS,
            T = parseFloat(l),
            O = parseFloat(h)
          ;(f = parseFloat(f)),
            (p = parseFloat(p)),
            (d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
            f || p
              ? ((f *= jn),
                (p *= jn),
                (n = Math.cos(f) * v),
                (r = Math.sin(f) * v),
                (i = Math.sin(f - p) * -m),
                (o = Math.cos(f - p) * m),
                p &&
                  ((d *= jn),
                  (a = Math.tan(p - d)),
                  (i *= a = Math.sqrt(1 + a * a)),
                  (o *= a),
                  d &&
                    ((a = Math.tan(d)),
                    (n *= a = Math.sqrt(1 + a * a)),
                    (r *= a))),
                (n = vt(n)),
                (r = vt(r)),
                (i = vt(i)),
                (o = vt(o)))
              : ((n = v), (o = m), (r = i = 0)),
            ((T && !~(l + '').indexOf('px')) ||
              (O && !~(h + '').indexOf('px'))) &&
              ((T = gr(y, 'x', l, 'px')), (O = gr(y, 'y', h, 'px'))),
            (_ || g || b || x) &&
              ((T = vt(T + _ - (_ * n + g * i) + b)),
              (O = vt(O + g - (_ * r + g * o) + x))),
            (u || c) &&
              ((a = y.getBBox()),
              (T = vt(T + (u / 100) * a.width)),
              (O = vt(O + (c / 100) * a.height))),
            (a =
              'matrix(' +
              n +
              ',' +
              r +
              ',' +
              i +
              ',' +
              o +
              ',' +
              T +
              ',' +
              O +
              ')'),
            y.setAttribute('transform', a),
            w && (y.style[tr] = a)
        },
        Br = function (t, e, n, r, i) {
          var o,
            a,
            s = 360,
            u = L(i),
            c = parseFloat(i) * (u && ~i.indexOf('rad') ? Nn : 1) - r,
            l = r + c + 'deg'
          return (
            u &&
              ('short' === (o = i.split('_')[1]) &&
                (c %= s) != c % 180 &&
                (c += c < 0 ? s : -360),
              'cw' === o && c < 0
                ? (c = ((c + 36e9) % s) - ~~(c / s) * s)
                : 'ccw' === o &&
                  c > 0 &&
                  (c = ((c - 36e9) % s) - ~~(c / s) * s)),
            (t._pt = a = new fn(t._pt, e, n, r, c, Yn)),
            (a.e = l),
            (a.u = 'deg'),
            t._props.push(n),
            a
          )
        },
        qr = function (t, e) {
          for (var n in e) t[n] = e[n]
          return t
        },
        Hr = function (t, e, n) {
          var r,
            i,
            o,
            a,
            s,
            u,
            c,
            l = qr({}, n._gsap),
            h = n.style
          for (i in (l.svg
            ? ((o = n.getAttribute('transform')),
              n.setAttribute('transform', ''),
              (h[tr] = e),
              (r = Cr(n, 1)),
              vr(n, tr),
              n.setAttribute('transform', o))
            : ((o = getComputedStyle(n)[tr]),
              (h[tr] = e),
              (r = Cr(n, 1)),
              (h[tr] = o)),
          Rn))
            (o = l[i]) !== (a = r[i]) &&
              'perspective,force3D,transformOrigin,svgOrigin'.indexOf(i) < 0 &&
              ((s = $t(o) !== (c = $t(a)) ? gr(n, i, o, c) : parseFloat(o)),
              (u = parseFloat(a)),
              (t._pt = new fn(t._pt, r, i, s, u - s, Hn)),
              (t._pt.u = c || 0),
              t._props.push(i))
          qr(r, l)
        }
      dt('padding,margin,Width,Radius', function (t, e) {
        var n = 'Top',
          r = 'Right',
          i = 'Bottom',
          o = 'Left',
          a = (e < 3 ? [n, r, i, o] : [n + o, n + r, i + r, i + o]).map(
            function (n) {
              return e < 2 ? t + n : 'border' + n + t
            },
          )
        Or[e > 1 ? 'border' + t : t] = function (t, e, n, r, i) {
          var o, s
          if (arguments.length < 4)
            return (
              (o = a.map(function (e) {
                return br(t, e, n)
              })),
              5 === (s = o.join(' ')).split(o[0]).length ? o[0] : s
            )
          ;(o = (r + '').split(' ')),
            (s = {}),
            a.forEach(function (t, e) {
              return (s[t] = o[e] = o[e] || o[((e - 1) / 2) | 0])
            }),
            t.init(e, s, i)
        }
      })
      var Yr,
        Ur,
        Gr = {
          name: 'css',
          register: lr,
          targetTest: function (t) {
            return t.style && t.nodeType
          },
          init: function (t, e, n, r, i) {
            var o,
              a,
              s,
              u,
              c,
              l,
              h,
              f,
              p,
              d,
              v,
              m,
              y,
              _,
              g,
              x,
              w,
              T,
              O,
              k,
              E = this._props,
              S = t.style,
              P = n.vars.startAt
            for (h in (Mn || lr(),
            (this.styles = this.styles || or(t)),
            (x = this.styles.props),
            (this.tween = n),
            e))
              if (
                'autoRound' !== h &&
                ((a = e[h]), !at[h] || !Ge(h, e, n, r, t, i))
              )
                if (
                  ((c = typeof a),
                  (l = Or[h]),
                  'function' === c && (c = typeof (a = a.call(n, r, t, i))),
                  'string' === c && ~a.indexOf('random(') && (a = ce(a)),
                  l)
                )
                  l(this, t, h, a, n) && (g = 1)
                else if ('--' === h.substr(0, 2))
                  (o = (getComputedStyle(t).getPropertyValue(h) + '').trim()),
                    (a += ''),
                    (we.lastIndex = 0),
                    we.test(o) || ((f = $t(o)), (p = $t(a))),
                    p ? f !== p && (o = gr(t, h, o, p) + p) : f && (a += f),
                    this.add(S, 'setProperty', o, a, r, i, 0, 0, h),
                    E.push(h),
                    x.push(h, 0, S[h])
                else if ('undefined' !== c) {
                  if (
                    (P && h in P
                      ? ((o =
                          'function' == typeof P[h]
                            ? P[h].call(n, r, t, i)
                            : P[h]),
                        L(o) && ~o.indexOf('random(') && (o = ce(o)),
                        $t(o + '') ||
                          'auto' === o ||
                          (o += b.units[h] || $t(br(t, h)) || ''),
                        '=' === (o + '').charAt(1) && (o = br(t, h)))
                      : (o = br(t, h)),
                    (u = parseFloat(o)),
                    (d =
                      'string' === c &&
                      '=' === a.charAt(1) &&
                      a.substr(0, 2)) && (a = a.substr(2)),
                    (s = parseFloat(a)),
                    h in qn &&
                      ('autoAlpha' === h &&
                        (1 === u &&
                          'hidden' === br(t, 'visibility') &&
                          s &&
                          (u = 0),
                        x.push('visibility', 0, S.visibility),
                        mr(
                          this,
                          S,
                          'visibility',
                          u ? 'inherit' : 'hidden',
                          s ? 'inherit' : 'hidden',
                          !s,
                        )),
                      'scale' !== h &&
                        'transform' !== h &&
                        ~(h = qn[h]).indexOf(',') &&
                        (h = h.split(',')[0])),
                    (v = h in Rn))
                  )
                    if (
                      (this.styles.save(h),
                      m ||
                        (((y = t._gsap).renderTransform && !e.parseTransform) ||
                          Cr(t, e.parseTransform),
                        (_ = !1 !== e.smoothOrigin && y.smooth),
                        ((m = this._pt =
                          new fn(
                            this._pt,
                            S,
                            tr,
                            0,
                            1,
                            y.renderTransform,
                            y,
                            0,
                            -1,
                          )).dep = 1)),
                      'scale' === h)
                    )
                      (this._pt = new fn(
                        this._pt,
                        y,
                        'scaleY',
                        y.scaleY,
                        (d ? yt(y.scaleY, d + s) : s) - y.scaleY || 0,
                        Hn,
                      )),
                        (this._pt.u = 0),
                        E.push('scaleY', h),
                        (h += 'X')
                    else {
                      if ('transformOrigin' === h) {
                        x.push(er, 0, S[er]),
                          (T = void 0),
                          (O = void 0),
                          (k = void 0),
                          (O = (T = (w = a).split(' '))[0]),
                          (k = T[1] || '50%'),
                          ('top' !== O &&
                            'bottom' !== O &&
                            'left' !== k &&
                            'right' !== k) ||
                            ((w = O), (O = k), (k = w)),
                          (T[0] = wr[O] || O),
                          (T[1] = wr[k] || k),
                          (a = T.join(' ')),
                          y.svg
                            ? Lr(t, a, 0, _, 0, this)
                            : ((p = parseFloat(a.split(' ')[2]) || 0) !==
                                y.zOrigin &&
                                mr(this, y, 'zOrigin', y.zOrigin, p),
                              mr(this, S, h, Ar(o), Ar(a)))
                        continue
                      }
                      if ('svgOrigin' === h) {
                        Lr(t, a, 1, _, 0, this)
                        continue
                      }
                      if (h in Er) {
                        Br(this, y, h, u, d ? yt(u, d + a) : a)
                        continue
                      }
                      if ('smoothOrigin' === h) {
                        mr(this, y, 'smooth', y.smooth, a)
                        continue
                      }
                      if ('force3D' === h) {
                        y[h] = a
                        continue
                      }
                      if ('transform' === h) {
                        Hr(this, a, t)
                        continue
                      }
                    }
                  else h in S || (h = cr(h) || h)
                  if (
                    v ||
                    ((s || 0 === s) && (u || 0 === u) && !Bn.test(a) && h in S)
                  )
                    s || (s = 0),
                      (f = (o + '').substr((u + '').length)) !==
                        (p = $t(a) || (h in b.units ? b.units[h] : f)) &&
                        (u = gr(t, h, o, p)),
                      (this._pt = new fn(
                        this._pt,
                        v ? y : S,
                        h,
                        u,
                        (d ? yt(u, d + s) : s) - u,
                        v ||
                        ('px' !== p && 'zIndex' !== h) ||
                        !1 === e.autoRound
                          ? Hn
                          : Gn,
                      )),
                      (this._pt.u = p || 0),
                      f !== p &&
                        '%' !== p &&
                        ((this._pt.b = o), (this._pt.r = Un))
                  else if (h in S) xr.call(this, t, h, o, d ? d + a : a)
                  else if (h in t)
                    this.add(t, h, o || t[h], d ? d + a : a, r, i)
                  else if ('parseTransform' !== h) {
                    J(h, a)
                    continue
                  }
                  v || (h in S ? x.push(h, 0, S[h]) : x.push(h, 1, o || t[h])),
                    E.push(h)
                }
            g && hn(this)
          },
          render: function (t, e) {
            if (e.tween._time || !An())
              for (var n = e._pt; n; ) n.r(t, n.d), (n = n._next)
            else e.styles.revert()
          },
          get: br,
          aliases: qn,
          getSetter: function (t, e, n) {
            var r = qn[e]
            return (
              r && r.indexOf(',') < 0 && (e = r),
              e in Rn && e !== er && (t._gsap.x || br(t, 'x'))
                ? n && Cn === n
                  ? 'scale' === e
                    ? Zn
                    : Jn
                  : (Cn = n || {}) && ('scale' === e ? $n : Kn)
                : t.style && !D(t.style[e])
                  ? Wn
                  : ~e.indexOf('-')
                    ? Qn
                    : nn(t, e)
            )
          },
          core: { _removeProperty: vr, _getMatrix: Mr },
        }
      ;(kn.utils.checkPrefix = cr),
        (kn.core.getStyleSaver = or),
        (Ur = dt(
          'x,y,z,scale,scaleX,scaleY,xPercent,yPercent' +
            ',' +
            (Yr = 'rotation,rotationX,rotationY,skewX,skewY') +
            ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
          function (t) {
            Rn[t] = 1
          },
        )),
        dt(Yr, function (t) {
          ;(b.units[t] = 'deg'), (Er[t] = 1)
        }),
        (qn[Ur[13]] = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent,' + Yr),
        dt(
          '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
          function (t) {
            var e = t.split(':')
            qn[e[1]] = Ur[e[0]]
          },
        ),
        dt(
          'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
          function (t) {
            b.units[t] = 'px'
          },
        ),
        kn.registerPlugin(Gr)
      var Xr = kn.registerPlugin(Gr) || kn
      function Vr(t) {
        return (
          (Vr =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t
                }),
          Vr(t)
        )
      }
      function Wr() {
        Wr = function () {
          return e
        }
        var t,
          e = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (t, e, n) {
              t[e] = n.value
            },
          o = 'function' == typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          s = o.asyncIterator || '@@asyncIterator',
          u = o.toStringTag || '@@toStringTag'
        function c(t, e, n) {
          return (
            Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          )
        }
        try {
          c({}, '')
        } catch (t) {
          c = function (t, e, n) {
            return (t[e] = n)
          }
        }
        function l(t, e, n, r) {
          var o = e && e.prototype instanceof y ? e : y,
            a = Object.create(o.prototype),
            s = new L(r || [])
          return i(a, '_invoke', { value: E(t, n, s) }), a
        }
        function h(t, e, n) {
          try {
            return { type: 'normal', arg: t.call(e, n) }
          } catch (t) {
            return { type: 'throw', arg: t }
          }
        }
        e.wrap = l
        var f = 'suspendedStart',
          p = 'suspendedYield',
          d = 'executing',
          v = 'completed',
          m = {}
        function y() {}
        function _() {}
        function g() {}
        var b = {}
        c(b, a, function () {
          return this
        })
        var x = Object.getPrototypeOf,
          w = x && x(x(C([])))
        w && w !== n && r.call(w, a) && (b = w)
        var T = (g.prototype = y.prototype = Object.create(b))
        function O(t) {
          ;['next', 'throw', 'return'].forEach(function (e) {
            c(t, e, function (t) {
              return this._invoke(e, t)
            })
          })
        }
        function k(t, e) {
          function n(i, o, a, s) {
            var u = h(t[i], t, o)
            if ('throw' !== u.type) {
              var c = u.arg,
                l = c.value
              return l && 'object' == Vr(l) && r.call(l, '__await')
                ? e.resolve(l.__await).then(
                    function (t) {
                      n('next', t, a, s)
                    },
                    function (t) {
                      n('throw', t, a, s)
                    },
                  )
                : e.resolve(l).then(
                    function (t) {
                      ;(c.value = t), a(c)
                    },
                    function (t) {
                      return n('throw', t, a, s)
                    },
                  )
            }
            s(u.arg)
          }
          var o
          i(this, '_invoke', {
            value: function (t, r) {
              function i() {
                return new e(function (e, i) {
                  n(t, r, e, i)
                })
              }
              return (o = o ? o.then(i, i) : i())
            },
          })
        }
        function E(e, n, r) {
          var i = f
          return function (o, a) {
            if (i === d) throw Error('Generator is already running')
            if (i === v) {
              if ('throw' === o) throw a
              return { value: t, done: !0 }
            }
            for (r.method = o, r.arg = a; ; ) {
              var s = r.delegate
              if (s) {
                var u = S(s, r)
                if (u) {
                  if (u === m) continue
                  return u
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg
              else if ('throw' === r.method) {
                if (i === f) throw ((i = v), r.arg)
                r.dispatchException(r.arg)
              } else 'return' === r.method && r.abrupt('return', r.arg)
              i = d
              var c = h(e, n, r)
              if ('normal' === c.type) {
                if (((i = r.done ? v : p), c.arg === m)) continue
                return { value: c.arg, done: r.done }
              }
              'throw' === c.type &&
                ((i = v), (r.method = 'throw'), (r.arg = c.arg))
            }
          }
        }
        function S(e, n) {
          var r = n.method,
            i = e.iterator[r]
          if (i === t)
            return (
              (n.delegate = null),
              ('throw' === r &&
                e.iterator.return &&
                ((n.method = 'return'),
                (n.arg = t),
                S(e, n),
                'throw' === n.method)) ||
                ('return' !== r &&
                  ((n.method = 'throw'),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            )
          var o = h(i, e.iterator, n.arg)
          if ('throw' === o.type)
            return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), m
          var a = o.arg
          return a
            ? a.done
              ? ((n[e.resultName] = a.value),
                (n.next = e.nextLoc),
                'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
                (n.delegate = null),
                m)
              : a
            : ((n.method = 'throw'),
              (n.arg = new TypeError('iterator result is not an object')),
              (n.delegate = null),
              m)
        }
        function P(t) {
          var e = { tryLoc: t[0] }
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e)
        }
        function M(t) {
          var e = t.completion || {}
          ;(e.type = 'normal'), delete e.arg, (t.completion = e)
        }
        function L(t) {
          ;(this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(P, this),
            this.reset(!0)
        }
        function C(e) {
          if (e || '' === e) {
            var n = e[a]
            if (n) return n.call(e)
            if ('function' == typeof e.next) return e
            if (!isNaN(e.length)) {
              var i = -1,
                o = function n() {
                  for (; ++i < e.length; )
                    if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n
                  return (n.value = t), (n.done = !0), n
                }
              return (o.next = o)
            }
          }
          throw new TypeError(Vr(e) + ' is not iterable')
        }
        return (
          (_.prototype = g),
          i(T, 'constructor', { value: g, configurable: !0 }),
          i(g, 'constructor', { value: _, configurable: !0 }),
          (_.displayName = c(g, u, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor
            return (
              !!e &&
              (e === _ || 'GeneratorFunction' === (e.displayName || e.name))
            )
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, g)
                : ((t.__proto__ = g), c(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(T)),
              t
            )
          }),
          (e.awrap = function (t) {
            return { __await: t }
          }),
          O(k.prototype),
          c(k.prototype, s, function () {
            return this
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, n, r, i, o) {
            void 0 === o && (o = Promise)
            var a = new k(l(t, n, r, i), o)
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next()
                })
          }),
          O(T),
          c(T, u, 'Generator'),
          c(T, a, function () {
            return this
          }),
          c(T, 'toString', function () {
            return '[object Generator]'
          }),
          (e.keys = function (t) {
            var e = Object(t),
              n = []
            for (var r in e) n.push(r)
            return (
              n.reverse(),
              function t() {
                for (; n.length; ) {
                  var r = n.pop()
                  if (r in e) return (t.value = r), (t.done = !1), t
                }
                return (t.done = !0), t
              }
            )
          }),
          (e.values = C),
          (L.prototype = {
            constructor: L,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(M),
                !e)
              )
                for (var n in this)
                  't' === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = t)
            },
            stop: function () {
              this.done = !0
              var t = this.tryEntries[0].completion
              if ('throw' === t.type) throw t.arg
              return this.rval
            },
            dispatchException: function (e) {
              if (this.done) throw e
              var n = this
              function i(r, i) {
                return (
                  (s.type = 'throw'),
                  (s.arg = e),
                  (n.next = r),
                  i && ((n.method = 'next'), (n.arg = t)),
                  !!i
                )
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion
                if ('root' === a.tryLoc) return i('end')
                if (a.tryLoc <= this.prev) {
                  var u = r.call(a, 'catchLoc'),
                    c = r.call(a, 'finallyLoc')
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                  } else {
                    if (!c)
                      throw Error('try statement without catch or finally')
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var i = this.tryEntries[n]
                if (
                  i.tryLoc <= this.prev &&
                  r.call(i, 'finallyLoc') &&
                  this.prev < i.finallyLoc
                ) {
                  var o = i
                  break
                }
              }
              o &&
                ('break' === t || 'continue' === t) &&
                o.tryLoc <= e &&
                e <= o.finallyLoc &&
                (o = null)
              var a = o ? o.completion : {}
              return (
                (a.type = t),
                (a.arg = e),
                o
                  ? ((this.method = 'next'), (this.next = o.finallyLoc), m)
                  : this.complete(a)
              )
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && e && (this.next = e),
                m
              )
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.finallyLoc === t)
                  return this.complete(n.completion, n.afterLoc), M(n), m
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var n = this.tryEntries[e]
                if (n.tryLoc === t) {
                  var r = n.completion
                  if ('throw' === r.type) {
                    var i = r.arg
                    M(n)
                  }
                  return i
                }
              }
              throw Error('illegal catch attempt')
            },
            delegateYield: function (e, n, r) {
              return (
                (this.delegate = { iterator: C(e), resultName: n, nextLoc: r }),
                'next' === this.method && (this.arg = t),
                m
              )
            },
          }),
          e
        )
      }
      function Qr(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value
        } catch (t) {
          return void n(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i)
      }
      function Jr(t) {
        return function () {
          var e = this,
            n = arguments
          return new Promise(function (r, i) {
            var o = t.apply(e, n)
            function a(t) {
              Qr(o, r, i, a, s, 'next', t)
            }
            function s(t) {
              Qr(o, r, i, a, s, 'throw', t)
            }
            a(void 0)
          })
        }
      }
      function Zr(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n]
          ;(r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(t, $r(r.key), r)
        }
      }
      function $r(t) {
        var e = (function (t, e) {
          if ('object' != Vr(t) || !t) return t
          var n = t[Symbol.toPrimitive]
          if (void 0 !== n) {
            var r = n.call(t, 'string')
            if ('object' != Vr(r)) return r
            throw new TypeError('@@toPrimitive must return a primitive value.')
          }
          return String(t)
        })(t)
        return 'symbol' == Vr(e) ? e : e + ''
      }
      function Kr(t) {
        var e = 'function' == typeof Map ? new Map() : void 0
        return (
          (Kr = function (t) {
            if (
              null === t ||
              !(function (t) {
                try {
                  return (
                    -1 !== Function.toString.call(t).indexOf('[native code]')
                  )
                } catch (e) {
                  return 'function' == typeof t
                }
              })(t)
            )
              return t
            if ('function' != typeof t)
              throw new TypeError(
                'Super expression must either be null or a function',
              )
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t)
              e.set(t, n)
            }
            function n() {
              return (function (t, e, n) {
                if (ti()) return Reflect.construct.apply(null, arguments)
                var r = [null]
                r.push.apply(r, e)
                var i = new (t.bind.apply(t, r))()
                return n && ei(i, n.prototype), i
              })(t, arguments, ni(this).constructor)
            }
            return (
              (n.prototype = Object.create(t.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              ei(n, t)
            )
          }),
          Kr(t)
        )
      }
      function ti() {
        try {
          var t = !Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {}),
          )
        } catch (t) {}
        return (ti = function () {
          return !!t
        })()
      }
      function ei(t, e) {
        return (
          (ei = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (t, e) {
                return (t.__proto__ = e), t
              }),
          ei(t, e)
        )
      }
      function ni(t) {
        return (
          (ni = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
              }),
          ni(t)
        )
      }
      Xr.core.Tween
      var ri = (function (t) {
        function e() {
          var t, n, r, i
          return (
            (function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function')
            })(this, e),
            ((n = this),
            (r = e),
            (r = ni(r)),
            (t = (function (t, e) {
              if (e && ('object' === Vr(e) || 'function' == typeof e)) return e
              if (void 0 !== e)
                throw new TypeError(
                  'Derived constructors may only return object or undefined',
                )
              return (function (t) {
                if (void 0 === t)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  )
                return t
              })(t)
            })(
              n,
              ti()
                ? Reflect.construct(r, i || [], ni(n).constructor)
                : r.apply(n, i),
            ))).attachShadow({ mode: 'open' }),
            (t.filteredNotesData = []),
            (t.archivedNotesData = []),
            (t.unarchivedNoteIndices = {}),
            (t.shadowRoot.innerHTML =
              '\n        <style>\n        \n        .notes-grid {\n          justify-content: center;\n          margin: 50px;\n          display: grid;\n          grid-template-columns: repeat(auto-fill, 360px);\n          gap: 15px;\n        }\n        .note-card, add-note {\n          height: 300px; \n          background-color: #fff;\n          padding: 15px;\n          border-radius: 8px;\n          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n          display: flex;\n          flex-direction: column;\n          position: relative;\n        }\n\n        .note-card h3 {\n          margin-top: 0;\n        }\n\n        .note-card p {\n          margin-bottom: auto;\n        }\n\n        .note-card small {\n          color: #666;\n          margin-top: auto;\n        }\n\n        add-note {\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          cursor: pointer;\n        }\n\n        .add-note-icon {\n          font-size: 48px;\n          color: #ccc;\n        }\n        .button-container {\n          position: absolute;\n          bottom: 10px;\n          right: 10px;\n        }\n        \n        .button-container button {\n          margin-left: 5px;\n          cursor: pointer;\n        }\n\n        .edit-button {\n          padding: 10px;\n          border-radius: 5px;\n          background-color: #C6EBC5;\n          border: none;\n          transition: background-color 0.3s, color 0.3s;\n        }\n\n        .edit-button {\n          background-color : #4CAF50;\n          color: white;\n        }\n\n        .delete-button {\n          background-color: #f44336;\n          color: white;\n          border: none;\n          border-radius : 5px;\n          padding: 10px;\n        }\n\n        .edit-button:hover, .delete-button:hover {\n          background-color: #45a049; \n          color: white; \n        }\n\n        delete-button:hover {\n          background-color : #f44336;\n          color: white;\n        }\n\n        .note-card hr{\n          margin: 10px 0;\n          border: none;\n          border-top: 1px solid #ccc;\n        }\n\n        .note-card h3{\n          margin-top : 9px;\n          text-align: center;\n        }\n\n        .popup-overlay {\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgba(0, 0, 0, 0.5);\n            display: none;\n            justify-content: center;\n            align-items: center;\n            z-index: 999; \n        }\n        \n        .popup-content {\n            background-color: #fff;\n            padding: 20px 40px;\n            margin-right: 40px;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n            z-index: 1000; \n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content : center;\n            width: calc(100% - 50px); \n            max-width: 360px;\n            height: 300px;\n            position: relative; \n        }\n\n        .close-icon {\n            position: absolute;\n            top: 10px;\n            right: 10px;\n            cursor: pointer;\n            font-size: 24px;\n            color: #fff; \n            font-size: 12px;\n        }\n        \n        .add-note-content {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            margin-top: 2px;\n        }\n\n        .add-note-content p {\n            margin: 0;\n        }\n        \n       .add-note-content .icon {\n            font-size : 24px;\n            font-weight: bold;\n            color: #76885B;\n       }\n       \n        input[type="text"],\n        textarea, button[type="submit"] {\n        width: calc(100% - 20px); \n        margin-right: 10px; \n        margin-bottom: 10px;\n        padding: 8px;\n        border: 1px solid #ccc;\n        border-radius: 5px;\n        transition: border-color 0.3s;\n        }\n\n        button[type="submit"] {\n        width: 100%; \n        margin-right: 10px; \n        margin-bottom: 10px;\n        padding: 8px;\n        border: 1px solid #ccc;\n        border-radius: 5px;\n        transition: border-color 0.3s;\n        }\n\n        input[type="text"]:focus,\n        textarea:focus {\n            outline: none;\n            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); \n        }\n\n        button {\n            padding: 8px 16px;\n            background-color: #627254;\n            color: #fff;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n        }\n\n        .edit-button:hover {\n            background-color: #a9dfbf;\n            color: white;\n        }\n\n        .delete-button:hover{\n          background-color: #ff6961;\n          color: white;\n\n          \n        }\n        .header-grid {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        \n        .header-grid button.archive {\n            background-color: transparent; \n            border: 1px solid #627254; \n            color: #627254; \n            margin-left: 0 auto;\n        }\n        \n        .header-grid button.archive:hover {\n            background-color: #C6EBC5; \n        }\n        \n        .archived-notes-grid {\n            justify-content: center;\n            margin: 50px;\n            display: grid;\n            grid-template-columns: repeat(auto-fill, 360px);\n            gap: 15px;\n          \n          }\n        \n        </style>\n            <div class="notes-grid"></div>\n            <div class="archived-notes-grid"></div>\n            <div class="popup-overlay">\n                <div class="popup-content">\n                    <h2>Edit Note</h2>\n                    <button class="close-icon">X</button>\n                    <form id="editNoteForm">\n                        <input type="text" placeholder="Title" id="titleInput" required>\n                        <textarea placeholder="Description" rows="4" id="bodyInput" required></textarea>\n                        <button type="submit">Update</button>\n                    </form>\n                </div>\n            </div>\n        '),
            t.shadowRoot
              .querySelector('.close-icon')
              .addEventListener('click', function () {
                return t.removePopup()
              }),
            t
          )
        }
        return (
          (function (t, e) {
            if ('function' != typeof e && null !== e)
              throw new TypeError(
                'Super expression must either be null or a function',
              )
            ;(t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              e && ei(t, e)
          })(e, t),
          (n = e),
          (r = [
            {
              key: 'generateId',
              value: function () {
                return Math.random().toString(36).substring(2)
              },
            },
            {
              key: 'connectedCallback',
              value: function () {
                var t = this
                this.renderLoading(),
                  setTimeout(function () {
                    t.fetchNotesFromAPI()
                  }, 3e3),
                  this.renderAddNoteCard(),
                  this.setupSearch(),
                  this.renderNotes(),
                  this.setupArchiveButton(),
                  this.setupUnarchiveButton()
              },
            },
            {
              key: 'fetchNotesFromAPI',
              value:
                ((s = Jr(
                  Wr().mark(function t() {
                    var e, n, r
                    return Wr().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch('https://notes-api.dicoding.dev/v2/notes')
                              )
                            case 3:
                              if ((e = t.sent).ok) {
                                t.next = 6
                                break
                              }
                              throw new Error(
                                'Failed to fetch notes: ' + e.statusText,
                              )
                            case 6:
                              return (t.next = 8), e.json()
                            case 8:
                              ;(n = t.sent),
                                (this.notesData = n.data),
                                this.renderNotes(),
                                (t.next = 16)
                              break
                            case 13:
                              ;(t.prev = 13),
                                (t.t0 = t.catch(0)),
                                console.error(
                                  'Error fetching notes:',
                                  t.t0.message,
                                )
                            case 16:
                              return (
                                (t.prev = 16),
                                (r =
                                  this.shadowRoot.querySelector(
                                    '#loadingIndicator',
                                  )) && r.remove(),
                                t.finish(16)
                              )
                            case 20:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[0, 13, 16, 20]],
                    )
                  }),
                )),
                function () {
                  return s.apply(this, arguments)
                }),
            },
            {
              key: 'renderAddNoteCard',
              value: function () {
                var t = this.shadowRoot.querySelector('.notes-grid'),
                  e = document.createElement('add-note')
                t.firstChild
                  ? t.insertBefore(e, t.firstChild)
                  : t.appendChild(e)
              },
            },
            {
              key: 'updateNotesData',
              value: function (t) {
                this.notesData = t
              },
            },
            {
              key: 'archiveNoteHandler',
              value: function (t) {
                var e = this.notesData.findIndex(function (e) {
                  return e.id === t
                })
                if (-1 !== e) {
                  var n = this.notesData.splice(e, 1)[0]
                  ;(n.archived = !0),
                    this.archivedNotesData.unshift(n),
                    this.updateNotesData(this.notesData),
                    this.renderNotes()
                }
              },
            },
            {
              key: 'renderLoading',
              value: function () {
                var t = document.createElement('div')
                ;(t.id = 'loadingIndicator'),
                  (t.innerHTML = '<div class="loading-spinner"></div>'),
                  this.shadowRoot.appendChild(t)
                var e = document.createElement('style')
                ;(e.textContent =
                  '\n            .loading-spinner {\n                border: 4px solid rgba(0, 0, 0, 0.1);\n                border-left-color: #3498db;\n                border-radius: 50%;\n                width: 50px;\n                height: 50px;\n                animation: spin 1s linear infinite;\n                margin: auto;\n                position: absolute;\n                top: 0;\n                bottom: 0;\n                left: 0;\n                right: 0;\n            }\n            \n            @keyframes spin {\n                0% {\n                    transform: rotate(0deg);\n                }\n                100% {\n                    transform: rotate(360deg);\n                }\n            }\n        '),
                  this.shadowRoot.appendChild(e)
              },
            },
            {
              key: 'unarchiveNoteHandler',
              value: function (t) {
                var e = this.archivedNotesData.findIndex(function (e) {
                  return e.id === t
                })
                if (-1 !== e) {
                  var n = this.archivedNotesData.splice(e, 1)[0]
                  ;(n.archived = !1),
                    this.notesData.unshift(n),
                    this.updateNotesData(this.notesData),
                    this.renderNotes()
                }
              },
            },
            {
              key: 'setupUnarchiveButton',
              value: function () {
                var t = this
                this.shadowRoot
                  .querySelectorAll('.unarchive')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      var n = e.closest('.note-card').dataset.noteId
                      t.unarchiveNoteHandler(n)
                    })
                  })
              },
            },
            {
              key: 'addNoteToAPI',
              value:
                ((a = Jr(
                  Wr().mark(function t(e) {
                    var n, r
                    return Wr().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch(
                                  'https://notes-api.dicoding.dev/v2/notes',
                                  {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(e),
                                  },
                                )
                              )
                            case 3:
                              if ((n = t.sent).ok) {
                                t.next = 6
                                break
                              }
                              throw new Error(
                                'Failed to add note: ' + n.statusText,
                              )
                            case 6:
                              return (t.next = 8), n.json()
                            case 8:
                              ;(r = t.sent),
                                this.notesData.unshift(r),
                                this.renderNotes(),
                                (t.next = 16)
                              break
                            case 13:
                              ;(t.prev = 13),
                                (t.t0 = t.catch(0)),
                                console.error(
                                  'Error adding note:',
                                  t.t0.message,
                                )
                            case 16:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[0, 13]],
                    )
                  }),
                )),
                function (t) {
                  return a.apply(this, arguments)
                }),
            },
            {
              key: 'deleteNoteHandler',
              value:
                ((o = Jr(
                  Wr().mark(function t(e) {
                    var n, r
                    return Wr().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch(
                                  'https://notes-api.dicoding.dev/v2/notes/'.concat(
                                    e,
                                  ),
                                  { method: 'DELETE' },
                                )
                              )
                            case 3:
                              if (t.sent.ok) {
                                t.next = 6
                                break
                              }
                              throw new Error('Failed to delete note')
                            case 6:
                              ;-1 !==
                              (n = this.notesData.findIndex(function (t) {
                                return t.id === e
                              }))
                                ? this.notesData.splice(n, 1)
                                : -1 !==
                                    (r = this.archivedNotesData.findIndex(
                                      function (t) {
                                        return t.id === e
                                      },
                                    )) && this.archivedNotesData.splice(r, 1),
                                this.renderNotes(),
                                console.log('Note deleted successfully'),
                                Swal.fire({
                                  icon: 'success',
                                  title: 'Success',
                                  text: 'Note deleted successfully',
                                }),
                                (t.next = 17)
                              break
                            case 13:
                              ;(t.prev = 13),
                                (t.t0 = t.catch(0)),
                                console.error('Error deleting note:', t.t0),
                                Swal.fire({
                                  icon: 'error',
                                  title: 'Error',
                                  text: 'Failed to delete note',
                                })
                            case 17:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[0, 13]],
                    )
                  }),
                )),
                function (t) {
                  return o.apply(this, arguments)
                }),
            },
            {
              key: 'setupArchiveButton',
              value: function () {
                var t = this
                this.shadowRoot
                  .querySelectorAll('.archive')
                  .forEach(function (e) {
                    e.addEventListener('click', function () {
                      var n = e.closest('.note-card').dataset.noteId
                      t.archiveNoteHandler(n)
                    })
                  })
              },
            },
            {
              key: 'updateNoteToAPI',
              value:
                ((i = Jr(
                  Wr().mark(function t(e, n) {
                    var r, i, o, a
                    return Wr().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (t.next = 3),
                                fetch(
                                  'https://notes-api.dicoding.dev/v2/notes/'.concat(
                                    e,
                                  ),
                                  {
                                    method: 'PUT',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(n),
                                  },
                                )
                              )
                            case 3:
                              if ((r = t.sent).ok) {
                                t.next = 6
                                break
                              }
                              throw new Error(
                                'Failed to update note: '.concat(r.statusText),
                              )
                            case 6:
                              return (t.next = 8), r.json()
                            case 8:
                              ;(i = t.sent),
                                -1 !==
                                (o = this.notesData.findIndex(function (t) {
                                  return t.id === e
                                }))
                                  ? (this.notesData[o] = i)
                                  : -1 !==
                                      (a = this.archivedNotesData.findIndex(
                                        function (t) {
                                          return t.id === e
                                        },
                                      )) && (this.archivedNotesData[a] = i),
                                this.renderNotes(),
                                (t.next = 17)
                              break
                            case 14:
                              ;(t.prev = 14),
                                (t.t0 = t.catch(0)),
                                console.error(
                                  'Error updating note:',
                                  t.t0.message,
                                )
                            case 17:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[0, 14]],
                    )
                  }),
                )),
                function (t, e) {
                  return i.apply(this, arguments)
                }),
            },
            {
              key: 'setupSearch',
              value: function () {
                var t = this,
                  e = document.querySelector('note-search')
                e
                  ? e.addEventListener('search', function (e) {
                      var n = e.detail.toLowerCase()
                      if (
                        ((t.filteredNotesData = t.notesData.filter(
                          function (t) {
                            return (
                              t.title.toLowerCase().includes(n) ||
                              t.body.toLowerCase().includes(n)
                            )
                          },
                        )),
                        0 === t.filteredNotesData.length)
                      ) {
                        var r = document.createElement('div')
                        r.textContent = 'Tidak ada catatan yang sesuai.'
                        var i = t.shadowRoot.querySelector('.notes-grid')
                        ;(i.innerHTML = ''), i.appendChild(r)
                      } else t.renderNotes()
                    })
                  : console.error(
                      'Elemen <note-search> tidak ditemukan di dalam dokumen.',
                    )
              },
            },
            {
              key: 'showEditPopup',
              value: function (t, e) {
                var n = this
                if (t) {
                  var r = this.shadowRoot.querySelector('#titleInput'),
                    i = this.shadowRoot.querySelector('#bodyInput')
                  ;(r.value = t.title || ''), (i.value = t.body || '')
                  var o = t.editedAt ? ''.concat(t.title, ' (edited)') : t.title
                  ;(r.value = o || ''),
                    (this.shadowRoot.querySelector(
                      '.popup-content h2',
                    ).textContent = 'Edit Note'),
                    this.showPopup(),
                    this.shadowRoot
                      .getElementById('editNoteForm')
                      .addEventListener('submit', function (o) {
                        o.preventDefault()
                        var a = {
                          title: r.value,
                          body: i.value,
                          editedAt: new Date().toISOString(),
                        }
                        e
                          ? n.updateNoteToAPI(t.id, a)
                          : n.updateNoteToAPI(
                              n.notesData.find(function (e) {
                                return e.id === t.id
                              }).id,
                              a,
                            ),
                          n.removePopup()
                      })
                }
              },
            },
            {
              key: 'showPopup',
              value: function () {
                this.shadowRoot.querySelector('.popup-overlay').style.display =
                  'flex'
              },
            },
            {
              key: 'removePopup',
              value: function () {
                console.log('Menghapus popup'),
                  (this.shadowRoot.querySelector(
                    '.popup-overlay',
                  ).style.display = 'none')
              },
            },
            {
              key: 'renderNotes',
              value: function () {
                var t = this,
                  e = this.shadowRoot.querySelector('.notes-grid'),
                  n = this.shadowRoot.querySelector('.archived-notes-grid')
                ;(e.innerHTML = ''), (n.innerHTML = '')
                var r =
                  this.filteredNotesData.length > 0
                    ? this.filteredNotesData
                    : this.notesData
                Array.isArray(r) &&
                  r.length > 0 &&
                  r
                    .filter(function (t) {
                      return !t.archived
                    })
                    .forEach(function (n, r) {
                      var i = t.createNoteElement(n)
                      ;(i.style.opacity = 0),
                        Xr.to(i, {
                          opacity: 1,
                          duration: 0.7,
                          ease: 'power2.inOut',
                          delay: 0.1 * r,
                        }),
                        e.appendChild(i)
                    }),
                  this.archivedNotesData.length > 0 &&
                    this.archivedNotesData.forEach(function (e) {
                      var r = t.createNoteElement(e, !0)
                      n.appendChild(r)
                    }),
                  this.setupUnarchiveButton(),
                  this.renderAddNoteCard()
              },
            },
            {
              key: 'createNoteElement',
              value: function (t) {
                var e = this,
                  n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  r = document.createElement('div')
                r.classList.add('note-card'), (r.dataset.noteId = t.id)
                var i,
                  o = t.editedAt ? ' (edited)' : '',
                  a = ''
                    .concat(new Date(t.createdAt).toLocaleString())
                    .concat(o)
                return (
                  n &&
                    ((i = document.createElement('button')).classList.add(
                      'unarchive',
                    ),
                    (i.textContent = 'Unarchive'),
                    i.addEventListener('click', function () {
                      return e.unarchiveNoteHandler(t.id)
                    }),
                    r.appendChild(i)),
                  (r.innerHTML +=
                    '\n            <div class="header-grid">\n                \n                <h3>'
                      .concat(
                        t.title,
                        '</h3>\n                <button class="archive">arsip</button>\n            </div>\n            <hr>\n            <p>',
                      )
                      .concat(t.body, '</p>\n            <small>')
                      .concat(
                        a,
                        '</small> \n            <div class="button-container">\n                <button class="edit-button"><i class="fas fa-edit"></i>Edit</button>\n                <button class="delete-button">Delete</button>\n            </div>',
                      )),
                  r
                    .querySelector('.delete-button')
                    .addEventListener('click', function () {
                      return e.deleteNoteHandler(t.id)
                    }),
                  r
                    .querySelector('.edit-button')
                    .addEventListener('click', function () {
                      return e.editNoteHandler(t)
                    }),
                  r
                    .querySelector('.archive')
                    .addEventListener('click', function () {
                      return e.archiveNoteHandler(t.id)
                    }),
                  n &&
                    i.addEventListener('click', function () {
                      return e.unarchiveNoteHandler(t.id)
                    }),
                  r
                )
              },
            },
            {
              key: 'editNoteHandler',
              value: function (t, e) {
                t &&
                  -1 !==
                    (e
                      ? this.archivedNotesData.findIndex(function (e) {
                          return e.id === t.id
                        })
                      : this.notesData.findIndex(function (e) {
                          return e.id === t.id
                        })) &&
                  this.showEditPopup(t, e)
              },
            },
          ]),
          r && Zr(n.prototype, r),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        )
        var n, r, i, o, a, s
      })(Kr(HTMLElement))
      customElements.define('note-list', ri), n(25)
      var ii = n(72),
        oi = n.n(ii),
        ai = n(825),
        si = n.n(ai),
        ui = n(659),
        ci = n.n(ui),
        li = n(56),
        hi = n.n(li),
        fi = n(540),
        pi = n.n(fi),
        di = n(113),
        vi = n.n(di),
        mi = n(106),
        yi = {}
      ;(yi.styleTagTransform = vi()),
        (yi.setAttributes = hi()),
        (yi.insert = ci().bind(null, 'head')),
        (yi.domAPI = si()),
        (yi.insertStyleElement = pi()),
        oi()(mi.A, yi),
        mi.A && mi.A.locals && mi.A.locals
    })()
})()
