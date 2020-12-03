(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+aWA":
/*!**************************************!*\
  !*** ./src/view/PublicaLembrete.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _servicos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicos */ "ly3g");



var estadoInicial = {
  texto: '',
  publicando: false
};

function PublicaLembrete(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(estadoInicial),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      estado = _useState2[0],
      setEstado = _useState2[1];

  function textoAlterado(ev) {
    setEstado({
      texto: ev.target.value,
      publicando: false
    });
  }

  function publica() {
    setEstado({
      texto: estado.texto,
      publicando: true
    });
  }

  var token = props.token;
  var onTokenInvalido = props.onTokenInvalido;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (estado.publicando) {
      Object(_servicos__WEBPACK_IMPORTED_MODULE_2__["publicaLembrete"])(estado.texto, token).then(function () {
        return setEstado(estadoInicial);
      }).catch(function () {
        setEstado(estadoInicial);
        onTokenInvalido();
      });
    }
  }, [estado, token, onTokenInvalido]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message is-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message-header"
  }, "Lembrete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    className: "textarea",
    value: estado.texto,
    onChange: textoAlterado
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "button is-success",
    onClick: publica
  }, "Publicar")));
}

/* harmony default export */ __webpack_exports__["default"] = (PublicaLembrete);

/***/ }),

/***/ "/0LD":
/*!**************************!*\
  !*** ./src/view/App.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ "FLf1");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Login_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Login.jsx */ "guT4");
/* harmony import */ var _PublicaLembrete_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PublicaLembrete.jsx */ "+aWA");
/* harmony import */ var _MostraLembretes_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MostraLembretes.jsx */ "clhG");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "60Zk");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_6__);







var estadoInicial = {
  token: undefined,
  tokenDecodificado: undefined
};

function reducer(estado, acao) {
  switch (acao.type) {
    case 'REGISTRE_TOKEN':
      return {
        token: acao.token,
        tokenDecodificado: acao.tokenDecodificado
      };

    case 'RECEBA_NOVO_TOKEN':
      return {
        token: acao.token,
        tokenDecodificado: jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(acao.token)
      };

    case 'REGISTRE_USUARIO_SAIU':
      return estadoInicial;

    default:
      throw new Error("BUG: acao.type inv\xE1lido: ".concat(acao.type));
  }
}

function tokenValido(tokenDecodificado) {
  var agora = Date.now();
  var exp = tokenDecodificado.exp * 1000;
  return agora < exp;
} // FIXME Não há nade de errado com esta aplicação. A tarefa consiste em
// colocar a aplicação na sua máquina virtual na nuvem da UFSC.


function App() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, estadoInicial),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      estado = _useReducer2[0],
      dispatch = _useReducer2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var token = window.localStorage.getItem('token');
    var tokenDecodificado;
    if (token === null) token = undefined;else {
      tokenDecodificado = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default.a.decode(token);
      if (tokenValido(tokenDecodificado)) dispatch({
        type: 'REGISTRE_TOKEN',
        token: token,
        tokenDecodificado: tokenDecodificado
      });else window.localStorage.removeItem('token');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (estado.token !== undefined) {
      window.localStorage.setItem('token', estado.token);
    } else {
      window.localStorage.removeItem('token');
    }
  }, [estado.token]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message-header"
  }, "UFSC - CTC - INE - INE5646 :: App lembretes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "message-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Login_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onToken: function onToken(token) {
      return dispatch({
        type: 'RECEBA_NOVO_TOKEN',
        token: token
      });
    },
    onSaiu: function onSaiu() {
      return dispatch({
        type: 'REGISTRE_USUARIO_SAIU'
      });
    },
    token: estado.token,
    tokenDecodificado: estado.tokenDecodificado
  }), estado.token && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PublicaLembrete_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    token: estado.token,
    onTokenInvalido: function onTokenInvalido() {
      return dispatch({
        type: 'REGISTRE_USUARIO_SAIU'
      });
    }
  }), estado.token && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MostraLembretes_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
    token: estado.token,
    onTokenInvalido: function onTokenInvalido() {
      return dispatch({
        type: 'REGISTRE_USUARIO_SAIU'
      });
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 10:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 11:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 12:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 9:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "DSES":
/*!*************************************!*\
  !*** ./src/view/MostraLembrete.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function obtenhaTexto(mostrando, texto) {
  return mostrando ? 'Ocultar' : "".concat(texto.substring(0, 10), "...");
}

function MostraLembrete(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      mostrando = _useState2[0],
      setMostrando = _useState2[1];

  function exibaOuOculte() {
    setMostrando(!mostrando);
  }

  var conteudo;

  if (mostrando) {
    conteudo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "notification is-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
      className: "textarea",
      readOnly: true,
      value: props.texto
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button is-link",
      onClick: exibaOuOculte
    }, obtenhaTexto(mostrando, props.texto)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button is-danger",
      onClick: function onClick() {
        return props.onDelete(props.id);
      }
    }, "Apagar"));
  } else {
    conteudo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
      className: "button is-link is-rounded",
      onClick: exibaOuOculte
    }, obtenhaTexto(mostrando, props.texto));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, conteudo);
}

/* harmony default export */ __webpack_exports__["default"] = (MostraLembrete);

/***/ }),

/***/ "clhG":
/*!**************************************!*\
  !*** ./src/view/MostraLembretes.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "TeQF");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _servicos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicos */ "ly3g");
/* harmony import */ var _MostraLembrete_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MostraLembrete.jsx */ "DSES");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var estadoInicial = {
  lembretes: undefined,
  idLembreteApagar: undefined,
  lendo: false
};

function MostraLembretes(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(estadoInicial),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      estado = _useState2[0],
      setEstado = _useState2[1];

  function apagaUmLembrete(idLembrete) {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      idLembreteApagar: idLembrete
    }));
  }

  function leTodosLembretes() {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      lendo: true
    }));
  }

  var onTokenInvalido = props.onTokenInvalido;
  var token = props.token;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (estado.idLembreteApagar !== undefined) {
      Object(_servicos__WEBPACK_IMPORTED_MODULE_5__["apagaLembrete"])(token, estado.idLembreteApagar).then(function () {
        if (estado.lembretes !== undefined) {
          var lembs = estado.lembretes.filter(function (lemb) {
            return lemb._id !== estado.idLembreteApagar;
          });
          setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
            lembretes: lembs
          }));
        }
      }).catch(function () {
        setEstado(estadoInicial);
        onTokenInvalido();
      });
    }
  }, [estado.idLembreteApagar, estado.lembretes, onTokenInvalido, token]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (estado.lendo) {
      Object(_servicos__WEBPACK_IMPORTED_MODULE_5__["leLembretes"])(token).then(function (lembretes) {
        return setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
          lembretes: lembretes
        }));
      }).catch(function () {
        setEstado(estadoInicial);
        onTokenInvalido();
      });
    }
  }, [estado.lendo, onTokenInvalido, token]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "message-header"
  }, "Mostrar Lembretes", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
    className: "button is-info",
    onClick: leTodosLembretes
  }, "Ler Lembretes")), estado.lembretes !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, estado.lembretes.map(function (l) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      key: l._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MostraLembrete_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: l._id,
      texto: l.texto,
      onDelete: function onDelete() {
        return apagaUmLembrete(l._id);
      }
    }));
  })), estado.lembretes !== undefined && estado.lembretes.length == 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "notification is-warning"
  }, "N\xE3o h\xE1 lembretes para este usu\xE1rio."));
}

/* harmony default export */ __webpack_exports__["default"] = (MostraLembretes);

/***/ }),

/***/ "guT4":
/*!****************************!*\
  !*** ./src/view/Login.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _servicos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../servicos */ "ly3g");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var estadoInicial = {
  login: '',
  senha: '',
  confereSenha: '',
  novoUsuario: false,
  nomeBotao: 'Entrar',
  fazendo: 'nada',
  msg: undefined
};

function reducer(estado, acao) {
  switch (acao.type) {
    case 'REGISTRE_LOGIN':
      return _objectSpread(_objectSpread({}, estado), {}, {
        login: acao.login,
        senha: '',
        confereSenha: '',
        msg: undefined
      });

    case 'REGISTRE_SENHA':
      return _objectSpread(_objectSpread({}, estado), {}, {
        senha: acao.senha,
        msg: undefined
      });

    case 'REGISTRE_CONFERE_SENHA':
      return _objectSpread(_objectSpread({}, estado), {}, {
        confereSenha: acao.confereSenha,
        msg: undefined
      });

    case 'REGISTRE_NOVO_USUARIO':
      {
        var nomeBotao = acao.novoUsuario ? 'Cadastrar Novo Usuário' : 'Entrar';
        return _objectSpread(_objectSpread({}, estado), {}, {
          novoUsuario: acao.novoUsuario,
          nomeBotao: nomeBotao,
          msg: undefined
        });
      }

    case 'FACA_LOGOUT':
      return _objectSpread(_objectSpread({}, estadoInicial), {}, {
        fazendo: 'logout'
      });

    case 'FACA_LOGIN_OU_CADASTRO':
      {
        if (estado.login === '') return _objectSpread(_objectSpread({}, estado), {}, {
          msg: 'Login não definido.'
        });else if (estado.novoUsuario) {
          if (estado.senha === '' || estado.confereSenha === '') return _objectSpread(_objectSpread({}, estado), {}, {
            msg: 'Senha não definida.'
          });else if (estado.senha !== estado.confereSenha) return _objectSpread(_objectSpread({}, estado), {}, {
            msg: 'Senhas não são iguais.'
          });else {
            return _objectSpread(_objectSpread({}, estado), {}, {
              fazendo: 'cadastro',
              msg: 'Fazendo cadastro...'
            });
          }
        } else if (estado.senha === '') return _objectSpread(_objectSpread({}, estado), {}, {
          msg: 'Senha não definida'
        });else {
          return _objectSpread(_objectSpread({}, estado), {}, {
            fazendo: 'login',
            msg: 'Fazendo login...'
          });
        }
      }

    case 'REGISTRE_LOGIN_OK':
      return _objectSpread(_objectSpread({}, estado), {}, {
        msg: undefined,
        fazendo: 'nada'
      });

    case 'REGISTRE_LOGIN_NOK':
      return _objectSpread(_objectSpread({}, estado), {}, {
        msg: acao.motivo,
        fazendo: 'nada'
      });

    case 'REGISTRE_CADASTRO_OK':
      return _objectSpread(_objectSpread({}, estado), {}, {
        msg: undefined,
        fazendo: 'nada'
      });

    case 'REGISTRE_CADASTRO_NOK':
      return _objectSpread(_objectSpread({}, estado), {}, {
        msg: acao.motivo,
        fazendo: 'nada'
      });

    default:
      throw new Error("BUG: acao.type inv\xE1lido: ".concat(acao.type));
  }
}

function Login(props) {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, estadoInicial),
      _useReducer2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useReducer, 2),
      estado = _useReducer2[0],
      dispatch = _useReducer2[1];

  function login(ev) {
    dispatch({
      type: 'REGISTRE_LOGIN',
      login: ev.target.value
    });
  }

  function senha(ev) {
    dispatch({
      type: 'REGISTRE_SENHA',
      senha: ev.target.value
    });
  }

  function confereSenha(ev) {
    dispatch({
      type: 'REGISTRE_CONFERE_SENHA',
      confereSenha: ev.target.value
    });
  }

  function novoUsuario() {
    dispatch({
      type: 'REGISTRE_NOVO_USUARIO',
      novoUsuario: !estado.novoUsuario
    });
  }

  function facaLoginOuCadastro() {
    dispatch({
      type: 'FACA_LOGIN_OU_CADASTRO'
    });
  }

  function facaLogout() {
    dispatch({
      type: 'FACA_LOGOUT'
    });
  }

  var onToken = props.onToken;
  var onSaiu = props.onSaiu;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    switch (estado.fazendo) {
      case 'login':
        _servicos__WEBPACK_IMPORTED_MODULE_3__["fazLogin"](estado.login, estado.senha).then(function (token) {
          dispatch({
            type: 'REGISTRE_LOGIN_OK'
          });
          onToken(token);
        }).catch(function (erro) {
          return dispatch({
            type: 'REGISTRE_LOGIN_NOK',
            motivo: erro.message
          });
        });
        break;

      case 'cadastro':
        _servicos__WEBPACK_IMPORTED_MODULE_3__["fazCadastro"](estado.login, estado.senha).then(function (token) {
          dispatch({
            type: 'REGISTRE_CADASTRO_OK'
          });
          onToken(token);
        }).catch(function (erro) {
          return dispatch({
            type: 'REGISTRE_CADASTRO_NOK',
            motivo: erro.message
          });
        });
        break;

      case 'logout':
        onSaiu();
        break;

      case 'nada':
        break;

      default:
        break;
    }
  }, [estado.fazendo, estado.login, estado.senha, onToken, onSaiu]); // -----------------------

  var conteudo;

  if (props.tokenDecodificado === undefined) {
    conteudo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "message is-link"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "message-header"
    }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "message-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "checkbox"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      type: "checkbox",
      value: estado.novoUsuario,
      onChange: novoUsuario
    }), "novo usu\xE1rio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "label"
    }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "input",
      type: "text",
      value: estado.login,
      onChange: login
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "label"
    }, "Senha"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "input",
      type: "password",
      value: estado.senha,
      onChange: senha
    }))), estado.novoUsuario && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "field"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
      className: "label"
    }, "Repita Senha"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "control"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "input",
      type: "password",
      value: estado.confereSenha,
      onChange: confereSenha
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "button is-link",
      onClick: facaLoginOuCadastro
    }, estado.nomeBotao), estado.msg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "notification is-warning"
    }, estado.msg)));
  } else {
    conteudo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "message is-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "message-header"
    }, "Usu\xE1rio logado: ", props.tokenDecodificado.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "message-body"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      className: "button is-link",
      onClick: facaLogout
    }, "Sair")));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, conteudo);
}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "ly3g":
/*!*************************!*\
  !*** ./src/servicos.js ***!
  \*************************/
/*! exports provided: fazLogin, fazCadastro, publicaLembrete, leLembretes, apagaLembrete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fazLogin", function() { return fazLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fazCadastro", function() { return fazCadastro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicaLembrete", function() { return publicaLembrete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leLembretes", function() { return leLembretes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apagaLembrete", function() { return apagaLembrete; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "ma9I");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "5s+n");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);







// -----
// implementa acesso a serviços disponíveis no lado servidor
// -----
function fazCadastro(_x, _x2) {
  return _fazCadastro.apply(this, arguments);
}

function _fazCadastro() {
  _fazCadastro = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(login, senha) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return executaPOST('/cmdFacaCadastro', {
              login: login,
              senha: senha
            });

          case 2:
            resposta = _context.sent;

            if (!resposta.ok) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", resposta.token);

          case 7:
            throw new Error(resposta.message);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fazCadastro.apply(this, arguments);
}

function fazLogin(_x3, _x4) {
  return _fazLogin.apply(this, arguments);
}

function _fazLogin() {
  _fazLogin = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(login, senha) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return executaPOST('/cmdFacaLogin', {
              login: login,
              senha: senha
            });

          case 2:
            resposta = _context2.sent;

            if (!resposta.ok) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", resposta.token);

          case 7:
            throw new Error(resposta.message);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fazLogin.apply(this, arguments);
}

function publicaLembrete(_x5, _x6) {
  return _publicaLembrete.apply(this, arguments);
}

function _publicaLembrete() {
  _publicaLembrete = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(texto, token) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return executaPOST('/cmdPubliqueLembrete', {
              texto: texto,
              token: token
            });

          case 2:
            resposta = _context3.sent;

            if (!resposta.ok) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt("return", {
              ok: true
            });

          case 5:
            throw new Error('token inválido ou expirado');

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _publicaLembrete.apply(this, arguments);
}

function leLembretes(_x7) {
  return _leLembretes.apply(this, arguments);
}

function _leLembretes() {
  _leLembretes = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4(token) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return executaGET('/qryLeiaLembretes', {
              token: token
            });

          case 2:
            resposta = _context4.sent;

            if (!resposta.ok) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", resposta.lembretes);

          case 5:
            throw new Error('token inválido ou expirado');

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _leLembretes.apply(this, arguments);
}

function apagaLembrete(_x8, _x9) {
  return _apagaLembrete.apply(this, arguments);
}

function _apagaLembrete() {
  _apagaLembrete = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee5(token, idLembrete) {
    var resposta;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return executaDELETE('/cmdApagueLembrete', {
              idLembrete: idLembrete,
              token: token
            });

          case 2:
            resposta = _context5.sent;

            if (!resposta.ok) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", {
              ok: true
            });

          case 5:
            throw new Error('token inválido ou expirado');

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _apagaLembrete.apply(this, arguments);
}

function executaPOST(caminho, dados) {
  return executaPOSTOUDELETE('POST', caminho, dados);
}

function executaDELETE(caminho, dados) {
  return executaPOSTOUDELETE('DELETE', caminho, dados);
}

function executaPOSTOUDELETE(metodo, caminho, dados) {
  var params = {
    method: metodo,
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(dados)
  };
  return window.fetch(caminho, params).then(function (resposta) {
    if (!resposta.ok) {
      throw new Error('Falha na comunicação com servidor');
    }

    return resposta;
  }).then(function (resposta) {
    return resposta.json();
  });
}

function executaGET(caminho, dados) {
  var params = {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  };
  var corpo = JSON.stringify(dados);
  return window.fetch("".concat(caminho, "?dados=").concat(corpo), params).then(function (resposta) {
    if (!resposta.ok) {
      throw new Error('Falha na comunicação com servidor');
    }

    return resposta;
  }).then(function (resposta) {
    return resposta.json();
  });
}



/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _view_App_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/App.jsx */ "/0LD");



var elem = document.createElement('div');
document.body.appendChild(elem);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_view_App_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), elem);

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9QdWJsaWNhTGVtYnJldGUuanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT8yNWRjIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpP2E5Y2EiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/NDQwYSIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT9lM2YwIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpPzk5ZjEiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpPzJlYmUiLCJ3ZWJwYWNrOi8vL3V0aWwgKGlnbm9yZWQpP2I5OGEiLCJ3ZWJwYWNrOi8vL2J1ZmZlciAoaWdub3JlZCk/OTIzYiIsIndlYnBhY2s6Ly8vYnVmZmVyIChpZ25vcmVkKT8zMGMwIiwid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT85MDNkIiwid2VicGFjazovLy91dGlsIChpZ25vcmVkKT8wNGJiIiwid2VicGFjazovLy9idWZmZXIgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3NyYy92aWV3L01vc3RyYUxlbWJyZXRlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9Nb3N0cmFMZW1icmV0ZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Vydmljb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImVzdGFkb0luaWNpYWwiLCJ0ZXh0byIsInB1YmxpY2FuZG8iLCJQdWJsaWNhTGVtYnJldGUiLCJwcm9wcyIsInVzZVN0YXRlIiwiZXN0YWRvIiwic2V0RXN0YWRvIiwidGV4dG9BbHRlcmFkbyIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJwdWJsaWNhIiwidG9rZW4iLCJvblRva2VuSW52YWxpZG8iLCJ1c2VFZmZlY3QiLCJwdWJsaWNhTGVtYnJldGUiLCJ0aGVuIiwiY2F0Y2giLCJ1bmRlZmluZWQiLCJ0b2tlbkRlY29kaWZpY2FkbyIsInJlZHVjZXIiLCJhY2FvIiwidHlwZSIsImp3dCIsImRlY29kZSIsIkVycm9yIiwidG9rZW5WYWxpZG8iLCJhZ29yYSIsIkRhdGUiLCJub3ciLCJleHAiLCJBcHAiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJvYnRlbmhhVGV4dG8iLCJtb3N0cmFuZG8iLCJzdWJzdHJpbmciLCJNb3N0cmFMZW1icmV0ZSIsInNldE1vc3RyYW5kbyIsImV4aWJhT3VPY3VsdGUiLCJjb250ZXVkbyIsIm9uRGVsZXRlIiwiaWQiLCJsZW1icmV0ZXMiLCJpZExlbWJyZXRlQXBhZ2FyIiwibGVuZG8iLCJNb3N0cmFMZW1icmV0ZXMiLCJhcGFnYVVtTGVtYnJldGUiLCJpZExlbWJyZXRlIiwibGVUb2Rvc0xlbWJyZXRlcyIsImFwYWdhTGVtYnJldGUiLCJsZW1icyIsImZpbHRlciIsImxlbWIiLCJfaWQiLCJsZUxlbWJyZXRlcyIsIm1hcCIsImwiLCJsZW5ndGgiLCJsb2dpbiIsInNlbmhhIiwiY29uZmVyZVNlbmhhIiwibm92b1VzdWFyaW8iLCJub21lQm90YW8iLCJmYXplbmRvIiwibXNnIiwibW90aXZvIiwiTG9naW4iLCJmYWNhTG9naW5PdUNhZGFzdHJvIiwiZmFjYUxvZ291dCIsIm9uVG9rZW4iLCJvblNhaXUiLCJzIiwiZXJybyIsIm1lc3NhZ2UiLCJmYXpDYWRhc3RybyIsImV4ZWN1dGFQT1NUIiwicmVzcG9zdGEiLCJvayIsImZhekxvZ2luIiwiZXhlY3V0YUdFVCIsImV4ZWN1dGFERUxFVEUiLCJjYW1pbmhvIiwiZGFkb3MiLCJleGVjdXRhUE9TVE9VREVMRVRFIiwibWV0b2RvIiwicGFyYW1zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJqc29uIiwiY29ycG8iLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBY0EsSUFBTUEsYUFBcUIsR0FBRztBQUM1QkMsT0FBSyxFQUFFLEVBRHFCO0FBRTVCQyxZQUFVLEVBQUU7QUFGZ0IsQ0FBOUI7O0FBS0EsU0FBU0MsZUFBVCxDQUEwQkMsS0FBMUIsRUFBd0M7QUFBQSxrQkFDY0Msc0RBQVEsQ0FBQ0wsYUFBRCxDQUR0QjtBQUFBO0FBQUEsTUFDL0JNLE1BRCtCO0FBQUEsTUFDZkMsU0FEZTs7QUFHdEMsV0FBU0MsYUFBVCxDQUF1QkMsRUFBdkIsRUFBMkI7QUFDekJGLGFBQVMsQ0FBQztBQUFDTixXQUFLLEVBQUVRLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVQyxLQUFsQjtBQUF5QlQsZ0JBQVUsRUFBRTtBQUFyQyxLQUFELENBQVQ7QUFDRDs7QUFFRCxXQUFTVSxPQUFULEdBQW1CO0FBQ2pCTCxhQUFTLENBQUM7QUFBQ04sV0FBSyxFQUFFSyxNQUFNLENBQUNMLEtBQWY7QUFBc0JDLGdCQUFVLEVBQUU7QUFBbEMsS0FBRCxDQUFUO0FBQ0Q7O0FBRUQsTUFBTVcsS0FBSyxHQUFHVCxLQUFLLENBQUNTLEtBQXBCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHVixLQUFLLENBQUNVLGVBQTlCO0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlULE1BQU0sQ0FBQ0osVUFBWCxFQUF1QjtBQUNyQmMsdUVBQWUsQ0FBQ1YsTUFBTSxDQUFDTCxLQUFSLEVBQWVZLEtBQWYsQ0FBZixDQUNHSSxJQURILENBQ1E7QUFBQSxlQUFNVixTQUFTLENBQUNQLGFBQUQsQ0FBZjtBQUFBLE9BRFIsRUFFR2tCLEtBRkgsQ0FFUyxZQUFNO0FBQ1hYLGlCQUFTLENBQUNQLGFBQUQsQ0FBVDtBQUNBYyx1QkFBZTtBQUNo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V0FBSUEsUUFBUSxDQUFDZ0IsSUFBVCxFQUFKO0FBQUEsR0FMVCxDQUFQO0FBTUQ7O0FBRUQsU0FBU2IsVUFBVCxDQUFxQkUsT0FBckIsRUFBOEJDLEtBQTlCLEVBQXFDO0FBQ25DLE1BQU1HLE1BQU0sR0FBRztBQUNiQyxVQUFNLEVBQUUsS0FESztBQUViQyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVDtBQUZJLEdBQWY7QUFNQSxNQUFNTSxLQUFLLEdBQUdKLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixLQUFmLENBQWQ7QUFDQSxTQUFPdEQsTUFBTSxDQUFDK0QsS0FBUCxXQUFnQlYsT0FBaEIsb0JBQWlDWSxLQUFqQyxHQUEwQ1IsTUFBMUMsRUFDSjNFLElBREksQ0FDQyxVQUFBa0UsUUFBUSxFQUFJO0FBQ2hCLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFkLEVBQWtCO0FBQUUsWUFBTSxJQUFJMUQsS0FBSixDQUFVLG1DQUFWLENBQU47QUFBc0Q7O0FBQzFFLFdBQU95RCxRQUFQO0FBQ0QsR0FKSSxFQUtKbEUsSUFMSSxDQUtDLFVBQUFrRSxRQUFRO0FBQUEsV0FBSUEsUUFBUSxDQUFDZ0IsSUFBVCxFQUFKO0FBQUEsR0FMVCxDQUFQO0FBTUQ7Ozs7Ozs7Ozs7Ozs7O0FDM0VEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1FLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQUQsUUFBUSxDQUFDUCxJQUFULENBQWNTLFdBQWQsQ0FBMEJILElBQTFCO0FBQ0FJLGdEQUFRLENBQUNDLE1BQVQsZUFBZ0IsMkRBQUMscURBQUQsT0FBaEIsRUFBeUJMLElBQXpCLEUiLCJmaWxlIjoibWFpbi5hNjNmODA4ZTJhM2E3Y2NiYWQyMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0BmbG93XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHtwdWJsaWNhTGVtYnJldGV9IGZyb20gJy4uL3NlcnZpY29zJ1xyXG5cclxuaW1wb3J0IHR5cGUge1Rva2VufSBmcm9tICcuLi90aXBvc19mbG93J1xyXG5cclxudHlwZSBQcm9wcyA9IHt8XHJcbiAgdG9rZW46IFRva2VuLFxyXG4gIG9uVG9rZW5JbnZhbGlkbzogdm9pZCA9PiB2b2lkXHJcbnx9XHJcblxyXG50eXBlIEVzdGFkbyA9IHt8IFxyXG4gIHRleHRvOiBzdHJpbmcsXHJcbiAgcHVibGljYW5kbzogYm9vbGVhblxyXG58fVxyXG5cclxuY29uc3QgZXN0YWRvSW5pY2lhbDogRXN0YWRvID0ge1xyXG4gIHRleHRvOiAnJyxcclxuICBwdWJsaWNhbmRvOiBmYWxzZVxyXG59XHJcblxyXG5mdW5jdGlvbiBQdWJsaWNhTGVtYnJldGUgKHByb3BzOiBQcm9wcykge1xyXG4gIGNvbnN0IFtlc3RhZG86IEVzdGFkbywgc2V0RXN0YWRvOiBFc3RhZG8gPT4gdm9pZF0gPSB1c2VTdGF0ZShlc3RhZG9JbmljaWFsKVxyXG5cclxuICBmdW5jdGlvbiB0ZXh0b0FsdGVyYWRvKGV2KSB7XHJcbiAgICBzZXRFc3RhZG8oe3RleHRvOiBldi50YXJnZXQudmFsdWUsIHB1YmxpY2FuZG86IGZhbHNlfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHB1YmxpY2EoKSB7XHJcbiAgICBzZXRFc3RhZG8oe3RleHRvOiBlc3RhZG8udGV4dG8sIHB1YmxpY2FuZG86IHRydWV9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9rZW4gPSBwcm9wcy50b2tlblxyXG4gIGNvbnN0IG9uVG9rZW5JbnZhbGlkbyA9IHByb3BzLm9uVG9rZW5JbnZhbGlkb1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZXN0YWRvLnB1YmxpY2FuZG8pIHtcclxuICAgICAgcHVibGljYUxlbWJyZXRlKGVzdGFkby50ZXh0bywgdG9rZW4pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gc2V0RXN0YWRvKGVzdGFkb0luaWNpYWwpKVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRFc3RhZG8oZXN0YWRvSW5pY2lhbClcclxuICAgICAgICAgIG9uVG9rZW5JbnZhbGlkbygpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbZXN0YWRvLCB0b2tlbiwgb25Ub2tlbkludmFsaWRvXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlIGlzLXByaW1hcnknPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZS1oZWFkZXInPkxlbWJyZXRlPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWJvZHknPlxyXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9J3RleHRhcmVhJyB2YWx1ZT17ZXN0YWRvLnRleHRvfSBvbkNoYW5nZT17dGV4dG9BbHRlcmFkb30vPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gaXMtc3VjY2Vzcycgb25DbGljaz17cHVibGljYX0+UHVibGljYXI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQdWJsaWNhTGVtYnJldGVcclxuIiwiLy9AZmxvd1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVJlZHVjZXJ9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuXHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luLmpzeCdcclxuaW1wb3J0IFB1YmxpY2FMZW1icmV0ZSBmcm9tICcuL1B1YmxpY2FMZW1icmV0ZS5qc3gnXHJcbmltcG9ydCBNb3N0cmFMZW1icmV0ZXMgZnJvbSAnLi9Nb3N0cmFMZW1icmV0ZXMuanN4J1xyXG5cclxuaW1wb3J0ICdidWxtYS9jc3MvYnVsbWEubWluLmNzcydcclxuXHJcbmltcG9ydCB0eXBlIHtUb2tlbiwgVG9rZW5EZWNvZGlmaWNhZG99IGZyb20gJy4uL3RpcG9zX2Zsb3cnXHJcblxyXG50eXBlIEVzdGFkbyA9IHt8XHJcbiAgdG9rZW46IFRva2VuIHwgdm9pZCxcclxuICB0b2tlbkRlY29kaWZpY2FkbzogVG9rZW5EZWNvZGlmaWNhZG8gfCB2b2lkXHJcbnx9XHJcblxyXG50eXBlIEFjYW8gPSBcclxuICAgIHt8IHR5cGU6ICdSRUdJU1RSRV9UT0tFTicsIHRva2VuOiBUb2tlbiwgdG9rZW5EZWNvZGlmaWNhZG86IFRva2VuRGVjb2RpZmljYWRvIHx9XHJcbiAgfCB7fCB0eXBlOiAnUkVDRUJBX05PVk9fVE9LRU4nLCB0b2tlbjogVG9rZW4gfH1cclxuICB8IHt8IHR5cGU6ICdSRUdJU1RSRV9VU1VBUklPX1NBSVUnIHx9XHJcblxyXG5jb25zdCBlc3RhZG9JbmljaWFsOiBFc3RhZG8gPSB7XHJcbiAgdG9rZW46IHVuZGVmaW5lZCxcclxuICB0b2tlbkRlY29kaWZpY2FkbzogdW5kZWZpbmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoZXN0YWRvOiBFc3RhZG8sIGFjYW86IEFjYW8pOiBFc3RhZG8ge1xyXG4gIHN3aXRjaCAoYWNhby50eXBlKSB7XHJcbiAgY2FzZSAnUkVHSVNUUkVfVE9LRU4nOlxyXG4gICAgcmV0dXJuIHt0b2tlbjogYWNhby50b2tlbiwgdG9rZW5EZWNvZGlmaWNhZG86IGFjYW8udG9rZW5EZWNvZGlmaWNhZG99ICAgIFxyXG4gIFxyXG4gIGNhc2UgJ1JFQ0VCQV9OT1ZPX1RPS0VOJzogXHJcbiAgICByZXR1cm4ge3Rva2VuOiBhY2FvLnRva2VuLCB0b2tlbkRlY29kaWZpY2Fkbzogand0LmRlY29kZShhY2FvLnRva2VuKX1cclxuICBcclxuICBjYXNlICdSRUdJU1RSRV9VU1VBUklPX1NBSVUnOlxyXG4gICAgcmV0dXJuIGVzdGFkb0luaWNpYWxcclxuXHJcbiAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBFcnJvcihgQlVHOiBhY2FvLnR5cGUgaW52w6FsaWRvOiAke2FjYW8udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9rZW5WYWxpZG8odG9rZW5EZWNvZGlmaWNhZG86IFRva2VuRGVjb2RpZmljYWRvKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgYWdvcmE6IG51bWJlciA9IERhdGUubm93KClcclxuICBjb25zdCBleHAgPSB0b2tlbkRlY29kaWZpY2Fkby5leHAgKiAxMDAwXHJcbiAgcmV0dXJuIGFnb3JhIDwgZXhwXHJcbn1cclxuXHJcbi8vIEZJWE1FIE7Do28gaMOhIG5hZGUgZGUgZXJyYWRvIGNvbSBlc3RhIGFwbGljYcOnw6NvLiBBIHRhcmVmYSBjb25zaXN0ZSBlbVxyXG4vLyBjb2xvY2FyIGEgYXBsaWNhw6fDo28gbmEgc3VhIG3DoXF1aW5hIHZpcnR1YWwgbmEgbnV2ZW0gZGEgVUZTQy5cclxuXHJcbmZ1bmN0aW9uIEFwcCAoKSB7XHJcbiAgY29uc3QgW2VzdGFkbywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBlc3RhZG9JbmljaWFsKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXHJcbiAgICBsZXQgdG9rZW5EZWNvZGlmaWNhZG9cclxuXHJcbiAgICBpZiAodG9rZW4gPT09IG51bGwpXHJcbiAgICAgIHRva2VuID0gdW5kZWZpbmVkXHJcbiAgICBlbHNlIHtcclxuICAgICAgdG9rZW5EZWNvZGlmaWNhZG8gPSBqd3QuZGVjb2RlKHRva2VuKVxyXG4gICAgICBpZiAodG9rZW5WYWxpZG8odG9rZW5EZWNvZGlmaWNhZG8pKVxyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnUkVHSVNUUkVfVE9LRU4nLCB0b2tlbiwgdG9rZW5EZWNvZGlmaWNhZG99KVxyXG4gICAgICBlbHNlXHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZXN0YWRvLnRva2VuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGVzdGFkby50b2tlbilcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcclxuICAgIH1cclxuICB9LCBbZXN0YWRvLnRva2VuXSlcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGlzLWZsdWlkJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWhlYWRlcic+XHJcbiAgICAgICAgICAgIFVGU0MgLSBDVEMgLSBJTkUgLSBJTkU1NjQ2IDo6IEFwcCBsZW1icmV0ZXNcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZS1ib2R5Jz5cclxuICAgICAgICAgIDxMb2dpbiBvblRva2VuPXt0b2tlbiA9PiBkaXNwYXRjaCh7dHlwZTogJ1JFQ0VCQV9OT1ZPX1RPS0VOJywgdG9rZW59KX1cclxuICAgICAgICAgICAgb25TYWl1PXsoKSA9PiBkaXNwYXRjaCh7dHlwZTogJ1JFR0lTVFJFX1VTVUFSSU9fU0FJVSd9KX1cclxuICAgICAgICAgICAgdG9rZW49e2VzdGFkby50b2tlbn1cclxuICAgICAgICAgICAgdG9rZW5EZWNvZGlmaWNhZG89e2VzdGFkby50b2tlbkRlY29kaWZpY2Fkb30vPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlc3RhZG8udG9rZW4gJiZcclxuICAgICAgICAgICAgICA8UHVibGljYUxlbWJyZXRlIHRva2VuPXtlc3RhZG8udG9rZW59XHJcbiAgICAgICAgICAgICAgICBvblRva2VuSW52YWxpZG89eygpID0+IGRpc3BhdGNoKHt0eXBlOiAnUkVHSVNUUkVfVVNVQVJJT19TQUlVJ30pfS8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVzdGFkby50b2tlbiAmJlxyXG4gICAgICAgICAgICAgIDxNb3N0cmFMZW1icmV0ZXMgdG9rZW49e2VzdGFkby50b2tlbn1cclxuICAgICAgICAgICAgICAgIG9uVG9rZW5JbnZhbGlkbz17KCkgPT4gZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9VU1VBUklPX1NBSVUnfSl9Lz5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iLCIvL0BmbG93XHJcblxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG50eXBlIFByb3BzID0ge3xcclxuICBpZDogc3RyaW5nLFxyXG4gIHRleHRvOiBzdHJpbmcsXHJcbiAgb25EZWxldGU6IHN0cmluZyA9PiB2b2lkICAgIFxyXG58fVxyXG5cclxuXHJcbmZ1bmN0aW9uIG9idGVuaGFUZXh0byhtb3N0cmFuZG86IGJvb2xlYW4sIHRleHRvOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBtb3N0cmFuZG8gPyAgJ09jdWx0YXInIDogYCR7dGV4dG8uc3Vic3RyaW5nKDAsMTApfS4uLmBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1vc3RyYUxlbWJyZXRlIChwcm9wczogUHJvcHMpIHtcclxuICBjb25zdCBbbW9zdHJhbmRvLCBzZXRNb3N0cmFuZG9dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG5cclxuICBmdW5jdGlvbiBleGliYU91T2N1bHRlKCkge1xyXG4gICAgc2V0TW9zdHJhbmRvKCFtb3N0cmFuZG8pXHJcbiAgfVxyXG5cclxuICBsZXQgY29udGV1ZG9cclxuXHJcbiAgaWYgKG1vc3RyYW5kbykge1xyXG4gICAgY29udGV1ZG8gPVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub3RpZmljYXRpb24gaXMtaW5mbyc+XHJcbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPSd0ZXh0YXJlYScgcmVhZE9ubHkgdmFsdWU9e3Byb3BzLnRleHRvfS8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWxpbmsnIFxyXG4gICAgICAgICAgICBvbkNsaWNrPXtleGliYU91T2N1bHRlfT5cclxuICAgICAgICAgICAge29idGVuaGFUZXh0byhtb3N0cmFuZG8sIHByb3BzLnRleHRvKX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbiBpcy1kYW5nZXInXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uRGVsZXRlKHByb3BzLmlkKX0+XHJcbiAgICAgICAgICAgICAgQXBhZ2FyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICB9IGVsc2Uge1xyXG4gICAgY29udGV1ZG8gPVxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbiBpcy1saW5rIGlzLXJvdW5kZWQnIG9uQ2xpY2s9e2V4aWJhT3VPY3VsdGV9PlxyXG4gICAgICAgICAgICB7b2J0ZW5oYVRleHRvKG1vc3RyYW5kbywgcHJvcHMudGV4dG8pfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8c3Bhbj57Y29udGV1ZG99PC9zcGFuPlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vc3RyYUxlbWJyZXRlXHJcbiIsIi8vQGZsb3dcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBsZUxlbWJyZXRlcywgYXBhZ2FMZW1icmV0ZSB9IGZyb20gJy4uL3NlcnZpY29zJ1xyXG5pbXBvcnQgTW9zdHJhTGVtYnJldGUgZnJvbSAnLi9Nb3N0cmFMZW1icmV0ZS5qc3gnXHJcblxyXG5pbXBvcnQgdHlwZSB7VG9rZW4sIExlbWJyZXRlfSBmcm9tICcuLi90aXBvc19mbG93J1xyXG5cclxudHlwZSBQcm9wcyA9IHt8IFxyXG4gIHRva2VuOiBUb2tlbixcclxuICBvblRva2VuSW52YWxpZG86IHZvaWQgPT4gdm9pZFxyXG58fVxyXG5cclxudHlwZSBFc3RhZG8gPSB7fCBcclxuICBsZW1icmV0ZXM6IEFycmF5PExlbWJyZXRlPiB8IHZvaWQsXHJcbiAgaWRMZW1icmV0ZUFwYWdhcjogc3RyaW5nIHwgdm9pZCxcclxuICBsZW5kbzogYm9vbGVhblxyXG58fVxyXG5cclxuY29uc3QgZXN0YWRvSW5pY2lhbDogRXN0YWRvID0ge1xyXG4gIGxlbWJyZXRlczogdW5kZWZpbmVkLFxyXG4gIGlkTGVtYnJldGVBcGFnYXI6IHVuZGVmaW5lZCxcclxuICBsZW5kbzogZmFsc2VcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIE1vc3RyYUxlbWJyZXRlcyAocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgW2VzdGFkbzogRXN0YWRvLCBzZXRFc3RhZG9dID0gdXNlU3RhdGUoZXN0YWRvSW5pY2lhbClcclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gYXBhZ2FVbUxlbWJyZXRlKGlkTGVtYnJldGUpIHtcclxuICAgIHNldEVzdGFkbyh7Li4uZXN0YWRvLCBpZExlbWJyZXRlQXBhZ2FyOiBpZExlbWJyZXRlfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGxlVG9kb3NMZW1icmV0ZXMoKSB7XHJcbiAgICBzZXRFc3RhZG8oey4uLmVzdGFkbywgbGVuZG86IHRydWV9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25Ub2tlbkludmFsaWRvID0gcHJvcHMub25Ub2tlbkludmFsaWRvXHJcbiAgY29uc3QgdG9rZW4gPSBwcm9wcy50b2tlblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVzdGFkby5pZExlbWJyZXRlQXBhZ2FyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgYXBhZ2FMZW1icmV0ZSh0b2tlbiwgZXN0YWRvLmlkTGVtYnJldGVBcGFnYXIpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKGVzdGFkby5sZW1icmV0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCBsZW1icyA9IGVzdGFkby5sZW1icmV0ZXMuZmlsdGVyKGxlbWIgPT4gbGVtYi5faWQgIT09IGVzdGFkby5pZExlbWJyZXRlQXBhZ2FyKVxyXG4gICAgICAgICAgICBzZXRFc3RhZG8oey4uLmVzdGFkb0luaWNpYWwsIGxlbWJyZXRlczogbGVtYnN9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIHNldEVzdGFkbyhlc3RhZG9JbmljaWFsKVxyXG4gICAgICAgICAgb25Ub2tlbkludmFsaWRvKClcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICB9LCBbZXN0YWRvLmlkTGVtYnJldGVBcGFnYXIsIGVzdGFkby5sZW1icmV0ZXMsIG9uVG9rZW5JbnZhbGlkbywgdG9rZW5dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGVzdGFkby5sZW5kbykge1xyXG4gICAgICBsZUxlbWJyZXRlcyh0b2tlbilcclxuICAgICAgICAudGhlbihsZW1icmV0ZXMgPT4gc2V0RXN0YWRvKHsuLi5lc3RhZG9JbmljaWFsLCBsZW1icmV0ZXN9KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgc2V0RXN0YWRvKGVzdGFkb0luaWNpYWwpXHJcbiAgICAgICAgICBvblRva2VuSW52YWxpZG8oKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW2VzdGFkby5sZW5kbywgb25Ub2tlbkludmFsaWRvLCB0b2tlbl0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSc+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWhlYWRlcic+TW9zdHJhciBMZW1icmV0ZXNcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWluZm8nIG9uQ2xpY2s9e2xlVG9kb3NMZW1icmV0ZXN9PlxyXG4gICAgICAgICAgTGVyIExlbWJyZXRlc1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIGVzdGFkby5sZW1icmV0ZXMgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge2VzdGFkby5sZW1icmV0ZXMubWFwKGwgPT5cclxuICAgICAgICAgICAgICA8c3BhbiBrZXk9e2wuX2lkfT5cclxuICAgICAgICAgICAgICAgIDxNb3N0cmFMZW1icmV0ZSBpZD17bC5faWR9XHJcbiAgICAgICAgICAgICAgICAgIHRleHRvPXtsLnRleHRvfVxyXG4gICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gYXBhZ2FVbUxlbWJyZXRlKGwuX2lkKX0vPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj4pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAge1xyXG4gICAgICAgIGVzdGFkby5sZW1icmV0ZXMgIT09IHVuZGVmaW5lZCAmJiBcclxuICAgICAgICBlc3RhZG8ubGVtYnJldGVzLmxlbmd0aCA9PSAwICYmXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vdGlmaWNhdGlvbiBpcy13YXJuaW5nJz5Ow6NvIGjDoSBsZW1icmV0ZXMgcGFyYSBlc3RlIHVzdcOhcmlvLjwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3N0cmFMZW1icmV0ZXNcclxuIiwiLy9AZmxvd1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VSZWR1Y2VyLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0ICogYXMgcyBmcm9tICcuLi9zZXJ2aWNvcydcclxuXHJcbmltcG9ydCB0eXBlIHtUb2tlbiwgVG9rZW5EZWNvZGlmaWNhZG99IGZyb20gJy4uL3RpcG9zX2Zsb3cnXHJcblxyXG50eXBlIFByb3BzID0ge3wgXHJcbiAgb25Ub2tlbjogKHRva2VuOiBUb2tlbikgPT4gdm9pZCxcclxuICBvblNhaXU6ICgpID0+IHZvaWQsXHJcbiAgdG9rZW46IFRva2VuIHwgdm9pZCxcclxuICB0b2tlbkRlY29kaWZpY2FkbzogVG9rZW5EZWNvZGlmaWNhZG8gfCB2b2lkXHJcbnx9XHJcblxyXG50eXBlIEVzdGFkbyA9IHt8XHJcbiAgbG9naW46IHN0cmluZyxcclxuICBzZW5oYTogc3RyaW5nLFxyXG4gIGNvbmZlcmVTZW5oYTogc3RyaW5nLFxyXG4gIG5vdm9Vc3VhcmlvOiBib29sZWFuLFxyXG4gIG5vbWVCb3RhbzogJ0VudHJhcicgfCAnQ2FkYXN0cmFyIE5vdm8gVXN1w6FyaW8nLFxyXG4gIGZhemVuZG86ICduYWRhJyB8ICdsb2dpbicgfCAnY2FkYXN0cm8nIHwgICdsb2dvdXQnLFxyXG4gIG1zZzogc3RyaW5nIHwgdm9pZCAgXHJcbnx9XHJcblxyXG50eXBlIEFjYW8gPVxyXG4gICAge3wgdHlwZTogJ1JFR0lTVFJFX0xPR0lOJywgbG9naW46IHN0cmluZyB8fVxyXG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX1NFTkhBJywgc2VuaGE6IHN0cmluZyB8fVxyXG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX0NPTkZFUkVfU0VOSEEnLCBjb25mZXJlU2VuaGE6IHN0cmluZyB8fVxyXG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX05PVk9fVVNVQVJJTycsIG5vdm9Vc3VhcmlvOiBib29sZWFuIHx9XHJcbiAgfCB7fCB0eXBlOiAnRkFDQV9MT0dPVVQnfH1cclxuICB8IHt8IHR5cGU6ICdGQUNBX0xPR0lOX09VX0NBREFTVFJPJyB8fVxyXG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX0xPR0lOX09LJyB8fVxyXG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX0xPR0lOX05PSycsICBtb3Rpdm86IHN0cmluZyB8fVxyXG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX0NBREFTVFJPX09LJyB8fVxyXG4gIHwge3wgdHlwZTogJ1JFR0lTVFJFX0NBREFTVFJPX05PSycsICBtb3Rpdm86IHN0cmluZyB8fVxyXG5cclxuY29uc3QgZXN0YWRvSW5pY2lhbDogRXN0YWRvID0ge1xyXG4gIGxvZ2luOiAnJyxcclxuICBzZW5oYTogJycsXHJcbiAgY29uZmVyZVNlbmhhOiAnJyxcclxuICBub3ZvVXN1YXJpbzogZmFsc2UsXHJcbiAgbm9tZUJvdGFvOiAnRW50cmFyJyxcclxuICBmYXplbmRvOiAnbmFkYScsXHJcbiAgbXNnOiB1bmRlZmluZWRcclxufVxyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihlc3RhZG86IEVzdGFkbywgYWNhbzogQWNhbyk6IEVzdGFkbyB7XHJcbiAgc3dpdGNoIChhY2FvLnR5cGUpIHtcclxuICBjYXNlICdSRUdJU1RSRV9MT0dJTic6XHJcbiAgICByZXR1cm4gey4uLmVzdGFkbywgbG9naW46IGFjYW8ubG9naW4sIHNlbmhhOiAnJywgY29uZmVyZVNlbmhhOiAnJywgbXNnOiB1bmRlZmluZWR9XHJcbiAgXHJcbiAgY2FzZSAnUkVHSVNUUkVfU0VOSEEnOlxyXG4gICAgcmV0dXJuIHsuLi5lc3RhZG8sIHNlbmhhOiBhY2FvLnNlbmhhLCBtc2c6IHVuZGVmaW5lZH1cclxuXHJcbiAgY2FzZSAnUkVHSVNUUkVfQ09ORkVSRV9TRU5IQSc6XHJcbiAgICByZXR1cm4gey4uLmVzdGFkbywgY29uZmVyZVNlbmhhOiBhY2FvLmNvbmZlcmVTZW5oYSwgbXNnOiB1bmRlZmluZWR9XHJcblxyXG4gIGNhc2UgJ1JFR0lTVFJFX05PVk9fVVNVQVJJTyc6IHtcclxuICAgIGNvbnN0IG5vbWVCb3RhbyA9IGFjYW8ubm92b1VzdWFyaW8gPyAnQ2FkYXN0cmFyIE5vdm8gVXN1w6FyaW8nIDogJ0VudHJhcidcclxuICAgIHJldHVybiB7Li4uZXN0YWRvLCBub3ZvVXN1YXJpbzogYWNhby5ub3ZvVXN1YXJpbywgbm9tZUJvdGFvLCBtc2c6IHVuZGVmaW5lZH1cclxuICB9XHJcbiAgXHJcbiAgY2FzZSAnRkFDQV9MT0dPVVQnOlxyXG4gICAgcmV0dXJuIHsuLi5lc3RhZG9JbmljaWFsLCBmYXplbmRvOiAnbG9nb3V0J31cclxuXHJcbiAgY2FzZSAnRkFDQV9MT0dJTl9PVV9DQURBU1RSTyc6IHtcclxuICAgIGlmIChlc3RhZG8ubG9naW4gPT09ICcnKVxyXG4gICAgICByZXR1cm4gey4uLmVzdGFkbywgbXNnOiAnTG9naW4gbsOjbyBkZWZpbmlkby4nfVxyXG4gICAgZWxzZSBpZiAoZXN0YWRvLm5vdm9Vc3VhcmlvKSB7XHJcbiAgICAgIGlmIChlc3RhZG8uc2VuaGEgPT09ICcnIHx8IGVzdGFkby5jb25mZXJlU2VuaGEgPT09ICcnKVxyXG4gICAgICAgIHJldHVybiB7Li4uZXN0YWRvLCBtc2c6ICdTZW5oYSBuw6NvIGRlZmluaWRhLid9XHJcbiAgICAgIGVsc2UgaWYgKGVzdGFkby5zZW5oYSAhPT0gZXN0YWRvLmNvbmZlcmVTZW5oYSlcclxuICAgICAgICByZXR1cm4gey4uLmVzdGFkbywgbXNnOiAnU2VuaGFzIG7Do28gc8OjbyBpZ3VhaXMuJ31cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsuLi5lc3RhZG8sIGZhemVuZG86ICdjYWRhc3RybycsIG1zZzogJ0ZhemVuZG8gY2FkYXN0cm8uLi4nfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGVzdGFkby5zZW5oYSA9PT0gJycpXHJcbiAgICAgIHJldHVybiB7Li4uZXN0YWRvLCBtc2c6ICdTZW5oYSBuw6NvIGRlZmluaWRhJ31cclxuICAgIGVsc2Uge1xyXG4gICAgICByZXR1cm4gey4uLmVzdGFkbywgZmF6ZW5kbzogJ2xvZ2luJywgbXNnOiAnRmF6ZW5kbyBsb2dpbi4uLid9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYXNlICdSRUdJU1RSRV9MT0dJTl9PSyc6XHJcbiAgICByZXR1cm4gey4uLmVzdGFkbyAsIG1zZzogdW5kZWZpbmVkLCBmYXplbmRvOiAnbmFkYSd9XHJcblxyXG4gIGNhc2UgJ1JFR0lTVFJFX0xPR0lOX05PSyc6XHJcbiAgICByZXR1cm4gey4uLmVzdGFkbywgbXNnOiBhY2FvLm1vdGl2bywgZmF6ZW5kbzogJ25hZGEnfVxyXG5cclxuICBjYXNlICdSRUdJU1RSRV9DQURBU1RST19PSyc6XHJcbiAgICByZXR1cm4gey4uLmVzdGFkbyAsIG1zZzogdW5kZWZpbmVkLCBmYXplbmRvOiAnbmFkYSd9XHJcbiAgICBcclxuICBjYXNlICdSRUdJU1RSRV9DQURBU1RST19OT0snOlxyXG4gICAgcmV0dXJuIHsuLi5lc3RhZG8sIG1zZzogYWNhby5tb3Rpdm8sIGZhemVuZG86ICduYWRhJ31cclxuICAgIFxyXG4gIGRlZmF1bHQ6XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEJVRzogYWNhby50eXBlIGludsOhbGlkbzogJHthY2FvLnR5cGV9YClcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBMb2dpbiAocHJvcHM6IFByb3BzKSB7XHJcbiAgY29uc3QgW2VzdGFkbywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBlc3RhZG9JbmljaWFsKVxyXG5cclxuICBcclxuICBmdW5jdGlvbiBsb2dpbihldikge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9MT0dJTicsIGxvZ2luOiBldi50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VuaGEoZXYpIHtcclxuICAgIGRpc3BhdGNoKHt0eXBlOiAnUkVHSVNUUkVfU0VOSEEnLCBzZW5oYTogZXYudGFyZ2V0LnZhbHVlfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbmZlcmVTZW5oYShldikge1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9DT05GRVJFX1NFTkhBJywgY29uZmVyZVNlbmhhOiBldi50YXJnZXQudmFsdWV9KVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gbm92b1VzdWFyaW8oKSB7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogJ1JFR0lTVFJFX05PVk9fVVNVQVJJTycsIG5vdm9Vc3VhcmlvOiAhZXN0YWRvLm5vdm9Vc3VhcmlvfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZhY2FMb2dpbk91Q2FkYXN0cm8oKSB7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogJ0ZBQ0FfTE9HSU5fT1VfQ0FEQVNUUk8nfSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZhY2FMb2dvdXQoKSB7XHJcbiAgICBkaXNwYXRjaCh7dHlwZTogJ0ZBQ0FfTE9HT1VUJ30pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblRva2VuID0gcHJvcHMub25Ub2tlblxyXG4gIGNvbnN0IG9uU2FpdSA9IHByb3BzLm9uU2FpdVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc3dpdGNoIChlc3RhZG8uZmF6ZW5kbykge1xyXG4gICAgY2FzZSAnbG9naW4nOlxyXG4gICAgICBzLmZhekxvZ2luKGVzdGFkby5sb2dpbiwgZXN0YWRvLnNlbmhhKVxyXG4gICAgICAgIC50aGVuKHRva2VuID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnUkVHSVNUUkVfTE9HSU5fT0snfSlcclxuICAgICAgICAgIG9uVG9rZW4odG9rZW4pXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJybyA9PiBkaXNwYXRjaCh7dHlwZTogJ1JFR0lTVFJFX0xPR0lOX05PSycsIG1vdGl2bzogZXJyby5tZXNzYWdlfSkpXHJcbiAgICAgIGJyZWFrXHJcbiAgICBcclxuICAgIGNhc2UgJ2NhZGFzdHJvJzpcclxuICAgICAgcy5mYXpDYWRhc3Rybyhlc3RhZG8ubG9naW4sIGVzdGFkby5zZW5oYSlcclxuICAgICAgICAudGhlbih0b2tlbiA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ1JFR0lTVFJFX0NBREFTVFJPX09LJ30pXHJcbiAgICAgICAgICBvblRva2VuKHRva2VuKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm8gPT4gZGlzcGF0Y2goe3R5cGU6ICdSRUdJU1RSRV9DQURBU1RST19OT0snLCBtb3Rpdm86IGVycm8ubWVzc2FnZX0pKVxyXG4gICAgICBicmVha1xyXG5cclxuICAgIGNhc2UgJ2xvZ291dCc6XHJcbiAgICAgIG9uU2FpdSgpXHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgY2FzZSAnbmFkYSc6XHJcbiAgICAgIGJyZWFrXHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWtcclxuICAgIH1cclxuICBcclxuICB9LCBbZXN0YWRvLmZhemVuZG8sIGVzdGFkby5sb2dpbiwgZXN0YWRvLnNlbmhhLCBvblRva2VuLCBvblNhaXVdKVxyXG5cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgbGV0IGNvbnRldWRvXHJcbiAgaWYgKHByb3BzLnRva2VuRGVjb2RpZmljYWRvID09PSB1bmRlZmluZWQpIHtcclxuICAgIGNvbnRldWRvID1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZSBpcy1saW5rJz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWhlYWRlcic+TG9naW48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWJvZHknPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nY2hlY2tib3gnPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSdjaGVja2JveCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG8ubm92b1VzdWFyaW99XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17bm92b1VzdWFyaW99Lz5ub3ZvIHVzdcOhcmlvXHJcbiAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaWVsZCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnPkxvZ2luPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbCc+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dCcgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2VzdGFkby5sb2dpbn0gb25DaGFuZ2U9e2xvZ2lufS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmllbGQnPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJz5TZW5oYTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wnPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXQnIHR5cGU9J3Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17ZXN0YWRvLnNlbmhhfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17c2VuaGF9Lz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBlc3RhZG8ubm92b1VzdWFyaW8gJiZcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZpZWxkJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCc+UmVwaXRhIFNlbmhhPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbCc+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dCcgdHlwZT0ncGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtlc3RhZG8uY29uZmVyZVNlbmhhfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Y29uZmVyZVNlbmhhfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gaXMtbGluaycgb25DbGljaz17ZmFjYUxvZ2luT3VDYWRhc3Ryb30+XHJcbiAgICAgICAgICAgICAge2VzdGFkby5ub21lQm90YW99XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZXN0YWRvLm1zZyAmJlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbm90aWZpY2F0aW9uIGlzLXdhcm5pbmcnPntlc3RhZG8ubXNnfTwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICB9IGVsc2Uge1xyXG4gICAgY29udGV1ZG8gPVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlIGlzLWluZm8nPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UtaGVhZGVyJz5cclxuICAgICAgICAgICAgVXN1w6FyaW8gbG9nYWRvOiB7cHJvcHMudG9rZW5EZWNvZGlmaWNhZG8ubG9naW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZXNzYWdlLWJvZHknPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWxpbmsnIG9uQ2xpY2s9e2ZhY2FMb2dvdXR9PlNhaXI8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtjb250ZXVkb31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luXHJcbiIsIi8vQGZsb3dcclxuXHJcbi8vIC0tLS0tXHJcbi8vIGltcGxlbWVudGEgYWNlc3NvIGEgc2VydmnDp29zIGRpc3BvbsOtdmVpcyBubyBsYWRvIHNlcnZpZG9yXHJcbi8vIC0tLS0tXHJcblxyXG5pbXBvcnQgdHlwZSB7VG9rZW59IGZyb20gJy4vdGlwb3NfZmxvdydcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZhekNhZGFzdHJvIChsb2dpbjogc3RyaW5nLCBzZW5oYTogc3RyaW5nKSB7XHJcbiAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZXhlY3V0YVBPU1QoJy9jbWRGYWNhQ2FkYXN0cm8nLCB7IGxvZ2luLCBzZW5oYSB9KVxyXG4gIGlmIChyZXNwb3N0YS5vaykgeyByZXR1cm4gcmVzcG9zdGEudG9rZW4gfSBlbHNlIHsgdGhyb3cgbmV3IEVycm9yKHJlc3Bvc3RhLm1lc3NhZ2UpIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmF6TG9naW4gKGxvZ2luOiBzdHJpbmcsIHNlbmhhOiBzdHJpbmcpIHtcclxuICBsZXQgcmVzcG9zdGEgPSBhd2FpdCBleGVjdXRhUE9TVCgnL2NtZEZhY2FMb2dpbicsIHsgbG9naW4sIHNlbmhhIH0pXHJcbiAgaWYgKHJlc3Bvc3RhLm9rKSB7IHJldHVybiByZXNwb3N0YS50b2tlbiB9IGVsc2UgeyB0aHJvdyBuZXcgRXJyb3IocmVzcG9zdGEubWVzc2FnZSkgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwdWJsaWNhTGVtYnJldGUgKHRleHRvOiBzdHJpbmcsIHRva2VuOiBUb2tlbikge1xyXG4gIGxldCByZXNwb3N0YSA9IGF3YWl0IGV4ZWN1dGFQT1NUKCcvY21kUHVibGlxdWVMZW1icmV0ZScsIHsgdGV4dG8sIHRva2VuIH0pXHJcbiAgaWYgKHJlc3Bvc3RhLm9rKSB7IHJldHVybiB7IG9rOiB0cnVlIH0gfVxyXG4gIHRocm93IG5ldyBFcnJvcigndG9rZW4gaW52w6FsaWRvIG91IGV4cGlyYWRvJylcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbGVMZW1icmV0ZXMgKHRva2VuOiBUb2tlbikge1xyXG4gIGxldCByZXNwb3N0YSA9IGF3YWl0IGV4ZWN1dGFHRVQoJy9xcnlMZWlhTGVtYnJldGVzJywgeyB0b2tlbiB9KVxyXG4gIGlmIChyZXNwb3N0YS5vaykgeyByZXR1cm4gcmVzcG9zdGEubGVtYnJldGVzIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoJ3Rva2VuIGludsOhbGlkbyBvdSBleHBpcmFkbycpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFwYWdhTGVtYnJldGUgKHRva2VuOiBUb2tlbiwgaWRMZW1icmV0ZTogc3RyaW5nKSB7XHJcbiAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZXhlY3V0YURFTEVURSgnL2NtZEFwYWd1ZUxlbWJyZXRlJywgeyBpZExlbWJyZXRlLCB0b2tlbiB9KVxyXG4gIGlmIChyZXNwb3N0YS5vaykgeyByZXR1cm4geyBvazogdHJ1ZSB9IH1cclxuICB0aHJvdyBuZXcgRXJyb3IoJ3Rva2VuIGludsOhbGlkbyBvdSBleHBpcmFkbycpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGFQT1NUIChjYW1pbmhvLCBkYWRvcykge1xyXG4gIHJldHVybiBleGVjdXRhUE9TVE9VREVMRVRFKCdQT1NUJywgY2FtaW5obywgZGFkb3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGFERUxFVEUgKGNhbWluaG8sIGRhZG9zKSB7XHJcbiAgcmV0dXJuIGV4ZWN1dGFQT1NUT1VERUxFVEUoJ0RFTEVURScsIGNhbWluaG8sIGRhZG9zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBleGVjdXRhUE9TVE9VREVMRVRFIChtZXRvZG8sIGNhbWluaG8sIGRhZG9zKSB7XHJcbiAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgbWV0aG9kOiBtZXRvZG8sXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYWRvcylcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW5kb3cuZmV0Y2goY2FtaW5obywgcGFyYW1zKVxyXG4gICAgLnRoZW4ocmVzcG9zdGEgPT4ge1xyXG4gICAgICBpZiAoIXJlc3Bvc3RhLm9rKSB7IHRocm93IG5ldyBFcnJvcignRmFsaGEgbmEgY29tdW5pY2HDp8OjbyBjb20gc2Vydmlkb3InKSB9XHJcbiAgICAgIHJldHVybiByZXNwb3N0YVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlc3Bvc3RhID0+IHJlc3Bvc3RhLmpzb24oKSlcclxufVxyXG5cclxuZnVuY3Rpb24gZXhlY3V0YUdFVCAoY2FtaW5obywgZGFkb3MpIHtcclxuICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGNvcnBvID0gSlNPTi5zdHJpbmdpZnkoZGFkb3MpXHJcbiAgcmV0dXJuIHdpbmRvdy5mZXRjaChgJHtjYW1pbmhvfT9kYWRvcz0ke2NvcnBvfWAsIHBhcmFtcylcclxuICAgIC50aGVuKHJlc3Bvc3RhID0+IHtcclxuICAgICAgaWYgKCFyZXNwb3N0YS5vaykgeyB0aHJvdyBuZXcgRXJyb3IoJ0ZhbGhhIG5hIGNvbXVuaWNhw6fDo28gY29tIHNlcnZpZG9yJykgfVxyXG4gICAgICByZXR1cm4gcmVzcG9zdGFcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXNwb3N0YSA9PiByZXNwb3N0YS5qc29uKCkpXHJcbn1cclxuXHJcbmV4cG9ydCB7IGZhekxvZ2luLCBmYXpDYWRhc3RybywgcHVibGljYUxlbWJyZXRlLCBsZUxlbWJyZXRlcywgYXBhZ2FMZW1icmV0ZSB9XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXcvQXBwLmpzeCdcclxuXHJcbmNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pXHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBlbGVtKSJdLCJzb3VyY2VSb290IjoiIn0=