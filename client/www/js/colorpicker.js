
(function() {

var color = "";

window.ColorPicker = {
	get color() {
		return color;
	}
};

$("#colorpicker").spectrum({
    showPalette: true,
    showPaletteOnly: true,
    clickoutFiresChange: true,
    containerClassName: "colorpickerContainer",
    replacerClassName: "colorpickerReplacer",
    maxSelectionSize: 0,
    palette: [
		["black", "red"],
		["blue", "green"],
		["yellow", "orange"]
	]
});

$("#colorpicker").change(function() {
	$this = $(this);
	color = $this.val();
	$this.spectrum("hide");
});

/*$("#colorpicker").spectrum({
    //color: tinycolor,
    //flat: bool,
    //showInput: bool,
    //showInitial: bool,
    //allowEmpty: bool,
    showAlpha: true,
    //disabled: bool,
    localStorageKey: "spectrum.paint",
    showPalette: true,
    showPaletteOnly: true,
    //togglePaletteOnly: bool,
    //showSelectionPalette: bool,
    clickoutFiresChange: true,
    //cancelText: string,
    //chooseText: string,
    //togglePaletteMoreText: string,
    //togglePaletteLessText: string,
    containerClassName: "colorpickerContainer",
    replacerClassName: "colorpickerReplacer",
    //preferredFormat: string,
    maxSelectionSize: 0,
    palette: [
		["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],
		["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],
		["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],
		["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],
		["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],
		["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]
	]
    //selectionPalette: [string]
});
*/
})();
