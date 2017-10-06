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

[![Build Status](https://img.shields.io/travis/sridharmallela/versions-checker.svg?style=plastic)](https://travis-ci.org/sridharmallela/versions-checker) 
[![codecov](https://codecov.io/gh/sridharmallela/versions-checker/branch/master/graph/badge.svg)](https://codecov.io/gh/sridharmallela/versions-checker)
[![Quality Gate](https://sonarcloud.io/api/badges/gate?key=com.sridharmallela.projects.versions-checker:master)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)
[![Lines of Code](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=ncloc)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)
[![Lines of Code](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=ncloc)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)

[![Bugs](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=bugs)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)
[![Code Smells](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=code_smells)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)
[![Critical Violations](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=critical_violations)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)
[![Blocker Violations](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=blocker_violations)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)
[![Technical Debt Ratio](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=sqale_debt_ratio)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)

[![Security Ratings](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=new_security_rating)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)
[![Reliability Ratings](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=new_reliability_rating)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)
[![Maintainability Ratings](https://sonarcloud.io/api/badges/measure?key=com.sridharmallela.projects.versions-checker:master&metric=new_maintainability_rating)](https://sonarcloud.io/dashboard/index/com.sridharmallela.projects.versions-checker:master)

[![node](https://img.shields.io/node/v/sridharmallela/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)
[![Dependencies](https://img.shields.io/david/sridharmallela/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)
[![Dev Dependencies](https://img.shields.io/david/dev/sridharmallela/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)
[![Optional Dependencies](https://img.shields.io/david/optional/sridharmallela/versions-checker.svg?style=plastic)](https://www.npmjs.com/package/versions-checker)

[![GitHub forks](https://img.shields.io/github/forks/sridharmallela/versions-checker.svg?style=social&label=Fork)](https://github.com/sridharmallela/versions-checker/)
[![GitHub stars](https://img.shields.io/github/stars/sridharmallela/versions-checker.svg?style=social&label=Star)](https://github.com/sridharmallela/versions-checker/)
[![GitHub watchers](https://img.shields.io/github/watchers/sridharmallela/versions-checker.svg?style=social&label=Watch)](https://github.com/sridharmallela/versions-checker/)

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
            - [Karma (-k|--karma)](#karma--k--karma)
            - [gulp (--gulp)](#gulp---gulp)
            - [grunt (--grunt)](#grunt---grunt)
            - [eslint (-e|--eslint)](#eslint--e--eslint)
            - [tslint (-t|--tslint)](#tslint--t--tslint)
            - [nvm (--nvm)](#nvm---nvm)
            - [n (--n-mac)](#n---n-mac)
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
    -k  --karma [version]   check karma version
        --gulp [version]    check gulp version
        --grunt [version]   check grunt version
    -e  --eslint [version]  check eslint version
    -t  --tslint [version]  check tslint version
        --nvm [version]     check nvm version
        --n-mac [version]   check n version
    -h, --help              output usage information

  Examples:

    $ versions-checker --node ">=4.2.1"
    $ versions-checker --help
```


<a id="markdown-non-cli-1" name="non-cli-1"></a>
### Non CLI

```js
    var checker = require('versions-checker');

    // returns boolean
    const isValid = checker.validate({
        node: '>=6.9.5',
        npm: '>1',
        yarn: '0.24 || 0.25',
        git: '2.14',
        karma: '<1.7',
        gulp: '1',
        grunt: '1.5',
        eslint: '1.5.6',
        tslint: '>=1.4',
        nvm: '=1.5',
        n: '=1.5.6'
    });

    const isNodeValid = checker.validate({ node: '6.9.5'});

    const versions = checker.checkAll();

    console.log('node version is ' + versions.node);
    console.log('npm version is ' + versions.node);
```

```ts
    import { validate, checkAll } from 'versions-checker';

    // returns boolean
    const isValid = validate({
        node: '>=6.9.5',
        npm: '>1',
        yarn: '0.24 || 0.25',
        git: '2.14',
        karma: '<1.7',
        gulp: '1',
        grunt: '1.5',
        eslint: '1.5.6',
        tslint: '>=1.4',
        nvm: '=1.5',
        n: '=1.5.6'
    });

    const isNodeValid = validate({ node: '6.9.5'});

    const versions = checkAll();

    console.log('node version is ' + versions.node);
    console.log('npm version is ' + versions.node);
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

* validates input versions against actual versions installed.


<a id="markdown-checkall" name="checkall"></a>
#### checkAll

* prints all the installed versions.


<a id="markdown-options" name="options"></a>
### Options

<a id="markdown-help--h--help" name="help--h--help"></a>
#### help (-h|--help) 

* specifies how to use versions-checker

<a id="markdown-version---version" name="version---version"></a>
#### version (--version)

* specifies which version of versions-checker.

<a id="markdown-all---all" name="all---all"></a>
#### all (--all)

* specifies to print installed versions.

<a id="markdown-silent--s--silent" name="silent--s--silent"></a>
#### silent (-s|--silent)

* specifies to not exit command line if versions dont match.

<a id="markdown-node--n--node" name="node--n--node"></a>
#### node (-n|--node)

* checks which version of node is being used, and compares it with user input version.

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

* checks which version of npm is being used, and compares it with user input version.

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

* checks which version of yarn is being used, and compares it with user input version.

```bash
    $ versions-checker --yarn "0.27"
        yarn: 0.27.5
    $ versions-checker -y "0.27.5"
        yarn: 0.27.5
```

<a id="markdown-git--g--git" name="git--g--git"></a>
#### Git (-g|--git)

* checks which version of git is being used, and compares it with user input version.

```bash
    $ versions-checker -g "2"
        git: 2.14.1
    $ versions-checker --git "2.14"
        git: 2.14.1
```

<a id="markdown-karma--k--karma" name="karma--k--karma"></a>
#### Karma (-k|--karma)

* checks which version of karma is being used, and compares it with user input version.

```bash
    $ versions-checker --karma "1"
        karma: 1.6.0
    $ versions-checker -k "<1.7"
        karma: 1.6.0
```

<a id="markdown-gulp---gulp" name="gulp---gulp"></a>
#### gulp (--gulp)

* checks which version of gulp is being used, and compares it with user input version.

```bash
    $ versions-checker --gulp ">=3.5"
        gulp: 1033083.9.1
```

<a id="markdown-grunt---grunt" name="grunt---grunt"></a>
#### grunt (--grunt)

* checks which version of grunt is being used, and compares it with user input version.

```bash
    $ versions-checker --grunt "2"
        grunt: 1.2.0 but expected is 2
    $ versions-checker --grunt "1"
        grunt: 1.2.0
```

<a id="markdown-eslint--e--eslint" name="eslint--e--eslint"></a>
#### eslint (-e|--eslint)

* checks which version of eslint is being used, and compares it with user input version.

```bash
    $ versions-checker --eslint "4.5"
        eslint: 4.5.0
    $ versions-checker -e "4"
        eslint: 4.5.0
```

<a id="markdown-tslint--t--tslint" name="tslint--t--tslint"></a>
#### tslint (-t|--tslint)

* checks which version of tslint is being used, and compares it with user input version.

```bash
    $ versions-checker -t "5"
        tslint: 5.7.0
    $ versions-checker --tslint "5.7"
        tslint: 5.7.0
```

<a id="markdown-nvm---nvm" name="nvm---nvm"></a>
#### nvm (--nvm)

* checks which version of npm is being used, and compares it with user input version.

```bash
    $ versions-checker --nvm "5"
        nvm: 4.21.9 but expected is 5
    $ versions-checker --n-mac "4"
        nvm: 4.21.9
```

<a id="markdown-n---n-mac" name="n---n-mac"></a>
####  n (--n-mac)

* checks which version of npm is being used, and compares it with user input version.

```bash
    $ versions-checker --n-mac "3"
        n: 2.1.7 but expected is 3
    $ versions-checker --n-mac "2"
        n: 2.1.7
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
