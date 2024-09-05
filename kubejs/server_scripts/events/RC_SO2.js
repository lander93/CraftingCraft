BlockEvents.rightClicked('minecraft:magma_block', event => {
        let {player} = event
        let {block} = event
        if (block.up.id == 'minecraft:air' && player.mainHandItem.id == 'minecraft:glass_bottle'){
            player.mainHandItem.setCount(player.mainHandItem.count - 1)
            player.give('chemlib:sulfur_dioxide')
        }
    }
)