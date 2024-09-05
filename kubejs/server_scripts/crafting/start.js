ServerEvents.recipes((event) => {
  event.remove({ output: "minecraft:cobblestone", input: "botania:pebble" });
  event.remove({ input: "botania:living_root", output: "botania:fertilizer" });
  event.remove({
    input: "botania:living_root",
    output: "minecraft:oak_sapling",
  });

  event.shapeless(Item.of("chemlib:silicon_dioxide", 1), [
    "botania:pebble",
    "botania:pebble",
    "botania:pebble",
    "botania:pebble",
  ]);

  event.shapeless(Item.of("botania:fertilizer", 1), [
    "botania:living_root",
    "botania:living_root",
  ]);

  event.shapeless(Item.of("minecraft:bone_meal", 2), [
    "botania:fertilizer",
    "chemlib:silicon_dioxide",
  ]);

  event.shapeless(Item.of("minecraft:oak_sapling", 1), [
    "botania:living_root",
    "minecraft:bone_meal",
    "minecraft:bone_meal",
  ]);

  event.shapeless(Item.of("minecraft:dirt", 4), [
    "minecraft:dirt",
    "minecraft:moss_block",
  ]);

  event.shapeless(Item.of("anvilcraft:amethyst_pickaxe", 1), [
    "minecraft:amethyst_block",
    "minecraft:amethyst_block",
    "minecraft:amethyst_block",
    "botania:living_root",
  ]);

  event.shapeless(Item.of("botania:living_root", 4), [
    "minecraft:moss_block",
    "botania:living_root",
  ]);

  event
    .shapeless(Item.of("mekanism:clump_iron", 1), [
      Item.of("anvilcraft:amethyst_pickaxe").ignoreNBT(),
      "minecraft:amethyst_shard",
    ])
    .damageIngredient(Item.of("anvilcraft:amethyst_pickaxe").ignoreNBT(), 1);

  event.remove({ output: "minecraft:oak_planks", input: "minecraft:oak_log" });
  event.remove({ output: "minecraft:stick", input: "minecraft:oak_log" });
  event.remove({
    output: "minecraft:crafting_table",
    input: "minecraft:oak_planks",
  });

  event.shapeless(Item.of("minecraft:oak_planks", 6), [
    "minecraft:oak_log",
    "minecraft:amethyst_shard",
  ]);

  event.shapeless(Item.of("quark:iron_button", 1), ["mekanism:clump_iron"]);

  event
    .shapeless(Item.of("chemlib:iron_oxide", 1), [
      Item.of("bloodmagic:bloodlightsigil").ignoreNBT(),
      "mekanism:clump_iron",
      "mekanism:clump_iron",
      "mekanism:clump_iron",
    ])
    .keepIngredient(Item.of("bloodmagic:bloodlightsigil").ignoreNBT());

  event
    .shapeless(Item.of("chemlib:carbonate", 1), [
      Item.of("bloodmagic:bloodlightsigil").ignoreNBT(),
      "chemlib:carbon",
      "chemlib:carbon",
      "chemlib:carbon",
    ])
    .keepIngredient(Item.of("bloodmagic:bloodlightsigil").ignoreNBT());

  event
    .shapeless(Item.of("mekanism:dirty_dust_iron", 1), [
      Item.of("anvilcraft:amethyst_pickaxe").ignoreNBT(),
      "mekanism:clump_iron",
      "mekanism:clump_iron",
    ])
    .damageIngredient(Item.of("anvilcraft:amethyst_pickaxe").ignoreNBT(), 1);

  event.shapeless(Item.of("chemlib:strontium_carbonate_dust", 2), [
    "chemlib:carbonate",
    "minecraft:bone_meal",
    "mekanism:dirty_dust_iron",
    "mekanism:dirty_dust_iron",
  ]);

  event.shapeless(Item.of("minecraft:redstone", 1), [
    "chemlib:strontium_carbonate_dust",
    "chemlib:strontium_carbonate_dust",
    "chemlib:iron_oxide",
    "chemlib:iron_oxide",
  ]);

  event.shapeless(Item.of("botania:redstone_root", 1), [
    "botania:living_root",
    "minecraft:redstone",
  ]);

  event.shapeless(Item.of("minecraft:cobblestone", 1), [
    "chemlib:silicon_dioxide",
    "chemlib:silicon_dioxide",
    "mekanism:clump_iron",
    "mekanism:clump_iron",
  ]);

  event.remove({
    output: "minecraft:lever",
    type: "minecraft:crafting_shaped",
  });

  event.shapeless(Item.of("quark:crafter"), [
    "minecraft:piston",
    "minecraft:dropper",
    "minecraft:redstone",
    "minecraft:redstone",
  ]);

  event.remove({
    output: "minecraft:oak_pressure_plate",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "minecraft:oak_button",
    type: "minecraft:crafting_shapeless",
  });
  event.remove({
    output: "minecraft:cartography_table",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "minecraft:fletching_table",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "minecraft:smithing_table",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "minecraft:grindstone",
    type: "minecraft:crafting_shaped",
  });
  event.remove({ output: "minecraft:loom", type: "minecraft:crafting_shaped" });
  event.remove({
    output: "minecraft:beehive",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "integrateddynamics:squeezer",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "rootsclassic:bark_knife",
    type: "minecraft:crafting_shaped",
  });
  event.remove({ output: "minecraft:furnace" });
  event.remove({
    output: "minecraft:diorite",
    type: "minecraft:crafting_shaped",
    input: "minecraft:cobblestone",
  });
  event.remove({
    output: "minecraft:andesite",
    type: "minecraft:crafting_shapeless",
    input: "minecraft:cobblestone",
  });
  event.remove({
    output: "botania:apothecary_default",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "enderio:stone_gear",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "minecraft:brewing_stand",
    type: "minecraft:crafting_shaped",
  });
  event.remove({
    output: "minecraft:stone_button",
    type: "minecraft:crafting_shapeless",
  });
  event.remove({
    output: "minecraft:iron_block",
    input: "quark:raw_iron_bricks",
  });
  event.remove({
    output: "quark:raw_iron_bricks",
    type: "minecraft:crafting_shaped",
  });

  event.shaped(Item.of("quark:raw_iron_bricks", 1), ["AAA", "AAA", "AAA"], {
    A: "mekanism:clump_iron",
  });

  event.shaped(Item.of("minecraft:anvil", 1), ["AAA", " A ", "AAA"], {
    A: "quark:raw_iron_bricks",
  });

  event.remove({ output: "enderio:primitive_alloy_smelter" });

  event.remove({ output: "minecraft:stone" });
  event.remove({ output: "minecraft:charcoal" });
  event.remove({ output: "quark:moss_paste" });
  event.remove({ output: "minecraft:deepslate", type: "minecraft:smelting" });
  event.remove({ output: "quark:deepslate_furnace" });
  event.remove({ output: "enderio:primitive_alloy_smelter" });

  event.shaped(Item.of("quark:deepslate_furnace"), ["AAA", "ABA", "AAA"], {
    A: "minecraft:cobbled_deepslate",
    B: "enderio:grains_of_infinity",
  });

  event.shaped(
    Item.of("enderio:primitive_alloy_smelter"),
    ["AAA", "BCB", "BBB"],
    {
      A: "quark:deepslate_furnace",
      B: "minecraft:cobbled_deepslate",
      C: "enderio:grains_of_infinity",
    }
  );

  event.recipes.enderio.alloy_smelting("minecraft:iron_ingot", [
    "4x mekanism:clump_iron",
    "botania:redstone_root",
  ]);

  event.recipes.enderio.alloy_smelting(
    "minecraft:stone",
    ["minecraft:cobblestone"],
    1000
  );

  event
    .shaped(Item.of("minecraft:granite"), ["AAA", "ABA", "AAA"], {
      A: "minecraft:stone",
      B: Item.of("bloodmagic:bloodlightsigil").ignoreNBT(),
    })
    .keepIngredient(Item.of("bloodmagic:bloodlightsigil").ignoreNBT());

  event.recipes.enderio.alloy_smelting("minecraft:copper_ingot", [
    "minecraft:iron_ingot",
    "2x minecraft:red_sand",
  ]);

  event.remove({
    output: "anvilcraft:deepslate_chips",
    type: "anvilcraft:anvil_processing",
  });

  event.shaped(
    Item.of("4x minecraft:cobbled_deepslate"),
    [" A ", "ABA", " A "],
    {
      A: "minecraft:cobblestone",
      B: "minecraft:cobbled_deepslate",
    }
  );

  event.shaped(
    Item.of("8x minecraft:cobbled_deepslate"),
    [" A ", "ABA", " A "],
    {
      A: "minecraft:stone",
      B: "minecraft:cobbled_deepslate",
    }
  );

  event.shapeless(Item.of("anvilcraft:anvil_hammer"), [
    Item.of("anvilcraft:anvil_hammer").ignoreNBT(),
    "quark:raw_iron_bricks",
  ]);

  event.remove({
    output: "minecraft:raw_iron",
    input: "quark:raw_iron_bricks",
  });
});
