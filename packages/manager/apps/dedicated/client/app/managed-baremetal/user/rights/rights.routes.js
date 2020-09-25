export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.managedBaremetal.users.rights', {
    url: '/rights',
    params: {
      user: null,
    },
    views: {
      pccUserView: 'dedicatedCloudUserRights',
    },
    resolve: {
      editRight: /* @ngInject */ ($state, user) => (rightId) =>
        $state.go('app.managedBaremetal.users.rights.edit', {
          rightId,
          user,
        }),
      user: /* @ngInject */ ($transition$) => $transition$.params().user,
    },
  });
};
