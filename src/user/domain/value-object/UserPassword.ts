import {StringVo} from '../../../shared/domain/value-object/StringVo';

export class UserPassword extends StringVo {
	public static from(value: string): UserPassword {
		return new UserPassword(value);
	}
}
