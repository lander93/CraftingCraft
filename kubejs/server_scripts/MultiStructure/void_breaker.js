MMEvents.createStructures((event) => {
  event
    .create("mm:void_breaker")
    .controllerId("mm:void_breaker_control")
    .name("打破虚空器")
    .layout((a) => {
      a.layer([
        "ABBBBBA",
        "B     B",
        "B  D  B",
        "B DPD B",
        "B  D  B",
        "B     B",
        "ABBZBBA",
      ])
        .layer([
          "B     B",
          "       ",
          "   F   ",
          "  FFF  ",
          "   F   ",
          "       ",
          "B     B",
        ])
        .layer([
          "B     B",
          "   G   ",
          "       ",
          " G H G ",
          "       ",
          "   G   ",
          "B     B",
        ])
        .layer([
          "B  C  B",
          "  J J  ",
          " JKHKJ ",
          "L HMH N",
          " JKHKJ ",
          "  J J  ",
          "B  O  B",
        ])
        .layer([
          "B     B",
          "   G   ",
          "       ",
          " G H G ",
          "       ",
          "   G   ",
          "B     B",
        ])
        .layer([
          "B     B",
          "       ",
          "   F   ",
          "  FFF  ",
          "   F   ",
          "       ",
          "B     B",
        ])
        .layer([
          "ABBBBBA",
          "B     B",
          "B  D  B",
          "B DED B",
          "B  D  B",
          "B     B",
          "ABBBBBA",
        ])

        .key("D", {
          block: "anvilcraft:glowing_netherite_block",
        })
        .key("N", {
          block: "mm:void_breaker_port_input",
        })
        .key("G", {
          block: "ars_nouveau:source_gem_block",
        })
        .key("E", {
          block: "mm:void_breaker_air_port_input",
        })
        .key("B", {
          block: "pneumaticcraft:heat_pipe",
        })
        .key("F", {
          block: "minecraft:glass_pane",
        })
        .key("O", {
          block: "mm:void_breaker_fluid_port_input",
        })
        .key("M", {
          block: "draconicevolution:infused_obsidian",
        })
        .key("P", {
          block: "mm:void_breaker_energy_input",
        })
        .key("J", {
          block: "minecraft:purple_wool",
        })
        .key("H", {
          block: "create_dd:stargaze_singularity_casing",
        })
        .key("L", {
          block: "mm:void_breaker_port_output",
        })
        .key("A", {
          block: "pneumaticcraft:compressed_iron_block",
        })
        .key("K", {
          block: "create_dd:refined_radiance_block",
        })
        .key("Z", {
          block: "mm:void_breaker_kinetic_port_input",
        });
    });
});

MMEvents.createProcesses((event) => {
  event
    .create("mm:VB_aa1")
    .structureId("mm:void_breaker")
    .ticks(20)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "botania:pebble",
        count: 64,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:fluid",
        fluid: "minecraft:water",
        amount: 100,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:energy",
        amount: 1000,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:create/kinetic",
        speed: 256,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:pneumaticcraft/air",
        air: 120.0,
        pressure: 15.0,
      },
    })
    .output({
      type: "mm:output/simple",
      chance: 0.1,
      ingredient: {
        type: "mm:item",
        item: "kubejs:void_shard",
        count: 1,
      },
    });

  event
    .create("mm:VB_aa2")
    .structureId("mm:void_breaker")
    .ticks(1200)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "minecraft:echo_shard",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:fluid",
        fluid: "minecraft:water",
        amount: 100,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:energy",
        amount: 1000,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:create/kinetic",
        speed: 256,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:pneumaticcraft/air",
        air: 120.0,
        pressure: 15.0,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "kubejs:spatial_rift",
        count: 1,
      },
    });

  event
    .create("mm:VB_aa3")
    .structureId("mm:void_breaker")
    .ticks(1200)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "quark:gold_bars",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:fluid",
        fluid: "minecraft:water",
        amount: 100,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:energy",
        amount: 1000,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:create/kinetic",
        speed: 256,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:pneumaticcraft/air",
        air: 120.0,
        pressure: 15.0,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "minecraft:raw_gold",
        count: 6,
      },
    });
});
