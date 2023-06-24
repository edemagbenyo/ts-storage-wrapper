import StorageWrapper from "../src/index";

StorageWrapper.setItem("name", "John Doe");

// Storing an object with a specific key
const user = { name: "John Doe", age: 25 };
StorageWrapper.setItem("user", user);

// const
