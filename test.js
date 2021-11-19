const test = require('tape');
const {grammar, semantics} = require('.');

const verify = (outline, input, output) => {
  test(outline, t => {
    const res = grammar.match(input);
    t.true(res.succeeded(), 'Parser');
    t.same(semantics(res).eval(), output, 'Semantics');
    t.end();
  });
};

verify('Supports multiple entries'
  , `@misc{}
     @Book {}
     @CHAPTER {
     }`
  , [ {entry: 'item', type:    'misc'}
    , {entry: 'item', type:    'book'}
    , {entry: 'item', type: 'chapter'} ]
);

verify('Supports @string'
  , `@string {}
     @String{}
     @STRING{
     }
     @STRING {
     }`
  , [ {entry: 'string'}
    , {entry: 'string'}
    , {entry: 'string'}
    , {entry: 'string'} ]
);

verify('Supports @preamble'
  , `@preamble {}
     @Preamble{}
     @PREAMBLE{
     }
     @PREAMBLE {
     }`
  , [ {entry: 'preamble'}
    , {entry: 'preamble'}
    , {entry: 'preamble'}
    , {entry: 'preamble'} ]
);
