Villager =
{
    location : TreeHouse,
    info : "Villager <br><br> She has kind eyes, and looks at you happily. :)",
    sayHello : "Say Hello",
    
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
        
        //Button Hello
        this.e_buttonHello = document.createElement("div");
        this.e_buttonHello.setAttribute("class", "button");
        this.e_buttonHello.innerHTML = this.sayHello;
        this.e_obj.appendChild(this.e_buttonHello)
    },
    
    chooseDest : function()
    {
        //Removes elements
        this.e_obj = null;
        //Loops through the objects array
        this.loc = world.objects[Math.floor(Math.random() * world.objects.length)];
        
        //Checks to see if loc has a dest if so, Villagers destination is set to it
        if(this.loc.dest)this.location = this.loc.dest;
        if(player.location == this.location)this.enter();
        console.log(this.location);
    },
}