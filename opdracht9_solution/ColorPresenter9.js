function ColorPresenter(toolbox)
{
	var context=this;
	
	Observer.installMethods(this)
	var tool="kleur"; // de app start met kleur.
	this.subscribe("Tool changed",function(new_tool){tool=new_tool; console.log("colorPresenter got the tool: "+tool);}); // create event, channel, data!

	// de toolbox. Deze presenter leest wat er moet gebeuren, het moment dat er geklikt wordt.
	
	var kleur_model=new ColorModel();
	var kleur_view=new ColorView(kleur_model);
	kleur_view.addCallback(someoneClicksOnTheColorView);
	kleur_model.addCallback(somethingChangedTheColorModel);
	
	// handler voor klikken op de View.
	function someoneClicksOnTheColorView()
	{
	// wat hier gebeurd is afhankelijk van wat er in de toolbox geselecteerd is.
		var commando=tool; //context.toolbox.model.radiobuttons[context.toolbox.model.selected_radiobutton];
		// dit kan een stuk meer ontkoppeld worden met EVENTS!
		
		console.log("klik op een color, huidige commando: "+commando)
		switch(commando)
		{
			case "kleur":
				kleur_model.changeHue(0.03);
			break;
			case "donkerder":
				kleur_model.darkenColor(0.03);
			break;
			case "lichter":
				kleur_model.lightenColor(0.03);
			break;
			default:
				console.log("ColorPresenter weet niet zeker wat hij moet met: "+commando);
		}
	}	
	

	// handler voor als het model veranderd.
	function somethingChangedTheColorModel(e)
	{
		//console.log("presenter changes the view!");
		kleur_view.setColor(kleur_model)
	}
	
}