define(
    [   'jquery',
        'underscore',
        'backbone',

    ],
    function (
        jquery,
        underscore,
        backbone) {

        var NewPopup=Backbone.View.extend(
            {
                number:5


            }
        );

        var newPopup=new NewPopup();
    });