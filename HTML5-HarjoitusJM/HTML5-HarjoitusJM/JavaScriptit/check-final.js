function tarkista() {
	
	var error_string = '';
	
	var en = document.getElementById('en').value;
	   if (en == '')
    {
        error_string = 'Etunimi tarvitaan. \n';
    }
	
	var sn = document.getElementById('sn').value;
		if (sn == '')
		{
		error_string = error_string +'Sukunimi tarvitaan. \n';
		}
	
	var sp = document.getElementById('sp').value;
	var regexp = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	if (!sp.match(regexp))
	{
		error_string = error_string +'Käytä sähköpostin oikeaa muotoa. \n';
	}
	
    if (error_string == "") { return true; } 
	else {
        error_string = "Ongelmia lomakkeella: \n \n" + error_string;
        alert(error_string);
        return false;
    } 
}