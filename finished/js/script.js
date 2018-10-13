$(document).ready(function() {
	var backgroundImageArray = ["slide-1.jpg","slide-2.jpg","slide-3.jpg"];
	var backgroundImageIndex = 0;

	function changeBackground() {
		if(backgroundImageIndex >= backgroundImageArray.length) {
			backgroundImageIndex = 0;
		}

		$('#body').css("background-image", "url(img/" + backgroundImageArray[backgroundImageIndex] + ")");
		backgroundImageIndex++;
	}

	setInterval(changeBackground, 10000);
});