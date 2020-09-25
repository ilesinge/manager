export default /* @ngInject */ ($stateProvider) => {
  $stateProvider.state('app.managedBaremetal.users', {
    url: '/users',
    reloadOnSearch: false,
    views: {
      pccView: 'dedicatedCloudUser',
    },
    resolve: {
      goBack: /* @ngInject */ (goBackToState) => (
        message = false,
        type = 'success',
      ) => {
        return goBackToState('app.managedBaremetal.users', message, type);
      },
      addUser: /* @ngInject */ ($state) => (passwordPolicy) =>
        $state.go('app.managedBaremetal.users.add', {
          passwordPolicy,
        }),
      deleteUser: /* @ngInject */ ($state) => (user) =>
        $state.go('app.managedBaremetal.users.delete', {
          user,
        }),
      disableUser: /* @ngInject */ ($state) => (user) =>
        $state.go('app.managedBaremetal.users.disable', {
          user,
        }),
      editUser: /* @ngInject */ ($state) => (user) =>
        $state.go('app.managedBaremetal.users.edit', {
          user,
        }),
      enableUser: /* @ngInject */ ($state) => (user) =>
        $state.go('app.managedBaremetal.users.enable', {
          user,
        }),
      modifyUserRights: /* @ngInject */ ($state) => (user) =>
        $state.go('app.managedBaremetal.users.rights', {
          user,
        }),
      passwordReset: /* @ngInject */ ($state) => (user, passwordPolicy) =>
        $state.go('app.managedBaremetal.users.password-reset', {
          passwordPolicy,
          user,
        }),
    },
  });
};
