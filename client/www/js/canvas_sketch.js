
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

var ctx = Sketch.create({
	fullscreen : false,
	width : $(mainElem).width(),
	height: $(mainElem).height(),
	container : mainElem,
	autoclear : false,
	update: function() {
		//radius = 2 + abs( sin( this.millis * 0.003 ) * 50 );
	},
	mousedown : function() {
		this._drawLine();
	},
	touchstart : function() {
		//this._drawLine();
	},
	touchmove: function() {
		this._drawLine();
	},
	_drawLine : function() {
		if (this._disabled) return;
		
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

//ctx.globalCompositeOperation = "destination-over";
/*
ctx.draw = function() {
    ctx.beginPath();
    ctx.arc( random( ctx.width ), random( ctx.height ), 10, 0, TWO_PI );
    ctx.fill();
}

ctx.mousemove = function( e ) {
    for ( var i = 0, n = e.touches.length; i < n; i++ ) {
        ctx.arc( e.touches[i].x, e.touches[i].y, 10, 0, TWO_PI );
    }
}

ctx.draw = function() {
    for ( var i = 0, n = ctx.touches.length; i < n; i++ ) {
        ctx.arc( ctx.touches[i].x, ctx.touches[i].y, 10, 0, TWO_PI );
    }
}*/

})();
