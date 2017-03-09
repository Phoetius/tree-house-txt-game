Bonsai =
{
    info : "Bushy Bonsai. <br><br> There are streaks up and down along the dark bark. If you look closely, you can see small bits of moss growing.",
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        //Main Div
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        this.e_obj.innerHTML = this.info;
        
        c_main.appendChild(this.e_obj);
    },
}