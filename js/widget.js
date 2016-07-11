/**
 * @author Perlou
 * @widget.js
 * @return {Func} Widget
 */

define(['jquery'], function($){

	function Widget(){
		this.handlers = {};
		this.boundingBox = null;
	}

	Widget.prototype.on = function(type, handler){
		if(typeof this.handlers[type] == 'undefined'){
			this.handlers[type] = [];
		}
		this.handlers[type].push(handler);

		return this;
	};

	Widget.prototype.fire = function(type, data){
		if(this.handlers[type] instanceof Array){
			var handlers = this.handlers[type];
			for(var i=0; i<handlers.length; i++){
				handlers[i](data);
			}
		}
	};

	Widget.prototype.renderUI = function(){
		
	};

	Widget.prototype.renderUI = function(){
		
	};
	
	Widget.prototype.renderUI = function(){
		
	};

	return {
		Widget: Widget
	};

});