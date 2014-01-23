(function() {
	var nextSlideKeys = [],
		previousSlideKeys = [],
		pages = [
			'index.html',
			'data.html',
			'layout.html',
			'layoutExample.html',
			'layoutY.html',
			'layoutYExample.html',
			'layoutWithScale.html',
			'layoutWithScaleExample.html',
			'intersections.html',
			'intersectionsExample.html',
			'colour.html',
			'colourExample.html',
			'font.html',
			'fontExample.html'
		];

	nextSlideKeys.push(39, 40); //down and right cursor keys
	nextSlideKeys.push(32); //space bar
	nextSlideKeys.push(13); //return

	previousSlideKeys.push(37, 38); //up and left cursor keys
	previousSlideKeys.push(8); //backspace

	document.onkeypress = function(e) {
		e = e || window.event;
		navigate(e.keyCode);
	};
	document.onkeydown = function(e) {
		e = e || window.event;
		navigate(e.keyCode);
	};

	function getCurrentPathname() {
		var fileName = window.location.pathname.split('/').pop();
		if (fileName === '') {
			//assume we are at index
			return pages[0];
		}
		return fileName;
	}

	function atFirstSlide() {
		return getCurrentSlideIndex() === 0;
	}

	function atLastSlide() {
		return getCurrentSlideIndex() === (pages.length - 1);
	}

	function getCurrentSlideIndex() {
		return pages.indexOf(getCurrentPathname());
	}

	function getNextSlidePathname() {
		return pages[getCurrentSlideIndex() + 1];
	}

	function isNavigatingForward(keyCode){
		return nextSlideKeys.indexOf(keyCode) > -1;
	}

	function isNavigatingBackward(keyCode){
		return previousSlideKeys.indexOf(keyCode) > -1;
	}

	function navigate(keyCode) {
		console.log(keyCode);

		if (!atLastSlide() && isNavigatingForward(keyCode)) {
			window.location.href = getNextSlidePathname();
		}

		if (!atFirstSlide() && isNavigatingBackward(keyCode)) {
			window.history.back();
		}
	}
})();