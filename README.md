<a id="markdown-versions-checker" name="versions-checker"></a>
# Versions Checker 

[![Build Status](https://travis-ci.org/sridharmallela/versions-checker.svg?branch=master)](https://travis-ci.org/sridharmallela/versions-checker) 
[![GitHub issues](https://img.shields.io/github/issues/sridharmallela/versions-checker.svg?style=plastic)](https://github.com/sridharmallela/versions-checker/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=plastic)](https://raw.githubusercontent.com/sridharmallela/versions-checker/master/LICENSE) 

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
            - [validate](#validate)
            - [checkAll](#checkall)
        - [Options](#options)
            - [help (-h|--help)](#help--h--help)
            - [version (--version)](#version---version)
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
    -n  --node [version]    check node version
    -m  --npm [version]     check npm version
    -y  --yarn [version]    check yarn version
    -g  --git [version]     check git version
    -k  --karma [version]   check karma version
    -g  --gulp [version]    check gulp version
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

<a id="markdown-validate" name="validate"></a>
#### validate

validates input versions against actual versions installed.

<a id="markdown-checkall" name="checkall"></a>
#### checkAll

prints all the installed versions.


<a id="markdown-options" name="options"></a>
### Options

<a id="markdown-help--h--help" name="help--h--help"></a>
#### help (-h|--help) 

specifies how to use versions-checker

<a id="markdown-version---version" name="version---version"></a>
#### version (--version)

specifies which version of versions-checker

<a id="markdown-node--n--node" name="node--n--node"></a>
#### node (-n|--node)

checks which version of node is being used, and compares it with user input version.

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

checks which version of npm is being used, and compares it with user input version.

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

checks which version of yarn is being used, and compares it with user input version.

```bash
$ versions-checker --yarn "0.27"
    yarn: 0.27.5
$ versions-checker -y "0.27.5"
    yarn: 0.27.5
```

<a id="markdown-git--g--git" name="git--g--git"></a>
#### Git (-g|--git)

checks which version of git is being used, and compares it with user input version.

```bash
$ versions-checker -g "2"
    git: 2.14.1
$ versions-checker --git "2.14"
    git: 2.14.1
```

<a id="markdown-karma--k--karma" name="karma--k--karma"></a>
#### Karma (-k|--karma)

checks which version of karma is being used, and compares it with user input version.

```bash
$ versions-checker --karma "1"
    karma: 1.6.0
$ versions-checker -k "<1.7"
    karma: 1.6.0
```

<a id="markdown-gulp---gulp" name="gulp---gulp"></a>
#### gulp (--gulp)

checks which version of gulp is being used, and compares it with user input version.

```bash
$ versions-checker --gulp ">=3.5"
    gulp: 1033083.9.1
```

<a id="markdown-grunt---grunt" name="grunt---grunt"></a>
#### grunt (--grunt)

checks which version of grunt is being used, and compares it with user input version.

```bash
$ versions-checker --grunt "2"
    grunt: 1.2.0 but expected is 2
$ versions-checker --grunt "1"
    grunt: 1.2.0
```

<a id="markdown-eslint--e--eslint" name="eslint--e--eslint"></a>
#### eslint (-e|--eslint)

checks which version of eslint is being used, and compares it with user input version.

```bash
$ versions-checker --eslint "4.5"
    eslint: 4.5.0
$ versions-checker -e "4"
    eslint: 4.5.0
```

<a id="markdown-tslint--t--tslint" name="tslint--t--tslint"></a>
#### tslint (-t|--tslint)

checks which version of tslint is being used, and compares it with user input version.

```bash
$ versions-checker -t "5"
    tslint: 5.7.0
$ versions-checker --tslint "5.7"
    tslint: 5.7.0
```

<a id="markdown-nvm---nvm" name="nvm---nvm"></a>
#### nvm (--nvm)

checks which version of npm is being used, and compares it with user input version.

```bash
$ versions-checker --nvm "5"
    nvm: 4.21.9 but expected is 5
$ versions-checker --n-mac "4"
    nvm: 4.21.9
```

<a id="markdown-n---n-mac" name="n---n-mac"></a>
####  n (--n-mac)

checks which version of npm is being used, and compares it with user input version.

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

MIT
