export default class StorageWrapper {
  static setItem<TKey extends string, TValue>(key: TKey, value: TValue): void {
    // Store the value in browser storage using key-value pair
    localStorage.setItem(key, JSON.stringify(value));
  }
  static getItem<TKey extends string, TValue>(key: TKey): TValue | null {
    // Retrieve the stored value from browser storage
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      // Parse the stored value and return it
      return JSON.parse(storedValue) as TValue;
    }
    return null; // Return null if value is not found
  }
  static removeItem<TKey extends string>(key: TKey): void {
    // Remove the value associated with the key from browser storage
    localStorage.removeItem(key);
  }
  static clear(): void {
    // Clear all values from browser storage
    localStorage.clear();
  }
}
