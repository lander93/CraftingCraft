StartupEvents.registry("item", (event) => {
  event
    .create("blue_apple", "basic")
    .displayName("蓝苹果")
    .food((food) => {
      food.hunger(40);
      food.saturation(0.8);
    });
});
