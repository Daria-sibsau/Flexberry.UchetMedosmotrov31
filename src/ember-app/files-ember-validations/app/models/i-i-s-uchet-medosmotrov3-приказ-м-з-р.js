import {
  defineNamespace,
  defineProjections,
  Model as ПриказМЗРMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov3-приказ-м-з-р';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриказМЗРMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
