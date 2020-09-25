import angular from 'angular';

import datacenterAddComponent from '../../../components/dedicated-cloud/datacenter/add';
import routing from './add.routes';

const moduleName = 'ovhManagerDedicatedCloudDatacentersAdd';

angular.module(moduleName, [datacenterAddComponent]).config(routing);

export default moduleName;
