<template>
    Đây là trang quản lí setting
</template>
<script>
    import { menuStore } from "@/stores/admin/menu.js";
    export default {
        setup(){
            menuStore().onSelectedKeys(['admin-settings']);
        }
    }
</script>