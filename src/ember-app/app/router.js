import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-uchet-medosmotrov3-должности-l');
  this.route('i-i-s-uchet-medosmotrov3-должности-e',
  { path: 'i-i-s-uchet-medosmotrov3-должности-e/:id' });
  this.route('i-i-s-uchet-medosmotrov3-должности-e.new',
  { path: 'i-i-s-uchet-medosmotrov3-должности-e/new' });
  this.route('i-i-s-uchet-medosmotrov3-инд-напр-медосм-l');
  this.route('i-i-s-uchet-medosmotrov3-инд-напр-медосм-e',
  { path: 'i-i-s-uchet-medosmotrov3-инд-напр-медосм-e/:id' });
  this.route('i-i-s-uchet-medosmotrov3-инд-напр-медосм-e.new',
  { path: 'i-i-s-uchet-medosmotrov3-инд-напр-медосм-e/new' });
  this.route('i-i-s-uchet-medosmotrov3-класс-вред-факт-l');
  this.route('i-i-s-uchet-medosmotrov3-класс-вред-факт-e',
  { path: 'i-i-s-uchet-medosmotrov3-класс-вред-факт-e/:id' });
  this.route('i-i-s-uchet-medosmotrov3-класс-вред-факт-e.new',
  { path: 'i-i-s-uchet-medosmotrov3-класс-вред-факт-e/new' });
  this.route('i-i-s-uchet-medosmotrov3-организация-l');
  this.route('i-i-s-uchet-medosmotrov3-организация-e',
  { path: 'i-i-s-uchet-medosmotrov3-организация-e/:id' });
  this.route('i-i-s-uchet-medosmotrov3-организация-e.new',
  { path: 'i-i-s-uchet-medosmotrov3-организация-e/new' });
  this.route('i-i-s-uchet-medosmotrov3-подразделения-l');
  this.route('i-i-s-uchet-medosmotrov3-подразделения-e',
  { path: 'i-i-s-uchet-medosmotrov3-подразделения-e/:id' });
  this.route('i-i-s-uchet-medosmotrov3-подразделения-e.new',
  { path: 'i-i-s-uchet-medosmotrov3-подразделения-e/new' });
  this.route('i-i-s-uchet-medosmotrov3-приказ-м-з-р-l');
  this.route('i-i-s-uchet-medosmotrov3-приказ-м-з-р-e',
  { path: 'i-i-s-uchet-medosmotrov3-приказ-м-з-р-e/:id' });
  this.route('i-i-s-uchet-medosmotrov3-приказ-м-з-р-e.new',
  { path: 'i-i-s-uchet-medosmotrov3-приказ-м-з-р-e/new' });
  this.route('i-i-s-uchet-medosmotrov3-сотрудники-l');
  this.route('i-i-s-uchet-medosmotrov3-сотрудники-e',
  { path: 'i-i-s-uchet-medosmotrov3-сотрудники-e/:id' });
  this.route('i-i-s-uchet-medosmotrov3-сотрудники-e.new',
  { path: 'i-i-s-uchet-medosmotrov3-сотрудники-e/new' });
  this.route('i-i-s-uchet-medosmotrov3-список-на-медосм-l');
  this.route('i-i-s-uchet-medosmotrov3-список-на-медосм-e',
  { path: 'i-i-s-uchet-medosmotrov3-список-на-медосм-e/:id' });
  this.route('i-i-s-uchet-medosmotrov3-список-на-медосм-e.new',
  { path: 'i-i-s-uchet-medosmotrov3-список-на-медосм-e/new' });
});

export default Router;
