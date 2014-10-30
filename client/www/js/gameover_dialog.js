
(function() {

$("#restartCanvas").magnificPopup({
	closeBtnInside : true,
	mainClass: "animated bounceInDown transparentBack",
	removalDelay: 500,
	items: {
		src: "#gameoverDialog",
		type: "inline"
	},
	callbacks : {
		beforeOpen : function() {
			RemainFilled.hide();
			ScoreLoadingSpinner.show();
		},
		
		open : function() {
			setTimeout(function() {
				RemainFilled.decrease(CanvasOverlaySketch.imageData);
				ScoreLoadingSpinner.hide();
				RemainFilled.show();
			}, 10);
		},
		
		beforeClose : function() {
			$(this.wrap).addClass("bounceOutDown");
		}
	}
});

})();
