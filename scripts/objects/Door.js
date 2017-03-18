Door =
{
    info : "",
    buttonInfo:"",
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
        
        //Info Of e_obj
        this.e_infoB = document.createElement("div");
        this.e_infoB.innerHTML = this.info;
        this.e_obj.appendChild(this.e_infoB);
        
        //Actual Button You Click To Go To Location
        this.e_button = document.createElement("div");
        this.e_button.setAttribute("class", "button");
        
        this.e_button.innerHTML = this.buttonInfo;
        this.e_button.innerHTML.visibility = "hidden";
        this.e_button.innerHTML.display = "none";
        
        addEvent(this.e_button, "click", this.leave, this);
        addEvent(this.e_button, "touchend", this.leave, this);
        this.e_obj.appendChild(this.e_button);
    },
    
    leave : function(e)
    {
        if(e.touches)e.preventDefault();
        sprayBottle.sprayBottleTook = false;
        
        c_main.innerHTML = "";
        player.location = this.dest;
        player.enter();
    }
}