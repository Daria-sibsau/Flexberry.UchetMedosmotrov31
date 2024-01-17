import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  всего: DS.attr('number'),
  до21Года: DS.attr('number'),
  женщины: DS.attr('number'),
  мужчины: DS.attr('number'),
  периодичность: DS.attr('i-i-s-uchet-medosmotrov3-период'),
  классВредФакт: DS.belongsTo('i-i-s-uchet-medosmotrov3-класс-вред-факт', { inverse: null, async: false }),
  подразделения: DS.belongsTo('i-i-s-uchet-medosmotrov3-подразделения', { inverse: null, async: false }),
  приказМЗР: DS.belongsTo('i-i-s-uchet-medosmotrov3-приказ-м-з-р', { inverse: null, async: false }),
  списокНаМедосм: DS.belongsTo('i-i-s-uchet-medosmotrov3-список-на-медосм', { inverse: 'контингентСотр', async: false })
});

export let ValidationRules = {
  всего: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.всего.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  до21Года: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.до21Года.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  женщины: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.женщины.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  мужчины: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.мужчины.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  периодичность: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.периодичность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классВредФакт: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.классВредФакт.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделения: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.подразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  приказМЗР: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.приказМЗР.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокНаМедосм: {
    descriptionKey: 'models.i-i-s-uchet-medosmotrov3-контингент-сотр.validations.списокНаМедосм.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтингентСотрE', 'i-i-s-uchet-medosmotrov3-контингент-сотр', {
    подразделения: belongsTo('i-i-s-uchet-medosmotrov3-подразделения', 'Подразделения', {
      наименование: attr('Подразделение', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' }),
    мужчины: attr('Мужчины', { index: 2 }),
    женщины: attr('Женщины', { index: 3 }),
    до21Года: attr('До21 года', { index: 4 }),
    всего: attr('Всего', { index: 5 }),
    классВредФакт: belongsTo('i-i-s-uchet-medosmotrov3-класс-вред-факт', 'Фактор производства', {
      наименование: attr('Фактор производства', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'наименование' }),
    приказМЗР: belongsTo('i-i-s-uchet-medosmotrov3-приказ-м-з-р', 'Приказ МЗР', {
      номерПункта: attr('Номер пункта', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'номерПункта' }),
    периодичность: attr('Периодичность', { index: 10 })
  });
};
