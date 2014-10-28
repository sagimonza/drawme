
(function() {

var SizeMap = {
	"small"		: 5,
	"medium"	: 25,
	"large"		: 35,
	"huge"		: 50
};

var size;

window.Brush = {
	get size() {
		return SizeMap[size];
	},
	
	selectSize : function(elem) {
		$(".brush-size-item").removeClass("active-size");
		$(elem).addClass("active-size");
		size = $(elem).data("size");
	}
};

$(".brush-size-item").each(function() {
	if ($(this).data("size") == "medium") Brush.selectSize(this);
});

$(".brush-size-item").click(function(e) {
	Brush.selectSize(this);
	$("#brushSize").dropdown("hide");
});

})();
