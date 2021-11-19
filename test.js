const test = require('tape');
const {grammar, semantics} = require('.');

const verify = (outline) => ({
  parse(bibtex) {
    return {
      expect(output) {
        test(outline, t => {
          const res = grammar.match(bibtex);
          t.true(res.succeeded(), 'Parser');
          t.same(semantics(res).eval(), output, 'Semantics');
          t.end();
        });
      }
    }
  }
});

verify('Supports multiple entries')
  .parse(`
    @misc{}
    @Book {}
    @CHAPTER {
    }
  `)
  .expect([
      {entry: 'item', type:    'misc'}
    , {entry: 'item', type:    'book'}
    , {entry: 'item', type: 'chapter'}
  ]);

verify('Supports @string')
  .parse(`
    @string {}
    @String{}
    @STRING{
    }
    @STRING {
    }
  `)
  .expect([
      {entry: 'string'}
    , {entry: 'string'}
    , {entry: 'string'}
    , {entry: 'string'}
  ]);


verify('Supports @preamble')
  .parse(`
    @preamble {}
    @Preamble{}
    @PREAMBLE{
    }
    @PREAMBLE {
    }
  `)
  .expect([
      {entry: 'preamble'}
    , {entry: 'preamble'}
    , {entry: 'preamble'}
    , {entry: 'preamble'}
  ]);
