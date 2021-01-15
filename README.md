## Official document

- 仅推荐英文官网 [https://webpack.js.org/](https://webpack.js.org/)
- 截止目前的版本 [Latest release](https://github.com/webpack/webpack/releases/tag/v5.14.0)

## Tutorial materials

- 阮一峰老师 [ruanyf/webpack-demos](https://github.com/ruanyf/webpack-demos)

## Books and blogs

- 电子书和实体书 [gwuhaolin/dive-into-webpack/深入浅出 Webpack](https://github.com/gwuhaolin/dive-into-webpack)
- Webpack 4 和单页应用入门 [wallstreetcn/webpack-and-spa-guide](https://github.com/wallstreetcn/webpack-and-spa-guide)

## Table of Contents

1. [about webpack & webpack-cli](#demo-01--about-webpack--webpack-cli-source-code)

## Demo 01 : about webpack & webpack-cli ([Source-code](https://github.com/yayxs/webpack-learn/tree/main/demo01))  [:top:](#table-of-contents)

```sh
ls
LICENSE  package.json  README.md
```

```sh
// 新建demo01
mkdir demo01
yarn init --y
```

初始化项目，新建工具方法，分别使用`esm` `commonjs`

```sh
mkdir src && cd src && touch commonjs.util.js && touch esm.util.js
```

```js
// commonjs.util.js
const add = (a, b) => a + b;

module.exports = {
  add,
};
```

```js
// esm.util.js
const sum = (x, y) => x + y;

export default sum;
```

In `index.html` We can load

```html
<body>
  <script src="./src/index.js"></script>
</body>
```

will `error`

```js
// xx Uncaught SyntaxError: Cannot use import statement outside a module 
```
and 

```js
// xx index.js:1 Uncaught ReferenceError: require is not defined
    // at index.js:1
```

这时候借助 `webpack` 和 `webpack-cli` 来打包不同的`模块化语法` 可以参考[https://javascript.info/modules](https://javascript.info/modules)

```sh
cd demo01 && yarn add webpack -D
```
will `info`

```shell
webpack
CLI for webpack must be installed.
  webpack-cli (https://github.com/webpack/webpack-cli)

We will use "yarn" to install the CLI via "yarn add -D webpack-cli".
Do you want to install 'webpack-cli' (yes/no):
```

源码对应的位置 

```js


/**
 * @typedef {Object} CliOption
 * @property {string} name display name
 * @property {string} package npm package name
 * @property {string} binName name of the executable file
 * @property {boolean} installed currently installed?
 * @property {string} url homepage
 */

/** @type {CliOption} */
const cli = {
	name: "webpack-cli",
	package: "webpack-cli",
	binName: "webpack-cli",
	installed: isInstalled("webpack-cli"),
	url: "https://github.com/webpack/webpack-cli"
};

if (!cli.installed) {
	const path = require("path");
	const fs = require("graceful-fs");
	const readLine = require("readline");

	const notify =
		"CLI for webpack must be installed.\n" + `  ${cli.name} (${cli.url})\n`;

	console.error(notify);

	let packageManager;

	if (fs.existsSync(path.resolve(process.cwd(), "yarn.lock"))) {
		packageManager = "yarn";
	} else if (fs.existsSync(path.resolve(process.cwd(), "pnpm-lock.yaml"))) {
		packageManager = "pnpm";
	} else {
		packageManager = "npm";
	}

	const installOptions = [packageManager === "yarn" ? "add" : "install", "-D"];

	console.error(
		`We will use "${packageManager}" to install the CLI via "${packageManager} ${installOptions.join(
			" "
		)} ${cli.package}".`
	);
// and so on
```

成功之后的打包结果

```shell
asset main.js 210 bytes [compared for emit] [minimized] (name: main)
orphan modules 53 bytes [orphan] 1 module
./src/index.js + 1 modules 175 bytes [built] [code generated]
./src/utils/commonjs.util.js 64 bytes [built] [code generated]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

webpack 5.14.0 compiled with 1 warning in 209 ms
```

```js
// root/dist/main.js
(()=>{var r={35:r=>{r.exports={add:(r,t)=>r+t}}},t={};function e(s){if(t[s])return t[s].exports;var o=t[s]={exports:{}};return r[s](o,o.exports,e),o.exports}(()=>{"use strict";const{add:r}=e(35);r(1,2)})()})();
```

替换`index.html` 中的脚本 

```html
<body>
    <!-- <script src="./src/index.js" type="module"></script> -->
    <script src="./dist/main.js"></script>
  </body>
```