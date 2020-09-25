import angular from 'angular';

import routing from './edit.routes';
import userRightsEditComponent from '../../../../components/dedicated-cloud/user/rights/edit';

const moduleName = 'dedicatedCloudUserRightsEditModule';

angular.module(moduleName, [userRightsEditComponent]).config(routing);

export default moduleName;
