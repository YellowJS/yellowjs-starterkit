(function (oo) {
    
    var HomePanel = oo.createPanel({
        id:'home',
        init: function init () { this.setTemplate(document.querySelector('#tpl-home').text); },
        onEnabled: function onEnabled () {
            
            // this.addEl(oo.createElement('button', {
            //     el: '#home-container div:nth-child(1)',
            //     onrelease: function () {
            //         oo.getRouter().load('/article-list');
            //     }
            // }));
        },
        animShow: function animShow (direction) {
            if (oo.getViewport().getFocusedPanel()) {
                HomePanel.Super.prototype.animShow.call(this, oo.view.Viewport.ANIM_LTR);
            } else {
                this.setDisplay('block', '');
            }
        }

    });

})(oo);