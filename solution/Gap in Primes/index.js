/**
 * 所有测试用例通过，运行时间超出。。。
 * 待优化
 * @param {integer} g 
 * @param {integer} m 
 * @param {integer} n 
 * @returns 
 */
function gap(g, m, n) {
    let arr = [];
    //将所有偶数剔除，不添加至数组中
    if (m % 2 === 0) {
        m = m + 1;
        while (m <= n) {
            arr.push(m);
            m += 2;
        }
    } else {
        while (m <= n) {
            arr.push(m);
            m += 2;
        }
    }
    //过滤所有素数
    arr = arr.filter((element, index, array) => {
        let start = 2;
        while (start <= Math.sqrt(element)) {
            if (element % start++ < 1) {
                return false;
            }
        }
        return element > 1;
    });
    //找到符合条件的组合
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + g === arr[i + 1]) {
            return [arr[i], arr[i + 1]];
        }
    }
    return null;
}



