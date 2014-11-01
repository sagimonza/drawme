
(function() {

$("#clearCanvas").click(function() {
	CanvasSketch.clear();
});

$("#flightTest").click(function() {
	CanvasOverlaySketch.clear();
	CanvasSketch.disable();
	CanvasOverlaySketch.init();
	CanvasOverlaySketch.show();
	Score.init();
	Countdown.init();
	Countdown.show();
	
	$(this).css({ display : "none" });
	$("#clearCanvas").css({ display : "none" });
	$("#restartCanvas").css({ display : "" });
	$("#glanceCanvas").css({ display : "" });
});

$("#restartCanvas").click(function() {
	CanvasSketch.clear();
	CanvasSketch.enable();
	CanvasOverlaySketch.hide();
	Countdown.stop();
	Countdown.hide();
	$(this).css({ display : "none" });
	$("#glanceCanvas").css({ display : "none" });
	$("#flightTest").css({ display : "" });
	$("#clearCanvas").css({ display : "" });
});

var _glanceStarted = false;
$("#glanceCanvas").on("mousedown touchstart", function(e) {
	if (_glanceStarted) return;
	
	_glanceStarted = true;
	CanvasOverlaySketch.hide();
	Countdown.start("turbo");
});

$("#glanceCanvas").on("touchend touchmove mouseup", function(e) {
	if (!_glanceStarted) return;
	
	_glanceStarted = false;
	CanvasOverlaySketch.show();
	if (Countdown.stop()) $("#restartCanvas").trigger("click");
});

})();
