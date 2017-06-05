function ToolboxModel()
{

	this.selected_radiobutton=0; // standaard eerste ingedrukt.
	this.callback=null;
	this.radiobuttons=[];
	this.addRadioButton=function(label)
	{
		this.radiobuttons.push(label);
	}

	// maakt onze r,g,b kleiner, de kleur donkerder.
	this.setRadioButton=function(naam_geklikte_button)
	{
		console.log("Presenter vraagt het ToolboxModel om de geselecteerde radiobutton te veranderen.");
		var t;
		for(t=0;t<this.radiobuttons.length;t++)
		{
			if(this.radiobuttons[t]==naam_geklikte_button)
			{
				console.log("ToolboxModel accepteert/vertaalt de waarde en vertelt aan de presenter dat de view moet worden geupdate");
				this.selected_radiobutton=t;
			}				
		}
		if(this.callback!=null)
		{
			this.callback();
		}
	}

// maakt deze Class handig in MVP (bij meerdere views en models in een presenter, werken we met events!)
	this.addCallback=function(callback)
	{
		this.callback=callback; // keep the (1 for now) subscriberCallback
//		console.log("A subscriber was added to the model."+this.callback);
	};
	
	
}