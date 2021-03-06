import {Controller} from 'cerebral'
import Model from 'cerebral/models/immutable'
import Devtools from 'cerebral-module-devtools'
import ModulesProvider from 'cerebral-provider-modules'

import BlockMakerModule from './modules/block-maker'
import AppModule from './modules/app'

const controller = Controller(Model({}));


controller.addModules({
	
	app: AppModule,
	blockmaker: BlockMakerModule,
	
	devtools: Devtools(),
});

controller.addContextProvider(ModulesProvider);

export default controller
