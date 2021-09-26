import { Inventory } from "./src/Inventory";
import { Item } from "./src/Item";
import { ItemWeightComparator } from "./src/ItemWeightComparator";
import { Pizza } from "./src/Pizza";
import { Sword } from "./src/Sword";

// Create the inventory
const inventory: Inventory = new Inventory();

// Create a set of items
const a: Item = new Sword(30.4219, 0.7893, 300, 2.032);
const b: Item = new Sword(40, 0.7893, 200, 2);
const c: Item = new Sword(40, 1, 100, 3);
const pizza: Item = new Pizza(12, false);

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);

// Display the inventory
console.log('INVENTORY = 1 = by default')
console.log(inventory.toString());
// Sort by natural order
inventory.sort();

// Display the new inventory
console.log('\nINVENTORY = 2 = by value')
console.log(inventory.toString());


// Sort by weight
inventory.sort(new ItemWeightComparator());
console.log('\nINVENTORY = 3 = by weight')
// Display the inventory again
console.log(inventory.toString());
// Use the sword
console.log(a.use());
console.log(a.use());
