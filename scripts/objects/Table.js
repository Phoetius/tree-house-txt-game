Table =
{
    info : "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, a Spray Bottle, and Trimmers",
    
    objects : [],
    
    //Spray bottle Variables and Info
    infoButtonSBtake : "Take Spray Bottle",
    infoButtonSBplace : "Place Spray Bottle On Table",
    spraybotook : false,
    
    
    enter : function()
    {
        this.install();
        
        for(_=0; _<=this.objects.length-1; _++)
        {
            this.objects[_].enter.call(this.objects[_]);
        }
    },
    
    install : function()
    {
        //Main Div
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        
        c_main.appendChild(this.e_obj);
        
        //Info Div
        this.e_objinfo = document.createElement("div");
        this.e_objinfo.setAttribute("class", "info");
        this.e_objinfo.innerHTML = this.info;
        
        this.e_obj.appendChild(this.e_objinfo);
        
        //Spray bottle button
        this.e_objbuttonSB = document.createElement("div");
        this.e_objbuttonSB.setAttribute("class", "button");
        
        addEvent(this.e_objbuttonSB, "click", this.clickspraybottle, this);
        addEvent(this.e_objbuttonSB, "touchend", this.clickspraybottle, this);
        
        //Sets innerHTML based on Button Variable
        if(this.spraybotook == false)this.e_objbuttonSB.innerHTML = this.infoButtonSBtake;
        else if(this.spraybotook == true)this.e_objbuttonSB.innerHTML = this.infoButtonSBplace;
        
        this.e_obj.appendChild(this.e_objbuttonSB);
    },
    
    clickspraybottle : function(e)
    {
        if(e.touches)e.preventDefault();
        
        //Spray Bottle is Held
        if(this.spraybotook == false)
        {
            this.spraybotook = true;
            this.e_objbuttonSB.innerHTML = this.infoButtonSBplace;
            print("You Took the Spray Bottle");
            
            this.e_objinfo.innerHTML = "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, and Trimmers";
            
            //Bonsai Water Button
            bonsai.e_objbuttonW.style.visibility = "visible";
            bonsai.e_objbuttonW.style.display = "inherit";
        }
        
        //Spray Bottle is put down
        else
        {
            this.spraybotook = false;
            this.e_objbuttonSB.innerHTML = this.infoButtonSBtake;
            print("You Placed the Spray Bottle on the table");
            
            this.e_objinfo.innerHTML = "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, a Spray Bottle, and Trimmers";
            
            bonsai.e_objbuttonW.style.visibility = "hidden";
            bonsai.e_objbuttonW.style.display = "none";
        }
    }
}