import routing from './hosting-cdn.routing';

import flush from './flush/hosting-cdn-flush.module';
import order from './order/hosting-cdn-order.module';
import terminate from './terminate/hosting-cdn-terminate.module';
import service from './hosting-cdn.service';

const moduleName = 'ovhManagerHostingCdn';

angular
  .module(moduleName, [flush, order, terminate])
  .service('HostingCDN', service)
  .config(routing);

export default moduleName;
