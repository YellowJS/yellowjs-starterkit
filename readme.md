Hello YellowJS
==============

YellowJS is a HTML5 JS Framework designed to develop mobile applications. this starterkit is aimed to provide a quick code base to easily start any project using yellowjs.

you may check the YellowJS main repository on github : [https://github.com/YellowJS/yellowjs-framework](https://github.com/YellowJS/yellowjs-framework).

This document briefly explain how this starterkit works and can be considered as a tutorial to start using yellowjs


### The files

- index.html  
  is based on "[html5 mobile boilerplate](http://html5boilerplate.com/mobile)" it contains script tag with "text/x-template" as type attribute. YellowJS is fully based on templating this template with the "tpl-home" id is the one wich will be used to render the home panel of your application.

- assets / css folders  
  contains assets like images and css as their name tells it.

- libs folder  
  contains js library

- controllers / models / views folders  
  contains the code of your application each concerns in its folder.

- app.js  
  this is the entry point of your application, you may also write down settings in this file.


### bootstrap

The boostrap function of the yellowjs object lets you add a callback that will be triggerred when the browser and if needed the device (if you use cordova/phonegap) are ready to go.

In a callback function that will be the entry point of your application, you can define a router and its routes configuration.

Routes are defined by three parameters 
- a controller name
- an action name
- an url scheme

    oo.getRouter().addRoutes({
        'index': {
            url: '/index',
            controller: 'index',
            action: 'index'
        }
    })

When the pattern defined by the url parameter is matched in the page's url (hash part of the url in fact), the action that should be a method of the designated controller is called (as it would be expected in a normal MVC design pattern)

Note : the application is "really launched" when the _init_ method of the router is called.

You may define a "pseudo empty" url scheme with only a "/" as pattern in order to handle the default page of your application but yellowjs already handle it by default and if none is defined it tries to call the _indexAction_ method of the _IndexController_ class.

So let's jump into the controller code !


### controller

The code of the IndexController class from the starter kit doesn't do much things, but the single folowing line is enougth to display a panel (a "screen" of our application).

    this._viewport.switchPanel('home', this._Viewport.ANIM_RTL);

The viewport object that is in charge of managing the panel tree of our application is used via its method _switchPanel_ with two arguments: the first one is the identifier of a panel (that has been registered, we will see how later in this document), the second one is optional and define an animation (in this case the panel will appear from right to left).

In the controller you usually use the model to refresh data in order to update the view. to go further you should read the documentation of the model class.

So, we talk about a panel that has been registered in the viewport and which will be displayed by the _switchPanel_ method. let's see how to create that panel.


### view

To create a panel, you simply have to call the _createPanelClass_ function on the yellowjs object, with as argument a litteral object containing the medthods of your own panel class.

In strict terms there is only one required attribute, the id. It must be a string that you'll use in all your application to target the panel instance (we will often refer to this string as the \`panel identifier\`).

In fact you will also defined two other method, the _init_ method and the _onEnabled_ method.

The _init_ method will be automatically called at the end of the constructor execution and can be considered as a way to "extend" contructor behavior without having to override the constructor itself.

Generally the init method is used to set the template that will be used to render the panel's layout.

    this.setTemplate(oo.dom('#tpl-home').html());

Here we look for the node with the "tpl-home" id attribute (the oo.dom method accepts any css selector string) in our page. this node is a script/template node, and its content will be used as template for the panel.

The _onEnabled_ method is a callback method called when the panel template has been rendered and when you can start playing with UI components inside the panel. 

There is no UI component used in this starterkit. We recommand you check the [YellowJS Framework repository](https://github.com/YellowJS/yellowjs-framework) to get more information about how to get more from YellowJS.


