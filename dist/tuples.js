"use strict";
// tuples, basically array with more strict rules 
// it is fixed size, and type-specific 
// this tells ts that role is an array with exactly two elements in it 
// and the first would be a number, the second would be a string
let role = [1, 'string'];
// push is an exception
role.push('Jeremy');
