WeavedChair =
{
    info : "Weaved Chair <br><br> Small little crates are scattered around the chair with dirt and moss growing in them.",
    buttoninfo : "Sit in the weaved chair.",
    
    objects : [],
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        
        c_main.appendChild(this.e_obj);
        
        //Info Div
        this.e_infoB = document.createElement("div");
        this.e_infoB.innerHTML = this.info;
        this.e_obj.appendChild(this.e_infoB);
        
        //Button Sit Div
        this.e_button = document.createElement("div");
        this.e_button.setAttribute("class", "button");
        this.e_button.innerHTML = this.buttoninfo;
        
        addEvent(this.e_button, "click", this.sit, this);
        addEvent(this.e_button, "touchend", this.sit, this);
        this.e_obj.appendChild(this.e_button);
    },
    
    update : function()
    {
        for(var _=0; _<=this.objects.length-1; _++)
        {
           if(this.objects[_].update)this.objects[_].update.call(this.objects[_]);
        }
    },
    
    sit : function()
    {
        
    },
}