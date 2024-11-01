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
  let THERMAL_crystallizer = event.recipes.thermal.crystallizer;

  const I2 = "chemlib:iodine";
  const Ag = "chemlib:silver";
  const incompele = "create:incomplete_precision_mechanism";

  SHAPED("thermal:machine_crystallizer", [" A ", "BCB", "DED"], {
    A: "minecraft:glass_pane",
    B: "create_dd:mithril_sheet",
    C: "create_dd:stargaze_singularity_casing",
    D: "jaopca:gears.brass",
    E: "pneumaticcraft:module_expansion_card",
  });

  event.custom({
    type: "pneumaticcraft:assembly_drill",
    input: {
      type: "pneumaticcraft:stacked_item",
      count: 4,
      item: "create:brass_ingot",
    },
    program: "drill",
    result: {
      item: "jaopca:gears.brass",
    },
  });

  event.replaceInput(
    {},
    "#pneumaticcraft:upgrade_components",
    "pneumaticcraft:upgrade_matrix"
  );

  CREATE_mixing(
    "4x ars_nouveau:experience_gem",
    [
      "create_dd:experience_ingot",
      "minecraft:amethyst_cluster",
      Fluid.of("pneumaticcraft:memory_essence", 500),
    ],
    1600
  );

  ARS_enchanting_apparatus(
    [
      "minecraft:lapis_lazuli",
      "minecraft:lapis_lazuli",
      "minecraft:lapis_lazuli",
      "minecraft:lapis_lazuli",
    ],
    "ars_nouveau:experience_gem",
    "integrateddynamics:crystalized_menril_chunk",
    100
  );

  CREATE_compacting("minecraft:oak_wood", "8x minecraft:oak_log");

  CREATE_crushing("minecraft:black_dye", "thermal:coal_coke_block");

  SHAPED("integrateddynamics:drying_basin", ["ABA", "C C", "ABA"], {
    A: "minecraft:oak_wood",
    B: "minecraft:black_dye",
    C: "pneumaticcraft:compressed_iron_gear",
  });

  event.replaceInput(
    { output: "pneumaticcraft:compressed_iron_gear" },
    "minecraft:iron_ingot",
    "create_dd:mithril_ingot"
  );

  SHAPED("integrateddynamics:squeezer", ["ABA", "C C", "ABA"], {
    A: "anvilcraft:reinforced_concrete_black",
    B: "minecraft:coarse_dirt",
    C: "pneumaticcraft:compressed_iron_gear",
  });

  event.custom({
    type: "integrateddynamics:drying_basin",
    item: "minecraft:oak_wood",
    fluid: {
      fluid: "integrateddynamics:menril_resin",
      amount: 50,
    },
    duration: 200,
    result: {
      item: "integrateddynamics:menril_log_filled",
    },
  });

  event.custom({
    type: "integrateddynamics:squeezer",
    item: "integrateddynamics:crystalized_menril_chunk",
    result: {
      fluid: {
        fluid: "integrateddynamics:menril_resin",
        amount: 25,
      },
    },
  });

  SHAPED("8x integrateddynamics:cable", [" A ", "BCB", " A "], {
    A: "create_dd:infernal_mechanism",
    B: "integrateddynamics:crystalized_menril_chunk",
    C: "integrateddynamics:menril_log",
  });

  SHAPED(
    Item.of("integrateddynamics:variable").withChance(0.1),
    ["AAA", "ABA", "AAA"],
    {
      A: "integrateddynamics:cable",
      B: "create:sand_paper",
    }
  );

  event.replaceInput(
    { output: "integrateddynamics:variablestore" },
    "#forge:chests/wooden",
    "integrateddynamics:variable"
  );
  event.replaceInput(
    { output: "integrateddynamics:variablestore" },
    "integrateddynamics:crystalized_menril_block",
    "ars_nouveau:archwood_chest"
  );

  SHAPED("integrateddynamics:logic_programmer", ["AQB", "QEQ", "CQD"], {
    A: "minecraft:crafting_table",
    B: "quark:crafter",
    C: "anvilcraft:batch_crafter",
    D: "create:mechanical_crafter",
    E: "integrateddynamics:variablestore",
    Q: "integrateddynamics:cable",
  });

  SHAPED("integrateddynamics:proxy", ["ABA", "BCB", "ABA"], {
    A: "integrateddynamics:variable",
    B: "integrateddynamics:menril_log",
    C: "integrateddynamics:logic_programmer",
  });

  SHAPED("integrateddynamics:materializer", ["ABA", "ACA", "ADA"], {
    A: "pneumaticcraft:plastic_brick_white",
    B: "pneumaticcraft:module_expansion_card",
    C: "integrateddynamics:proxy",
    D: "create_dd:stargaze_singularity_casing",
  });

  event.custom({
    type: "pneumaticcraft:assembly_laser",
    input: {
      type: "pneumaticcraft:stacked_item",
      count: 20,
      item: "pneumaticcraft:plastic",
    },
    program: "laser",
    result: {
      item: "pneumaticcraft:plastic_brick_white",
    },
  });

  ARS_imbuement(
    "ars_nouveau:experience_gem",
    "ars_nouveau:greater_experience_gem",
    100,
    [
      "integrateddynamics:materializer",
      "integrateddynamics:facade",
      "integrateddynamics:facade",
      "integrateddynamics:facade",
    ]
  );

  CREATE_cutting(
    "3x integrateddynamics:crystalized_menril_chunk",
    "integrateddynamics:menril_log_filled"
  ).processingTime(200);

  SHAPED("anvilcraft:capacitor_empty", [" A ", "BCB", " A "], {
    A: "create_dd:mithril_sheet",
    B: "ars_nouveau:greater_experience_gem",
    C: "anvilcraft:resin_block",
  });

  ARS_enchanting_apparatus(
    [
      "anvilcraft:capacitor",
      "anvilcraft:capacitor",
      "ars_nouveau:greater_experience_gem",
      "ars_nouveau:greater_experience_gem",
      "integrateddynamics:crystalized_menril_chunk",
      "integrateddynamics:crystalized_menril_chunk",
      "integrateddynamics:crystalized_menril_chunk",
      "integrateddynamics:crystalized_menril_chunk",
    ],
    "minecraft:golden_apple",
    "integrateddynamics:menril_berries",
    100
  );

  ARS_imbuement(
    "kubejs:blue_apple",
    "integrateddynamics:menril_berries",
    1000,
    ["ars_nouveau:greater_experience_gem", "anvilcraft:capacitor"]
  );

  SHAPED(
    "integrateddynamics:portable_logic_programmer",
    [" A ", "ABA", " A "],
    {
      A: "integrateddynamics:menril_berries",
      B: "integrateddynamics:logic_programmer",
    }
  );

  CREATE_cutting(
    "integrateddynamics:variable_transformer_output",
    "integrateddynamics:portable_logic_programmer",
    1200
  );

  CREATE_crushing(
    "integrateddynamics:variable_transformer_input",
    "integrateddynamics:portable_logic_programmer",
    1200
  );

  CREATE_mechanicalCrafting(
    "2x integratedtunnels:part_interface_item",
    ["DA BD", "DC CD", "DDDDD"],
    {
      A: "integrateddynamics:variable_transformer_output",
      B: "integrateddynamics:variable_transformer_input",
      C: "create:brass_tunnel",
      D: "pneumaticcraft:plastic",
    }
  );

  CREATE_mechanicalCrafting(
    "2x integratedtunnels:part_interface_fluid",
    ["DA BD", "DC CD", "DDDDD"],
    {
      A: "integrateddynamics:variable_transformer_output",
      B: "integrateddynamics:variable_transformer_input",
      C: "create:portable_fluid_interface",
      D: "pneumaticcraft:plastic",
    }
  );

  CREATE_mechanicalCrafting(
    "2x integratedtunnels:part_interface_energy",
    ["DA BD", "DC CD", "DDDDD"],
    {
      A: "integrateddynamics:variable_transformer_output",
      B: "integrateddynamics:variable_transformer_input",
      C: "anvilcraft:capacitor",
      D: "pneumaticcraft:plastic",
    }
  );

  ARS_enchanting_apparatus(
    [
      "integrateddynamics:menril_berries",
      "integrateddynamics:menril_berries",
      "integrateddynamics:menril_berries",
      "integrateddynamics:menril_berries",
    ],
    "integratedtunnels:part_interface_item",
    "ars_nouveau:sourceberry_bush",
    200
  );

  SHAPED("integrateddynamics:logic_director", [" A ", "BCD", " A "], {
    A: "ars_nouveau:sourceberry_bush",
    B: "integrateddynamics:variable_transformer_output",
    C: "create_dd:infernal_mechanism",
    D: "integrateddynamics:variable_transformer_input",
  });

  SHAPED(
    "integrateddynamics:part_connector_mono_directional",
    [" A ", "BCB", " D "],
    {
      A: "integrateddynamics:variable_transformer_output",
      B: "integrateddynamics:cable",
      C: "integrateddynamics:logic_director",
      D: "integrateddynamics:variable_transformer_input",
    }
  );

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "ars_nouveau:frostaya_pod",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, 0.0, 0.0],
        result: {
          count: 4,
          item: "ars_nouveau:frostaya_pod",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:magma_block"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:blue_ice"],
        },
        offset: [1.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:blue_ice"],
        },
        offset: [-1.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:blue_ice"],
        },
        offset: [0.0, -2.0, 1.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:blue_ice"],
        },
        offset: [0.0, -2.0, -1.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["pneumaticcraft:heat_pipe"],
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["integrateddynamics:menril_fence"],
        },
        offset: [0.0, -3.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["integrateddynamics:logic_director"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  SHAPED("integrateddynamics:menril_fence", ["ABA", "ACA", "   "], {
    A: "integrateddynamics:menril_wood",
    B: "integratedtunnels:part_interface_energy",
    C: "integrateddynamics:part_connector_omni_directional",
  });

  CREATE_compacting(
    "integrateddynamics:menril_wood",
    "8x integrateddynamics:menril_log_filled"
  );

  CREATE_mechanicalCrafting(
    "mm:original_charger_control",
    ["AAAAA", "ABBBA", "ACDCA", "ABBBA", "AAAAA"],
    {
      A: "create_dd:mithril_sheet",
      B: "create_dd:infernal_mechanism",
      C: "pneumaticcraft:module_expansion_card",
      D: "create_dd:stargaze_singularity_casing",
    }
  );

  CREATE_mechanicalCrafting("mm:original_port_input", ["AAA", "BBC", "AAA"], {
    A: "create_dd:mithril_sheet",
    B: "create_dd:infernal_mechanism",
    C: "integrateddynamics:variablestore",
  });

  CREATE_mechanicalCrafting("mm:original_port_output", ["AAA", "CBB", "AAA"], {
    A: "create_dd:mithril_sheet",
    B: "create_dd:infernal_mechanism",
    C: "integrateddynamics:variablestore",
  });

  CREATE_mechanicalCrafting("mm:original_energy_input", ["AAA", "BCB", "AAA"], {
    A: "create_dd:mithril_sheet",
    B: "create_dd:infernal_mechanism",
    C: "create_dd:stargaze_singularity_casing",
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "botania:pebble",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "botania:pebble",
          count: 16,
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["create:mechanical_crafter"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 2,
            max: 2,
          },
          tag: "kubejs:items",
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  SHAPED("mm:void_breaker_control", [" A ", "BCD", " E "], {
    A: "ars_nouveau:frostaya_pod",
    B: "integratedtunnels:part_exporter_world_block",
    C: "create_dd:stargaze_singularity_casing",
    D: "integratedtunnels:part_importer_world_block",
    E: "integrateddynamics:materializer",
  });

  SHAPED("mm:void_breaker_air_port_input", [" A ", "BCD", " E "], {
    A: "ars_nouveau:frostaya_pod",
    B: "pneumaticcraft:advanced_air_compressor",
    C: "create_dd:stargaze_singularity_casing",
    D: "pneumaticcraft:charging_station",
    E: "pneumaticcraft:reinforced_air_canister",
  });

  SHAPED("mm:void_breaker_energy_input", [" A ", "BCD", " E "], {
    A: "ars_nouveau:frostaya_pod",
    B: "integrateddynamics:logic_director",
    C: "create_dd:stargaze_singularity_casing",
    D: "pneumaticcraft:module_expansion_card",
    E: "mm:original_energy_input",
  });

  SHAPED("mm:void_breaker_fluid_port_input", [" A ", "BCD", " E "], {
    A: "ars_nouveau:frostaya_pod",
    B: "create:portable_fluid_interface",
    C: "create_dd:stargaze_singularity_casing",
    D: "create:item_drain",
    E: "create:spout",
  });

  SHAPED("mm:void_breaker_kinetic_port_input", [" A ", "BCD", " E "], {
    A: "ars_nouveau:frostaya_pod",
    B: "create:steam_engine",
    C: "create_dd:stargaze_singularity_casing",
    D: "create_dd:industrial_fan",
    E: "create_dd:stargaze_singularity",
  });

  SHAPED("mm:void_breaker_port_input", [" A ", "BCB", " B "], {
    A: "ars_nouveau:frostaya_pod",
    B: "mm:original_port_input",
    C: "create_dd:stargaze_singularity_casing",
  });

  SHAPED("mm:void_breaker_port_output", [" A ", "BCB", " B "], {
    A: "ars_nouveau:frostaya_pod",
    B: "mm:original_port_output",
    C: "create_dd:stargaze_singularity_casing",
  });

  CREATE_pressing("botania:pebble", "kubejs:void_shard");
  CREATE_compacting("botania:pebble", "kubejs:void_shard");
  CREATE_milling("botania:pebble", "kubejs:void_shard");
  CREATE_cutting("botania:pebble", "kubejs:void_shard");
  CREATE_deploying("botania:pebble", [
    "kubejs:void_shard",
    "ars_nouveau:frostaya_pod",
  ]);
  CREATE_emptying(
    [Fluid.of("minecraft:water", 1), "botania:pebble"],
    "kubejs:void_shard"
  );
  CREATE_filling("botania:pebble", [
    "kubejs:void_shard",
    Fluid.of("minecraft:water", 1),
  ]);
  CREATE_mechanicalCrafting("botania:pebble", ["A"], {
    A: "kubejs:void_shard",
  });
  CREATE_mixing("botania:pebble", [
    "kubejs:void_shard",
    Fluid.of("minecraft:water", 1),
  ]);
  CREATE_splashing("botania:pebble", "kubejs:void_shard");

  ARS_enchanting_apparatus(
    [
      "create_dd:refined_radiance",
      "create_dd:experience_mass",
      "create_dd:overcharge_alloy",
      "create_dd:aethersite",
    ],
    "kubejs:void_shard",
    Item.of("kubejs:void_shard", 1, '{"kubejs:VB": 1}').weakNBT(),
    500,
    true
  );
  CREATE_filling(
    Item.of("kubejs:void_shard", 1, '{"kubejs:VB": 2}').weakNBT(),
    [
      Item.of("kubejs:void_shard", 1, '{"kubejs:VB": 1}').weakNBT(),
      Fluid.of("minecraft:water", 1),
    ]
  );
  CREATE_emptying(
    [
      Fluid.of("minecraft:water", 1),
      Item.of("kubejs:void_shard", 1, '{"kubejs:VB": 3}').weakNBT(),
    ],
    Item.of("kubejs:void_shard", 1, '{"kubejs:VB": 2}').weakNBT()
  );
  CREATE_splashing(
    Item.of("kubejs:void_shard", 1, '{"kubejs:VB": 4}').weakNBT(),
    Item.of("kubejs:void_shard", 1, '{"kubejs:VB": 3}').weakNBT()
  );
  CREATE_assembly(
    [
      Item.of("minecraft:echo_shard").withChance(0.1),
      Item.of("quark:myalite_wall").withChance(0.9),
    ],
    Item.of("kubejs:void_shard", 1, '{"kubejs:VB": 4}').weakNBT(),
    [
      CREATE_pressing(incompele, incompele),
      CREATE_cutting(incompele, incompele),
      CREATE_filling(incompele, [incompele, Fluid.water(1000)]),
      CREATE_deploying(incompele, [incompele, "ars_nouveau:frostaya_pod"]),
    ]
  )
    .transitionalItem(incompele)
    .loops(2);

  CREATE_deploying("kubejs:void_shard", [
    "quark:myalite_wall",
    "ars_nouveau:frostaya_pod",
  ]);

  EIO_ALLOY("4x rftoolsbase:dimensionalshard", [
    "16x quark:purple_shard",
    "4x kubejs:void_shard",
    "ars_nouveau:frostaya_pod",
  ]);

  event.replaceInput(
    { output: "rftoolsbase:infused_diamond" },
    "minecraft:diamond",
    "minecraft:diamond_block"
  );

  EIO_ALLOY("rftoolsbase:dimensionalshard", [
    "64x quark:purple_shard",
    "ars_nouveau:frostaya_pod",
  ]);
});
