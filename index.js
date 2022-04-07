// code your solution here
function superbowlWin(arr) {
    const obj = arr.find(element => element.result === "W");
    if (!obj) {
        return undefined;
    } else {
        return obj.year;
    }
}
