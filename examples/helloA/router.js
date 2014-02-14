/**
 * @author yuntian203868
 */
define('router',[
  'jquery',
  'underscore',
  'backbone',
  'view/app'],function($,_,Backbone,AppView){ 	
  	
  	  var AppRouter = Backbone.Router.extend({
		    routes: {
		      // Define some URL routes
		      '/home': 'home',
		      'test': 'test',		      
		      // Default
		      '*actions': 'defaultAction'
		    }
      });
     
      var initialize = function(){
      	
      	  var router = new AppRouter();
      	  
      	  router.on("route:home",function(){
      	  	 alert("22");

      	  });
      	  
      	  router.on("route:defaultAction",function(){
      	  	var homeView = new AppView();
      	  });
      	  
      	  Backbone.history.start();
      };
     
	  return {
	  	initialize:initialize
	  };
});
