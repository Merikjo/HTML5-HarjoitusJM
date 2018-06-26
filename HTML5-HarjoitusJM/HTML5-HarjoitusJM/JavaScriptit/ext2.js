// JavaScript Document

function init() {
	var kolme = document.getElementById('osa3');
	kolme.onclick = muuta;
	
	var kaks = document.getElementById('osa2');
	kaks.onclick = muuta;
}

function muuta() {
	this.innerHTML = 'Minäkin olen uusi sisältö!';	
}