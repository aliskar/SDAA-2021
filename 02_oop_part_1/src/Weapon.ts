import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;

  private damageModifier: number = 0;
  private durabilityModifier: number = 0;

  constructor(name: string, public baseDamage: number, public baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
  }

  public setDamageModifier(modifier: number) {
    this.damageModifier = modifier;
  }

  public getDamageModifier() {
    return this.damageModifier;
  }

  public getDurabilityModifier() {
    return this.durabilityModifier;
  }

  public setDurabilityModifier(modifier: number) {
    this.durabilityModifier = modifier;
  }

  public getDamage() {
    return +(this.baseDamage + this.damageModifier).toFixed(2);
  }

  public getDurability() {
    return +(this.baseDurability + this.durabilityModifier).toFixed(2);
  }

  public toString() {
    return `${super.toString()}, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`;
  }

  public polish(): void {}

  public use() {
    if (this.getDurability() <= 0) {
      return `You can't use the ${this.getName()}, it is broken.`;
    }

    this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;

    const ifBreaks = this.getDurability() <= 0 ? `\nThe ${this.getName()} breaks.` : "";

    return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.${ifBreaks}`;
  }
}
