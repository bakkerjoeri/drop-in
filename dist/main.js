/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@bakkerjoeri/array-without/dist/arrayWithout.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@bakkerjoeri/array-without/dist/arrayWithout.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrayWithout; });
function arrayWithout(array, ...valuesToExclude) {
    return array.filter((value) => {
        return !valuesToExclude.includes(value);
    });
}


/***/ }),

/***/ "./node_modules/@bakkerjoeri/fp/dist/compose.js":
/*!******************************************************!*\
  !*** ./node_modules/@bakkerjoeri/fp/dist/compose.js ***!
  \******************************************************/
/*! exports provided: compose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
function compose(...functions) {
    return functions.reduce((composedFunction, currentFunction) => {
        return (value) => {
            return composedFunction(currentFunction(value));
        };
    }, (value) => value);
}


/***/ }),

/***/ "./node_modules/@bakkerjoeri/fp/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@bakkerjoeri/fp/dist/index.js ***!
  \****************************************************/
/*! exports provided: compose, pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose.js */ "./node_modules/@bakkerjoeri/fp/dist/compose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose_js__WEBPACK_IMPORTED_MODULE_0__["compose"]; });

/* harmony import */ var _pipe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe.js */ "./node_modules/@bakkerjoeri/fp/dist/pipe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _pipe_js__WEBPACK_IMPORTED_MODULE_1__["pipe"]; });





/***/ }),

/***/ "./node_modules/@bakkerjoeri/fp/dist/pipe.js":
/*!***************************************************!*\
  !*** ./node_modules/@bakkerjoeri/fp/dist/pipe.js ***!
  \***************************************************/
/*! exports provided: pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
function pipe(...functions) {
    return functions.reduce((pipedFunction, currentFunction) => {
        return (value) => {
            return currentFunction(pipedFunction(value));
        };
    }, (value) => value);
}


/***/ }),

/***/ "./node_modules/@bakkerjoeri/object-without/dist/objectWithout.js":
/*!************************************************************************!*\
  !*** ./node_modules/@bakkerjoeri/object-without/dist/objectWithout.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectWithout; });
function objectWithout(object, ...keysToRemove) {
    const entries = Object.entries(object);
    return entries.reduce((newObject, [currentKey, currentValue]) => {
        if (keysToRemove.includes(currentKey)) {
            return newObject;
        }
        return Object.assign(Object.assign({}, newObject), { [currentKey]: currentValue });
    }, {});
}


/***/ }),

/***/ "./node_modules/@bakkerjoeri/repeat/dist/repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/@bakkerjoeri/repeat/dist/repeat.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return repeat; });
function repeat(iterations, callback) {
    for (let i = 0; i < iterations; i += 1) {
        callback(i);
    }
}


/***/ }),

/***/ "./node_modules/@bakkerjoeri/uuid/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@bakkerjoeri/uuid/dist/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return uuid; });
function uuid() {
    let seed = Date.now();
    if (window.performance && typeof window.performance.now === 'function') {
        seed += performance.now();
    }
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (seed + Math.random() * 16) % 16 | 0;
        seed = Math.floor(seed / 16);
        return (c === 'x' ? r : r & (0x3 | 0x8)).toString(16);
    });
    return uuid;
}


/***/ }),

/***/ "./node_modules/heks/dist/EventEmitter.js":
/*!************************************************!*\
  !*** ./node_modules/heks/dist/EventEmitter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventEmitter; });
/* harmony import */ var _bakkerjoeri_array_without__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bakkerjoeri/array-without */ "./node_modules/@bakkerjoeri/array-without/dist/arrayWithout.js");
/* harmony import */ var _bakkerjoeri_object_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bakkerjoeri/object-without */ "./node_modules/@bakkerjoeri/object-without/dist/objectWithout.js");


class EventEmitter {
    constructor() {
        this.eventHandlers = {};
        this.on = this.on.bind(this);
        this.emit = this.emit.bind(this);
        this.remove = this.remove.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }
    on(eventType, handler) {
        this.eventHandlers = Object.assign(Object.assign({}, this.eventHandlers), { [eventType]: [
                ...this.eventHandlers[eventType] || [],
                handler,
            ] });
    }
    remove(eventType, handler) {
        this.eventHandlers = Object.assign(Object.assign({}, this.eventHandlers), { [eventType]: Object(_bakkerjoeri_array_without__WEBPACK_IMPORTED_MODULE_0__["default"])(this.eventHandlers[eventType], handler) });
    }
    removeAll(eventType) {
        this.eventHandlers = Object(_bakkerjoeri_object_without__WEBPACK_IMPORTED_MODULE_1__["default"])(this.eventHandlers, eventType);
    }
    emit(eventType, initialState, event) {
        if (!this.eventHandlers.hasOwnProperty(eventType)) {
            return initialState;
        }
        const handlers = this.eventHandlers[eventType];
        return handlers.reduce((newState, currentHandler) => {
            return currentHandler(newState, event, {
                on: this.on,
                emit: this.emit,
                remove: this.remove,
                removeAll: this.removeAll,
            });
        }, initialState);
    }
}


/***/ }),

/***/ "./node_modules/heks/dist/Game.js":
/*!****************************************!*\
  !*** ./node_modules/heks/dist/Game.js ***!
  \****************************************/
/*! exports provided: defaultState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _tick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tick.js */ "./node_modules/heks/dist/tick.js");
/* harmony import */ var _setupGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setupGame.js */ "./node_modules/heks/dist/setupGame.js");


const defaultState = {
    entities: {},
    sprites: {},
};
class Game {
    constructor(size, eventEmitter, { initialState = defaultState, scale = 1, containerSelector = 'body' } = {}) {
        this.eventEmitter = eventEmitter;
        const { canvas, context } = Object(_setupGame_js__WEBPACK_IMPORTED_MODULE_1__["setupGame"])(containerSelector, size, scale);
        this.canvas = canvas;
        this.context = context;
        this.scale = scale;
        this.state = Object.assign({}, initialState);
    }
    start() {
        this.state = this.eventEmitter.emit('start', this.state, {});
        Object(_tick_js__WEBPACK_IMPORTED_MODULE_0__["start"])((time) => {
            this.state = this.eventEmitter.emit('beforeUpdate', this.state, { time });
            this.state = this.eventEmitter.emit('update', this.state, { time });
            this.state = this.eventEmitter.emit('afterUpdate', this.state, { time });
            this.state = this.eventEmitter.emit('beforeDraw', this.state, { time, context: this.context, scale: this.scale });
            this.state = this.eventEmitter.emit('draw', this.state, { time, context: this.context, scale: this.scale });
            this.state = this.eventEmitter.emit('afterDraw', this.state, { time, context: this.context, scale: this.scale });
        });
    }
}


/***/ }),

/***/ "./node_modules/heks/dist/entities.js":
/*!********************************************!*\
  !*** ./node_modules/heks/dist/entities.js ***!
  \********************************************/
/*! exports provided: addEntity, createEntityIndex, setEntities, setComponent, getEntity, getEntities, findEntities, findEntity, doesEntityValueMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEntity", function() { return addEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityIndex", function() { return createEntityIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEntities", function() { return setEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setComponent", function() { return setComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return getEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEntities", function() { return findEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findEntity", function() { return findEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesEntityValueMatch", function() { return doesEntityValueMatch; });
/* harmony import */ var _bakkerjoeri_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bakkerjoeri/uuid */ "./node_modules/@bakkerjoeri/uuid/dist/index.js");

const addEntity = (components) => (state) => {
    const entity = Object.assign({ id: components.id || Object(_bakkerjoeri_uuid__WEBPACK_IMPORTED_MODULE_0__["default"])() }, components);
    return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { [entity.id]: entity }) });
};
const createEntityIndex = (...entities) => {
    return entities.reduce((entityIndex, entity) => {
        return Object.assign(Object.assign({}, entityIndex), { [entity.id]: entity });
    }, {});
};
const setEntities = (...entities) => (state) => {
    return Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), createEntityIndex(...entities)) });
};
const setComponent = (componentName) => (value) => (entity) => {
    return Object.assign(Object.assign({}, entity), { [componentName]: value });
};
function getEntity(state, entityId) {
    if (!state.entities.hasOwnProperty(entityId)) {
        throw new Error(`Entity with id ${entityId} doesn't exist.`);
    }
    return state.entities[entityId];
}
function getEntities(state) {
    return Object.values(state.entities).reduce((entities, entity) => {
        return [
            ...entities,
            entity,
        ];
    }, []);
}
function findEntities(entities, filters) {
    return entities.filter(entity => {
        return doesEntityValueMatch(entity, filters);
    });
}
function findEntity(entities, filters) {
    return entities.find(entity => {
        return doesEntityValueMatch(entity, filters);
    });
}
function doesEntityValueMatch(entity, filters) {
    return Object.entries(filters).every(([componentName, filterValue]) => {
        if (typeof filterValue === 'function' && entity.hasOwnProperty(componentName)) {
            return filterValue(entity[componentName]);
        }
        if (typeof filterValue === 'boolean' && !filterValue) {
            return !entity.hasOwnProperty(componentName) || !entity[componentName];
        }
        if (typeof filterValue === 'boolean' && filterValue) {
            return entity.hasOwnProperty(componentName) && !!entity[componentName];
        }
        return entity.hasOwnProperty(componentName) && filterValue === entity[componentName];
    });
}


/***/ }),

/***/ "./node_modules/heks/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/heks/dist/index.js ***!
  \*****************************************/
/*! exports provided: Game, defaultState, EventEmitter, addSprite, importSpriteSheet, getSprite, drawSprite, getImageForFilePath, updateAnimatedSprites, calculateNewFrameIndex, createSpriteComponent, addEntity, createEntityIndex, setEntities, setComponent, getEntity, getEntities, findEntities, findEntity, doesEntityValueMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game.js */ "./node_modules/heks/dist/Game.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return _Game_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return _Game_js__WEBPACK_IMPORTED_MODULE_0__["defaultState"]; });

/* harmony import */ var _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventEmitter.js */ "./node_modules/heks/dist/EventEmitter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventEmitter", function() { return _EventEmitter_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sprites_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sprites.js */ "./node_modules/heks/dist/sprites.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSprite", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["addSprite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "importSpriteSheet", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["importSpriteSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSprite", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["getSprite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawSprite", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["drawSprite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImageForFilePath", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["getImageForFilePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateAnimatedSprites", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["updateAnimatedSprites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calculateNewFrameIndex", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["calculateNewFrameIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSpriteComponent", function() { return _sprites_js__WEBPACK_IMPORTED_MODULE_2__["createSpriteComponent"]; });

/* harmony import */ var _entities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entities.js */ "./node_modules/heks/dist/entities.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addEntity", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["addEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createEntityIndex", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["createEntityIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setEntities", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["setEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setComponent", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["setComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntity", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["getEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["getEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findEntities", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["findEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findEntity", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["findEntity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doesEntityValueMatch", function() { return _entities_js__WEBPACK_IMPORTED_MODULE_3__["doesEntityValueMatch"]; });








/***/ }),

/***/ "./node_modules/heks/dist/setupGame.js":
/*!*********************************************!*\
  !*** ./node_modules/heks/dist/setupGame.js ***!
  \*********************************************/
/*! exports provided: setupGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupGame", function() { return setupGame; });
function setupGame(containerSelector, size, scale = 1) {
    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', (size.width * scale * window.devicePixelRatio).toString());
    canvas.setAttribute('height', (size.height * scale * window.devicePixelRatio).toString());
    canvas.style.width = `${size.width * scale}px`;
    canvas.style.height = `${size.height * scale}px`;
    const context = canvas.getContext('2d');
    if (!context) {
        throw new Error('Couldn\'t create context from canvas');
    }
    context.imageSmoothingEnabled = false;
    context.scale(window.devicePixelRatio, window.devicePixelRatio);
    const gameElement = document.documentElement.querySelector(containerSelector);
    if (!gameElement) {
        throw new Error(`Couldn't find element with selector ${containerSelector} to mount canvas on.`);
    }
    gameElement.appendChild(canvas);
    return {
        context,
        canvas,
    };
}


/***/ }),

/***/ "./node_modules/heks/dist/sprites.js":
/*!*******************************************!*\
  !*** ./node_modules/heks/dist/sprites.js ***!
  \*******************************************/
/*! exports provided: addSprite, importSpriteSheet, getSprite, drawSprite, getImageForFilePath, updateAnimatedSprites, calculateNewFrameIndex, createSpriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSprite", function() { return addSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importSpriteSheet", function() { return importSpriteSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSprite", function() { return getSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSprite", function() { return drawSprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageForFilePath", function() { return getImageForFilePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAnimatedSprites", function() { return updateAnimatedSprites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateNewFrameIndex", function() { return calculateNewFrameIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSpriteComponent", function() { return createSpriteComponent; });
/* harmony import */ var _bakkerjoeri_fp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bakkerjoeri/fp */ "./node_modules/@bakkerjoeri/fp/dist/index.js");
/* harmony import */ var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities */ "./node_modules/heks/dist/entities.js");


const addSprite = (sprite) => (state) => {
    return Object.assign(Object.assign({}, state), { sprites: Object.assign(Object.assign({}, state.sprites), { [sprite.name]: sprite }) });
};
const importSpriteSheet = (spriteSheet) => (state) => {
    return Object(_bakkerjoeri_fp__WEBPACK_IMPORTED_MODULE_0__["pipe"])(...spriteSheet.map(addSprite))(state);
};
function getSprite(state, name) {
    if (!state.sprites.hasOwnProperty(name)) {
        throw new Error(`No sprite with name ${name} found.`);
    }
    return state.sprites[name];
}
function drawSprite(sprite, context, position, frameIndex = 0, { scale = 1 } = {}) {
    if (!sprite.frames[frameIndex]) {
        throw new Error(`Sprite ${sprite.name} does not have frame with index ${frameIndex}`);
    }
    const frame = sprite.frames[frameIndex];
    const image = getImageForFilePath(frame.file);
    context.drawImage(image, frame.origin.x, frame.origin.y, frame.size.width, frame.size.height, (position.x + sprite.offset.x) * scale, (position.y + sprite.offset.y) * scale, frame.size.width * scale, frame.size.height * scale);
}
const imageCache = {};
function getImageForFilePath(filePath, cached = true) {
    if (cached && imageCache[filePath]) {
        return imageCache[filePath];
    }
    const image = new Image();
    image.src = filePath;
    imageCache[filePath] = image;
    image.onerror = () => {
        delete imageCache[filePath];
        throw new Error(`No image found at ${filePath}.`);
    };
    return image;
}
function updateAnimatedSprites(state, { time }) {
    const entitiesWithSprites = Object(_entities__WEBPACK_IMPORTED_MODULE_1__["findEntities"])(Object(_entities__WEBPACK_IMPORTED_MODULE_1__["getEntities"])(state), {
        sprite: true,
    });
    const updatedEntities = entitiesWithSprites.map(entity => {
        const spriteComponent = entity.sprite;
        const spriteOfEntity = getSprite(state, entity.sprite.name);
        if (spriteComponent.framesPerSecond === 0
            || spriteOfEntity.frames.length <= 1
            || !spriteComponent.isAnimating) {
            return entity;
        }
        if (!entity.sprite.animationStartTime) {
            entity.sprite.animationStartTime = time;
        }
        const newFrameIndex = calculateNewFrameIndex(spriteOfEntity.frames.length, spriteComponent.framesPerSecond, time - entity.sprite.animationStartTime, spriteComponent.isLooping);
        return Object(_entities__WEBPACK_IMPORTED_MODULE_1__["setComponent"])('sprite')(Object.assign(Object.assign({}, spriteComponent), { currentFrameIndex: newFrameIndex }))(entity);
    });
    return Object(_entities__WEBPACK_IMPORTED_MODULE_1__["setEntities"])(...updatedEntities)(state);
}
function calculateNewFrameIndex(amountOfFrames, framesPerSecond, elapsedTime, isLooping) {
    if (isLooping) {
        return Math.round(elapsedTime / (1000 / framesPerSecond)) % amountOfFrames;
    }
    return Math.min((Math.round(elapsedTime / 1000) / framesPerSecond), amountOfFrames - 1);
}
function createSpriteComponent(name, { startingFrame = 0, framesPerSecond = 1, isLooping = true, isAnimating = true } = {}) {
    return {
        name,
        animationStartTime: null,
        currentFrameIndex: startingFrame,
        framesPerSecond,
        isLooping,
        isAnimating,
    };
}


/***/ }),

/***/ "./node_modules/heks/dist/tick.js":
/*!****************************************!*\
  !*** ./node_modules/heks/dist/tick.js ***!
  \****************************************/
/*! exports provided: start, scheduleNextTick, tick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleNextTick", function() { return scheduleNextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tick", function() { return tick; });
function start(callback) {
    scheduleNextTick(callback);
}
function scheduleNextTick(callback) {
    window.requestAnimationFrame((time) => {
        tick(callback, time);
    });
}
function tick(callback, time) {
    callback(time);
    scheduleNextTick(callback);
}


/***/ }),

/***/ "./node_modules/roll-the-bones/dist/choose.js":
/*!****************************************************!*\
  !*** ./node_modules/roll-the-bones/dist/choose.js ***!
  \****************************************************/
/*! exports provided: choose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return choose; });
/* harmony import */ var _getRandomNumberInRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomNumberInRange */ "./node_modules/roll-the-bones/dist/getRandomNumberInRange.js");

function choose(choices) {
    if (choices.length === 0) {
        throw new Error('Cannot choose from 0 choices.');
    }
    return choices[Object(_getRandomNumberInRange__WEBPACK_IMPORTED_MODULE_0__["getRandomNumberInRange"])(0, choices.length - 1)];
}


/***/ }),

/***/ "./node_modules/roll-the-bones/dist/getRandomNumberInRange.js":
/*!********************************************************************!*\
  !*** ./node_modules/roll-the-bones/dist/getRandomNumberInRange.js ***!
  \********************************************************************/
/*! exports provided: getRandomNumberInRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNumberInRange", function() { return getRandomNumberInRange; });
function getRandomNumberInRange(lowerBound, upperBound) {
    return Math.floor(Math.random() * (upperBound + 1 + lowerBound));
}


/***/ }),

/***/ "./node_modules/roll-the-bones/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/roll-the-bones/dist/index.js ***!
  \***************************************************/
/*! exports provided: getRandomNumberInRange, choose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getRandomNumberInRange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomNumberInRange.js */ "./node_modules/roll-the-bones/dist/getRandomNumberInRange.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRandomNumberInRange", function() { return _getRandomNumberInRange_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNumberInRange"]; });

/* harmony import */ var _choose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./choose.js */ "./node_modules/roll-the-bones/dist/choose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choose", function() { return _choose_js__WEBPACK_IMPORTED_MODULE_1__["choose"]; });





/***/ }),

/***/ "./src/assets/sprites/sprites.ts":
/*!***************************************!*\
  !*** ./src/assets/sprites/sprites.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const spriteSheet = [
    {
        name: 'coin-red',
        frames: [
            {
                file: 'src/assets/sprites/coins.png',
                origin: { x: 0, y: 0 },
                size: { width: 16, height: 16 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'coin-blue',
        frames: [
            {
                file: 'src/assets/sprites/coins.png',
                origin: { x: 0, y: 16 },
                size: { width: 16, height: 16 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-position-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 40 },
                size: { width: 16, height: 16 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-column-top-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 32 },
                size: { width: 16, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-column-bottom-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 56 },
                size: { width: 16, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-row-left-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 0, y: 40 },
                size: { width: 8, height: 16 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-row-right-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 24, y: 40 },
                size: { width: 8, height: 16 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-corner-top-left-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 0, y: 32 },
                size: { width: 8, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-corner-top-right-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 24, y: 32 },
                size: { width: 8, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-corner-bottom-right-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 24, y: 56 },
                size: { width: 8, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-corner-bottom-left-front',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 0, y: 56 },
                size: { width: 8, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-position-back',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 8 },
                size: { width: 16, height: 16 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-column-top-back',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 8, y: 0 },
                size: { width: 16, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-corner-top-left-back',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 0, y: 0 },
                size: { width: 8, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
    {
        name: 'board-corner-top-right-back',
        frames: [
            {
                file: 'src/assets/sprites/board.png',
                origin: { x: 24, y: 0 },
                size: { width: 8, height: 8 },
            }
        ],
        offset: { x: 0, y: 0 },
    },
];
/* harmony default export */ __webpack_exports__["default"] = (spriteSheet);


/***/ }),

/***/ "./src/scripts/gameboard.ts":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.ts ***!
  \**********************************/
/*! exports provided: createGameBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGameBoard", function() { return createGameBoard; });
/* harmony import */ var _bakkerjoeri_repeat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bakkerjoeri/repeat */ "./node_modules/@bakkerjoeri/repeat/dist/repeat.js");
/* harmony import */ var roll_the_bones__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! roll-the-bones */ "./node_modules/roll-the-bones/dist/index.js");


function createGameBoard(width, height) {
    return {
        currentPlayer: Object(roll_the_bones__WEBPACK_IMPORTED_MODULE_1__["choose"])(['red', 'yellow']),
        isGameBoard: true,
        tiles: createTileMap(width, height),
    };
}
function createTileMap(width, height) {
    const tileMap = [];
    Object(_bakkerjoeri_repeat__WEBPACK_IMPORTED_MODULE_0__["default"])(width, (x) => {
        tileMap[x] = [];
        Object(_bakkerjoeri_repeat__WEBPACK_IMPORTED_MODULE_0__["default"])(height, (y) => {
            tileMap[x][y] = null;
        });
    });
    return tileMap;
}


/***/ }),

/***/ "./src/scripts/keyboard.ts":
/*!*********************************!*\
  !*** ./src/scripts/keyboard.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Keyboard; });
/* harmony import */ var _bakkerjoeri_array_without__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bakkerjoeri/array-without */ "./node_modules/@bakkerjoeri/array-without/dist/arrayWithout.js");

class Keyboard {
    constructor(eventEmitter) {
        this.pressedKeys = [];
        this.activeKeys = [];
        this.releasedKeys = [];
        this.eventEmitter = eventEmitter;
        window.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();
            if (!this.isKeyPressed(key) && !this.isKeyDown(key)) {
                this.pressedKeys = [...this.pressedKeys, key];
            }
            if (!this.isKeyDown(key)) {
                this.activeKeys = [...this.activeKeys, key];
            }
        });
        window.addEventListener('keyup', (event) => {
            const key = event.key.toLowerCase();
            if (this.isKeyDown(key)) {
                this.activeKeys = Object(_bakkerjoeri_array_without__WEBPACK_IMPORTED_MODULE_0__["default"])(this.activeKeys, key);
            }
            if (!this.isKeyReleased(key)) {
                this.releasedKeys = [...this.releasedKeys, key];
            }
        });
        window.addEventListener('blur', this.resetAllKeys.bind(this));
        this.eventEmitter.on('update', (state, {}) => {
            this.pressedKeys.forEach((activeKey) => {
                state = this.eventEmitter.emit('keyPressed', state, { key: activeKey });
            });
            this.activeKeys.forEach((activeKey) => {
                state = this.eventEmitter.emit('keyDown', state, { key: activeKey });
            });
            this.releasedKeys.forEach((activeKey) => {
                state = this.eventEmitter.emit('keyUp', state, { key: activeKey });
            });
            return state;
        });
        this.eventEmitter.on('afterUpdate', (state) => {
            this.resetPressedKeys();
            this.resetReleasedKeys();
            return state;
        });
    }
    isKeyPressed(key) {
        return this.pressedKeys.includes(key);
    }
    isKeyDown(key) {
        return this.activeKeys.includes(key);
    }
    isKeyReleased(key) {
        return this.releasedKeys.includes(key);
    }
    resetPressedKeys() {
        this.pressedKeys = [];
    }
    resetActiveKeys() {
        this.activeKeys = [];
    }
    resetReleasedKeys() {
        this.releasedKeys = [];
    }
    resetAllKeys() {
        this.resetPressedKeys();
        this.resetActiveKeys();
        this.resetReleasedKeys();
    }
}


/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var heks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! heks */ "./node_modules/heks/dist/index.js");
/* harmony import */ var _bakkerjoeri_fp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bakkerjoeri/fp */ "./node_modules/@bakkerjoeri/fp/dist/index.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.ts");
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard */ "./src/scripts/keyboard.ts");
/* harmony import */ var _assets_sprites_sprites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sprites/sprites */ "./src/assets/sprites/sprites.ts");





const scale = 4;
const gameSize = {
    width: 320,
    height: 180,
};
const boardOrigin = {
    x: 40,
    y: 40,
};
const tileSize = {
    width: 16,
    height: 16,
};
/**
 * Game parameters
 */
const boardSize = {
    width: 8,
    height: 6,
};
const connectHowMany = 4;
const eventEmitter = new heks__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
const game = new heks__WEBPACK_IMPORTED_MODULE_0__["Game"](gameSize, eventEmitter, { scale, containerSelector: '.game' });
new _keyboard__WEBPACK_IMPORTED_MODULE_3__["default"](eventEmitter);
eventEmitter.on('start', (state) => {
    return Object(_bakkerjoeri_fp__WEBPACK_IMPORTED_MODULE_1__["pipe"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["importSpriteSheet"])(_assets_sprites_sprites__WEBPACK_IMPORTED_MODULE_4__["default"]), Object(heks__WEBPACK_IMPORTED_MODULE_0__["addEntity"])(Object(_gameboard__WEBPACK_IMPORTED_MODULE_2__["createGameBoard"])(boardSize.width, boardSize.height)))(state);
});
eventEmitter.on('keyUp', (state, { key }, { emit }) => {
    const keyAsInteger = parseInt(key);
    const isNumericKey = typeof keyAsInteger === 'number' && !isNaN(keyAsInteger);
    if (!isNumericKey || !(keyAsInteger >= 1 && keyAsInteger <= boardSize.width)) {
        return state;
    }
    const gameBoard = Object(heks__WEBPACK_IMPORTED_MODULE_0__["findEntity"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getEntities"])(state), { isGameBoard: true });
    if (!gameBoard) {
        return state;
    }
    const columnIndex = keyAsInteger - 1;
    const column = gameBoard.tiles[columnIndex];
    // The cell that will receive the tile is the one before the first filled cell
    let indexOfFirstFullCell = 0;
    let cellToInspect = column[indexOfFirstFullCell];
    while (cellToInspect === null && indexOfFirstFullCell <= column.length - 1) {
        indexOfFirstFullCell += 1;
        cellToInspect = column[indexOfFirstFullCell];
    }
    if (indexOfFirstFullCell === 0) {
        return state;
    }
    gameBoard.tiles[columnIndex][indexOfFirstFullCell - 1] = gameBoard.currentPlayer;
    state = Object(heks__WEBPACK_IMPORTED_MODULE_0__["setEntities"])(gameBoard)(state);
    return emit('endTurn', state, {});
});
eventEmitter.on('endTurn', (state) => {
    const gameBoard = Object(heks__WEBPACK_IMPORTED_MODULE_0__["findEntity"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getEntities"])(state), { isGameBoard: true });
    if (!gameBoard) {
        return state;
    }
    const winner = findWinner(gameBoard.tiles, connectHowMany);
    if (winner) {
        alert(`The winner is... ${winner}`);
    }
    gameBoard.currentPlayer = gameBoard.currentPlayer === 'red' ? 'yellow' : 'red';
    return Object(heks__WEBPACK_IMPORTED_MODULE_0__["setEntities"])(gameBoard)(state);
});
function findWinner(tiles, chainLength = 4) {
    for (let columnIndex = 0; columnIndex < tiles.length; columnIndex += 1) { // iterate columns, left to right
        for (let rowIndex = 0; rowIndex < tiles[columnIndex].length; rowIndex += 1) { // iterate rows, top to bottom
            const playerOccupyingCell = tiles[columnIndex][rowIndex];
            if (playerOccupyingCell === null) {
                continue; // don't check empty slots
            }
            const chain = [...new Array(chainLength).keys()];
            // Look east
            if (chain.every(chainIndex => {
                return tiles[columnIndex]
                    && tiles[columnIndex][rowIndex + chainIndex] === playerOccupyingCell;
            })) {
                return playerOccupyingCell;
            }
            // Look north
            if (chain.every(chainIndex => {
                return tiles[columnIndex + chainIndex]
                    && tiles[columnIndex + chainIndex][rowIndex] === playerOccupyingCell;
            })) {
                return playerOccupyingCell;
            }
            // Look northeast
            if (chain.every(chainIndex => {
                return tiles[columnIndex + chainIndex]
                    && tiles[columnIndex + chainIndex][rowIndex + chainIndex] === playerOccupyingCell;
            })) {
                return playerOccupyingCell;
            }
            // Look southeast
            if (chain.every(chainIndex => {
                return tiles[columnIndex + chainIndex]
                    && tiles[columnIndex + chainIndex][rowIndex - chainIndex] === playerOccupyingCell;
            })) {
                return playerOccupyingCell;
            }
        }
    }
    return null;
}
eventEmitter.on('draw', (state, { context }) => {
    const gameBoard = Object(heks__WEBPACK_IMPORTED_MODULE_0__["findEntity"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getEntities"])(state), { isGameBoard: true });
    if (!gameBoard) {
        return state;
    }
    context.clearRect(0, 0, gameSize.width * scale, gameSize.height * scale);
    context.fillStyle = '#D7D0FF';
    context.fillRect(0, 0, gameSize.width * scale, gameSize.height * scale);
    drawBoardBack(gameBoard, context, state);
    drawCoinsInBoard(gameBoard, context, state);
    drawBoardFront(gameBoard, context, state);
    return state;
});
function drawCoinsInBoard(gameBoard, context, state) {
    gameBoard.tiles.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            const coinOrigin = {
                x: boardOrigin.x + rowIndex * tileSize.width,
                y: boardOrigin.y + columnIndex * tileSize.height,
            };
            if (cell !== null) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, cell === 'red' ? 'coin-red' : 'coin-blue'), context, coinOrigin, 0, { scale });
            }
        });
    });
}
function drawBoardBack(gameBoard, context, state) {
    gameBoard.tiles.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            const cellOrigin = {
                x: boardOrigin.x + rowIndex * tileSize.width,
                y: boardOrigin.y + columnIndex * tileSize.height,
            };
            Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-position-back'), context, cellOrigin, 0, { scale });
            if (columnIndex === 0) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-column-top-front'), context, { x: cellOrigin.x, y: cellOrigin.y - 8 }, 0, { scale });
            }
            if (columnIndex === row.length - 1) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-column-bottom-front'), context, { x: cellOrigin.x, y: cellOrigin.y + tileSize.height }, 0, { scale });
            }
            if (rowIndex === 0) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-row-left-front'), context, { x: cellOrigin.x - 8, y: cellOrigin.y }, 0, { scale });
            }
            if (rowIndex === gameBoard.tiles.length - 1) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-row-right-front'), context, { x: cellOrigin.x + tileSize.width, y: cellOrigin.y }, 0, { scale });
            }
            if (rowIndex === 0 && columnIndex === 0) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-corner-top-left-front'), context, { x: cellOrigin.x - 8, y: cellOrigin.y - 8 }, 0, { scale });
            }
            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === 0) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-corner-top-right-front'), context, { x: cellOrigin.x + tileSize.width, y: cellOrigin.y - 8 }, 0, { scale });
            }
            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === row.length - 1) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-corner-bottom-right-front'), context, { x: cellOrigin.x + tileSize.width, y: cellOrigin.y + tileSize.height }, 0, { scale });
            }
            if (rowIndex === 0 && columnIndex === row.length - 1) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-corner-bottom-left-front'), context, { x: cellOrigin.x - 8, y: cellOrigin.y + tileSize.height }, 0, { scale });
            }
        });
    });
}
function drawBoardFront(gameBoard, context, state) {
    gameBoard.tiles.forEach((row, rowIndex) => {
        row.forEach((cell, columnIndex) => {
            const cellOrigin = {
                x: boardOrigin.x + rowIndex * tileSize.width,
                y: boardOrigin.y + columnIndex * tileSize.height,
            };
            Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-position-front'), context, cellOrigin, 0, { scale });
            if (columnIndex === 0) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-column-top-back'), context, { x: cellOrigin.x, y: cellOrigin.y - 8 }, 0, { scale });
            }
            if (rowIndex === 0 && columnIndex === 0) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-corner-top-left-back'), context, { x: cellOrigin.x - 8, y: cellOrigin.y - 8 }, 0, { scale });
            }
            if (rowIndex === gameBoard.tiles.length - 1 && columnIndex === 0) {
                Object(heks__WEBPACK_IMPORTED_MODULE_0__["drawSprite"])(Object(heks__WEBPACK_IMPORTED_MODULE_0__["getSprite"])(state, 'board-corner-top-right-back'), context, { x: cellOrigin.x + tileSize.width, y: cellOrigin.y - 8 }, 0, { scale });
            }
        });
    });
}
game.start();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWtrZXJqb2VyaS9hcnJheS13aXRob3V0L2Rpc3QvYXJyYXlXaXRob3V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFra2Vyam9lcmkvZnAvZGlzdC9jb21wb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFra2Vyam9lcmkvZnAvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJha2tlcmpvZXJpL2ZwL2Rpc3QvcGlwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJha2tlcmpvZXJpL29iamVjdC13aXRob3V0L2Rpc3Qvb2JqZWN0V2l0aG91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJha2tlcmpvZXJpL3JlcGVhdC9kaXN0L3JlcGVhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJha2tlcmpvZXJpL3V1aWQvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGVrcy9kaXN0L0V2ZW50RW1pdHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGVrcy9kaXN0L0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hla3MvZGlzdC9lbnRpdGllcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGVrcy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oZWtzL2Rpc3Qvc2V0dXBHYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oZWtzL2Rpc3Qvc3ByaXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGVrcy9kaXN0L3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvbGwtdGhlLWJvbmVzL2Rpc3QvY2hvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yb2xsLXRoZS1ib25lcy9kaXN0L2dldFJhbmRvbU51bWJlckluUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JvbGwtdGhlLWJvbmVzL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zcHJpdGVzL3Nwcml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2tleWJvYXJkLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMvbWFpbi50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFycmF5V2l0aG91dChhcnJheSwgLi4udmFsdWVzVG9FeGNsdWRlKSB7XG4gICAgcmV0dXJuIGFycmF5LmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuICF2YWx1ZXNUb0V4Y2x1ZGUuaW5jbHVkZXModmFsdWUpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbXBvc2UoLi4uZnVuY3Rpb25zKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9ucy5yZWR1Y2UoKGNvbXBvc2VkRnVuY3Rpb24sIGN1cnJlbnRGdW5jdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zZWRGdW5jdGlvbihjdXJyZW50RnVuY3Rpb24odmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICB9LCAodmFsdWUpID0+IHZhbHVlKTtcbn1cbiIsImV4cG9ydCB7IGNvbXBvc2UgfSBmcm9tICcuL2NvbXBvc2UuanMnO1xuZXhwb3J0IHsgcGlwZSB9IGZyb20gJy4vcGlwZS5qcyc7XG4iLCJleHBvcnQgZnVuY3Rpb24gcGlwZSguLi5mdW5jdGlvbnMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25zLnJlZHVjZSgocGlwZWRGdW5jdGlvbiwgY3VycmVudEZ1bmN0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RnVuY3Rpb24ocGlwZWRGdW5jdGlvbih2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgIH0sICh2YWx1ZSkgPT4gdmFsdWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb2JqZWN0V2l0aG91dChvYmplY3QsIC4uLmtleXNUb1JlbW92ZSkge1xuICAgIGNvbnN0IGVudHJpZXMgPSBPYmplY3QuZW50cmllcyhvYmplY3QpO1xuICAgIHJldHVybiBlbnRyaWVzLnJlZHVjZSgobmV3T2JqZWN0LCBbY3VycmVudEtleSwgY3VycmVudFZhbHVlXSkgPT4ge1xuICAgICAgICBpZiAoa2V5c1RvUmVtb3ZlLmluY2x1ZGVzKGN1cnJlbnRLZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3T2JqZWN0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG5ld09iamVjdCksIHsgW2N1cnJlbnRLZXldOiBjdXJyZW50VmFsdWUgfSk7XG4gICAgfSwge30pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVwZWF0KGl0ZXJhdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVyYXRpb25zOyBpICs9IDEpIHtcbiAgICAgICAgY2FsbGJhY2soaSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICBsZXQgc2VlZCA9IERhdGUubm93KCk7XG4gICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBzZWVkICs9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIH1cbiAgICBjb25zdCB1dWlkID0gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICBjb25zdCByID0gKHNlZWQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICBzZWVkID0gTWF0aC5mbG9vcihzZWVkIC8gMTYpO1xuICAgICAgICByZXR1cm4gKGMgPT09ICd4JyA/IHIgOiByICYgKDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdXVpZDtcbn1cbiIsImltcG9ydCBhcnJheVdpdGhvdXQgZnJvbSAnQGJha2tlcmpvZXJpL2FycmF5LXdpdGhvdXQnO1xuaW1wb3J0IG9iamVjdFdpdGhvdXQgZnJvbSAnQGJha2tlcmpvZXJpL29iamVjdC13aXRob3V0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IHt9O1xuICAgICAgICB0aGlzLm9uID0gdGhpcy5vbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVtaXQgPSB0aGlzLmVtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbCA9IHRoaXMucmVtb3ZlQWxsLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIG9uKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXZlbnRIYW5kbGVycyksIHsgW2V2ZW50VHlwZV06IFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXSB8fCBbXSxcbiAgICAgICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgXSB9KTtcbiAgICB9XG4gICAgcmVtb3ZlKGV2ZW50VHlwZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZXZlbnRIYW5kbGVycyksIHsgW2V2ZW50VHlwZV06IGFycmF5V2l0aG91dCh0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXSwgaGFuZGxlcikgfSk7XG4gICAgfVxuICAgIHJlbW92ZUFsbChldmVudFR5cGUpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0gb2JqZWN0V2l0aG91dCh0aGlzLmV2ZW50SGFuZGxlcnMsIGV2ZW50VHlwZSk7XG4gICAgfVxuICAgIGVtaXQoZXZlbnRUeXBlLCBpbml0aWFsU3RhdGUsIGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5ldmVudEhhbmRsZXJzLmhhc093blByb3BlcnR5KGV2ZW50VHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnRUeXBlXTtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXJzLnJlZHVjZSgobmV3U3RhdGUsIGN1cnJlbnRIYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEhhbmRsZXIobmV3U3RhdGUsIGV2ZW50LCB7XG4gICAgICAgICAgICAgICAgb246IHRoaXMub24sXG4gICAgICAgICAgICAgICAgZW1pdDogdGhpcy5lbWl0LFxuICAgICAgICAgICAgICAgIHJlbW92ZTogdGhpcy5yZW1vdmUsXG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxsOiB0aGlzLnJlbW92ZUFsbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBpbml0aWFsU3RhdGUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHN0YXJ0IH0gZnJvbSAnLi90aWNrLmpzJztcbmltcG9ydCB7IHNldHVwR2FtZSB9IGZyb20gJy4vc2V0dXBHYW1lLmpzJztcbmV4cG9ydCBjb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gICAgZW50aXRpZXM6IHt9LFxuICAgIHNwcml0ZXM6IHt9LFxufTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGV2ZW50RW1pdHRlciwgeyBpbml0aWFsU3RhdGUgPSBkZWZhdWx0U3RhdGUsIHNjYWxlID0gMSwgY29udGFpbmVyU2VsZWN0b3IgPSAnYm9keScgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gZXZlbnRFbWl0dGVyO1xuICAgICAgICBjb25zdCB7IGNhbnZhcywgY29udGV4dCB9ID0gc2V0dXBHYW1lKGNvbnRhaW5lclNlbGVjdG9yLCBzaXplLCBzY2FsZSk7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnNjYWxlID0gc2NhbGU7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ3N0YXJ0JywgdGhpcy5zdGF0ZSwge30pO1xuICAgICAgICBzdGFydCgodGltZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2JlZm9yZVVwZGF0ZScsIHRoaXMuc3RhdGUsIHsgdGltZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCd1cGRhdGUnLCB0aGlzLnN0YXRlLCB7IHRpbWUgfSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnYWZ0ZXJVcGRhdGUnLCB0aGlzLnN0YXRlLCB7IHRpbWUgfSk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnYmVmb3JlRHJhdycsIHRoaXMuc3RhdGUsIHsgdGltZSwgY29udGV4dDogdGhpcy5jb250ZXh0LCBzY2FsZTogdGhpcy5zY2FsZSB9KTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdkcmF3JywgdGhpcy5zdGF0ZSwgeyB0aW1lLCBjb250ZXh0OiB0aGlzLmNvbnRleHQsIHNjYWxlOiB0aGlzLnNjYWxlIH0pO1xuICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2FmdGVyRHJhdycsIHRoaXMuc3RhdGUsIHsgdGltZSwgY29udGV4dDogdGhpcy5jb250ZXh0LCBzY2FsZTogdGhpcy5zY2FsZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV1aWQgZnJvbSAnQGJha2tlcmpvZXJpL3V1aWQnO1xuZXhwb3J0IGNvbnN0IGFkZEVudGl0eSA9IChjb21wb25lbnRzKSA9PiAoc3RhdGUpID0+IHtcbiAgICBjb25zdCBlbnRpdHkgPSBPYmplY3QuYXNzaWduKHsgaWQ6IGNvbXBvbmVudHMuaWQgfHwgdXVpZCgpIH0sIGNvbXBvbmVudHMpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBlbnRpdGllczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5lbnRpdGllcyksIHsgW2VudGl0eS5pZF06IGVudGl0eSB9KSB9KTtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlRW50aXR5SW5kZXggPSAoLi4uZW50aXRpZXMpID0+IHtcbiAgICByZXR1cm4gZW50aXRpZXMucmVkdWNlKChlbnRpdHlJbmRleCwgZW50aXR5KSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGVudGl0eUluZGV4KSwgeyBbZW50aXR5LmlkXTogZW50aXR5IH0pO1xuICAgIH0sIHt9KTtcbn07XG5leHBvcnQgY29uc3Qgc2V0RW50aXRpZXMgPSAoLi4uZW50aXRpZXMpID0+IChzdGF0ZSkgPT4ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBlbnRpdGllczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5lbnRpdGllcyksIGNyZWF0ZUVudGl0eUluZGV4KC4uLmVudGl0aWVzKSkgfSk7XG59O1xuZXhwb3J0IGNvbnN0IHNldENvbXBvbmVudCA9IChjb21wb25lbnROYW1lKSA9PiAodmFsdWUpID0+IChlbnRpdHkpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBlbnRpdHkpLCB7IFtjb21wb25lbnROYW1lXTogdmFsdWUgfSk7XG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEVudGl0eShzdGF0ZSwgZW50aXR5SWQpIHtcbiAgICBpZiAoIXN0YXRlLmVudGl0aWVzLmhhc093blByb3BlcnR5KGVudGl0eUlkKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVudGl0eSB3aXRoIGlkICR7ZW50aXR5SWR9IGRvZXNuJ3QgZXhpc3QuYCk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZS5lbnRpdGllc1tlbnRpdHlJZF07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RW50aXRpZXMoc3RhdGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhzdGF0ZS5lbnRpdGllcykucmVkdWNlKChlbnRpdGllcywgZW50aXR5KSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAuLi5lbnRpdGllcyxcbiAgICAgICAgICAgIGVudGl0eSxcbiAgICAgICAgXTtcbiAgICB9LCBbXSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZEVudGl0aWVzKGVudGl0aWVzLCBmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzLmZpbHRlcihlbnRpdHkgPT4ge1xuICAgICAgICByZXR1cm4gZG9lc0VudGl0eVZhbHVlTWF0Y2goZW50aXR5LCBmaWx0ZXJzKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmaW5kRW50aXR5KGVudGl0aWVzLCBmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIGVudGl0aWVzLmZpbmQoZW50aXR5ID0+IHtcbiAgICAgICAgcmV0dXJuIGRvZXNFbnRpdHlWYWx1ZU1hdGNoKGVudGl0eSwgZmlsdGVycyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZG9lc0VudGl0eVZhbHVlTWF0Y2goZW50aXR5LCBmaWx0ZXJzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGZpbHRlcnMpLmV2ZXJ5KChbY29tcG9uZW50TmFtZSwgZmlsdGVyVmFsdWVdKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsdGVyVmFsdWUgPT09ICdmdW5jdGlvbicgJiYgZW50aXR5Lmhhc093blByb3BlcnR5KGNvbXBvbmVudE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyVmFsdWUoZW50aXR5W2NvbXBvbmVudE5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGZpbHRlclZhbHVlID09PSAnYm9vbGVhbicgJiYgIWZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gIWVudGl0eS5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnROYW1lKSB8fCAhZW50aXR5W2NvbXBvbmVudE5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgZmlsdGVyVmFsdWUgPT09ICdib29sZWFuJyAmJiBmaWx0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudGl0eS5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnROYW1lKSAmJiAhIWVudGl0eVtjb21wb25lbnROYW1lXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5Lmhhc093blByb3BlcnR5KGNvbXBvbmVudE5hbWUpICYmIGZpbHRlclZhbHVlID09PSBlbnRpdHlbY29tcG9uZW50TmFtZV07XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgR2FtZSwgeyBkZWZhdWx0U3RhdGUgfSBmcm9tICcuL0dhbWUuanMnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL0V2ZW50RW1pdHRlci5qcyc7XG5leHBvcnQgeyBHYW1lLCBkZWZhdWx0U3RhdGUsIEV2ZW50RW1pdHRlciB9O1xuZXhwb3J0ICogZnJvbSAnLi9zcHJpdGVzLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vZW50aXRpZXMuanMnO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldHVwR2FtZShjb250YWluZXJTZWxlY3Rvciwgc2l6ZSwgc2NhbGUgPSAxKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAoc2l6ZS53aWR0aCAqIHNjYWxlICogd2luZG93LmRldmljZVBpeGVsUmF0aW8pLnRvU3RyaW5nKCkpO1xuICAgIGNhbnZhcy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIChzaXplLmhlaWdodCAqIHNjYWxlICogd2luZG93LmRldmljZVBpeGVsUmF0aW8pLnRvU3RyaW5nKCkpO1xuICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGAke3NpemUud2lkdGggKiBzY2FsZX1weGA7XG4gICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGAke3NpemUuaGVpZ2h0ICogc2NhbGV9cHhgO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZG5cXCd0IGNyZWF0ZSBjb250ZXh0IGZyb20gY2FudmFzJyk7XG4gICAgfVxuICAgIGNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XG4gICAgY29udGV4dC5zY2FsZSh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbywgd2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgIGNvbnN0IGdhbWVFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICAgIGlmICghZ2FtZUVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb3VsZG4ndCBmaW5kIGVsZW1lbnQgd2l0aCBzZWxlY3RvciAke2NvbnRhaW5lclNlbGVjdG9yfSB0byBtb3VudCBjYW52YXMgb24uYCk7XG4gICAgfVxuICAgIGdhbWVFbGVtZW50LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY2FudmFzLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBwaXBlIH0gZnJvbSAnQGJha2tlcmpvZXJpL2ZwJztcbmltcG9ydCB7IHNldENvbXBvbmVudCwgc2V0RW50aXRpZXMsIGZpbmRFbnRpdGllcywgZ2V0RW50aXRpZXMgfSBmcm9tICcuL2VudGl0aWVzJztcbmV4cG9ydCBjb25zdCBhZGRTcHJpdGUgPSAoc3ByaXRlKSA9PiAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgc3ByaXRlczogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zcHJpdGVzKSwgeyBbc3ByaXRlLm5hbWVdOiBzcHJpdGUgfSkgfSk7XG59O1xuZXhwb3J0IGNvbnN0IGltcG9ydFNwcml0ZVNoZWV0ID0gKHNwcml0ZVNoZWV0KSA9PiAoc3RhdGUpID0+IHtcbiAgICByZXR1cm4gcGlwZSguLi5zcHJpdGVTaGVldC5tYXAoYWRkU3ByaXRlKSkoc3RhdGUpO1xufTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcHJpdGUoc3RhdGUsIG5hbWUpIHtcbiAgICBpZiAoIXN0YXRlLnNwcml0ZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBzcHJpdGUgd2l0aCBuYW1lICR7bmFtZX0gZm91bmQuYCk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZS5zcHJpdGVzW25hbWVdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdTcHJpdGUoc3ByaXRlLCBjb250ZXh0LCBwb3NpdGlvbiwgZnJhbWVJbmRleCA9IDAsIHsgc2NhbGUgPSAxIH0gPSB7fSkge1xuICAgIGlmICghc3ByaXRlLmZyYW1lc1tmcmFtZUluZGV4XSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNwcml0ZSAke3Nwcml0ZS5uYW1lfSBkb2VzIG5vdCBoYXZlIGZyYW1lIHdpdGggaW5kZXggJHtmcmFtZUluZGV4fWApO1xuICAgIH1cbiAgICBjb25zdCBmcmFtZSA9IHNwcml0ZS5mcmFtZXNbZnJhbWVJbmRleF07XG4gICAgY29uc3QgaW1hZ2UgPSBnZXRJbWFnZUZvckZpbGVQYXRoKGZyYW1lLmZpbGUpO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBmcmFtZS5vcmlnaW4ueCwgZnJhbWUub3JpZ2luLnksIGZyYW1lLnNpemUud2lkdGgsIGZyYW1lLnNpemUuaGVpZ2h0LCAocG9zaXRpb24ueCArIHNwcml0ZS5vZmZzZXQueCkgKiBzY2FsZSwgKHBvc2l0aW9uLnkgKyBzcHJpdGUub2Zmc2V0LnkpICogc2NhbGUsIGZyYW1lLnNpemUud2lkdGggKiBzY2FsZSwgZnJhbWUuc2l6ZS5oZWlnaHQgKiBzY2FsZSk7XG59XG5jb25zdCBpbWFnZUNhY2hlID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0SW1hZ2VGb3JGaWxlUGF0aChmaWxlUGF0aCwgY2FjaGVkID0gdHJ1ZSkge1xuICAgIGlmIChjYWNoZWQgJiYgaW1hZ2VDYWNoZVtmaWxlUGF0aF0pIHtcbiAgICAgICAgcmV0dXJuIGltYWdlQ2FjaGVbZmlsZVBhdGhdO1xuICAgIH1cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGZpbGVQYXRoO1xuICAgIGltYWdlQ2FjaGVbZmlsZVBhdGhdID0gaW1hZ2U7XG4gICAgaW1hZ2Uub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgZGVsZXRlIGltYWdlQ2FjaGVbZmlsZVBhdGhdO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGltYWdlIGZvdW5kIGF0ICR7ZmlsZVBhdGh9LmApO1xuICAgIH07XG4gICAgcmV0dXJuIGltYWdlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFuaW1hdGVkU3ByaXRlcyhzdGF0ZSwgeyB0aW1lIH0pIHtcbiAgICBjb25zdCBlbnRpdGllc1dpdGhTcHJpdGVzID0gZmluZEVudGl0aWVzKGdldEVudGl0aWVzKHN0YXRlKSwge1xuICAgICAgICBzcHJpdGU6IHRydWUsXG4gICAgfSk7XG4gICAgY29uc3QgdXBkYXRlZEVudGl0aWVzID0gZW50aXRpZXNXaXRoU3ByaXRlcy5tYXAoZW50aXR5ID0+IHtcbiAgICAgICAgY29uc3Qgc3ByaXRlQ29tcG9uZW50ID0gZW50aXR5LnNwcml0ZTtcbiAgICAgICAgY29uc3Qgc3ByaXRlT2ZFbnRpdHkgPSBnZXRTcHJpdGUoc3RhdGUsIGVudGl0eS5zcHJpdGUubmFtZSk7XG4gICAgICAgIGlmIChzcHJpdGVDb21wb25lbnQuZnJhbWVzUGVyU2Vjb25kID09PSAwXG4gICAgICAgICAgICB8fCBzcHJpdGVPZkVudGl0eS5mcmFtZXMubGVuZ3RoIDw9IDFcbiAgICAgICAgICAgIHx8ICFzcHJpdGVDb21wb25lbnQuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbnRpdHkuc3ByaXRlLmFuaW1hdGlvblN0YXJ0VGltZSkge1xuICAgICAgICAgICAgZW50aXR5LnNwcml0ZS5hbmltYXRpb25TdGFydFRpbWUgPSB0aW1lO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0ZyYW1lSW5kZXggPSBjYWxjdWxhdGVOZXdGcmFtZUluZGV4KHNwcml0ZU9mRW50aXR5LmZyYW1lcy5sZW5ndGgsIHNwcml0ZUNvbXBvbmVudC5mcmFtZXNQZXJTZWNvbmQsIHRpbWUgLSBlbnRpdHkuc3ByaXRlLmFuaW1hdGlvblN0YXJ0VGltZSwgc3ByaXRlQ29tcG9uZW50LmlzTG9vcGluZyk7XG4gICAgICAgIHJldHVybiBzZXRDb21wb25lbnQoJ3Nwcml0ZScpKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3ByaXRlQ29tcG9uZW50KSwgeyBjdXJyZW50RnJhbWVJbmRleDogbmV3RnJhbWVJbmRleCB9KSkoZW50aXR5KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2V0RW50aXRpZXMoLi4udXBkYXRlZEVudGl0aWVzKShzdGF0ZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTmV3RnJhbWVJbmRleChhbW91bnRPZkZyYW1lcywgZnJhbWVzUGVyU2Vjb25kLCBlbGFwc2VkVGltZSwgaXNMb29waW5nKSB7XG4gICAgaWYgKGlzTG9vcGluZykge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChlbGFwc2VkVGltZSAvICgxMDAwIC8gZnJhbWVzUGVyU2Vjb25kKSkgJSBhbW91bnRPZkZyYW1lcztcbiAgICB9XG4gICAgcmV0dXJuIE1hdGgubWluKChNYXRoLnJvdW5kKGVsYXBzZWRUaW1lIC8gMTAwMCkgLyBmcmFtZXNQZXJTZWNvbmQpLCBhbW91bnRPZkZyYW1lcyAtIDEpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNwcml0ZUNvbXBvbmVudChuYW1lLCB7IHN0YXJ0aW5nRnJhbWUgPSAwLCBmcmFtZXNQZXJTZWNvbmQgPSAxLCBpc0xvb3BpbmcgPSB0cnVlLCBpc0FuaW1hdGluZyA9IHRydWUgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgYW5pbWF0aW9uU3RhcnRUaW1lOiBudWxsLFxuICAgICAgICBjdXJyZW50RnJhbWVJbmRleDogc3RhcnRpbmdGcmFtZSxcbiAgICAgICAgZnJhbWVzUGVyU2Vjb25kLFxuICAgICAgICBpc0xvb3BpbmcsXG4gICAgICAgIGlzQW5pbWF0aW5nLFxuICAgIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc3RhcnQoY2FsbGJhY2spIHtcbiAgICBzY2hlZHVsZU5leHRUaWNrKGNhbGxiYWNrKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZU5leHRUaWNrKGNhbGxiYWNrKSB7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgodGltZSkgPT4ge1xuICAgICAgICB0aWNrKGNhbGxiYWNrLCB0aW1lKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aWNrKGNhbGxiYWNrLCB0aW1lKSB7XG4gICAgY2FsbGJhY2sodGltZSk7XG4gICAgc2NoZWR1bGVOZXh0VGljayhjYWxsYmFjayk7XG59XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21OdW1iZXJJblJhbmdlIH0gZnJvbSAnLi9nZXRSYW5kb21OdW1iZXJJblJhbmdlJztcbmV4cG9ydCBmdW5jdGlvbiBjaG9vc2UoY2hvaWNlcykge1xuICAgIGlmIChjaG9pY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjaG9vc2UgZnJvbSAwIGNob2ljZXMuJyk7XG4gICAgfVxuICAgIHJldHVybiBjaG9pY2VzW2dldFJhbmRvbU51bWJlckluUmFuZ2UoMCwgY2hvaWNlcy5sZW5ndGggLSAxKV07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVySW5SYW5nZShsb3dlckJvdW5kLCB1cHBlckJvdW5kKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh1cHBlckJvdW5kICsgMSArIGxvd2VyQm91bmQpKTtcbn1cbiIsImV4cG9ydCB7IGdldFJhbmRvbU51bWJlckluUmFuZ2UgfSBmcm9tICcuL2dldFJhbmRvbU51bWJlckluUmFuZ2UuanMnO1xuZXhwb3J0IHsgY2hvb3NlIH0gZnJvbSAnLi9jaG9vc2UuanMnO1xuIiwiY29uc3Qgc3ByaXRlU2hlZXQgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnY29pbi1yZWQnLFxuICAgICAgICBmcmFtZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxlOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2NvaW5zLnBuZycsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogMCB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnY29pbi1ibHVlJyxcbiAgICAgICAgZnJhbWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogJ3NyYy9hc3NldHMvc3ByaXRlcy9jb2lucy5wbmcnLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogeyB4OiAwLCB5OiAxNiB9LFxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG9mZnNldDogeyB4OiAwLCB5OiAwIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdib2FyZC1wb3NpdGlvbi1mcm9udCcsXG4gICAgICAgIGZyYW1lczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGU6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYm9hcmQucG5nJyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHsgeDogOCwgeTogNDAgfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogMCB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYm9hcmQtY29sdW1uLXRvcC1mcm9udCcsXG4gICAgICAgIGZyYW1lczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGU6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYm9hcmQucG5nJyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHsgeDogOCwgeTogMzIgfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiA4IH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG9mZnNldDogeyB4OiAwLCB5OiAwIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdib2FyZC1jb2x1bW4tYm90dG9tLWZyb250JyxcbiAgICAgICAgZnJhbWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogJ3NyYy9hc3NldHMvc3ByaXRlcy9ib2FyZC5wbmcnLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogeyB4OiA4LCB5OiA1NiB9LFxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDE2LCBoZWlnaHQ6IDggfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2JvYXJkLXJvdy1sZWZ0LWZyb250JyxcbiAgICAgICAgZnJhbWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogJ3NyYy9hc3NldHMvc3ByaXRlcy9ib2FyZC5wbmcnLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogeyB4OiAwLCB5OiA0MCB9LFxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogMTYgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2JvYXJkLXJvdy1yaWdodC1mcm9udCcsXG4gICAgICAgIGZyYW1lczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGU6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYm9hcmQucG5nJyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHsgeDogMjQsIHk6IDQwIH0sXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogOCwgaGVpZ2h0OiAxNiB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogMCB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYm9hcmQtY29ybmVyLXRvcC1sZWZ0LWZyb250JyxcbiAgICAgICAgZnJhbWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogJ3NyYy9hc3NldHMvc3ByaXRlcy9ib2FyZC5wbmcnLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogeyB4OiAwLCB5OiAzMiB9LFxuICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDgsIGhlaWdodDogOCB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogMCB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYm9hcmQtY29ybmVyLXRvcC1yaWdodC1mcm9udCcsXG4gICAgICAgIGZyYW1lczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGU6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYm9hcmQucG5nJyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHsgeDogMjQsIHk6IDMyIH0sXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogOCwgaGVpZ2h0OiA4IH0sXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIG9mZnNldDogeyB4OiAwLCB5OiAwIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdib2FyZC1jb3JuZXItYm90dG9tLXJpZ2h0LWZyb250JyxcbiAgICAgICAgZnJhbWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogJ3NyYy9hc3NldHMvc3ByaXRlcy9ib2FyZC5wbmcnLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogeyB4OiAyNCwgeTogNTYgfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDggfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2JvYXJkLWNvcm5lci1ib3R0b20tbGVmdC1mcm9udCcsXG4gICAgICAgIGZyYW1lczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGU6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYm9hcmQucG5nJyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHsgeDogMCwgeTogNTYgfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDggfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2JvYXJkLXBvc2l0aW9uLWJhY2snLFxuICAgICAgICBmcmFtZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxlOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JvYXJkLnBuZycsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiB7IHg6IDgsIHk6IDggfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogMCB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYm9hcmQtY29sdW1uLXRvcC1iYWNrJyxcbiAgICAgICAgZnJhbWVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmlsZTogJ3NyYy9hc3NldHMvc3ByaXRlcy9ib2FyZC5wbmcnLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogeyB4OiA4LCB5OiAwIH0sXG4gICAgICAgICAgICAgICAgc2l6ZTogeyB3aWR0aDogMTYsIGhlaWdodDogOCB9LFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvZmZzZXQ6IHsgeDogMCwgeTogMCB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYm9hcmQtY29ybmVyLXRvcC1sZWZ0LWJhY2snLFxuICAgICAgICBmcmFtZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmaWxlOiAnc3JjL2Fzc2V0cy9zcHJpdGVzL2JvYXJkLnBuZycsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDggfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2JvYXJkLWNvcm5lci10b3AtcmlnaHQtYmFjaycsXG4gICAgICAgIGZyYW1lczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZpbGU6ICdzcmMvYXNzZXRzL3Nwcml0ZXMvYm9hcmQucG5nJyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHsgeDogMjQsIHk6IDAgfSxcbiAgICAgICAgICAgICAgICBzaXplOiB7IHdpZHRoOiA4LCBoZWlnaHQ6IDggfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgb2Zmc2V0OiB7IHg6IDAsIHk6IDAgfSxcbiAgICB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IHNwcml0ZVNoZWV0O1xuIiwiaW1wb3J0IHJlcGVhdCBmcm9tICdAYmFra2Vyam9lcmkvcmVwZWF0JztcbmltcG9ydCB7IGNob29zZSB9IGZyb20gJ3JvbGwtdGhlLWJvbmVzJztcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lQm9hcmQod2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnRQbGF5ZXI6IGNob29zZShbJ3JlZCcsICd5ZWxsb3cnXSksXG4gICAgICAgIGlzR2FtZUJvYXJkOiB0cnVlLFxuICAgICAgICB0aWxlczogY3JlYXRlVGlsZU1hcCh3aWR0aCwgaGVpZ2h0KSxcbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlVGlsZU1hcCh3aWR0aCwgaGVpZ2h0KSB7XG4gICAgY29uc3QgdGlsZU1hcCA9IFtdO1xuICAgIHJlcGVhdCh3aWR0aCwgKHgpID0+IHtcbiAgICAgICAgdGlsZU1hcFt4XSA9IFtdO1xuICAgICAgICByZXBlYXQoaGVpZ2h0LCAoeSkgPT4ge1xuICAgICAgICAgICAgdGlsZU1hcFt4XVt5XSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiB0aWxlTWFwO1xufVxuIiwiaW1wb3J0IGFycmF5V2l0aG91dCBmcm9tICdAYmFra2Vyam9lcmkvYXJyYXktd2l0aG91dCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlib2FyZCB7XG4gICAgY29uc3RydWN0b3IoZXZlbnRFbWl0dGVyKSB7XG4gICAgICAgIHRoaXMucHJlc3NlZEtleXMgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVLZXlzID0gW107XG4gICAgICAgIHRoaXMucmVsZWFzZWRLZXlzID0gW107XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gZXZlbnRFbWl0dGVyO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNLZXlQcmVzc2VkKGtleSkgJiYgIXRoaXMuaXNLZXlEb3duKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNzZWRLZXlzID0gWy4uLnRoaXMucHJlc3NlZEtleXMsIGtleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNLZXlEb3duKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUtleXMgPSBbLi4udGhpcy5hY3RpdmVLZXlzLCBrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzS2V5RG93bihrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVLZXlzID0gYXJyYXlXaXRob3V0KHRoaXMuYWN0aXZlS2V5cywga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5pc0tleVJlbGVhc2VkKGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VkS2V5cyA9IFsuLi50aGlzLnJlbGVhc2VkS2V5cywga2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5yZXNldEFsbEtleXMuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd1cGRhdGUnLCAoc3RhdGUsIHt9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZXNzZWRLZXlzLmZvckVhY2goKGFjdGl2ZUtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgna2V5UHJlc3NlZCcsIHN0YXRlLCB7IGtleTogYWN0aXZlS2V5IH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUtleXMuZm9yRWFjaCgoYWN0aXZlS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdrZXlEb3duJywgc3RhdGUsIHsga2V5OiBhY3RpdmVLZXkgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZWRLZXlzLmZvckVhY2goKGFjdGl2ZUtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgna2V5VXAnLCBzdGF0ZSwgeyBrZXk6IGFjdGl2ZUtleSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ2FmdGVyVXBkYXRlJywgKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UHJlc3NlZEtleXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRSZWxlYXNlZEtleXMoKTtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzS2V5UHJlc3NlZChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlc3NlZEtleXMuaW5jbHVkZXMoa2V5KTtcbiAgICB9XG4gICAgaXNLZXlEb3duKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVLZXlzLmluY2x1ZGVzKGtleSk7XG4gICAgfVxuICAgIGlzS2V5UmVsZWFzZWQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbGVhc2VkS2V5cy5pbmNsdWRlcyhrZXkpO1xuICAgIH1cbiAgICByZXNldFByZXNzZWRLZXlzKCkge1xuICAgICAgICB0aGlzLnByZXNzZWRLZXlzID0gW107XG4gICAgfVxuICAgIHJlc2V0QWN0aXZlS2V5cygpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVLZXlzID0gW107XG4gICAgfVxuICAgIHJlc2V0UmVsZWFzZWRLZXlzKCkge1xuICAgICAgICB0aGlzLnJlbGVhc2VkS2V5cyA9IFtdO1xuICAgIH1cbiAgICByZXNldEFsbEtleXMoKSB7XG4gICAgICAgIHRoaXMucmVzZXRQcmVzc2VkS2V5cygpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZlS2V5cygpO1xuICAgICAgICB0aGlzLnJlc2V0UmVsZWFzZWRLZXlzKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZSwgRXZlbnRFbWl0dGVyLCBhZGRFbnRpdHksIGZpbmRFbnRpdHksIGdldEVudGl0aWVzLCBzZXRFbnRpdGllcywgaW1wb3J0U3ByaXRlU2hlZXQsIGRyYXdTcHJpdGUsIGdldFNwcml0ZSB9IGZyb20gJ2hla3MnO1xuaW1wb3J0IHsgcGlwZSB9IGZyb20gJ0BiYWtrZXJqb2VyaS9mcCc7XG5pbXBvcnQgeyBjcmVhdGVHYW1lQm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgS2V5Ym9hcmQgZnJvbSAnLi9rZXlib2FyZCc7XG5pbXBvcnQgc3ByaXRlU2hlZXQgZnJvbSAnLi4vYXNzZXRzL3Nwcml0ZXMvc3ByaXRlcyc7XG5jb25zdCBzY2FsZSA9IDQ7XG5jb25zdCBnYW1lU2l6ZSA9IHtcbiAgICB3aWR0aDogMzIwLFxuICAgIGhlaWdodDogMTgwLFxufTtcbmNvbnN0IGJvYXJkT3JpZ2luID0ge1xuICAgIHg6IDQwLFxuICAgIHk6IDQwLFxufTtcbmNvbnN0IHRpbGVTaXplID0ge1xuICAgIHdpZHRoOiAxNixcbiAgICBoZWlnaHQ6IDE2LFxufTtcbi8qKlxuICogR2FtZSBwYXJhbWV0ZXJzXG4gKi9cbmNvbnN0IGJvYXJkU2l6ZSA9IHtcbiAgICB3aWR0aDogOCxcbiAgICBoZWlnaHQ6IDYsXG59O1xuY29uc3QgY29ubmVjdEhvd01hbnkgPSA0O1xuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGdhbWVTaXplLCBldmVudEVtaXR0ZXIsIHsgc2NhbGUsIGNvbnRhaW5lclNlbGVjdG9yOiAnLmdhbWUnIH0pO1xubmV3IEtleWJvYXJkKGV2ZW50RW1pdHRlcik7XG5ldmVudEVtaXR0ZXIub24oJ3N0YXJ0JywgKHN0YXRlKSA9PiB7XG4gICAgcmV0dXJuIHBpcGUoaW1wb3J0U3ByaXRlU2hlZXQoc3ByaXRlU2hlZXQpLCBhZGRFbnRpdHkoY3JlYXRlR2FtZUJvYXJkKGJvYXJkU2l6ZS53aWR0aCwgYm9hcmRTaXplLmhlaWdodCkpKShzdGF0ZSk7XG59KTtcbmV2ZW50RW1pdHRlci5vbigna2V5VXAnLCAoc3RhdGUsIHsga2V5IH0sIHsgZW1pdCB9KSA9PiB7XG4gICAgY29uc3Qga2V5QXNJbnRlZ2VyID0gcGFyc2VJbnQoa2V5KTtcbiAgICBjb25zdCBpc051bWVyaWNLZXkgPSB0eXBlb2Yga2V5QXNJbnRlZ2VyID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oa2V5QXNJbnRlZ2VyKTtcbiAgICBpZiAoIWlzTnVtZXJpY0tleSB8fCAhKGtleUFzSW50ZWdlciA+PSAxICYmIGtleUFzSW50ZWdlciA8PSBib2FyZFNpemUud2lkdGgpKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY29uc3QgZ2FtZUJvYXJkID0gZmluZEVudGl0eShnZXRFbnRpdGllcyhzdGF0ZSksIHsgaXNHYW1lQm9hcmQ6IHRydWUgfSk7XG4gICAgaWYgKCFnYW1lQm9hcmQpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IGtleUFzSW50ZWdlciAtIDE7XG4gICAgY29uc3QgY29sdW1uID0gZ2FtZUJvYXJkLnRpbGVzW2NvbHVtbkluZGV4XTtcbiAgICAvLyBUaGUgY2VsbCB0aGF0IHdpbGwgcmVjZWl2ZSB0aGUgdGlsZSBpcyB0aGUgb25lIGJlZm9yZSB0aGUgZmlyc3QgZmlsbGVkIGNlbGxcbiAgICBsZXQgaW5kZXhPZkZpcnN0RnVsbENlbGwgPSAwO1xuICAgIGxldCBjZWxsVG9JbnNwZWN0ID0gY29sdW1uW2luZGV4T2ZGaXJzdEZ1bGxDZWxsXTtcbiAgICB3aGlsZSAoY2VsbFRvSW5zcGVjdCA9PT0gbnVsbCAmJiBpbmRleE9mRmlyc3RGdWxsQ2VsbCA8PSBjb2x1bW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICBpbmRleE9mRmlyc3RGdWxsQ2VsbCArPSAxO1xuICAgICAgICBjZWxsVG9JbnNwZWN0ID0gY29sdW1uW2luZGV4T2ZGaXJzdEZ1bGxDZWxsXTtcbiAgICB9XG4gICAgaWYgKGluZGV4T2ZGaXJzdEZ1bGxDZWxsID09PSAwKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgZ2FtZUJvYXJkLnRpbGVzW2NvbHVtbkluZGV4XVtpbmRleE9mRmlyc3RGdWxsQ2VsbCAtIDFdID0gZ2FtZUJvYXJkLmN1cnJlbnRQbGF5ZXI7XG4gICAgc3RhdGUgPSBzZXRFbnRpdGllcyhnYW1lQm9hcmQpKHN0YXRlKTtcbiAgICByZXR1cm4gZW1pdCgnZW5kVHVybicsIHN0YXRlLCB7fSk7XG59KTtcbmV2ZW50RW1pdHRlci5vbignZW5kVHVybicsIChzdGF0ZSkgPT4ge1xuICAgIGNvbnN0IGdhbWVCb2FyZCA9IGZpbmRFbnRpdHkoZ2V0RW50aXRpZXMoc3RhdGUpLCB7IGlzR2FtZUJvYXJkOiB0cnVlIH0pO1xuICAgIGlmICghZ2FtZUJvYXJkKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gICAgY29uc3Qgd2lubmVyID0gZmluZFdpbm5lcihnYW1lQm9hcmQudGlsZXMsIGNvbm5lY3RIb3dNYW55KTtcbiAgICBpZiAod2lubmVyKSB7XG4gICAgICAgIGFsZXJ0KGBUaGUgd2lubmVyIGlzLi4uICR7d2lubmVyfWApO1xuICAgIH1cbiAgICBnYW1lQm9hcmQuY3VycmVudFBsYXllciA9IGdhbWVCb2FyZC5jdXJyZW50UGxheWVyID09PSAncmVkJyA/ICd5ZWxsb3cnIDogJ3JlZCc7XG4gICAgcmV0dXJuIHNldEVudGl0aWVzKGdhbWVCb2FyZCkoc3RhdGUpO1xufSk7XG5mdW5jdGlvbiBmaW5kV2lubmVyKHRpbGVzLCBjaGFpbkxlbmd0aCA9IDQpIHtcbiAgICBmb3IgKGxldCBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgdGlsZXMubGVuZ3RoOyBjb2x1bW5JbmRleCArPSAxKSB7IC8vIGl0ZXJhdGUgY29sdW1ucywgbGVmdCB0byByaWdodFxuICAgICAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGlsZXNbY29sdW1uSW5kZXhdLmxlbmd0aDsgcm93SW5kZXggKz0gMSkgeyAvLyBpdGVyYXRlIHJvd3MsIHRvcCB0byBib3R0b21cbiAgICAgICAgICAgIGNvbnN0IHBsYXllck9jY3VweWluZ0NlbGwgPSB0aWxlc1tjb2x1bW5JbmRleF1bcm93SW5kZXhdO1xuICAgICAgICAgICAgaWYgKHBsYXllck9jY3VweWluZ0NlbGwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gZG9uJ3QgY2hlY2sgZW1wdHkgc2xvdHNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNoYWluID0gWy4uLm5ldyBBcnJheShjaGFpbkxlbmd0aCkua2V5cygpXTtcbiAgICAgICAgICAgIC8vIExvb2sgZWFzdFxuICAgICAgICAgICAgaWYgKGNoYWluLmV2ZXJ5KGNoYWluSW5kZXggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aWxlc1tjb2x1bW5JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgJiYgdGlsZXNbY29sdW1uSW5kZXhdW3Jvd0luZGV4ICsgY2hhaW5JbmRleF0gPT09IHBsYXllck9jY3VweWluZ0NlbGw7XG4gICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbGF5ZXJPY2N1cHlpbmdDZWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTG9vayBub3J0aFxuICAgICAgICAgICAgaWYgKGNoYWluLmV2ZXJ5KGNoYWluSW5kZXggPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aWxlc1tjb2x1bW5JbmRleCArIGNoYWluSW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICYmIHRpbGVzW2NvbHVtbkluZGV4ICsgY2hhaW5JbmRleF1bcm93SW5kZXhdID09PSBwbGF5ZXJPY2N1cHlpbmdDZWxsO1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyT2NjdXB5aW5nQ2VsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb2sgbm9ydGhlYXN0XG4gICAgICAgICAgICBpZiAoY2hhaW4uZXZlcnkoY2hhaW5JbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGVzW2NvbHVtbkluZGV4ICsgY2hhaW5JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgJiYgdGlsZXNbY29sdW1uSW5kZXggKyBjaGFpbkluZGV4XVtyb3dJbmRleCArIGNoYWluSW5kZXhdID09PSBwbGF5ZXJPY2N1cHlpbmdDZWxsO1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyT2NjdXB5aW5nQ2VsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExvb2sgc291dGhlYXN0XG4gICAgICAgICAgICBpZiAoY2hhaW4uZXZlcnkoY2hhaW5JbmRleCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbGVzW2NvbHVtbkluZGV4ICsgY2hhaW5JbmRleF1cbiAgICAgICAgICAgICAgICAgICAgJiYgdGlsZXNbY29sdW1uSW5kZXggKyBjaGFpbkluZGV4XVtyb3dJbmRleCAtIGNoYWluSW5kZXhdID09PSBwbGF5ZXJPY2N1cHlpbmdDZWxsO1xuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGxheWVyT2NjdXB5aW5nQ2VsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV2ZW50RW1pdHRlci5vbignZHJhdycsIChzdGF0ZSwgeyBjb250ZXh0IH0pID0+IHtcbiAgICBjb25zdCBnYW1lQm9hcmQgPSBmaW5kRW50aXR5KGdldEVudGl0aWVzKHN0YXRlKSwgeyBpc0dhbWVCb2FyZDogdHJ1ZSB9KTtcbiAgICBpZiAoIWdhbWVCb2FyZCkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGdhbWVTaXplLndpZHRoICogc2NhbGUsIGdhbWVTaXplLmhlaWdodCAqIHNjYWxlKTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjRDdEMEZGJztcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGdhbWVTaXplLndpZHRoICogc2NhbGUsIGdhbWVTaXplLmhlaWdodCAqIHNjYWxlKTtcbiAgICBkcmF3Qm9hcmRCYWNrKGdhbWVCb2FyZCwgY29udGV4dCwgc3RhdGUpO1xuICAgIGRyYXdDb2luc0luQm9hcmQoZ2FtZUJvYXJkLCBjb250ZXh0LCBzdGF0ZSk7XG4gICAgZHJhd0JvYXJkRnJvbnQoZ2FtZUJvYXJkLCBjb250ZXh0LCBzdGF0ZSk7XG4gICAgcmV0dXJuIHN0YXRlO1xufSk7XG5mdW5jdGlvbiBkcmF3Q29pbnNJbkJvYXJkKGdhbWVCb2FyZCwgY29udGV4dCwgc3RhdGUpIHtcbiAgICBnYW1lQm9hcmQudGlsZXMuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvaW5PcmlnaW4gPSB7XG4gICAgICAgICAgICAgICAgeDogYm9hcmRPcmlnaW4ueCArIHJvd0luZGV4ICogdGlsZVNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogYm9hcmRPcmlnaW4ueSArIGNvbHVtbkluZGV4ICogdGlsZVNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjZWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZHJhd1Nwcml0ZShnZXRTcHJpdGUoc3RhdGUsIGNlbGwgPT09ICdyZWQnID8gJ2NvaW4tcmVkJyA6ICdjb2luLWJsdWUnKSwgY29udGV4dCwgY29pbk9yaWdpbiwgMCwgeyBzY2FsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBkcmF3Qm9hcmRCYWNrKGdhbWVCb2FyZCwgY29udGV4dCwgc3RhdGUpIHtcbiAgICBnYW1lQm9hcmQudGlsZXMuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxPcmlnaW4gPSB7XG4gICAgICAgICAgICAgICAgeDogYm9hcmRPcmlnaW4ueCArIHJvd0luZGV4ICogdGlsZVNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogYm9hcmRPcmlnaW4ueSArIGNvbHVtbkluZGV4ICogdGlsZVNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRyYXdTcHJpdGUoZ2V0U3ByaXRlKHN0YXRlLCAnYm9hcmQtcG9zaXRpb24tYmFjaycpLCBjb250ZXh0LCBjZWxsT3JpZ2luLCAwLCB7IHNjYWxlIH0pO1xuICAgICAgICAgICAgaWYgKGNvbHVtbkluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZHJhd1Nwcml0ZShnZXRTcHJpdGUoc3RhdGUsICdib2FyZC1jb2x1bW4tdG9wLWZyb250JyksIGNvbnRleHQsIHsgeDogY2VsbE9yaWdpbi54LCB5OiBjZWxsT3JpZ2luLnkgLSA4IH0sIDAsIHsgc2NhbGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sdW1uSW5kZXggPT09IHJvdy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgZHJhd1Nwcml0ZShnZXRTcHJpdGUoc3RhdGUsICdib2FyZC1jb2x1bW4tYm90dG9tLWZyb250JyksIGNvbnRleHQsIHsgeDogY2VsbE9yaWdpbi54LCB5OiBjZWxsT3JpZ2luLnkgKyB0aWxlU2l6ZS5oZWlnaHQgfSwgMCwgeyBzY2FsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdTcHJpdGUoZ2V0U3ByaXRlKHN0YXRlLCAnYm9hcmQtcm93LWxlZnQtZnJvbnQnKSwgY29udGV4dCwgeyB4OiBjZWxsT3JpZ2luLnggLSA4LCB5OiBjZWxsT3JpZ2luLnkgfSwgMCwgeyBzY2FsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gZ2FtZUJvYXJkLnRpbGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBkcmF3U3ByaXRlKGdldFNwcml0ZShzdGF0ZSwgJ2JvYXJkLXJvdy1yaWdodC1mcm9udCcpLCBjb250ZXh0LCB7IHg6IGNlbGxPcmlnaW4ueCArIHRpbGVTaXplLndpZHRoLCB5OiBjZWxsT3JpZ2luLnkgfSwgMCwgeyBzY2FsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCAmJiBjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdTcHJpdGUoZ2V0U3ByaXRlKHN0YXRlLCAnYm9hcmQtY29ybmVyLXRvcC1sZWZ0LWZyb250JyksIGNvbnRleHQsIHsgeDogY2VsbE9yaWdpbi54IC0gOCwgeTogY2VsbE9yaWdpbi55IC0gOCB9LCAwLCB7IHNjYWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSBnYW1lQm9hcmQudGlsZXMubGVuZ3RoIC0gMSAmJiBjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdTcHJpdGUoZ2V0U3ByaXRlKHN0YXRlLCAnYm9hcmQtY29ybmVyLXRvcC1yaWdodC1mcm9udCcpLCBjb250ZXh0LCB7IHg6IGNlbGxPcmlnaW4ueCArIHRpbGVTaXplLndpZHRoLCB5OiBjZWxsT3JpZ2luLnkgLSA4IH0sIDAsIHsgc2NhbGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm93SW5kZXggPT09IGdhbWVCb2FyZC50aWxlcy5sZW5ndGggLSAxICYmIGNvbHVtbkluZGV4ID09PSByb3cubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGRyYXdTcHJpdGUoZ2V0U3ByaXRlKHN0YXRlLCAnYm9hcmQtY29ybmVyLWJvdHRvbS1yaWdodC1mcm9udCcpLCBjb250ZXh0LCB7IHg6IGNlbGxPcmlnaW4ueCArIHRpbGVTaXplLndpZHRoLCB5OiBjZWxsT3JpZ2luLnkgKyB0aWxlU2l6ZS5oZWlnaHQgfSwgMCwgeyBzY2FsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyb3dJbmRleCA9PT0gMCAmJiBjb2x1bW5JbmRleCA9PT0gcm93Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICBkcmF3U3ByaXRlKGdldFNwcml0ZShzdGF0ZSwgJ2JvYXJkLWNvcm5lci1ib3R0b20tbGVmdC1mcm9udCcpLCBjb250ZXh0LCB7IHg6IGNlbGxPcmlnaW4ueCAtIDgsIHk6IGNlbGxPcmlnaW4ueSArIHRpbGVTaXplLmhlaWdodCB9LCAwLCB7IHNjYWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGRyYXdCb2FyZEZyb250KGdhbWVCb2FyZCwgY29udGV4dCwgc3RhdGUpIHtcbiAgICBnYW1lQm9hcmQudGlsZXMuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY29sdW1uSW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNlbGxPcmlnaW4gPSB7XG4gICAgICAgICAgICAgICAgeDogYm9hcmRPcmlnaW4ueCArIHJvd0luZGV4ICogdGlsZVNpemUud2lkdGgsXG4gICAgICAgICAgICAgICAgeTogYm9hcmRPcmlnaW4ueSArIGNvbHVtbkluZGV4ICogdGlsZVNpemUuaGVpZ2h0LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRyYXdTcHJpdGUoZ2V0U3ByaXRlKHN0YXRlLCAnYm9hcmQtcG9zaXRpb24tZnJvbnQnKSwgY29udGV4dCwgY2VsbE9yaWdpbiwgMCwgeyBzY2FsZSB9KTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdTcHJpdGUoZ2V0U3ByaXRlKHN0YXRlLCAnYm9hcmQtY29sdW1uLXRvcC1iYWNrJyksIGNvbnRleHQsIHsgeDogY2VsbE9yaWdpbi54LCB5OiBjZWxsT3JpZ2luLnkgLSA4IH0sIDAsIHsgc2NhbGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocm93SW5kZXggPT09IDAgJiYgY29sdW1uSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBkcmF3U3ByaXRlKGdldFNwcml0ZShzdGF0ZSwgJ2JvYXJkLWNvcm5lci10b3AtbGVmdC1iYWNrJyksIGNvbnRleHQsIHsgeDogY2VsbE9yaWdpbi54IC0gOCwgeTogY2VsbE9yaWdpbi55IC0gOCB9LCAwLCB7IHNjYWxlIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJvd0luZGV4ID09PSBnYW1lQm9hcmQudGlsZXMubGVuZ3RoIC0gMSAmJiBjb2x1bW5JbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRyYXdTcHJpdGUoZ2V0U3ByaXRlKHN0YXRlLCAnYm9hcmQtY29ybmVyLXRvcC1yaWdodC1iYWNrJyksIGNvbnRleHQsIHsgeDogY2VsbE9yaWdpbi54ICsgdGlsZVNpemUud2lkdGgsIHk6IGNlbGxPcmlnaW4ueSAtIDggfSwgMCwgeyBzY2FsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5nYW1lLnN0YXJ0KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9