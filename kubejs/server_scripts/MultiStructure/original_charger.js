MMEvents.createStructures((event) => {
  event
    .create("mm:original_charger")
    .controllerId("mm:original_charger_control")
    .name("原始充电器")
    .layout((a) => {
      a.layer(["AAA", "AGA", "AAA"])
        .layer(["ADA", "D D", "ADA"])
        .layer(["ABA", "ADC", "AFA"])

        .key("F", {
          block: "mm:original_port_input",
        })
        .key("A", {
          block: "create_dd:shadow_steel_casing",
        })
        .key("D", {
          block: "anvilcraft:magnet_block",
        })
        .key("G", {
          block: "mm:original_energy_input",
        })
        .key("B", {
          block: "mm:original_port_output",
        });
    });
});

MMEvents.createProcesses((event) => {
  event
    .create("mm:OC_aa1")
    .structureId("mm:original_charger")
    .ticks(200)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "anvilcraft:capacitor_empty",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:energy",
        amount: 100,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "anvilcraft:capacitor",
        count: 1,
      },
    });

  event
    .create("mm:OC_aa2")
    .structureId("mm:original_charger")
    .ticks(400)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "anvilcraft:capacitor",
        count: 2,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "integrateddynamics:crystalized_menril_chunk",
        count: 2,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "ars_nouveau:conjuration_essence",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "minecraft:golden_apple",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:energy",
        amount: 100,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "kubejs:blue_apple",
        count: 1,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "anvilcraft:capacitor_empty",
        count: 2,
      },
    });

  event
    .create("mm:OC_aa3")
    .structureId("mm:original_charger")
    .ticks(10)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "minecraft:iron_ingot",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:energy",
        amount: 100,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "anvilcraft:magnet_ingot",
        count: 1,
      },
    });

  event
    .create("mm:OC_aa4")
    .structureId("mm:original_charger")
    .ticks(1200)
    .input({
      type: "mm:input/consume",
      ingredient: {
        type: "mm:item",
        item: "anvilcraft:heated_netherite_block",
        count: 1,
      },
    })
    .input({
      type: "mm:input/consume",
      per_tick: true,
      ingredient: {
        type: "mm:energy",
        amount: 100,
      },
    })
    .output({
      type: "mm:output/simple",
      ingredient: {
        type: "mm:item",
        item: "anvilcraft:glowing_netherite_block",
        count: 1,
      },
    });
});
