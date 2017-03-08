c_events = document.getElementById("events");
c_main = document.getElementById("main");

function print(txt)
{
    c_events.innerHTML += txt + "<br>";
    c_events.scrollTop = c_events.scrollHeight;
}

function printl()
{
    c_events.innerHTML += txt;
    c_events.scrollTop = c_events.scrollHeight;
}

function addEvent(el, ev, fun, obj)
{
    el.addEventListener(ev, function(){fun.call(obj, event)});
}

TreeHouse1 =
{
    objects:[],
    
    info: "Tree house <br><br> It's warm and smokey from the fireplace.",
    
    enter : function()
    {
        print("You Entered The Treehouse")
        this.install();
        
        for(_=0; _<=this.objects.length-1; _++)
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
    }
    
}

Fireplace =
{
    firestat : "",
    info: this.firestat + "<br><br> The fireplace is small and surrounded by rocks. Beside is a pile of sticks.",
    infob1: "Add Stick To Fire",
    fuel : 100,
    
    enter : function()
    {
        //Install
        this.install();
    },
    
    install : function()
    {
        this.e_obj = document.createElement("div");
        this.e_obj.setAttribute("class", "info");
       
        c_main.appendChild(this.e_obj);
        
        this.e_objinfo = document.createElement("div");
        this.e_objinfo.setAttribute("class", "info");
        this.e_objinfo.innerHTML = this.info;
        
        this.e_obj.appendChild(this.e_objinfo);
       
        this.e_objbutton = document.createElement("div");
        this.e_objbutton.setAttribute("class", "button");
        this.e_objbutton.innerHTML = this.infob1;
        
        addEvent(this.e_objbutton, "click", this.feedfuel, this);
       
        this.e_obj.appendChild(this.e_objbutton);
    },
    
    update : function()
    {
        this.fuel -= .04;
        
        if(this.fuel>=100)this.fuel = 100;
        
        //Setting info of fireplace based on fuel in fire
        if(this.fuel>66 && this.fuel<=100) this.firestat = "The Fireplace is Well lit.";
        else if(this.fuel>33 && this.fuel<=66) this.firestat = "The Fireplace is Calmly lit.";
        else if(this.fuel>0 && this.fuel<=33) this.firestat = "The Fireplace is Dimly lit.";
        else if((this.fuel<=0))
        {
            this.fuel = 0;
            this.firestat = "The Fireplace is Not lit.";
        }
        
        this.info = this.firestat + "<br><br> The fireplace is small and surrounded by rocks. Beside is a pile of sticks.";
        this.e_objinfo.innerHTML = this.info;
    },
    
    feedfuel : function()
    {
        this.fuel += 33;
    }
    
}

fireplace = Object.create(Fireplace);

TreeHouse1.objects.push(fireplace);


//START

TreeHouse1.enter();

function update()
{
    requestAnimationFrame(update);
    
fireplace.update();
}
requestAnimationFrame(update);