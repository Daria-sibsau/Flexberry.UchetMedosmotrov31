import {
  defineNamespace,
  defineProjections,
  Model as СписокНаМедосмMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov3-список-на-медосм';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СписокНаМедосмMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
