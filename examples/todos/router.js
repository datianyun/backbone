/**
 * @author yuntian203868
 */
define([
	'json2',
  'jquery',
  'underscore',
  'backbone',
  'view/app'],function(json2,$,_,Backbone,AppView){ 	
  	
  	  var AppRouter = Backbone.Router.extend({
		    routes: {
		      // Define some URL routes
		      'home': 'home',
		      'test': 'test',		      
		      // Default
		      '*actions': 'defaultAction'
		    }
      });
     
      var initialize = function(){
      	
      	  var router = new AppRouter();
      	  
      	  router.on("route:home",function(){
      	  	var homeView = new AppView();
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
