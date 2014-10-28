
(function() {

var radius = 20;

var mainElem = document.getElementById("mainCanvas");

window.CanvasSketch = {
	clear : function() {
		ctx.clear();
	},
	
	get rect() {
		return $(mainElem)[0].getBoundingClientRect();
	}
};

var ctx = Sketch.create({
	fullscreen : true,
	container : mainElem,
	autoclear : false,
	update: function() {
		//radius = 2 + abs( sin( this.millis * 0.003 ) * 50 );
	},
	keydown : function() {
		//if ( this.keys.C )
		this.clear();
	},
	touchmove: function() {
		for ( var i = this.touches.length - 1, touch; i >= 0; i-- ) {

			touch = this.touches[i];

			this.lineCap = 'round';
			this.lineJoin = 'round';
			this.fillStyle = this.strokeStyle = ColorPicker.color;//"#E3EB64";
			this.lineWidth = radius;

			this.beginPath();
			this.moveTo( touch.ox, touch.oy );
			this.lineTo( touch.x, touch.y );
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
