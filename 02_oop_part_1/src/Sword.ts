import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  private maxPossibleDamage: number;
  private maxPossibleDamageModifier: number;

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("sword", baseDamage, baseDurability, value, weight);

    this.maxPossibleDamage = baseDamage * 1.25;
    this.maxPossibleDamageModifier = baseDamage * 0.25;
  }

  public polish() {
    const newDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
    const remainingDamageCapacity = this.maxPossibleDamage - this.getDamage();

    remainingDamageCapacity >= newDamageModifier
      ? this.setDamageModifier(newDamageModifier)
      : this.setDamageModifier(this.maxPossibleDamageModifier);
  }
}
