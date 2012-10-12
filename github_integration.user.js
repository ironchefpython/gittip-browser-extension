// ==UserScript==
// @name        github integration
// @namespace   https://www.gittip.com
// @description Adds a gittip button in gihub
// @include     https://github.com/*
// @version     1
// ==/UserScript==

if (document.getElementsByClassName('pagehead-actions').length > 0) {
    var author = document.getElementsByClassName('author')[0].textContent.replace(/(^\s+|\s+$)/g,'');
    var actions = document.getElementsByClassName('pagehead-actions')[0];
	var button = document.createElement('li');
	button.innerHTML = '<iframe style="border: 0; margin: 0; padding: 0;" src="https://www.gittip.com/' + author + '/widget.html" width="48pt" height="20pt"></iframe>';
	actions.insertBefore(button, actions.firstChild);
}