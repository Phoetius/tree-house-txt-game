Villager =
{
    location : TreeHouse,
    info : "Villager",
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        this.e_obj.innerHTML = this.info;
        
        c_main.insertBefore(this.e_obj, c_main.children[0]);
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