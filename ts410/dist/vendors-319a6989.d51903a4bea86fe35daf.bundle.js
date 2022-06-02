"use strict";
(self["webpackChunkts410"] = self["webpackChunkts410"] || []).push([["vendors-319a6989"],{

/***/ 62:
/*!***************************************************************************************!*\
  !*** ./node_modules/aurelia-bootstrapper/dist/native-modules/aurelia-bootstrapper.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": function() { return /* binding */ bootstrap; },
/* harmony export */   "starting": function() { return /* binding */ starting; }
/* harmony export */ });
/* harmony import */ var aurelia_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-polyfills */ 378);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 15);



var bootstrapPromises = [];
var startResolve;
var startPromise = new Promise(function (resolve) { return startResolve = resolve; });
var host = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global;
var isNodeLike = typeof process !== 'undefined' && !process.browser;
function ready() {
    if (!host.document || host.document.readyState === 'complete') {
        return Promise.resolve();
    }
    return new Promise(function (resolve) {
        host.document.addEventListener('DOMContentLoaded', completed);
        host.addEventListener('load', completed);
        function completed() {
            host.document.removeEventListener('DOMContentLoaded', completed);
            host.removeEventListener('load', completed);
            resolve();
        }
    });
}
function createLoader() {
    if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.Loader) {
        return Promise.resolve(new aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.Loader());
    }
    if (false) { var m; }
    return Promise.reject('No PLATFORM.Loader is defined and there is neither a System API (ES6) or a Require API (AMD) globally available to load your app.');
}
function initializePal(loader) {
    if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.isInitialized)
        return Promise.resolve();
    var type;
    var isRenderer = isNodeLike && (process.type === 'renderer' || process.versions['node-webkit']);
    if (isNodeLike && !isRenderer) {
        type = 'nodejs';
    }
    else if (typeof window !== 'undefined') {
        type = 'browser';
    }
    else if (typeof self !== 'undefined') {
        type = 'worker';
    }
    else {
        throw new Error('Could not determine platform implementation to load.');
    }
    return loader.loadModule('aurelia-pal-' + type)
        .then(function (palModule) { return type === 'nodejs' && !aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.isInitialized && palModule.globalize() || palModule.initialize(); });
}
function preparePlatform(loader) {
    var map = function (moduleId, relativeTo) {
        return loader.normalize(moduleId, relativeTo)
            .then(function (normalized) {
            loader.map(moduleId, normalized);
            return normalized;
        });
    };
    return initializePal(loader)
        .then(function () { return loader.normalize('aurelia-bootstrapper'); })
        .then(function (bootstrapperName) {
        var frameworkPromise = map('aurelia-framework', bootstrapperName);
        return Promise.all([
            frameworkPromise,
            frameworkPromise.then(function (frameworkName) { return map('aurelia-dependency-injection', frameworkName); }),
            map('aurelia-router', bootstrapperName),
            map('aurelia-logging-console', bootstrapperName)
        ]);
    })
        .then(function (_a) {
        var frameworkName = _a[0];
        return loader.loadModule(frameworkName);
    })
        .then(function (fx) { return startResolve(function () { return new fx.Aurelia(loader); }); });
}
function config(appHost, configModuleId, aurelia) {
    aurelia.host = appHost;
    aurelia.configModuleId = configModuleId || null;
    if (configModuleId) {
        return aurelia.loader
            .loadModule(configModuleId)
            .then(function (customConfig) {
            if (!customConfig.configure) {
                throw new Error("Cannot initialize module '".concat(configModuleId, "' without a configure function."));
            }
            return customConfig.configure(aurelia);
        });
    }
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    return aurelia.start().then(function () { return aurelia.setRoot(); });
}
function run() {
    return ready()
        .then(createLoader)
        .then(preparePlatform)
        .then(function () {
        var appHosts = host.document.querySelectorAll('[aurelia-app],[data-aurelia-app]');
        for (var i = 0, ii = appHosts.length; i < ii; ++i) {
            var appHost = appHosts[i];
            var mainModuleId = appHost.getAttribute('aurelia-app') || appHost.getAttribute('data-aurelia-app');
            bootstrap(config.bind(null, appHost, mainModuleId));
        }
        var toConsole = console.error.bind(console);
        var bootstraps = bootstrapPromises.map(function (p) { return p.catch(toConsole); });
        bootstrapPromises = null;
        return Promise.all(bootstraps);
    });
}
function bootstrap(configure) {
    var p = startPromise.then(function (factory) { return configure(factory()); });
    if (bootstrapPromises)
        bootstrapPromises.push(p);
    return p;
}
var starting = run();


//# sourceMappingURL=aurelia-bootstrapper.js.map


/***/ }),

/***/ 158:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/aurelia-dependency-injection/dist/native-modules/aurelia-dependency-injection.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "All": function() { return /* binding */ All; },
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Factory": function() { return /* binding */ Factory; },
/* harmony export */   "FactoryInvoker": function() { return /* binding */ FactoryInvoker; },
/* harmony export */   "InvocationHandler": function() { return /* binding */ InvocationHandler; },
/* harmony export */   "Lazy": function() { return /* binding */ Lazy; },
/* harmony export */   "NewInstance": function() { return /* binding */ NewInstance; },
/* harmony export */   "Optional": function() { return /* binding */ Optional; },
/* harmony export */   "Parent": function() { return /* binding */ Parent; },
/* harmony export */   "SingletonRegistration": function() { return /* binding */ SingletonRegistration; },
/* harmony export */   "Strategy": function() { return /* binding */ Strategy; },
/* harmony export */   "StrategyResolver": function() { return /* binding */ StrategyResolver; },
/* harmony export */   "TransientRegistration": function() { return /* binding */ TransientRegistration; },
/* harmony export */   "_emptyParameters": function() { return /* binding */ _emptyParameters; },
/* harmony export */   "all": function() { return /* binding */ all; },
/* harmony export */   "autoinject": function() { return /* binding */ autoinject; },
/* harmony export */   "factory": function() { return /* binding */ factory; },
/* harmony export */   "getDecoratorDependencies": function() { return /* binding */ getDecoratorDependencies; },
/* harmony export */   "inject": function() { return /* binding */ inject; },
/* harmony export */   "invokeAsFactory": function() { return /* binding */ invokeAsFactory; },
/* harmony export */   "invoker": function() { return /* binding */ invoker; },
/* harmony export */   "lazy": function() { return /* binding */ lazy; },
/* harmony export */   "newInstance": function() { return /* binding */ newInstance; },
/* harmony export */   "optional": function() { return /* binding */ optional; },
/* harmony export */   "parent": function() { return /* binding */ parent; },
/* harmony export */   "registration": function() { return /* binding */ registration; },
/* harmony export */   "resolver": function() { return /* binding */ resolver; },
/* harmony export */   "singleton": function() { return /* binding */ singleton; },
/* harmony export */   "transient": function() { return /* binding */ transient; }
/* harmony export */ });
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-metadata */ 383);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 15);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function isInjectable(potentialTarget) {
    return !!potentialTarget;
}
function autoinject(potentialTarget) {
    var deco = function (target) {
        if (!target.hasOwnProperty('inject')) {
            target.inject = (aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.paramTypes, target) ||
                _emptyParameters).slice();
            if (target.inject && target.inject.length > 0) {
                if (target.inject[target.inject.length - 1] === Object) {
                    target.inject.splice(-1, 1);
                }
            }
        }
    };
    if (isInjectable(potentialTarget)) {
        return deco(potentialTarget);
    }
    return deco;
}
function inject() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    return function (target, _key, descriptor) {
        if (typeof descriptor === 'number') {
            autoinject(target);
            if (rest.length === 1) {
                target.inject[descriptor] = rest[0];
            }
            return;
        }
        if (descriptor) {
            var fn = descriptor.value;
            fn.inject = rest;
        }
        else {
            target.inject = rest;
        }
    };
}

var resolver = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.protocol.create('aurelia:resolver', function (target) {
    if (!(typeof target.get === 'function')) {
        return 'Resolvers must implement: get(container: Container, key: any): any';
    }
    return true;
});
var Strategy;
(function (Strategy) {
    Strategy[Strategy["instance"] = 0] = "instance";
    Strategy[Strategy["singleton"] = 1] = "singleton";
    Strategy[Strategy["transient"] = 2] = "transient";
    Strategy[Strategy["function"] = 3] = "function";
    Strategy[Strategy["array"] = 4] = "array";
    Strategy[Strategy["alias"] = 5] = "alias";
})(Strategy || (Strategy = {}));
function isStrategy(actual, expected, state) {
    return actual === expected;
}
var StrategyResolver = (function () {
    function StrategyResolver(strategy, state) {
        this.strategy = strategy;
        this.state = state;
    }
    StrategyResolver.prototype.get = function (container, key) {
        if (isStrategy(this.strategy, Strategy.instance, this.state)) {
            return this.state;
        }
        if (isStrategy(this.strategy, Strategy.singleton, this.state)) {
            var singleton = container.invoke(this.state);
            this.state = singleton;
            this.strategy = 0;
            return singleton;
        }
        if (isStrategy(this.strategy, Strategy.transient, this.state)) {
            return container.invoke(this.state);
        }
        if (isStrategy(this.strategy, Strategy.function, this.state)) {
            return this.state(container, key, this);
        }
        if (isStrategy(this.strategy, Strategy.array, this.state)) {
            return this.state[0].get(container, key);
        }
        if (isStrategy(this.strategy, Strategy.alias, this.state)) {
            return container.get(this.state);
        }
        throw new Error('Invalid strategy: ' + this.strategy);
    };
    StrategyResolver = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Number, Object])
    ], StrategyResolver);
    return StrategyResolver;
}());
var Lazy = (function () {
    function Lazy(key) {
        this._key = key;
    }
    Lazy_1 = Lazy;
    Lazy.prototype.get = function (container) {
        var _this = this;
        return function () { return container.get(_this._key); };
    };
    Lazy.of = function (key) {
        return new Lazy_1(key);
    };
    var Lazy_1;
    Lazy = Lazy_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Lazy);
    return Lazy;
}());
var All = (function () {
    function All(key) {
        this._key = key;
    }
    All_1 = All;
    All.prototype.get = function (container) {
        return container.getAll(this._key);
    };
    All.of = function (key) {
        return new All_1(key);
    };
    var All_1;
    All = All_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], All);
    return All;
}());
var Optional = (function () {
    function Optional(key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        this._key = key;
        this._checkParent = checkParent;
    }
    Optional_1 = Optional;
    Optional.prototype.get = function (container) {
        if (container.hasResolver(this._key, this._checkParent)) {
            return container.get(this._key);
        }
        return null;
    };
    Optional.of = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = true; }
        return new Optional_1(key, checkParent);
    };
    var Optional_1;
    Optional = Optional_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Boolean])
    ], Optional);
    return Optional;
}());
var Parent = (function () {
    function Parent(key) {
        this._key = key;
    }
    Parent_1 = Parent;
    Parent.prototype.get = function (container) {
        return container.parent ? container.parent.get(this._key) : null;
    };
    Parent.of = function (key) {
        return new Parent_1(key);
    };
    var Parent_1;
    Parent = Parent_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Parent);
    return Parent;
}());
var Factory = (function () {
    function Factory(key) {
        this._key = key;
    }
    Factory_1 = Factory;
    Factory.prototype.get = function (container) {
        var fn = this._key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === Strategy.function) {
            fn = resolver.state;
        }
        return function () {
            var rest = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                rest[_i] = arguments[_i];
            }
            return container.invoke(fn, rest);
        };
    };
    Factory.of = function (key) {
        return new Factory_1(key);
    };
    var Factory_1;
    Factory = Factory_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object])
    ], Factory);
    return Factory;
}());
var NewInstance = (function () {
    function NewInstance(key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        this.key = key;
        this.asKey = key;
        this.dynamicDependencies = dynamicDependencies;
    }
    NewInstance_1 = NewInstance;
    NewInstance.prototype.get = function (container) {
        var dynamicDependencies = this.dynamicDependencies.length > 0
            ? this.dynamicDependencies.map(function (dependency) {
                return dependency['protocol:aurelia:resolver']
                    ? dependency.get(container)
                    : container.get(dependency);
            })
            : undefined;
        var fn = this.key;
        var resolver = container.getResolver(fn);
        if (resolver && resolver.strategy === 3) {
            fn = resolver.state;
        }
        var instance = container.invoke(fn, dynamicDependencies);
        container.registerInstance(this.asKey, instance);
        return instance;
    };
    NewInstance.prototype.as = function (key) {
        this.asKey = key;
        return this;
    };
    NewInstance.of = function (key) {
        var dynamicDependencies = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            dynamicDependencies[_i - 1] = arguments[_i];
        }
        return new (NewInstance_1.bind.apply(NewInstance_1, [void 0, key].concat(dynamicDependencies)))();
    };
    var NewInstance_1;
    NewInstance = NewInstance_1 = __decorate([
        resolver(),
        __metadata("design:paramtypes", [Object, Object])
    ], NewInstance);
    return NewInstance;
}());
function getDecoratorDependencies(target) {
    autoinject(target);
    return target.inject;
}
function lazy(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Lazy.of(keyValue);
    };
}
function all(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = All.of(keyValue);
    };
}
function optional(checkParentOrTarget) {
    if (checkParentOrTarget === void 0) { checkParentOrTarget = true; }
    var deco = function (checkParent) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = Optional.of(inject$$1[index], checkParent);
        };
    };
    if (typeof checkParentOrTarget === 'boolean') {
        return deco(checkParentOrTarget);
    }
    return deco(true);
}
function parent(target, _key, index) {
    var inject$$1 = getDecoratorDependencies(target);
    inject$$1[index] = Parent.of(inject$$1[index]);
}
function factory(keyValue) {
    return function (target, _key, index) {
        var inject$$1 = getDecoratorDependencies(target);
        inject$$1[index] = Factory.of(keyValue);
    };
}
function newInstance(asKeyOrTarget) {
    var dynamicDependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dynamicDependencies[_i - 1] = arguments[_i];
    }
    var deco = function (asKey) {
        return function (target, _key, index) {
            var inject$$1 = getDecoratorDependencies(target);
            inject$$1[index] = NewInstance.of.apply(NewInstance, [inject$$1[index]].concat(dynamicDependencies));
            if (!!asKey) {
                inject$$1[index].as(asKey);
            }
        };
    };
    if (arguments.length >= 1) {
        return deco(asKeyOrTarget);
    }
    return deco();
}

function validateKey(key) {
    if (key === null || key === undefined) {
        throw new Error('key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
    }
}
var _emptyParameters = Object.freeze([]);
aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration = 'aurelia:registration';
aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker = 'aurelia:invoker';
var resolverDecorates = resolver.decorates;
var InvocationHandler = (function () {
    function InvocationHandler(fn, invoker, dependencies) {
        this.fn = fn;
        this.invoker = invoker;
        this.dependencies = dependencies;
    }
    InvocationHandler.prototype.invoke = function (container, dynamicDependencies) {
        return dynamicDependencies !== undefined
            ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies)
            : this.invoker.invoke(container, this.fn, this.dependencies);
    };
    return InvocationHandler;
}());
function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
    var i = staticDependencies.length;
    var args = new Array(i);
    var lookup;
    while (i--) {
        lookup = staticDependencies[i];
        if (lookup === null || lookup === undefined) {
            throw new Error('Constructor Parameter with index ' +
                i +
                ' cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
        }
        else {
            args[i] = container.get(lookup);
        }
    }
    if (dynamicDependencies !== undefined) {
        args = args.concat(dynamicDependencies);
    }
    return Reflect.construct(fn, args);
}
var classInvoker = {
    invoke: function (container, Type, deps) {
        var instances = deps.map(function (dep) { return container.get(dep); });
        return Reflect.construct(Type, instances);
    },
    invokeWithDynamicDependencies: invokeWithDynamicDependencies
};
function getDependencies(f) {
    if (!f.hasOwnProperty('inject')) {
        return [];
    }
    if (typeof f.inject === 'function') {
        return f.inject();
    }
    return f.inject;
}
var Container = (function () {
    function Container(configuration) {
        if (configuration === undefined) {
            configuration = {};
        }
        this._configuration = configuration;
        this._onHandlerCreated = configuration.onHandlerCreated;
        this._handlers =
            configuration.handlers || (configuration.handlers = new Map());
        this._resolvers = new Map();
        this.root = this;
        this.parent = null;
    }
    Container.prototype.makeGlobal = function () {
        Container.instance = this;
        return this;
    };
    Container.prototype.setHandlerCreatedCallback = function (onHandlerCreated) {
        this._onHandlerCreated = onHandlerCreated;
        this._configuration.onHandlerCreated = onHandlerCreated;
    };
    Container.prototype.registerInstance = function (key, instance) {
        return this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
    };
    Container.prototype.registerSingleton = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
    };
    Container.prototype.registerTransient = function (key, fn) {
        return this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
    };
    Container.prototype.registerHandler = function (key, handler) {
        return this.registerResolver(key, new StrategyResolver(3, handler));
    };
    Container.prototype.registerAlias = function (originalKey, aliasKey) {
        return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
    };
    Container.prototype.registerResolver = function (key, resolver$$1) {
        validateKey(key);
        var allResolvers = this._resolvers;
        var result = allResolvers.get(key);
        if (result === undefined) {
            allResolvers.set(key, resolver$$1);
        }
        else if (result.strategy === 4) {
            result.state.push(resolver$$1);
        }
        else {
            allResolvers.set(key, new StrategyResolver(4, [result, resolver$$1]));
        }
        return resolver$$1;
    };
    Container.prototype.autoRegister = function (key, fn) {
        fn = fn === undefined ? key : fn;
        if (typeof fn === 'function') {
            var registration = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.get(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, fn);
            if (registration === undefined) {
                return this.registerResolver(key, new StrategyResolver(1, fn));
            }
            return registration.registerResolver(this, key, fn);
        }
        return this.registerResolver(key, new StrategyResolver(0, fn));
    };
    Container.prototype.autoRegisterAll = function (fns) {
        var i = fns.length;
        while (i--) {
            this.autoRegister(fns[i]);
        }
    };
    Container.prototype.unregister = function (key) {
        this._resolvers.delete(key);
    };
    Container.prototype.hasResolver = function (key, checkParent) {
        if (checkParent === void 0) { checkParent = false; }
        validateKey(key);
        return (this._resolvers.has(key) ||
            (checkParent &&
                this.parent !== null &&
                this.parent.hasResolver(key, checkParent)));
    };
    Container.prototype.getResolver = function (key) {
        return this._resolvers.get(key);
    };
    Container.prototype.get = function (key) {
        validateKey(key);
        if (key === Container) {
            return this;
        }
        if (resolverDecorates(key)) {
            return key.get(this, key);
        }
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            var registration = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.get(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, key);
            if (registration === undefined) {
                return this.parent._get(key);
            }
            return registration.registerResolver(this, key, key).get(this, key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype._get = function (key) {
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return this.autoRegister(key).get(this, key);
            }
            return this.parent._get(key);
        }
        return resolver$$1.get(this, key);
    };
    Container.prototype.getAll = function (key) {
        validateKey(key);
        var resolver$$1 = this._resolvers.get(key);
        if (resolver$$1 === undefined) {
            if (this.parent === null) {
                return _emptyParameters;
            }
            return this.parent.getAll(key);
        }
        if (resolver$$1.strategy === 4) {
            var state = resolver$$1.state;
            var i = state.length;
            var results = new Array(i);
            while (i--) {
                results[i] = state[i].get(this, key);
            }
            return results;
        }
        return [resolver$$1.get(this, key)];
    };
    Container.prototype.createChild = function () {
        var child = new Container(this._configuration);
        child.root = this.root;
        child.parent = this;
        return child;
    };
    Container.prototype.invoke = function (fn, dynamicDependencies) {
        try {
            var handler = this._handlers.get(fn);
            if (handler === undefined) {
                handler = this._createInvocationHandler(fn);
                this._handlers.set(fn, handler);
            }
            return handler.invoke(this, dynamicDependencies);
        }
        catch (e) {
            throw new aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.AggregateError("Error invoking " + fn.name + ". Check the inner error for details.", e, true);
        }
    };
    Container.prototype._createInvocationHandler = function (fn) {
        var dependencies;
        if (fn.inject === undefined) {
            dependencies =
                aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.paramTypes, fn) || _emptyParameters;
        }
        else {
            dependencies = [];
            var ctor = fn;
            while (typeof ctor === 'function') {
                dependencies.push.apply(dependencies, getDependencies(ctor));
                ctor = Object.getPrototypeOf(ctor);
            }
        }
        var invoker = aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.getOwn(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, fn) || classInvoker;
        var handler = new InvocationHandler(fn, invoker, dependencies);
        return this._onHandlerCreated !== undefined
            ? this._onHandlerCreated(handler)
            : handler;
    };
    return Container;
}());

function invoker(value) {
    return function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, value, target);
    };
}
function invokeAsFactory(potentialTarget) {
    var deco = function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.invoker, FactoryInvoker.instance, target);
    };
    return potentialTarget ? deco(potentialTarget) : deco;
}
var FactoryInvoker = (function () {
    function FactoryInvoker() {
    }
    FactoryInvoker.prototype.invoke = function (container, fn, dependencies) {
        var i = dependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(dependencies[i]);
        }
        return fn.apply(undefined, args);
    };
    FactoryInvoker.prototype.invokeWithDynamicDependencies = function (container, fn, staticDependencies, dynamicDependencies) {
        var i = staticDependencies.length;
        var args = new Array(i);
        while (i--) {
            args[i] = container.get(staticDependencies[i]);
        }
        if (dynamicDependencies !== undefined) {
            args = args.concat(dynamicDependencies);
        }
        return fn.apply(undefined, args);
    };
    return FactoryInvoker;
}());
FactoryInvoker.instance = new FactoryInvoker();

function registration(value) {
    return function (target) {
        aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.define(aurelia_metadata__WEBPACK_IMPORTED_MODULE_0__.metadata.registration, value, target);
    };
}
function transient(key) {
    return registration(new TransientRegistration(key));
}
function singleton(keyOrRegisterInChild, registerInChild) {
    if (registerInChild === void 0) { registerInChild = false; }
    return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
}
var TransientRegistration = (function () {
    function TransientRegistration(key) {
        this._key = key;
    }
    TransientRegistration.prototype.registerResolver = function (container, key, fn) {
        var existingResolver = container.getResolver(this._key || key);
        return existingResolver === undefined
            ? container.registerTransient((this._key || key), fn)
            : existingResolver;
    };
    return TransientRegistration;
}());
var SingletonRegistration = (function () {
    function SingletonRegistration(keyOrRegisterInChild, registerInChild) {
        if (registerInChild === void 0) { registerInChild = false; }
        if (typeof keyOrRegisterInChild === 'boolean') {
            this._registerInChild = keyOrRegisterInChild;
        }
        else {
            this._key = keyOrRegisterInChild;
            this._registerInChild = registerInChild;
        }
    }
    SingletonRegistration.prototype.registerResolver = function (container, key, fn) {
        var targetContainer = this._registerInChild ? container : container.root;
        var existingResolver = targetContainer.getResolver(this._key || key);
        return existingResolver === undefined
            ? targetContainer.registerSingleton(this._key || key, fn)
            : existingResolver;
    };
    return SingletonRegistration;
}());




/***/ }),

/***/ "aurelia-event-aggregator":
/*!***********************************************************************************************!*\
  !*** ./node_modules/aurelia-event-aggregator/dist/native-modules/aurelia-event-aggregator.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventAggregator": function() { return /* binding */ EventAggregator; },
/* harmony export */   "configure": function() { return /* binding */ configure; },
/* harmony export */   "includeEventsIn": function() { return /* binding */ includeEventsIn; }
/* harmony export */ });
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-logging */ 99);




var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_0__.getLogger('event-aggregator');

var Handler = function () {
  function Handler(messageType, callback) {
    

    this.messageType = messageType;
    this.callback = callback;
  }

  Handler.prototype.handle = function handle(message) {
    if (message instanceof this.messageType) {
      this.callback.call(null, message);
    }
  };

  return Handler;
}();

function invokeCallback(callback, data, event) {
  try {
    callback(data, event);
  } catch (e) {
    logger.error(e);
  }
}

function invokeHandler(handler, data) {
  try {
    handler.handle(data);
  } catch (e) {
    logger.error(e);
  }
}

var EventAggregator = function () {
  function EventAggregator() {
    

    this.eventLookup = {};
    this.messageHandlers = [];
  }

  EventAggregator.prototype.publish = function publish(event, data) {
    var subscribers = void 0;
    var i = void 0;

    if (!event) {
      throw new Error('Event was invalid.');
    }

    if (typeof event === 'string') {
      subscribers = this.eventLookup[event];
      if (subscribers) {
        subscribers = subscribers.slice();
        i = subscribers.length;

        while (i--) {
          invokeCallback(subscribers[i], data, event);
        }
      }
    } else {
      subscribers = this.messageHandlers.slice();
      i = subscribers.length;

      while (i--) {
        invokeHandler(subscribers[i], event);
      }
    }
  };

  EventAggregator.prototype.subscribe = function subscribe(event, callback) {
    var handler = void 0;
    var subscribers = void 0;

    if (!event) {
      throw new Error('Event channel/type was invalid.');
    }

    if (typeof event === 'string') {
      handler = callback;
      subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
    } else {
      handler = new Handler(event, callback);
      subscribers = this.messageHandlers;
    }

    subscribers.push(handler);

    return {
      dispose: function dispose() {
        var idx = subscribers.indexOf(handler);
        if (idx !== -1) {
          subscribers.splice(idx, 1);
        }
      }
    };
  };

  EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
    var sub = this.subscribe(event, function (a, b) {
      sub.dispose();
      return callback(a, b);
    });

    return sub;
  };

  return EventAggregator;
}();

function includeEventsIn(obj) {
  var ea = new EventAggregator();

  obj.subscribeOnce = function (event, callback) {
    return ea.subscribeOnce(event, callback);
  };

  obj.subscribe = function (event, callback) {
    return ea.subscribe(event, callback);
  };

  obj.publish = function (event, data) {
    ea.publish(event, data);
  };

  return ea;
}

function configure(config) {
  config.instance(EventAggregator, includeEventsIn(config.aurelia));
}

/***/ }),

/***/ "aurelia-framework":
/*!*********************************************************************************!*\
  !*** ./node_modules/aurelia-framework/dist/native-modules/aurelia-framework.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessKeyed": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.AccessKeyed; },
/* harmony export */   "AccessMember": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.AccessMember; },
/* harmony export */   "AccessScope": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.AccessScope; },
/* harmony export */   "AccessThis": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.AccessThis; },
/* harmony export */   "AggregateError": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.AggregateError; },
/* harmony export */   "All": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.All; },
/* harmony export */   "Animator": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.Animator; },
/* harmony export */   "Assign": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Assign; },
/* harmony export */   "Aurelia": function() { return /* binding */ Aurelia; },
/* harmony export */   "BehaviorInstruction": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BehaviorInstruction; },
/* harmony export */   "BehaviorPropertyObserver": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BehaviorPropertyObserver; },
/* harmony export */   "Binary": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Binary; },
/* harmony export */   "BindableProperty": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindableProperty; },
/* harmony export */   "Binding": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Binding; },
/* harmony export */   "BindingBehavior": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingBehavior; },
/* harmony export */   "BindingBehaviorResource": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingBehaviorResource; },
/* harmony export */   "BindingEngine": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingEngine; },
/* harmony export */   "BindingExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.BindingExpression; },
/* harmony export */   "BindingLanguage": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindingLanguage; },
/* harmony export */   "BoundViewFactory": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BoundViewFactory; },
/* harmony export */   "Call": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Call; },
/* harmony export */   "CallExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallExpression; },
/* harmony export */   "CallFunction": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallFunction; },
/* harmony export */   "CallMember": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallMember; },
/* harmony export */   "CallScope": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CallScope; },
/* harmony export */   "CheckedObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CheckedObserver; },
/* harmony export */   "ClassObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ClassObserver; },
/* harmony export */   "CollectionLengthObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.CollectionLengthObserver; },
/* harmony export */   "CompositionEngine": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionEngine; },
/* harmony export */   "CompositionTransaction": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransaction; },
/* harmony export */   "CompositionTransactionNotifier": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransactionNotifier; },
/* harmony export */   "CompositionTransactionOwnershipToken": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransactionOwnershipToken; },
/* harmony export */   "ComputedExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ComputedExpression; },
/* harmony export */   "Conditional": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Conditional; },
/* harmony export */   "Container": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Container; },
/* harmony export */   "Controller": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.Controller; },
/* harmony export */   "ConventionalViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ConventionalViewStrategy; },
/* harmony export */   "DOM": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM; },
/* harmony export */   "DataAttributeObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.DataAttributeObserver; },
/* harmony export */   "DirtyCheckProperty": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.DirtyCheckProperty; },
/* harmony export */   "DirtyChecker": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.DirtyChecker; },
/* harmony export */   "ElementConfigResource": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ElementConfigResource; },
/* harmony export */   "ElementEvents": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ElementEvents; },
/* harmony export */   "EventManager": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.EventManager; },
/* harmony export */   "EventSubscriber": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.EventSubscriber; },
/* harmony export */   "Expression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Expression; },
/* harmony export */   "ExpressionCloner": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ExpressionCloner; },
/* harmony export */   "ExpressionObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ExpressionObserver; },
/* harmony export */   "FEATURE": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.FEATURE; },
/* harmony export */   "Factory": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Factory; },
/* harmony export */   "FactoryInvoker": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.FactoryInvoker; },
/* harmony export */   "FrameworkConfiguration": function() { return /* binding */ FrameworkConfiguration; },
/* harmony export */   "HtmlBehaviorResource": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.HtmlBehaviorResource; },
/* harmony export */   "InlineViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.InlineViewStrategy; },
/* harmony export */   "InvocationHandler": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.InvocationHandler; },
/* harmony export */   "Lazy": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Lazy; },
/* harmony export */   "Listener": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Listener; },
/* harmony export */   "ListenerExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ListenerExpression; },
/* harmony export */   "LiteralArray": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralArray; },
/* harmony export */   "LiteralObject": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralObject; },
/* harmony export */   "LiteralPrimitive": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralPrimitive; },
/* harmony export */   "LiteralString": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralString; },
/* harmony export */   "LiteralTemplate": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.LiteralTemplate; },
/* harmony export */   "Loader": function() { return /* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_4__.Loader; },
/* harmony export */   "LogManager": function() { return /* reexport module object */ aurelia_logging__WEBPACK_IMPORTED_MODULE_8__; },
/* harmony export */   "ModifyCollectionObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ModifyCollectionObserver; },
/* harmony export */   "ModuleAnalyzer": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ModuleAnalyzer; },
/* harmony export */   "NameExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.NameExpression; },
/* harmony export */   "NewInstance": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.NewInstance; },
/* harmony export */   "NoViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.NoViewStrategy; },
/* harmony export */   "ObjectObservationAdapter": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ObjectObservationAdapter; },
/* harmony export */   "ObserverLocator": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ObserverLocator; },
/* harmony export */   "Optional": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Optional; },
/* harmony export */   "Origin": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.Origin; },
/* harmony export */   "PLATFORM": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.PLATFORM; },
/* harmony export */   "Parent": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Parent; },
/* harmony export */   "Parser": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Parser; },
/* harmony export */   "ParserImplementation": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ParserImplementation; },
/* harmony export */   "PassThroughSlot": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.PassThroughSlot; },
/* harmony export */   "PrimitiveObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.PrimitiveObserver; },
/* harmony export */   "RelativeViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.RelativeViewStrategy; },
/* harmony export */   "ResourceDescription": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceDescription; },
/* harmony export */   "ResourceLoadContext": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceLoadContext; },
/* harmony export */   "ResourceModule": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ResourceModule; },
/* harmony export */   "SVGAnalyzer": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.SVGAnalyzer; },
/* harmony export */   "SelectValueObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.SelectValueObserver; },
/* harmony export */   "SetterObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.SetterObserver; },
/* harmony export */   "ShadowDOM": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ShadowDOM; },
/* harmony export */   "ShadowSlot": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ShadowSlot; },
/* harmony export */   "SingletonRegistration": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.SingletonRegistration; },
/* harmony export */   "SlotCustomAttribute": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.SlotCustomAttribute; },
/* harmony export */   "StaticViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.StaticViewStrategy; },
/* harmony export */   "Strategy": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Strategy; },
/* harmony export */   "StrategyResolver": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.StrategyResolver; },
/* harmony export */   "StyleObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.StyleObserver; },
/* harmony export */   "SwapStrategies": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.SwapStrategies; },
/* harmony export */   "TargetInstruction": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TargetInstruction; },
/* harmony export */   "TaskQueue": function() { return /* reexport safe */ aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__.TaskQueue; },
/* harmony export */   "TemplateDependency": function() { return /* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_4__.TemplateDependency; },
/* harmony export */   "TemplateRegistryEntry": function() { return /* reexport safe */ aurelia_loader__WEBPACK_IMPORTED_MODULE_4__.TemplateRegistryEntry; },
/* harmony export */   "TemplateRegistryViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplateRegistryViewStrategy; },
/* harmony export */   "TemplatingEngine": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine; },
/* harmony export */   "TransientRegistration": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.TransientRegistration; },
/* harmony export */   "Unary": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Unary; },
/* harmony export */   "Unparser": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.Unparser; },
/* harmony export */   "ValueAttributeObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ValueAttributeObserver; },
/* harmony export */   "ValueConverter": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ValueConverter; },
/* harmony export */   "ValueConverterResource": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.ValueConverterResource; },
/* harmony export */   "View": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.View; },
/* harmony export */   "ViewCompileInstruction": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewCompileInstruction; },
/* harmony export */   "ViewCompiler": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewCompiler; },
/* harmony export */   "ViewEngine": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngine; },
/* harmony export */   "ViewEngineHooksResource": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngineHooksResource; },
/* harmony export */   "ViewFactory": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewFactory; },
/* harmony export */   "ViewLocator": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewLocator; },
/* harmony export */   "ViewResources": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources; },
/* harmony export */   "ViewSlot": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot; },
/* harmony export */   "XLinkAttributeObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.XLinkAttributeObserver; },
/* harmony export */   "_emptyParameters": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__._emptyParameters; },
/* harmony export */   "_hyphenate": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__._hyphenate; },
/* harmony export */   "_isAllWhitespace": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__._isAllWhitespace; },
/* harmony export */   "all": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.all; },
/* harmony export */   "animationEvent": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.animationEvent; },
/* harmony export */   "autoinject": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.autoinject; },
/* harmony export */   "behavior": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.behavior; },
/* harmony export */   "bindable": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.bindable; },
/* harmony export */   "bindingBehavior": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingBehavior; },
/* harmony export */   "bindingMode": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.bindingMode; },
/* harmony export */   "buildQueryString": function() { return /* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_6__.buildQueryString; },
/* harmony export */   "calcSplices": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.calcSplices; },
/* harmony export */   "camelCase": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.camelCase; },
/* harmony export */   "child": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.child; },
/* harmony export */   "children": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.children; },
/* harmony export */   "cloneExpression": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.cloneExpression; },
/* harmony export */   "computedFrom": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.computedFrom; },
/* harmony export */   "connectBindingToSignal": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.connectBindingToSignal; },
/* harmony export */   "connectable": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.connectable; },
/* harmony export */   "containerless": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.containerless; },
/* harmony export */   "createComputedObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.createComputedObserver; },
/* harmony export */   "createOverrideContext": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.createOverrideContext; },
/* harmony export */   "createScopeForTest": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.createScopeForTest; },
/* harmony export */   "customAttribute": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customAttribute; },
/* harmony export */   "customElement": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.customElement; },
/* harmony export */   "dataAttributeAccessor": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.dataAttributeAccessor; },
/* harmony export */   "declarePropertyDependencies": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.declarePropertyDependencies; },
/* harmony export */   "decorators": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.decorators; },
/* harmony export */   "delegationStrategy": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.delegationStrategy; },
/* harmony export */   "deprecated": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.deprecated; },
/* harmony export */   "disableConnectQueue": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.disableConnectQueue; },
/* harmony export */   "dynamicOptions": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.dynamicOptions; },
/* harmony export */   "elementConfig": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.elementConfig; },
/* harmony export */   "elements": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.elements; },
/* harmony export */   "enableConnectQueue": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.enableConnectQueue; },
/* harmony export */   "enqueueBindingConnect": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.enqueueBindingConnect; },
/* harmony export */   "factory": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.factory; },
/* harmony export */   "getArrayObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getArrayObserver; },
/* harmony export */   "getChangeRecords": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getChangeRecords; },
/* harmony export */   "getConnectQueueSize": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getConnectQueueSize; },
/* harmony export */   "getContextFor": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getContextFor; },
/* harmony export */   "getDecoratorDependencies": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.getDecoratorDependencies; },
/* harmony export */   "getMapObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getMapObserver; },
/* harmony export */   "getSetObserver": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.getSetObserver; },
/* harmony export */   "hasDeclaredDependencies": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.hasDeclaredDependencies; },
/* harmony export */   "initializePAL": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.initializePAL; },
/* harmony export */   "inject": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.inject; },
/* harmony export */   "inlineView": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.inlineView; },
/* harmony export */   "invokeAsFactory": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.invokeAsFactory; },
/* harmony export */   "invoker": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.invoker; },
/* harmony export */   "isInitialized": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.isInitialized; },
/* harmony export */   "join": function() { return /* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_6__.join; },
/* harmony export */   "lazy": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.lazy; },
/* harmony export */   "mergeSplice": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.mergeSplice; },
/* harmony export */   "metadata": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.metadata; },
/* harmony export */   "mixin": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.mixin; },
/* harmony export */   "newInstance": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.newInstance; },
/* harmony export */   "noView": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.noView; },
/* harmony export */   "observable": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.observable; },
/* harmony export */   "optional": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.optional; },
/* harmony export */   "parent": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.parent; },
/* harmony export */   "parseQueryString": function() { return /* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_6__.parseQueryString; },
/* harmony export */   "presentationAttributes": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.presentationAttributes; },
/* harmony export */   "presentationElements": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.presentationElements; },
/* harmony export */   "processAttributes": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.processAttributes; },
/* harmony export */   "processContent": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.processContent; },
/* harmony export */   "projectArraySplices": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.projectArraySplices; },
/* harmony export */   "propertyAccessor": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.propertyAccessor; },
/* harmony export */   "protocol": function() { return /* reexport safe */ aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__.protocol; },
/* harmony export */   "registration": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.registration; },
/* harmony export */   "relativeToFile": function() { return /* reexport safe */ aurelia_path__WEBPACK_IMPORTED_MODULE_6__.relativeToFile; },
/* harmony export */   "reset": function() { return /* reexport safe */ aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.reset; },
/* harmony export */   "resolver": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.resolver; },
/* harmony export */   "resource": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.resource; },
/* harmony export */   "setConnectQueueThreshold": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.setConnectQueueThreshold; },
/* harmony export */   "signalBindings": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.signalBindings; },
/* harmony export */   "singleton": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.singleton; },
/* harmony export */   "sourceContext": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.sourceContext; },
/* harmony export */   "subscriberCollection": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.subscriberCollection; },
/* harmony export */   "targetContext": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.targetContext; },
/* harmony export */   "templateController": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.templateController; },
/* harmony export */   "transient": function() { return /* reexport safe */ aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.transient; },
/* harmony export */   "useShadowDOM": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useShadowDOM; },
/* harmony export */   "useView": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useView; },
/* harmony export */   "useViewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.useViewStrategy; },
/* harmony export */   "validateBehaviorName": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.validateBehaviorName; },
/* harmony export */   "valueConverter": function() { return /* reexport safe */ aurelia_binding__WEBPACK_IMPORTED_MODULE_1__.valueConverter; },
/* harmony export */   "view": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.view; },
/* harmony export */   "viewEngineHooks": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewEngineHooks; },
/* harmony export */   "viewResources": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewResources; },
/* harmony export */   "viewStrategy": function() { return /* reexport safe */ aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.viewStrategy; }
/* harmony export */ });
/* harmony import */ var aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-dependency-injection */ 158);
/* harmony import */ var aurelia_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-binding */ 778);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-metadata */ 383);
/* harmony import */ var aurelia_templating__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aurelia-templating */ 781);
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aurelia-loader */ 209);
/* harmony import */ var aurelia_task_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aurelia-task-queue */ 318);
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! aurelia-path */ 627);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aurelia-pal */ 15);
/* harmony import */ var aurelia_logging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aurelia-logging */ 99);
















var logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.getLogger('aurelia');
var extPattern = /\.[^/.]+$/;
function runTasks(config, tasks) {
    var current;
    var next = function () {
        current = tasks.shift();
        if (current) {
            return Promise.resolve(current(config)).then(next);
        }
        return Promise.resolve();
    };
    return next();
}
function loadPlugin(fwConfig, loader, info) {
    logger.debug("Loading plugin ".concat(info.moduleId, "."));
    if (typeof info.moduleId === 'string') {
        fwConfig.resourcesRelativeTo = info.resourcesRelativeTo;
        var id = info.moduleId;
        if (info.resourcesRelativeTo.length > 1) {
            return loader.normalize(info.moduleId, info.resourcesRelativeTo[1])
                .then(function (normalizedId) { return _loadPlugin(normalizedId); });
        }
        return _loadPlugin(id);
    }
    else if (typeof info.configure === 'function') {
        if (fwConfig.configuredPlugins.indexOf(info.configure) !== -1) {
            return Promise.resolve();
        }
        fwConfig.configuredPlugins.push(info.configure);
        return Promise.resolve(info.configure.call(null, fwConfig, info.config || {}));
    }
    throw new Error(invalidConfigMsg(info.moduleId || info.configure, 'plugin'));
    function _loadPlugin(moduleId) {
        return loader.loadModule(moduleId).then(function (m) {
            if ('configure' in m) {
                if (fwConfig.configuredPlugins.indexOf(m.configure) !== -1) {
                    return Promise.resolve();
                }
                return Promise.resolve(m.configure(fwConfig, info.config || {})).then(function () {
                    fwConfig.configuredPlugins.push(m.configure);
                    fwConfig.resourcesRelativeTo = null;
                    logger.debug("Configured plugin ".concat(info.moduleId, "."));
                });
            }
            fwConfig.resourcesRelativeTo = null;
            logger.debug("Loaded plugin ".concat(info.moduleId, "."));
        });
    }
}
function loadResources(aurelia, resourcesToLoad, appResources) {
    if (Object.keys(resourcesToLoad).length === 0) {
        return Promise.resolve();
    }
    var viewEngine = aurelia.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewEngine);
    return Promise.all(Object.keys(resourcesToLoad).map(function (n) { return _normalize(resourcesToLoad[n]); }))
        .then(function (loads) {
        var names = [];
        var importIds = [];
        loads.forEach(function (l) {
            names.push(undefined);
            importIds.push(l.importId);
        });
        return viewEngine.importViewResources(importIds, names, appResources);
    });
    function _normalize(load) {
        var moduleId = load.moduleId;
        var ext = getExt(moduleId);
        if (isOtherResource(moduleId)) {
            moduleId = removeExt(moduleId);
        }
        return aurelia.loader.normalize(moduleId, load.relativeTo)
            .then(function (normalized) {
            return {
                name: load.moduleId,
                importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
            };
        });
    }
    function isOtherResource(name) {
        var ext = getExt(name);
        if (!ext)
            return false;
        if (ext === '')
            return false;
        if (ext === '.js' || ext === '.ts')
            return false;
        return true;
    }
    function removeExt(name) {
        return name.replace(extPattern, '');
    }
    function addOriginalExt(normalized, ext) {
        return removeExt(normalized) + '.' + ext;
    }
}
function getExt(name) {
    var match = name.match(extPattern);
    if (match && match.length > 0) {
        return (match[0].split('.'))[1];
    }
}
function loadBehaviors(config) {
    return Promise.all(config.behaviorsToLoad.map(function (m) { return m.load(config.container, m.target); })).then(function () {
        config.behaviorsToLoad = null;
    });
}
function assertProcessed(plugins) {
    if (plugins.processed) {
        throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
    }
}
function invalidConfigMsg(cfg, type) {
    return "Invalid ".concat(type, " [").concat(cfg, "], ").concat(type, " must be specified as functions or relative module IDs.");
}
var FrameworkConfiguration = (function () {
    function FrameworkConfiguration(aurelia) {
        var _this = this;
        this.aurelia = aurelia;
        this.container = aurelia.container;
        this.info = [];
        this.processed = false;
        this.preTasks = [];
        this.postTasks = [];
        this.behaviorsToLoad = [];
        this.configuredPlugins = [];
        this.resourcesToLoad = {};
        this.preTask(function () { return aurelia.loader.normalize('aurelia-bootstrapper', undefined)
            .then(function (name) { return _this.bootstrapperName = name; }); });
        this.postTask(function () { return loadResources(aurelia, _this.resourcesToLoad, aurelia.resources); });
    }
    FrameworkConfiguration.prototype.instance = function (type, instance) {
        this.container.registerInstance(type, instance);
        return this;
    };
    FrameworkConfiguration.prototype.singleton = function (type, implementation) {
        this.container.registerSingleton(type, implementation);
        return this;
    };
    FrameworkConfiguration.prototype.transient = function (type, implementation) {
        this.container.registerTransient(type, implementation);
        return this;
    };
    FrameworkConfiguration.prototype.preTask = function (task) {
        assertProcessed(this);
        this.preTasks.push(task);
        return this;
    };
    FrameworkConfiguration.prototype.postTask = function (task) {
        assertProcessed(this);
        this.postTasks.push(task);
        return this;
    };
    FrameworkConfiguration.prototype.feature = function (plugin, config) {
        if (config === void 0) { config = {}; }
        switch (typeof plugin) {
            case 'string':
                var hasIndex = /\/index$/i.test(plugin);
                var moduleId = hasIndex || getExt(plugin) ? plugin : plugin + '/index';
                var root = hasIndex ? plugin.slice(0, -6) : plugin;
                this.info.push({ moduleId: moduleId, resourcesRelativeTo: [root, ''], config: config });
                break;
            case 'function':
                this.info.push({ configure: plugin, config: config || {} });
                break;
            default:
                throw new Error(invalidConfigMsg(plugin, 'feature'));
        }
        return this;
    };
    FrameworkConfiguration.prototype.globalResources = function (resources) {
        var _this = this;
        assertProcessed(this);
        var toAdd = Array.isArray(resources) ? resources : arguments;
        var resource;
        var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];
        for (var i = 0, ii = toAdd.length; i < ii; ++i) {
            resource = toAdd[i];
            switch (typeof resource) {
                case 'string':
                    var parent_1 = resourcesRelativeTo[0];
                    var grandParent = resourcesRelativeTo[1];
                    var name_1 = resource;
                    if ((resource.startsWith('./') || resource.startsWith('../')) && parent_1 !== '') {
                        name_1 = (0,aurelia_path__WEBPACK_IMPORTED_MODULE_6__.join)(parent_1, resource);
                    }
                    this.resourcesToLoad[name_1] = { moduleId: name_1, relativeTo: grandParent };
                    break;
                case 'function':
                    var meta = this.aurelia.resources.autoRegister(this.container, resource);
                    if (meta instanceof aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.HtmlBehaviorResource && meta.elementName !== null) {
                        if (this.behaviorsToLoad.push(meta) === 1) {
                            this.postTask(function () { return loadBehaviors(_this); });
                        }
                    }
                    break;
                default:
                    throw new Error(invalidConfigMsg(resource, 'resource'));
            }
        }
        return this;
    };
    FrameworkConfiguration.prototype.globalName = function (resourcePath, newName) {
        assertProcessed(this);
        this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
        return this;
    };
    FrameworkConfiguration.prototype.plugin = function (plugin, pluginConfig) {
        assertProcessed(this);
        var info;
        switch (typeof plugin) {
            case 'string':
                info = { moduleId: plugin, resourcesRelativeTo: [plugin, ''], config: pluginConfig || {} };
                break;
            case 'function':
                info = { configure: plugin, config: pluginConfig || {} };
                break;
            default:
                throw new Error(invalidConfigMsg(plugin, 'plugin'));
        }
        this.info.push(info);
        return this;
    };
    FrameworkConfiguration.prototype._addNormalizedPlugin = function (name, config) {
        var _this = this;
        var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
        this.info.push(plugin);
        this.preTask(function () {
            var relativeTo = [name, _this.bootstrapperName];
            plugin.moduleId = name;
            plugin.resourcesRelativeTo = relativeTo;
            return Promise.resolve();
        });
        return this;
    };
    FrameworkConfiguration.prototype.defaultBindingLanguage = function () {
        return this._addNormalizedPlugin('aurelia-templating-binding');
    };
    FrameworkConfiguration.prototype.router = function () {
        return this._addNormalizedPlugin('aurelia-templating-router');
    };
    FrameworkConfiguration.prototype.history = function () {
        return this._addNormalizedPlugin('aurelia-history-browser');
    };
    FrameworkConfiguration.prototype.defaultResources = function () {
        return this._addNormalizedPlugin('aurelia-templating-resources');
    };
    FrameworkConfiguration.prototype.eventAggregator = function () {
        return this._addNormalizedPlugin('aurelia-event-aggregator');
    };
    FrameworkConfiguration.prototype.basicConfiguration = function () {
        return this.defaultBindingLanguage().defaultResources().eventAggregator();
    };
    FrameworkConfiguration.prototype.standardConfiguration = function () {
        return this.basicConfiguration().history().router();
    };
    FrameworkConfiguration.prototype.developmentLogging = function (level) {
        var _this = this;
        var logLevel = level ? aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.logLevel[level] : undefined;
        if (logLevel === undefined) {
            logLevel = aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.logLevel.debug;
        }
        this.preTask(function () {
            return _this.aurelia.loader.normalize('aurelia-logging-console', _this.bootstrapperName).then(function (name) {
                return _this.aurelia.loader.loadModule(name).then(function (m) {
                    aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.addAppender(new m.ConsoleAppender());
                    aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.setLevel(logLevel);
                });
            });
        });
        return this;
    };
    FrameworkConfiguration.prototype.apply = function () {
        var _this = this;
        if (this.processed) {
            return Promise.resolve();
        }
        return runTasks(this, this.preTasks).then(function () {
            var loader = _this.aurelia.loader;
            var info = _this.info;
            var current;
            var next = function () {
                current = info.shift();
                if (current) {
                    return loadPlugin(_this, loader, current).then(next);
                }
                _this.processed = true;
                _this.configuredPlugins = null;
                return Promise.resolve();
            };
            return next().then(function () { return runTasks(_this, _this.postTasks); });
        });
    };
    return FrameworkConfiguration;
}());

function preventActionlessFormSubmit() {
    aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.addEventListener('submit', function (evt) {
        var target = evt.target;
        var action = target.action;
        if (target.tagName.toLowerCase() === 'form' && !action) {
            evt.preventDefault();
        }
    }, false);
}
var Aurelia = (function () {
    function Aurelia(loader, container, resources) {
        this.loader = loader || new aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.PLATFORM.Loader();
        this.container = container || (new aurelia_dependency_injection__WEBPACK_IMPORTED_MODULE_0__.Container()).makeGlobal();
        this.resources = resources || new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources();
        this.use = new FrameworkConfiguration(this);
        this.logger = aurelia_logging__WEBPACK_IMPORTED_MODULE_8__.getLogger('aurelia');
        this.hostConfigured = false;
        this.host = null;
        this.use.instance(Aurelia, this);
        this.use.instance(aurelia_loader__WEBPACK_IMPORTED_MODULE_4__.Loader, this.loader);
        this.use.instance(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewResources, this.resources);
    }
    Aurelia.prototype.start = function () {
        var _this = this;
        if (this._started) {
            return this._started;
        }
        this.logger.info('Aurelia Starting');
        return this._started = this.use.apply().then(function () {
            preventActionlessFormSubmit();
            if (!_this.container.hasResolver(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.BindingLanguage)) {
                var message = 'You must configure Aurelia with a BindingLanguage implementation.';
                _this.logger.error(message);
                throw new Error(message);
            }
            _this.logger.info('Aurelia Started');
            var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
            aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.dispatchEvent(evt);
            return _this;
        });
    };
    Aurelia.prototype.enhance = function (bindingContext, applicationHost) {
        var _this = this;
        if (bindingContext === void 0) { bindingContext = {}; }
        if (applicationHost === void 0) { applicationHost = null; }
        this._configureHost(applicationHost || aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.querySelectorAll('body')[0]);
        return new Promise(function (resolve) {
            var engine = _this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine);
            _this.root = engine.enhance({ container: _this.container, element: _this.host, resources: _this.resources, bindingContext: bindingContext });
            _this.root.attached();
            _this._onAureliaComposed();
            resolve(_this);
        });
    };
    Aurelia.prototype.setRoot = function (root, applicationHost) {
        var _this = this;
        if (root === void 0) { root = null; }
        if (applicationHost === void 0) { applicationHost = null; }
        var instruction = {};
        if (this.root && this.root.viewModel && this.root.viewModel.router) {
            this.root.viewModel.router.deactivate();
            this.root.viewModel.router.reset();
        }
        this._configureHost(applicationHost);
        var engine = this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.TemplatingEngine);
        var transaction = this.container.get(aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.CompositionTransaction);
        delete transaction.initialComposition;
        if (!root) {
            if (this.configModuleId) {
                root = (0,aurelia_path__WEBPACK_IMPORTED_MODULE_6__.relativeToFile)('./app', this.configModuleId);
            }
            else {
                root = 'app';
            }
        }
        instruction.viewModel = root;
        instruction.container = instruction.childContainer = this.container;
        instruction.viewSlot = this.hostSlot;
        instruction.host = this.host;
        return engine.compose(instruction).then(function (r) {
            _this.root = r;
            instruction.viewSlot.attached();
            _this._onAureliaComposed();
            return _this;
        });
    };
    Aurelia.prototype._configureHost = function (applicationHost) {
        if (this.hostConfigured) {
            return;
        }
        applicationHost = applicationHost || this.host;
        if (!applicationHost || typeof applicationHost === 'string') {
            this.host = aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.getElementById(applicationHost || 'applicationHost');
        }
        else {
            this.host = applicationHost;
        }
        if (!this.host) {
            throw new Error('No applicationHost was specified.');
        }
        this.hostConfigured = true;
        this.host.aurelia = this;
        this.hostSlot = new aurelia_templating__WEBPACK_IMPORTED_MODULE_3__.ViewSlot(this.host, true);
        this.hostSlot.transformChildNodesIntoView();
        this.container.registerInstance(aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.boundary, this.host);
    };
    Aurelia.prototype._onAureliaComposed = function () {
        var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
        setTimeout(function () { return aurelia_pal__WEBPACK_IMPORTED_MODULE_7__.DOM.dispatchEvent(evt); }, 1);
    };
    return Aurelia;
}());


//# sourceMappingURL=aurelia-framework.js.map


/***/ }),

/***/ "aurelia-history-browser":
/*!*********************************************************************************************!*\
  !*** ./node_modules/aurelia-history-browser/dist/native-modules/aurelia-history-browser.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserHistory": function() { return /* binding */ BrowserHistory; },
/* harmony export */   "DefaultLinkHandler": function() { return /* binding */ DefaultLinkHandler; },
/* harmony export */   "LinkHandler": function() { return /* binding */ LinkHandler; },
/* harmony export */   "configure": function() { return /* binding */ configure; }
/* harmony export */ });
/* harmony import */ var aurelia_history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-history */ 149);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 15);



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var LinkHandler = (function () {
    function LinkHandler() {
    }
    LinkHandler.prototype.activate = function (history) { };
    LinkHandler.prototype.deactivate = function () { };
    return LinkHandler;
}());
var DefaultLinkHandler = (function (_super) {
    __extends(DefaultLinkHandler, _super);
    function DefaultLinkHandler() {
        var _this = _super.call(this) || this;
        _this.handler = function (e) {
            var _a = DefaultLinkHandler.getEventInfo(e), shouldHandleEvent = _a.shouldHandleEvent, href = _a.href;
            if (shouldHandleEvent) {
                e.preventDefault();
                _this.history.navigate(href);
            }
        };
        return _this;
    }
    DefaultLinkHandler.prototype.activate = function (history) {
        if (history._hasPushState) {
            this.history = history;
            aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.addEventListener('click', this.handler, true);
        }
    };
    DefaultLinkHandler.prototype.deactivate = function () {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.removeEventListener('click', this.handler, true);
    };
    DefaultLinkHandler.getEventInfo = function (event) {
        var $event = event;
        var info = {
            shouldHandleEvent: false,
            href: null,
            anchor: null
        };
        var target = DefaultLinkHandler.findClosestAnchor($event.target);
        if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
            return info;
        }
        if (hasAttribute(target, 'download')
            || hasAttribute(target, 'router-ignore')
            || hasAttribute(target, 'data-router-ignore')) {
            return info;
        }
        if ($event.altKey || $event.ctrlKey || $event.metaKey || $event.shiftKey) {
            return info;
        }
        var href = target.getAttribute('href');
        info.anchor = target;
        info.href = href;
        var leftButtonClicked = $event.which === 1;
        var isRelative = href && !(href.charAt(0) === '#' || (/^[a-z]+:/i).test(href));
        info.shouldHandleEvent = leftButtonClicked && isRelative;
        return info;
    };
    DefaultLinkHandler.findClosestAnchor = function (el) {
        while (el) {
            if (el.tagName === 'A') {
                return el;
            }
            el = el.parentNode;
        }
    };
    DefaultLinkHandler.targetIsThisWindow = function (target) {
        var targetWindow = target.getAttribute('target');
        var win = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global;
        return !targetWindow ||
            targetWindow === win.name ||
            targetWindow === '_self';
    };
    return DefaultLinkHandler;
}(LinkHandler));
var hasAttribute = function (el, attr) { return el.hasAttribute(attr); };

var BrowserHistory = (function (_super) {
    __extends(BrowserHistory, _super);
    function BrowserHistory(linkHandler) {
        var _this = _super.call(this) || this;
        _this._isActive = false;
        _this._checkUrlCallback = _this._checkUrl.bind(_this);
        _this.location = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.location;
        _this.history = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.history;
        _this.linkHandler = linkHandler;
        return _this;
    }
    BrowserHistory.prototype.activate = function (options) {
        if (this._isActive) {
            throw new Error('History has already been activated.');
        }
        var $history = this.history;
        var wantsPushState = !!options.pushState;
        this._isActive = true;
        var normalizedOptions = this.options = Object.assign({}, { root: '/' }, this.options, options);
        var rootUrl = this.root = ('/' + normalizedOptions.root + '/').replace(rootStripper, '/');
        var wantsHashChange = this._wantsHashChange = normalizedOptions.hashChange !== false;
        var hasPushState = this._hasPushState = !!(normalizedOptions.pushState && $history && $history.pushState);
        var eventName;
        if (hasPushState) {
            eventName = 'popstate';
        }
        else if (wantsHashChange) {
            eventName = 'hashchange';
        }
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.addEventListener(eventName, this._checkUrlCallback);
        if (wantsHashChange && wantsPushState) {
            var $location = this.location;
            var atRoot = $location.pathname.replace(/[^\/]$/, '$&/') === rootUrl;
            if (!hasPushState && !atRoot) {
                var fragment = this.fragment = this._getFragment(null, true);
                $location.replace(rootUrl + $location.search + '#' + fragment);
                return true;
            }
            else if (hasPushState && atRoot && $location.hash) {
                var fragment = this.fragment = this._getHash().replace(routeStripper, '');
                $history.replaceState({}, aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title, rootUrl + fragment + $location.search);
            }
        }
        if (!this.fragment) {
            this.fragment = this._getFragment('');
        }
        this.linkHandler.activate(this);
        if (!normalizedOptions.silent) {
            return this._loadUrl('');
        }
    };
    BrowserHistory.prototype.deactivate = function () {
        var handler = this._checkUrlCallback;
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.removeEventListener('popstate', handler);
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.removeEventListener('hashchange', handler);
        this._isActive = false;
        this.linkHandler.deactivate();
    };
    BrowserHistory.prototype.getAbsoluteRoot = function () {
        var $location = this.location;
        var origin = createOrigin($location.protocol, $location.hostname, $location.port);
        return "" + origin + this.root;
    };
    BrowserHistory.prototype.navigate = function (fragment, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.trigger, trigger = _c === void 0 ? true : _c, _d = _b.replace, replace = _d === void 0 ? false : _d;
        var location = this.location;
        if (fragment && absoluteUrl.test(fragment)) {
            location.href = fragment;
            return true;
        }
        if (!this._isActive) {
            return false;
        }
        fragment = this._getFragment(fragment || '');
        if (this.fragment === fragment && !replace) {
            return false;
        }
        this.fragment = fragment;
        var url = this.root + fragment;
        if (fragment === '' && url !== '/') {
            url = url.slice(0, -1);
        }
        if (this._hasPushState) {
            url = url.replace('//', '/');
            this.history[replace ? 'replaceState' : 'pushState']({}, aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title, url);
        }
        else if (this._wantsHashChange) {
            updateHash(location, fragment, replace);
        }
        else {
            location.assign(url);
        }
        if (trigger) {
            return this._loadUrl(fragment);
        }
        return true;
    };
    BrowserHistory.prototype.navigateBack = function () {
        this.history.back();
    };
    BrowserHistory.prototype.setTitle = function (title) {
        aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.title = title;
    };
    BrowserHistory.prototype.setState = function (key, value) {
        var $history = this.history;
        var state = Object.assign({}, $history.state);
        var _a = this.location, pathname = _a.pathname, search = _a.search, hash = _a.hash;
        state[key] = value;
        $history.replaceState(state, null, "" + pathname + search + hash);
    };
    BrowserHistory.prototype.getState = function (key) {
        var state = Object.assign({}, this.history.state);
        return state[key];
    };
    BrowserHistory.prototype.getHistoryIndex = function () {
        var historyIndex = this.getState('HistoryIndex');
        if (historyIndex === undefined) {
            historyIndex = this.history.length - 1;
            this.setState('HistoryIndex', historyIndex);
        }
        return historyIndex;
    };
    BrowserHistory.prototype.go = function (movement) {
        this.history.go(movement);
    };
    BrowserHistory.prototype._getHash = function () {
        return this.location.hash.substr(1);
    };
    BrowserHistory.prototype._getFragment = function (fragment, forcePushState) {
        var rootUrl;
        if (!fragment) {
            if (this._hasPushState || !this._wantsHashChange || forcePushState) {
                var location_1 = this.location;
                fragment = location_1.pathname + location_1.search;
                rootUrl = this.root.replace(trailingSlash, '');
                if (!fragment.indexOf(rootUrl)) {
                    fragment = fragment.substr(rootUrl.length);
                }
            }
            else {
                fragment = this._getHash();
            }
        }
        return '/' + fragment.replace(routeStripper, '');
    };
    BrowserHistory.prototype._checkUrl = function () {
        var current = this._getFragment('');
        if (current !== this.fragment) {
            this._loadUrl('');
        }
    };
    BrowserHistory.prototype._loadUrl = function (fragmentOverride) {
        var fragment = this.fragment = this._getFragment(fragmentOverride);
        return this.options.routeHandler ?
            this.options.routeHandler(fragment) :
            false;
    };
    BrowserHistory.inject = [LinkHandler];
    return BrowserHistory;
}(aurelia_history__WEBPACK_IMPORTED_MODULE_0__.History));
var routeStripper = /^#?\/*|\s+$/g;
var rootStripper = /^\/+|\/+$/g;
var trailingSlash = /\/$/;
var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
function updateHash($location, fragment, replace) {
    if (replace) {
        var href = $location.href.replace(/(javascript:|#).*$/, '');
        $location.replace(href + '#' + fragment);
    }
    else {
        $location.hash = '#' + fragment;
    }
}
function createOrigin(protocol, hostname, port) {
    return protocol + "//" + hostname + (port ? ':' + port : '');
}

function configure(config) {
    var $config = config;
    $config.singleton(aurelia_history__WEBPACK_IMPORTED_MODULE_0__.History, BrowserHistory);
    $config.transient(LinkHandler, DefaultLinkHandler);
}


//# sourceMappingURL=aurelia-history-browser.js.map


/***/ }),

/***/ 149:
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-history/dist/native-modules/aurelia-history.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "History": function() { return /* binding */ History; }
/* harmony export */ });


function mi(name) {
  throw new Error('History must implement ' + name + '().');
}

var History = function () {
  function History() {
    
  }

  History.prototype.activate = function activate(options) {
    mi('activate');
  };

  History.prototype.deactivate = function deactivate() {
    mi('deactivate');
  };

  History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
    mi('getAbsoluteRoot');
  };

  History.prototype.navigate = function navigate(fragment, options) {
    mi('navigate');
  };

  History.prototype.navigateBack = function navigateBack() {
    mi('navigateBack');
  };

  History.prototype.setTitle = function setTitle(title) {
    mi('setTitle');
  };

  History.prototype.setState = function setState(key, value) {
    mi('setState');
  };

  History.prototype.getState = function getState(key) {
    mi('getState');
  };

  History.prototype.getHistoryIndex = function getHistoryIndex() {
    mi('getHistoryIndex');
  };

  History.prototype.go = function go(movement) {
    mi('go');
  };

  return History;
}();

/***/ }),

/***/ 139:
/*!*************************************************************************************!*\
  !*** ./node_modules/aurelia-http-client/dist/native-modules/aurelia-http-client.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorHttpResponseMessage": function() { return /* binding */ ErrorHttpResponseMessage; },
/* harmony export */   "Headers": function() { return /* binding */ Headers; },
/* harmony export */   "HttpClient": function() { return /* binding */ HttpClient; },
/* harmony export */   "HttpRequestMessage": function() { return /* binding */ HttpRequestMessage; },
/* harmony export */   "HttpResponseMessage": function() { return /* binding */ HttpResponseMessage; },
/* harmony export */   "JSONPRequestMessage": function() { return /* binding */ JSONPRequestMessage; },
/* harmony export */   "RequestBuilder": function() { return /* binding */ RequestBuilder; },
/* harmony export */   "RequestMessage": function() { return /* binding */ RequestMessage; },
/* harmony export */   "RequestMessageProcessor": function() { return /* binding */ RequestMessageProcessor; },
/* harmony export */   "callbackParameterNameTransformer": function() { return /* binding */ callbackParameterNameTransformer; },
/* harmony export */   "contentTransformer": function() { return /* binding */ contentTransformer; },
/* harmony export */   "createHttpRequestMessageProcessor": function() { return /* binding */ createHttpRequestMessageProcessor; },
/* harmony export */   "createJSONPRequestMessageProcessor": function() { return /* binding */ createJSONPRequestMessageProcessor; },
/* harmony export */   "credentialsTransformer": function() { return /* binding */ credentialsTransformer; },
/* harmony export */   "downloadProgressTransformer": function() { return /* binding */ downloadProgressTransformer; },
/* harmony export */   "headerTransformer": function() { return /* binding */ headerTransformer; },
/* harmony export */   "mimeTypes": function() { return /* binding */ mimeTypes; },
/* harmony export */   "progressTransformer": function() { return /* binding */ progressTransformer; },
/* harmony export */   "responseTypeTransformer": function() { return /* binding */ responseTypeTransformer; },
/* harmony export */   "timeoutTransformer": function() { return /* binding */ timeoutTransformer; }
/* harmony export */ });
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-path */ 627);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-pal */ 15);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Headers = function () {
  function Headers() {
    var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    

    this.headers = {};

    for (var _key in headers) {
      this.headers[_key.toLowerCase()] = { key: _key, value: headers[_key] };
    }
  }

  Headers.prototype.add = function add(key, value) {
    this.headers[key.toLowerCase()] = { key: key, value: value };
  };

  Headers.prototype.get = function get(key) {
    var header = this.headers[key.toLowerCase()];
    return header ? header.value : undefined;
  };

  Headers.prototype.clear = function clear() {
    this.headers = {};
  };

  Headers.prototype.has = function has(header) {
    return this.headers.hasOwnProperty(header.toLowerCase());
  };

  Headers.prototype.configureXHR = function configureXHR(xhr) {
    for (var name in this.headers) {
      if (this.headers.hasOwnProperty(name)) {
        xhr.setRequestHeader(this.headers[name].key, this.headers[name].value);
      }
    }
  };

  Headers.parse = function parse(headerStr) {
    var headers = new Headers();
    if (!headerStr) {
      return headers;
    }

    var headerPairs = headerStr.split('\r\n');
    for (var i = 0; i < headerPairs.length; i++) {
      var headerPair = headerPairs[i];

      var index = headerPair.indexOf(': ');
      if (index > 0) {
        var _key2 = headerPair.substring(0, index);
        var val = headerPair.substring(index + 2);
        headers.add(_key2, val);
      }
    }

    return headers;
  };

  return Headers;
}();

var RequestMessage = function () {
  function RequestMessage(method, url, content, headers) {
    

    this.method = method;
    this.url = url;
    this.content = content;
    this.headers = headers || new Headers();
    this.baseUrl = '';
  }

  RequestMessage.prototype.buildFullUrl = function buildFullUrl() {
    var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;
    var url = absoluteUrl.test(this.url) ? this.url : (0,aurelia_path__WEBPACK_IMPORTED_MODULE_0__.join)(this.baseUrl, this.url);

    if (this.params) {
      var qs = (0,aurelia_path__WEBPACK_IMPORTED_MODULE_0__.buildQueryString)(this.params, this.traditional);
      url = qs ? url + (this.url.indexOf('?') < 0 ? '?' : '&') + qs : url;
    }

    return url;
  };

  return RequestMessage;
}();

var HttpResponseMessage = function () {
  function HttpResponseMessage(requestMessage, xhr, responseType, reviver) {
    

    this.requestMessage = requestMessage;
    this.statusCode = xhr.status;
    this.response = xhr.response || xhr.responseText;
    this.isSuccess = xhr.status >= 200 && xhr.status < 400;
    this.statusText = xhr.statusText;
    this.reviver = reviver;
    this.mimeType = null;

    if (xhr.getAllResponseHeaders) {
      this.headers = Headers.parse(xhr.getAllResponseHeaders());
    } else {
      this.headers = new Headers();
    }

    var contentType = void 0;

    if (this.headers && this.headers.headers) {
      contentType = this.headers.get('Content-Type');
    }

    if (contentType) {
      this.mimeType = responseType = contentType.split(';')[0].trim();
      if (mimeTypes.hasOwnProperty(this.mimeType)) responseType = mimeTypes[this.mimeType];
    }

    this.responseType = responseType;
  }

  _createClass(HttpResponseMessage, [{
    key: 'content',
    get: function get() {
      try {
        if (this._content !== undefined) {
          return this._content;
        }

        if (this.response === undefined || this.response === null || this.response === '') {
          this._content = this.response;
          return this._content;
        }

        if (this.responseType === 'json') {
          this._content = JSON.parse(this.response, this.reviver);
          return this._content;
        }

        if (this.reviver) {
          this._content = this.reviver(this.response);
          return this._content;
        }

        this._content = this.response;
        return this._content;
      } catch (e) {
        if (this.isSuccess) {
          throw e;
        }

        this._content = null;
        return this._content;
      }
    }
  }]);

  return HttpResponseMessage;
}();

var mimeTypes = {
  'text/html': 'html',
  'text/javascript': 'js',
  'application/javascript': 'js',
  'text/json': 'json',
  'application/json': 'json',
  'application/rss+xml': 'rss',
  'application/atom+xml': 'atom',
  'application/xhtml+xml': 'xhtml',
  'text/markdown': 'md',
  'text/xml': 'xml',
  'text/mathml': 'mml',
  'application/xml': 'xml',
  'text/yml': 'yml',
  'text/csv': 'csv',
  'text/css': 'css',
  'text/less': 'less',
  'text/stylus': 'styl',
  'text/scss': 'scss',
  'text/sass': 'sass',
  'text/plain': 'txt'
};

function applyXhrTransformers(xhrTransformers, client, processor, message, xhr) {
  var i = void 0;
  var ii = void 0;

  for (i = 0, ii = xhrTransformers.length; i < ii; ++i) {
    xhrTransformers[i](client, processor, message, xhr);
  }
}

var RequestMessageProcessor = function () {
  function RequestMessageProcessor(xhrType, xhrTransformers) {
    

    this.XHRType = xhrType;
    this.xhrTransformers = xhrTransformers;
    this.isAborted = false;
  }

  RequestMessageProcessor.prototype.abort = function abort() {
    if (this.xhr && this.xhr.readyState !== aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.XMLHttpRequest.UNSENT) {
      this.xhr.abort();
    }

    this.isAborted = true;
  };

  RequestMessageProcessor.prototype.process = function process(client, requestMessage) {
    var _this = this;

    var promise = new Promise(function (resolve, reject) {
      var rejectResponse = void 0;
      if (client.rejectPromiseWithErrorObject) {
        rejectResponse = function rejectResponse(resp) {
          var errorResp = new ErrorHttpResponseMessage(resp);
          reject(errorResp);
        };
      } else {
        rejectResponse = function rejectResponse(resp) {
          reject(resp);
        };
      }

      var xhr = _this.xhr = new _this.XHRType();
      xhr.onload = function (e) {
        var response = new HttpResponseMessage(requestMessage, xhr, requestMessage.responseType, requestMessage.reviver);
        if (response.isSuccess) {
          resolve(response);
        } else {
          rejectResponse(response);
        }
      };

      xhr.ontimeout = function (e) {
        rejectResponse(new HttpResponseMessage(requestMessage, {
          response: e,
          status: xhr.status,
          statusText: xhr.statusText
        }, 'timeout'));
      };

      xhr.onerror = function (e) {
        rejectResponse(new HttpResponseMessage(requestMessage, {
          response: e,
          status: xhr.status,
          statusText: xhr.statusText
        }, 'error'));
      };

      xhr.onabort = function (e) {
        rejectResponse(new HttpResponseMessage(requestMessage, {
          response: e,
          status: xhr.status,
          statusText: xhr.statusText
        }, 'abort'));
      };
    });

    return Promise.resolve(requestMessage).then(function (message) {
      var processRequest = function processRequest() {
        if (_this.isAborted) {
          _this.xhr.abort();
        } else {
          _this.xhr.open(message.method, message.buildFullUrl(), true, message.user, message.password);
          applyXhrTransformers(_this.xhrTransformers, client, _this, message, _this.xhr);
          if (typeof message.content === 'undefined') {
            _this.xhr.send();
          } else {
            _this.xhr.send(message.content);
          }
        }

        return promise;
      };

      var chain = [[processRequest, undefined]];

      var interceptors = message.interceptors || [];
      interceptors.forEach(function (interceptor) {
        if (interceptor.request || interceptor.requestError) {
          chain.unshift([interceptor.request ? interceptor.request.bind(interceptor) : undefined, interceptor.requestError ? interceptor.requestError.bind(interceptor) : undefined]);
        }

        if (interceptor.response || interceptor.responseError) {
          chain.push([interceptor.response ? interceptor.response.bind(interceptor) : undefined, interceptor.responseError ? interceptor.responseError.bind(interceptor) : undefined]);
        }
      });

      var interceptorsPromise = Promise.resolve(message);

      while (chain.length) {
        var _interceptorsPromise;

        interceptorsPromise = (_interceptorsPromise = interceptorsPromise).then.apply(_interceptorsPromise, chain.shift());
      }

      return interceptorsPromise;
    });
  };

  return RequestMessageProcessor;
}();

function timeoutTransformer(client, processor, message, xhr) {
  if (message.timeout !== undefined) {
    xhr.timeout = message.timeout;
  }
}

function callbackParameterNameTransformer(client, processor, message, xhr) {
  if (message.callbackParameterName !== undefined) {
    xhr.callbackParameterName = message.callbackParameterName;
  }
}

function credentialsTransformer(client, processor, message, xhr) {
  if (message.withCredentials !== undefined) {
    xhr.withCredentials = message.withCredentials;
  }
}

function progressTransformer(client, processor, message, xhr) {
  if (message.progressCallback) {
    xhr.upload.onprogress = message.progressCallback;
  }
}

function downloadProgressTransformer(client, processor, message, xhr) {
  if (message.downloadProgressCallback) {
    xhr.onprogress = message.downloadProgressCallback;
  }
}

function responseTypeTransformer(client, processor, message, xhr) {
  var responseType = message.responseType;

  if (responseType === 'json') {
    responseType = 'text';
  }

  xhr.responseType = responseType;
}

function headerTransformer(client, processor, message, xhr) {
  message.headers.configureXHR(xhr);
}

function contentTransformer(client, processor, message, xhr) {
  if (message.skipContentProcessing) {
    return;
  }

  if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global.FormData && message.content instanceof FormData) {
    return;
  }

  if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global.Blob && message.content instanceof Blob) {
    return;
  }

  if (aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global.ArrayBuffer && message.content instanceof ArrayBuffer) {
    return;
  }

  if (message.content instanceof Document) {
    return;
  }

  if (typeof message.content === 'string') {
    return;
  }

  if (message.content === null || message.content === undefined) {
    return;
  }

  message.content = JSON.stringify(message.content, message.replacer);

  if (!message.headers.has('Content-Type')) {
    message.headers.add('Content-Type', 'application/json');
  }
}

var JSONPRequestMessage = function (_RequestMessage) {
  _inherits(JSONPRequestMessage, _RequestMessage);

  function JSONPRequestMessage(url, callbackParameterName) {
    

    var _this2 = _possibleConstructorReturn(this, _RequestMessage.call(this, 'JSONP', url));

    _this2.responseType = 'jsonp';
    _this2.callbackParameterName = callbackParameterName;
    return _this2;
  }

  return JSONPRequestMessage;
}(RequestMessage);

var JSONPXHR = function () {
  function JSONPXHR() {
    
  }

  JSONPXHR.prototype.open = function open(method, url) {
    this.method = method;
    this.url = url;
    this.callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  };

  JSONPXHR.prototype.send = function send() {
    var _this3 = this;

    var url = this.url + (this.url.indexOf('?') >= 0 ? '&' : '?') + encodeURIComponent(this.callbackParameterName) + '=' + this.callbackName;
    var script = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.createElement('script');

    script.src = url;
    script.onerror = function (e) {
      cleanUp();

      _this3.status = 0;
      _this3.onerror(new Error('error'));
    };

    var cleanUp = function cleanUp() {
      delete aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global[_this3.callbackName];
      aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.removeNode(script);
    };

    aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.global[this.callbackName] = function (data) {
      cleanUp();

      if (_this3.status === undefined) {
        _this3.status = 200;
        _this3.statusText = 'OK';
        _this3.response = data;
        _this3.onload(_this3);
      }
    };

    aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.appendNode(script);

    if (this.timeout !== undefined) {
      setTimeout(function () {
        if (_this3.status === undefined) {
          _this3.status = 0;
          _this3.ontimeout(new Error('timeout'));
        }
      }, this.timeout);
    }
  };

  JSONPXHR.prototype.abort = function abort() {
    if (this.status === undefined) {
      this.status = 0;
      this.onabort(new Error('abort'));
    }
  };

  JSONPXHR.prototype.setRequestHeader = function setRequestHeader() {};

  return JSONPXHR;
}();

function createJSONPRequestMessageProcessor() {
  return new RequestMessageProcessor(JSONPXHR, [timeoutTransformer, callbackParameterNameTransformer]);
}

var HttpRequestMessage = function (_RequestMessage2) {
  _inherits(HttpRequestMessage, _RequestMessage2);

  function HttpRequestMessage(method, url, content, headers) {
    

    var _this4 = _possibleConstructorReturn(this, _RequestMessage2.call(this, method, url, content, headers));

    _this4.responseType = 'json';return _this4;
  }

  return HttpRequestMessage;
}(RequestMessage);

function createHttpRequestMessageProcessor() {
  return new RequestMessageProcessor(aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.PLATFORM.XMLHttpRequest, [timeoutTransformer, credentialsTransformer, progressTransformer, downloadProgressTransformer, responseTypeTransformer, contentTransformer, headerTransformer]);
}

var ErrorHttpResponseMessage = function (_HttpResponseMessage) {
  _inherits(ErrorHttpResponseMessage, _HttpResponseMessage);

  function ErrorHttpResponseMessage(responseMessage) {
    

    var _this5 = _possibleConstructorReturn(this, _HttpResponseMessage.call(this, responseMessage.requestMessage, {
      response: responseMessage.response,
      status: responseMessage.statusCode,
      statusText: responseMessage.statusText
    }, responseMessage.responseType));

    _this5.name = responseMessage.responseType;
    _this5.message = 'Error: ' + responseMessage.statusCode + ' Status: ' + responseMessage.statusText;
    return _this5;
  }

  return ErrorHttpResponseMessage;
}(HttpResponseMessage);

var RequestBuilder = function () {
  function RequestBuilder(client) {
    

    this.client = client;
    this.transformers = client.requestTransformers.slice(0);
    this.useJsonp = false;
  }

  RequestBuilder.prototype.asDelete = function asDelete() {
    return this._addTransformer(function (client, processor, message) {
      message.method = 'DELETE';
    });
  };

  RequestBuilder.prototype.asGet = function asGet() {
    return this._addTransformer(function (client, processor, message) {
      message.method = 'GET';
    });
  };

  RequestBuilder.prototype.asHead = function asHead() {
    return this._addTransformer(function (client, processor, message) {
      message.method = 'HEAD';
    });
  };

  RequestBuilder.prototype.asOptions = function asOptions() {
    return this._addTransformer(function (client, processor, message) {
      message.method = 'OPTIONS';
    });
  };

  RequestBuilder.prototype.asPatch = function asPatch() {
    return this._addTransformer(function (client, processor, message) {
      message.method = 'PATCH';
    });
  };

  RequestBuilder.prototype.asPost = function asPost() {
    return this._addTransformer(function (client, processor, message) {
      message.method = 'POST';
    });
  };

  RequestBuilder.prototype.asPut = function asPut() {
    return this._addTransformer(function (client, processor, message) {
      message.method = 'PUT';
    });
  };

  RequestBuilder.prototype.asJsonp = function asJsonp(callbackParameterName) {
    this.useJsonp = true;
    return this._addTransformer(function (client, processor, message) {
      message.callbackParameterName = callbackParameterName;
    });
  };

  RequestBuilder.prototype.withUrl = function withUrl(url) {
    return this._addTransformer(function (client, processor, message) {
      message.url = url;
    });
  };

  RequestBuilder.prototype.withContent = function withContent(content) {
    return this._addTransformer(function (client, processor, message) {
      message.content = content;
    });
  };

  RequestBuilder.prototype.withBaseUrl = function withBaseUrl(baseUrl) {
    return this._addTransformer(function (client, processor, message) {
      message.baseUrl = baseUrl;
    });
  };

  RequestBuilder.prototype.withParams = function withParams(params, traditional) {
    return this._addTransformer(function (client, processor, message) {
      message.traditional = traditional;
      message.params = params;
    });
  };

  RequestBuilder.prototype.withResponseType = function withResponseType(responseType) {
    return this._addTransformer(function (client, processor, message) {
      message.responseType = responseType;
    });
  };

  RequestBuilder.prototype.withTimeout = function withTimeout(timeout) {
    return this._addTransformer(function (client, processor, message) {
      message.timeout = timeout;
    });
  };

  RequestBuilder.prototype.withHeader = function withHeader(key, value) {
    return this._addTransformer(function (client, processor, message) {
      message.headers.add(key, value);
    });
  };

  RequestBuilder.prototype.withCredentials = function withCredentials(value) {
    return this._addTransformer(function (client, processor, message) {
      message.withCredentials = value;
    });
  };

  RequestBuilder.prototype.withLogin = function withLogin(user, password) {
    return this._addTransformer(function (client, processor, message) {
      message.user = user;message.password = password;
    });
  };

  RequestBuilder.prototype.withReviver = function withReviver(reviver) {
    return this._addTransformer(function (client, processor, message) {
      message.reviver = reviver;
    });
  };

  RequestBuilder.prototype.withReplacer = function withReplacer(replacer) {
    return this._addTransformer(function (client, processor, message) {
      message.replacer = replacer;
    });
  };

  RequestBuilder.prototype.withProgressCallback = function withProgressCallback(progressCallback) {
    return this._addTransformer(function (client, processor, message) {
      message.progressCallback = progressCallback;
    });
  };

  RequestBuilder.prototype.withDownloadProgressCallback = function withDownloadProgressCallback(downloadProgressCallback) {
    return this._addTransformer(function (client, processor, message) {
      message.downloadProgressCallback = downloadProgressCallback;
    });
  };

  RequestBuilder.prototype.withCallbackParameterName = function withCallbackParameterName(callbackParameterName) {
    return this._addTransformer(function (client, processor, message) {
      message.callbackParameterName = callbackParameterName;
    });
  };

  RequestBuilder.prototype.withInterceptor = function withInterceptor(interceptor) {
    return this._addTransformer(function (client, processor, message) {
      message.interceptors = message.interceptors || [];
      message.interceptors.unshift(interceptor);
    });
  };

  RequestBuilder.prototype.skipContentProcessing = function skipContentProcessing() {
    return this._addTransformer(function (client, processor, message) {
      message.skipContentProcessing = true;
    });
  };

  RequestBuilder.prototype._addTransformer = function _addTransformer(fn) {
    this.transformers.push(fn);
    return this;
  };

  RequestBuilder.addHelper = function addHelper(name, fn) {
    RequestBuilder.prototype[name] = function () {
      return this._addTransformer(fn.apply(this, arguments));
    };
  };

  RequestBuilder.prototype.send = function send() {
    var message = this.useJsonp ? new JSONPRequestMessage() : new HttpRequestMessage();
    return this.client.send(message, this.transformers);
  };

  return RequestBuilder;
}();

function trackRequestStart(client, processor) {
  client.pendingRequests.push(processor);
  client.isRequesting = true;
}

function trackRequestEnd(client, processor) {
  var index = client.pendingRequests.indexOf(processor);

  client.pendingRequests.splice(index, 1);
  client.isRequesting = client.pendingRequests.length > 0;

  if (!client.isRequesting) {
    var evt = aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.createCustomEvent('aurelia-http-client-requests-drained', { bubbles: true, cancelable: true });
    setTimeout(function () {
      return aurelia_pal__WEBPACK_IMPORTED_MODULE_1__.DOM.dispatchEvent(evt);
    }, 1);
  }
}

var HttpClient = function () {
  function HttpClient() {
    

    this.isRequesting = false;

    this.rejectPromiseWithErrorObject = false;
    this.requestTransformers = [];
    this.requestProcessorFactories = new Map();
    this.requestProcessorFactories.set(HttpRequestMessage, createHttpRequestMessageProcessor);
    this.requestProcessorFactories.set(JSONPRequestMessage, createJSONPRequestMessageProcessor);
    this.pendingRequests = [];
  }

  HttpClient.prototype.configure = function configure(fn) {
    var builder = new RequestBuilder(this);
    fn(builder);
    this.requestTransformers = builder.transformers;
    return this;
  };

  HttpClient.prototype.createRequest = function createRequest(url) {
    var builder = new RequestBuilder(this);

    if (url) {
      builder.withUrl(url);
    }

    return builder;
  };

  HttpClient.prototype.send = function send(requestMessage, transformers) {
    var _this6 = this;

    var createProcessor = this.requestProcessorFactories.get(requestMessage.constructor);
    var processor = void 0;
    var promise = void 0;
    var i = void 0;
    var ii = void 0;

    if (!createProcessor) {
      throw new Error('No request message processor factory for ' + requestMessage.constructor + '.');
    }

    processor = createProcessor();
    trackRequestStart(this, processor);

    transformers = transformers || this.requestTransformers;

    promise = Promise.resolve(requestMessage).then(function (message) {
      for (i = 0, ii = transformers.length; i < ii; ++i) {
        transformers[i](_this6, processor, message);
      }

      return processor.process(_this6, message).then(function (response) {
        trackRequestEnd(_this6, processor);
        return response;
      }).catch(function (response) {
        trackRequestEnd(_this6, processor);
        throw response;
      });
    });

    promise.abort = promise.cancel = function () {
      processor.abort();
    };

    return promise;
  };

  HttpClient.prototype.delete = function _delete(url) {
    return this.createRequest(url).asDelete().send();
  };

  HttpClient.prototype.get = function get(url, params, traditional) {
    var req = this.createRequest(url).asGet();

    if (params) {
      return req.withParams(params, traditional).send();
    }

    return req.send();
  };

  HttpClient.prototype.head = function head(url) {
    return this.createRequest(url).asHead().send();
  };

  HttpClient.prototype.jsonp = function jsonp(url) {
    var callbackParameterName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'jsoncallback';

    return this.createRequest(url).asJsonp(callbackParameterName).send();
  };

  HttpClient.prototype.options = function options(url) {
    return this.createRequest(url).asOptions().send();
  };

  HttpClient.prototype.put = function put(url, content) {
    return this.createRequest(url).asPut().withContent(content).send();
  };

  HttpClient.prototype.patch = function patch(url, content) {
    return this.createRequest(url).asPatch().withContent(content).send();
  };

  HttpClient.prototype.post = function post(url, content) {
    return this.createRequest(url).asPost().withContent(content).send();
  };

  return HttpClient;
}();

/***/ }),

/***/ 757:
/*!*******************************************************************************************!*\
  !*** ./node_modules/aurelia-loader-webpack/dist/native-modules/aurelia-loader-webpack.js ***!
  \*******************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextTemplateLoader": function() { return /* binding */ TextTemplateLoader; },
/* harmony export */   "WebpackLoader": function() { return /* binding */ WebpackLoader; },
/* harmony export */   "ensureOriginOnExports": function() { return /* binding */ ensureOriginOnExports; }
/* harmony export */ });
/* harmony import */ var aurelia_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-loader */ 209);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-metadata */ 383);
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aurelia-pal */ 15);
/* module decorator */ module = __webpack_require__.hmd(module);




/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

/**
* An implementation of the TemplateLoader interface implemented with text-based loading.
*/
var TextTemplateLoader = /** @class */ (function () {
    function TextTemplateLoader() {
    }
    /**
    * Loads a template.
    * @param loader The loader that is requesting the template load.
    * @param entry The TemplateRegistryEntry to load and populate with a template.
    * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.
    */
    TextTemplateLoader.prototype.loadTemplate = function (loader, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loader.loadText(entry.address)];
                    case 1:
                        text = _a.sent();
                        entry.template = aurelia_pal__WEBPACK_IMPORTED_MODULE_2__.DOM.createTemplateFromMarkup(text);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TextTemplateLoader;
}());
function ensureOriginOnExports(moduleExports, moduleId) {
    var target = moduleExports;
    var key;
    var exportedValue;
    if (target.__useDefault) {
        target = target.default;
    }
    aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin.set(target, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin(moduleId, 'default'));
    if (typeof target === 'object') {
        for (key in target) {
            exportedValue = target[key];
            if (typeof exportedValue === 'function') {
                aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin.set(exportedValue, new aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin(moduleId, key));
            }
        }
    }
    return moduleExports;
}
/**
* A default implementation of the Loader abstraction which works with webpack (extended common-js style).
*/
var WebpackLoader = /** @class */ (function (_super) {
    __extends(WebpackLoader, _super);
    function WebpackLoader() {
        var _this = _super.call(this) || this;
        _this.moduleRegistry = Object.create(null);
        _this.loaderPlugins = Object.create(null);
        _this.modulesBeingLoaded = new Map();
        _this.useTemplateLoader(new TextTemplateLoader());
        _this.addPlugin('template-registry-entry', {
            fetch: function (moduleId) { return __awaiter(_this, void 0, void 0, function () {
                var HmrContext, entry;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // HMR:
                            if (false) {}
                            entry = this.getOrCreateTemplateRegistryEntry(moduleId);
                            if (!!entry.templateIsLoaded) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.templateLoader.loadTemplate(this, entry)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/, entry];
                    }
                });
            }); }
        });
        aurelia_pal__WEBPACK_IMPORTED_MODULE_2__.PLATFORM.eachModule = function (callback) {
            var registry = __webpack_require__.c;
            var cachedModuleIds = Object.getOwnPropertyNames(registry);
            cachedModuleIds
                // Note: we use .some here like a .forEach that can be "break"ed out of.
                // It will stop iterating only when a truthy value is returned.
                // Even though the docs say "true" explicitly, loader-default also goes by truthy
                // and this is to keep it consistent with that.
                .some(function (moduleId) {
                var moduleExports = registry[moduleId].exports;
                if (typeof moduleExports === 'object') {
                    return callback(moduleId, moduleExports);
                }
                return false;
            });
        };
        return _this;
    }
    WebpackLoader.prototype._import = function (address, defaultHMR) {
        if (defaultHMR === void 0) { defaultHMR = true; }
        return __awaiter(this, void 0, void 0, function () {
            var addressParts, moduleId, loaderPlugin, plugin_1, asyncModuleId, callback;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressParts = address.split('!');
                        moduleId = addressParts.splice(addressParts.length - 1, 1)[0];
                        loaderPlugin = addressParts.length === 1 ? addressParts[0] : null;
                        if (!loaderPlugin) return [3 /*break*/, 2];
                        plugin_1 = this.loaderPlugins[loaderPlugin];
                        if (!plugin_1) {
                            throw new Error("Plugin " + loaderPlugin + " is not registered in the loader.");
                        }
                        if (false) {}
                        return [4 /*yield*/, plugin_1.fetch(moduleId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (__webpack_require__.m[moduleId]) {
                            if (defaultHMR && module.hot && 0) {}
                            return [2 /*return*/, __webpack_require__(moduleId)];
                        }
                        asyncModuleId = "async!" + moduleId;
                        if (!__webpack_require__.m[asyncModuleId]) return [3 /*break*/, 4];
                        if (defaultHMR && module.hot && 0) {}
                        callback = __webpack_require__(asyncModuleId);
                        return [4 /*yield*/, new Promise(callback)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: throw new Error("Unable to find module with ID: " + moduleId);
                }
            });
        });
    };
    /**
    * Maps a module id to a source.
    * @param id The module id.
    * @param source The source to map the module to.
    */
    WebpackLoader.prototype.map = function (id, source) { };
    /**
    * Normalizes a module id.
    * @param moduleId The module id to normalize.
    * @param relativeTo What the module id should be normalized relative to.
    * @return The normalized module id.
    */
    WebpackLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
        return moduleId;
    };
    /**
    * Normalizes a module id.
    * @param moduleId The module id to normalize.
    * @param relativeTo What the module id should be normalized relative to.
    * @return The normalized module id.
    */
    WebpackLoader.prototype.normalize = function (moduleId, relativeTo) {
        return Promise.resolve(moduleId);
    };
    /**
    * Instructs the loader to use a specific TemplateLoader instance for loading templates
    * @param templateLoader The instance of TemplateLoader to use for loading templates.
    */
    WebpackLoader.prototype.useTemplateLoader = function (templateLoader) {
        this.templateLoader = templateLoader;
    };
    /**
    * Loads a collection of modules.
    * @param ids The set of module ids to load.
    * @return A Promise for an array of loaded modules.
    */
    WebpackLoader.prototype.loadAllModules = function (ids) {
        var _this = this;
        return Promise.all(ids.map(function (id) { return _this.loadModule(id); }));
    };
    /**
    * Loads a module.
    * @param moduleId The module ID to load.
    * @return A Promise for the loaded module.
    */
    WebpackLoader.prototype.loadModule = function (moduleId, defaultHMR) {
        if (defaultHMR === void 0) { defaultHMR = true; }
        return __awaiter(this, void 0, void 0, function () {
            var existing, beingLoaded, moduleExports;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        existing = this.moduleRegistry[moduleId];
                        if (existing) {
                            return [2 /*return*/, existing];
                        }
                        beingLoaded = this.modulesBeingLoaded.get(moduleId);
                        if (beingLoaded) {
                            return [2 /*return*/, beingLoaded];
                        }
                        beingLoaded = this._import(moduleId, defaultHMR);
                        this.modulesBeingLoaded.set(moduleId, beingLoaded);
                        return [4 /*yield*/, beingLoaded];
                    case 1:
                        moduleExports = _a.sent();
                        this.moduleRegistry[moduleId] = ensureOriginOnExports(moduleExports, moduleId);
                        this.modulesBeingLoaded.delete(moduleId);
                        return [2 /*return*/, moduleExports];
                }
            });
        });
    };
    /**
    * Loads a template.
    * @param url The url of the template to load.
    * @return A Promise for a TemplateRegistryEntry containing the template.
    */
    WebpackLoader.prototype.loadTemplate = function (url) {
        return this.loadModule(this.applyPluginToUrl(url, 'template-registry-entry'), false);
    };
    /**
    * Loads a text-based resource.
    * @param url The url of the text file to load.
    * @return A Promise for text content.
    */
    WebpackLoader.prototype.loadText = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result, defaultExport;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadModule(url, false)];
                    case 1:
                        result = _a.sent();
                        defaultExport = result && result.__esModule ? result.default : result;
                        if (defaultExport instanceof Array && defaultExport[0] instanceof Array && defaultExport.hasOwnProperty('toString')) {
                            // we're dealing with a file loaded using the css-loader:
                            return [2 /*return*/, defaultExport.toString()];
                        }
                        return [2 /*return*/, typeof result === "string" ? result : defaultExport];
                }
            });
        });
    };
    /**
    * Alters a module id so that it includes a plugin loader.
    * @param url The url of the module to load.
    * @param pluginName The plugin to apply to the module id.
    * @return The plugin-based module id.
    */
    WebpackLoader.prototype.applyPluginToUrl = function (url, pluginName) {
        return pluginName + "!" + url;
    };
    /**
    * Registers a plugin with the loader.
    * @param pluginName The name of the plugin.
    * @param implementation The plugin implementation.
    */
    WebpackLoader.prototype.addPlugin = function (pluginName, implementation) {
        this.loaderPlugins[pluginName] = implementation;
    };
    return WebpackLoader;
}(aurelia_loader__WEBPACK_IMPORTED_MODULE_0__.Loader));
aurelia_pal__WEBPACK_IMPORTED_MODULE_2__.PLATFORM.Loader = WebpackLoader;




/***/ }),

/***/ 209:
/*!***************************************************************************!*\
  !*** ./node_modules/aurelia-loader/dist/native-modules/aurelia-loader.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Loader": function() { return /* binding */ Loader; },
/* harmony export */   "TemplateDependency": function() { return /* binding */ TemplateDependency; },
/* harmony export */   "TemplateRegistryEntry": function() { return /* binding */ TemplateRegistryEntry; }
/* harmony export */ });
/* harmony import */ var aurelia_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-path */ 627);
/* harmony import */ var aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aurelia-metadata */ 383);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();






var TemplateDependency = function TemplateDependency(src, name) {
  

  this.src = src;
  this.name = name;
};

var TemplateRegistryEntry = function () {
  function TemplateRegistryEntry(address) {
    

    this.templateIsLoaded = false;
    this.factoryIsReady = false;
    this.resources = null;
    this.dependencies = null;

    this.address = address;
    this.onReady = null;
    this._template = null;
    this._factory = null;
  }

  TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
    var finalSrc = typeof src === 'string' ? (0,aurelia_path__WEBPACK_IMPORTED_MODULE_0__.relativeToFile)(src, this.address) : aurelia_metadata__WEBPACK_IMPORTED_MODULE_1__.Origin.get(src).moduleId;

    this.dependencies.push(new TemplateDependency(finalSrc, name));
  };

  _createClass(TemplateRegistryEntry, [{
    key: 'template',
    get: function get() {
      return this._template;
    },
    set: function set(value) {
      var address = this.address;
      var requires = void 0;
      var current = void 0;
      var src = void 0;
      var dependencies = void 0;

      this._template = value;
      this.templateIsLoaded = true;

      requires = value.content.querySelectorAll('require');
      dependencies = this.dependencies = new Array(requires.length);

      for (var i = 0, ii = requires.length; i < ii; ++i) {
        current = requires[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + address + ' has no "from" attribute.');
        }

        dependencies[i] = new TemplateDependency((0,aurelia_path__WEBPACK_IMPORTED_MODULE_0__.relativeToFile)(src, address), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    }
  }, {
    key: 'factory',
    get: function get() {
      return this._factory;
    },
    set: function set(value) {
      this._factory = value;
      this.factoryIsReady = true;
    }
  }]);

  return TemplateRegistryEntry;
}();

var Loader = function () {
  function Loader() {
    

    this.templateRegistry = {};
  }

  Loader.prototype.map = function map(id, source) {
    throw new Error('Loaders must implement map(id, source).');
  };

  Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
  };

  Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
  };

  Loader.prototype.loadModule = function loadModule(id) {
    throw new Error('Loaders must implement loadModule(id).');
  };

  Loader.prototype.loadAllModules = function loadAllModules(ids) {
    throw new Error('Loader must implement loadAllModules(ids).');
  };

  Loader.prototype.loadTemplate = function loadTemplate(url) {
    throw new Error('Loader must implement loadTemplate(url).');
  };

  Loader.prototype.loadText = function loadText(url) {
    throw new Error('Loader must implement loadText(url).');
  };

  Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
  };

  Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    throw new Error('Loader must implement addPlugin(pluginName, implementation).');
  };

  Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
    return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
  };

  return Loader;
}();

/***/ }),

/***/ "aurelia-logging-console":
/*!*********************************************************************************************!*\
  !*** ./node_modules/aurelia-logging-console/dist/native-modules/aurelia-logging-console.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleAppender": function() { return /* binding */ ConsoleAppender; }
/* harmony export */ });


var ConsoleAppender = function () {
  function ConsoleAppender() {
    
  }

  ConsoleAppender.prototype.debug = function debug(logger) {
    var _console;

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    (_console = console).debug.apply(_console, ["DEBUG [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.info = function info(logger) {
    var _console2;

    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    (_console2 = console).info.apply(_console2, ["INFO [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.warn = function warn(logger) {
    var _console3;

    for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      rest[_key3 - 1] = arguments[_key3];
    }

    (_console3 = console).warn.apply(_console3, ["WARN [" + logger.id + "]"].concat(rest));
  };

  ConsoleAppender.prototype.error = function error(logger) {
    var _console4;

    for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }

    (_console4 = console).error.apply(_console4, ["ERROR [" + logger.id + "]"].concat(rest));
  };

  return ConsoleAppender;
}();

/***/ }),

/***/ 99:
/*!*****************************************************************************!*\
  !*** ./node_modules/aurelia-logging/dist/native-modules/aurelia-logging.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": function() { return /* binding */ Logger; },
/* harmony export */   "addAppender": function() { return /* binding */ addAppender; },
/* harmony export */   "addCustomLevel": function() { return /* binding */ addCustomLevel; },
/* harmony export */   "clearAppenders": function() { return /* binding */ clearAppenders; },
/* harmony export */   "getAppenders": function() { return /* binding */ getAppenders; },
/* harmony export */   "getLevel": function() { return /* binding */ getLevel; },
/* harmony export */   "getLogger": function() { return /* binding */ getLogger; },
/* harmony export */   "logLevel": function() { return /* binding */ logLevel; },
/* harmony export */   "removeAppender": function() { return /* binding */ removeAppender; },
/* harmony export */   "removeCustomLevel": function() { return /* binding */ removeCustomLevel; },
/* harmony export */   "setLevel": function() { return /* binding */ setLevel; }
/* harmony export */ });


var logLevel = {
  none: 0,
  error: 10,
  warn: 20,
  info: 30,
  debug: 40
};

var loggers = {};
var appenders = [];
var globalDefaultLevel = logLevel.none;

var standardLevels = ['none', 'error', 'warn', 'info', 'debug'];
function isStandardLevel(level) {
  return standardLevels.filter(function (l) {
    return l === level;
  }).length > 0;
}

function appendArgs() {
  return [this].concat(Array.prototype.slice.call(arguments));
}

function logFactory(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var _appenders$i;

      (_appenders$i = appenders[i])[level].apply(_appenders$i, args);
    }
  };
}

function logFactoryCustom(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var appender = appenders[i];
      if (appender[level] !== undefined) {
        appender[level].apply(appender, args);
      }
    }
  };
}

function connectLoggers() {
  var proto = Logger.prototype;
  for (var _level in logLevel) {
    if (isStandardLevel(_level)) {
      if (_level !== 'none') {
        proto[_level] = logFactory(_level);
      }
    } else {
      proto[_level] = logFactoryCustom(_level);
    }
  }
}

function disconnectLoggers() {
  var proto = Logger.prototype;
  for (var _level2 in logLevel) {
    if (_level2 !== 'none') {
      proto[_level2] = function () {};
    }
  }
}

function getLogger(id) {
  return loggers[id] || new Logger(id);
}

function addAppender(appender) {
  if (appenders.push(appender) === 1) {
    connectLoggers();
  }
}

function removeAppender(appender) {
  appenders = appenders.filter(function (a) {
    return a !== appender;
  });
}

function getAppenders() {
  return [].concat(appenders);
}

function clearAppenders() {
  appenders = [];
  disconnectLoggers();
}

function addCustomLevel(name, value) {
  if (logLevel[name] !== undefined) {
    throw Error('Log level "' + name + '" already exists.');
  }

  if (isNaN(value)) {
    throw Error('Value must be a number.');
  }

  logLevel[name] = value;

  if (appenders.length > 0) {
    connectLoggers();
  } else {
    Logger.prototype[name] = function () {};
  }
}

function removeCustomLevel(name) {
  if (logLevel[name] === undefined) {
    return;
  }

  if (isStandardLevel(name)) {
    throw Error('Built-in log level "' + name + '" cannot be removed.');
  }

  delete logLevel[name];
  delete Logger.prototype[name];
}

function setLevel(level) {
  globalDefaultLevel = level;
  for (var key in loggers) {
    loggers[key].setLevel(level);
  }
}

function getLevel() {
  return globalDefaultLevel;
}

var Logger = function () {
  function Logger(id) {
    

    var cached = loggers[id];
    if (cached) {
      return cached;
    }

    loggers[id] = this;
    this.id = id;
    this.level = globalDefaultLevel;
  }

  Logger.prototype.debug = function debug(message) {};

  Logger.prototype.info = function info(message) {};

  Logger.prototype.warn = function warn(message) {};

  Logger.prototype.error = function error(message) {};

  Logger.prototype.setLevel = function setLevel(level) {
    this.level = level;
  };

  Logger.prototype.isDebugEnabled = function isDebugEnabled() {
    return this.level === logLevel.debug;
  };

  return Logger;
}();

/***/ }),

/***/ 383:
/*!*******************************************************************************!*\
  !*** ./node_modules/aurelia-metadata/dist/native-modules/aurelia-metadata.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Origin": function() { return /* binding */ Origin; },
/* harmony export */   "decorators": function() { return /* binding */ decorators; },
/* harmony export */   "deprecated": function() { return /* binding */ deprecated; },
/* harmony export */   "metadata": function() { return /* binding */ metadata; },
/* harmony export */   "mixin": function() { return /* binding */ mixin; },
/* harmony export */   "protocol": function() { return /* binding */ protocol; }
/* harmony export */ });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 15);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };





function isObject(val) {
  return val && (typeof val === 'function' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object');
}

var metadata = {
  resource: 'aurelia:resource',
  paramTypes: 'design:paramtypes',
  propertyType: 'design:type',
  properties: 'design:properties',
  get: function get(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    var result = metadata.getOwn(metadataKey, target, targetKey);
    return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
  },
  getOwn: function getOwn(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    return Reflect.getOwnMetadata(metadataKey, target, targetKey);
  },
  define: function define(metadataKey, metadataValue, target, targetKey) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
  },
  getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
    var result = metadata.getOwn(metadataKey, target, targetKey);

    if (result === undefined) {
      result = new Type();
      Reflect.defineMetadata(metadataKey, result, target, targetKey);
    }

    return result;
  }
};

var originStorage = new Map();
var unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

var Origin = function () {
  function Origin(moduleId, moduleMember) {
    

    this.moduleId = moduleId;
    this.moduleMember = moduleMember;
  }

  Origin.get = function get(fn) {
    var origin = originStorage.get(fn);

    if (origin === undefined) {
      aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.PLATFORM.eachModule(function (key, value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          for (var name in value) {
            try {
              var exp = value[name];
              if (exp === fn) {
                originStorage.set(fn, origin = new Origin(key, name));
                return true;
              }
            } catch (e) {}
          }
        }

        if (value === fn) {
          originStorage.set(fn, origin = new Origin(key, 'default'));
          return true;
        }

        return false;
      });
    }

    return origin || unknownOrigin;
  };

  Origin.set = function set(fn, origin) {
    originStorage.set(fn, origin);
  };

  return Origin;
}();

function decorators() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var applicator = function applicator(target, key, descriptor) {
    var i = rest.length;

    if (key) {
      descriptor = descriptor || {
        value: target[key],
        writable: true,
        configurable: true,
        enumerable: true
      };

      while (i--) {
        descriptor = rest[i](target, key, descriptor) || descriptor;
      }

      Object.defineProperty(target, key, descriptor);
    } else {
      while (i--) {
        target = rest[i](target) || target;
      }
    }

    return target;
  };

  applicator.on = applicator;
  return applicator;
}

function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
  function decorator(target, key, descriptor) {
    var methodSignature = target.constructor.name + '#' + key;
    var options = maybeKey ? {} : optionsOrTarget || {};
    var message = 'DEPRECATION - ' + methodSignature;

    if (typeof descriptor.value !== 'function') {
      throw new SyntaxError('Only methods can be marked as deprecated.');
    }

    if (options.message) {
      message += ' - ' + options.message;
    }

    return _extends({}, descriptor, {
      value: function deprecationWrapper() {
        if (options.error) {
          throw new Error(message);
        } else {
          console.warn(message);
        }

        return descriptor.value.apply(this, arguments);
      }
    });
  }

  return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
}

function mixin(behavior) {
  var instanceKeys = Object.keys(behavior);

  function _mixin(possible) {
    var decorator = function decorator(target) {
      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

      var i = instanceKeys.length;
      while (i--) {
        var property = instanceKeys[i];
        Object.defineProperty(resolvedTarget, property, {
          value: behavior[property],
          writable: true
        });
      }
    };

    return possible ? decorator(possible) : decorator;
  }

  return _mixin;
}

function alwaysValid() {
  return true;
}
function noCompose() {}

function ensureProtocolOptions(options) {
  if (options === undefined) {
    options = {};
  } else if (typeof options === 'function') {
    options = {
      validate: options
    };
  }

  if (!options.validate) {
    options.validate = alwaysValid;
  }

  if (!options.compose) {
    options.compose = noCompose;
  }

  return options;
}

function createProtocolValidator(validate) {
  return function (target) {
    var result = validate(target);
    return result === true;
  };
}

function createProtocolAsserter(name, validate) {
  return function (target) {
    var result = validate(target);
    if (result !== true) {
      throw new Error(result || name + ' was not correctly implemented.');
    }
  };
}

function protocol(name, options) {
  options = ensureProtocolOptions(options);

  var result = function result(target) {
    var resolvedTarget = typeof target === 'function' ? target.prototype : target;

    options.compose(resolvedTarget);
    result.assert(resolvedTarget);

    Object.defineProperty(resolvedTarget, 'protocol:' + name, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: true
    });
  };

  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
}

protocol.create = function (name, options) {
  options = ensureProtocolOptions(options);
  var hidden = 'protocol:' + name;
  var result = function result(target) {
    var decorator = protocol(name, options);
    return target ? decorator(target) : decorator;
  };

  result.decorates = function (obj) {
    return obj[hidden] === true;
  };
  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
};

/***/ }),

/***/ "aurelia-pal-browser":
/*!*************************************************************************************!*\
  !*** ./node_modules/aurelia-pal-browser/dist/native-modules/aurelia-pal-browser.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_DOM": function() { return /* binding */ _DOM; },
/* harmony export */   "_FEATURE": function() { return /* binding */ _FEATURE; },
/* harmony export */   "_PLATFORM": function() { return /* binding */ _PLATFORM; },
/* harmony export */   "initialize": function() { return /* binding */ initialize; }
/* harmony export */ });
/* harmony import */ var aurelia_pal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurelia-pal */ 15);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var _PLATFORM = {
  location: window.location,
  history: window.history,
  addEventListener: function addEventListener(eventName, callback, capture) {
    this.global.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    this.global.removeEventListener(eventName, callback, capture);
  },

  performance: window.performance,
  requestAnimationFrame: function requestAnimationFrame(callback) {
    return this.global.requestAnimationFrame(callback);
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var test = function test() {};

  if (test.name === undefined) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

        Object.defineProperty(this, 'name', { value: name });
        return name;
      }
    });
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    var protoProp = 'prototype';
    var strTrim = String.prototype.trim;
    var arrIndexOf = Array.prototype.indexOf;
    var emptyArray = [];

    var DOMEx = function DOMEx(type, message) {
      this.name = type;
      this.code = DOMException[type];
      this.message = message;
    };

    var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
      if (token === '') {
        throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
      }

      if (/\s/.test(token)) {
        throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
      }

      return arrIndexOf.call(classList, token);
    };

    var ClassList = function ClassList(elem) {
      var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
      var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

      for (var i = 0, ii = classes.length; i < ii; ++i) {
        this.push(classes[i]);
      }

      this._updateClassName = function () {
        elem.setAttribute('class', this.toString());
      };
    };

    var classListProto = ClassList[protoProp] = [];

    DOMEx[protoProp] = Error[protoProp];

    classListProto.item = function (i) {
      return this[i] || null;
    };

    classListProto.contains = function (token) {
      token += '';
      return checkTokenAndGetIndex(this, token) !== -1;
    };

    classListProto.add = function () {
      var tokens = arguments;
      var i = 0;
      var ii = tokens.length;
      var token = void 0;
      var updated = false;

      do {
        token = tokens[i] + '';
        if (checkTokenAndGetIndex(this, token) === -1) {
          this.push(token);
          updated = true;
        }
      } while (++i < ii);

      if (updated) {
        this._updateClassName();
      }
    };

    classListProto.remove = function () {
      var tokens = arguments;
      var i = 0;
      var ii = tokens.length;
      var token = void 0;
      var updated = false;
      var index = void 0;

      do {
        token = tokens[i] + '';
        index = checkTokenAndGetIndex(this, token);
        while (index !== -1) {
          this.splice(index, 1);
          updated = true;
          index = checkTokenAndGetIndex(this, token);
        }
      } while (++i < ii);

      if (updated) {
        this._updateClassName();
      }
    };

    classListProto.toggle = function (token, force) {
      token += '';

      var result = this.contains(token);
      var method = result ? force !== true && 'remove' : force !== false && 'add';

      if (method) {
        this[method](token);
      }

      if (force === true || force === false) {
        return force;
      }

      return !result;
    };

    classListProto.toString = function () {
      return this.join(' ');
    };

    Object.defineProperty(Element.prototype, 'classList', {
      get: function get() {
        return new ClassList(this);
      },
      enumerable: true,
      configurable: true
    });
  } else {
    var testElement = document.createElement('_');
    testElement.classList.add('c1', 'c2');

    if (!testElement.classList.contains('c2')) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          for (var i = 0, ii = arguments.length; i < ii; ++i) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle('c3', false);

    if (testElement.classList.contains('c3')) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        }

        return _toggle.call(this, token);
      };
    }

    testElement = null;
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  var _filterEntries = function _filterEntries(key, value) {
    var i = 0,
        n = _entries.length,
        result = [];
    for (; i < n; i++) {
      if (_entries[i][key] == value) {
        result.push(_entries[i]);
      }
    }
    return result;
  };

  var _clearEntries = function _clearEntries(type, name) {
    var i = _entries.length,
        entry;
    while (i--) {
      entry = _entries[i];
      if (entry.entryType == type && (name === void 0 || entry.name == name)) {
        _entries.splice(i, 1);
      }
    }
  };

  // @license http://opensource.org/licenses/MIT
  if ('performance' in window === false) {
    window.performance = {};
  }

  if ('now' in window.performance === false) {
    var nowOffset = Date.now();

    if (performance.timing && performance.timing.navigationStart) {
      nowOffset = performance.timing.navigationStart;
    }

    window.performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }

  var startOffset = Date.now ? Date.now() : +new Date();
  var _entries = [];
  var _marksIndex = {};

  ;

  if (!window.performance.mark) {
    window.performance.mark = window.performance.webkitMark || function (name) {
      var mark = {
        name: name,
        entryType: "mark",
        startTime: window.performance.now(),
        duration: 0
      };

      _entries.push(mark);
      _marksIndex[name] = mark;
    };
  }

  if (!window.performance.measure) {
    window.performance.measure = window.performance.webkitMeasure || function (name, startMark, endMark) {
      startMark = _marksIndex[startMark].startTime;
      endMark = _marksIndex[endMark].startTime;

      _entries.push({
        name: name,
        entryType: "measure",
        startTime: startMark,
        duration: endMark - startMark
      });
    };
  }

  if (!window.performance.getEntriesByType) {
    window.performance.getEntriesByType = window.performance.webkitGetEntriesByType || function (type) {
      return _filterEntries("entryType", type);
    };
  }

  if (!window.performance.getEntriesByName) {
    window.performance.getEntriesByName = window.performance.webkitGetEntriesByName || function (name) {
      return _filterEntries("name", name);
    };
  }

  if (!window.performance.clearMarks) {
    window.performance.clearMarks = window.performance.webkitClearMarks || function (name) {
      _clearEntries("mark", name);
    };
  }

  if (!window.performance.clearMeasures) {
    window.performance.clearMeasures = window.performance.webkitClearMeasures || function (name) {
      _clearEntries("measure", name);
    };
  }

  _PLATFORM.performance = window.performance;
}

if (typeof FEATURE_NO_IE === 'undefined') {
  var con = window.console = window.console || {};
  var nop = function nop() {};

  if (!con.memory) con.memory = {};
  ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',').forEach(function (m) {
    if (!con[m]) con[m] = nop;
  });

  if (_typeof(con.log) === 'object') {
    'log,info,warn,error,assert,dir,clear,profile,profileEnd'.split(',').forEach(function (method) {
      console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
    var _CustomEvent = function _CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    _CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = _CustomEvent;
  }
}

if (Element && !Element.prototype.matches) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}

var _FEATURE = {
  shadowDOM: !!HTMLElement.prototype.attachShadow,
  scopedCSS: 'scoped' in document.createElement('style'),
  htmlTemplateElement: function () {
    var d = document.createElement('div');
    d.innerHTML = '<template></template>';
    return 'content' in d.children[0];
  }(),
  mutationObserver: !!(window.MutationObserver || window.WebKitMutationObserver),
  ensureHTMLTemplateElement: function ensureHTMLTemplateElement(t) {
    return t;
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var isSVGTemplate = function isSVGTemplate(el) {
    return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
  };

  var fixSVGTemplateElement = function fixSVGTemplateElement(el) {
    var template = el.ownerDocument.createElement('template');
    var attrs = el.attributes;
    var length = attrs.length;
    var attr = void 0;

    el.parentNode.insertBefore(template, el);

    while (length-- > 0) {
      attr = attrs[length];
      template.setAttribute(attr.name, attr.value);
      el.removeAttribute(attr.name);
    }

    el.parentNode.removeChild(el);

    return fixHTMLTemplateElement(template);
  };

  var fixHTMLTemplateElement = function fixHTMLTemplateElement(template) {
    var content = template.content = document.createDocumentFragment();
    var child = void 0;

    while (child = template.firstChild) {
      content.appendChild(child);
    }

    return template;
  };

  var fixHTMLTemplateElementRoot = function fixHTMLTemplateElementRoot(template) {
    var content = fixHTMLTemplateElement(template).content;
    var childTemplates = content.querySelectorAll('template');

    for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
      var child = childTemplates[i];

      if (isSVGTemplate(child)) {
        fixSVGTemplateElement(child);
      } else {
        fixHTMLTemplateElement(child);
      }
    }

    return template;
  };

  if (!_FEATURE.htmlTemplateElement) {
    _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
  }
}

var shadowPoly = window.ShadowDOMPolyfill || null;

var _DOM = {
  Element: Element,
  NodeList: NodeList,
  SVGElement: SVGElement,
  boundary: 'aurelia-dom-boundary',
  addEventListener: function addEventListener(eventName, callback, capture) {
    document.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    document.removeEventListener(eventName, callback, capture);
  },
  adoptNode: function adoptNode(node) {
    return document.adoptNode(node);
  },
  createAttribute: function createAttribute(name) {
    return document.createAttribute(name);
  },
  createElement: function createElement(tagName) {
    return document.createElement(tagName);
  },
  createTextNode: function createTextNode(text) {
    return document.createTextNode(text);
  },
  createComment: function createComment(text) {
    return document.createComment(text);
  },
  createDocumentFragment: function createDocumentFragment() {
    return document.createDocumentFragment();
  },
  createTemplateElement: function createTemplateElement() {
    var template = document.createElement('template');
    return _FEATURE.ensureHTMLTemplateElement(template);
  },
  createMutationObserver: function createMutationObserver(callback) {
    return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
  },
  createCustomEvent: function createCustomEvent(eventType, options) {
    return new window.CustomEvent(eventType, options);
  },
  dispatchEvent: function dispatchEvent(evt) {
    document.dispatchEvent(evt);
  },
  getComputedStyle: function getComputedStyle(element) {
    return window.getComputedStyle(element);
  },
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },
  querySelector: function querySelector(query) {
    return document.querySelector(query);
  },
  querySelectorAll: function querySelectorAll(query) {
    return document.querySelectorAll(query);
  },
  nextElementSibling: function nextElementSibling(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }
    do {
      element = element.nextSibling;
    } while (element && element.nodeType !== 1);
    return element;
  },
  createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
    var parser = document.createElement('div');
    parser.innerHTML = markup;

    var temp = parser.firstElementChild;
    if (!temp || temp.nodeName !== 'TEMPLATE') {
      throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
    }

    return _FEATURE.ensureHTMLTemplateElement(temp);
  },
  appendNode: function appendNode(newNode, parentNode) {
    (parentNode || document.body).appendChild(newNode);
  },
  replaceNode: function replaceNode(newNode, node, parentNode) {
    if (node.parentNode) {
      node.parentNode.replaceChild(newNode, node);
    } else if (shadowPoly !== null) {
      shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
    } else {
      parentNode.replaceChild(newNode, node);
    }
  },
  removeNode: function removeNode(node, parentNode) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    } else if (parentNode) {
      if (shadowPoly !== null) {
        shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
      } else {
        parentNode.removeChild(node);
      }
    }
  },
  injectStyles: function injectStyles(styles, destination, prepend, id) {
    if (id) {
      var oldStyle = document.getElementById(id);
      if (oldStyle) {
        var isStyleTag = oldStyle.tagName.toLowerCase() === 'style';

        if (isStyleTag) {
          oldStyle.innerHTML = styles;
          return;
        }

        throw new Error('The provided id does not indicate a style tag.');
      }
    }

    var node = document.createElement('style');
    node.innerHTML = styles;
    node.type = 'text/css';

    if (id) {
      node.id = id;
    }

    destination = destination || document.head;

    if (prepend && destination.childNodes.length > 0) {
      destination.insertBefore(node, destination.childNodes[0]);
    } else {
      destination.appendChild(node);
    }

    return node;
  }
};

function initialize() {
  if (aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.isInitialized) {
    return;
  }

  (0,aurelia_pal__WEBPACK_IMPORTED_MODULE_0__.initializePAL)(function (platform, feature, dom) {
    Object.assign(platform, _PLATFORM);
    Object.assign(feature, _FEATURE);
    Object.assign(dom, _DOM);

    Object.defineProperty(dom, 'title', {
      get: function get() {
        return document.title;
      },
      set: function set(value) {
        document.title = value;
      }
    });

    Object.defineProperty(dom, 'activeElement', {
      get: function get() {
        return document.activeElement;
      }
    });

    Object.defineProperty(platform, 'XMLHttpRequest', {
      get: function get() {
        return platform.global.XMLHttpRequest;
      }
    });
  });
}

/***/ }),

/***/ 15:
/*!*********************************************************************!*\
  !*** ./node_modules/aurelia-pal/dist/native-modules/aurelia-pal.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AggregateError": function() { return /* binding */ AggregateError; },
/* harmony export */   "DOM": function() { return /* binding */ DOM; },
/* harmony export */   "FEATURE": function() { return /* binding */ FEATURE; },
/* harmony export */   "PLATFORM": function() { return /* binding */ PLATFORM; },
/* harmony export */   "initializePAL": function() { return /* binding */ initializePAL; },
/* harmony export */   "isInitialized": function() { return /* binding */ isInitialized; },
/* harmony export */   "reset": function() { return /* binding */ reset; }
/* harmony export */ });

function AggregateError(message, innerError, skipIfAlreadyAggregate) {
  if (innerError) {
    if (innerError.innerError && skipIfAlreadyAggregate) {
      return innerError;
    }

    var separator = '\n------------------------------------------------\n';

    message += separator + 'Inner Error:\n';

    if (typeof innerError === 'string') {
      message += 'Message: ' + innerError;
    } else {
      if (innerError.message) {
        message += 'Message: ' + innerError.message;
      } else {
        message += 'Unknown Inner Error Type. Displaying Inner Error as JSON:\n ' + JSON.stringify(innerError, null, '  ');
      }

      if (innerError.stack) {
        message += '\nInner Error Stack:\n' + innerError.stack;
        message += '\nEnd Inner Error Stack';
      }
    }

    message += separator;
  }

  var e = new Error(message);
  if (innerError) {
    e.innerError = innerError;
  }

  return e;
}

var FEATURE = {};

var PLATFORM = {
  noop: function noop() {},
  eachModule: function eachModule() {},
  moduleName: function (_moduleName) {
    function moduleName(_x) {
      return _moduleName.apply(this, arguments);
    }

    moduleName.toString = function () {
      return _moduleName.toString();
    };

    return moduleName;
  }(function (moduleName) {
    return moduleName;
  })
};

PLATFORM.global = function () {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof __webpack_require__.g !== 'undefined') {
    return __webpack_require__.g;
  }

  return new Function('return this')();
}();

var DOM = {};
var isInitialized = false;

function initializePAL(callback) {
  if (isInitialized) {
    return;
  }
  isInitialized = true;
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(PLATFORM, FEATURE, DOM);
}
function reset() {
  isInitialized = false;
}

/***/ }),

/***/ 627:
/*!***********************************************************************!*\
  !*** ./node_modules/aurelia-path/dist/native-modules/aurelia-path.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQueryString": function() { return /* binding */ buildQueryString; },
/* harmony export */   "join": function() { return /* binding */ join; },
/* harmony export */   "parseQueryString": function() { return /* binding */ parseQueryString; },
/* harmony export */   "relativeToFile": function() { return /* binding */ relativeToFile; }
/* harmony export */ });
function trimDots(ary) {
    for (var i = 0; i < ary.length; ++i) {
        var part = ary[i];
        if (part === '.') {
            ary.splice(i, 1);
            i -= 1;
        }
        else if (part === '..') {
            if (i === 0 || (i === 1 && ary[2] === '..') || ary[i - 1] === '..') {
                continue;
            }
            else if (i > 0) {
                ary.splice(i - 1, 2);
                i -= 2;
            }
        }
    }
}
function relativeToFile(name, file) {
    var fileParts = file && file.split('/');
    var nameParts = name.trim().split('/');
    if (nameParts[0].charAt(0) === '.' && fileParts) {
        var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
        nameParts.unshift.apply(nameParts, normalizedBaseParts);
    }
    trimDots(nameParts);
    return nameParts.join('/');
}
function join(path1, path2) {
    if (!path1) {
        return path2;
    }
    if (!path2) {
        return path1;
    }
    var schemeMatch = path1.match(/^([^/]*?:)\//);
    var scheme = (schemeMatch && schemeMatch.length > 0) ? schemeMatch[1] : '';
    path1 = path1.substr(scheme.length);
    var urlPrefix;
    if (path1.indexOf('///') === 0 && scheme === 'file:') {
        urlPrefix = '///';
    }
    else if (path1.indexOf('//') === 0) {
        urlPrefix = '//';
    }
    else if (path1.indexOf('/') === 0) {
        urlPrefix = '/';
    }
    else {
        urlPrefix = '';
    }
    var trailingSlash = path2.slice(-1) === '/' ? '/' : '';
    var url1 = path1.split('/');
    var url2 = path2.split('/');
    var url3 = [];
    for (var i = 0, ii = url1.length; i < ii; ++i) {
        if (url1[i] === '..') {
            if (url3.length && url3[url3.length - 1] !== '..') {
                url3.pop();
            }
            else {
                url3.push(url1[i]);
            }
        }
        else if (url1[i] === '.' || url1[i] === '') {
            continue;
        }
        else {
            url3.push(url1[i]);
        }
    }
    for (var i = 0, ii = url2.length; i < ii; ++i) {
        if (url2[i] === '..') {
            if (url3.length && url3[url3.length - 1] !== '..') {
                url3.pop();
            }
            else {
                url3.push(url2[i]);
            }
        }
        else if (url2[i] === '.' || url2[i] === '') {
            continue;
        }
        else {
            url3.push(url2[i]);
        }
    }
    return scheme + urlPrefix + url3.join('/') + trailingSlash;
}
var encode = encodeURIComponent;
var encodeKey = function (k) { return encode(k).replace('%24', '$'); };
function buildParam(key, value, traditional) {
    var result = [];
    if (value === null || value === undefined) {
        return result;
    }
    if (Array.isArray(value)) {
        for (var i = 0, l = value.length; i < l; i++) {
            if (traditional) {
                result.push(encodeKey(key) + "=" + encode(value[i]));
            }
            else {
                var arrayKey = key + '[' + (typeof value[i] === 'object' && value[i] !== null ? i : '') + ']';
                result = result.concat(buildParam(arrayKey, value[i]));
            }
        }
    }
    else if (typeof (value) === 'object' && !traditional) {
        for (var propertyName in value) {
            result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
        }
    }
    else {
        result.push(encodeKey(key) + "=" + encode(value));
    }
    return result;
}
function buildQueryString(params, traditional) {
    var pairs = [];
    var keys = Object.keys(params || {}).sort();
    for (var i = 0, len = keys.length; i < len; i++) {
        var key = keys[i];
        pairs = pairs.concat(buildParam(key, params[key], traditional));
    }
    if (pairs.length === 0) {
        return '';
    }
    return pairs.join('&');
}
function processScalarParam(existedParam, value) {
    if (Array.isArray(existedParam)) {
        existedParam.push(value);
        return existedParam;
    }
    if (existedParam !== undefined) {
        return [existedParam, value];
    }
    return value;
}
function parseComplexParam(queryParams, keys, value) {
    var currentParams = queryParams;
    var keysLastIndex = keys.length - 1;
    for (var j = 0; j <= keysLastIndex; j++) {
        var key = keys[j] === '' ? currentParams.length : keys[j];
        preventPollution(key);
        if (j < keysLastIndex) {
            var prevValue = !currentParams[key] || typeof currentParams[key] === 'object' ? currentParams[key] : [currentParams[key]];
            currentParams = currentParams[key] = prevValue || (isNaN(keys[j + 1]) ? {} : []);
        }
        else {
            currentParams = currentParams[key] = value;
        }
    }
}
function parseQueryString(queryString) {
    var queryParams = {};
    if (!queryString || typeof queryString !== 'string') {
        return queryParams;
    }
    var query = queryString;
    if (query.charAt(0) === '?') {
        query = query.substr(1);
    }
    var pairs = query.replace(/\+/g, ' ').split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        var key = decodeURIComponent(pair[0]);
        if (!key) {
            continue;
        }
        var keys = key.split('][');
        var keysLastIndex = keys.length - 1;
        if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
            keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
            keys = keys.shift().split('[').concat(keys);
            keysLastIndex = keys.length - 1;
        }
        else {
            keysLastIndex = 0;
        }
        if (pair.length >= 2) {
            var value = pair[1] ? decodeURIComponent(pair[1]) : '';
            if (keysLastIndex) {
                parseComplexParam(queryParams, keys, value);
            }
            else {
                preventPollution(key);
                queryParams[key] = processScalarParam(queryParams[key], value);
            }
        }
        else {
            queryParams[key] = true;
        }
    }
    return queryParams;
}
function preventPollution(key) {
    if (key === '__proto__') {
        throw new Error('Prototype pollution detected.');
    }
}


//# sourceMappingURL=aurelia-path.js.map


/***/ })

}]);
//# sourceMappingURL=vendors-319a6989.d51903a4bea86fe35daf.bundle.js.map