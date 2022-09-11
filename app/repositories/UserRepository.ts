import { IUser } from '../interfaces/User'
import knex from '../database/connection'
import { User } from '../models/User'

export class UserRepository extends User {

	static async checkExists(login: string): Promise<boolean | IUser> {

		const userExists: IUser | undefined = await knex<IUser>(this.table).where('login', login).first()

		return userExists ? Promise.resolve(userExists) : Promise.reject(false)
	}
}
