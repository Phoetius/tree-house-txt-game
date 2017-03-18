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
firePlace = Object.create(Fireplace);
TreeHouse.objects.push(firePlace);

table = Object.create(Table);
TreeHouse.objects.push(table);

sprayBottle = Object.create(SprayBottle);
Table.objects.push(sprayBottle);

bonsai = Object.create(Bonsai);
Table.objects.push(bonsai);

//Walk to hammock and to FirePlace
chest = Object.create(WoodenChest);
ByWeavedHammock.objects.push(chest);

weavedHammock = Object.create(WeavedHammock);
ByWeavedHammock.objects.push(weavedHammock);

walkToWeavedHammock = Object.create(Door);
walkToWeavedHammock.info = "Hammock";
walkToWeavedHammock.buttonInfo = "Walk To Hammock.";
walkToWeavedHammock.dest = ByWeavedHammock;
TreeHouse.objects.push(walkToWeavedHammock);

//
walkToFireplace = Object.create(Door);
walkToFireplace.info = "Fireplace";
walkToFireplace.buttonInfo = "Walk To Fireplace.";
walkToFireplace.dest = TreeHouse;
ByWeavedHammock.objects.push(walkToFireplace);

//Chest
closeChest = Object.create(Door);
closeChest.info = null;
closeChest.buttonInfo = "Close Chest";
closeChest.dest = ByWeavedHammock;
OpenedChest.objects.push(closeChest);


//Tree House door
treeHouseDoor = Object.create(Door);
treeHouseDoor.dest = Porch;
treeHouseDoor.info = "Wooden Door <br><br> The top is rounded, the wood is starting to crack.";
treeHouseDoor.buttonInfo = "Leave Treehouse";
TreeHouse.objects.push(treeHouseDoor);

//Porch
leftOfPorch = Object.create(Door);
leftOfPorch.info = "Creaky Path To Weaved Chair";
leftOfPorch.buttonInfo = "Walk to weaved chair";
leftOfPorch.dest = PorchLeft;
Porch.objects.push(leftOfPorch);

//
porchDoor = Object.create(Door);
porchDoor.info = "Wooden Door <br><br> The top is rounded, the wood is starting to crack.";
porchDoor.buttonInfo = "Enter";
porchDoor.dest = TreeHouse;
Porch.objects.push(porchDoor);

//Left of Porch
weavedChair = Object.create(WeavedChair);
PorchLeft.objects.push(weavedChair);

walkToTreeHouseDoor = Object.create(Door);
walkToTreeHouseDoor.info = "Creaky Path To Door";
walkToTreeHouseDoor.buttonInfo = "Walk to Door";
walkToTreeHouseDoor.dest = Porch;
PorchLeft.objects.push(walkToTreeHouseDoor);


//START
player.enter();

function update()
{
    requestAnimationFrame(update);
    player.location.update.call(player.location);
}
requestAnimationFrame(update);