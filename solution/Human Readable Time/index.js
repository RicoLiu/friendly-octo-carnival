function humanReadable(seconds) {
    var arr = [];
    arr[2] = seconds % 60;
    arr[1] = Math.floor(seconds / 60) > 59 ? Math.floor(seconds / 60) % 60 : Math.floor(seconds / 60);
    arr[0] = Math.floor(seconds / 3600);

    return arr.map(_ => {
        return _ < 10 ? '0' + _ : _ ;
    }).join('');
}