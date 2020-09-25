import angular from 'angular';

import datacenterLicenseEnableLegacyComponent from '../../../components/dedicated-cloud/license/enable/legacy';
import routing from './enable-legacy.routes';

const moduleName = 'dedicatedCloudLicenseEnableLegacyModule';

angular
  .module(moduleName, [datacenterLicenseEnableLegacyComponent])
  .config(routing);

export default moduleName;
