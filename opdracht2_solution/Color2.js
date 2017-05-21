function Color(red,green,blue)
{
	// ----DATA
	
	this.r=red;
	this.g=green;
	this.b=blue;

	// ----METHODS
	
	// void lightenColor([factor 0-1])
	// maakt onze r,g,b, kleiner met een bepaalde factor
	// dit maakt de kleur donkerder.
	// laat je de factor weg, dan is het 0.3 (30% donkerder)
	
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