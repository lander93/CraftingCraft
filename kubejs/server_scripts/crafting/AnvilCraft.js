ServerEvents.recipes((event) => {
  const SHAPED = event.shaped;
  const SHAPELESS = event.shapeless;
  const EIO_ALLOY = event.recipes.enderio.alloy_smelting;

  global.anvil_generic = (output, inputs, inputs_count, base, outChance) => {
    event.custom({
      type: "anvilcraft:anvil_processing",
      anvil_recipe_type: "generic",
      icon: {
        item: `${output}`,
      },
      outcomes: [
        {
          type: "spawn_item",
          chance: outChance,
          offset: [0.0, -1.0, 0.0],
          result: {
            item: `${output}`,
          },
        },
      ],
      predicates: [
        {
          type: "has_block",
          match_block: {
            blocks: [`${base}`],
          },
          offset: [0.0, -1.0, 0.0],
        },
        {
          type: "has_item_ingredient",
          match_item: {
            count: {
              min: inputs_count,
            },
            items: [`${inputs}`],
          },
          offset: [0.0, 0.0, 0.0],
        },
      ],
    });
  };

  EIO_ALLOY(
    "chemlib:iron",
    ["mekanism:dirty_dust_iron", "8x minecraft:cobbled_deepslate"],
    3000
  );

  EIO_ALLOY(
    "32x minecraft:amethyst_shard",
    [
      "chemlib:iron",
      "32x chemlib:silicon_dioxide",
      "enderio:grains_of_infinity",
    ],
    4000
  );

  SHAPED(Item.of("chemlib:hydroxylapatite", 3), ["AAA", "AAA", "AAA"], {
    A: "minecraft:white_dye",
  });

  SHAPELESS(Item.of("chemlib:hydroxylapatite", 1), [
    "minecraft:white_dye",
    "minecraft:white_dye",
    "minecraft:white_dye",
    "minecraft:white_dye",
  ]);

  EIO_ALLOY("chemlib:calcium", ["chemlib:hydroxylapatite"], 500);

  EIO_ALLOY("chemlib:calcium_carbonate", [
    "chemlib:calcium",
    "4x chemlib:carbonate",
  ]);

  EIO_ALLOY("chemlib:carbon", ["#minecraft:logs"], 1000);

  EIO_ALLOY("minecraft:calcite", [
    "minecraft:stone",
    "chemlib:calcium_carbonate",
  ]);

  SHAPED(Item.of("minecraft:water_bucket", 1), ["AAA", "ABA", "AAA"], {
    A: "anvilcraft:sapphire",
    B: "minecraft:bucket",
  });

  EIO_ALLOY("minecraft:lava_bucket", ["minecraft:bucket", "anvilcraft:ruby"]);

  SHAPED(
    Item.of("anvilcraft:piezoelectric_crystal", 4),
    ["ABA", " C ", "ABA"],
    {
      A: "minecraft:copper_ingot",
      B: "minecraft:amethyst_block",
      C: "anvilcraft:topaz",
    }
  );

  SHAPELESS(Item.of("anvilcraft:ferrite_core_magnet_block", 1), [
    "anvilcraft:hollow_magnet_block",
    "minecraft:iron_ingot",
  ]);

  SHAPELESS(Item.of("anvilcraft:magnet"), [
    Item.of("anvilcraft:magnet").ignoreNBT(),
    "anvilcraft:magnet_ingot",
  ]);

  EIO_ALLOY(
    "4x minecraft:redstone",
    ["chemlib:strontium_carbonate_dust", "chemlib:iron_oxide"],
    16000
  );

  SHAPED(Item.of("chemlib:graphite", 2), ["AAA", "ABA", "AAA"], {
    A: "chemlib:carbon",
    B: "minecraft:lava_bucket",
  });

  global.anvil_generic(
    "minecraft:charcoal",
    "chemlib:graphite",
    2,
    "anvilcraft:stamping_platform",
    1.0
  );

  SHAPELESS(Item.of("chemlib:hydrochloric_acid", 1), [
    Item.of("minecraft:water_bucket").ignoreNBT(),
    "chemlib:chlorine",
  ]).replaceIngredient(
    Item.of("minecraft:water_bucket").ignoreNBT(),
    "minecraft:bucket"
  );

  SHAPELESS("8x chemlib:sodium_chloride", [
    Item.of("minecraft:magma_block").ignoreNBT(),
    Item.of("minecraft:water_bucket").ignoreNBT(),
  ])
    .replaceIngredient(
      Item.of("minecraft:water_bucket").ignoreNBT(),
      "minecraft:bucket"
    )
    .keepIngredient(Item.of("minecraft:magma_block").ignoreNBT());

  SHAPELESS(Item.of("chemlib:cellulose", 3), [
    "minecraft:paper",
    "minecraft:paper",
    "minecraft:paper",
    "minecraft:paper",
    "minecraft:paper",
    "minecraft:paper",
    "chemlib:hydrochloric_acid",
  ]);

  global.anvil_generic(
    "chemlib:protein",
    "minecraft:slime_ball",
    2,
    "anvilcraft:stamping_platform",
    1.0
  );

  SHAPELESS(Item.of("chemlib:sucrose", 4), [
    "minecraft:slime_ball",
    "minecraft:slime_ball",
    "chemlib:hydrochloric_acid",
  ]);

  global.anvil_generic(
    "minecraft:leather",
    "chemlib:protein",
    2,
    "anvilcraft:stamping_platform",
    1.0
  );

  event.remove({
    output: "minecraft:diamond",
    type: "anvilcraft:anvil_processing",
    input: "minecraft:coal_block",
  });

  global.anvil_generic(
    "minecraft:anvil",
    "quark:raw_iron_bricks",
    1,
    "minecraft:iron_block",
    1.0
  );

  EIO_ALLOY(
    "4x minecraft:glass",
    ["16x minecraft:sand", "enderio:grains_of_infinity"],
    8000
  );

  event.replaceInput(
    { type: "crafting_shaped", output: "anvilcraft:magnetoelectric_core" },
    "anvilcraft:hollow_magnet_block",
    "anvilcraft:magnet_ingot"
  );

  event.replaceInput(
    { type: "crafting_shaped", output: "anvilcraft:circuit_board" },
    "minecraft:quartz",
    "botania:redstone_root"
  );

  SHAPED(Item.of("anvilcraft:charge_collector", 1), [" A ", "BCB", "DDD"], {
    A: "anvilcraft:magnetoelectric_core",
    B: "minecraft:copper_ingot",
    C: "anvilcraft:circuit_board",
    D: "minecraft:iron_ingot",
  });

  event.replaceInput(
    { type: "crafting_shaped", output: "anvilcraft:batch_crafter" },
    "minecraft:crafting_table",
    "quark:crafter"
  );

  SHAPED(Item.of("anvilcraft:heater"), ["ABA", "CDC", "CCC"], {
    A: "minecraft:terracotta",
    B: "anvilcraft:magnetoelectric_core",
    C: "minecraft:iron_ingot",
    D: "anvilcraft:circuit_board",
  });

  SHAPELESS(Item.of("chemlib:aluminum", 1), [
    "chemlib:hydrochloric_acid",
    "4x minecraft:stone",
  ]);

  SHAPELESS(Item.of("chemlib:aluminum_oxide"), [
    Item.of("bloodmagic:bloodlightsigil").ignoreNBT(),
    "chemlib:aluminum",
  ]).keepIngredient(Item.of("bloodmagic:bloodlightsigil").ignoreNBT());

  SHAPED(Item.of("4x minecraft:clay_ball"), ["ABA", "BCB", "ABA"], {
    A: "chemlib:aluminum_oxide",
    B: "chemlib:silicon_dioxide",
    C: Item.of("minecraft:water_bucket").ignoreNBT(),
  }).replaceIngredient(
    Item.of("minecraft:water_bucket").ignoreNBT(),
    "minecraft:bucket"
  );

  SHAPELESS(Item.of("chemlib:silicon_dioxide", 32), [
    "chemlib:hydrochloric_acid",
    "4x minecraft:flint",
  ]);

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "anvilcraft:royal_steel_ingot",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "anvilcraft:royal_steel_ingot",
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
            min: 6,
          },
          items: ["anvilcraft:magnet_ingot"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 4,
          },
          items: ["minecraft:amethyst_shard"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 2,
          },
          items: ["minecraft:diamond"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "chemlib:graphite",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "chemlib:graphite",
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
          items: ["chemlib:carbon"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "minecraft:diamond",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "minecraft:diamond",
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
            min: 16,
          },
          items: ["chemlib:graphite"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "minecraft:andesite",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "minecraft:andesite",
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
          items: ["minecraft:gravel"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 2,
          },
          items: ["minecraft:flint"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  SHAPED(Item.of("minecraft:smithing_table", 1), ["AA ", "BB ", "BB "], {
    A: "minecraft:leather",
    B: "anvilcraft:reinforced_concrete_gray",
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "anvilcraft:royal_steel_upgrade_smithing_template",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "anvilcraft:royal_steel_upgrade_smithing_template",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:reinforced_concrete_gray"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["anvilcraft:royal_steel_ingot"],
        },
        offset: [0.0, 0.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 64,
          },
          items: ["minecraft:amethyst_shard"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  SHAPELESS(Item.of("chemlib:starch"), [
    "chemlib:hydrochloric_acid",
    "4x minecraft:wheat",
  ]);

  global.anvil_generic(
    "chemlib:starch",
    "minecraft:wheat",
    3,
    "anvilcraft:reinforced_concrete_gray",
    1.0
  );

  EIO_ALLOY(
    "8x chemlib:keratin",
    ["2x chemlib:protein", "2x chemlib:starch", "6x chemlib:sulfur_dioxide"],
    4000
  );

  global.anvil_generic(
    "minecraft:string",
    "chemlib:keratin",
    1,
    "anvilcraft:stamping_platform",
    1.0
  );

  global.anvil_generic(
    "minecraft:bamboo",
    "chemlib:cellulose",
    1,
    "anvilcraft:stamping_platform",
    1.0
  );

  EIO_ALLOY("8x minecraft:netherrack", [
    "minecraft:netherrack",
    "chemlib:sulfur_dioxide",
    "4x chemlib:silicon_dioxide",
  ]);

  global.anvil_generic(
    "minecraft:sugar_cane",
    "chemlib:sucrose",
    8,
    "anvilcraft:stamping_platform",
    1.0
  );

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "minecraft:cactus",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "minecraft:cactus",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:stamping_platform"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 2,
          },
          items: ["chemlib:sucrose"],
        },
        offset: [0.0, 0.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 2,
          },
          items: ["chemlib:cellulose"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "minecraft:cactus",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "chemlib:nickel",
        },
      },
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "chemlib:chlorine",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:piezoelectric_crystal"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["chemlib:nickel_chloride"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  SHAPELESS(Item.of("chemlib:nickel_chloride", 1), [
    "minecraft:cactus",
    "2x minecraft:cactus",
  ]);

  global.anvil_generic(
    "mekanism:sawdust",
    "minecraft:sugar_cane",
    1,
    "anvilcraft:stamping_platform",
    1.0
  );

  SHAPELESS(Item.of("chemlib:sucrose", 8), [
    "chemlib:hydrochloric_acid",
    "minecraft:sugar_cane",
  ]);

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "mekanism:clump_iron",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 4,
          item: "mekanism:clump_iron",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:stamping_platform"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["minecraft:amethyst_shard"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  global.anvil_generic(
    "anvilcraft:deepslate_chips",
    "minecraft:deepslate",
    1,
    "anvilcraft:stamping_platform",
    1.0
  );

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "minecraft:deepslate",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "minecraft:deepslate",
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
          items: ["minecraft:cobbled_deepslate"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  global.anvil_generic(
    "chemlib:silver_dust",
    "anvilcraft:deepslate_chips",
    1,
    "minecraft:scaffolding",
    0.75
  );

  SHAPED(Item.of("anvilcraft:ruby_laser", 4), ["ABA", "CFC", "GEG"], {
    A: "chemlib:silver_ingot",
    B: "minecraft:tinted_glass",
    C: "anvilcraft:ruby",
    E: "anvilcraft:royal_steel_ingot",
    F: "anvilcraft:circuit_board",
    G: "anvilcraft:induction_light",
  });

  SHAPED(Item.of("anvilcraft:ruby_prism", 1), ["ABA", "BCB", "ADA"], {
    A: "chemlib:silver_ingot",
    B: "anvilcraft:ruby",
    C: "anvilcraft:tempering_glass",
    D: "anvilcraft:royal_steel_ingot",
  });

  SHAPELESS(Item.of("minecraft:diorite", 1), [
    "2x chemlib:aluminum_oxide",
    "4x chemlib:silicon_dioxide",
  ]);

  event.replaceInput(
    { output: "anvilcraft:block_placer", type: "crafting_shaped" },
    "minecraft:redstone",
    "botania:redstone_root"
  );

  SHAPED(Item.of("minecraft:lever", 1), ["A  ", "B  ", "   "], {
    A: Item.of("anvilcraft:anvil_hammer").ignoreNBT(),
    B: "anvilcraft:royal_steel_ingot",
  });

  global.anvil_generic(
    "chemlib:nitrate",
    "minecraft:cactus",
    4,
    "anvilcraft:stamping_platform",
    1.0
  );

  SHAPELESS(Item.of("chemlib:nitric_acid", 1), [
    "chemlib:hydrochloric_acid",
    "chemlib:nitrate",
  ]);

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "chemlib:tungsten",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "chemlib:tungsten",
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
          items: ["anvilcraft:tungsten_ingot"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["chemlib:nitric_acid"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "super_heating",
    icon: {
      item: "minecraft:netherite_scrap",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "minecraft:netherite_scrap",
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
          items: ["chemlib:tungsten"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 16,
          },
          items: ["chemlib:carbon"],
        },
        offset: [0.0, -1.0, 0.0],
      },
    ],
  });

  SHAPED(Item.of("anvilcraft:impact_pile", 1), [" A ", " B ", " B "], {
    A: "minecraft:obsidian",
    B: "minecraft:netherite_scrap",
  });

  SHAPED(Item.of("create:andesite_alloy"), ["ABA", "CBD", "ABA"], {
    A: "minecraft:andesite",
    B: "minecraft:iron_ingot",
    C: "anvilcraft:void_matter",
    D: "anvilcraft:earth_core_shard",
  });

  SHAPED(Item.of("create:andesite_alloy", 2), ["ABA", "BCB", "ABA"], {
    A: "minecraft:andesite",
    B: "create_dd:industrial_iron_ingot",
    C: "create:andesite_alloy",
  });

  SHAPED(
    Item.of("anvilcraft:thermoelectric_converter", 1),
    ["ABA", "CDC", "ABA"],
    {
      A: "minecraft:copper_ingot",
      B: "anvilcraft:royal_steel_ingot",
      C: "anvilcraft:sapphire",
      D: "minecraft:blue_ice",
    }
  );

  SHAPELESS(Item.of("minecraft:snowball", 4), [
    Item.of("minecraft:water_bucket").ignoreNBT(),
    "anvilcraft:sapphire",
  ]).replaceIngredient(
    Item.of("minecraft:water_bucket").ignoreNBT(),
    "minecraft:bucket"
  );

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "minecraft:sunflower",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          item: "minecraft:sunflower",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["anvilcraft:stamping_platform"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 1,
          },
          items: ["minecraft:dandelion"],
        },
        offset: [0.0, 0.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 64,
          },
          items: ["minecraft:bone_meal"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  event.custom({
    type: "anvilcraft:anvil_processing",
    anvil_recipe_type: "generic",
    icon: {
      item: "minecraft:amethyst_shard",
    },
    outcomes: [
      {
        type: "spawn_item",
        chance: 1.0,
        offset: [0.0, -1.0, 0.0],
        result: {
          count: 4,
          item: "minecraft:amethyst_shard",
        },
      },
    ],
    predicates: [
      {
        type: "has_block",
        match_block: {
          blocks: ["minecraft:budding_amethyst"],
        },
        offset: [0.0, -1.0, 0.0],
      },
      {
        type: "has_item_ingredient",
        match_item: {
          count: {
            min: 8,
          },
          items: ["minecraft:cobblestone"],
        },
        offset: [0.0, 0.0, 0.0],
      },
    ],
  });

  SHAPELESS(Item.of("minecraft:raw_iron_block", 1), [
    "9x quark:raw_iron_bricks",
  ]);
});
