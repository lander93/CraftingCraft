BlockEvents.placed('minecraft:mossy_cobblestone', event =>{
    let {block} = event
    if (block.down.id == 'minecraft:fire'){
        block.set('minecraft:stone')
        block.down.set('minecraft:air')
    }
})