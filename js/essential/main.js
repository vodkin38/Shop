require.config({
    paths: {
        jquery:'essential/jquery',
        underscore: 'essential/underscore',
        backbone: 'essential/backbone',
        sample: 'router/sample',

        /*views*/

        /*mainView:'view/mainview',*/
        itemView:'view/itemview',
        newPopupView:'view/newpopup',

    },
    shim: {
        jquery: {
            exports: 'jquery'
        },

        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        sample: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'sample'
        },
    },

    baseUrl: 'js'
});
require(['sample'],
    function (script) {
        script.init();
    });