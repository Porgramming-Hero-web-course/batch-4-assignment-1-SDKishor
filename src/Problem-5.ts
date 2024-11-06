{
  // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
  
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  console.log(getProperty({ apple: 10, banana: 12, orange: 5 }, "apple"));
  
}