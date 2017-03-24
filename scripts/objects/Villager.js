Villager =
{
    location : TreeHouse,
    name : "Villager",
    info : this.name + " <br><br> She has kind eyes, and looks at you happily. :)",
    talkBox : "",
    
    //
    saidHello : false,
    toldName:false,
    
    //Button info to talk
    greet : "Say hello",
    farewell : "Say farewell",
    askName : "What's your name?",
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        //Main Div
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        
        c_main.insertBefore(this.e_obj, c_main.children[0]);
        
        //Info for div
        this.e_objInfo = document.createElement("div");
        this.e_objInfo.innerHTML = this.info;
        this.e_obj.appendChild(this.e_objInfo);
        
        //Div where villagers speech is
        this.e_speech = document.createElement("div");
        this.e_speech.innerHTML = this.talkBox;
        this.e_speech.style.visibility = "hidden";
        this.e_speech.style.display = "none";
        
        this.e_obj.appendChild(this.e_speech);
        
        //Button Hello
        this.e_buttonHello = document.createElement("div");
        this.e_buttonHello.setAttribute("class", "button");
        
        if(this.saidHello==false)this.e_buttonHello.innerHTML = this.greet;
        else if(this.saidHello==true)this.e_buttonHello.innerHTML = this.farewell;
        
        addEvent(this.e_buttonHello, "click", this.sayHello, this);
        addEvent(this.e_buttonHello, "touchend", this.sayHello, this);
        
        this.e_obj.appendChild(this.e_buttonHello)
        
        //Ask Name Button
        this.e_askNameButton = document.createElement("div");
        this.e_askNameButton.setAttribute("class", "button");
        this.e_askNameButton.innerHTML = this.askName;
        this.e_askNameButton.style.visibility = "hidden";
        this.e_askNameButton.style.display = "none";
        
        addEvent(this.e_askNameButton, "click", this.askVName, this);
        addEvent(this.e_askNameButton, "touchend", this.askVName, this);
        
        this.e_obj.appendChild(this.e_askNameButton)
    },
    
    chooseDest : function()
    {
        //Removes elements
        this.e_obj = null;
        //Loops through the objects array
        this.loc = world.objects[Math.floor(Math.random() * world.objects.length)];
        
        //Checks to see if loc has a dest if so, Villagers destination is set to it
        if(this.loc.dest)
        {
            this.location = this.loc.dest;
            this.saidHello = false;
        }
        if(player.location == this.location)
        {
            this.enter();
            this.saidHello = false;
        }
        console.log(this.location);
    },
    
    //Sayy Hello and GoodBye
    sayHello : function(e)
    {
        if(e.touches)e.preventDefault();
        
        if(this.saidHello==false)
        {
            print("You Said Hello To The Villager.");
            
            this.saidHello = true;
            this.e_buttonHello.innerHTML = this.farewell;
            
            this.talkBox = "<br>" +this.name+ ": Hello.",
            this.e_speech.innerHTML = this.talkBox;
            
            //Sets "Ask Name Button to Visible"
            this.e_askNameButton.style.visibility = "visible";
            this.e_askNameButton.style.display = "inherit";
        }
        else if(this.saidHello==true)
        {
            print("You Said Farewell To The Villager.");
            
            this.saidHello=false;
            this.e_buttonHello.innerHTML = this.greet;
            this.talkBox = "<br>" +this.name+ ": Farewell!",
            this.e_speech.innerHTML = this.talkBox;
            
            //Sets "Ask Name Button to Hidden"
            this.e_askNameButton.style.visibility = "hidden";
            this.e_askNameButton.style.display = "none";
        }
        
        //Sets Villagers speech to visible
        this.e_speech.style.visibility = "visible";
        this.e_speech.style.display = "inherit";
    },
    
    //Ask Villagers Name
    askVName : function(e)
    {
        if(e.touches)e.preventDefault();
        print("You Asked The Villager's Name.");
        
        if(this.toldName==false)
        {
            this.toldName = true;
            this.name = "Luna";
            this.info = this.name + " <br><br> She has kind eyes, and looks at you happily. :)",
            this.e_objInfo.innerHTML = this.info;
            this.talkBox = "<br>" +this.name+ ": My Name is " +this.name;
            this.e_speech.innerHTML = this.talkBox;
        }
        else if(this.toldName==true)
        {
            this.talkBox = "<br>" +this.name+ ": I already told you, my name is " +this.name,
            this.e_speech.innerHTML = this.talkBox;
        }
    }
}