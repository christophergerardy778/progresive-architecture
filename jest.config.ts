import type {Config} from '@jest/types';
import dotenv from 'dotenv';

dotenv.config({
	path: '.env.test'
})

// Sync object
const config: Config.InitialOptions = {
	verbose: true,
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	globals: {
		'ts-jest': {
			isolatedModules: true
		}
	}
};
export default config;
