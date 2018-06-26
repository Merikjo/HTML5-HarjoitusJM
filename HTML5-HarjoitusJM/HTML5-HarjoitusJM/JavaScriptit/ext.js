// JavaScript Document

function napsautus() {
	alert('Olen skripti, joka on ulkoisessa tiedostossa!');
}


	var kaksi = document.getElementById('osa2');
	kaksi.onclick = function() {
	kaksi.innerHTML = 'Uusi sisältö on tässä!';
}