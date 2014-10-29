
(function() {

var remainFilled = $("#remainFilled");

window.RemainFilled = {
	init : function() {
		return;
		
		remainFilled.text("0%");
		
		var canvasData = {}, canvasDataPixels = 0;
		var imageData = CanvasSketch.imageData.data;
		for (var i = 0; i < imageData.length; ++i) {
			if (imageData[i] != 0) {
				canvasData[i] = true;
				canvasDataPixels++;
			}
		}
		
		this._canvasData = { data : canvasData, count : canvasDataPixels };
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
		var imageData = data.data, canvasData = this._canvasData.data, empty = [];
		for (var i = 0; i < imageData.length; ++i) {
			if (imageData[i] == 0 && canvasData[i]) {
				delete canvasData[i];
				this._pixelsLeft--;
			}
		}
		
		remainFilled.text("" + (100 - Math.round(Number((this._pixelsLeft / this._canvasData.count).toFixed(2)) * 100)) + "%");
	}
};

})();
