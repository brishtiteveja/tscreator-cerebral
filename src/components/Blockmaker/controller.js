import {Controller} from 'cerebral'
import Model from 'cerebral/models/immutable'
import Devtools from 'cerebral-module-devtools'
import ModulesProvider from 'cerebral-provider-modules'

import BlockMakerModule from '../modules/block-maker'

const controller = Controller(Model({}));

controller.addModules({ 

  // Mine:
  blockmaker: BlockMakerModule,

  // Cerebral's:
  devtools: Devtools(),

});

controller.addContextProvider(ModulesProvider);

export default controller;
