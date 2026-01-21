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
                    path: 'src/hooks/useRequest.js',
                }]
            }
        ],
    },
    // configure where stuff comes from here
    registries: [],
    // configure were stuff goes here
    paths: {},
});