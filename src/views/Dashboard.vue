<template>
	<div>
		<div class="navigation container-fluid">
			<div class="row">
				<div class="col-md-6">
					<img src="../assets/techolution-logo-1.png" class="img-fluid" width="300px" alt="">
				</div>
				<div class="col-md-6">
					<router-link class="nav-button" to="/Admin">Admin</router-link>
					<router-link class="nav-button" to="/">Dashboard</router-link>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	components: {
	},
	data () {
		return {
			welcome: 'Welcome to Student Results'
		}
	}
}
</script>

<style>

</style>
