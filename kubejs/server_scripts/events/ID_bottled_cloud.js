ItemEvents.dropped('minecraft:glass_bottle', event => {
    if (event.itemEntity.blockY >= 190){
        event.itemEntity.setItem(Item.of('quark:bottled_cloud', event.item.count))
    }
})