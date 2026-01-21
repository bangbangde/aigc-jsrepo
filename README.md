# AIGC JSRepo

基于 [jsrepo](https://www.jsrepo.dev/) 的共享库项目，用于在多个项目中共享代码片段。

## 模块开发

模块开发完成后，需要将模块添加到 `jsrepo.config.mts` 文件中，并执行 `pnpm build` 命令更新注册文件。

## 其它项目中如何使用

### 1. 初始化 jsrepo

```bash
npx jsrepo init
```
这将生成 `jsrepo.config.mts` 文件


### 2. 编辑 jsrepo.config.mts

在 `jsrepo.config.mts` 文件中，需要配置 `registries` 和 `paths` 两个字段。

```js
import { defineConfig } from "jsrepo";

export default defineConfig({
  // configure where stuff comes from here
  registries: ["https://github.com/bangbangde/aigc-jsrepo"],
  // configure were stuff goes here
  paths: {
    lib: './src/lib',
	hook: './src/hook',
	component: './src/component'
  },
});
```

### 3. 添加依赖
```bash
npx jsrepo add
```

### 4. 更新依赖
```bash
npx jsrepo update
```

### 注意

在添加或更新模块前，建议清理工作区并创建新的临时分支，因为添加或更新 jsrepo 模块可能会导致代码冲突。