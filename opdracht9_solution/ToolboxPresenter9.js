function ToolboxPresenter()
{
	// De Toolboxpresenter exporteert 1 eigenschap: commando. 
	
	// subscribe to interesting events..
	Observer.installMethods(this);
//	this.subscribe("ToolboxChange",function(arg){console.log("pixotron detects viewtoolchange: "+arg);});
	
	
	var model=new ToolboxModel();
	model.addRadioButton("kleur");
	model.addRadioButton("donkerder");
	model.addRadioButton("lichter");
	model.setRadioButton("kleur"); // klik alvast op de button
	
	var view=new ToolboxView(model);

	view.addCallback(someoneClicksOnTheView);
	
	// handler voor klikken op de View.
	function someoneClicksOnTheView(what)
	{
		console.log("Toolbox Presenter learns the view is clicked and tells the ToolboxModel about it: "+what);
		model.setRadioButton(what);
	}	
	
	model.addCallback(somethingChangedTheToolboxModel);

	function somethingChangedTheToolboxModel()
	{
		view.update();
	}
	
}