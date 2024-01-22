<template>
    Đây là trang quản lí user
</template>
<script>
    import { menuStore } from "@/stores/admin/menu.js";
    export default {
        setup(){
            menuStore().onSelectedKeys(['admin-users']);
        }
    }
</script>