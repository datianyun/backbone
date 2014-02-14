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
        "json2": "../../test/vendor/json2",
        "jquery": "../../test/vendor/jquery",
        "underscore": "../../test/vendor/underscore",
        "backbone": "../../backbone",
        "localStorage": "backbone.localStorage",
        "text": "../../test/vendor/text"
　　　　}
});



require(['router'], function(Router){
  Router.initialize();
});


