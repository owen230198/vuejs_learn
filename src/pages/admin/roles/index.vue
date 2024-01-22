<template>
    Đây là trang quản lí role
</template>
<script>
    import { menuStore } from "@/stores/admin/menu.js";
    export default {
        setup(){
            menuStore().onSelectedKeys(['admin-roles']);
        }
    }
</script>