Table =
{
    info : "A Long Wooden Table <br><br> Bits of moss travel in between the cracks. On top is a small Bushy Bonsai, a Spray Bottle, and Trimmers",
    
    objects : [],
    
    //Spray bottle Variables and Info
    infoButtonSBtake : "Take Spray Bottle",
    infoButtonSBplace : "Place Spray Bottle On Table",
    spraybotook : false,
    
    
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
        this.e_obj.innerHTML = this.info;
        
        c_main.appendChild(this.e_obj);
        
        //Spray bottle button
        this.e_objbuttonSB = document.createElement("div");
        this.e_objbuttonSB.setAttribute("class", "button");
        
        this.e_obj.appendChild(this.e_objbuttonSB);
    },
    
    update : function()
    {
        if(this.spraybotook == false)this.e_objbuttonSB.innerHTML = this.infoButtonSBtake;
        else if(this.spraybotook == true)this.e_objbuttonSB.innerHTML = this.infoButtonSBplace;
    },
}