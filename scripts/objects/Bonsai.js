Bonsai =
{
    waterInfo : "",
    waterAmount : 0,
    
    info : "Bushy Bonsai <br><br>" +this.waterInfo+ "<br><br> There are streaks up and down along the dark bark. If you look closely, you can see small bits of moss growing.",
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        //Main Div
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        c_main.appendChild(this.e_obj);
        
        this.e_objInfo = document.createElement("div");
        this.e_objInfo.innerHTML = this.info;
        
        this.e_obj.appendChild(this.e_objInfo);
        
        //Spray Bonsai Button
        this.e_objButtonW = document.createElement("div");
        this.e_objButtonW.setAttribute("class", "button");
        this.e_objButtonW.innerHTML = "Spray Bushy Bonsi";
        
        this.e_objButtonW.style.visibility = "hidden";
        bonsai.e_objButtonW.style.display = "none";
        
        addEvent(this.e_objButtonW, "click", this.sprayBonsai, this);
        addEvent(this.e_objButtonW, "touchend", this.sprayBonsai, this);
        
        this.e_obj.appendChild(this.e_objButtonW);
    },
    
    update : function()
    {
        this.waterAmount -= .04;
        
        if(this.waterAmount>=100)this.waterAmount = 100;
        
        //Setting info of fireplace based on fuel in fire
        if(this.waterAmount>66 && this.waterAmount<=100) this.waterInfo = "The Bonsai's leaves are Wet";
        else if(this.waterAmount>33 && this.waterAmount<=66) this.waterInfo = "The Bonsai's leaves are Moist";
        else if(this.waterAmount>0 && this.waterAmount<=33) this.waterInfo = "The Bonsai's leaves are Lightly Misted";
        else if((this.waterAmount<=0))
        {
            this.waterAmount = 0;
            this.waterInfo = "The Bonsai's leaves are Dry";
        }
        
        //InnerHTML
        this.info = "Bushy Bonsai <br><br>" +this.waterInfo+ "<br><br> There are streaks up and down along the dark bark. If you look closely, you can see small bits of moss growing.";
        this.e_objInfo.innerHTML = this.info;
    },
    
    sprayBonsai : function(e)
    {
        if(e.touches)e.preventDefault();
        
        this.waterAmount += 33;
        print("You Sprayed The Bushy Bonsai");
    },
}