
(function() {

var mainElem = document.getElementById("mainCanvas");

window.CanvasSketch = {
	clear : function() {
		ctx.clear();
	},
	
	disable : function() {
		ctx._disabled = true;
	},
	
	enable : function() {
		ctx._disabled = false;
	},
	
	get rect() {
		return $(mainElem)[0].getBoundingClientRect();
	},
	
	get imageData() {
		return ctx.getImageData(0, 0, ctx.width, ctx.height);
	}
};

function onTouchStart(e) {
	if (this._paint) return;
	this._paint = true;
	this._drawLine();
}

function onTouchEnd(e) {
	if (!this._paint) return;
	this._paint = false;
}

var ctx = Sketch.create({
	fullscreen : false,
	width : $(mainElem).width(),
	height: $(mainElem).height(),
	container : mainElem,
	autoclear : false,
	mousedown : onTouchStart,
	touchstart : onTouchStart,
	touchmove: function() {
		this._drawLine();
	},
	touchend : onTouchEnd,
	mouseup : onTouchEnd,
	mouseout : onTouchEnd,
	_drawLine : function() {
		if (this._disabled || !this._paint) return;
		
		for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

			touch = this.touches[i];

			this.lineCap = 'round';
			this.lineJoin = 'round';
			this.fillStyle = this.strokeStyle = ColorPicker.color;//"#E3EB64";
			this.lineWidth = Brush.size;

			this.beginPath();
			var toX = touch.x != touch.ox ? touch.x :
				touch.x + 1 <= ctx.width ? touch.x + 1 : touch.x - 1;
			var toY = touch.y != touch.oy ? touch.y :
				touch.y + 1 <= ctx.height ? touch.y + 1 : touch.y - 1;
			this.moveTo(touch.ox, touch.oy);
			this.lineTo(toX, toY);
			this.stroke();
		}
	}
});

})();
