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




//Creation Of Objects

fireplace1 = Object.create(Fireplace);
TreeHouse.objects.push(fireplace1);

table1 = Object.create(Table);
TreeHouse.objects.push(table1);

bonsai = Object.create(Bonsai);
Table.objects.push(bonsai);


//START

TreeHouse.enter();

function update()
{
    requestAnimationFrame(update);
    
    fireplace1.update();
    bonsai.update();
}
requestAnimationFrame(update);