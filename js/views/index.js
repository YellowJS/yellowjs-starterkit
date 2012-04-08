oo.createPanel({
    id:'home',
    init: function init () { this.setTemplate(document.querySelector('#tpl-home').text); },
    onEnabled: function onEnabled () {
        
        // this.addEl(oo.createElement('button', {
        //     el: '#home-container div:nth-child(1)',
        //     onrelease: function () {
        //         oo.getRouter().load('/another-page');
        //     }
        // }));
    }

});
