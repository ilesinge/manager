import angular from 'angular';

import 'angular-translate';
import '@ovh-ux/ui-kit';
import '@ovh-ux/ng-translate-async-loader';

import component from './dedicatedCloud-security-max-simultaneous-connection.component';

const moduleName = 'ovhManagerPccSecuritySimultaneousConnectionUpdate';

angular
  .module(moduleName, [
    'ngTranslateAsyncLoader',
    'oui',
    'pascalprecht.translate',
  ])
  .component(component.name, component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
