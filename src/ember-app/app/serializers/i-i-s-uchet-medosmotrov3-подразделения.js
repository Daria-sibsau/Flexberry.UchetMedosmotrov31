import { Serializer as ПодразделенияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uchet-medosmotrov3-подразделения';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПодразделенияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
