<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button'
}
</script>

<style scoped lang="scss">
.btn {
	outline: none;
	border: 2px solid transparent;
	background: none;
	transition: 400ms ease;
	cursor: pointer;

	&:hover {
		border-color: red;
	}
}
</style>