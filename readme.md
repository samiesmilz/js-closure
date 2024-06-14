# Closure in JavaScript

This project contains solutions to three JavaScript problems that demonstrate the use of closures. Each problem has its own function with specific requirements and behaviors.

## Problems

### 1. Guessing Game

The `guessingGame` function creates a number guessing game where players try to guess a random number between 0 and 99.

#### Usage:

```javascript
let game = guessingGame();
game(50); // "50 is too low!"
game(90); // "90 is too high!"
game(70); // "You win! You found 70 in 3 guesses."
game(70); // "The game is over, you already won!"
```

**Concepts:**

- Closures
- State management
- Random number generation

**Why it matters:**

This exercise showcases how closures can be used to create private state (the random number) that persists between function calls. It demonstrates how to create a function with "memory" without using global variables, which is crucial for writing modular and encapsulated code.

### 2. Bank Account

The `createAccount` function simulates a bank account with PIN protection and various transaction methods.

#### Usage:

```javascript
let account = createAccount("1234", 100);
account.checkBalance("oops"); // "Invalid PIN."
account.deposit("1234", 250); // "Successfully deposited $250. Current balance: $350."
account.withdraw("1234", 300); // "Successfully withdrew $300. Current balance: $50."
account.withdraw("1234", 10); // "Withdrawal amount exceeds account balance. Transaction cancelled."
account.changePin("1234", "5678"); // "PIN successfully changed!"
```

**Concepts:**

- Closures
- Object methods
- Data privacy and encapsulation
- Input validation

**Why it matters:**

This problem illustrates how closures can be used to create private variables (balance and PIN) that are inaccessible from outside the function, mimicking private class fields. It demonstrates a practical application of closures in creating secure and encapsulated objects, which is essential in scenarios requiring data privacy and security.

### 3. Curried Add

The curriedAdd function demonstrates currying in JavaScript, allowing for flexible addition of numbers.

#### Usage:

```javascript
let firstAdder = curriedAdd();
let secondAdder = curriedAdd();
let thirdAdder = curriedAdd();

firstAdder(); // 0
secondAdder(1)(2)(); // 3
thirdAdder(2)(8)(5)(1)(); // 16
```

**Concepts:**

- Currying
- Closures
- Function composition

**Why it matters:**

Currying is an advanced functional programming technique that transforms a function with multiple arguments into a sequence of functions, each with a single argument. This exercise demonstrates how currying can be implemented using closures in JavaScript. Understanding currying and function composition is valuable for creating more flexible and reusable code, especially in functional programming paradigms.

## General Importance of Closures

Closures are a fundamental concept in JavaScript that allows functions to access variables from their outer (enclosing) lexical scope even after the outer function has returned. This enables:

1. **Data Privacy**: Creating private variables and methods, similar to other languages' private class fields.
2. **State Management**: Maintaining state between function calls without relying on global variables.
3. **Functional Programming**: Implementing techniques like currying and partial application.
4. **Module Pattern**: Creating modules with public and private members.
5. **Callback and Event Handling**: Preserving access to specific scopes in asynchronous operations.

## Testing

Each problem comes with a set of tests to verify the correct implementation. To run the tests, use a JavaScript testing framework compatible with the provided test files.
Implementation

The solutions to these problems showcase the use of closures in JavaScript to maintain state between function calls and create private variables.

Understanding and mastering closures is crucial for writing efficient, modular, and maintainable JavaScript code. These exercises provide practical examples of how closures can be applied to solve real-world programming challenges.

For detailed implementations, please refer to the respective JavaScript files in this project.

### By: Samuel Abinsinguza
