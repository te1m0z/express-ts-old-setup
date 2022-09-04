<template>
	<div class="main-menu">
		<Transition name="menu--blank" appear @after-leave="showMenu = true">
			<nav v-if="!menu.length">
				<span class="blick"></span>
				<span class="blick"></span>
				<span class="blick"></span>
				<span class="blick"></span>
			</nav>
		</Transition>

		<Transition name="menu-items">
			<nav v-if="showMenu">
				<router-link
					v-for="(el, indx) in menu"
					:key="el + indx"
					:to="'/' + el.slug"
				>
					{{ el.title }}
				</router-link>
			</nav>
		</Transition>
	</div>
</template>

<script>
export default {
	name: 'Categories',
	data() {
		return {
			showMenu: false,
			menu: []
		}
	},
	mounted() {
		setTimeout(() => {
			this.menu = [
				{ title: 'linux', slug: 'linux' },
				{ title: 'Laravel', slug: 'laravel' },
				{ title: 'Windows', slug: 'windows' },
				{ title: 'React', slug: 'react' }
			]
		}, 1500)
	}
}
</script>

<style lang="scss">
.menu-items-enter-active,
.menu--blank-enter-active {
	transition: all 800ms ease;
}

.menu-items-leave-active,
.menu--blank-leave-active {
	transition: all 400ms ease;
}

.menu--blank-enter-from,
.menu--blank-leave-to {
	opacity: 0;
}

.menu-items-enter-from {
	opacity: 0;
}

.main-menu {
	& nav {
		display: flex;
		align-items: center;
		justify-content: center;

		& span.blick {
			width: 100px;
			height: 41px;
			border-radius: 4px;
		}

		& span + span {
			margin-left: 40px;
		}

		& a {
			font-size: 25px;
			color: $white;
			transition: 300ms ease;
			padding: 5px 20px;
			border-radius: 8px;
			border: 1px solid #000;
			color: #000;

			& + a {
				margin-left: 40px;
			}
		}
	}
}
</style>