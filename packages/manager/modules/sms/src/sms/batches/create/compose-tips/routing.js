import component from '../../../components/sms-tips/compose/sms-tips-compose.component';

export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('sms.service.batches.create.compose-tips', {
    resolve: {
      close: /* @ngInject */ (goBack) => goBack,
    },
    views: {
      modal: {
        component: component.name,
      },
    },
    layout: 'modal',
    translations: {
      value: ['../../sms/compose'],
      format: 'json',
    },
  });
};
