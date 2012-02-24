(function (oo) {
    //create controller
    var IndexController = oo.createController({
        indexAction : function indexAction(){
            var v = this.getViewport();

            v.switchPanel('home', oo.view.Viewport.ANIM_LTR);
        }
    });

    oo.getRouter().addController('IndexController', IndexController);
})(oo);