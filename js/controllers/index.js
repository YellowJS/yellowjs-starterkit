(function (oo) {
    //create controller
    oo.createControllerClass('IndexController', {
        indexAction : function indexAction(){

            // var model = oo.getModel('myModel');

            this._viewport.switchPanel('home', this._Viewport.ANIM_RTL);

        }
    });

})(oo);