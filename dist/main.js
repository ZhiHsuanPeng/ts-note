"use strict";
let postId;
const isPerson = (object) => {
    if (object !== null && typeof object === 'object') {
        const obj = object;
        return ('name' in obj &&
            'age' in obj);
    }
    return false;
};
const obj = { name: "Alice" };
const castedObj = obj;
let pictureId;
function isString(arg) {
    if (arg !== null && typeof arg === 'string') {
        return true;
    }
    return false;
}
if (isString(pictureId)) {
    pictureId.toUpperCase();
}
let users = ['Jeremy', 'Ellie', 'Andy', 'Kang'];
let modifiedUsers = users.map((users, index) => {
    return users + index;
});
