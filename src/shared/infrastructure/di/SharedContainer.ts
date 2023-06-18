import {ContainerModule} from 'inversify';
import {Connection} from '../Connection';
import {sharedTypes} from './SharedTypes';
import {QueryBuilderAdapter} from '../QueryBuilderAdapter';
import {StringHash} from '../../domain/StringHash';

export const sharedContainer = new ContainerModule((bind) => {
	bind<Connection>(sharedTypes.connection).to(Connection).inSingletonScope();
	bind<QueryBuilderAdapter>(sharedTypes.queryBuilderAdapter).to(QueryBuilderAdapter).inSingletonScope();
	bind<StringHash>(sharedTypes.stringHash).to(StringHash);
})
