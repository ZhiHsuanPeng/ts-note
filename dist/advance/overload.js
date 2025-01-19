"use strict";
// basically to define multiple ways to call a function
function combine(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const value = combine('Max', 'Jeremy');
value.split(' ');
function makeDate(m, d, y) {
    return new Date(y, m, d);
}
function makeDateFromTimestamp(timestamp) {
    return new Date(timestamp);
}
function overloadMakeDate(m, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, m, d);
    }
    return new Date(m);
}
