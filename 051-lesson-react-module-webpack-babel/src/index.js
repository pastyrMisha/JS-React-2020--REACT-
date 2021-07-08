// import { btn, Slider as sl } from "./script"; //1)
// const slider = new sl(400, 300, 5); //1)

// import * as total from './script' //2)

// import Slider from "./script"; //3)
// const slider = new Slider(400, 300, 5); //3)
 
// import Slider, {button} from "./script"; //4)
// const slider = new Slider(400, 300, 5); //4)

//5) export default бывает только один раз файле, можно экспортировать что-то только один раз (!)


//6) Как импортируется React (как в 4 примере):
// import React, {Component} from 'react';

//7) Чтобы подключить стили (все это при установленном Webpack, поэтому в путях даже не пишем .js . А реакт вообще записан в зависимости, поэтому в примере 6 просто слово 'react'):
// import './index.css';

/* 8) Ставим WEBPACK:
    - В папке с проектом npm init
    - Сайт https://webpack.js.org/guides/getting-started/
    - npm install webpack webpack-cli --save-dev
    - npx webpack
    В папке dist появился файл main.js, там и есть настройки нашего слайдера и button.
    Можно взять файл webpack.config.js из папки с уроком про webpack (там есть важная вещь watch: true)
*/
// import Slider, {button} from "./script";
// const slider = new Slider(400, 300, 5);
// slider.whoAmI();
// console.log(button());

/* 9) Ставим babel:
    - npm install --save-dev @babel/core @babel/cli @babel/preset-env
    - создаем файл babel.config.json и копируем настройки с сайта babel, добавляя строчку "ie": "10"
    - npx babel src --out-dir src (откуда берем, куда доставляем, доставили сюда же, поэтому НИЖЕ (!) код уже после обработки babel)
*/



"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.symbol.iterator.js");

var _script = _interopRequireWildcard(require("./script"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import { btn, Slider as sl } from "./script"; //1)
// const slider = new sl(400, 300, 5); //1)
// import * as total from './script' //2)
// import Slider from "./script"; //3)
// const slider = new Slider(400, 300, 5); //3)
// import Slider, {button} from "./script"; //4)
// const slider = new Slider(400, 300, 5); //4)
//5) export default бывает только один раз файле, можно экспортировать что-то только один раз (!)
//6) Как импортируется React (как в 4 примере):
// import React, {Component} from 'react';
//7) Чтобы подключить стили (все это при установленном Webpack, поэтому в путях даже не пишем .js . А реакт вообще записан в зависимости, поэтому в примере 6 просто слово 'react'):
// import './index.css';

/* 8) Ставим WEBPACK:
    - В папке с проектом npm init
    - Сайт https://webpack.js.org/guides/getting-started/
    - npm install webpack webpack-cli --save-dev
    - npx webpack
    В папке dist появился файл main.js, там и есть настройки нашего слайдера и button.
    Можно взять файл webpack.config.js из папки с уроком про webpack (там есть важная вещь watch: true)
*/
var slider = new _script.default(400, 300, 5);
slider.whoAmI();
console.log((0, _script.button)());
/* 9) Ставим babel:
    - npm install --save-dev @babel/core @babel/cli @babel/preset-env
    - создаем файл babel.config.json и копируем настройки с сайта babel, добавляя строчку "ie": "10"
    - npx babel src --out-dir src (откуда берем, куда доставляем,)
*/
