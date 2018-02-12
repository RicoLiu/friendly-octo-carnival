function dblLinear(n) {
    // your code 
    /** 
     * 运行时间超出，效率太差
     * Process was terminated. It took longer than 12000ms to complete
     * 
     * Process exited prematurely with a SIGKILL signal.
     * 
    */
    let u = [1];
    let s = new Set([1]);
    for (let i = 0; i < n; i++) {
      let a = 2 * u[i] + 1;
      let b = 3 * u[i] + 1;
      s.add(a);
      s.add(b);
      u = [...s].sort((a, b) => {return a - b});
    }
    return u[n];

    /** 
     * 高效率算法
     * 
     *
     * */
    let ai = 0,
        bi = 0,
        eq = 0;
    let sequence = [1];
    while (ai + bi < n + eq) {
        let y = 2 * sequence[ai] + 1;
        let z = 3 * sequence[bi] + 1;
        if (y < z) {
            sequence.push(y);
            ai++;
        } else if (y > z) {
            sequence.push(z);
            bi++;
        } else {
            sequence.push(y);
            ai++;
            bi++;
            eq++;
        }
    }
    return sequence.pop();
}