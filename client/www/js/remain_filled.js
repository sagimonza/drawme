
(function() {

var remainFilledElem = $("#remainFilledWrapper");

window.RemainFilled = {
	init : function() {
		remainFilledElem.text("0%");
		
		var canvasData = {}, canvasDataPixels = 0;
		var imageData = CanvasSketch.imageData.data;
		for (var i = 0; i < imageData.length; i += 4) {
			if ((imageData[i] != 255 || imageData[i + 1] != 255 || imageData[i + 2] != 255) && imageData[i + 3] != 0) {
				canvasData[i] = true;
				canvasDataPixels += 4;
			}
		}
		
		this.canvasData = { data : canvasData, count : canvasDataPixels };
		console.log("pixels:" + canvasDataPixels);
		this._correctPixelsCount = 0;
		this._wrongPixelsCount = 0;
	},
	
	show : function() {
		$("#remainFilledWrapper").css({ display : "" });
	},
	
	hide : function() {
		$("#remainFilledWrapper").css({ display : "none" });
	},
	
	calcScore : function() {
		var imageData = CanvasOverlaySketch.imageData.data, canvasData = this.canvasData.data, empty = [];
		var revealedPixelsCount = 0;
		for (var i = 0; i < imageData.length; i += 4) {
			if (!((imageData[i] == 255 && imageData[i + 1] == 255 && imageData[i + 2] == 255) || imageData[i + 3] == 0)) continue;

			revealedPixelsCount += 4;
			if (canvasData[i]) {
				delete canvasData[i];
				this._correctPixelsCount += 4;
			} else {
				this._wrongPixelsCount += 4;
			}
		}
		
		var remainTimeBonusFactor = Level.config.remainTimeBonusFactor(Math.max(0, Countdown.remainTime), Countdown.initRemainTime);
		var wrongPixelsBonusFactor = Level.config.wrongPixelsBonusFactor(remainTimeBonusFactor, this._wrongPixelsCount, this.canvasData.count);
		var correctPixelsBonusFactor = Level.config.correctPixelsBonusFactor(this._correctPixelsCount, wrongPixelsBonusFactor, this.canvasData.count);
		
		Logger.log("Countdown.remainTime:".concat(Countdown.remainTime, " Countdown.initRemainTime:", Countdown.initRemainTime, " remainTimeBonus:", remainTimeBonusFactor,
			" this._wrongPixelsCount:", this._wrongPixelsCount, " this.canvasData.count:", this.canvasData.count, " wrongPixelsBonus:", wrongPixelsBonusFactor,
			" this._correctPixelsCount:", this._correctPixelsCount, " correctPixelsBonus:", correctPixelsBonusFactor));
		
		remainFilledElem.text("" + Math.round(Number(correctPixelsBonusFactor.toFixed(2)) * 100) + "%");
	}
};

})();
