BlockEvents.rightClicked("minecraft:budding_amethyst", (event) => {
  let { player } = event;
  let { block } = event;
  let Arr_block_1 = [block.east, block.south, block.west, block.north];
  let Arr_block_2 = [
    block.east.east,
    block.west.west,
    block.north.north,
    block.north.east,
    block.north.west,
    block.south.south,
    block.south.east,
    block.south.west,
  ];
  let bloo = true;

  if (
    player.mainHandItem.id == "minecraft:amethyst_shard" &&
    player.mainHandItem.count >= 12
  ) {
    Arr_block_1.forEach((a) => {
      if (a.id != "minecraft:amethyst_block") {
        bloo = false;
      }
    });
    Arr_block_2.forEach((a) => {
      if (a.id != "minecraft:calcite") {
        bloo = false;
      }
    });
    if (bloo) {
      player.give("anvilcraft:geode");
      player.mainHandItem.setCount(player.mainHandItem.count - 8);
    }
  }
});
