import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISUchetMedosmotrov3ДолжностиLForm from './forms/i-i-s-uchet-medosmotrov3-должности-l';
import IISUchetMedosmotrov3ИндНапрМедосмLForm from './forms/i-i-s-uchet-medosmotrov3-инд-напр-медосм-l';
import IISUchetMedosmotrov3КлассВредФактLForm from './forms/i-i-s-uchet-medosmotrov3-класс-вред-факт-l';
import IISUchetMedosmotrov3ОрганизацияLForm from './forms/i-i-s-uchet-medosmotrov3-организация-l';
import IISUchetMedosmotrov3ПодразделенияLForm from './forms/i-i-s-uchet-medosmotrov3-подразделения-l';
import IISUchetMedosmotrov3ПриказМЗРLForm from './forms/i-i-s-uchet-medosmotrov3-приказ-м-з-р-l';
import IISUchetMedosmotrov3СотрудникиLForm from './forms/i-i-s-uchet-medosmotrov3-сотрудники-l';
import IISUchetMedosmotrov3СписокНаМедосмLForm from './forms/i-i-s-uchet-medosmotrov3-список-на-медосм-l';
import IISUchetMedosmotrov3ДолжностиEForm from './forms/i-i-s-uchet-medosmotrov3-должности-e';
import IISUchetMedosmotrov3ИндНапрМедосмEForm from './forms/i-i-s-uchet-medosmotrov3-инд-напр-медосм-e';
import IISUchetMedosmotrov3КлассВредФактEForm from './forms/i-i-s-uchet-medosmotrov3-класс-вред-факт-e';
import IISUchetMedosmotrov3ОрганизацияEForm from './forms/i-i-s-uchet-medosmotrov3-организация-e';
import IISUchetMedosmotrov3ПодразделенияEForm from './forms/i-i-s-uchet-medosmotrov3-подразделения-e';
import IISUchetMedosmotrov3ПриказМЗРEForm from './forms/i-i-s-uchet-medosmotrov3-приказ-м-з-р-e';
import IISUchetMedosmotrov3СотрудникиEForm from './forms/i-i-s-uchet-medosmotrov3-сотрудники-e';
import IISUchetMedosmotrov3СписокНаМедосмEForm from './forms/i-i-s-uchet-medosmotrov3-список-на-медосм-e';
import IISUchetMedosmotrov3ВреднФактПроизModel from './models/i-i-s-uchet-medosmotrov3-вредн-факт-произ';
import IISUchetMedosmotrov3ДолжностиModel from './models/i-i-s-uchet-medosmotrov3-должности';
import IISUchetMedosmotrov3ИндНапрМедосмModel from './models/i-i-s-uchet-medosmotrov3-инд-напр-медосм';
import IISUchetMedosmotrov3КлассВредФактModel from './models/i-i-s-uchet-medosmotrov3-класс-вред-факт';
import IISUchetMedosmotrov3КонтингентСотрModel from './models/i-i-s-uchet-medosmotrov3-контингент-сотр';
import IISUchetMedosmotrov3МедУчреждениеModel from './models/i-i-s-uchet-medosmotrov3-мед-учреждение';
import IISUchetMedosmotrov3ОрганизацияModel from './models/i-i-s-uchet-medosmotrov3-организация';
import IISUchetMedosmotrov3ПодразделенияModel from './models/i-i-s-uchet-medosmotrov3-подразделения';
import IISUchetMedosmotrov3ПриказМЗРModel from './models/i-i-s-uchet-medosmotrov3-приказ-м-з-р';
import IISUchetMedosmotrov3СотрудникиModel from './models/i-i-s-uchet-medosmotrov3-сотрудники';
import IISUchetMedosmotrov3СписокНаМедосмModel from './models/i-i-s-uchet-medosmotrov3-список-на-медосм';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-uchet-medosmotrov3-вредн-факт-произ': IISUchetMedosmotrov3ВреднФактПроизModel,
    'i-i-s-uchet-medosmotrov3-должности': IISUchetMedosmotrov3ДолжностиModel,
    'i-i-s-uchet-medosmotrov3-инд-напр-медосм': IISUchetMedosmotrov3ИндНапрМедосмModel,
    'i-i-s-uchet-medosmotrov3-класс-вред-факт': IISUchetMedosmotrov3КлассВредФактModel,
    'i-i-s-uchet-medosmotrov3-контингент-сотр': IISUchetMedosmotrov3КонтингентСотрModel,
    'i-i-s-uchet-medosmotrov3-мед-учреждение': IISUchetMedosmotrov3МедУчреждениеModel,
    'i-i-s-uchet-medosmotrov3-организация': IISUchetMedosmotrov3ОрганизацияModel,
    'i-i-s-uchet-medosmotrov3-подразделения': IISUchetMedosmotrov3ПодразделенияModel,
    'i-i-s-uchet-medosmotrov3-приказ-м-з-р': IISUchetMedosmotrov3ПриказМЗРModel,
    'i-i-s-uchet-medosmotrov3-сотрудники': IISUchetMedosmotrov3СотрудникиModel,
    'i-i-s-uchet-medosmotrov3-список-на-медосм': IISUchetMedosmotrov3СписокНаМедосмModel
  },

  'application-name': 'Uchet medosmotrov3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Uchet medosmotrov3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Uchet medosmotrov3',
          title: 'Uchet medosmotrov3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'формирование-списков-для-приказа': {
          caption: 'Формирование списков для приказа',
          title: 'Формирование списков для приказа',
          'i-i-s-uchet-medosmotrov3-список-на-медосм-l': {
            caption: 'Список на медосмотр',
            title: ''
          }
        },
        'индивидуальные-направления': {
          caption: 'Индивидуальные направления',
          title: 'Индивидуальные направления',
          'i-i-s-uchet-medosmotrov3-инд-напр-медосм-l': {
            caption: 'Индивидуальное направление',
            title: ''
          }
        },
        'справочная-информация': {
          caption: 'Справочная информация',
          title: 'Справочная информация',
          'i-i-s-uchet-medosmotrov3-приказ-м-з-р-l': {
            caption: 'Приказ МЗР',
            title: ''
          },
          'i-i-s-uchet-medosmotrov3-класс-вред-факт-l': {
            caption: 'Классификатор вредных факторов',
            title: ''
          }
        },
        'организация-и-штат': {
          caption: 'Организация и штат',
          title: 'Организация и штат',
          'i-i-s-uchet-medosmotrov3-подразделения-l': {
            caption: 'Подразделения',
            title: ''
          },
          'i-i-s-uchet-medosmotrov3-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-uchet-medosmotrov3-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-uchet-medosmotrov3-должности-l': {
            caption: 'Должности',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-uchet-medosmotrov3-должности-l': IISUchetMedosmotrov3ДолжностиLForm,
    'i-i-s-uchet-medosmotrov3-инд-напр-медосм-l': IISUchetMedosmotrov3ИндНапрМедосмLForm,
    'i-i-s-uchet-medosmotrov3-класс-вред-факт-l': IISUchetMedosmotrov3КлассВредФактLForm,
    'i-i-s-uchet-medosmotrov3-организация-l': IISUchetMedosmotrov3ОрганизацияLForm,
    'i-i-s-uchet-medosmotrov3-подразделения-l': IISUchetMedosmotrov3ПодразделенияLForm,
    'i-i-s-uchet-medosmotrov3-приказ-м-з-р-l': IISUchetMedosmotrov3ПриказМЗРLForm,
    'i-i-s-uchet-medosmotrov3-сотрудники-l': IISUchetMedosmotrov3СотрудникиLForm,
    'i-i-s-uchet-medosmotrov3-список-на-медосм-l': IISUchetMedosmotrov3СписокНаМедосмLForm,
    'i-i-s-uchet-medosmotrov3-должности-e': IISUchetMedosmotrov3ДолжностиEForm,
    'i-i-s-uchet-medosmotrov3-инд-напр-медосм-e': IISUchetMedosmotrov3ИндНапрМедосмEForm,
    'i-i-s-uchet-medosmotrov3-класс-вред-факт-e': IISUchetMedosmotrov3КлассВредФактEForm,
    'i-i-s-uchet-medosmotrov3-организация-e': IISUchetMedosmotrov3ОрганизацияEForm,
    'i-i-s-uchet-medosmotrov3-подразделения-e': IISUchetMedosmotrov3ПодразделенияEForm,
    'i-i-s-uchet-medosmotrov3-приказ-м-з-р-e': IISUchetMedosmotrov3ПриказМЗРEForm,
    'i-i-s-uchet-medosmotrov3-сотрудники-e': IISUchetMedosmotrov3СотрудникиEForm,
    'i-i-s-uchet-medosmotrov3-список-на-медосм-e': IISUchetMedosmotrov3СписокНаМедосмEForm
  },

});

export default translations;
