
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
			Score.hide();
			ScoreLoadingSpinner.show();
		},
		
		open : function() {
			setTimeout(function() {
				Score.calcScore();
				ScoreLoadingSpinner.hide();
				Score.show();
			}, 10);
		},
		
		beforeClose : function() {
			$(this.wrap).addClass("bounceOutDown");
		}
	}
});

})();
