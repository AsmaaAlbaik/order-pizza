<template>
	<b-navbar toggleable="lg" type="dark" variant="dark">
		<div class="container">
			<b-navbar-nav>
				<router-link :to="{ name: 'homeLink' }" tag="li" class="nav-item">
					<a class="nav-link" href="#">home</a>
				</router-link>
				<router-link :to="{ name: 'aboutLink' }" tag="li" class="nav-item">
					<a class="nav-link" href="#">About</a>
				</router-link>
				<router-link :to="{ name: 'menuLink' }" tag="li" class="nav-item">
					<a class="nav-link" href="#">menu</a>
				</router-link>
				<router-link :to="{ name: 'adminLink' }" tag="li" class="nav-item">
					<a class="nav-link" href="#">admin</a>
				</router-link>
			</b-navbar-nav>
		</div>
	</b-navbar>
</template>
<script>
export default {
	computed: {
		userIsAuthonticated() {
			return (
				this.$store.getters.user !== null &&
				this.$store.getters.user !== undefined
			);
		},
	},
};
</script>
<style lang="scss" scoped>
.container {
  @media (min-width: 992px) {
    width: 40%;
  }
}
.navbar {
	position: absolute;
	bottom: 0;
	width: 100%;
	.navbar-nav {
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.nav-link {
		font-weight: bold;
		text-transform: uppercase;
	}
}
</style>
