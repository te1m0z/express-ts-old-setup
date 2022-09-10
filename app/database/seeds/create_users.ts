import type { Knex } from 'knex/types/index'
import bcrypt from 'bcrypt'

export async function seed(knex: Knex) {
	await knex('users').insert([
		{ login: 'Dmitriy', password: bcrypt.hashSync('parol999', 5) },
		{ login: 'Ivan', password: bcrypt.hashSync('parol888', 5) },
		{ login: 'Stas', password: bcrypt.hashSync('parol777', 5) },
		{ login: 'Boris', password: bcrypt.hashSync('parol666', 5) }
	])
}
