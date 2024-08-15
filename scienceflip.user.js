// ==UserScript==
// @name        Scienceflip Image Fixer
// @namespace   Violentmonkey Scripts
// @match       https://www.scienceflip.com.au/*
// @grant       none
// @version     1.0
// @author      Oscar Ronberg
// @description 8/14/2024, 9:06:14 AM
// @downloadURL https://github.com/NinjaFB/userscripts/raw/master/scienceflip.user.js
// @updateURL	https://github.com/NinjaFB/userscripts/raw/master/scienceflip.user.js
// ==/UserScript==

const images = document.querySelectorAll("img[src^='https://drive.google.com']");

images.forEach(image => {
	const currentSrc = image.src;
	const newSrc = currentSrc.replace("export=download", "sz=w1000").replace("uc", "thumbnail");

	image.src = newSrc;
});
