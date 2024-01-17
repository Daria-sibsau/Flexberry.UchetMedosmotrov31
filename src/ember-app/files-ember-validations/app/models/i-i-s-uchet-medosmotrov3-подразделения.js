import {
  defineNamespace,
  defineProjections,
  Model as ПодразделенияMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov3-подразделения';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПодразделенияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
