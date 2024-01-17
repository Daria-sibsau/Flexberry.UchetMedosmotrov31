import {
  defineNamespace,
  defineProjections,
  Model as КлассВредФактMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov3-класс-вред-факт';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлассВредФактMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
