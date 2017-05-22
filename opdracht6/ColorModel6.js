function ColorModel(r,g,b)
{
		
	// make sure you can define your object a number of ways
	// leaving rgb out, gives you black.
	if(typeof(r)=="undefined")r=Math.floor(Math.random()*256);
	if(typeof(g)=="undefined")g=Math.floor(Math.random()*256);
	if(typeof(b)=="undefined")b=Math.floor(Math.random()*256);

	// copy the args to the object we will return.
	this.r=r;
	this.g=g;
	this.b=b;

	// maakt de kleur in het model donkerder
	this.darkenColor=function(f1)
	{
		if(typeof(f1)=="undefined")f1=0.3;
		var f2=1-f1;
		this.r=Math.floor(this.r*f2+f1*0);
		this.g=Math.floor(this.g*f2+f1*0);
		this.b=Math.floor(this.b*f2+f1*0);
		if(this.callback!=null)
			this.callback();
		else{
			console.log("Je bent vergeten een callback te definieren in je HTML.");
		}
	}
	
	// bereken een grijskleur (tussen 0 en 255) op basis van onze r,g,b
	this.getGrayValue=function()
	{
		var grey=(this.r+this.g+this.b)/3; // simple grey!
		return grey;
	}
	
	// maak een string als "rgb(255,255,255)" van onze r,g,b
	this.toString=function()
	{
		return "rgb("+this.r+","+this.g+","+this.b+")";
	}

	// METHOD ADDCALLBACK 
	this.callback=null;
	this.addCallback=function(callback)
	{
			this.callback=callback;
			console.log("A subscriber was added to the model: "+callback);
	}
	
}