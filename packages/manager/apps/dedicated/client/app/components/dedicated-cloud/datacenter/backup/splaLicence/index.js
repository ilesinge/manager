import angular from 'angular';
import '@uirouter/angularjs';
import '@ovh-ux/ng-translate-async-loader';
import 'angular-translate';

import component from './component';

const moduleName = 'ovhManagerDedicatedCloudBackupSplaLicence';

angular
  .module(moduleName, [
    'ngTranslateAsyncLoader',
    'pascalprecht.translate',
    'ui.router',
  ])
  .component('dedicatedCloudDatacenterBackupSplaLicence', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
