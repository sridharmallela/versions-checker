<a id="markdown-versions-checker" name="versions-checker"></a>

# Versions Checker

[![npm](https://img.shields.io/npm/v/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)
[![npm](https://img.shields.io/npm/dw/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)
[![npm](https://img.shields.io/npm/dm/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)
[![npm](https://img.shields.io/npm/dy/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)
[![npm](https://img.shields.io/npm/dt/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)

[![GitHub tag](https://img.shields.io/github/tag/sridharmallela/versions-checker.svg?style=plastic)](https://github.com/sridharmallela/versions-checker/tags)
[![GitHub release](https://img.shields.io/github/release/sridharmallela/versions-checker.svg?style=plastic)](https://github.com/sridharmallela/versions-checker/releases)
[![GitHub issues](https://img.shields.io/github/issues/sridharmallela/versions-checker.svg?style=plastic)](https://github.com/sridharmallela/versions-checker/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/sridharmallela/versions-checker.svg?style=plastic)](https://github.com/sridharmallela/versions-checker/pulls)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/versions-checker/master/LICENSE)

![introduction](https://github.com/sridharmallela/versions-checker/blob/master/assets/intro.gif?raw=true)

Check installed versions of node, npm, yarn, and git

<a id="markdown-table-of-contents" name="table-of-contents"></a>

## Table of Contents

<!-- TOC -->

- [Versions Checker](#versions-checker)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Global CLI](#global-cli)
    - [Non CLI](#non-cli)
  - [Usage](#usage)
    - [Non CLI](#non-cli-1)
    - [NPM Script](#npm-script)
      - [validate](#validate)
      - [checkAll](#checkall)
    - [Options](#options)
      - [help (-h|--help)](#help--h--help)
      - [version (--version)](#version---version)
      - [all (--all)](#all---all)
      - [silent (-s|--silent)](#silent--s--silent)
      - [node (-n|--node)](#node--n--node)
      - [npm (-m|--npm)](#npm--m--npm)
      - [yarn (-y|--yarn)](#yarn--y--yarn)
      - [Git (-g|--git)](#git--g--git)
      - [eslint (-e|--eslint)](#eslint--e--eslint)
  - [Updating versions-checker](#updating-versions-checker)
  - [License](#license)

<!-- /TOC -->

<a id="markdown-installation" name="installation"></a>

## Installation

<a id="markdown-global-cli" name="global-cli"></a>

### Global CLI

```bash
    $ npm install -g versions-checker
```

<a id="markdown-non-cli" name="non-cli"></a>

### Non CLI

```bash
    $ npm install --save-dev versions-checker
```

<a id="markdown-usage" name="usage"></a>

## Usage

```bash
$ versions-checker --help

  Usage: versions-checker [options]

  Options:

        --version           output the version number
        --all               lists all installed versions
    -s  --silent            will not exit even versions match
    -n  --node [version]    check node version
    -m  --npm [version]     check npm version
    -y  --yarn [version]    check yarn version
    -g  --git [version]     check git version
    -e  --eslint [version]  check eslint version
    -h, --help              output usage information

  Examples:

    $ versions-checker --node ">=4.2.1"
    $ versions-checker --help
```

<a id="markdown-non-cli-1" name="non-cli-1"></a>

### Non CLI

```js
var checker = require("versions-checker");

// returns boolean
const isValid = checker.validate({
  node: ">=6.9.5",
  npm: ">1",
  yarn: "0.24 || 0.25",
  git: "2.14",
  eslint: "1.5.6"
});

const isNodeValid = checker.validate({ node: "6.9.5" });

const versions = checker.checkAll();

console.log("node version is " + versions.node);
console.log("npm version is " + versions.node);
```

```ts
import { validate, checkAll } from "versions-checker";

// returns boolean
const isValid = validate({
  node: ">=6.9.5",
  npm: ">1",
  yarn: "0.24 || 0.25",
  git: "2.14",
  eslint: "1.5.6"
});

const isNodeValid = validate({ node: "6.9.5" });

const versions = checkAll();

console.log("node version is " + versions.node);
console.log("npm version is " + versions.node);
```

<a id="markdown-npm-script" name="npm-script"></a>

### NPM Script

```json
// package.json
{
  "scripts": {
    "check-versions": "./node_modules/.bin/versions-checker --node \">=4\" --npm \">=2\""
  }
}
```

```bash
    $ npm run check-versions

    > versions-checker --node ">= 4.0.0" --npm ">=2.0.0"

        node: 6.9.5
        npm: 5.2.0
```

<a id="markdown-validate" name="validate"></a>

#### validate

- validates input versions against actual versions installed.

<a id="markdown-checkall" name="checkall"></a>

#### checkAll

- prints all the installed versions.

<a id="markdown-options" name="options"></a>

### Options

<a id="markdown-help--h--help" name="help--h--help"></a>

#### help (-h|--help)

- specifies how to use versions-checker

<a id="markdown-version---version" name="version---version"></a>

#### version (--version)

- specifies which version of versions-checker.

<a id="markdown-all---all" name="all---all"></a>

#### all (--all)

- specifies to print installed versions.

<a id="markdown-silent--s--silent" name="silent--s--silent"></a>

#### silent (-s|--silent)

- specifies to not exit command line if versions dont match.

<a id="markdown-node--n--node" name="node--n--node"></a>

#### node (-n|--node)

- checks which version of node is being used, and compares it with user input version.

```bash
    $ versions-checker --node ">4.5"
        node: 6.9.5
    $ versions-checker --node "<4.5"
        node: 6.9.5 but expected is <4.5
    $ versions-checker --node 4
        node: 6.9.5 but expected is 4
    $ versions-checker --node 6
        node: 6.9.5
    $ versions-checker -n 6.9
        node: 6.9.5
    $ versions-checker -n 6.10
        node: 6.9.5 but expected is 6.10
```

<a id="markdown-npm--m--npm" name="npm--m--npm"></a>

#### npm (-m|--npm)

- checks which version of npm is being used, and compares it with user input version.

```bash
    $ versions-checker --npm ">=2.5.0"
        npm: 5.2.0
    $ versions-checker --npm ">2.5.0"
        npm: 5.2.0
    $ versions-checker -m ">2.5"
        npm: 5.2.0
    $ versions-checker -m "<5.3"
        npm: 5.2.0
```

<a id="markdown-yarn--y--yarn" name="yarn--y--yarn"></a>

#### yarn (-y|--yarn)

- checks which version of yarn is being used, and compares it with user input version.

```bash
    $ versions-checker --yarn "0.27"
        yarn: 0.27.5
    $ versions-checker -y "0.27.5"
        yarn: 0.27.5
```

<a id="markdown-git--g--git" name="git--g--git"></a>

#### Git (-g|--git)

- checks which version of git is being used, and compares it with user input version.

```bash
    $ versions-checker -g "2"
        git: 2.14.1
    $ versions-checker --git "2.14"
        git: 2.14.1
```

<a id="markdown-eslint--e--eslint" name="eslint--e--eslint"></a>

#### eslint (-e|--eslint)

- checks which version of eslint is being used, and compares it with user input version.

```bash
    $ versions-checker --eslint "4.5"
        eslint: 4.5.0
    $ versions-checker -e "4"
        eslint: 4.5.0
```

<a id="markdown-updating-versions-checker" name="updating-versions-checker"></a>

## Updating versions-checker

Global package:

```bash
    $ npm uninstall -g versions-checker
    $ npm cache clean
    $ npm install -g versions-checker
```

<a id="markdown-license" name="license"></a>

## License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
