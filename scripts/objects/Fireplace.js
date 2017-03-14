Fireplace =
{
    firestat : "",
    info: this.firestat + "<br><br> The fireplace is small and surrounded by rocks. Beside is a pile of sticks.",
    infob1: "Add Stick To Fire",
    fuel : 100,
    
    enter : function()
    {
        //Install
        this.install();
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
       
        //Button Div
        this.e_objbutton = document.createElement("div");
        this.e_objbutton.setAttribute("class", "button");
        this.e_objbutton.innerHTML = this.infob1;
        
        this.e_obj.appendChild(this.e_objbutton);
        
        //Click on Button
        addEvent(this.e_objbutton, "click", this.feedfuel, this);
        addEvent(this.e_objbutton, "touchend", this.feedfuel, this);
    },
    
    update : function()
    {
        this.fuel -= .04;
        
        if(this.fuel>=100)this.fuel = 100;
        
        //Setting info of fireplace based on fuel in fire
        if(this.fuel>66 && this.fuel<=100) this.firestat = "The Fireplace has big Hot Flames";
        else if(this.fuel>33 && this.fuel<=66) this.firestat = "The Fireplace has Medium Flames";
        else if(this.fuel>0 && this.fuel<=33) this.firestat = "The Fireplace has Glowing Embers.";
        else if((this.fuel<=0))
        {
            this.fuel = 0;
            this.firestat = "The Fireplace is nothing but Ash.";
        }
        
        //InnerHTML
        this.info = "<a class = 'firestat' id='firestat'>" + this.firestat + "</a>" + "<br><br> The fireplace is small and surrounded by rocks. Beside is a pile of sticks.";
        this.e_objinfo.innerHTML = this.info;
        
        //Changing Color Based on Fuel
        firestat_c = document.getElementById("firestat")
        
        firestat_c.style.color = "hsl(" +this.fuel/2+ ", " +this.fuel+ "%, " + 50 + "%)";
    },
    
    feedfuel : function(e)
    {
        if(e.touches)e.preventDefault();
        
        this.fuel += 33;
        print("You Fed The Fire");
    }
    
}


// put a tag in its on variable.