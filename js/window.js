/**
 * @author Perlou
 * @window.js
 * @return {Func} Window
 */

define(['widget','jquery','jqueryUI'], function(widget, $, $UI){

	function Window(){
		this.config = {
			width: 500,
			height: 300,
			content: '',
			title: '系统提示',
			callback: null,
			hasCloseBtn: false,
			hasMask: true,
			btnText: '确定',
			isDraggable: true,
			callbackForAlertBtn: null,
			callbackForCloseBtn: null
		};

		this.handlers = {};
	}

	Window.prototype = $.extend({}, new widget.Widget());

	console.log(Window.prototype);

	Window.prototype.alert = function(config){
		var that = this;
		var Config = $.extend(this.config, config);
		var boundingBox = $('<div class="window_boundingBox">' +
								'<div class="window_header">'+ Config.title +'</div>' +
								'<div class="window_body">'+ Config.content +'</div>' +
								'<div class="window_footer"><button>'+ Config.btnText +'</button></div>'+
							'</div>');
		var btn = boundingBox.find('.window_footer button');
		var mask = null;

		if(Config.hasMask){
			mask = $('<div class="window_mask"></div>');
			mask.appendTo('body');
		}

		boundingBox.appendTo('body');
		btn.click(function(){
			Config.callback && Config.callback();
			boundingBox.remove();
			mask && mask.remove();
			that.fire('alert');
		});

		boundingBox.css({
			width: Config.width + 'px',
			height: Config.height + 'px',
			left: ( Config.x || (window.innerWidth - Config.width)/2 || (document.documentElement.clientWidth -Config.width )/2 )+ 'px',
			top: ( Config.y || (window.innerHeight - Config.height)/2 || (document.documentElement.clientHeight -Config.height )/2 )+ 'px'
		});

		if(Config.callbackForCloseBtn){			
			this.on('close', Config.callbackForCloseBtn);
		}

		if(Config.callbackForAlertBtn){
			this.on('alert', Config.callbackForAlertBtn);
		}

		if(Config.isDraggable){
			boundingBox.draggable();
		}

		if(Config.hasCloseBtn){
			var close = $('<span class="window_close_btn">x</span>');
			close.appendTo(boundingBox);
			close.click(function(){
				boundingBox.remove();
				mask && mask.remove();
				that.fire('close');
			});
		}

		return this;
	};

	Window.prototype.confirm = function(){

	};

	return {
		Window: Window
	};

});