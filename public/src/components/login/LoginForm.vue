<template>
	<form id="login-form" @submit.prevent="submit">
		<p v-if="form.alerts.error" class="alert error">
			{{ form.alerts.error }}
		</p>
		<p v-if="form.alerts.success" class="alert success">
			{{ form.alerts.success }}
		</p>

		<div class="form-group">
			<label for="login_input">Логин</label>
			<input
				type="text"
				id="login_input"
				v-model="form.login"
				@focus="resetAlerts"
			/>
		</div>
		<div class="form-group">
			<label for="password_input">Пароль</label>
			<input
				type="password"
				id="password_input"
				v-model="form.password"
				@focus="resetAlerts"
			/>
		</div>
		<Button type="submit">Войти</Button>
	</form>
</template>

<script>
import { mapActions } from 'vuex'

import Button from '@/components/ui/Button'

export default {
	name: 'LoginForm',
	data() {
		return {
			form: {
				login: null,
				password: null,
				alerts: {
					sucess: null,
					error: null
				}
			}
		}
	},
	components: {
		Button
	},
	methods: {
		...mapActions({
			signIn: 'auth/signIn'
		}),
		submit() {
			if (!this.form.login || !this.form.password) {
				return (this.form.alerts.error = 'Поля должны быть заполнены')
			}

			this.signIn(this.form)
				.then((response) => {
					if (response.status) {
						return this.$router.replace({
							name: 'HomePage'
						})
					}

					this.form.alerts.error = response.error.text
				})
				.catch((error) =>
					console.log('ERROR: ', error.response.data.error)
				)
		},
		resetAlerts() {
			this.form.alerts.error = null
			this.form.alerts.success = null
		}
	}
}
</script>

<style scoped lang="scss">
#login-form {
	width: 400px;
	margin: 50px auto 0 auto;

	& .alert {
		text-align: center;
		border: 2px solid transparent;
		padding: 5px 0;
		margin: 10px 0;
	}

	& .form-group {
		display: flex;
		flex-flow: column nowrap;

		& + .form-group {
			margin-top: 20px;
		}

		& label {
			margin: 10px;
		}

		& input {
			margin-top: 10px;
			padding: 10px;
			border-radius: 4px;
			border: 2px solid #ccc;
		}
	}

	& > button {
		margin-top: 20px;
		padding: 5px 10px;
		font-size: 16px;
	}
}
</style>