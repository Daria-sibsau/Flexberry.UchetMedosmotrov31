import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерДок: DS.attr('number'),
  медУчреждение: DS.belongsTo('i-i-s-uchet-medosmotrov3-мед-учреждение', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-uchet-medosmotrov3-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-uchet-medosmotrov3-сотрудники', { inverse: null, async: false }),
  вреднФактПроиз: DS.hasMany('i-i-s-uchet-medosmotrov3-вредн-факт-произ', { inverse: 'индНапрМедосм', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-инд-напр-медосм.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДок: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-инд-напр-медосм.validations.номерДок.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  медУчреждение: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-инд-напр-медосм.validations.медУчреждение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-инд-напр-медосм.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-инд-напр-медосм.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  вреднФактПроиз: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-инд-напр-медосм.validations.вреднФактПроиз.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИндНапрМедосмE', 'i-i-s-uchet-medosmotrov3-инд-напр-медосм', {
    номерДок: attr('Номер документа', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });

  modelClass.defineProjection('ИндНапрМедосмL', 'i-i-s-uchet-medosmotrov3-инд-напр-медосм', {
    номерДок: attr('Номер док', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
