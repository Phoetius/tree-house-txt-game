WeavedHammock =
{
    info : "Weaved Hammock <br><br> The weave work is precise and clean. A fluffy feather blanket, and weaved pillow fill the hammock.",
    
    enter : function()
    {
        this.install();
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
}