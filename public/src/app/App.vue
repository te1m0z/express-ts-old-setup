<template>
	<div class="container">
		<Header />
		<Categories />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/layout/Header.vue'
import Categories from '@/components/layout/Categories.vue'

export default {
	name: 'App',
	components: {
		Header,
		Categories,
	},
}
</script>