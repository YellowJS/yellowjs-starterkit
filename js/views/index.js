oo.createPanelClass({
    id:'home',
    init: function init () { this.setTemplate(oo.dom('#tpl-home').html()); },
    onEnabled: function onEnabled () {
        
        // this.addEl(oo.createElement('button', {
        //     el: '#home-container div:nth-child(1)',
        //     onrelease: function () {
        //         oo.getRouter().load('/another-page');
        //     }
        // }));
    }

}, {stage: 'main'});
