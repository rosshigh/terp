"use strict";
(self["webpackChunkts410"] = self["webpackChunkts410"] || []).push([["app"],{

/***/ "app":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-router */ 433);
var _dec, _class;



var App = (_dec = (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_router__WEBPACK_IMPORTED_MODULE_1__.Router), _dec(_class = /*#__PURE__*/function () {
  function App(router) {
    this.router = router;
  }

  var _proto = App.prototype;

  _proto.configureRouter = function configureRouter(config, router) {
    this.router = router;
    config.title = 'KB';
    config.map([{
      route: ['', 'quiz'],
      moduleId: './modules/quiz/quiz',
      name: 'Quiz',
      settings: {
        auth: false,
        roles: []
      }
    }, {
      route: 'admin',
      moduleId: './modules/quiz/editQuiz',
      name: 'EdistQuiz',
      settings: {
        auth: false,
        roles: []
      }
    }]);
  };

  return App;
}()) || _class);

/***/ }),

/***/ 764:
/*!**************************!*\
  !*** ./src/appConfig.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfig": function() { return /* binding */ AppConfig; }
/* harmony export */ });
var AppConfig = function AppConfig() {
  this.HOST = location.origin;
  this.BASE_URL = this.HOST;
  this.screenHeight = $(window).height();
};

/***/ }),

/***/ "main":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var _config_environment_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/environment.json */ 407);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 15);


function configure(aurelia) {
  aurelia.use.standardConfiguration().feature('resources/index');
  aurelia.use.developmentLogging(_config_environment_json__WEBPACK_IMPORTED_MODULE_0__.debug ? 'debug' : 'warn');

  if (_config_environment_json__WEBPACK_IMPORTED_MODULE_0__.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(function () {
    return aurelia.setRoot('app');
  });
}

/***/ }),

/***/ "modules/quiz/editQuiz":
/*!**************************************!*\
  !*** ./src/modules/quiz/editQuiz.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditQuiz": function() { return /* binding */ EditQuiz; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _resources_data_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/data/quiz */ 147);
var _dec, _class;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var EditQuiz = (_dec = (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(_resources_data_quiz__WEBPACK_IMPORTED_MODULE_1__.QuizServices), _dec(_class = /*#__PURE__*/function () {
  function EditQuiz(quiz) {
    this.showQuestions = true;
    this.questionIndex = 0;
    this.quiz = quiz;
  }

  var _proto = EditQuiz.prototype;

  _proto.activate = /*#__PURE__*/function () {
    var _activate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.quiz.getQuizArray();

            case 2:
              this.showTable = true;

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function activate() {
      return _activate.apply(this, arguments);
    }

    return activate;
  }();

  _proto.selectQuiz = /*#__PURE__*/function () {
    var _selectQuiz = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.quiz.getQuestionArray(this.selectedUnit);

            case 2:
              this.currentFlash = this.quiz.questionArray[0].flash;
              this.currentCard = "";

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function selectQuiz() {
      return _selectQuiz.apply(this, arguments);
    }

    return selectQuiz;
  }();

  _proto.selectQuestion = /*#__PURE__*/function () {
    var _selectQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(question) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.quiz.getQuestion(question._id);

            case 2:
              this.showTable = false;

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function selectQuestion(_x) {
      return _selectQuestion.apply(this, arguments);
    }

    return selectQuestion;
  }();

  _proto.saveQuestion = /*#__PURE__*/function () {
    var _saveQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.quiz.saveQuestion();

            case 2:
              _context4.next = 4;
              return this.selectQuiz();

            case 4:
              this.showTable = true;

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function saveQuestion() {
      return _saveQuestion.apply(this, arguments);
    }

    return saveQuestion;
  }();

  _proto.back = function back() {
    this.showTable = true;
  };

  _proto.newQuestion = function newQuestion() {
    this.quiz.newQuestion(this.selectedUnit);
    this.showTable = false;
  };

  _proto.deleteQuestion = /*#__PURE__*/function () {
    var _deleteQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              this.quiz.deleteQuestion();
              _context5.next = 3;
              return this.selectQuiz();

            case 3:
              this.showTable = true;

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function deleteQuestion() {
      return _deleteQuestion.apply(this, arguments);
    }

    return deleteQuestion;
  }();

  return EditQuiz;
}()) || _class);

/***/ }),

/***/ "modules/quiz/quiz":
/*!**********************************!*\
  !*** ./src/modules/quiz/quiz.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizTool": function() { return /* binding */ QuizTool; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _resources_data_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resources/data/quiz */ 147);
var _dec, _class;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var QuizTool = (_dec = (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(_resources_data_quiz__WEBPACK_IMPORTED_MODULE_1__.QuizServices), _dec(_class = /*#__PURE__*/function () {
  function QuizTool(quiz) {
    this.showQuestions = true;
    this.questionIndex = 0;
    this.quiz = quiz;
  }

  var _proto = QuizTool.prototype;

  _proto.activate = /*#__PURE__*/function () {
    var _activate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.quiz.getQuizArray();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function activate() {
      return _activate.apply(this, arguments);
    }

    return activate;
  }();

  _proto.selectQuiz = /*#__PURE__*/function () {
    var _selectQuiz = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.quiz.getQuestionArray(this.selectedUnit);

            case 2:
              this.currentFlash = this.quiz.questionArray[0].flash;
              this.currentCard = "";

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function selectQuiz() {
      return _selectQuiz.apply(this, arguments);
    }

    return selectQuiz;
  }();

  _proto.previous = function previous() {
    this.questionIndex = this.questionIndex > 0 ? this.questionIndex - 1 : 0;
    this.currentFlash = this.quiz.questionArray[this.questionIndex].flash;
    this.showCard = false;
  };

  _proto.next = function next() {
    this.questionIndex = this.questionIndex < this.quiz.questionArray.length - 1 ? this.questionIndex + 1 : this.quiz.questionArray.length - 1;
    this.currentFlash = this.quiz.questionArray[this.questionIndex].flash;
    this.showCard = false;
  };

  _proto.showFlashAnswer = function showFlashAnswer() {
    this.currentCard = this.quiz.questionArray[this.questionIndex].card;
    this.showCard = true;
  };

  return QuizTool;
}()) || _class);

/***/ }),

/***/ 86:
/*!********************************************!*\
  !*** ./src/resources/data/dataServices.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataServices": function() { return /* binding */ DataServices; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_http_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-http-client */ 139);
/* harmony import */ var aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-event-aggregator */ "aurelia-event-aggregator");
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appConfig */ 764);
var _dec, _class;





var DataServices = (_dec = (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(aurelia_http_client__WEBPACK_IMPORTED_MODULE_1__.HttpClient, aurelia_event_aggregator__WEBPACK_IMPORTED_MODULE_2__.EventAggregator, _appConfig__WEBPACK_IMPORTED_MODULE_3__.AppConfig), _dec(_class = /*#__PURE__*/function () {
  function DataServices(http, eventAggregator, config) {
    var _this = this;

    this.isRequesting = false;
    this.http = http;
    this.eventAggregator = eventAggregator;
    this.config = config;
    this.http.configure(function (x) {
      x.withBaseUrl(_this.config.BASE_URL);
    });
  }

  var _proto = DataServices.prototype;

  _proto.activate = function activate() {};

  _proto.get = function get(url) {
    var _this2 = this;

    this.isRequesting = true;
    return this.http.createRequest(url).asGet().withHeader('Authorization', 'JWT ' + sessionStorage.getItem('token')).send().then(function (response) {
      _this2.isRequesting = false;

      if (!response.isSuccess) {
        return response;
      } else {
        return JSON.parse(response.response);
      }
    }).catch(function (e) {
      _this2.isRequesting = false;
      console.log(e);
      return {
        error: true,
        code: e.statusCode,
        message: e.statusText
      };
    });
  };

  _proto.getNoAuth = function getNoAuth(url) {
    var _this3 = this;

    this.isRequesting = true;
    return this.http.createRequest(url).asGet().send().then(function (response) {
      _this3.isRequesting = false;

      if (!response.isSuccess) {
        return response;
      } else {
        return JSON.parse(response.response);
      }
    }).catch(function (e) {
      _this3.isRequesting = false;
      console.log(e);
      return {
        error: true,
        code: e.statusCode,
        message: e.statusText
      };
    });
  };

  _proto.saveObject = function saveObject(content, url, method) {
    var _this4 = this;

    this.isRequesting = true;

    if (method === 'put') {
      return this.http.createRequest(url).asPut().withHeader('Authorization', 'JWT ' + sessionStorage.getItem('token')).withContent(content).send().then(function (response) {
        _this4.isRequesting = false;

        if (!response.isSuccess) {
          return response;
        } else {
          return JSON.parse(response.response);
        }
      }).catch(function (e) {
        _this4.isRequesting = false;
        console.log(e);
        return {
          error: true,
          code: e.statusCode,
          message: e.statusText
        };
      });
    } else if (method === 'post') {
      return this.http.createRequest(url).asPost().withHeader('Authorization', 'JWT ' + sessionStorage.getItem('token')).withContent(content).send().then(function (response) {
        _this4.isRequesting = false;

        if (!response.isSuccess) {
          return response;
        } else {
          return JSON.parse(response.response);
        }
      }).catch(function (e) {
        _this4.isRequesting = false;
        console.log(e);
        return {
          error: true,
          code: e.statusCode,
          message: e.statusText
        };
      });
    }
  };

  _proto.deleteObject = function deleteObject(url) {
    var _this5 = this;

    this.isRequesting = true;
    return this.http.createRequest(url).asDelete().withHeader('Authorization', 'JWT ' + sessionStorage.getItem('token')).send().then(function (response) {
      _this5.isRequesting = false;

      if (!response.isSuccess) {
        return response;
      } else {
        if (response.statusCode === 204) {
          return response;
        } else {
          return JSON.parse(response.response);
        }
      }
    }).catch(function (e) {
      _this5.isRequesting = false;
      console.log(e);
      return {
        error: true,
        code: e.statusCode,
        message: e.statusText
      };
    });
  };

  _proto.login = function login(content, url, ucc) {
    var _this6 = this;

    return this.http.createRequest(url).asPost().withBaseUrl(ucc).withContent(content).send().then(function (response) {
      _this6.isRequesting = false;
      return JSON.parse(response.response);
    }).catch(function (e) {
      _this6.isRequesting = false;
      console.log(e);
      return {
        error: true,
        code: e.statusCode,
        message: e.statusText
      };
    });
  };

  _proto.uploadFiles = function uploadFiles(files, url) {
    var _this7 = this;

    // this.isRequesting = true;
    this.progress = 0;
    var formData = new FormData();
    files.forEach(function (item, index) {
      formData.append("file" + index, item);
    });
    return this.http.createRequest(url).asPost().withHeader('Authorization', 'JWT ' + sessionStorage.getItem('token')).withContent(formData).skipContentProcessing().withProgressCallback(function (progress) {
      console.log(progress.loaded);

      _this7.eventAggregator.publish('upload-progress', {
        progress: progress.loaded,
        total: progress.total
      });

      _this7.progress = progress.loaded / progress.total;
    }).send().then(function (response) {
      _this7.isRequesting = false;

      if (!response.isSuccess) {
        return response;
      } else {
        return JSON.parse(response.response);
      }
    }).catch(function (e) {
      _this7.isRequesting = false;
      console.log(e);
      return {
        error: true,
        code: e.statusCode,
        message: e.statusText
      };
    });
  };

  _proto.processError = function processError(obj, message) {
    console.log(obj);
    var msg = (message ? message : "") + " ";

    switch (obj.code) {
      case 404:
        msg = undefined;
        break;

      case 422:
        msg = msg += "The request was bad.  Contact your UCC.";
        break;

      case 409:
        msg = msg += "The record already exists.";
        break;

      case 500:
        msg = msg += "An unspecified error occured on the server.  Contact your UCC.";
        break;

      default:
        msg = msg += "An unspecified error occured.  Contact your UCC.";
    }

    if (msg && msg.length > 0) console.log(msg);
  };

  return DataServices;
}()) || _class);

/***/ }),

/***/ 147:
/*!************************************!*\
  !*** ./src/resources/data/quiz.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuizServices": function() { return /* binding */ QuizServices; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var _data_dataServices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/dataServices */ 86);
var _dec, _class;

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var QuizServices = (_dec = (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(_data_dataServices__WEBPACK_IMPORTED_MODULE_1__.DataServices), _dec(_class = /*#__PURE__*/function () {
  function QuizServices(data) {
    this.QUIZ_URL = 'quiz';
    this.QUESTION_URL = 'question';
    this.data = data;
  } //Quizzes


  var _proto = QuizServices.prototype;

  _proto.getQuizArray =
  /*#__PURE__*/
  function () {
    var _getQuizArray = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var serverResponse;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.quizzesArray = new Array();
              _context.prev = 1;
              _context.next = 4;
              return this.data.get("quizzes?order=sortOrder");

            case 4:
              serverResponse = _context.sent;

              if (serverResponse.status) {
                _context.next = 9;
                break;
              }

              this.quizzesArray = serverResponse;
              _context.next = 10;
              break;

            case 9:
              return _context.abrupt("return", undefined);

            case 10:
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);
              return _context.abrupt("return", undefined);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[1, 12]]);
    }));

    function getQuizArray() {
      return _getQuizArray.apply(this, arguments);
    }

    return getQuizArray;
  }();

  _proto.selectQuiz = function selectQuiz(index) {
    if (!index) {
      this.selectedQuiz = this.emptyQuiz();
    }
  };

  _proto.setQuiz = function setQuiz(doc) {
    this.selectedQuiz = doc;
  };

  _proto.emptyQuiz = function emptyQuiz() {
    var obj = {};
    obj.name = "";
    return obj;
  };

  _proto.saveQuiz = /*#__PURE__*/function () {
    var _saveQuiz = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (this.selectedQuiz) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              if (this.selectedQuiz._id) {
                _context2.next = 9;
                break;
              }

              _context2.next = 5;
              return this.data.saveObject(this.selectedQuiz, "quizzes", "post");

            case 5:
              _context2.next = 7;
              return this.getQuizArray();

            case 7:
              _context2.next = 13;
              break;

            case 9:
              _context2.next = 11;
              return this.data.saveObject(this.selectedQuiz, "quizzes/" + this.selectedQuiz._id, "put");

            case 11:
              _context2.next = 13;
              return this.getQuizArray();

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function saveQuiz() {
      return _saveQuiz.apply(this, arguments);
    }

    return saveQuiz;
  }();

  _proto.deleteQuiz = /*#__PURE__*/function () {
    var _deleteQuiz = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!id) {
                _context3.next = 6;
                break;
              }

              _context3.next = 3;
              return this.data.deleteObject("quizzes/" + id);

            case 3:
              _context3.next = 5;
              return this.getQuizArray();

            case 5:
              this.emptyQuiz();

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function deleteQuiz(_x) {
      return _deleteQuiz.apply(this, arguments);
    }

    return deleteQuiz;
  }() //Questions
  ;

  _proto.getQuestionArray =
  /*#__PURE__*/
  function () {
    var _getQuestionArray = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id) {
      var serverResponse, i, j, temp;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              this.questionArray = new Array();
              _context4.prev = 1;
              _context4.next = 4;
              return this.data.get("questions/quiz/" + id);

            case 4:
              serverResponse = _context4.sent;

              if (serverResponse.status) {
                _context4.next = 11;
                break;
              }

              this.questionArray = serverResponse;
              this.questionArray.forEach(function (item) {
                item.sortOrder = Math.random();
              });

              for (i = 0; i < this.questionArray.length; i++) {
                for (j = 0; j < this.questionArray.length - 1; j++) {
                  if (this.questionArray[j].sortOrder < this.questionArray[j + 1].sortOrder) {
                    temp = this.questionArray[j];
                    this.questionArray[j] = this.questionArray[j + 1];
                    this.questionArray[j + 1] = temp;
                  }
                }
              }

              _context4.next = 12;
              break;

            case 11:
              return _context4.abrupt("return", undefined);

            case 12:
              _context4.next = 18;
              break;

            case 14:
              _context4.prev = 14;
              _context4.t0 = _context4["catch"](1);
              console.log(_context4.t0);
              return _context4.abrupt("return", undefined);

            case 18:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[1, 14]]);
    }));

    function getQuestionArray(_x2) {
      return _getQuestionArray.apply(this, arguments);
    }

    return getQuestionArray;
  }();

  _proto.selectQuestion = function selectQuestion(index) {
    if (!index && index !== 0) {
      this.selectedQuestion = this.emptyQuestion();
    } else {
      this.selectedQuestion = this.questionArray[index];
    }
  };

  _proto.getQuestion = /*#__PURE__*/function () {
    var _getQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.data.get("questions/" + id);

            case 2:
              response = _context5.sent;
              this.selectedQuestion = response;

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getQuestion(_x3) {
      return _getQuestion.apply(this, arguments);
    }

    return getQuestion;
  }();

  _proto.setQuestion = function setQuestion(doc) {
    this.selectedQuestion = doc;
  };

  _proto.newQuestion = function newQuestion(quizID) {
    this.selectedQuestion = this.emptyQuestion(quizID);
  };

  _proto.emptyQuestion = function emptyQuestion(quizID) {
    var obj = {};
    obj.unit = quizID;
    obj.flash = "";
    obj.card = "";
    return obj;
  };

  _proto.saveQuestion = /*#__PURE__*/function () {
    var _saveQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (this.selectedQuestion) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return");

            case 2:
              if (this.selectedQuestion._id) {
                _context6.next = 7;
                break;
              }

              _context6.next = 5;
              return this.data.saveObject(this.selectedQuestion, "questions", "post");

            case 5:
              _context6.next = 9;
              break;

            case 7:
              _context6.next = 9;
              return this.data.saveObject(this.selectedQuestion, "questions/" + this.selectedQuestion._id, "put");

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function saveQuestion() {
      return _saveQuestion.apply(this, arguments);
    }

    return saveQuestion;
  }();

  _proto.deleteQuestion = /*#__PURE__*/function () {
    var _deleteQuestion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (this.selectedQuestion) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return");

            case 2:
              _context7.next = 4;
              return this.data.deleteObject("questions/" + this.selectedQuestion._id);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));

    function deleteQuestion() {
      return _deleteQuestion.apply(this, arguments);
    }

    return deleteQuestion;
  }();

  return QuizServices;
}()) || _class);

/***/ }),

/***/ "resources/editor/editor":
/*!****************************************!*\
  !*** ./src/resources/editor/editor.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Editor": function() { return /* binding */ Editor; }
/* harmony export */ });
/* harmony import */ var aurelia_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-framework */ "aurelia-framework");
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ 778);
var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



var Editor = (_dec = (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.inject)(Element, aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ObserverLocator), _dec2 = (0,aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable)({
  defaultBindingMode: aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindingMode.twoWay
}), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function Editor(element, observerLocator) {
    var _this = this;

    _initializerDefineProperty(this, "value", _descriptor, this);

    _initializerDefineProperty(this, "height", _descriptor2, this);

    _initializerDefineProperty(this, "editorid", _descriptor3, this);

    _initializerDefineProperty(this, "toolbar", _descriptor4, this);

    _initializerDefineProperty(this, "placeholder", _descriptor5, this);

    this.editor = null;
    this.element = element;
    this.subscriptions = [observerLocator.getObserver(this, 'value').subscribe(function (newValue) {
      if (_this.editor && newValue !== _this.editor.summernote('code')) {
        _this.editor.summernote('code', newValue);
      }
    })];
  }

  var _proto = Editor.prototype;

  _proto.attached = function attached() {
    var that = this;
    this.editor = $("#" + this.editorid);
    this.editor.data('view-model', this);
    this.editor.summernote({
      placeholder: this.placeholder,
      height: this.height,
      toolbar: this.toolbar,
      callbacks: {
        onChange: function onChange(contents) {
          that.value = contents;
          $("#" + this.editorid).summernote('editor.saveRange');
        },
        onFocus: function onFocus(contents) {
          console.log('');
        } // onPaste: function(e) {
        // 	var node = document.createElement('p');
        // 	// @param {Node} node
        // 	$('#summernote').summernote('insertNode', node);
        // 	console.log('Called event paste');
        // }

      }
    });
    this.editor.summernote('code', this.value);
  };

  _proto.detached = function detached() {
    this.editor.summernote('destroy');
  };

  _proto.guid = function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  };

  return Editor;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "height", [aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 250;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "editorid", [aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "summernote-" + this.guid();
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toolbar", [aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [['style', ['style']], ['font', ['bold', 'italic', 'underline', 'clear']], ['color', ['color']], ['fontname', ['fontname']], ['fontsize', ['fontsize']], ['pata', ['ul', 'ol', 'paragraph']], ['insert', ['picture', 'link', 'table', 'hello']], ['misc', ['undo', 'redo', 'fullscreen']]];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "placeholder", [aurelia_framework__WEBPACK_IMPORTED_MODULE_0__.bindable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

/***/ }),

/***/ "resources/index":
/*!********************************!*\
  !*** ./src/resources/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
function configure(config) {
  config.globalResources(['./editor/editor']);
}

/***/ }),

/***/ "app.html":
/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\n  <router-view></router-view>\n</template>\n";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "modules/quiz/editQuiz.html":
/*!****************************************!*\
  !*** ./src/modules/quiz/editQuiz.html ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col col-lg-3\" style=\"margin-top:20px;\">\r\n                <h3>Unit</h3>\r\n                <select value.bind=\"selectedUnit\" class=\"form-control\" change.trigger=\"selectQuiz()\">\r\n                    <option value=\"\"></option>\r\n                    <option repeat.for=\"unit of quiz.quizzesArray\" value=\"${unit._id}\">${unit.name}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n\r\n      \r\n\r\n        <div style=\"margin-top:20px;\" show.bind=\"showTable\">\r\n            <button style=\"margin-bottom:20px;margin-top:20px;\" class=\"btn btn-primary\" click.trigger=\"newQuestion()\">New</button>\r\n            <table class=\"table\">\r\n                <thead>\r\n\r\n                </thead>\r\n                <tbody>\r\n                    <tr click.trigger=\"selectQuestion(question)\" repeat.for=\"question of quiz.questionArray\">\r\n                        <td innerhtml.bind='question.flash'></td>\r\n                        <td innerhtml.bind='question.card'></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div show.bind=\"!showTable\">\r\n            <button style=\"margin-bottom:20px;margin-top:20px;\" class=\"btn btn-primary\" click.trigger=\"saveQuestion()\">Save</button>\r\n            <button style=\"margin-bottom:20px;margin-top:20px;\" class=\"btn btn-primary\" click.trigger=\"back()\">Back</button>\r\n            <button style=\"margin-bottom:20px;margin-top:20px;\" class=\"btn btn-primary\" click.trigger=\"deleteQuestion()\">Delete</button>\r\n            <editor  toolbar.bind=\"toolbar\" value.bind=\"quiz.selectedQuestion.flash\" height=\"250\"></editor>\r\n\r\n            <editor  toolbar.bind=\"toolbar\" value.bind=\"quiz.selectedQuestion.card\" height=\"250\"></editor>\r\n        </div>\r\n    </div>\r\n</template>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "modules/quiz/quiz.html":
/*!************************************!*\
  !*** ./src/modules/quiz/quiz.html ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\r\n    <div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col col-lg-3\" style=\"margin-top:20px;\">\r\n            <h3>Unit</h3>\r\n            <select value.bind=\"selectedUnit\" class=\"form-control\" change.trigger=\"selectQuiz()\">\r\n                <option value=\"\"></option>\r\n                <option repeat.for=\"unit of quiz.quizzesArray\" value=\"${unit._id}\">${unit.name}</option>\r\n            </select>\r\n        </div>\r\n        <div show.bind=\"selectedUnit !== ''\" class=\"col col-lg-8\" style=\"margin-top:20px;\">\r\n\r\n            <div class=\"btn-group\" role=\"group\">\r\n                <Button class=\"btn btn-primary\" click.trigger=\"previous()\" disable.bind=\"questionIndex == 0\">Previous</Button>\r\n                <Button style=\"margin-left:10px;\" class=\"btn btn-primary\" click.trigger=\"next()\" disable.bind=\"questionIndex == quiz.questionArray.length - 1\">Next</Button>\r\n                <Button style=\"margin-left:10px;\" class=\"btn btn-primary\" click.trigger=\"showFlashAnswer()\">Show Answer</Button>\r\n            </div>\r\n            <div class=\"float-right\"> \r\n                <span>${questionIndex + 1} of ${quiz.questionArray.length}</span>\r\n            </div>\r\n            <div class=\"card\" style=\"margin-top:20px;\">\r\n                <div class=\"card-body\">\r\n                    <div innerhtml.bind=\"currentFlash\" ></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card  bg-light \" style=\"margin-top:20px;\"  show.bind=\"showCard\">\r\n                <div class=\"card-body\">\r\n                    <div innerhtml.bind=\"currentCard\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</template>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ "resources/editor/editor.html":
/*!******************************************!*\
  !*** ./src/resources/editor/editor.html ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// Module
var code = "<template>\r\n\t<div class=\"summernote-host\" id.bind=\"editorid\" ref=\"editor\"></div>\r\n</template>";
// Exports
/* harmony default export */ __webpack_exports__["default"] = (code);

/***/ }),

/***/ 407:
/*!*********************************!*\
  !*** ./config/environment.json ***!
  \*********************************/
/***/ (function(module) {

module.exports = JSON.parse('{"debug":true,"testing":true}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-7e9c6a9f","vendors-319a6989","vendors-4e64aa37","vendors-3ce50090","vendors-fcadf5bb","vendors-da7e83e9"], function() { return __webpack_exec__(639), __webpack_exec__(231), __webpack_exec__(62); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=app.d51903a4bea86fe35daf.bundle.js.map