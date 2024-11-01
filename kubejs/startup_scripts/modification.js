BlockEvents.modification((event) => {});
ItemEvents.modification((event) => {
  event.modify("pneumaticcraft:pressure_chamber_glass", (item) => {
    item.maxStackSize = 1;
  });
});
