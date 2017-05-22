function ColorView(col)
{
	this.col=col;
	this.dom=document.createElement("div");
	this.dom.innerHTML=col.toString();
	this.dom.style.backgroundColor=col.toString();
	
	// gebruikt cssText om meerdere eigenschappen in een keer te zetten!
	this.dom.style.cssText = "width: 150px; height: 150px; border: 1px solid black; display: inline-block; margin: 5px;"; 
	this.dom.style.backgroundColor=col.toString();
	// kijk of je witte of zwarte text moet gebruiken.
	var greyValue=col.getGrayValue();
	if(greyValue<128)
	{
		this.dom.style.color="#fff";
	}else{		
		this.dom.style.color="#000";
	}
	
	document.body.appendChild(this.dom);
	
	this.setColor=function (col)
	{
		this.col=col;
		this.dom.style.backgroundColor=col.toString();
	};
}