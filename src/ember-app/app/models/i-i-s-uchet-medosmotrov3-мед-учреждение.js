import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as МедУчреждениеMixin
} from '../mixins/regenerated/models/i-i-s-uchet-medosmotrov3-мед-учреждение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МедУчреждениеMixin, Validations, {
});

export default Model;
