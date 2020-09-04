export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.dedicated.server.interfaces.ola-reset', {
    url: '/ola-reset',
    translations: { value: ['.'], format: 'json' },
    views: {
      modal: {
        component: 'dedicatedServerInterfacesOlaReset',
      },
    },
    layout: 'modal',
    resolve: {
      goBack: /* @ngInject */ ($state) => (params) =>
        $state.go('app.dedicated.server.interfaces', params, { reload: true }),
    },
  });
};
