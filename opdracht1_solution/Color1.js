function Color(red,green,blue)
{
  // kopieer de argumenten van de funtie naar
  // het object wat we gaan teruggeven
  // standaard is dit this.
  // this staat bekend als "de context", dit zul je me wellicht ook
  // wel eens horen zeggen.
  
	this.r=red;
	this.g=green;
	this.b=blue;

	// hieronder komen de methodes van Color!
	// deze zijn aan te roepen via iedere instance!

	// maakt een string van onze r,g,b
	// die er ongeveer zo uitziet: "rgb(167,192,45)"
	// dit soort strings kun je gebruiken in stylesheets 
	// in plaats van dingen als "#ff0000"
	this.toString=function()
	{
		return "rgb("+this.r+","+this.g+","+this.b+")";
	}
}