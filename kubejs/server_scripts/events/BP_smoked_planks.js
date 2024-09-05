BlockEvents.placed('minecraft:oak_stairs', event => {
    if (event.block.down.id == 'minecraft:campfire'){
        event.block.set('create_dd:smoked_planks')
        event.block.down.set('minecraft:air')
    }
})