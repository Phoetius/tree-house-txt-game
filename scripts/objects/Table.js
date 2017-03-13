Table =
{
    info : "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, a Spray Bottle, and Trimmers",
    
    objects : [],
    
    enter : function()
    {
        this.install();
        
        for(_=0; _<=this.objects.length-1; _++)
        {
            this.objects[_].enter.call(this.objects[_]);
        }
    },
    
    install : function()
    {
        //Main Div
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        
        c_main.appendChild(this.e_obj);
        
        //Info Div
        this.e_objinfo = document.createElement("div");
        this.e_objinfo.setAttribute("class", "info");
        this.e_objinfo.innerHTML = this.info;
        
        this.e_obj.appendChild(this.e_objinfo);
    },
}