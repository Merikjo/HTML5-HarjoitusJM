// kommentoi alert kun alat t�ihin
//alert('hei');


function addhtml() {
// rakennetaan tagit jonne data sijoitetaan
      var header = document.createElement("h2");
      var text = document.createTextNode("HyperText Markup Langage");
      header.appendChild(text);
      var link = document.createElement("a");
    var site = 'http://www.w3.org/html/';
    var site = 'https://www.w3schools.com/js/js_htmldom.asp';
      link.setAttribute("href",site);
      var linktext = document.createTextNode(site);
      link.appendChild(linktext);

	  // tehd��n viittaus elementtiin, jonne data lopullisesti sijoitetaan
      var paikka = document.getElementById("info");

	  // tyhjennet��n elementin sis�lt� varmuuden vuoksi 
      while (paikka.hasChildNodes()) {
        paikka.removeChild(paikka.lastChild);
      }

	  // sijoitetaan uudet elementit tietoineen divin sis��n 
      paikka.appendChild(header);
      paikka.appendChild(link);

}
