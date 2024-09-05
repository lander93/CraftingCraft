BlockEvents.rightClicked('minecraft:piston', event => {
    let {block} = event
    let {player} = event
    if (player.mainHandItem.id == 'botania:redstone_root' && player.mainHandItem.count >= 2){
        if (block.up.id == 'minecraft:cobblestone' && block.down.id == 'minecraft:cobblestone'){
            if (block.west.id == 'minecraft:cobblestone' && block.east.id == 'minecraft:cobblestone' || block.south.id == 'minecraft:cobblestone' && block.north.id == 'minecraft:cobblestone'){
                if (block.west.id == 'minecraft:cobblestone'){
                    block.set("minecraft:air")
                    block.east.set("minecraft:air")
                    block.west.set("minecraft:air")
                    block.up.set("minecraft:air")
                    block.down.set("minecraft:air")
                    player.give('minecraft:dropper')
                    player.mainHandItem.setCount(event.player.mainHandItem.count - 2)
                }else if(block.south.id == 'minecraft:cobblestone'){
                    block.set("minecraft:air")
                    block.south.set("minecraft:air")
                    block.north.set("minecraft:air")
                    block.up.set("minecraft:air")
                    block.down.set("minecraft:air")
                    player.give('minecraft:dropper')
                    player.mainHandItem.setCount(event.player.mainHandItem.count - 2)
                }
            }
        }
    }
})