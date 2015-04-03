/* jshint ignore:start */

var Main = (function(window, $){

	function init(){
		$('.flexslider').flexslider({
			controlNav: false,
		});
	}

	return{
		init: init
	}

}(window, jQuery));

$(function(){
	Main.init();
});

/* jshint ignore:end */