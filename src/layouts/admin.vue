<template>
	<TheHeader/>
	<div class="container-fluid mt-3">
		<div class="row">
			<div class="col-sm-3 d-none d-sm-flex">
				<a-list bordered style="width: 100%;">
					<TheMenu/>
					<template #header>
						<div>DASBOARD</div>
					</template>
				</a-list>
			</div>
			<div class="col-sm-9 col-12">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script setup>
	import TheHeader from "@/components/admin/TheHeader.vue";
	import TheMenu from "@/components/admin/TheMenu.vue";
</script>