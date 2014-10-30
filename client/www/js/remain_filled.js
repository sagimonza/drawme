
(function() {

var remainFilledElem = $("#remainFilledWrapper");

window.RemainFilled = {
	init : function() {
		remainFilledElem.text("0%");
		
		var canvasData = {}, canvasDataPixels = 0;
		var imageData = CanvasSketch.imageData.data;
		for (var i = 0; i < imageData.length; ++i) {
			if (imageData[i] != 0) {
				canvasData[i] = true;
				canvasDataPixels++;
			}
		}
		
		this.canvasData = { data : canvasData, count : canvasDataPixels };
		console.log("pixels:" + canvasDataPixels);
		this._pixelsLeft = canvasDataPixels;
	},
	
	show : function() {
		$("#remainFilledWrapper").css({ display : "" });
	},
	
	hide : function() {
		$("#remainFilledWrapper").css({ display : "none" });
	},
	
	decrease : function(data) {
		var imageData = data.data, canvasData = this.canvasData.data, empty = [];
		for (var i = 0; i < imageData.length; ++i) {
			if (imageData[i] == 0 && canvasData[i]) {
				delete canvasData[i];
				this._pixelsLeft--;
			}
		}
		
		remainFilledElem.text("" + (100 - Math.round(Number((this._pixelsLeft / this.canvasData.count).toFixed(2)) * 100)) + "%");
	}
};

})();
