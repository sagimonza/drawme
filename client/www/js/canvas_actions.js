
(function() {

$("#clearCanvas").click(function() {
	CanvasSketch.clear();
});

$("#flightTest").click(function() {
	CanvasOverlaySketch.clear();
	CanvasSketch.disable();
	CanvasOverlaySketch.init();
	CanvasOverlaySketch.show();
	RemainFilled.init();
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
	RemainFilled.hide();
	Countdown.stop();
	Countdown.hide();
	$(this).css({ display : "none" });
	$("#glanceCanvas").css({ display : "none" });
	$("#flightTest").css({ display : "" });
	$("#clearCanvas").css({ display : "" });
});

$("#glanceCanvas").on("touchstart", function() {
	CanvasOverlaySketch.hide();
	Countdown.start("turbo");
});

$("#glanceCanvas").on("touchend touchmove", function() {
	CanvasOverlaySketch.show();
	if (Countdown.stop()) $("#restartCanvas").trigger("click");
});

})();
