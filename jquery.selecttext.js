/*
 * jQuery selecttext v0.1
 * https://github.com/timdp
 * Largely based on http://stackoverflow.com/q/985272
 */

$.fn.selectText = function() {
	var el = this[0];
	if (document.body.createTextRange) {
		var range = document.body.createTextRange();
		range.moveToElementText(el);
		range.select();
	} else if (window.getSelection) {
		var selection = window.getSelection();        
		var range = document.createRange();
		range.selectNodeContents(el);
		selection.removeAllRanges();
		selection.addRange(range);
	}
};
