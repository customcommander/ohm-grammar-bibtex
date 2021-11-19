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

verify('Supports multiple entries',
  `
  @misc{}

  @Book {}

  @CHAPTER {

  }
  `,
  [ {type: 'misc'}
  , {type: 'book'}
  , {type: 'chapter'} ]
);
