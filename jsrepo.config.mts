import { defineConfig, repository } from 'jsrepo';

export default defineConfig({
    registry: {
        name: '@aigc/jsrepo',
        outputs: [repository()],
        items: [
            {
                name: 'util',
                type: 'lib',
                files: [{
                    path: 'src/utils.js',
                }]
            },
        ],
    },
    // configure where stuff comes from here
    registries: [],
    // configure were stuff goes here
    paths: {},
});