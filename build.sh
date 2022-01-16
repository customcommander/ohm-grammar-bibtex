#!/bin/sh
cat <<EOS >dist/index.js
/**
 * @license MIT
 * @copyright (c) 2021 Julien Gonzalez <hello@spinjs.com>
 */

const ohm = require('ohm-js');
const g = ohm.grammar(String.raw\`$(cat src/grammar.ohm)\`);
const s = g.createSemantics();
($(cat src/semantics.js))(s);
module.exports = {grammar: g, semantics: s};

EOS
