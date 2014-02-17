({
    appDir: './',
    baseUrl: './',
    dir: '../helloA',
    modules: [
        {
            name: 'main'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
         "json2": "lib/json2",
        "jquery": "lib/jquery",
        "underscore": "lib/underscore",
        "backbone": "lib/backbone",
        "localStorage": "backbone.localStorage",
        "text": "lib/text"
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    }
})
