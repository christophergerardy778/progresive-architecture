import {StringVo} from './StringVo';
import {UUID} from '../UUID';

export class UUIDVo extends StringVo {
	public random() {
		return new UUIDVo(UUID.create());
	}
}
