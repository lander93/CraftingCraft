BlockEvents.rightClicked('minecraft:oak_log', event => {
    let A = 0.05
    let B = Math.random(1)
    let {player} = event
    if (player.mainHandItem.id == 'minecraft:stick' && player.offHandItem.id == 'minecraft:stick' && A >= B){
        player.addItem('chemlib:carbon')
        event.block.set('minecraft:fire')
    }
})