Fireplace =
{
    firestat : "",
    info: this.firestat + "<br><br> The fireplace is small and surrounded by rocks. Beside is a pile of sticks.",
    infob1: "Add Stick To Fire",
    infoPickUpKey: "Pick Up Key",
    infoPlaceKey: "Place Key In Ash",
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
        this.e_objinfo.innerHTML = this.info;
        
        this.e_obj.appendChild(this.e_objinfo);
       
        //Add Stick to Fire Button
        this.e_objB = document.createElement("div");
        this.e_objB.setAttribute("class", "button");
        this.e_objB.innerHTML = this.infob1;
        
        this.e_obj.appendChild(this.e_objB);
        
        //Click on Button
        addEvent(this.e_objB, "click", this.feedfuel, this);
        addEvent(this.e_objB, "touchend", this.feedfuel, this);
        
        //Pick up Key Button
        this.e_objBkey = document.createElement("div");
        this.e_objBkey.setAttribute("class", "button");
        
        if(player.hasKey == false)this.e_objBkey.innerHTML = this.infoPickUpKey;
        else if(player.hasKey==true)this.e_objBkey.innerHTML = this.infoPlaceKey;
        
        this.e_objBkey.style.visibility = "hidden";
        this.e_objBkey.style.display = "none";
        
        this.e_obj.appendChild(this.e_objBkey);
        
        //Click on Key
        addEvent(this.e_objBkey, "click", this.pickUpKey, this);
        addEvent(this.e_objBkey, "touchend", this.pickUpKey, this);
    },
    
    update : function()
    {
        this.fuel -= .04;
        
        if(this.fuel>=100)
        {
            this.fuel = 100;
            this.e_objBkey.style.visibility = "hidden";
            this.e_objBkey.style.display = "none";
        }
        
        //Setting info of fireplace based on fuel in fire; Setting "Pick up key" to visible and not visible
        if(this.fuel>66 && this.fuel<=100)
        {
            this.firestat = "The Fireplace has big Hot Flames";
            this.e_objBkey.style.visibility = "hidden";
            this.e_objBkey.style.display = "none";
        }
        
        else if(this.fuel>33 && this.fuel<=66)
        {
            this.firestat = "The Fireplace has Medium Flames";
            this.e_objBkey.style.visibility = "hidden";
            this.e_objBkey.style.display = "none";
        }
        
        else if(this.fuel>0 && this.fuel<=33)
        {
            this.firestat = "The Fireplace has Glowing Embers.";
            this.e_objBkey.style.visibility = "hidden";
            this.e_objBkey.style.display = "none";
        }
        
        else if((this.fuel<=0))
        {
            this.fuel = 0;
            
            this.e_objBkey.style.visibility = "visible";
            this.e_objBkey.style.display = "inherit";
            
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
    },
    
    pickUpKey : function(e)
    {
        if(e.touches)e.preventDefault();
        
        if(player.hasKey==false)
        {
            player.hasKey = true;
            this.e_objBkey.innerHTML = this.infoPlaceKey;
            print("You Picked Up The Key");
        }
        else if(player.hasKey==true)
        {
            player.hasKey = false;
            this.e_objBkey.innerHTML = this.infoPickUpKey;
            print("You Placed The Key In The Ash");
        }
        
    }
    
}


// put a tag in its on variable.