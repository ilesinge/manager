import angular from 'angular';
import '@ovh-ux/ui-kit';
import '@uirouter/angularjs';

import routing from './routing';

const moduleName = 'ovhManagerSmsBatchesCreateReceiversChoice';

angular.module(moduleName, ['oui', 'ui.router']).config(routing);

export default moduleName;
