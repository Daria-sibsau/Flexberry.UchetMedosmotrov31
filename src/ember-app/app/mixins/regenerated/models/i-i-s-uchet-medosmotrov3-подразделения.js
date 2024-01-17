import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-подразделения.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПодразделенияE', 'i-i-s-uchet-medosmotrov3-подразделения', {
    наименование: attr('Наименование', { index: 0 })
  });

  modelClass.defineProjection('ПодразделенияL', 'i-i-s-uchet-medosmotrov3-подразделения', {
    наименование: attr('Наименование', { index: 0 })
  });
};
