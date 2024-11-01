ServerEvents.recipes((event) => {
  let SHAPED = event.shaped;
  let SHAPELESS = event.shapeless;
  let EIO_ALLOY = event.recipes.enderio.alloy_smelting;
  let CREATE_pressing = event.recipes.create.pressing;
  let CREATE_cutting = event.recipes.create.cutting;
  let CREATE_assembly = event.recipes.create.sequenced_assembly;
  let CREATE_deploying = event.recipes.create.deploying;
  let CREATE_milling = event.recipes.create.milling; // 小粉碎
  let CREATE_mixing = event.recipes.create.mixing;
  let CREATE_compacting = event.recipes.create.compacting;
  let CREATE_splashing = event.recipes.create.splashing;
  let CREATE_mechanicalCrafting = event.recipes.create.mechanical_crafting;
  let CREATE_crushing = event.recipes.create.crushing; // 大粉碎
  let ARS_imbuement = event.recipes.ars_nouveau.imbuement;
  let ARS_enchanting_apparatus = event.recipes.ars_nouveau.enchanting_apparatus;
  let CREATE_emptying = event.recipes.create.emptying;
  let CREATE_filling = event.recipes.create.filling;

  const I2 = "chemlib:iodine";
  const Ag = "chemlib:silver";
  const incompele = "create:incomplete_precision_mechanism";

  CREATE_assembly(
    "pneumaticcraft:ingot_iron_compressed",
    "create_dd:steel_ingot",
    [
      CREATE_deploying(incompele, [incompele, "create_dd:steel_ingot"]),
      CREATE_filling(incompele, [incompele, Fluid.lava(200)]),
      CREATE_pressing(incompele, incompele),
      CREATE_cutting(incompele, incompele),
    ]
  )
    .transitionalItem(incompele)
    .loops(20);

  CREATE_deploying("pneumaticcraft:reinforced_stone", [
    "pneumaticcraft:compressed_stone",
    "pneumaticcraft:ingot_iron_compressed",
  ]);

  CREATE_mechanicalCrafting(
    "pneumaticcraft:compressed_stone",
    ["AAAAA", "AAAAA", "AAAAA", "AAAAA", "AAAAA"],
    {
      A: "minecraft:stone",
    }
  );

  CREATE_cutting(
    "pneumaticcraft:reinforced_stone_slab",
    "pneumaticcraft:reinforced_stone"
  );

  CREATE_compacting("pneumaticcraft:reinforced_bricks", [
    "2x pneumaticcraft:reinforced_stone_slab",
  ]);

  event.custom({
    type: "pneumaticcraft:explosion_crafting",
    input: {
      tag: "forge:ingots/iron",
    },
    loss_rate: 100,
    results: [
      {
        item: "pneumaticcraft:ingot_iron_compressed",
      },
    ],
  });

  event.replaceInput(
    { output: "pneumaticcraft:air_compressor" },
    "minecraft:furnace",
    "enderio:primitive_alloy_smelter"
  );

  event.replaceInput(
    { output: "pneumaticcraft:thermopneumatic_processing_plant" },
    "pneumaticcraft:small_tank",
    "ars_nouveau:source_jar"
  );

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 1.0,
    exothermic: true,
    item_input: {
      amount: 4,
      item: "create_dd:steel_ingot",
    },
    item_output: {
      amount: 1,
      item: "pneumaticcraft:ingot_iron_compressed",
    },
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 1000,
      fluid: "minecraft:lava",
    },
    fluid_output: {
      amount: 500,
      fluid: "minecraft:lava",
    },
    pressure: 4.0,
    speed: 1.0,
    temperature: {
      min_temp: 298,
      max_temp: 333,
    },
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 2.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "minecraft:iron_block",
    },
    item_output: {
      amount: 1,
      item: "minecraft:heavy_weighted_pressure_plate",
    },
    pressure: 4.0,
    speed: 0.02,
    temperature: {
      min_temp: 318,
    },
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 1.0,
    exothermic: true,
    item_input: {
      amount: 1,
      item: "minecraft:magma_block",
    },
    item_output: {
      amount: 1,
      item: "botania:pebble",
    },
    pressure: 2.0,
    speed: 0.5,
    temperature: {
      min_temp: 0,
      max_temp: 473,
    },
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 2.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "minecraft:charcoal",
    },
    item_output: {
      amount: 1,
      item: "thermal:coal_coke",
    },
    pressure: 8.0,
    speed: 0.4,
    temperature: {
      min_temp: 298,
    },
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 4.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "anvilcraft:heavy_iron_block",
    },
    item_output: {
      amount: 1,
      item: "pneumaticcraft:compressed_iron_block",
    },
    pressure: 8.0,
    speed: 0.2,
    temperature: {
      min_temp: 298,
    },
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 1.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "minecraft:glass",
    },
    item_output: {
      amount: 1,
      item: "pneumaticcraft:pressure_chamber_glass",
    },
    pressure: 8.0,
    speed: 1.0,
    temperature: {
      min_temp: 353,
    },
  });

  SHAPED("pneumaticcraft:small_tank", ["ABA", "B B", "ABA"], {
    A: "pneumaticcraft:pressure_chamber_glass",
    B: "pneumaticcraft:ingot_iron_compressed",
  });

  SHAPED("pneumaticcraft:pressure_chamber_wall", ["ABA", "ACA", "ABA"], {
    A: "pneumaticcraft:ingot_iron_compressed",
    B: "pneumaticcraft:reinforced_bricks",
    C: "pneumaticcraft:pressure_chamber_glass",
  });

  SHAPELESS("pneumaticcraft:pressure_chamber_interface", [
    "pneumaticcraft:pressure_chamber_wall",
    "pneumaticcraft:pressure_chamber_wall",
    "pneumaticcraft:small_tank",
  ]);

  SHAPED("pneumaticcraft:pressure_chamber_valve", ["AAA", "ABA", "AAA"], {
    A: "pneumaticcraft:pressure_tube",
    B: "pneumaticcraft:pressure_chamber_interface",
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "create_dd:netherite_casing",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "create_dd:steel_block",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 8,
        item: "create:precision_mechanism",
      },
    ],
    pressure: 4.0,
    results: [
      {
        count: 1,
        item: "create_dd:industrial_casing",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "pneumaticcraft:ingot_iron_compressed",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "create_dd:bronze_ingot",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 8,
        item: "create:polished_rose_quartz",
      },
    ],
    pressure: 4.0,
    results: [
      {
        count: 1,
        item: "pneumaticcraft:turbine_blade",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 3,
        item: "pneumaticcraft:turbine_blade",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "pneumaticcraft:compressed_iron_block",
      },
    ],
    pressure: 4.0,
    results: [
      {
        count: 1,
        item: "pneumaticcraft:turbine_rotor",
      },
    ],
  });

  event.replaceInput(
    { output: "pneumaticcraft:safety_tube_module" },
    "pneumaticcraft:pressure_gauge",
    "create_dd:industrial_casing"
  );

  SHAPED("pneumaticcraft:reinforced_brick_wall", ["   ", "ABA", "   "], {
    A: "pneumaticcraft:reinforced_bricks",
    B: "create_dd:industrial_casing",
  });

  CREATE_emptying(Fluid.of("chemlib:ethane_fluid", 100), "chemlib:ethane");

  event.custom({
    type: "pneumaticcraft:fluid_mixer",
    fluid_output: {
      amount: 20,
      fluid: "chemlib:methane_fluid",
    },
    input1: {
      type: "pneumaticcraft:fluid",
      amount: 10,
      fluid: "chemlib:ethane_fluid",
    },
    input2: {
      type: "pneumaticcraft:fluid",
      amount: 10,
      fluid: "minecraft:lava",
    },
    pressure: 3.5,
    time: 20,
  });

  global.anvil_generic(
    "pneumaticcraft:oil_bucket",
    "chemlib:methane_bucket",
    1,
    "ad_astra:earth_globe",
    1.0
  );

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "chemlib:carbonate",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "minecraft:bone_meal",
      },
    ],
    pressure: 4.0,
    results: [
      {
        count: 4,
        item: "chemlib:strontium_carbonate_dust",
      },
    ],
  });

  SHAPED("pneumaticcraft:refinery", ["ABA", "CDC", "ABA"], {
    A: "pneumaticcraft:pressure_chamber_wall",
    B: "pneumaticcraft:reinforced_brick_wall",
    C: "create:polished_rose_quartz",
    D: "pneumaticcraft:small_tank",
  });

  SHAPED("pneumaticcraft:refinery_output", ["ABA", "CDC", "ABA"], {
    A: "pneumaticcraft:pressure_chamber_wall",
    B: "pneumaticcraft:reinforced_brick_wall",
    C: "pneumaticcraft:pressure_chamber_interface",
    D: "minecraft:diamond_block",
  });

  event.custom({
    type: "pneumaticcraft:fluid_mixer",
    fluid_output: {
      amount: 25,
      fluid: "pneumaticcraft:kerosene",
    },
    input1: {
      type: "pneumaticcraft:fluid",
      amount: 4,
      fluid: "pneumaticcraft:diesel",
    },
    input2: {
      type: "pneumaticcraft:fluid",
      amount: 2,
      fluid: "pneumaticcraft:lpg",
    },
    pressure: 3.5,
    time: 2,
  });

  event.custom({
    type: "pneumaticcraft:fluid_mixer",
    fluid_output: {
      amount: 400,
      fluid: "chemlib:methane_fluid",
    },
    input1: {
      type: "pneumaticcraft:fluid",
      amount: 200,
      fluid: "pneumaticcraft:kerosene",
    },
    input2: {
      type: "pneumaticcraft:fluid",
      amount: 100,
      fluid: "minecraft:lava",
    },
    pressure: 3.5,
    time: 240,
  });

  event.custom({
    type: "pneumaticcraft:fluid_mixer",
    fluid_output: {
      amount: 2000,
      fluid: "pneumaticcraft:gasoline",
    },
    input1: {
      type: "pneumaticcraft:fluid",
      amount: 50,
      fluid: "pneumaticcraft:kerosene",
    },
    input2: {
      type: "pneumaticcraft:fluid",
      amount: 200,
      fluid: "chemlib:methane_fluid",
    },
    pressure: 3.5,
    time: 240,
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 8.0,
    exothermic: true,
    item_input: {
      amount: 1,
      item: "thermal:coal_coke_block",
    },
    item_output: {
      amount: 1,
      item: "chemlib:beta_carotene",
    },
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 16000,
      fluid: "minecraft:water",
    },
    pressure: 4.0,
    speed: 0.01,
    temperature: {
      min_temp: 273,
      max_temp: 283,
    },
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "chemlib:beta_carotene",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "minecraft:potato",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "minecraft:baked_potato",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "thermal:potato_block",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "quark:potato_crate",
      },
    ],
    pressure: 4.0,
    results: [
      {
        count: 1,
        item: "minecraft:carrot",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "minecraft:carrot",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "minecraft:carrot",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "minecraft:carrot",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "minecraft:carrot",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "chemlib:gold",
      },
    ],
    pressure: 4.0,
    results: [
      {
        count: 1,
        item: "minecraft:golden_carrot",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "chemlib:ammonia_bucket",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 8,
        item: "anvilcraft:sapphire_block",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "minecraft:golden_carrot",
      },
    ],
    pressure: 4.0,
    results: [
      {
        count: 1,
        item: "pneumaticcraft:yeast_culture_bucket",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 1.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "minecraft:golden_carrot",
    },
    item_output: {
      amount: 1,
      item: "minecraft:golden_carrot",
    },
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 50,
      fluid: "pneumaticcraft:yeast_culture",
    },
    fluid_output: {
      amount: 50,
      fluid: "pneumaticcraft:ethanol",
    },
    pressure: 7.0,
    speed: 0.5,
    temperature: {
      min_temp: 312,
      max_temp: 318,
    },
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "minecraft:dirt",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "minecraft:wheat",
      },
    ],
    pressure: 5.3,
    results: [
      {
        count: 1,
        item: "minecraft:brown_dye",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 2.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "minecraft:brown_dye",
    },
    fluid_output: {
      amount: 200,
      fluid: "pneumaticcraft:vegetable_oil",
    },
    pressure: 4.0,
    speed: 1.0,
    temperature: {
      min_temp: 298,
      max_temp: 328,
    },
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 8.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "pneumaticcraft:biodiesel_bucket",
    },
    item_output: {
      amount: 1,
      item: "minecraft:bucket",
    },
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 500,
      fluid: "pneumaticcraft:gasoline",
    },
    fluid_output: {
      amount: 500,
      fluid: "pneumaticcraft:plastic",
    },
    pressure: 8.0,
    speed: 0.25,
    temperature: {
      min_temp: 1273,
      max_temp: 1373,
    },
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 8,
        item: "chemlib:aluminum_oxide",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 32,
        item: "chemlib:silicon_dioxide",
      },
    ],
    pressure: 5.3,
    results: [
      {
        count: 1,
        item: "chemlib:mullite",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "chemlib:mullite",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "pneumaticcraft:plastic",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 12,
        item: "minecraft:lapis_lazuli",
      },
    ],
    pressure: 4.0,
    results: [
      {
        count: 1,
        item: "pneumaticcraft:upgrade_matrix",
      },
    ],
  });

  event.replaceInput(
    { output: "chemlib:mullite" },
    "pneumaticcraft:cannon_barrel",
    "pneumaticcraft:reinforced_brick_wall"
  );

  SHAPED("6x pneumaticcraft:speed_upgrade", ["AAA", "BCB", "AAA"], {
    A: "pneumaticcraft:glycerol",
    B: "pneumaticcraft:pneumatic_cylinder",
    C: "pneumaticcraft:upgrade_matrix",
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 20.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "thermal:coal_coke_block",
    },
    item_output: {
      amount: 1,
      item: "minecraft:diamond",
    },
    pressure: 4.0,
    speed: 0.25,
    temperature: {
      min_temp: 1273,
    },
  });

  SHAPELESS(Item.of("create:precision_mechanism", 2), [
    "create:precision_mechanism",
    "pneumaticcraft:plastic",
    "pneumaticcraft:plastic",
  ]);

  event.replaceInput(
    { output: "pneumaticcraft:heat_pipe" },
    "pneumaticcraft:thermal_lagging",
    "pneumaticcraft:plastic"
  );

  CREATE_pressing(
    "4x pneumaticcraft:thermal_lagging",
    "pneumaticcraft:heat_pipe"
  );

  event.replaceInput(
    { output: "pneumaticcraft:pneumatic_cylinder" },
    "pneumaticcraft:cannon_barrel",
    "pneumaticcraft:reinforced_brick_wall"
  );

  SHAPED("pneumaticcraft:vacuum_pump", ["ABA", "CBC", "DDD"], {
    A: "pneumaticcraft:pressure_tube",
    B: "pneumaticcraft:turbine_rotor",
    C: "pneumaticcraft:pneumatic_cylinder",
    D: "pneumaticcraft:reinforced_brick_wall",
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 32,
        item: "minecraft:glass",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "botania:redstone_root",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "anvilcraft:circuit_board",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "pneumaticcraft:plastic",
      },
    ],
    pressure: -0.5,
    results: [
      {
        count: 1,
        item: "minecraft:redstone_lamp",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 1.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "minecraft:sand",
    },
    item_output: {
      amount: 1,
      item: "minecraft:glass",
    },
    pressure: 4.0,
    speed: 1,
    temperature: {
      min_temp: 398,
    },
  });

  EIO_ALLOY(
    "32x chemlib:keratin",
    ["2x chemlib:protein", "2x chemlib:starch", "chemlib:sulfur"],
    4000
  );

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "minecraft:white_wool",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "minecraft:green_dye",
      },
    ],
    pressure: -0.5,
    results: [
      {
        count: 1,
        item: "minecraft:green_wool",
      },
    ],
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 2,
        item: "minecraft:green_wool",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "anvilcraft:magnetoelectric_core",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 4,
        item: "create_dd:integrated_mechanism",
      },
    ],
    pressure: 3.5,
    results: [
      {
        count: 1,
        item: "pneumaticcraft:empty_pcb",
      },
    ],
  });

  global.anvil_generic(
    "anvilcraft:magnet_ingot",
    "minecraft:iron_ingot",
    1,
    "jaopca:storage_blocks.overcharge_alloy",
    0.5
  );

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "minecraft:terracotta",
      },
    ],
    pressure: 3.5,
    results: [
      {
        count: 1,
        item: "quark:shingles",
      },
    ],
  });

  SHAPED("pneumaticcraft:charging_station", ["AAA", "BCB", "DDD"], {
    A: "pneumaticcraft:pressure_tube",
    B: "quark:shingles",
    C: Item.of(
      "pneumaticcraft:empty_pcb",
      '{"pneumaticcraft:uv_exposure":100}'
    ).weakNBT(),
    D: "pneumaticcraft:thermal_lagging",
  });

  SHAPED("pneumaticcraft:pressure_gauge", [" A ", "ABA", " A "], {
    A: "pneumaticcraft:ingot_iron_compressed",
    B: Item.of(
      "pneumaticcraft:empty_pcb",
      '{"pneumaticcraft:uv_exposure":40}'
    ).weakNBT(),
  });

  SHAPED("pneumaticcraft:cannon_barrel", ["A A", "B B", "ACA"], {
    A: "pneumaticcraft:thermal_lagging",
    B: "pneumaticcraft:reinforced_brick_wall",
    C: "pneumaticcraft:pressure_gauge",
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "pneumaticcraft:cannon_barrel",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "create:iron_sheet",
      },
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "create:iron_sheet",
      },
    ],
    pressure: 3.5,
    results: [
      {
        count: 1,
        item: "pneumaticcraft:air_canister",
      },
    ],
  });

  SHAPED("pneumaticcraft:gps_tool", [" A ", "BCB", "BDB"], {
    A: "pneumaticcraft:air_canister",
    B: "minecraft:diamond_block",
    C: "minecraft:redstone_lamp",
    D: Item.of(
      "pneumaticcraft:empty_pcb",
      '{"pneumaticcraft:uv_exposure":60}'
    ).weakNBT(),
  });

  SHAPED("create_dd:reinforcement_plating", ["ABA", "CDC", "ABA"], {
    A: "pneumaticcraft:ingot_iron_compressed",
    B: "#forge:ingots/brass",
    C: Item.of(
      "pneumaticcraft:empty_pcb",
      '{"pneumaticcraft:uv_exposure":20}'
    ).weakNBT(),
    D: "pneumaticcraft:reinforced_brick_wall",
  });

  SHAPED("4x pneumaticcraft:heat_sink", ["AAA", "ABA", "AAA"], {
    A: "pneumaticcraft:ingot_iron_compressed",
    B: "create_dd:reinforcement_plating",
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 1.0,
    exothermic: true,
    item_input: {
      amount: 1,
      item: "chemlib:hydrochloric_acid",
    },
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 200,
      fluid: "minecraft:water",
    },
    fluid_output: {
      amount: 100,
      fluid: "chemlib:hydrochloric_acid_fluid",
    },
    pressure: -0.5,
    speed: 1,
    temperature: {
      min_temp: 298,
      max_temp: 308,
    },
  });

  event.custom({
    type: "pneumaticcraft:thermo_plant",
    air_use_multiplier: 1.0,
    exothermic: false,
    item_input: {
      amount: 1,
      item: "chemlib:iron",
    },
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 100,
      fluid: "chemlib:hydrochloric_acid_fluid",
    },
    fluid_output: {
      amount: 100,
      fluid: "pneumaticcraft:etching_acid",
    },
    pressure: 4.0,
    speed: 1,
    temperature: {
      min_temp: 348,
    },
  });

  event.replaceInput(
    { output: "pneumaticcraft:etching_tank" },
    "pneumaticcraft:reinforced_brick_slab",
    "pneumaticcraft:heat_sink"
  );

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "pneumaticcraft:pressure_chamber_glass",
      },
    ],
    pressure: 3.5,
    results: [
      {
        count: 1,
        item: "quark:clear_shard",
      },
    ],
    speed: 0.1, // 我在试着削弱压力室……
  });

  event.custom({
    type: "pneumaticcraft:pressure_chamber",
    inputs: [
      {
        type: "pneumaticcraft:stacked_item",
        count: 64,
        item: "quark:clear_shard",
      },
    ],
    pressure: 3.5,
    results: [
      {
        count: 1,
        item: "minecraft:glass_pane",
      },
    ],
  });

  SHAPED("pneumaticcraft:security_upgrade", ["ABA", "BCB", "ABA"], {
    A: "pneumaticcraft:speed_upgrade",
    B: "pneumaticcraft:failed_pcb",
    C: "pneumaticcraft:safety_tube_module",
  });

  SHAPED("pneumaticcraft:reinforced_chest", [" A ", "BCB", " D "], {
    A: "pneumaticcraft:security_upgrade",
    B: "pneumaticcraft:ingot_iron_compressed",
    C: "ars_nouveau:archwood_chest",
    D: "create_dd:reinforcement_plating",
  });

  SHAPED("pneumaticcraft:omnidirectional_hopper", ["A A", "ABA", " A "], {
    A: "minecraft:hopper",
    B: "pneumaticcraft:unassembled_pcb",
  });

  event.replaceInput(
    { output: "pneumaticcraft:smart_chest" },
    "pneumaticcraft:printed_circuit_board",
    "pneumaticcraft:unassembled_pcb"
  );

  SHAPED("pneumaticcraft:advanced_air_compressor", ["AAA", "ABC", "ADA"], {
    A: "pneumaticcraft:ingot_iron_compressed",
    B: "pneumaticcraft:smart_chest",
    C: "pneumaticcraft:unassembled_pcb",
    D: "pneumaticcraft:air_compressor",
  });

  event.remove({
    output: "pneumaticcraft:assembly_io_unit_import",
  });
  event.remove({
    output: "pneumaticcraft:assembly_io_unit_export",
  });

  event.replaceInput(
    { output: "pneumaticcraft:assembly_platform" },
    "pneumaticcraft:printed_circuit_board",
    "pneumaticcraft:smart_chest"
  );

  SHAPED("pneumaticcraft:assembly_io_unit_import", ["ABB", "  B", "CDC"], {
    A: "pneumaticcraft:omnidirectional_hopper",
    B: "pneumaticcraft:pneumatic_cylinder",
    C: "pneumaticcraft:ingot_iron_compressed",
    D: "pneumaticcraft:assembly_platform",
  });

  SHAPED("pneumaticcraft:assembly_io_unit_export", ["BBA", "B  ", "CDC"], {
    A: "pneumaticcraft:omnidirectional_hopper",
    B: "pneumaticcraft:pneumatic_cylinder",
    C: "pneumaticcraft:ingot_iron_compressed",
    D: "pneumaticcraft:assembly_platform",
  });

  event.replaceInput(
    { output: "pneumaticcraft:assembly_laser" },
    "minecraft:red_stained_glass",
    "pneumaticcraft:uv_light_box"
  );

  event.replaceInput(
    { output: "pneumaticcraft:assembly_laser" },
    "pneumaticcraft:printed_circuit_board",
    "pneumaticcraft:assembly_platform"
  );

  event.replaceInput(
    { output: "pneumaticcraft:assembly_drill" },
    "pneumaticcraft:printed_circuit_board",
    "pneumaticcraft:assembly_platform"
  );

  event.replaceInput(
    { output: "pneumaticcraft:assembly_drill" },
    "minecraft:diamond",
    "pneumaticcraft:gps_tool"
  );

  SHAPED("pneumaticcraft:assembly_controller", [" A ", "BCD", " E "], {
    A: "pneumaticcraft:assembly_drill",
    B: "pneumaticcraft:assembly_io_unit_import",
    C: "pneumaticcraft:assembly_platform",
    D: "pneumaticcraft:assembly_io_unit_export",
    E: "pneumaticcraft:assembly_laser",
  });

  event.replaceInput(
    { output: "anvilcraft:item_collector" },
    "anvilcraft:magnet",
    "anvilcraft:magnet_block"
  );

  event.custom({
    type: "pneumaticcraft:heat_frame_cooling",
    bonus_output: {
      limit: 5.0,
      multiplier: 1.0,
    },
    input: {
      type: "pneumaticcraft:fluid",
      amount: 100,
      tag: "pneumaticcraft:plastic",
    },
    max_temp: 273,
    result: {
      item: "pneumaticcraft:plastic",
    },
  });

  event.custom({
    type: "pneumaticcraft:assembly_laser",
    input: {
      type: "pneumaticcraft:stacked_item",
      count: 1,
      item: "create_dd:shadow_steel",
    },
    program: "laser",
    result: {
      item: "pneumaticcraft:transistor",
    },
  });

  event.custom({
    type: "pneumaticcraft:assembly_drill",
    input: {
      type: "pneumaticcraft:stacked_item",
      count: 1,
      item: "create_dd:chromatic_compound",
    },
    program: "drill",
    result: {
      item: "pneumaticcraft:capacitor",
    },
  });

  CREATE_mechanicalCrafting(
    Item.of(
      "pneumaticcraft:empty_pcb",
      1,
      '{"pneumaticcraft:uv_exposure":10000}'
    ),
    [
      "ABAAAAABA",
      "BCDBBBDCB",
      "ADCAAACDA",
      "ABADBDABA",
      "ABABCBABA",
      "ABADBDABA",
      "ADCAAACDA",
      "BCDBBBDCB",
      "ABAAAAABA",
    ],
    {
      A: "pneumaticcraft:plastic",
      B: "create_dd:integrated_mechanism",
      C: "pneumaticcraft:printed_circuit_board",
      D: Item.of(
        "pneumaticcraft:empty_pcb",
        1,
        '{"pneumaticcraft:uv_exposure":85}'
      ).weakNBT(),
    }
  );

  ARS_imbuement(
    Item.of(
      "pneumaticcraft:empty_pcb",
      1,
      '{"pneumaticcraft:uv_exposure":10000}'
    ).weakNBT(),
    "pneumaticcraft:module_expansion_card",
    10000,
    [
      "create_dd:stargaze_singularity",
      "create_dd:stargaze_singularity",
      "create_dd:stargaze_singularity",
      "create_dd:stargaze_singularity",
      "create_dd:stargaze_singularity",
      "create_dd:stargaze_singularity",
      "create_dd:stargaze_singularity",
      "create_dd:stargaze_singularity",
      "ars_nouveau:wilden_tribute",
    ]
  );

  event.custom({
    type: "pneumaticcraft:heat_frame_cooling",
    bonus_output: {
      limit: 0.0,
      multiplier: 0.0,
    },
    input: {
      type: "pneumaticcraft:stacked_item",
      count: 1,
      item: "pneumaticcraft:pressure_tube",
    },
    max_temp: 273,
    result: {
      item: "pneumaticcraft:advanced_pressure_tube",
    },
  });

  event.replaceInput(
    { output: "pneumaticcraft:vortex_tube" },
    "minecraft:copper_ingot",
    "pneumaticcraft:heat_sink"
  );

  event.replaceInput(
    { output: "pneumaticcraft:advanced_air_compressor" },
    "pneumaticcraft:air_compressor",
    "pneumaticcraft:thermal_compressor"
  );

  event.replaceInput(
    { output: "pneumaticcraft:heat_frame" },
    "minecraft:furnace",
    "pneumaticcraft:empty_pcb"
  );

  event.replaceInput(
    { output: "pneumaticcraft:vortex_tube" },
    "pneumaticcraft:pressure_tube",
    "pneumaticcraft:advanced_pressure_tube"
  );

  CREATE_mixing(Fluid.of("pneumaticcraft:yeast_culture", 200), [
    Fluid.of("pneumaticcraft:yeast_culture", 100),
    Fluid.of("minecraft:water", 1000),
    "4x minecraft:sugar",
  ]);
});
