
(function() {

$("#clearCanvas").click(function() {
	CanvasSketch.clear();
});

$("#flightTest").click(function() {
	CanvasSketch.disable();
	CanvasOverlaySketch.init();
	CanvasOverlaySketch.show();
	$(this).css({ display : "none" });
	$("#restartCanvas").css({ display : "" });
	$("#glanceCanvas").css({ display : "" });
});

$("#restartCanvas").click(function() {
	CanvasOverlaySketch.clear();
	CanvasSketch.clear();
	CanvasSketch.enable();
	CanvasOverlaySketch.hide();
	$(this).css({ display : "none" });
	$("#flightTest").css({ display : "" });
	$("#glanceCanvas").css({ display : "none" });
});

$("#glanceCanvas").on("touchstart", function() {
	CanvasOverlaySketch.hide();
});

$("#glanceCanvas").on("touchend", function() {
	CanvasOverlaySketch.show();
});

$("#glanceCanvas").on("touchmove", function() {
	CanvasOverlaySketch.show();
});

})();
