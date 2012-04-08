(function (oo) {
    //create controller
    var IndexController = oo.createController({
        indexAction : function indexAction(){
            var v = this.getViewport(), VP = oo.view.Viewport;

            v.switchPanel('home', VP.ANIM_RTL);
        }
    });

    oo.getRouter().addController('IndexController', IndexController);
})(oo);