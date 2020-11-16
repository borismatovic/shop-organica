(function dumpStorage() {
    let arr = [];
    Object.keys(localStorage).forEach((key) =>
        arr.push(JSON.parse(localStorage.getItem(key)))
    )
    let str = [];
    arr.forEach((element, idx) => {
        if (idx % 2 === 1) { str += `${element.name} (${element.quantity})\n` }
        else { str += `${element.name} (${element.quantity}), ` }
    })
    document.getElementById('notes').value = str;
    localStorage.clear();
})();