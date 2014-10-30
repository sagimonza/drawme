
(function() {

var spinner = $("#scoreLoadingSpinner");
window.ScoreLoadingSpinner = {
	show : function() {
		spinner.css({ display : "" });
	},
	
	hide : function() {
		spinner.css({ display : "none" });
	}
};

})();
