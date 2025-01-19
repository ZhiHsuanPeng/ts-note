"use strict";
const search = (arr, target) => {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let middle = Math.floor((l + r) / 2);
        if (arr[middle] === target) {
            return middle;
        }
        else if (arr[middle] > target) {
            r = middle - 1;
        }
        else {
            l = middle + 1;
        }
    }
    return -1;
};
const maxRepeteatingSubString = (str) => {
    const c = new Set();
    let l = 0;
    let maxLen = 0;
    for (let r = 0; r < str.length; r++) {
        let cur = str[r];
        while (c.has(cur)) {
            let deleted = str[l];
            c.delete(deleted);
            l++;
        }
        c.add(cur);
        maxLen = Math.max((r - l + 1), maxLen);
    }
    return maxLen;
};
