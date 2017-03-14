SprayBottle =
{
     //Spray bottle Variables and Info
    infoButtonSBtake : "Take Spray Bottle",
    infoButtonSBplace : "Place Spray Bottle On Table",
    spraybotook : false,
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        //this.e_obj = document.createElement("div");
        //c_main.appendChild(this.e_obj);
        
        //Spray bottle button
        this.e_buttontakeSB = document.createElement("div");
        this.e_buttontakeSB.setAttribute("class", "button");
        
        addEvent(this.e_buttontakeSB, "click", this.clickspraybottle, this);
        addEvent(this.e_buttontakeSB, "touchend", this.clickspraybottle, this);
        
        //Sets innerHTML based on Button Variable
        if(this.spraybotook == false)this.e_buttontakeSB.innerHTML = this.infoButtonSBtake;
        else if(this.spraybotook == true)this.e_buttontakeSB.innerHTML = this.infoButtonSBplace;
        
        table1.e_obj.appendChild(this.e_buttontakeSB);
    },
    
    clickspraybottle : function(e)
    {
        if(e.touches)e.preventDefault();
        
        //Spray Bottle is Held
        if(this.spraybotook == false)
        {
            this.spraybotook = true;
            this.e_buttontakeSB.innerHTML = this.infoButtonSBplace;
            print("You Took the Spray Bottle");
            
            table1.e_objinfo.innerHTML = "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, and Trimmers";
            
            //Bonsai Water Button
            bonsai.e_objbuttonW.style.visibility = "visible";
            bonsai.e_objbuttonW.style.display = "inherit";
        }
        
        //Spray Bottle is put down
        else
        {
            this.spraybotook = false;
            this.e_buttontakeSB.innerHTML = this.infoButtonSBtake;
            print("You Placed the Spray Bottle on the table");
            
            table1.e_objinfo.innerHTML = "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, a Spray Bottle, and Trimmers";
            
            bonsai.e_objbuttonW.style.visibility = "hidden";
            bonsai.e_objbuttonW.style.display = "none";
        }
    }
}