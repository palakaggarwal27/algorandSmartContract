import { Contract } from '@algorandfoundation/algorand-typescript'
import { GlobalState } from '@algorandfoundation/algorand-typescript'

export class GroceryList extends Contract {
  // Store grocery list items in global state (as a single string for simplicity)
  groceryList = GlobalState<string>({
    key: "groceryList",
    initialValue: ""
  })

  // Add an item (title + quantity)
  AddItem(item: string, quantity: string): string {
    // Append new item to the existing list
    const currentList = this.groceryList.value
    const newEntry = `${item} (${quantity}), `
    this.groceryList.value = currentList + newEntry

    return item
  }

  // Clear the list
  ClearList(): string {
    this.groceryList.value = ""
    return "List cleared!"
  }

  // Get current list
  GetList(): string {
    return this.groceryList.value
  }
}

