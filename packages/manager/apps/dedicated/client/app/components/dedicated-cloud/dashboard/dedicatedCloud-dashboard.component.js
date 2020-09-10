import template from './dedicatedCloud-dashboard.html';

export default {
  bindings: {
    currentDrp: '<',
    currentService: '<',
    currentUser: '<',
    datacenterList: '<',
    deleteDrp: '<',
    disableVmwareOption: '<',
    drpGlobalStatus: '<',
    editDetails: '<',
    goToDrp: '<',
    goToDrpDatacenterSelection: '<',
    goToVpnConfiguration: '<',
    isDrpActionPossible: '<',
    isMailingListSubscriptionAvailable: '<',
    onUpgradeVersion: '<',
    onAssociateIpBlock: '<',
    onExecutionDateChange: '<',
    onMlSubscribe: '<',
    onTerminate: '<',
    onBasicOptionsUpgrade: '<',
    onCertificationUpgrade: '<',
    onConfigurationOnlyUpgrade: '<',
    orderSecurityOption: '<',
    orderVmwareOption: '<',
    productId: '<',
    setMessage: '<',
  },
  template,
};
