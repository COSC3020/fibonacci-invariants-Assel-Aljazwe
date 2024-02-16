function fib(n) {
    // Base Cases:
    if (n === 0) 
        return [0];
    if (n === 1) 
        return [0, 1];

    // Recursive case
    let sequence = fib(n - 1);
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}
