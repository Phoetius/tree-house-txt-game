Door =
{
    info : "Wooden Door",
    dest : null,
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        
        c_main.appendChild(this.e_obj);
        
        //Info of e_obj + button // Will later add small description of the door and button will be separate
        this.e_infoB = document.createElement("div");
        this.e_infoB.setAttribute("class", "button");
        this.e_infoB.innerHTML = this.info;
        
        addEvent(this.e_infoB, "click", this.leave, this);
        addEvent(this.e_infoB, "touchend", this.leave, this);
        
        this.e_obj.appendChild(this.e_infoB);
    },
    
    leave : function(e)
    {
        if(e.touches)e.preventDefault();
        spraybottle.spraybotook = false;
        
        c_main.innerHTML = "";
        player.location = this.dest;
        player.enter();
    }
}