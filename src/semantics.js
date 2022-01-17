/* Copyright (c) 2022 Julien Gonzalez <hello@spinjs.com> */

/*
Transformed into an IIFE at build time. (See build.sh)
Ignored parameters on purpose in order to match expected function arity.
*/
Semantics => Semantics.addOperation('eval', {
  Entries(entries) {
    return entries.eval();
  },

  Entry(entry) {
    return entry.eval();
  },

  String(ignored_1, ignored_2, ignored_3, ignored_4) {
    return {entry: "string"};
  },

  Preamble(ignored_1, ignored_2, ignored_3, ignored_4) {
    return {entry: "preamble"};
  },

  Item(itemType, ignored_1, ignored_2) {
    return {entry: 'item', type: itemType.eval()};
  },

  ItemType(ignored_1, typeLetters) {
    return typeLetters.eval().join('').toLowerCase();
  },

  _iter(...xs) {
    return xs.map(x => x.eval());
  },

  _terminal() {
    return this.sourceString;
  }
})
