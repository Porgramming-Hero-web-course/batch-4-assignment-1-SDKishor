Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

# Type Guards

Type Guards are essential in Typescript for maintaining type safety,  checking types in runtime and do different things depending on the type and elementing run time error.

# various types of Type Guards

### 1. typeof Type Guard

The **typeof operator** is used to check the type of a variable.

```
function isString<T>(value: T): value is string {
  return typeof value === "string";
}

isString("hello");
```

### 2. in Operator Type Guard

the **in operator** is used to check whether a property is present in an object.

```
interface Dog {
  bark: () => console.log("Gaw Gaw!");
}

interface Cat {
  meow: () => console.log("Meow Meow!");
}

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); 
     animal is a Dog 
  } else {
    animal.meow();  
    animal is a Cat
  }
}

makeSound(dog); // Output: Gaw Gaw!
makeSound(cat); // Output: Meow Meow!

```   
### 3. instanceof Type Guard

the **instanceof operator** is used to check whether an object is an instance of a class.

```
class Dog {
  bark() {
    console.log("Gaw Gaw!");
  }
} 

class Cat {
  meow() {
    console.log("Meow Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); 
  } else {
    animal.meow();  
  }
}

makeSound(dog); // Output: Gaw Gaw!
makeSound(cat); // Output: Meow Meow!
```
