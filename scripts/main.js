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


//Tree House
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
treehousedoor.info = "Wooden Door <br><br> The top is rounded, the wood is starting to crack.";
treehousedoor.buttoninfo = "Leave Treehouse";
TreeHouse.objects.push(treehousedoor);

//Porch
leftofporch = Object.create(Door);
leftofporch.info = "Creaky Path To Weaved Chair";
leftofporch.buttoninfo = "Walk to weaved chair";
leftofporch.dest = PorchLeft;
Porch.objects.push(leftofporch);

porchdoor = Object.create(Door);
porchdoor.info = "Wooden Door <br><br> The top is rounded, the wood is starting to crack.";
porchdoor.buttoninfo = "Enter";
porchdoor.dest = TreeHouse;
Porch.objects.push(porchdoor);

//Left of Porch
weavedchair = Object.create(WeavedChair);
PorchLeft.objects.push(weavedchair);

walk_to_tree_house_door = Object.create(Door);
walk_to_tree_house_door.info = "Creaky Path To Door";
walk_to_tree_house_door.buttoninfo = "Walk to Door";
walk_to_tree_house_door.dest = Porch;
PorchLeft.objects.push(walk_to_tree_house_door);




//START
player.enter();

function update()
{
    requestAnimationFrame(update);
    player.location.update.call(player.location);
}
requestAnimationFrame(update);