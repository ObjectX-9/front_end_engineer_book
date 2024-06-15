---
group:
  title: 00实战搭建&部署篇
  order: 0
title: 1.项目初始化&配置
order: 2
# 这个可以将写的组件设置为demo在右侧展示
# demo: /
---
## package.json

package.json 是基于 Node.js 生态系统的任何项目（尤其是前端项目）的核心文件之一。它在项目中扮演了多个重要角色：

*   **项目元数据（Metadata）**: 它包含了项目的元数据，如项目名称、版本、描述、作者、许可证等。
*   **依赖管理（Dependency Management）**: 它列出了项目所依赖的npm包及其版本，这包括dependencies和devDependencies等。
*   **脚本（Scripts）**: scripts字段允许定义可以通过npm run命令执行的脚本，使得启动、构建、测试和部署等操作可以自动化。
*   **版本控制（Version control）**: 通过version字段指定，可以帮助管理项目的发布和版本控制。
*   **配置平台（Platform Config）**: 它可以指明项目运行所需的 Node.js 或 npm 版本，有助于确保一致的开发环境。

```js
yarn init -y
```

```json
{
  "name": "lint_demo",
  "version": "1.0.0",
  "description": "a lint demo ",
  "main": "dist/boundle.js",
  "author": "xxx",
  "license": "MIT",
  "private": false
}

```

## LICENSE

LICENSE文件是指软件项目中包含的许可证文件，用于规定该软件在何种条件下可以被使用、复制、修改和分发。LICENSE文件通常包含了开源许可证的全文或摘要，以及适用该许可证的条款和条件。在开源软件项目中，LICENSE文件是非常重要的，它定义了开发者和用户之间的权利和责任，确保了代码的合法使用和共享。

常见的开源许可证包括MIT许可证、GNU通用公共许可证（GPL）、Apache许可证等。每种许可证都有不同的要求和限制，开发者在选择和使用许可证时需要仔细考虑项目的需求和目标。

可以在[choosealicense](https://choosealicense.com/)网站选择一个合适的

## .gitignore

`.gitignore`文件是用来指定哪些文件或目录不应该被Git版本控制系统跟踪的配置文件。在项目中，有些文件（如编译生成的文件、日志文件、临时文件等）不应该被包含在版本控制中，因为它们可能包含敏感信息、过时的内容或者不必要的文件。通过.gitignore文件，可以告诉Git哪些文件应该被忽略，不会被提交到代码仓库中。

使用 vscode 的 gitignore 插件，下载安装该插件之后， ctrl+shift+p 召唤命令面板，输入 Add gitignore 命令，即可在输入框输入系统或编辑器名字，来自动添加需要忽略的文件或文件夹至 .gitignore 中。

## .npmrc | .yarnrc

`npmrc` 和 `yarnrc` 是两个配置文件，用于配置 npm 和 Yarn 包管理器的行为和设置。它们分别用于配置 npm 和 Yarn 的命令行工具的行为，例如设置镜像源、代理、缓存路径等。

**npmrc**

`npmrc` 是 npm 的配置文件，通常是 `.npmrc` 文件。你可以在项目级别或全局级别创建 `.npmrc` 文件来配置 npm 的行为。

**配置方式：**

1.  **项目级别配置：** 在项目根目录下创建 `.npmrc` 文件，并添加所需配置。
2.  **全局级别配置：** 使用命令 `npm config edit` 打开全局配置文件，并添加所需配置。

**常见配置项：**

*   `registry`：设置包的下载源。
*   `proxy` 和 `https-proxy`：设置代理服务器。
*   `cache`：设置包的缓存路径。
*   `prefix`：设置全局安装包的路径。
*   `strict-ssl`：是否强制使用 SSL。

示例

```js
# .npmrc

# 设置下载源为淘宝镜像，淘宝证书到期了，换了
registry=https://registry.npm.taobao.org/

# 设置代理服务器
proxy=http://proxy.example.com:8080
https-proxy=http://proxy.example.com:8080

# 设置包的缓存路径
cache=/path/to/npm-cache

# 设置全局安装包的路径
prefix=/path/to/npm-global
```

**yarnrc**

`yarnrc` 是 Yarn 的配置文件，通常是 `.yarnrc` 或 `.yarnrc.yml` 文件。你可以在项目级别或全局级别创建 `.yarnrc` 文件来配置 Yarn 的行为。

**配置方式：**

1.  **项目级别配置：** 在项目根目录下创建 `.yarnrc` 文件，并添加所需配置。
2.  **全局级别配置：** 使用命令 `yarn config set` 添加全局配置。

**常见配置项：**

*   `registry`：设置包的下载源。
*   `proxy` 和 `https-proxy`：设置代理服务器。
*   `cache-folder`：设置包的缓存路径。
*   `preferred-cache-folder`：设置首选缓存路径。
*   `nodeLinker`：设置 Node 模块链接器。

**示例：**

    # .yarnrc

    # 设置下载源为淘宝镜像，淘宝证书到期了，换了
    registry "https://registry.npm.taobao.org/"

    # 设置代理服务器
    proxy "http://proxy.example.com:8080"
    https-proxy "http://proxy.example.com:8080"

    # 设置包的缓存路径
    cache-folder "/path/to/yarn-cache"

    # 设置首选缓存路径
    preferred-cache-folder "/path/to/preferred-cache"

配置文件中的每一行都应该是一个配置项，以 `key value` 的格式表示。你可以根据需要添加或修改这些配置项来定制 npm 和 Yarn 的行为。

## README.md

README.md文件通常是一个项目的说明文档，用于向其他开发者或用户介绍项目的内容、使用方法、贡献指南等信息。.md代表Markdown格式，Markdown是一种轻量级的标记语言，用于简单地排版文档。

README.md文件通常包含以下内容：

*   项目名称和简介：简要介绍项目的名称、功能和用途。
*   安装说明：指导用户如何安装项目的依赖或部署项目。
*   使用方法：说明如何使用项目，包括配置、运行命令等。
*   示例：提供一些示例代码或截图，展示项目的功能。
*   贡献指南：说明如何贡献代码或报告问题。
*   版本历史：列出项目的版本历史和更新内容。
*   许可证信息：说明项目的许可证类型和使用限制。
