import { beforeEach, describe, expect, it } from "vitest";
import StorageWrapper from ".";

describe("StorageWrapper", () => {
  // let storageWrapper: StorageWrapper;

  beforeEach(() => {
    // storageWrapper = new StorageWrapper();
    localStorage.clear(); // Clear storage before each test
  });

  it("should store a value and retrieve it correctly", () => {
    const key = "name";
    const value = "John Doe";

    StorageWrapper.setItem(key, value);

    const storedValue = localStorage.getItem(key);
    expect(storedValue).toBe(JSON.stringify(value));
  });

  it("should retrieve a stored value correctly", () => {
    const key = "name";
    const value = "John Doe";
    localStorage.setItem(key, JSON.stringify(value));

    const retrievedValue = StorageWrapper.getItem<string, string>(key);
    expect(retrievedValue).toBe(value);
  });

  it("should return null if a value is not found", () => {
    const key = "nonexistent";

    const retrievedValue = StorageWrapper.getItem<string, null>(key);
    expect(retrievedValue).toBeNull();
  });

  it("should remove a stored value correctly", () => {
    const key = "name";
    const value = "John Doe";
    localStorage.setItem(key, JSON.stringify(value));

    StorageWrapper.removeItem(key);

    const storedValue = localStorage.getItem(key);
    expect(storedValue).toBeNull();
  });

  it("should clear all values from storage", () => {
    localStorage.setItem("key1", "value1");
    localStorage.setItem("key2", "value2");

    StorageWrapper.clear();

    expect(localStorage.length).toBe(0);
  });
});
