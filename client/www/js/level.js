
(function() {

window.Level = {
	setLevel : function(level) {
		if (this._isValidLevel(level)) {
			this._level = level;
			this._initConfig();
		}
	},
	
	getLevel : function() {
		return this._level;
	},
	
	_initConfig : function() {
		this.config = {};
		Object.keys(LevelConfig).forEach(function(entry) {
			this.config[entry] = LevelConfig[entry][this._level] || LevelConfig[entry]["all"]; }, this);
	},
	
	_isValidLevel : function(level) {
		return validLevels.indexOf(level) > -1;
	},
	
	LEVEL_EASY		: "easy",
	LEVEL_MEDIUM	: "medium",
	LEVEL_HARD		: "hard"
};

var LevelConfig = {
	remainTime : {
		easy : function(pixelCount) { return pixelCount * 0.5; },
		medium : function(pixelCount) { return pixelCount * 0.35; },
		hard : function(pixelCount) { return pixelCount * 0.25; }
	},
	remainTimeBonusFactor : {
		easy : function(remainTime, initRemainTime) { return (remainTime / initRemainTime) * 0.6; },
		medium : function(remainTime, initRemainTime) { return (remainTime / initRemainTime) * 0.5; },
		hard : function(remainTime, initRemainTime) { return (remainTime / initRemainTime) * 0.4; }
	},
	wrongPixelsBonusFactor : {
		easy : function(remainTimeBonusFactor, wrongPixelsCount, totalPaintedPixelsCount) {
			return Math.max(0, ((1 - remainTimeBonusFactor) * ((wrongPixelsCount - (0.4 * totalPaintedPixelsCount)) * 0.4)));
		},
		medium : function(remainTimeBonusFactor, wrongPixelsCount, totalPaintedPixelsCount) {
			return Math.max(0, ((1 - remainTimeBonusFactor) * ((wrongPixelsCount - (0.2 * totalPaintedPixelsCount)) * 0.5)));
		},
		hard : function(remainTimeBonusFactor, wrongPixelsCount, totalPaintedPixelsCount) {
			return Math.max(0, ((1 - remainTimeBonusFactor) * ((wrongPixelsCount - (0.1 * totalPaintedPixelsCount)) * 0.6)));
		}
	},
	correctPixelsBonusFactor : {
		all : function(correctPixelsCount, wrongPixelsBonusFactor, totalPaintedPixelsCount) {
			return Math.max(0, correctPixelsCount - wrongPixelsBonusFactor) / totalPaintedPixelsCount;
		}
	}
};

var validLevels = ["easy", "medium", "hard"];

Level.setLevel(Level.LEVEL_MEDIUM);

})();
