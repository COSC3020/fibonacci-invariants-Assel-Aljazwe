[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

## Good Invariant Reasoning:
At the beginning of each recursive call to 'fib(n)', where n >= 0, the function is set-up to return an array that up to the (n-1)th term, accurately represents the Fibonacci sequence according to Fibonacci's classical definition. The sequence is mainly characterized by two properties/concepts: Sequence Integrity, and Sequence Extensibility.

**Sequence Integrity**: The array, up to the last recursive call, maintains the integrity of the Fibonacci sequence. Meaning that each term in the array is the sum of the two preceding terms, with the sequence starting from '[0, 1]' for the first two terms. This property ensures that the Fibonacci sequence is correctly represented up to the current point of recursion. This principle ensures that the sequence we have at any point in our recursion accurately follows the Fibonacci rule:
* How It Works: From the get-go with '[0, 1]', every new number in the array comes from adding the two numbers before it. This keeps our sequence true to the Fibonacci sequence at every step.
* Why It Matters: It's all about keeping the sequence historically accurate. As the sequence is built, ensuring each step is correctly calculated means we're always in line with the true Fibonacci sequence.

**Sequence Extensibility**: At the start of each recursive call, the function is in a state where it can correctly extend the sequence by one more term (the nth term), by adding the last two terms of the current sequence. This extensibility is crucial for the recursive logic to apply the Fibonacci rule (sum of the two preceding numbers) to grow the sequence accurately.
* Why it Matters: Guarantees that no matter how far the sequence is exteneded, it'll remain logically consistent, following the established pattern without fail.
  
**Reasoning**:
* Base of Recursion: The base cases (fib(0) and fib(1)) establish the initial sequence [0] and [0, 1], respectively. These cases directly support the sequence integrity and provide the foundation for extensibility. Thus ensuring the sequence begins correctly and follows a predictable growth path.

* Recursive Progression: For any n > 1, the recursive call relies on the state maintained by the previous call to fib(n-1). The sequence up to fib(n-1) holds true to the Fibonacci sequence's properties, allowing the current call to extend the sequence by accurately calculating the next term. This continuation preserves the sequence's integrity and ensures its extensibility is applicable at every stage.

* Invariant Maintenance: By ensuring that each recursive call to fib(n) can only proceed if the sequence up to fib(n-1) is a valid representation of the Fibonacci sequence and capable of being correctly extended, the invariant describes the "state of the world" in a manner that guarantees correctness and progression towards the algorithm's goal.




