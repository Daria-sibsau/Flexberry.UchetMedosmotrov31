import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлассВредФактMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov3-класс-вред-факт';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлассВредФактMixin, Validations, {
});

defineProjections(Model);

export default Model;
