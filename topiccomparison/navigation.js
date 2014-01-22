(function() {
	var nextSlideKeys = [],
		previousSlideKeys = [];

	nextSlideKeys.push(39, 40); //down and right cursor keys
	previousSlideKeys.push(37, 38); //up and left cursor keys
	nextSlideKeys.push(32); //space bar
	nextSlideKeys.push(13); //return

	document.onkeypress = function(e) {
		e = e || window.event;
		checkKeyCode(e.keyCode);
	};
	document.onkeydown = function(e) {
		e = e || window.event;
		checkKeyCode(e.keyCode);
	};

	function checkKeyCode(keyCode){
		console.log(keyCode);
		if(!window.nextSlide){
			console.warn('nextSlide is not defined');
		}

		if(nextSlideKeys.indexOf(keyCode) > -1){
			window.location.href = nextSlide.concat('.html');
		}

		if(previousSlideKeys.indexOf(keyCode) > -1){
			window.history.back();
		}
	}
})();