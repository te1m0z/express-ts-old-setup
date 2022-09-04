<template>
	<div class="post-list">
		<TransitionGroup
			@after-leave="showPosts = true"
			name="posts--blick"
			appear
		>
			<template v-if="!posts.length">
				<div class="post">
					<header class="post-header">
						<div class="post-header_title blick"></div>
						<div class="post-header_date blick"></div>
					</header>
					<div class="post-body blick"></div>
				</div>
				<div class="post">
					<header class="post-header">
						<div class="post-header_title blick"></div>
						<div class="post-header_date blick"></div>
					</header>
					<div class="post-body blick"></div>
				</div>
				<div class="post">
					<header class="post-header">
						<div class="post-header_title blick"></div>
						<div class="post-header_date blick"></div>
					</header>
					<div class="post-body blick"></div>
				</div>
			</template>
		</TransitionGroup>

		<TransitionGroup name="posts" :appear="posts.length">
			<template v-if="showPosts">
				<Post v-for="post in posts" :key="post.id" :post="post" />
			</template>
		</TransitionGroup>
	</div>
</template>

<script>
import Post from '@/components/posts/Post.vue'

export default {
	name: 'PostList',
	data() {
		return {
			showPosts: false,
		}
	},
	components: {
		Post,
	},
	computed: {
		posts() {
			this.showPosts = this.$store.getters.getPosts
			return this.$store.getters.getPosts
		},
	},
	mounted() {
		if (!this.posts.length) {
			setTimeout(() => this.$store.dispatch('fetchPosts'), 1500)
		}
	},
}
</script>

<style lang="scss">
.posts--blick-enter-active,
.posts--blick-leave-active,
.posts-enter-active {
	transition: all 800ms ease;
}

.posts--blick-enter-from,
.posts--blick-leave-to {
	opacity: 0;
}

.posts--blick-leave-from {
	opacity: 1;
}

.posts-enter-from {
	opacity: 0;
}

.post-list {
	margin-top: 30px;
	display: flex;
	flex-flow: column nowrap;
}
</style>