<template>
    <div class="container-fluid">
        <div class="row text-white" style="background-color: #0c713d; padding: 1rem;">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDasboardMenu()"><font-awesome-icon :icon="['fas', 'bars']" /></span>
            </div>

            <div class="col-10 col-sm-3 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../../assets/logo.svg" alt="logo" width="34" height="32" class="ms-3 me-3">
                <span class="d-none d-sm-flex">DASBOARD</span>
            </div>
            
            <div class="col-sm-9 d-none d-sm-flex align-items-center justify-content-sm-end">
                <span>ADMIN</span>
            </div>

            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showUserMenu()">X</span>
            </div>
        </div>
    </div>
    <a-drawer v-model:open="open_dasboard" title="DASBOARD" placement="left">
        <TheMenu/>
    </a-drawer>
    <a-drawer v-model:open="open_user" title="TÀI KHOẢN" placement="right">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>
<script setup>
    import { ref } from 'vue';
    const open_dasboard = ref(false);
    const showDasboardMenu = () => {
        open_dasboard.value = true;
    };

    const open_user = ref(false);
    const showUserMenu = () => {
        open_user.value = true;
    };
</script>

<script>
    import TheMenu from "@/components/admin/TheMenu.vue";
    export default {
        components: {
            TheMenu,
        }
    }
</script>