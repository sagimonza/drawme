
(function() {

$("#clearCanvas").click(function() {
	CanvasSketch.clear();
});

$("#flightTest").click(function() {
	CanvasOverlaySketch.show();
	$(this).css({ display : "none" });
	$("#restartCanvas").css({ display : "" });
});

$("#restartCanvas").click(function() {
	CanvasOverlaySketch.clear();
	CanvasSketch.clear();
	CanvasOverlaySketch.hide();
	$(this).css({ display : "none" });
	$("#flightTest").css({ display : "" });
});

})();
