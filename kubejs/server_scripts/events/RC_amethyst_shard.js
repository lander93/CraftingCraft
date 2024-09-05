BlockEvents.rightClicked('minecraft:budding_amethyst', event =>{
    let A = 0.25
    let B = Math.random(1)
    if(event.player.mainHandItem.id == 'botania:pebble'){
        if (A >= B){
            event.player.addItem('minecraft:amethyst_shard')
        }
        event.player.mainHandItem.setCount(event.player.mainHandItem.count - 1)
    }
    
})