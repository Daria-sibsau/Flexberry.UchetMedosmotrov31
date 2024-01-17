import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  иНН: DS.attr('number'),
  кПП: DS.attr('number'),
  наименование: DS.attr('string'),
  оГРН: DS.attr('number'),
  почта: DS.attr('string'),
  телефон: DS.attr('number'),
  юрАдрес: DS.attr('string')
});

export let ValidationRules = {
  иНН: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-организация.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кПП: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-организация.validations.кПП.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-организация.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-организация.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  почта: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-организация.validations.почта.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-организация.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  юрАдрес: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-организация.validations.юрАдрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОрганизацияE', 'i-i-s-uchet-medosmotrov3-организация', {
    наименование: attr('Наименование', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    кПП: attr('КПП', { index: 2 }),
    оГРН: attr('ОГРН', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    почта: attr('Почта', { index: 5 }),
    юрАдрес: attr('Юр адрес', { index: 6 })
  });

  modelClass.defineProjection('ОрганизацияL', 'i-i-s-uchet-medosmotrov3-организация', {
    наименование: attr('Наименование', { index: 0 }),
    иНН: attr('ИНН', { index: 1 }),
    кПП: attr('КПП', { index: 2 }),
    оГРН: attr('ОГРН', { index: 3 }),
    телефон: attr('Телефон', { index: 4 }),
    почта: attr('Почта', { index: 5 }),
    юрАдрес: attr('Юр адрес', { index: 6 })
  });
};
