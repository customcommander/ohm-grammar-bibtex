/* Copyright (c) 2021 Julien Gonzalez <hello@spinjs.com> */

/*
Transformed into an IIFE at build time. (See build.sh)
Ignored parameters on purpose in order to match expected function arity.
*/
Semantics => Semantics.addOperation('eval', {
  Entries(entries) {
    return entries.eval();
  },

  Entry(entryType, ignored_1, ignored_2) {
    return {type: entryType.eval()};
  },

  EntryType(ignored_1, typeLetters) {
    return typeLetters.eval().join('').toLowerCase();
  },

  _iter(...xs) {
    return xs.map(x => x.eval());
  },

  _terminal() {
    return this.sourceString;
  }
})
