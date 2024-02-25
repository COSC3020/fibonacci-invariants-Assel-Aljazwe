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

### My Code's Invariant: 

At the beginning of each recursive call to $fib(n)$, the function has generated an array that contains a sequence of Fibonacci numbers from $fib(0)$ up to $fib(n-1)$, and this array is exactly $n$ elements long for $n ≥ 0$. This sequence ensures that the last two elements of the array, if $n > 1$, correctly sum up to the next Fibonacci number, maintaining the Fibonacci property where each number is the sum of the two preceding numbers.

### Reasoning Behind the Invariant:

**Base Case Alignment**: 
For fib(0), the function returns [0], an array of length 1, matching the invariant by providing the 0th Fibonacci number.

For fib(1), the function returns [0, 1], an array of length 2, which contains the first two Fibonacci numbers, adhering to the invariant.

The function's initiation with $fib(0)$ and $fib(1)$ perfectly sets the Fibonacci sequence's starting point, aligning with the foundational definitions of Fibonacci's sequence. This ensures the sequence begins accurately, creating a reliable basis for the invariant's validity right from the start.

**Recursive Case Structure**: In the recursive progression to $fib(n-1)$, we operate under the idea that we already have a correctly constructed Fibonacci sequence up to the last term. By adding a new element based on the sum of the last two terms, the function accurately extends the sequence. Thus demonstrating the sequence's principles of integrity and extensibility, ensuring each step adheres to the Fibonacci principle and the sequence remains accurate and extendable.

**Algorithmic Progression**: The invariant shows the algorithm's consistent and logical development of the Fibonacci sequence with each recursive call. It emphasizes how the function carefully maintains the sequence's structural and numerical properties, thus illustrating a predictable and reliable building process similar to the methodical advancement we've seen in sorting algorithms. This systematic approach ensures the sequence's accuracy and the algorithm's reliability throughout its execution.







