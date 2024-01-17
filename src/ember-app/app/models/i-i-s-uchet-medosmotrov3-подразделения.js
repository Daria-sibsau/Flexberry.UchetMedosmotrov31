import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПодразделенияMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov3-подразделения';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПодразделенияMixin, Validations, {
});

defineProjections(Model);

export default Model;
