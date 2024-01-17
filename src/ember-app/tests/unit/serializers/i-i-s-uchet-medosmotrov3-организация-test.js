import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-uchet-medosmotrov3-организация', 'Unit | Serializer | i-i-s-uchet-medosmotrov3-организация', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-uchet-medosmotrov3-организация',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-uchet-medosmotrov3-период',
    'transform:i-i-s-uchet-medosmotrov3-пол-сотрудника',

    'model:i-i-s-uchet-medosmotrov3-вредн-факт-произ',
    'model:i-i-s-uchet-medosmotrov3-должности',
    'model:i-i-s-uchet-medosmotrov3-инд-напр-медосм',
    'model:i-i-s-uchet-medosmotrov3-класс-вред-факт',
    'model:i-i-s-uchet-medosmotrov3-контингент-сотр',
    'model:i-i-s-uchet-medosmotrov3-мед-учреждение',
    'model:i-i-s-uchet-medosmotrov3-организация',
    'model:i-i-s-uchet-medosmotrov3-подразделения',
    'model:i-i-s-uchet-medosmotrov3-приказ-м-з-р',
    'model:i-i-s-uchet-medosmotrov3-сотрудники',
    'model:i-i-s-uchet-medosmotrov3-список-на-медосм',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
