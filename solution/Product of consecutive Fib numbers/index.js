function productFib(prod) {
    for (var n = 0;; n++) {
        if ((Fibonacci(n) * Fibonacci(n + 1) > prod) && (Fibonacci(n - 1) * Fibonacci(n) < prod)) {
            return [Fibonacci(n), Fibonacci(n + 1), false];
        } else if (Fibonacci(n) * Fibonacci(n + 1) === prod) {
            return [Fibonacci(n), Fibonacci(n + 1), true];
        }
    }
}

function Fibonacci(n) {
    var i, a = 1,
        b = 1,
        c = 1;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    for (var i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}