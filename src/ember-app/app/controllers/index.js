import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.формирование-списков-для-приказа.caption'),
          title: i18n.t('forms.application.sitemap.формирование-списков-для-приказа.title'),
          children: [{
            link: 'i-i-s-uchet-medosmotrov3-список-на-медосм-l',
            caption: i18n.t('forms.application.sitemap.формирование-списков-для-приказа.i-i-s-uchet-medosmotrov3-список-на-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.формирование-списков-для-приказа.i-i-s-uchet-medosmotrov3-список-на-медосм-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.индивидуальные-направления.caption'),
          title: i18n.t('forms.application.sitemap.индивидуальные-направления.title'),
          children: [{
            link: 'i-i-s-uchet-medosmotrov3-инд-напр-медосм-l',
            caption: i18n.t('forms.application.sitemap.индивидуальные-направления.i-i-s-uchet-medosmotrov3-инд-напр-медосм-l.caption'),
            title: i18n.t('forms.application.sitemap.индивидуальные-направления.i-i-s-uchet-medosmotrov3-инд-напр-медосм-l.title'),
            icon: 'phone',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочная-информация.caption'),
          title: i18n.t('forms.application.sitemap.справочная-информация.title'),
          children: [{
            link: 'i-i-s-uchet-medosmotrov3-приказ-м-з-р-l',
            caption: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-uchet-medosmotrov3-приказ-м-з-р-l.caption'),
            title: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-uchet-medosmotrov3-приказ-м-з-р-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov3-класс-вред-факт-l',
            caption: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-uchet-medosmotrov3-класс-вред-факт-l.caption'),
            title: i18n.t('forms.application.sitemap.справочная-информация.i-i-s-uchet-medosmotrov3-класс-вред-факт-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.организация-и-штат.caption'),
          title: i18n.t('forms.application.sitemap.организация-и-штат.title'),
          children: [{
            link: 'i-i-s-uchet-medosmotrov3-подразделения-l',
            caption: i18n.t('forms.application.sitemap.организация-и-штат.i-i-s-uchet-medosmotrov3-подразделения-l.caption'),
            title: i18n.t('forms.application.sitemap.организация-и-штат.i-i-s-uchet-medosmotrov3-подразделения-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov3-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.организация-и-штат.i-i-s-uchet-medosmotrov3-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.организация-и-штат.i-i-s-uchet-medosmotrov3-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov3-организация-l',
            caption: i18n.t('forms.application.sitemap.организация-и-штат.i-i-s-uchet-medosmotrov3-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.организация-и-штат.i-i-s-uchet-medosmotrov3-организация-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-uchet-medosmotrov3-должности-l',
            caption: i18n.t('forms.application.sitemap.организация-и-штат.i-i-s-uchet-medosmotrov3-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.организация-и-штат.i-i-s-uchet-medosmotrov3-должности-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})