import {
  defineNamespace,
  Model as МедУчреждениеMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov3-мед-учреждение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МедУчреждениеMixin, {
});

defineNamespace(Model);

export default Model;
