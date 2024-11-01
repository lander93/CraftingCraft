BlockEvents.placed("kubejs:spatial_rift", (event) => {
  const block = event.block;
  let _block = block.up;
  const Rnum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  Rnum.forEach((R) => {
    if (Math.random(1) <= 0.2) {
      _block = _block.up;
    } else if (Math.random(1) <= 0.4) {
      _block = _block.east;
    } else if (Math.random(1) <= 0.6) {
      _block = _block.west;
    } else if (Math.random(1) <= 0.8) {
      _block = _block.north;
    } else if (Math.random(1) <= 1) {
      _block = _block.south;
    }
  });
  if (_block.id == "minecraft:air") {
    if (
      _block.east.id == "minecraft:air" &&
      _block.west.id == "minecraft:air" &&
      _block.south.id == "minecraft:air" &&
      _block.north.id == "minecraft:air" &&
      _block.up.id == "minecraft:air" &&
      _block.down.id == "minecraft:air"
    ) {
      _block.set("minecraft:purple_stained_glass");
    }
  }
});
