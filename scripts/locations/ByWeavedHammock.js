ByWeavedHammock =
{
    info : "Tree house that is connected to the side of the tree <br><br> It's warm and smokey from the fireplace.",
    objects : [],
    
    enter : function()
    {
        print("You Are At The Weaved Hammock");
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
        this.e_locInfo = document.createElement("div");
        this.e_locInfo.innerHTML = this.info;
        this.e_loc.appendChild(this.e_locInfo);
    },
    
    update : function()
    {
        for(var _=0; _<=this.objects.length-1; _++)
        {
           if(this.objects[_].update)this.objects[_].update.call(this.objects[_]);
        }
    }
}