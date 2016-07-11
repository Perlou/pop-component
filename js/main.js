/**
 * @author Perlou
 * @main.js
 */

require.config({
	paths: {
		jquery: '../bower_components/jquery/dist/jquery.min',
		jqueryUI: '../bower_components/jquery-ui/jquery-ui.min'
	}
});

require(['jquery', 'window'], function($,w){
	$('#btn').click(function(){
		var win = new w.Window();
		win.alert({
			title: 'hello',
			content: 'hello',
			callbackForAlertBtn: function(){
				alert(1111);
			}
		}).on('alert', function(){
			alert('click');
		});
	});
	
});