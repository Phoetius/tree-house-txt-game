TreeHouse =
{
    objects:[],
    
    info: "Tree house <br><br> It's warm and smokey from the fireplace.",
    
    enter : function()
    {
        print("You Entered The Treehouse");
        this.install();
        
        for(var _=0; _<=this.objects.length-1; _++)
        {
            this.objects[_].enter.call(this.objects[_]);
        }
    },
    
    install : function()
    {
       this.e_loc = document.createElement("div");
       this.e_loc.setAttribute("class", "info");
       this.e_loc.innerHTML = this.info;
       
       c_main.appendChild(this.e_loc);
    },
    
    update : function()
    {
        for(var _=0; _<=this.objects.length-1; _++)
        {
           if(this.objects[_].update)this.objects[_].update.call(this.objects[_]);
        }
    }
    
}
