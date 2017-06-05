function ColorPresenter(toolbox)
{
	var context=this;
	
	var kleur_model=new ColorModel();
	var kleur_view=new ColorView(kleur_model);
	kleur_view.addCallback(someoneClicksOnTheColorView);
	kleur_model.addCallback(somethingChangedTheColorModel);
	
	// handler voor klikken op de View.
	function someoneClicksOnTheColorView()
	{
		kleur_model.changeHue(0.03);
	}	
	

	// handler voor als het model veranderd.
	function somethingChangedTheColorModel(e)
	{
		//console.log("presenter changes the view!");
		kleur_view.setColor(kleur_model)
	}
	
}