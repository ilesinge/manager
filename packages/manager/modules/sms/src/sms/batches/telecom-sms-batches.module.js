import angular from 'angular';
import '@uirouter/angularjs';

import create from './create';

import component from './telecom-sms-batches.component';
import routing from './routing';

const moduleName = 'ovhManagerSmsBatchesModule';

angular
  .module(moduleName, [create])
  .component(component.name, component)
  .config(routing)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
