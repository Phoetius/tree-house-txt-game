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
player = Object.create(Player);

fireplace1 = Object.create(Fireplace);
TreeHouse.objects.push(fireplace1);

table1 = Object.create(Table);
TreeHouse.objects.push(table1);

spraybottle = Object.create(SprayBottle);
Table.objects.push(spraybottle);

bonsai = Object.create(Bonsai);
Table.objects.push(bonsai);

treehousedoor = Object.create(Door);
treehousedoor.dest = Porch;
TreeHouse.objects.push(treehousedoor);


porchdoor = Object.create(Door);
porchdoor.dest = TreeHouse;
Porch.objects.push(porchdoor);




//START
player.enter();

function update()
{
    requestAnimationFrame(update);
    player.location.update.call(player.location);
}
requestAnimationFrame(update);