import angular from 'angular';

import '@ovh-ux/manager-core';
import '@uirouter/angularjs';
import 'angular-translate';
import 'oclazyload';
import ngOvhCloudUniverseComponents from '@ovh-ux/ng-ovh-cloud-universe-components';

const moduleName = 'ovhCloudConnectDetailsRemoveRoutingLazyLoading';

angular
  .module(moduleName, [
    'ovhManagerCore',
    'pascalprecht.translate',
    'ui.router',
    'oc.lazyLoad',
    ngOvhCloudUniverseComponents,
  ])
  .config(
    /* @ngInject */ ($stateProvider) => {
      $stateProvider.state('cloud-connect.details.overview.remove-extra.**', {
        url: '/datacenter/:datacenterId/extra/:extraId/remove',
        lazyLoad: ($transition$) => {
          const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');

          return import('./remove-extra.module').then((mod) =>
            $ocLazyLoad.inject(mod.default || mod),
          );
        },
      });
    },
  );

export default moduleName;
