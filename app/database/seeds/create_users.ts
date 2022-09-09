import { Knex } from 'knex/types/index'
import bcrypt from 'bcrypt'

export async function seed(knex: Knex) {
	await knex('users').insert([
		{ login: 'Dmitriy', password: bcrypt.hash('parol999', 5) },
		{ login: 'Ivan', password: bcrypt.hash('parol888', 5) },
		{ login: 'Stas', password: bcrypt.hash('parol777', 5) },
		{ login: 'Boris', password: bcrypt.hash('parol666', 5) }
	])
}
