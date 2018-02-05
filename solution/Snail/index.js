function snail (array) {
    let m = array.length;
    let result = [];
    let dir = 'right'; // 初始先向右边
    let col_min = 0;
    let col_max = m - 1; // 列的最大最小
    let row_min = 0;
    let row_max = m - 1; // 行的最大最小

    let i = col_min;
    let j = row_min;
    let done = false;
    // handle '[[]]' 
    if (array.length === 1 && array[0].length === 0) {
        return new Array();
    }

    while (!done) {
        switch (dir) { // 顺时针方向
            case 'right': 
                i = col_min;
                j = row_min;
                for (j; j <= row_max; j++) {
                    result.push(array[i][j]);
                }
                dir = 'down';
                col_min++;
                break;
            case 'down':
                i = col_min;
                j = row_max;
                for (i; i <= col_max; i++) {
                    result.push(array[i][j]);
                }
                dir = 'left';
                row_max--;
                break;
            case 'left':
                i = col_max;
                j = row_max;                
                for (j; j >= row_min; j--) {
                    result.push(array[i][j]);
                }
                dir = 'up';
                col_max--;
                break;
            case 'up':
                i = col_max;
                j = row_min;
                for (i; i >= col_min; i--) {
                    result.push(array[i][j]);
                }
                dir = 'right';
                row_min++;
                break
        }
        if (col_min > col_max || row_min > row_max) {
            done = true;
        }
    }
    return result;
}