
(function() {

var canvasElem = document.getElementById("overlayCanvas");

window.CanvasOverlaySketch = {
	clear : function() {
		ctx.clear();
	},
	
	init : function() {
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "rgba(153,153,153,1)";
		ctx.fillRect(0, 0, ctx.width, ctx.height);
		ctx.globalCompositeOperation = "destination-out";
	},
	
	show : function() {
		$(canvasElem).css({
			display : "",
			position : "absolute",
			zIndex : 5,
			top : CanvasSketch.rect.top
		});
	},
	
	hide : function() {
		$(canvasElem).css({ display : "none" });
	}
};

var ctx = Sketch.create({
	fullscreen : true,
	container : canvasElem,
	autoclear : false,
	update: function() {
		//radius = 2 + abs( sin( this.millis * 0.003 ) * 50 );
	},
	keydown : function() {return;
		//if ( this.keys.C )
		this.clear();
	},
	touchmove: function() {
		this._drawLine();
	},
	_drawLine : function() {
		for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

			touch = this.touches[i];

			this.lineCap = 'round';
			this.lineJoin = 'round';
			this.fillStyle = this.strokeStyle = "";//"#E3EB64";
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
