const path =require('path');
const express=require('express');

console.log('Output Below');
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname,'..'));
console.log(path.join(__dirname,'../..'));
console.log(path.join(__dirname,'../paths'));