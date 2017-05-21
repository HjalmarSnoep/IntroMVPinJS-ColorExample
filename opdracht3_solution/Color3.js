function Color(red,green,blue)
{
	// zorg dat je object robuust is.
	// als de gebruiker GEEN red, green of blue meegeeft
	// maken we hem random, zodat er een willekeurige kleur komt.
	
	if(typeof(red)=="undefined")red=Math.floor(Math.random()*256);
	if(typeof(green)=="undefined")green=Math.floor(Math.random()*256);
	if(typeof(blue)=="undefined")blue=Math.floor(Math.random()*256);
  // copy the args to the object.
	this.r=red;
	this.g=green;
	this.b=blue;

	// hieronder komen de methodes van Color!
	// deze zijn aan te roepen via iedere instance!

	// maakt onze r,g,b, lichter
	this.lightenColor=function(f1)
	{
		if(typeof(f1)=="undefined")f1=0.3;
		var f2=1-f1;
		this.r=Math.floor(this.r*f2+f1*255);
		this.g=Math.floor(this.g*f2+f1*255);
		this.b=Math.floor(this.b*f2+f1*255);
	}
	
	// maakt onze r,g,b, donkerder
	this.darkenColor=function(f1)
	{
		if(typeof(f1)=="undefined")f1=0.3;
		var f2=1-f1;
		this.r=Math.floor(this.r*f2+f1*0);
		this.g=Math.floor(this.g*f2+f1*0);
		this.b=Math.floor(this.b*f2+f1*0);
	}
	
	// maakt een string van onze r,g,b
	// die er ongeveer zo uitziet: "rgb(167,192,45)"
	// dit soort strings kun je gebruiken in stylesheets 
	// in plaats van dingen als "#ff0000"
	this.toString=function()
	{
		return "rgb("+this.r+","+this.g+","+this.b+")";
	}
}