const head = require('./head');
const tail = require('./tail');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const eqArrays = require('.eqArrays');
const eqObjects = require('./eqObjects');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
    head:   head,
    tail:   tail,
    middle: middle,
    assertArraysEqual; assertArraysEqual,
    assertEqual: assertEqual,
    countLetters: countLetters,
    eqArrays: eqArrays,
    eqObjects: eqObjects,
    map: map,
    takeUntil: takeUntil,
    without: without
  };