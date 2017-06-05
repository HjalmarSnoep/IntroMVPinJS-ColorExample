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
	
	// maakt onze r,g,b, groter, de kleur lichter.
	this.lightenColor=function(f1)
	{
		if(typeof(f1)=="undefined")f1=0.1;
		var f2=1-f1;
		this.r=Math.floor(this.r*f2+f1*255);
		this.g=Math.floor(this.g*f2+f1*255);
		this.b=Math.floor(this.b*f2+f1*255);
		// de kleur is veranderd, dus..		
		if(typeof(this.callback)!="undefined")
		{
			// roep de callback aan.
			this.callback();
		}
	}
	
	// maakt onze r,g,b kleiner, de kleur donkerder.
	this.darkenColor=function(f1)
	{
		if(typeof(f1)=="undefined")f1=0.1;
		var f2=1-f1;
		this.r=Math.floor(this.r*f2+f1*0);
		this.g=Math.floor(this.g*f2+f1*0);
		this.b=Math.floor(this.b*f2+f1*0);
		
		// de kleur is veranderd, dus..		
		if(typeof(this.callback)!="undefined")
		{
			// roep de callback aan.
			this.callback();
		}
	}
	
	// deze functie veranderd de hue
	this.changeHue = function (degree) 
	{
		var hsl=rgbToHsl(this.r,this.g,this.b); // adds .h .l .s
		//console.log(JSON.stringify(this));
		//console.log(JSON.stringify(hsl));
		hsl.h += degree;
		if (hsl.h > Math.PI*2) {
			hsl.h -= Math.PI*2;
		}
		else if (hsl.h < 0) {
			hsl.h += Math.PI*2;
		}
		var rgb=hslToRgb(hsl.h,hsl.s,hsl.l); // calculate back
		this.r=Math.floor(rgb.r);
		this.g=Math.floor(rgb.g);
		this.b=Math.floor(rgb.b);
		//console.log(JSON.stringify(rgb));
		// de kleur is veranderd, dus..		
		if(typeof(this.callback)!="undefined")
		{
			// roep de callback aan.
			this.callback();
		}
	}

	// LIFTED FROM: https://github.com/surfacecurve/sc-color/blob/master/lib/surfacecurve-color.js
	function rgbToHsl(r, g, b)
    {
        var max = Math.max(r, g, b), 
            min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if(max == min)
        {
            h = s = 0; // achromatic
        }
        else
        {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) 
            {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

		return {h:h, s:s, l:l};
    }
	 function hslToRgb(h, s, l)
    {
        var r, g, b;

        if (s == 0)
        {
            r = g = b = l; // achromatic
        }
        else
        {
			//console.log("color"+h,s,l);
            function hue2rgb(p, q, t){
                if(t < 0) t += 1;
                if(t > 1) t -= 1;
                if(t < 1/6) return p + (q - p) * 6 * t;
                if(t < 1/2) return q;
                if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }

        return {r:r, g:g, b:b};
    }
	
	// bereken accurate grijskleur gebaseerd op waarneming meer info: en.wikipedia.org/wiki/Grayscale
	this.getGrayValue=function()
	{
		var grey=0.2126*this.r+ 
				 0.7152*this.g+
				 0.0722*this.b; // (CCIR 601) grey!
		return grey;
	}
	
	this.toString=function()
	{
		return "rgb("+this.r+","+this.g+","+this.b+")";
	}
	
	// maakt een string als #ff0000 van r,g,b 255,0,0
	this.toHex=function()
	{
		return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
	}

	// maakt deze Class handig in MVP (kan NOG beter met Events)
	this.addCallback=function(callback)
	{
		this.callback=callback; // keep the (1 for now) subscriberCallback
//		console.log("A subscriber was added to the model."+this.callback);
	};
	
	
}