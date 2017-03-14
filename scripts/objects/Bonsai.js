Bonsai =
{
    waterinfo : "",
    wateramount : 0,
    
    info : "Bushy Bonsai <br><br>" +this.waterinfo+ "<br><br> There are streaks up and down along the dark bark. If you look closely, you can see small bits of moss growing.",
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        //Main Div
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        c_main.appendChild(this.e_obj);
        
        this.e_objinfo = document.createElement("div");
        this.e_objinfo.setAttribute("class", "info");
        this.e_objinfo.innerHTML = this.info;
        
        this.e_obj.appendChild(this.e_objinfo);
        
        //Spray Bonsai Button
        this.e_objbuttonW = document.createElement("div");
        this.e_objbuttonW.setAttribute("class", "button");
        this.e_objbuttonW.innerHTML = "Spray Bushy Bonsi";
        
        this.e_objbuttonW.style.visibility = "hidden";
        bonsai.e_objbuttonW.style.display = "none";
        
        addEvent(this.e_objbuttonW, "click", this.spraybonsai, this);
        addEvent(this.e_objbuttonW, "touchend", this.spraybosai, this);
        
        this.e_obj.appendChild(this.e_objbuttonW);
    },
    
    update : function()
    {
        this.wateramount -= .04;
        
        if(this.wateramount>=100)this.wateramount = 100;
        
        //Setting info of fireplace based on fuel in fire
        if(this.wateramount>66 && this.wateramount<=100) this.waterinfo = "The Bonsai's leaves are Wet";
        else if(this.wateramount>33 && this.wateramount<=66) this.waterinfo = "The Bonsai's leaves are Moist";
        else if(this.wateramount>0 && this.wateramount<=33) this.waterinfo = "The Bonsai's leaves are Lightly Misted";
        else if((this.wateramount<=0))
        {
            this.wateramount = 0;
            this.waterinfo = "The Bonsai's leaves are Dry";
        }
        
        //InnerHTML
        this.info = "Bushy Bonsai <br><br>" +this.waterinfo+ "<br><br> There are streaks up and down along the dark bark. If you look closely, you can see small bits of moss growing.";
        this.e_objinfo.innerHTML = this.info;
    },
    
    spraybonsai : function(e)
    {
        if(e.touches)e.preventDefault();
        
        this.wateramount += 33;
        print("You Sprayed The Bushy Bonsai");
    },
}