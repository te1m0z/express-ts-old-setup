module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
				    @import "@/assets/scss/index.scss";
				`,
			},
		},
	},
}
