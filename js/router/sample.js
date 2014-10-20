define(
    [   'jquery',
        'underscore',
        'backbone',

    ],
    function (
        jquery,
        underscore,
        backbone) {
    return {
        init: function ()
        {
            var Router=Backbone.Router.extend(
            {
                routes:{
                    'add_item':'add_item',
                    '*':'initialize'

                },
                initialize:function()
                {
                  

                }



            });
            var router=new Router();
            router.history.start();

        }
    }
});
