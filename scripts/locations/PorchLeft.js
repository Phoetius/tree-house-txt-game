PorchLeft =
{
    info: "The Porch <br><br> Big wooden wind chimes hang from the roof of the porch. As the wind flows, they put off a deep soothing sound.",
    
    objects: [],
    
    enter : function()
    {
        print("You Walked To The Weaved Chair");
        
        this.install();
        
        for (var _ = 0; _ <= this.objects.length - 1; _++) {
            this.objects[_].enter.call(this.objects[_]);
        }
    },
    
    install : function()
    {
        //Main Div
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        c_main.appendChild(this.e_obj)
        
        //Info Div for Main Div
        this.e_objinfo = document.createElement("div");
        this.e_objinfo.innerHTML = this.info;
        this.e_obj.appendChild(this.e_objinfo);
    },
    
    update : function()
    {
        for (var _ = 0; _ <= this.objects.length - 1; _++)
        {
            if (this.objects[_].update) this.objects[_].update.call(this.objects[_]);
        }
    },
}