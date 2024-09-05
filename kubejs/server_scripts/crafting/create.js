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

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "create_dd:industrial_iron_ingot",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 3,
          item: "create_dd:industrial_iron_ingot",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:heater"],
          state: {
            overload: "false",
          },
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:cauldron"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["minecraft:iron_block"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  SHAPED(Item.of("create:shaft", 2), ["A  ", "A  ", "   "], {
    A: "create:andesite_alloy",
  });

  global.anvil_generic(
    "create_dd:andesite_sheet",
    "create:andesite_alloy",
    1,
    "anvilcraft:stamping_platform",
    1.0
  );

  SHAPED(
    Item.of("create_dd:crafting_inductive_mechanism1", 2),
    [" A ", "BCB", " A "],
    {
      A: "minecraft:slime_ball",
      B: "create_dd:industrial_iron_ingot",
      C: "create_dd:andesite_sheet",
    }
  );

  SHAPED(
    Item.of("create_dd:crafting_inductive_mechanism2", 1),
    [" B ", "BAB", " B "],
    {
      A: "create_dd:crafting_inductive_mechanism1",
      B: "anvilcraft:circuit_board",
    }
  );

  global.anvil_generic(
    "create_dd:inductive_mechanism",
    "create_dd:crafting_inductive_mechanism2",
    1,
    "anvilcraft:stamping_platform",
    1.0
  );

  SHAPED(Item.of("create:mechanical_press", 1), [" A ", "BCB", " D "], {
    A: "create_dd:inductive_mechanism",
    B: "create:shaft",
    C: "create:andesite_casing",
    D: "create_dd:industrial_iron_ingot",
  });

  SHAPED(Item.of("create:hand_crank", 1), ["AAA", "  B", "   "], {
    A: "#minecraft:planks",
    B: "create:shaft",
  });

  CREATE_pressing(["1x create_dd:steel_ingot"], ["mekanism:enriched_iron"]);

  SHAPELESS(Item.of("mekanism:enriched_iron", 1), [
    "1x create_dd:industrial_iron_ingot",
    "1x chemlib:graphite",
  ]);

  SHAPED(Item.of("create:mechanical_saw", 1), [" A ", "ABA", "CDC"], {
    A: "create_dd:steel_sheet",
    B: "create_dd:industrial_iron_block",
    C: "create_dd:inductive_mechanism",
    D: "create:andesite_casing",
  });

  SHAPELESS(Item.of("chemlib:hydroxylapatite", 1), [
    "2x minecraft:white_dye",
    "chemlib:hydrochloric_acid",
  ]);

  SHAPELESS(Item.of("chemlib:hydroxylapatite", 2), [
    "minecraft:white_dye",
    "chemlib:nitric_acid",
  ]);

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "chemlib:phosphate",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, 0.0, 0.0],
        result: {
          item: "chemlib:phosphate",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:scaffolding"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["chemlib:hydroxylapatite"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "chemlib:phosphorus",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 4,
          item: "chemlib:phosphorus",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:heater"],
          state: {
            overload: "false",
          },
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:cauldron"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["chemlib:phosphate"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  global.anvil_generic(
    "minecraft:glowstone_dust",
    "chemlib:phosphorus",
    4,
    "anvilcraft:stamping_platform",
    1.0
  );

  CREATE_pressing("minecraft:glowstone_dust", "chemlib:phosphorus");

  EIO_ALLOY("create_dd:spectral_ruby", [
    "8x minecraft:amethyst_shard",
    "2x minecraft:glowstone_dust",
  ]);

  CREATE_cutting(
    "create_dd:polished_spectral_ruby",
    "create_dd:spectral_ruby"
  ).processingTime(40);

  SHAPED(Item.of("create_dd:integrated_circuit", 1), ["AAA", "BCB", "AAA"], {
    A: "minecraft:redstone",
    B: "create_dd:polished_spectral_ruby",
    C: "create_dd:inductive_mechanism",
  });

  SHAPED(Item.of("create:mechanical_drill", 1), [" A ", "ABA", "CDC"], {
    A: "create_dd:steel_sheet",
    B: "create_dd:industrial_iron_block",
    C: "create_dd:integrated_circuit",
    D: "create:andesite_casing",
  });

  SHAPED(Item.of("create:brass_hand", 1), [" A ", "BBB", " B "], {
    A: "create:andesite_alloy",
    B: "minecraft:copper_ingot",
  });

  SHAPED(Item.of("create:deployer", 1), [" A ", " B ", " C "], {
    A: "create_dd:integrated_circuit",
    B: "create:andesite_casing",
    C: "create:brass_hand",
  });

  CREATE_assembly(["create:cogwheel"], "create:shaft", [
    event.recipes.create.deploying(incompele, [incompele, "#minecraft:planks"]),
  ])
    .transitionalItem(incompele)
    .loops(12);

  SHAPED(Item.of("create:depot", 1), ["   ", "AAA", " B "], {
    A: "create_dd:andesite_sheet",
    B: "anvilcraft:stamping_platform",
  });

  CREATE_deploying("create:copper_casing", [
    "create:andesite_casing",
    "minecraft:copper_ingot",
  ]);

  CREATE_assembly(
    ["create_dd:calculation_mechanism"],
    "create_dd:integrated_circuit",
    [
      event.recipes.create.deploying(incompele, [
        incompele,
        "#forge:gears/copper",
      ]),
      event.recipes.create.pressing(incompele, incompele),
      event.recipes.create.cutting(incompele, incompele),
    ]
  )
    .transitionalItem(incompele)
    .loops(2);

  SHAPED(Item.of("create:millstone", 1), [" A ", " B ", "DCD"], {
    A: "create:cogwheel",
    B: "create:andesite_casing",
    C: "create_dd:calculation_mechanism",
    D: "minecraft:granite",
  });

  SHAPED(Item.of("create:windmill_bearing", 1), [" A ", "DBD", " C "], {
    A: "create:turntable",
    B: "create:copper_casing",
    C: "create:shaft",
    D: "create_dd:calculation_mechanism",
  });

  CREATE_milling("thermal:iron_dust", "minecraft:iron_ingot");
  CREATE_milling("thermal:copper_dust", "minecraft:copper_ingot");

  EIO_ALLOY("thermal:tin_dust", ["#forge:dusts/iron", "chemlib:nitric_acid"]);

  EIO_ALLOY("create_dd:bronze_ingot", [
    "3x minecraft:copper_ingot",
    "thermal:tin_ingot",
  ]);

  EIO_ALLOY("thermal:gold_dust", [
    "#forge:dusts/copper",
    "chemlib:nitric_acid",
  ]);

  CREATE_milling("thermal:quartz_dust", "minecraft:quartz");

  EIO_ALLOY("create:rose_quartz", [
    "2x thermal:quartz_dust",
    "#forge:dusts/gold",
    "8x minecraft:redstone",
  ]);

  CREATE_cutting("create:polished_rose_quartz", "create:rose_quartz");

  CREATE_assembly(
    ["create_dd:integrated_mechanism"],
    "create_dd:calculation_mechanism",
    [
      CREATE_deploying(incompele, [incompele, "create_dd:integrated_circuit"]),
      CREATE_deploying(incompele, [incompele, "create_dd:inductive_mechanism"]),
      CREATE_deploying(incompele, [incompele, "create:electron_tube"]),
      CREATE_deploying(incompele, [incompele, "create_dd:bronze_sheet"]),
      CREATE_pressing(incompele, incompele),
    ]
  )
    .transitionalItem(incompele)
    .loops(1);

  SHAPED(Item.of("create:chute", 4), ["A A", "BCB", "A A"], {
    A: "#forge:plates/steel",
    B: "#forge:plates/tin",
    C: "anvilcraft:chute",
  });

  EIO_ALLOY(
    Item.of("chemlib:ammonia", 1),
    ["minecraft:water_bucket", "4x chemlib:protein"],
    2000 * 8
  );

  EIO_ALLOY(Item.of("chemlib:sodium_carbonate", 1), [
    "chemlib:sodium_chloride",
    "chemlib:ammonia",
    Item.of("minecraft:water_bucket").ignoreNBT(),
  ]).keepIngredient(Item.of("minecraft:water_bucket").ignoreNBT());

  CREATE_deploying("24x minecraft:dried_kelp", [
    "chemlib:sodium_carbonate",
    "chemlib:cellulose",
  ]);

  SHAPED(Item.of("create:andesite_funnel", 1), ["ABA", "ACA", "A A"], {
    A: "create:andesite_alloy",
    B: "create:belt_connector",
    C: "create:chute",
  });

  SHAPED(Item.of("create:andesite_tunnel", 1), ["   ", "ABA", "   "], {
    A: "create:andesite_funnel",
    B: "create:belt_connector",
  });

  CREATE_assembly("minecraft:raw_copper", "thermal:copper_dust", [
    CREATE_pressing(incompele, incompele),
    CREATE_cutting(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(4);

  CREATE_assembly("create_dd:hydraulic_casing", "create:copper_casing", [
    CREATE_deploying(incompele, [incompele, "#forge:plates/copper"]),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(16);

  SHAPED(Item.of("create:basin", 1), ["A A", "A A", "ABA"], {
    A: "create:andesite_alloy",
    B: "create:copper_casing",
  });

  SHAPED(Item.of("create:whisk", 1), [" A ", "BAB", "BBB"], {
    A: "create:andesite_alloy",
    B: "#forge:plates/steel",
  });

  SHAPED(Item.of("create:mechanical_mixer"), [" A ", "BCB", " D "], {
    A: "create:cogwheel",
    B: "create_dd:integrated_mechanism",
    C: "create_dd:hydraulic_casing",
    D: "create:whisk",
  });

  CREATE_mixing("4x chemlib:hydrochloric_acid", [
    "chemlib:chlorine",
    Fluid.water(50),
  ]);
  CREATE_mixing("2x chemlib:nitric_acid", [
    "chemlib:nitrate",
    "chemlib:hydrochloric_acid",
  ]);
  CREATE_mixing("32x chemlib:silicon_dioxide", [
    "minecraft:amethyst_shard",
    "chemlib:nitric_acid",
  ]);
  CREATE_mixing("64x botania:living_root", [
    "chemlib:cellulose",
    "minecraft:moss_block",
  ]);
  CREATE_mixing("16x minecraft:redstone", [
    "chemlib:strontium_carbonate_dust",
    "chemlib:iron_oxide",
  ]);

  CREATE_pressing("2x anvilcraft:resin", "#minecraft:logs");
  CREATE_compacting("8x anvilcraft:resin", "#minecraft:logs");

  CREATE_mixing("4x minecraft:slime_ball", [
    "anvilcraft:resin",
    Fluid.water(20),
  ]);
  CREATE_mixing("2x chemlib:protein", [
    "minecraft:slime_ball",
    "chemlib:hydrochloric_acid",
  ]);
  CREATE_mixing("2x chemlib:cellulose", [
    "minecraft:paper",
    "chemlib:hydrochloric_acid",
  ]);

  CREATE_pressing("4x chemlib:sucrose", "minecraft:sugar_cane");
  CREATE_pressing("chemlib:starch", "minecraft:wheat");
  CREATE_pressing("minecraft:paper", "#forge:sawdust");
  CREATE_pressing("minecraft:leather", "chemlib:protein");

  CREATE_cutting("chemlib:nitrate", "minecraft:cactus").processingTime(20);

  CREATE_mixing("4x create:andesite_alloy", [
    "create:andesite_alloy",
    "minecraft:andesite",
    "create_dd:steel_ingot",
  ]);

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "chemlib:iron_oxide",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 1,
          item: "chemlib:iron_oxide",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:heater"],
          state: {
            overload: "false",
          },
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:cauldron"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 2,
          },
          items: ["chemlib:iron"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "chemlib:carbon",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 1,
          item: "chemlib:carbon",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:heater"],
          state: {
            overload: "false",
          },
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:cauldron"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 4,
          },
          items: ["chemlib:sucrose"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "chemlib:carbon",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 1,
          item: "chemlib:carbon",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:heater"],
          state: {
            overload: "false",
          },
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:cauldron"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["chemlib:starch"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "chemlib:carbon",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 2,
          item: "chemlib:carbon",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:heater"],
          state: {
            overload: "false",
          },
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:cauldron"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["chemlib:cellulose"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  SHAPELESS(Item.of("chemlib:iron", 1), [
    "minecraft:iron_ingot",
    "chemlib:nitric_acid",
  ]);

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "chemlib:aluminum_oxide",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 1,
          item: "chemlib:aluminum_oxide",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:heater"],
          state: {
            overload: "false",
          },
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:cauldron"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["chemlib:aluminum"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  CREATE_mixing("8x minecraft:granite", [
    "8x minecraft:stone",
    "chemlib:iron_oxide",
  ]);
  CREATE_mixing("8x minecraft:diorite", [
    "8x minecraft:stone",
    "chemlib:aluminum_oxide",
  ]);
  CREATE_mixing("8x minecraft:andesite", [
    "8x minecraft:stone",
    "chemlib:carbonate",
  ]);
  CREATE_mixing("4x minecraft:clay_ball", [
    "chemlib:silicon_dioxide",
    "chemlib:aluminum_oxide",
    Fluid.water(20),
  ]);

  CREATE_compacting("chemlib:zinc_dust", ["8x thermal:tin_dust"]);

  EIO_ALLOY("create:brass_ingot", [
    "create_dd:bronze_ingot",
    "#forge:ingots/zinc",
  ]);

  CREATE_assembly(
    "create_dd:sealed_mechanism",
    "create_dd:integrated_mechanism",
    [
      CREATE_deploying(incompele, [incompele, "create:electron_tube"]),
      CREATE_deploying(incompele, [incompele, "create:brass_sheet"]),
      CREATE_deploying(incompele, [incompele, "24x minecraft:dried_kelp"]),
      CREATE_pressing(incompele, incompele),
    ]
  )
    .transitionalItem(incompele)
    .loops(2);

  SHAPED("create:propeller", [" A ", "BCB", " A "], {
    A: "#forge:plates/steel",
    B: "#forge:plates/brass",
    C: "create:andesite_alloy",
  });

  SHAPED(Item.of("create:encased_fan", 1), [" A ", "BCB", " D "], {
    A: "create:shaft",
    B: "create_dd:sealed_mechanism",
    C: "create_dd:hydraulic_casing",
    D: "create:propeller",
  });

  CREATE_splashing("minecraft:kelp", "minecraft:dried_kelp_block");

  CREATE_assembly(
    "minecraft:dried_kelp_block",
    "chemlib:sodium_carbonate_dust",
    [
      CREATE_deploying(incompele, [incompele, "4x minecraft:dried_kelp"]),
      CREATE_pressing(incompele, incompele),
    ]
  )
    .transitionalItem(incompele)
    .loops(64);

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "quark:moss_paste",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "quark:moss_paste",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:mineral_fountain"],
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
          items: ["minecraft:moss_block"],
        },
        offset: [0.0, 0.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 8,
          },
          items: ["minecraft:kelp"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  CREATE_mixing("minecraft:magma_block", [
    "4x minecraft:netherrack",
    Fluid.lava(100),
  ]);
  CREATE_mixing("chemlib:bromine", [
    "minecraft:magma_block",
    "4x chemlib:nitric_acid",
  ]);
  CREATE_mixing(`${I2}`, [
    "quark:moss_paste",
    "2x chemlib:bromine",
    Fluid.water(50),
  ]);
  CREATE_mixing("chemlib:triglyceride", [
    "#minecraft:wool",
    "2x chemlib:nitric_acid",
  ]);

  CREATE_compacting("minecraft:honeycomb", [
    "64x chemlib:sucrose",
    "2x chemlib:triglyceride",
  ]);

  CREATE_assembly("create:brass_casing", "create_dd:hydraulic_casing", [
    CREATE_deploying(incompele, [incompele, "minecraft:honeycomb"]),
    CREATE_deploying(incompele, [incompele, "create:brass_sheet"]),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(2);

  SHAPED(Item.of("create:mechanical_crafter", 8), ["EAE", "BCB", "EDE"], {
    A: "create:electron_tube",
    B: "create_dd:sealed_mechanism",
    C: "create:brass_casing",
    D: "anvilcraft:batch_crafter",
    E: "create:brass_sheet",
  });

  CREATE_mixing("create_dd:lapis_alloy", [
    "3x create:andesite_alloy",
    "4x thermal:lapis_dust",
    `${I2}`,
  ]);

  CREATE_mechanicalCrafting(
    "create:large_cogwheel",
    ["AAAAA", "AB BA", "A C A", "AB BA", "AAAAA"],
    {
      A: "#minecraft:planks",
      B: "create:cogwheel",
      C: "create_dd:lapis_alloy",
    }
  );

  CREATE_mechanicalCrafting("create:cogwheel", ["A A", " B ", "A A"], {
    A: "#minecraft:planks",
    B: "create:shaft",
  });

  SHAPED(Item.of("create:wrench", 1), ["AA ", "AB ", " C "], {
    A: "minecraft:copper_ingot",
    B: "create:cogwheel",
    C: "create:shaft",
  });

  CREATE_cutting("4x create:shaft", "create:andesite_alloy");

  CREATE_mechanicalCrafting(
    "create:large_water_wheel",
    ["AAAAA", "ABCBA", "ACDCA", "ABCBA", "AAAAA"],
    {
      A: "#minecraft:planks",
      B: "create:cogwheel",
      C: "create:andesite_alloy",
      D: "create:large_cogwheel",
    }
  );

  CREATE_assembly("16x create:water_wheel", "create:large_water_wheel", [
    CREATE_cutting(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(32);

  SHAPED(Item.of("create:white_sail", 8), ["AB ", "BC ", "   "], {
    A: "minecraft:white_wool",
    B: "minecraft:stick",
    C: "create:andesite_alloy",
  });

  CREATE_crushing("thermal:lapis_dust", "minecraft:lapis_lazuli");

  SHAPELESS(Item.of("create:gearbox", 1), [
    "create:copper_casing",
    "create:cogwheel",
  ]);

  CREATE_mixing("8x minecraft:moss_block", [
    "minecraft:dirt",
    "8x chemlib:cellulose",
    Fluid.of("minecraft:water", 10),
  ]);

  CREATE_assembly("create:precision_mechanism", "create_dd:sealed_mechanism", [
    CREATE_deploying(incompele, [incompele, "create:cogwheel"]),
    CREATE_deploying(incompele, [incompele, "create:large_cogwheel"]),
    CREATE_pressing(incompele, incompele),
    CREATE_deploying(incompele, [incompele, "create_dd:lapis_alloy"]),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(4);

  CREATE_assembly("create:railway_casing", "create:brass_casing", [
    CREATE_deploying(incompele, [incompele, "minecraft:obsidian"]),
    CREATE_pressing(incompele, incompele),
    CREATE_pressing(incompele, incompele),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(4);

  SHAPED("create:smart_chute", [" A ", "DBD", " C "], {
    A: "create:andesite_tunnel",
    B: "create:railway_casing",
    C: "create:electron_tube",
    D: "create:precision_mechanism",
  });

  SHAPED("2x create:brass_funnel", ["ABA", "ACA", "A A"], {
    A: "create:brass_sheet",
    B: "minecraft:kelp",
    C: "create:smart_chute",
  });

  SHAPED("create:brass_tunnel", ["   ", "ABA", "   "], {
    A: "create:brass_funnel",
    B: "create:precision_mechanism",
  });

  SHAPED("create:rotation_speed_controller", ["ACB", "BDA", "EEE"], {
    A: "create:cogwheel",
    B: "create:large_cogwheel",
    C: "create:precision_mechanism",
    D: "create:brass_tunnel",
    E: "create:brass_sheet",
  });

  SHAPED("create:portable_storage_interface", ["ABA", "ACA", "AAA"], {
    A: "create:brass_sheet",
    B: "create:precision_mechanism",
    C: "create:smart_chute",
  });

  CREATE_mixing("ars_nouveau:source_gem", [
    "4x minecraft:lapis_lazuli",
    Item.of(`${I2}`, 1),
  ]);

  CREATE_milling(
    Item.of("chemlib:zirconium_dust"),
    "minecraft:polished_deepslate"
  ).processingTime(1000);
  event.remove({ output: "chemlib:zirconium_dust", type: "create:crushing" });

  CREATE_crushing(
    Item.of("chemlib:zirconium"),
    "chemlib:zirconium_dust"
  ).processingTime(400);

  CREATE_compacting("4x ars_nouveau:sourcestone", [
    "8x minecraft:calcite",
    "chemlib:zirconium",
  ]);

  CREATE_mechanicalCrafting(
    "ars_nouveau:archwood_planks",
    [
      "A   A   A",
      "  AA AA  ",
      " A  A  A ",
      " A A A A ",
      "A A B A A",
      " A A A A ",
      " A  A  A ",
      "  AA AA  ",
      "A   A   A",
    ],
    {
      A: "minecraft:amethyst_shard",
      B: "minecraft:oak_planks",
    }
  );

  event.replaceInput(
    { output: "ars_nouveau:arcane_pedestal" },
    "minecraft:gold_nugget",
    "minecraft:gold_ingot"
  );

  SHAPED("ars_nouveau:imbuement_chamber", ["ACA", "BDB", "ACA"], {
    A: "ars_nouveau:archwood_planks",
    B: "ars_nouveau:sourcestone",
    C: "minecraft:gold_ingot",
    D: "create:rotation_speed_controller",
  });

  ARS_imbuement("minecraft:amethyst_shard", "ars_nouveau:source_gem", 1000, [
    "minecraft:purple_wool",
  ]);

  CREATE_mechanicalCrafting(
    "minecraft:purple_wool",
    [
      "AAAAAAAAA",
      "B   D   B",
      "B B   B B",
      "BC  C  CB",
      "CC CAC CC",
      "BC  C  CB",
      "B B   B B",
      "B   D   B",
      "AAAAAAAAA",
    ],
    {
      A: "minecraft:amethyst_shard",
      B: "minecraft:lapis_lazuli",
      C: "minecraft:white_wool",
      D: `${I2}`,
    }
  );

  CREATE_compacting("chemlib:sodium_carbonate_dust", [
    "16x chemlib:sodium_carbonate",
  ]);

  CREATE_mechanicalCrafting(
    "minecraft:bamboo_block",
    ["AAAA", "AAAA", "AAAA", "AAAA"],
    {
      A: "minecraft:bamboo",
    }
  );

  ARS_imbuement("minecraft:bamboo_block", "ars_nouveau:wilden_horn", 20, [
    null,
  ]);

  CREATE_compacting("create_dd:leather_block", ["4x quark:bonded_leather"]);

  ARS_imbuement("create_dd:leather_block", "ars_nouveau:wilden_wing", 20, [
    null,
  ]);

  ARS_imbuement("ars_nouveau:source_gem", "ars_nouveau:starbuncle_shards", 20, [
    "minecraft:gold_block",
    "minecraft:gold_block",
    "minecraft:gold_block",
    "minecraft:gold_block",
  ]);

  CREATE_compacting("minecraft:white_wool", ["2x chemlib:keratin"]);

  CREATE_mechanicalCrafting(
    "ars_nouveau:arcane_core",
    [
      "AAABBBAAA",
      "AA C C AA",
      "A BBBBB A",
      "D C   C D",
      "DD  E  DD",
      "D C   C D",
      "A BBBBB A",
      "AA C C AA",
      "AAABBBAAA",
    ],
    {
      A: "minecraft:gold_ingot",
      B: "ars_nouveau:sourcestone",
      C: "ars_nouveau:source_gem",
      D: "ars_nouveau:archwood_planks",
      E: "ars_nouveau:source_gem_block",
    }
  );

  CREATE_mechanicalCrafting(
    "ars_nouveau:enchanting_apparatus",
    [
      "  AAAAA  ",
      "BBBCCCBBB",
      "B  D D  B",
      "B E E E B",
      " E EFE E ",
      "B E E E B",
      "B  D D  B",
      "BBBCCCBBB",
      "  AAAAA  ",
    ],
    {
      A: "ars_nouveau:sourcestone",
      B: "minecraft:gold_ingot",
      C: "ars_nouveau:archwood_planks",
      D: "ars_nouveau:source_gem",
      E: "minecraft:diamond",
      F: "ars_nouveau:imbuement_chamber",
    }
  );

  CREATE_compacting("ars_nouveau:source_gem_block", [
    "4x ars_nouveau:source_gem",
  ]);

  ARS_enchanting_apparatus(
    [
      "minecraft:calcite",
      "minecraft:calcite",
      "minecraft:calcite",
      "minecraft:calcite",
      "ars_nouveau:source_gem",
    ],
    "chemlib:zirconium",
    "4x ars_nouveau:sourcestone",
    0
  );

  CREATE_compacting("minecraft:polished_deepslate", [
    "10x minecraft:deepslate",
  ]);

  CREATE_mechanicalCrafting(
    "16x pipez:item_pipe",
    ["AAAAA", "B C B", "BBBBB", "B C B", "AAAAA"],
    {
      A: "create_dd:bronze_ingot",
      B: "minecraft:redstone",
      C: "create_dd:sealed_mechanism",
    }
  );

  SHAPED("pipez:wrench", ["A A", " B ", " B "], {
    A: "minecraft:flint",
    B: "minecraft:stick",
  });

  ARS_enchanting_apparatus(
    [
      "minecraft:amethyst_shard",
      "minecraft:amethyst_shard",
      "minecraft:amethyst_shard",
      "minecraft:amethyst_shard",
      "minecraft:amethyst_shard",
      "minecraft:amethyst_shard",
      "ars_nouveau:source_gem",
      "ars_nouveau:source_gem",
    ],
    "minecraft:oak_planks",
    "ars_nouveau:archwood_planks",
    0
  );

  CREATE_mechanicalCrafting(
    "minecraft:stone_button",
    ["AAAA", "AAAA", "AAAA", "AAAA"],
    {
      A: "minecraft:stone",
    }
  );

  CREATE_mechanicalCrafting(
    "ars_nouveau:source_jar",
    ["AAAAA", "B   B", "B   B", "B   B", "AAAAA"],
    {
      A: "ars_nouveau:archwood_planks",
      B: "minecraft:glass",
    }
  );

  SHAPED("ars_nouveau:agronomic_sourcelink", ["ABA", "CDC", "ABA"], {
    A: "minecraft:gold_block",
    B: "ars_nouveau:source_gem_block",
    C: "ars_nouveau:source_jar",
    D: "minecraft:melon",
  });

  event.replaceInput(
    { output: "ars_nouveau:manipulation_essence" },
    "ars_nouveau:source_gem",
    "ars_nouveau:water_essence"
  );

  event.replaceInput(
    { output: "ars_nouveau:air_essence" },
    "ars_nouveau:source_gem",
    "ars_nouveau:manipulation_essence"
  );

  event.replaceInput(
    { output: "ars_nouveau:fire_essence" },
    "ars_nouveau:source_gem",
    "ars_nouveau:air_essence"
  );

  event.replaceInput(
    { output: "ars_nouveau:conjuration_essence" },
    "ars_nouveau:source_gem",
    "ars_nouveau:fire_essence"
  );

  ARS_enchanting_apparatus(
    [
      "chemlib:keratin",
      "chemlib:keratin",
      "chemlib:keratin",
      "chemlib:keratin",
    ],
    "ars_nouveau:manipulation_essence",
    "minecraft:feather",
    1000
  );

  ARS_enchanting_apparatus(
    [
      "chemlib:starch",
      "chemlib:starch",
      "ars_nouveau:air_essence",
      "ars_nouveau:manipulation_essence",
      "ars_nouveau:water_essence",
    ],
    "botania:living_root",
    "minecraft:potato",
    1000
  );

  CREATE_assembly("quark:potato_crate", "ars_nouveau:archwood_chest", [
    CREATE_deploying(incompele, [incompele, "minecraft:potato"]),
    CREATE_deploying(incompele, [incompele, "minecraft:potato"]),
    CREATE_deploying(incompele, [incompele, "minecraft:potato"]),
    CREATE_deploying(incompele, [incompele, "minecraft:potato"]),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(64);

  CREATE_milling("anvilcraft:flour", "quark:potato_crate");
  event.remove({ output: "anvilcraft:flour", type: "create:crushing" });

  CREATE_mixing("chemlib:potassium", [
    "anvilcraft:flour",
    "16x chemlib:nitric_acid",
  ]);

  EIO_ALLOY("chemlib:potassium_nitrate", [
    "chemlib:potassium",
    "chemlib:nitrate",
  ]);

  CREATE_mechanicalCrafting(
    "ars_nouveau:ritual_wilden_summon",
    [
      "AAAAAAAAA",
      "ABCDDDCBA",
      "ACBEEEBCA",
      "ADEBDBEDA",
      "ADEDEDEDA",
      "ADEBDBEDA",
      "ACBEEEBCA",
      "ABCDDDCBA",
      "AAAAAAAAA",
    ],
    {
      A: "ars_nouveau:archwood_planks",
      B: "ars_nouveau:wilden_horn",
      C: "ars_nouveau:wilden_wing",
      D: "minecraft:lapis_block",
      E: "ars_nouveau:conjuration_essence",
    }
  );

  CREATE_mechanicalCrafting(
    "ars_nouveau:ritual_brazier",
    ["AAAAA", "  A  ", "  B  ", " BBB ", "BBBBB"],
    {
      A: "ars_nouveau:source_gem_block",
      B: "ars_nouveau:arcane_pedestal",
    }
  );

  CREATE_mixing("minecraft:gunpowder", [
    "16x minecraft:charcoal",
    "8x chemlib:sulfur_dioxide",
    "chemlib:potassium_nitrate",
  ]);

  CREATE_compacting("minecraft:nether_brick", [
    "8x minecraft:netherrack",
    "ars_nouveau:fire_essence",
  ]);

  ARS_imbuement("minecraft:nether_brick", "chemlib:sulfur", 100, [
    "ars_nouveau:wilden_tribute",
    "ars_nouveau:fire_essence",
    "ars_nouveau:fire_essence",
  ]);

  EIO_ALLOY("chemlib:germanium", [
    "minecraft:nether_brick",
    "64x chemlib:hydrochloric_acid",
  ]);

  CREATE_mixing("4x minecraft:blaze_powder", [
    Fluid.of("minecraft:lava", 250),
    "8x chemlib:sulfur",
    "12x chemlib:graphite",
    "chemlib:germanium",
    "4x ars_nouveau:conjuration_essence",
  ]);

  CREATE_assembly(
    "create_dd:infernal_mechanism",
    "create:precision_mechanism",
    [
      CREATE_deploying(incompele, [incompele, "minecraft:blaze_powder"]),
      CREATE_deploying(incompele, [incompele, "minecraft:nether_bricks"]),
      CREATE_pressing(incompele, incompele),
    ]
  )
    .transitionalItem(incompele)
    .loops(2);

  EIO_ALLOY(
    "chemlib:sulfur_dioxide",
    ["2x chemlib:sulfur", "4x chemlib:oxygen"],
    4000
  );

  EIO_ALLOY(
    "chemlib:sulfur_trioxide",
    ["3x chemlib:sulfur_dioxide", "3x chemlib:oxygen"],
    6000
  );

  CREATE_mixing(
    ["4x minecraft:glass_bottle", "3x chemlib:nitrogen", "chemlib:oxygen"],
    ["4x quark:bottled_cloud"]
  );

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "quark:bottled_cloud",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, 360.0, 0.0],
        result: {
          item: "quark:bottled_cloud",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:bedrock"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["quark:cloud"],
        },
        offset: [0.0, 1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["minecraft:glass_bottle"],
        },
        offset: [0.0, 360.0, 0.0],
      },
    ],
  });

  EIO_ALLOY(
    "chemlib:sulfuric_acid",
    ["chemlib:sulfur_trioxide", "4x chemlib:nitric_acid"],
    8000
  );

  EIO_ALLOY(
    "4x chemlib:tungsten",
    ["4x anvilcraft:tungsten_nugget", "chemlib:sulfuric_acid"],
    64000
  );

  CREATE_mixing("minecraft:netherite_ingot", [
    "4x minecraft:netherite_scrap",
    "8x minecraft:gold_ingot",
    "4x create:brass_ingot",
  ]);

  CREATE_mechanicalCrafting(
    "create_dd:netherite_casing",
    [
      "        A",
      "  C      ",
      "         ",
      "         ",
      "      C  ",
      "C        ",
      "         ",
      "    C    ",
      "B        ",
    ],
    {
      A: "minecraft:netherite_ingot",
      B: "create:railway_casing",
      C: "ars_nouveau:fire_essence",
    }
  );

  SHAPED("create:empty_blaze_burner", ["AAA", "A A", "BCB"], {
    A: "create_dd:steel_sheet",
    B: "minecraft:smithing_table",
    C: "create_dd:netherite_casing",
  });

  ARS_enchanting_apparatus(
    [
      "ars_nouveau:conjuration_essence",
      "ars_nouveau:conjuration_essence",
      "ars_nouveau:conjuration_essence",
      "ars_nouveau:conjuration_essence",
      "ars_nouveau:wilden_spike",
      "minecraft:blaze_powder",
      "minecraft:blaze_powder",
      "minecraft:blaze_powder",
    ],
    "create:empty_blaze_burner",
    "create:blaze_burner",
    2000
  );

  SHAPED("ars_nouveau:mycelial_sourcelink", ["ABA", "CDC", "ABA"], {
    A: "minecraft:gold_block",
    B: "ars_nouveau:air_essence",
    C: "minecraft:mycelium",
    D: "ars_nouveau:agronomic_sourcelink",
  });

  CREATE_mechanicalCrafting(
    "create:mechanical_arm",
    ["CAAAD", "A   E", "A    ", "A    ", "BBF  "],
    {
      A: "#forge:plates/brass",
      B: "create_dd:infernal_mechanism",
      C: "create:large_cogwheel",
      D: "create_dd:lapis_alloy",
      E: "create:brass_hand",
      F: "create_dd:netherite_casing",
    }
  );

  CREATE_mechanicalCrafting(
    "48x create:fluid_pipe",
    ["AAACBCAAA", "         ", "AAACBCAAA"],
    {
      A: "create:brass_sheet",
      B: "create_dd:netherite_casing",
      C: "create_dd:rubber",
    }
  );

  CREATE_cutting("minecraft:oak_slab", "minecraft:oak_planks");

  SHAPED("minecraft:barrel", ["ABA", "ACA", "ABA"], {
    A: "minecraft:oak_planks",
    B: "minecraft:oak_slab",
    C: "ars_nouveau:archwood_chest",
  });

  SHAPED("create:fluid_tank", ["AAA", "ABA", "AAA"], {
    A: "create:fluid_pipe",
    B: "minecraft:barrel",
  });

  CREATE_mechanicalCrafting(
    "create:mechanical_pump",
    ["  A  ", " AAA ", "AABAA", " AAA ", "  A  "],
    {
      A: "create_dd:lapis_alloy",
      B: "create:fluid_pipe",
    }
  );

  CREATE_mechanicalCrafting(
    "create:item_drain",
    ["A A A A A", " A A A A ", "A A A A A", "D  BCB  D"],
    {
      A: "create_dd:steel_sheet",
      B: "#forge:storage_blocks/steel",
      C: "create:fluid_tank",
      D: "create_dd:infernal_mechanism",
    }
  );

  CREATE_mixing("2x create_dd:steel_ingot", [
    "4x minecraft:iron_ingot",
    "chemlib:graphite",
  ]).heated();
  CREATE_mixing("4x create_dd:bronze_ingot", [
    "3x minecraft:copper_ingot",
    "#forge:ingots/tin",
  ]).heated();
  CREATE_mixing("2x create:brass_ingot", [
    "create_dd:bronze_ingot",
    "#forge:ingots/zinc",
  ]).heated();

  CREATE_emptying(Fluid.of("create_dd:sap", 100), "quark:oak_hedge");

  CREATE_mechanicalCrafting("quark:oak_hedge", ["AAA", "AAA", "AAA", " B "], {
    A: "minecraft:oak_leaves",
    B: "create_dd:overburden_casing",
  });

  ARS_enchanting_apparatus(
    [
      "minecraft:deepslate",
      "minecraft:deepslate",
      "ars_nouveau:manipulation_essence",
    ],
    "minecraft:andesite",
    "2x quark:limestone",
    500
  );

  CREATE_compacting("chemlib:calcium_hydroxide", [
    "quark:limestone",
    Fluid.water(1000),
  ]);

  CREATE_emptying(
    ["chemlib:sodium_carbonate", Fluid.water(1)],
    "minecraft:kelp"
  );

  CREATE_mixing("chemlib:sodium_hydroxide", [
    "chemlib:sodium_carbonate",
    "chemlib:calcium_hydroxide",
  ]);

  EIO_ALLOY("chemlib:carbonate", ["chemlib:carbon"]);

  CREATE_compacting("chemlib:ethane", [
    "8x chemlib:carbon",
    Fluid.water(1000),
  ]).heated();

  CREATE_mixing("chemlib:ethanol", [
    "chemlib:ethane",
    "chemlib:bromine",
    "chemlib:sodium_hydroxide",
  ]).heated();
  CREATE_mixing("botania:pebble", [
    "chemlib:ethane",
    "2x chemlib:bromine",
    "chemlib:sodium_hydroxide",
  ]).heated();

  CREATE_mixing(
    ["chemlib:ethylene", "chemlib:sulfuric_acid"],
    ["chemlib:ethanol", "chemlib:sulfuric_acid"]
  ).heated();
  CREATE_mixing("botania:pebble", [
    "2x chemlib:ethanol",
    "chemlib:sulfuric_acid",
  ]).heated();

  CREATE_compacting("create_dd:raw_rubber", [
    "create_dd:crystallized_sap",
    "chemlib:ethylene",
  ]).heated();

  SHAPED("16x create:belt_connector", ["AAA", "ABA", "AAA"], {
    A: "create:belt_connector",
    B: "create_dd:rubber",
  });

  CREATE_mechanicalCrafting(
    "create_dd:hydraulic_press",
    ["AAAAA", "AB BA", "ACCCA", "ADDDA", "AEEEA"],
    {
      A: "#forge:plates/brass",
      B: "create_dd:infernal_mechanism",
      C: "create_dd:netherite_casing",
      D: "create:mechanical_press",
      E: "#forge:storage_blocks/brass",
    }
  );

  SHAPED("create:spout", ["AAA", "ABA", "ACA"], {
    A: "create:brass_sheet",
    B: "create:item_drain",
    C: "minecraft:dried_kelp_block",
  });

  CREATE_mechanicalCrafting(
    "create_enchantment_industry:printer",
    [
      " AAA ",
      " ABA ",
      " ABA ",
      " ABA ",
      " ACA ",
      " ADA ",
      " ADA ",
      " ADA ",
      "EEEEE",
    ],
    {
      A: "#forge:plates/brass",
      B: "create:fluid_tank",
      C: "create:spout",
      D: "minecraft:dried_kelp_block",
      E: "#forge:storage_blocks/steel",
    }
  );

  CREATE_mechanicalCrafting("3x quark:oak_vertical_slab", ["A", "A", "A"], {
    A: "minecraft:oak_slab",
  });

  CREATE_assembly("minecraft:oak_stairs", "minecraft:oak_slab", [
    CREATE_deploying(incompele, [incompele, "quark:oak_vertical_slab"]),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(1);

  CREATE_assembly("minecraft:bookshelf", "create:brass_casing", [
    CREATE_deploying(incompele, [incompele, "minecraft:book"]),
    CREATE_deploying(incompele, [incompele, "minecraft:oak_stairs"]),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(4);

  SHAPED("minecraft:enchanting_table", [" A ", "BCB", "CCC"], {
    A: "minecraft:bookshelf",
    B: "minecraft:diamond_block",
    C: "create_dd:netherite_casing",
  });

  CREATE_mechanicalCrafting(
    "minecraft:grindstone",
    ["  AAA  ", "BBAAABB", "BBAAABB", "B AAA B", "B     B"],
    {
      A: "minecraft:stone",
      B: "minecraft:bricks",
    }
  );

  ARS_enchanting_apparatus(
    [
      "anvilcraft:earth_core_shard_block",
      "anvilcraft:earth_core_shard_block",
      "anvilcraft:earth_core_shard_block",
      "anvilcraft:earth_core_shard_block",
      "anvilcraft:void_matter_block",
      "anvilcraft:void_matter_block",
      "anvilcraft:void_matter_block",
      "anvilcraft:void_matter_block",
    ],
    "minecraft:book",
    Item.of("minecraft:enchanted_book").enchant("minecraft:vanishing_curse", 1),
    10000
  );

  CREATE_mixing("4x create_dd:chromatic_compound", [
    "8x create:sturdy_sheet",
    "2x create:polished_rose_quartz",
    "2x create_dd:polished_spectral_ruby",
    "4x create_dd:lapis_alloy",
    "2x anvilcraft:cursed_gold_ingot",
  ]).heated();

  SHAPED("minecraft:campfire", [" A ", "ABA", "CCC"], {
    A: "minecraft:stick",
    B: "minecraft:charcoal",
    C: "minecraft:oak_planks",
  });

  CREATE_mixing("create_dd:ember_alloy", [
    "4x create_dd:shadow_steel",
    "create_dd:infernal_mechanism",
    "2x create_dd:smoked_planks",
    "8x create:cinder_flour",
  ]).heated();

  ARS_imbuement(
    "minecraft:lava_bucket",
    "chemlib:sulfur_trioxide_bucket",
    400,
    [
      "create:blaze_burner",
      "ars_nouveau:fire_essence",
      "ars_nouveau:fire_essence",
      "ars_nouveau:fire_essence",
      "ars_nouveau:fire_essence",
      "ars_nouveau:fire_essence",
      "ars_nouveau:fire_essence",
      "ars_nouveau:fire_essence",
    ]
  );

  CREATE_assembly("create_dd:blaze_gold", "create_dd:ember_alloy", [
    CREATE_filling(incompele, [
      incompele,
      Fluid.of("chemlib:sulfur_trioxide_fluid", 250),
    ]),
    CREATE_deploying(incompele, [incompele, "minecraft:blaze_powder"]),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(4);

  CREATE_mixing("minecraft:glow_berries", [
    "minecraft:golden_apple",
    "4x chemlib:phosphorus",
    "8x chemlib:sucrose",
    "12x chemlib:cellulose",
  ]);

  CREATE_emptying(
    [Fluid.of("chemlib:sulfuric_acid_fluid", 1000)],
    "chemlib:sulfuric_acid"
  );

  CREATE_assembly("mekanism:crystal_iron", "minecraft:flint", [
    CREATE_deploying(incompele, [incompele, "mekanism:dirty_dust_iron"]),
    CREATE_filling(incompele, [
      incompele,
      Fluid.of("chemlib:sulfuric_acid_fluid", 100),
    ]),
    CREATE_cutting(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(6);

  ARS_imbuement("mekanism:crystal_iron", "ars_nouveau:wilden_spike", 400, [
    "ars_nouveau:wilden_spike",
    "ars_nouveau:wilden_horn",
    "ars_nouveau:wilden_wing",
  ]);

  CREATE_mixing(Fluid.of("minecraft:milk", 1000), [
    "4x chemlib:calcium",
    "4x chemlib:protein",
    Fluid.of("minecraft:water", 1000),
  ]);

  CREATE_mechanicalCrafting(
    "create:blaze_cake_base",
    ["A       A", "ABBBCBBBA", "AAAAAAAAA"],
    {
      A: "create:cinder_flour",
      B: "minecraft:sugar",
      C: "create_dd:blaze_gold",
    }
  );

  CREATE_mixing("2x create_dd:mithril_ingot", [
    "2x create_dd:blaze_gold",
    "8x #forge:ingots/brass",
    "8x #forge:ingots/steel",
    "16x create:experience_nugget",
    Fluid.of("create_dd:glowberry_milkshake", 500),
  ]).superheated();

  CREATE_assembly("create_dd:inductive_mechanism", "create_dd:andesite_sheet", [
    CREATE_deploying(incompele, [incompele, "minecraft:slime_ball"]),
    CREATE_deploying(incompele, [incompele, "create_dd:steel_ingot"]),
    CREATE_deploying(incompele, [incompele, "anvilcraft:circuit_board"]),
    CREATE_pressing(incompele, incompele),
  ])
    .transitionalItem(incompele)
    .loops(4);

  CREATE_assembly(
    "create_dd:shadow_steel_casing",
    "create_dd:netherite_casing",
    [
      CREATE_deploying(incompele, [incompele, "create_dd:mithril_ingot"]),
      CREATE_deploying(incompele, [incompele, "create_dd:compound_base"]),
      CREATE_filling(incompele, [incompele, Fluid.of("create_dd:sap", 250)]),
      CREATE_pressing(incompele, incompele),
    ]
  )
    .transitionalItem(incompele)
    .loops(4);

  CREATE_mechanicalCrafting(
    "create_dd:industrial_fan",
    [
      "HAAAAAAAH",
      "ABBBBBBBA",
      "ABCCCCCBA",
      "ABDDEDDBA",
      "ABDEFEDBA",
      "ABDDEDDBA",
      "ABGGGGGBA",
      "ABBBBBBBA",
      "HAAAAAAAH",
    ],
    {
      A: "create:encased_fan",
      B: "create_dd:mithril_ingot",
      C: "create_dd:compound_base",
      D: "create:rotation_speed_controller",
      E: "create_dd:shadow_steel_casing",
      F: "anvilcraft:royal_steel_block",
      G: "create_dd:shadow_steel",
      H: "create:mechanical_arm",
    }
  );

  CREATE_mixing(Fluid.of("chemlib:ammonium_fluid", 1000), [
    Fluid.of("chemlib:ammonia_fluid", 1000),
    "chemlib:sodium_chloride",
  ]);
  CREATE_emptying(Fluid.of("chemlib:ammonia_fluid", 1000), "chemlib:ammonia");

  CREATE_mixing(Fluid.of("chemlib:chlorine_fluid", 1000), [
    Fluid.of("chemlib:bromine_fluid", 1000),
    "chemlib:sodium_chloride",
  ]);
  CREATE_emptying(Fluid.of("chemlib:bromine_fluid", 1000), "chemlib:bromine");

  CREATE_mixing(Fluid.of("mekanism:heavy_water", 1000), [
    Fluid.of("chemlib:chlorine_fluid", 1000),
    Fluid.of("chemlib:ammonium_fluid", 1000),
  ]);

  CREATE_mixing(Fluid.of("chemlib:sulfur_dioxide_fluid", 1000), [
    Fluid.of("chemlib:oxygen_fluid", 1000),
    "chemlib:sulfur",
  ]);
  CREATE_emptying(Fluid.of("chemlib:oxygen_fluid", 1000), "chemlib:oxygen");

  CREATE_mixing(Fluid.of("chemlib:nitrogen_dioxide_fluid", 1000), [
    Fluid.of("chemlib:nitrogen_fluid", 1000),
    Fluid.of("chemlib:oxygen_fluid", 1000),
  ]);
  CREATE_emptying(Fluid.of("chemlib:nitrogen_fluid", 1000), "chemlib:nitrogen");

  CREATE_mixing(Fluid.of("mekanism:nutritional_paste", 1000), [
    Fluid.of("chemlib:nitrogen_dioxide_fluid", 1000),
    Fluid.of("chemlib:sulfur_dioxide_fluid"),
  ]);

  CREATE_mixing(Fluid.of("create_dd:shimmer", 1), [
    Fluid.of("mekanism:nutritional_paste", 1000),
    Fluid.of("mekanism:heavy_water", 1000),
  ]);

  SHAPED("create:steam_engine", ["CAD", "ABA", "EAF"], {
    A: "create_dd:infernal_mechanism",
    B: "create_dd:netherite_casing",
    C: "create:windmill_bearing",
    D: "create:large_water_wheel",
    E: "create:water_wheel",
    F: "create:encased_fan",
  });

  SHAPED("create:goggles", [" A ", "BCB", "   "], {
    A: "minecraft:string",
    B: "minecraft:glass",
    C: "minecraft:copper_ingot",
  });

  CREATE_assembly(
    [
      Item.of("create_dd:overcharge_alloy", 1).withChance(0.005),
      Item.of("create_dd:mithril_ingot", 1).withChance(0.995),
    ],
    "create_dd:mithril_ingot",
    [
      CREATE_deploying(incompele, [incompele, "ars_nouveau:source_gem"]),
      CREATE_deploying(incompele, [incompele, "ars_nouveau:source_gem"]),
      CREATE_deploying(incompele, [incompele, "ars_nouveau:source_gem"]),
      CREATE_deploying(incompele, [incompele, "ars_nouveau:source_gem"]),
    ]
  )
    .transitionalItem(incompele)
    .loops(1);

  CREATE_assembly(
    [
      Item.of("create_dd:overcharge_alloy", 2).withChance(0.02),
      Item.of("create_dd:overcharge_alloy", 1).withChance(0.98),
    ],
    "create_dd:overcharge_alloy",
    [
      CREATE_deploying(incompele, [incompele, "ars_nouveau:source_gem"]),
      CREATE_deploying(incompele, [incompele, "ars_nouveau:source_gem"]),
      CREATE_deploying(incompele, [incompele, "ars_nouveau:source_gem"]),
      CREATE_deploying(incompele, [incompele, "ars_nouveau:source_gem"]),
    ]
  )
    .transitionalItem(incompele)
    .loops(1);

  CREATE_mechanicalCrafting(
    "4x create_dd:experience_ingot",
    [
      "ABABABABA",
      "BABABABAB",
      "ABABABABA",
      "BABABABAB",
      "ABABCBABA",
      "BABABABAB",
      "ABABABABA",
      "BABABABAB",
      "ABABABABA",
    ],
    {
      A: "create:experience_nugget",
      B: "create_dd:frozen_nugget",
      C: "create_dd:mithril_ingot",
    }
  );

  CREATE_mixing("8x create_enchantment_industry:hyper_experience_bottle", [
    "8x minecraft:experience_bottle",
    Item.of("minecraft:potion", '{Potion:"minecraft:water"}'),
    Item.of("minecraft:potion", '{Potion:"minecraft:mundane"}'),
    Item.of("minecraft:potion", '{Potion:"minecraft:thick"}'),
    Item.of("minecraft:potion", '{Potion:"minecraft:leaping"}'),
    Item.of("minecraft:potion", '{Potion:"minecraft:strength"}'),
    Item.of("minecraft:potion", '{Potion:"minecraft:long_water_breathing"}'),
    Item.of("minecraft:potion", '{Potion:"minecraft:night_vision"}'),
  ]).superheated();

  CREATE_compacting("create_dd:experience_mass", [
    "create_dd:experience_ingot",
    "64x create_enchantment_industry:hyper_experience_bottle",
  ]);

  CREATE_mechanicalCrafting("quark:gold_bars", ["A A", " A ", "A A"], {
    A: "minecraft:gold_block",
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "chemlib:gold",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [2.0, 0.0, 0.0],
        result: {
          item: "chemlib:gold",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:earth_core_shard_ore"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["quark:gold_bars"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: `${Ag}`,
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [1.0, 30.0, 0.0],
        result: {
          item: `${Ag}`,
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:bedrock"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["chemlib:gold"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "create_dd:refined_radiance",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, 5.0, 0.0],
        result: {
          item: "create_dd:refined_radiance",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:cursed_gold_block"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:mineral_fountain"],
        },
        offset: [0.0, -2.0, 0.0],
      },
      {
        type: "has_block",
        match_block: {
          blocks: ["ars_nouveau:source_gem_block"],
        },
        offset: [0.0, 9.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: [`${Ag}`],
        },
        offset: [0.0, 10.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["create_dd:mithril_ingot"],
        },
        offset: [0.0, 10.0, 0.0],
      },
    ],
  });

  CREATE_assembly(
    "create_dd:fallen_stargaze_singularity",
    "create_dd:compound_base",
    [
      CREATE_deploying(incompele, [incompele, "create_dd:overcharge_alloy"]),
      CREATE_deploying(incompele, [incompele, "create_dd:experience_mass"]),
      CREATE_deploying(incompele, [incompele, "create_dd:refined_radiance"]),
      CREATE_filling(incompele, [incompele, Fluid.of("create_dd:shimmer", 1)]),
    ]
  )
    .transitionalItem(incompele)
    .loops(6);

  ARS_imbuement(
    "create_dd:shadow_steel_casing",
    "create_dd:stargaze_singularity_casing",
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

  CREATE_mechanicalCrafting(
    "steampowered:alternator",
    [" ABA ", "ACACA", "BCDCB", "ACACA", " ABA "],
    {
      A: "create_dd:mithril_ingot",
      B: "create:polished_rose_quartz",
      C: "#forge:storage_blocks/brass",
      D: "create_dd:stargaze_singularity_casing",
    }
  );

  event.replaceInput(
    { output: "create:portable_fluid_interface" },
    "create:copper_casing",
    "create:fluid_tank"
  );

  CREATE_mechanicalCrafting("create:sand_paper", ["AAAAA", "BBBBB", "AAAAA"], {
    A: "minecraft:paper",
    B: "#forge:ingots/steel",
  });

  SHAPELESS("create:weighted_ejector", [
    "create:depot",
    "create:mechanical_crafter",
  ]);
});
