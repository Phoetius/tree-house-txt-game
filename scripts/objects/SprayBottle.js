SprayBottle =
{
     //Spray bottle Variables and Info
    takeSBButtonInfo : "Take Spray Bottle",
    placeSBButtonInfo : "Place Spray Bottle On Table",
    sprayBottleTook : false,
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        // e_obj
        
        //Spray bottle button
        this.e_takeSBButton = document.createElement("div");
        this.e_takeSBButton.setAttribute("class", "button");
        
        addEvent(this.e_takeSBButton, "click", this.clickSprayBottle, this);
        addEvent(this.e_takeSBButton, "touchend", this.clickSprayBottle, this);
        
        //Sets innerHTML based on Button Variable
        if(this.sprayBottleTook == false)this.e_takeSBButton.innerHTML = this.takeSBButtonInfo;
        else if(this.sprayBottleTook == true)this.e_takeSBButton.innerHTML = this.placeSBButtonInfo;
        
        table.e_obj.appendChild(this.e_takeSBButton);
    },
    
    clickSprayBottle : function(e)
    {
        if(e.touches)e.preventDefault();
        
        //Spray Bottle is Held
        if(this.sprayBottleTook == false)
        {
            this.sprayBottleTook = true;
            this.e_takeSBButton.innerHTML = this.placeSBButtonInfo;
            print("You Took the Spray Bottle");
            
            //Setting innerHTML of Table
            table.e_objInfo.innerHTML = "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, and Trimmers";
            
            //Bonsai Water Button
            bonsai.e_objButtonW.style.visibility = "visible";
            bonsai.e_objButtonW.style.display = "inherit";
        }
        
        //Spray Bottle is put down
        else
        {
            this.sprayBottleTook = false;
            this.e_takeSBButton.innerHTML = this.takeSBButtonInfo;
            print("You Placed the Spray Bottle on the table");
            
            table.e_objInfo.innerHTML = "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, a Spray Bottle, and Trimmers";
            
            bonsai.e_objButtonW.style.visibility = "hidden";
            bonsai.e_objButtonW.style.display = "none";
        }
    }
}