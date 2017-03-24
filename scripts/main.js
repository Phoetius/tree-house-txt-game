c_events = document.getElementById("events");
c_main = document.getElementById("main");

function print(txt) {
    c_events.innerHTML += txt + "<br>";
    c_events.scrollTop = c_events.scrollHeight;
}

function printl() {
    c_events.innerHTML += txt;
    c_events.scrollTop = c_events.scrollHeight;
}

function addEvent(el, ev, fun, obj) {
    el.addEventListener(ev, function() {
        fun.call(obj, event)
    });
}


//Creation Of Objects

world = {locations: [], objects: []};

player = Object.create(Player);

villager = Object.create(Villager);
villager.info = villager.name + " <br><br> She has kind eyes, and looks at you happily. :)",


//Tree House
firePlace = Object.create(Fireplace);
TreeHouse.objects.push(firePlace);

table = Object.create(Table);
TreeHouse.objects.push(table);

sprayBottle = Object.create(SprayBottle);
Table.objects.push(sprayBottle);

bonsai = Object.create(Bonsai);
Table.objects.push(bonsai);

//Pushed to world
world.locations.push(TreeHouse);
world.objects.push(firePlace);
world.objects.push(table);
world.objects.push(sprayBottle);
world.objects.push(bonsai);

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

//Pushed to world
world.locations.push(ByWeavedHammock);
world.objects.push(chest);
world.objects.push(weavedHammock);
world.objects.push(walkToWeavedHammock);

//
walkToFireplace = Object.create(Door);
walkToFireplace.info = "Fireplace";
walkToFireplace.buttonInfo = "Walk To Fireplace.";
walkToFireplace.dest = TreeHouse;
ByWeavedHammock.objects.push(walkToFireplace);

//Pushed to world
world.objects.push(walkToFireplace);

//Chest
closeChest = Object.create(Door);
closeChest.info = null;
closeChest.buttonInfo = "Close Chest";
closeChest.dest = ByWeavedHammock;
OpenedChest.objects.push(closeChest);

//Pushed to world
world.objects.push(closeChest);

//Tree House door
treeHouseDoor = Object.create(Door);
treeHouseDoor.dest = Porch;
treeHouseDoor.info = "Wooden Door <br><br> The top is rounded, the wood is starting to crack.";
treeHouseDoor.buttonInfo = "Leave Treehouse";
TreeHouse.objects.push(treeHouseDoor);

//Pushed to world
world.objects.push(treeHouseDoor);

//Porch
leftOfPorch = Object.create(Door);
leftOfPorch.info = "Creaky Path To Weaved Chair";
leftOfPorch.buttonInfo = "Walk to weaved chair";
leftOfPorch.dest = PorchLeft;
Porch.objects.push(leftOfPorch);

//Pushed to world
world.locations.push(Porch);
world.objects.push(leftOfPorch);


//Porch Door
porchDoor = Object.create(Door);
porchDoor.info = "Wooden Door <br><br> The top is rounded, the wood is starting to crack.";
porchDoor.buttonInfo = "Enter";
porchDoor.dest = TreeHouse;
Porch.objects.push(porchDoor);

//Pushed to world
world.objects.push(porchDoor);


//Left of Porch
weavedChair = Object.create(WeavedChair);
PorchLeft.objects.push(weavedChair);

walkToTreeHouseDoor = Object.create(Door);
walkToTreeHouseDoor.info = "Creaky Path To Door";
walkToTreeHouseDoor.buttonInfo = "Walk to Door";
walkToTreeHouseDoor.dest = Porch;
PorchLeft.objects.push(walkToTreeHouseDoor);

//Pushed to world
world.locations.push(PorchLeft);
world.objects.push(weavedChair);
world.objects.push(walkToTreeHouseDoor);

//START
player.enter();


function update()
{
    requestAnimationFrame(update);
    player.location.update.call(player.location);
}
requestAnimationFrame(update);

function turnUpdate()
{
    villager.chooseDest();
}