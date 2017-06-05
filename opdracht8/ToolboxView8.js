function ToolboxView(model)
{
	var context=this;
	this.model=model; 
	// hou een referentie naar het model, om het makkelijk te kunnen displayen (dus alleen om te LEZEN)!

	// ZET DE STYLES VAN DE BUTTONS IN JAVASCRIPT
	// let op, het volgende is een handige notatie, 
	// maar werkt niet in IE8 (tweede antwoord), http://stackoverflow.com/questions/1720320/how-to-dynamically-create-css-class-in-javascript-and-apply	
	// je kunt natuurlijk altijd stylesheets in HTML zetten, maar op deze manier houdt je wel alles mooi bij elkaar.

	// kijk of een stylesheet voor ToolboxView bestaat, zoniet, creer dynamisch en koppel met pagina
	// er is maar 1 stylesheet nodig, ook als er meer ToolBoxViews zouden zijn.
	var style = document.getElementById('ToolboxStyle');
	if(style==null)
	{
		style = document.createElement('style');
		style.id = 'ToolboxStyle';
		style.type = 'text/css';
		document.getElementsByTagName('head')[0].appendChild(style);
	}
	
	// zet de style van alle elementen van deze view dynamisch, inclusief pseudoclasses als hover!
	var css='';
	css+='.button {';
	css+='   display: inline-block;';
	css+='   padding: 15px;';
	css+='   margin: 0px 5px;';
	css+='   color: #fff;';
	css+='   background-color: #000;';
	css+='   cursor: pointer;';
	css+='}';
	css+='.selected {';
	css+='   background-color: #f00;';
	css+='}';
	css+='.button:hover {';
	css+='   color: #fff;';
	css+='   background-color: #888;';
	css+='}';
	css+='.selected:hover {';
	css+='   background-color: #f00;';
	css+='}';
	style.innerHTML = css;


	
	// maak een container voor de radio buttons en mogelijk andere widgets.
	this.container=document.createElement("div");
	this.container.style.cssText = "text-align: center;  height: 50px; border: 1px solid black; padding: 15px;";
	document.body.appendChild(this.container);

	// handler voor ALLE radiobuttons, we kijken naar innerHTML om te kijken op welke gedrukt is.
	// we zouden natuurlijk naar een willekeurig attribuut kunnen kijken
	// ev.currentTarget.getAttribute("willekeurig")
	this.handleRadioButtonClick=function (ev)
	{
		console.log("handle RadioButtonClick "+ev.currentTarget.innerHTML);
		if(typeof(context.callback)!="undefined")
		{
			// alle andere radio buttons moeten uit, dit gaat vanzelf
			// de view houdt er rekening mee, dat er maar 1 aanstaat.
			// we vertellen de presenter van de wisseling van het model.
			// het model doet een update en roept weer de presenter aan.
			// de presenter vertelt het de view.
			context.callback(ev.currentTarget.innerHTML); // copy the relevant part of the event.
		}
	};

	this.update=function()
	{
		this.container.innerHTML=""; // wist alle buttons die er al stonden!
		var t;
		for(t=0;t<this.model.radiobuttons.length;t++)
		{
			var but=document.createElement("div");
			var cls="button";
			if(this.model.selected_radiobutton==t)
			{
				console.log("ToolboxView: bekijkt model referentie en zie geselecteerde button: "+ t);
				cls+=" selected";
			}
			but.className=cls;
			but.innerHTML=this.model.radiobuttons[t];
			but.addEventListener("click",this.handleRadioButtonClick)
			this.container.appendChild(but);;
		}
	};
	
	this.update();
	
	this.callback=null;
	this.addCallback=function(callback)
	{
		this.callback=callback; // keep the (1 for now) subscriberCallback
	//	console.log("A subscriber was added to the view."+this.subscriber);
	};
}