ServerEvents.tags("item", (event) => {
  Ingredient.all.getItemIds().forEach((i) => {
    event.add("kubejs:items", i);
  });
});
