import controller from './dedicatedCloud-datacenter-host.controller';
import template from './dedicatedCloud-datacenter-host.html';

export default {
  bindings: {
    datacenterId: '<',
    datacenter: '<',
    dedicatedCloud: '<',
    orderHost: '<',
    pccType: '<',
    productId: '<',
    resourceUpgrade: '<',
    serviceId: '<',
    usesLegacyOrder: '<',
  },
  controller,
  template,
};
