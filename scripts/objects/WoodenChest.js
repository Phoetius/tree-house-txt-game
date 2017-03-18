WoodenChest =
{
    info : "Wooden Chest by the wall<br><br> The wooden chest is dark in color, and has a rough texture.",
    buttonOpenInfo : "Open",
    buttonUnlockInfo : "Unlock",
    buttonLockInfo : "Lock",
    locked : true,
    
    enter : function()
    {
        this.install();
    },
    
    install : function()
    {
        //Main div
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
        c_main.appendChild(this.e_obj);
        
        //Info Div
        this.e_objInfo = document.createElement("div");
        this.e_objInfo.innerHTML = this.info;
        this.e_obj.appendChild(this.e_objInfo);
        
        // Main Button div
        this.e_button = document.createElement("div");
        this.e_obj.appendChild(this.e_button);
        
        //Info Div for Button : Open;
        this.e_buttonOpenInfo = document.createElement("div");
        this.e_buttonOpenInfo.setAttribute("class", "button");
        this.e_buttonOpenInfo.innerHTML = this.buttonOpenInfo;
        
        addEvent(this.e_buttonOpenInfo, "click", this.openChest, this);
        addEvent(this.e_buttonOpenInfo, "touchend", this.openChest, this);
        
        this.e_button.appendChild(this.e_buttonOpenInfo);
        
        //Unlock and Lock Button Div
        this.e_buttonUnlockInfo = document.createElement("div");
        this.e_buttonUnlockInfo.setAttribute("class", "button");
        
        if(this.locked)this.e_buttonUnlockInfo.innerHTML = this.buttonUnlockInfo;
        else this.e_buttonUnlockInfo.innerHTML = this.buttonLockInfo;
        
        this.e_buttonUnlockInfo.style.visibility = "hidden";
        this.e_buttonUnlockInfo.style.display = "none";
        
        addEvent(this.e_buttonUnlockInfo, "click", this.unlockChest, this);
        addEvent(this.e_buttonUnlockInfo, "touchend", this.unlockChest, this);
        
        this.e_button.appendChild(this.e_buttonUnlockInfo);
    },
    
    update : function()
    {
        if(player.hasKey == true)
        {
            this.e_buttonUnlockInfo.style.visibility = "visible";
            this.e_buttonUnlockInfo.style.display = "inherit";
        }
        else
        {
            this.e_buttonUnlockInfo.style.visibility = "hidden";
            this.e_buttonUnlockInfo.style.display = "none";
        }
    },
    
    openChest : function(e)
    {
        if(e.touches)e.preventDefault();
        
        if(this.locked)print("The Chest Is Locked");
        else if(this.locked == false)
        {
            print("You Opened The Chest");
            c_main.innerHTML = "";
            player.location = OpenedChest;
            player.enter();
        }
    },
    
    unlockChest : function(e)
    {
        if(e.touches)e.preventDefault();
        
        if(this.locked)
        {
            print("You Unlocked The Chest");
            this.e_buttonUnlockInfo.innerHTML = this.buttonLockInfo;
            this.locked = false;
        }
        else if(this.locked == false)
        {
            print("You Locked The Chest");
            this.e_buttonUnlockInfo.innerHTML = this.buttonUnlockInfo;
            this.locked = true;
        }
    },
}