function ColorView(col)
{
	this.dom=document.createElement("div");
	
	// gebruikt cssText om meerdere eigenschappen in een keer te zetten!
	this.dom.style.cssText = "user-select: none; cursor: pointer; width: 150px; height: 150px; border: 1px solid black; display: inline-block; margin: 5px;"; 

	// nu gaan we een click EventListener toevoegen.
	// bewaar een link naar de huidige context voor als we deze verliezen
	// in een dom.eventHandler functie!
	var context=this;

	this.setColor=function(col)
	{
		this.dom.style.backgroundColor=col.toString();
		this.dom.innerHTML=col.toString();
		// kijk of je witte of zwarte text moet gebruiken.
		var greyValue=col.getGrayValue();
		if(greyValue<128)
		{
			this.dom.style.color="#fff";
		}else{		
			this.dom.style.color="#000";
		}
	};
	
	this.setColor(col);
	
	this.handleColorViewClick=function (ev)
	{
		// let op, this werkt niet
		// omdat de context van een Dom eventHandler ALTIJD het element is, dat het Event afvuurde.
		// daarom bewaren we dus de context in de variabele context..
		console.log("handleColorViewClick this: "+this);
		console.log("handleColorViewClick this.subscriber: "+this.callback);
		console.log("handleColorViewClick context.subscriber"+context.callback); 
		if(typeof(context.callback)!="undefined")
		{
			console.log("view handles event..");
			context.callback(context); // copy the event.. and give our instance to it to change the view.
		}else
		{
			console.log("no one subscribed.");
		}
	};
	this.dom.addEventListener("click",this.handleColorViewClick);
	
	// maak het zichtbaar.
	document.body.appendChild(this.dom);
	
	this.addCallback=function(callback)
	{
		this.callback=callback; // keep the (1 for now) subscriberCallback
		console.log("A subscriber was added to the view."+this.subscriber);
	};
}