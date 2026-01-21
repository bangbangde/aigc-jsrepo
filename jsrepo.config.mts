import { defineConfig, repository } from 'jsrepo';

export default defineConfig({
    registry: {
        name: '@aigc/jsrepo',
        outputs: [repository()],
        items: [
            {
                name: 'utils',
                type: 'lib',
                files: [{
                    path: 'src/lib/utils.js',
                }]
            },
            {
                name: 'useRequest',
                type: 'hook',
                files: [{
                    path: 'src/hook/useRequest.js',
                }]
            },
            {
                name: 'WelcomBlock',
                type: 'component',
                files: [{
                    path: 'src/component/WelcomBlock.vue',
                }],
                dependencies: ['useRequest'], // 无法自动识别 vue 依赖，需要手动指定
            },
        ],
    },
    // configure where stuff comes from here
    registries: [],
    // configure were stuff goes here
    paths: {},
});