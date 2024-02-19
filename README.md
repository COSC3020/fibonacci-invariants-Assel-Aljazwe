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
In the 'fib(n)' function, the invariant (the core principle maintained throughout the function's execution) is the accurate computation and then extension of the Fibonacci sequence up to the nth term, returned as an array. In specific terms, this is achieved starting with the base cases: for instance, calling 'fib(0)' returns '[0]', and calling 'fib(1)' returns '[0,1]', thus correctly initiating the sequence, ensuring the sequence is accurately setup for the upcoming terms. For any 'n > 1', the function begins to rely on the correctness of the sequence before it 'fib(n-1)', then extending the sequence by adding a new term that is the sum of the previous two terms from the 'fib(n-1)' sequence. **For example:** Consider calling 'fib(4)' we would begin with the base cases: fib(0) is [0], fib(1) builds upon this resulting in [0, 1]. For 'n > 1', fib(2) extends 'fib(1) by adding 1 (the sum of the previous two elements 0 + 1), leading to [0, 1, 1]. Then fib(3) further extends fib(2) by adding another term (the sum of the previous two 1 + 1) resulting in [0, 1, 1, 2]. Finally fib(4) continues the pattern by adding 3 (the sum of the previous two from fib(3), 1 + 2), resulting in [0, 1, 1, 2, 3]. This recursive approach ensures that at each step, the function is building upon a previously verified sequence, thus preserving the accuracy of the sequence throughout the computation of the fibonacci sequence. The use of zero-based indexing means that the sequence begins at index 0, making each array length 'n+1' to include the nth term. So for any given 'n', the 'fib(n)' function produces an array representing the Fibonacci sequence from the 0th to the nth term, ensuring the array has 'n+1' elements. This mechanism guarantees that the function reliably generates the sequence, maintaining accuracy at every level of recursion.


The invariant is maintained throughout the recursion process due to the following:<br />
**Base Cases**: The invariant holds true for the base cases 'fib(0)' and 'fib(1)', which return '[0]' and '[0, 1]' respectively (the beginning of the Fibonacci sequence). This follows zero-based indexing because the sequence begins at index 0.<br />
**Recursive Cases**: For n > 1, the function fib(n) begins to depend on the result of fib(n - 1), that is assuming fib(n - 1) accurately provides an array of Fibonacci numbers up to that point. Fib(n) extends this array with the nth Fibonacci number by summing the two most recent elements in the fib(n - 1) array. After including the nth element the array length becomes n + 1.<br />
**Invariant Preservation**: Each time fib(n) is called upon, it extends the already correct sequence we have from fib(n-1). Doing this preserves the invariant and ensures that before the function starts its task, we know that the sequence up to fib(n-1) is accurate. So once fib(n) adds the nth fibonacci number, the updated sequence maintains accuracy and correctness.<br />

For instance: say we call fib(3). By our invariant, fib(2) would give us '[0, 1, 1]', which is the correct sequence up to that point, the length of the array of fib(2) would be n + 1 which is 3 elements, this follows zero-based indexing. Fib(3) then adds the third fibonacci number by summing the last two numbers (1 + 1) in fib(n - 1), giving us [0, 1, 1, 2]. This shows that before fib(3) starts, the sequence is accurate up to fib(2), and after adding the third number it stays correct for fib(3) and the process repeats. <br />
Due to zero-based indexing of the array, calling fib(n) would include the nth element in the array, resulting in an array of n+1: <br />
Example: Calling fib(6) <br />
The function would produce an array containing the fibonacci sequence up to the 6th element, which is the 7th number in the sequence because we start counting from 0. <br /> 
Here's the sequence for fib(6): [0, 1, 1, 2, 3, 5, 8] , the array initiates with the 0th element (0) and ends with the 6th element (8). This results in an array length of 6+1 = 7 elements. So basically, calling fib(n) produces an array with n+1 elements, effectively representing the sequence from the start to the nth element due to zero based indexing.




