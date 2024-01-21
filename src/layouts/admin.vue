<template>
	<TheHeader/>
	<div class="container-fluid mt-3">
		<div class="row">
			<div class="col-sm-3 d-none d-sm-flex">
				<a-list bordered style="width: 100%;">
					<Themenu/>
					<template #header>
						<div>DASBOARD</div>
					</template>
				</a-list>
			</div>
			<div class="col-sm-9 col-12">
				content
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
	import TheHeader from "../components/admin/TheHeader.vue";
	import Themenu from "../components/admin/TheMenu.vue";
	export default {
		components:{
			TheHeader,
			Themenu
		}
	}
</script>