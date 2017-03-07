c_main = document.getElementById("main");

function print()
{
    // prints with break
}

function printl()
{
    // prints on current line
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
        this.install();
    },
    
    install : function()
    {
       this.e_loc = document.createElement("div");
       this.e_loc.setAttribute("class", "info");
       this.e_loc.innerHTML = this.info;
       
       c_main.appendChild(this.e_loc);
    }
    
}




//
TreeHouse1.enter();