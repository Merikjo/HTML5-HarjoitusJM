// kommentoi alert kun alat töihin
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

	  // tehdään viittaus elementtiin, jonne data lopullisesti sijoitetaan
      var paikka = document.getElementById("info");

	  // tyhjennetään elementin sisältö varmuuden vuoksi 
      while (paikka.hasChildNodes()) {
        paikka.removeChild(paikka.lastChild);
      }

	  // sijoitetaan uudet elementit tietoineen divin sisään 
      paikka.appendChild(header);
      paikka.appendChild(link);

}
