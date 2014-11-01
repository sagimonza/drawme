// todo: number of time user start touch (higher-->lower score)
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
		this._setTick();
		this.initRemainTime = this.remainTime = Level.config.remainTime(Score.canvasData.count);
		$("#countdown").text("" + Math.round((this.remainTime / 1000)));
	},
	
	start : function(type) {
		function tickLoop() {
			if ($this.tick()) {
				$("#restartCanvas").trigger("click");
				return;
			}
			
			$this._lastTickStartTS = Date.now();
			$this._tickTimer = setTimeout(tickLoop, $this._tickStep);
		}
		var $this = this;
		
		this._setTick(type);
		console.log("countdown start:" + this._tickStep);
		this._debtTickStep = this._debtTickStep || this._tickStep;
		this._lastTickStartTS = Date.now();
		this._tickTimer = setTimeout(tickLoop, Math.min(this._debtTickStep, this._tickStep));
		this._ticked = false;
	},
	
	stop : function() {
		console.log("countdown stop:" + !!this._tickTimer);
		this._debtTickStep = (Date.now() - this._lastTickStartTS);
		clearTimeout(this._tickTimer);
		return this.remainTime <= 0;
	},
	
	tick : function(isStopTick) {
		console.log("tick, this.remainTime=" + this.remainTime);
		if (this.concreteRemainTime <= 0) return true;
		if (isStopTick && this._ticked) return;

		this._ticked = true;
		this.remainTime -= 1000;
		$("#countdown").text("" + this.concreteRemainTime);
		if (this.concreteRemainTime <= 0) return true;
	},
	
	get concreteRemainTime() {
		return Math.max(Math.round((this.remainTime / 1000)), 0);
	},
	
	_setTick : function(type) {
		switch(type) {
			case "turbo"	: this._tickStep = 300; break;
			case "normal"	: // fall through
			default			: this._tickStep = 1000; break;
		}
	}
};

})();
