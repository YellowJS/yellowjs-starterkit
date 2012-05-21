oo.define({
    "viewportSelector": "#viewport"
});

oo.bootstrap(function (oo) {

    //create routes
    oo.getRouter().addRoutes({
        'index': {
            url: '/index',
            controller: 'index',
            action: 'index'
        }
    }).init();

    // // layout
    // (function (oo) {
    //     // example :
    //     oo.createElement('button', {
    //         el: '#globalnav-nav #item-xxx',
    //         onrelease: function onrelease () {
    //             // ...
    //         }
    //     });
    // })(oo);

    
});