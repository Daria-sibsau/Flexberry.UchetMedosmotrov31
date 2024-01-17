import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-uchet-medosmotrov3-список-на-медосм-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-uchet-medosmotrov3-контингент-сотр+подразделения':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'подразделения',
            projection: 'ПодразделенияL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-uchet-medosmotrov3-контингент-сотр+классВредФакт':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'классВредФакт',
            projection: 'КлассВредФактL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-uchet-medosmotrov3-контингент-сотр+приказМЗР':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номерПункта',
            required: true,
            relationName: 'приказМЗР',
            projection: 'ПриказМЗРL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
