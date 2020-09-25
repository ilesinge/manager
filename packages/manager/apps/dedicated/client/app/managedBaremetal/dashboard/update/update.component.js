import template from './update.html';

export default {
  bindings: {
    currentService: '<',
    goBack: '<',
    operationsUrl: '<',
    targetVersion: '<',
  },
  template,
};
