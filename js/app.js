oo.define({
    "templateEngine": "handlebars",
    "viewportSelector": "#viewport"
});

oo.bootstrap(function (oo) {

    //create routes
    var routesList = {
        'index': {
            url: '/index',
            controller: 'index',
            action: 'index'
        }
    };

    var r = oo.getRouter();
    r.addRoutes(routesList);
    r.init();


    // layout
    (function (oo) {
        // example :
        // oo.createElement('button', {
        //     el: '#globalnav-nav #item-xxx',
        //     onrelease: function onrelease () {
        //         // ...
        //     }
        // });
    })(oo);

    
});