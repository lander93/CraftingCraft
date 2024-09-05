BlockEvents.rightClicked('anvilcraft:piezoelectric_crystal',event => {
    let {player} = event
    if (player.mainHandItem.id == 'chemlib:sodium_chloride'){
        player.give('chemlib:chlorine')
        player.mainHandItem.setCount(player.mainHandItem.count - 1)
    }
})