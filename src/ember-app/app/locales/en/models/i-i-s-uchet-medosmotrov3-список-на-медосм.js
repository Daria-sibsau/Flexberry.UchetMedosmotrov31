export default {
  projections: {
    СписокНаМедосмE: {
      номерДок: {
        __caption__: 'Номер документа'
      },
      дата: {
        __caption__: 'Дата'
      },
      контингентСотр: {
        __caption__: 'Контингент сотрудников',
        подразделения: {
          __caption__: 'Подразделения',
          наименование: {
            __caption__: 'Подразделение'
          }
        },
        мужчины: {
          __caption__: 'Мужчины'
        },
        женщины: {
          __caption__: 'Женщины'
        },
        до21Года: {
          __caption__: 'До21 года'
        },
        всего: {
          __caption__: 'Всего'
        },
        классВредФакт: {
          __caption__: 'Фактор производства',
          наименование: {
            __caption__: 'Фактор производства'
          }
        },
        приказМЗР: {
          __caption__: 'Приказ МЗР',
          номерПункта: {
            __caption__: 'Номер пункта'
          }
        },
        периодичность: {
          __caption__: 'Периодичность'
        }
      }
    },
    СписокНаМедосмL: {
      номерДок: {
        __caption__: 'Номер документа'
      },
      дата: {
        __caption__: 'Дата'
      }
    }
  },
  validations: {
    дата: {
      __caption__: 'Дата'
    },
    номерДок: {
      __caption__: 'Номер документа'
    },
    контингентСотр: {
      __caption__: 'Контингент сотрудников'
    }
  }
};
