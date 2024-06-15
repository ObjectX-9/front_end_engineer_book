---
group:
  title: 00实战搭建&部署篇
  order: 0
title: 5.更新日志changelog
order: 5
# 这个可以将写的组件设置为demo在右侧展示
# demo: /
---
## 配置更新日志changelog

    yarn add conventional-changelog-cli@4.1.0 -D

在 package.json 的 scripts 下增加一个命令：

    {
      "scripts": {
        "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
      },
    }

之后就可以通过 npm run changelog 生成 angular 风格的 changelog ，需要注意的是，上面这条命令产生的 changelog 是基于上次 tag 版本之后的变更（feat、fix 等等）所产生的。
