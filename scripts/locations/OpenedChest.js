OpenedChest =
{
    info : "Opened Chest <br><br> The wooden chest is dark in color, and has a rough texture.",
    objects : [],
    
    enter : function()
    {
        this.install();
        
        for(var _=0; _<=this.objects.length-1; _++)
        {
            this.objects[_].enter.call(this.objects[_]);
        }
    },
    
    install : function()
    {
        //Main div
        this.e_loc = document.createElement("div");
        this.e_loc.setAttribute("class", "info");
        c_main.appendChild(this.e_loc);
        
        //Info Div
        this.e_locinfo = document.createElement("div");
        this.e_locinfo.innerHTML = this.info;
        this.e_loc.appendChild(this.e_locinfo);
    },
    
    update : function()
    {
        for(var _=0; _<=this.objects.length-1; _++)
        {
           if(this.objects[_].update)this.objects[_].update.call(this.objects[_]);
        }
    }
}