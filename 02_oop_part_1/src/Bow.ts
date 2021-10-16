import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  public polish() {
    const newDurabilityModifier = this.getDurabilityModifier() + Weapon.MODIFIER_CHANGE_RATE;

    this.baseDurability + newDurabilityModifier <= 1
      ? this.setDurabilityModifier(newDurabilityModifier)
      : this.setDurabilityModifier(1);
  }
}
