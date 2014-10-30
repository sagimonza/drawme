
(function() {

var countdownElem = $("#countdownWrapper");

window.Countdown = {
	show : function() {
		countdownElem.css({ display : "" });
	},
	
	hide : function() {
		countdownElem.css({ display : "none" });
	},
	
	init : function() {
		this.setTick();
		this._remainTime = RemainFilled.canvasData.count * 0.5;
		$("#countdown").text("" + Math.round((this._remainTime / 1000)));
	},
	
	start : function(type) {
		function tickLoop() {
			if ($this.tick()) {
				$("#restartCanvas").trigger("click");
				return;
			}
			
			$this._tickTimer = setTimeout(tickLoop, $this._tickStep);
		}
		var $this = this;
		
		this.setTick(type);
		console.log("countdown start:" + this._tickStep);
		this._tickTimer = setTimeout(tickLoop, this._tickStep);
		this._ticked = false;
	},
	
	stop : function() {
		console.log("countdown stop:" + !!this._tickTimer);
		clearTimeout(this._tickTimer);
		return this.tick(true);
	},
	
	tick : function(isStopTick) {
		console.log("tick, this._remainTime=" + this._remainTime);
		if (this._remainTime <= 0) return true;
		if (isStopTick && this._ticked) return;

		this._ticked = true;
		this._remainTime -= 1000;
		$("#countdown").text("" + Math.max(Math.round((this._remainTime / 1000)), 0));
	},
	
	setTick : function(type) {
		switch(type) {
			case "turbo"	: this._tickStep = 500; break;
			case "normal"	: // fall through
			default			: this._tickStep = 1000; break;
		}
	}
};

})();
