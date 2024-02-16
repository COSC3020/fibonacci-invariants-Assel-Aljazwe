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
My code's invariant is that, at the start of each recursive call to fib(n), the function is designed to return an array that perfectly contains the Fibonacci sequence up to and including the nth element. Thus ensuring that the 'state of the world' at each step of the recursion accurately builds upon the previous steps, which maintains the integrity of the sequence throughout. <br />

The invariant is maintained throughout the recursion process due to the following:<br />
**Base Cases**: The invariant holds true for the base cases 'fib(0)' and 'fib(1)', which return '[0]' and '[0, 1]' respectively (the beginning of the Fibonacci sequence).<br />
**Recursive Cases**: For n > 1, the function fib(n) begins to depend on the result of fib(n - 1), that is assuming fib(n - 1) accurately provides an array of Fibonacci numbers up to that point. Fib(n) extends this array with the nth Fibonacci number by summing the two most recent elements in the fib(n - 1) array.<br />
**Invariant Preservation**: Each time fib(n) is called upon, it extends the already correct sequence we have from fib(n-1). Doing this preserves the invariant and ensures that before the function starts its task, we know that the sequence up to fib(n-1) is accurate. So once fib(n) adds the nth fibonacci number, the updated sequence maintains accuracy and correctness.<br />

For instance: say we call fib(3). By our invariant, fib(2) would give us '[0, 1, 1]', which is the correct sequence up to that point. Fib(3) then adds the third fibonacci number by summing the last two numbers (1 + 1), giving us [0, 1, 1, 2]. This shows that before fib(3) starts, the sequence is accurate up to fib(2), and after adding the third number it stays correct for fib(3) and the process repeats.




