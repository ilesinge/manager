import angular from 'angular';

import datacenterDatastoreOrderComponent from '../../../../components/dedicated-cloud/datacenter/datastore/orderLegacy';
import routing from './order-legacy.routes';

const moduleName = 'ovhManagerDedicatedCloudDatacenterDatastoreOrder';

angular.module(moduleName, [datacenterDatastoreOrderComponent]).config(routing);

export default moduleName;
