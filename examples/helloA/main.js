/**
 * @author yuntian203868
 */

require.config({
	shim: {
　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},
　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　}
　　　　},
　　　　paths: {
        "json2": "lib/json2",
        "jquery": "lib/jquery",
        "underscore": "lib/underscore",
        "backbone": "lib/backbone",
        "localStorage": "backbone.localStorage",
        "text": "lib/text"
　　　　}
});



require(['router'], function(Router){
  Router.initialize();
});








