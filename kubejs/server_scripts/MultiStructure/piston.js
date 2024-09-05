BlockEvents.rightClicked('minecraft:redstone_torch', event => {
    let {block} = event
    let {player} = event
    if (player.mainHandItem.id == 'mekanism:clump_iron' && player.mainHandItem.count >= 16) {
        let stone = 'minecraft:cobblestone'
        let wood = 'minecraft:oak_planks'
        let east = block.east.id
        let west = block.west.id
        let south = block.south.id
        let north = block.north.id
        let BLOCK_side = [
            east, west, south, north
        ]
        let A = 0
        let a = null
        if (east == stone || west == stone || south == stone || north == stone){
            for (a in BLOCK_side){
                if (BLOCK_side[a] == wood){
                    A ++
                }
            }
            if (A == 3){
                block.set("minecraft:air")
                block.east.set("minecraft:air")
                block.west.set("minecraft:air")
                block.south.set("minecraft:air")
                block.north.set("minecraft:air")
                player.give('minecraft:piston')
                player.mainHandItem.setCount(event.player.mainHandItem.count - 16)
            }
        }
    }
})