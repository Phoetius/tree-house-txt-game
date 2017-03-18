Fireplace =
{
    fireStat : "",
    info: this.fireStat + "<br><br> The fireplace is small and surrounded by rocks. Beside is a pile of sticks.",
    infoB1: "Add Stick To Fire",
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
        this.e_objInfo = document.createElement("div");
        this.e_objInfo.innerHTML = this.info;
        
        this.e_obj.appendChild(this.e_objInfo);
       
        //Add Stick to Fire Button
        this.e_objB = document.createElement("div");
        this.e_objB.setAttribute("class", "button");
        this.e_objB.innerHTML = this.infoB1;
        
        this.e_obj.appendChild(this.e_objB);
        
        //Click on Button
        addEvent(this.e_objB, "click", this.feedFuel, this);
        addEvent(this.e_objB, "touchend", this.feedFuel, this);
        
        //Pick up Key Button
        this.e_objBKey = document.createElement("div");
        this.e_objBKey.setAttribute("class", "button");
        
        if(player.hasKey == false)this.e_objBKey.innerHTML = this.infoPickUpKey;
        else if(player.hasKey==true)this.e_objBKey.innerHTML = this.infoPlaceKey;
        
        this.e_objBKey.style.visibility = "hidden";
        this.e_objBKey.style.display = "none";
        
        this.e_obj.appendChild(this.e_objBKey);
        
        //Click on Key
        addEvent(this.e_objBKey, "click", this.pickUpKey, this);
        addEvent(this.e_objBKey, "touchend", this.pickUpKey, this);
    },
    
    update : function()
    {
        this.fuel -= .04;
        
        if(this.fuel>=100)
        {
            this.fuel = 100;
            this.e_objBKey.style.visibility = "hidden";
            this.e_objBKey.style.display = "none";
        }
        
        //Setting info of fireplace based on fuel in fire; Setting "Pick up key" to visible and not visible
        if(this.fuel>66 && this.fuel<=100)
        {
            this.fireStat = "The Fireplace has big Hot Flames";
            this.e_objBKey.style.visibility = "hidden";
            this.e_objBKey.style.display = "none";
        }
        
        else if(this.fuel>33 && this.fuel<=66)
        {
            this.fireStat = "The Fireplace has Medium Flames";
            this.e_objBKey.style.visibility = "hidden";
            this.e_objBKey.style.display = "none";
        }
        
        else if(this.fuel>0 && this.fuel<=33)
        {
            this.fireStat = "The Fireplace has Glowing Embers.";
            this.e_objBKey.style.visibility = "hidden";
            this.e_objBKey.style.display = "none";
        }
        
        else if((this.fuel<=0))
        {
            this.fuel = 0;
            
            this.e_objBKey.style.visibility = "visible";
            this.e_objBKey.style.display = "inherit";
            
            this.fireStat = "The Fireplace is nothing but Ash.";
        }
        
        //InnerHTML
        this.info = "<a class = 'fireStat' id='fireStat'>" + this.fireStat + "</a>" + "<br><br> The fireplace is small and surrounded by rocks. Beside is a pile of sticks.";
        this.e_objInfo.innerHTML = this.info;
        
        //Changing Color Based on Fuel
        fireStat_c = document.getElementById("fireStat")
        
        fireStat_c.style.color = "hsl(" +this.fuel/2+ ", " +this.fuel+ "%, " + 50 + "%)";
    },
    
    feedFuel : function(e)
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
            this.e_objBKey.innerHTML = this.infoPlaceKey;
            print("You Picked Up The Key");
        }
        else if(player.hasKey==true)
        {
            player.hasKey = false;
            this.e_objBKey.innerHTML = this.infoPickUpKey;
            print("You Placed The Key In The Ash");
        }
        
    }
    
}


// put a tag in its on variable.