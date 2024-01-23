<template>
    Đây là trang quản lí user
</template>
<script setup>
    import { menuStore } from "@/stores/admin/menu.js";
    import { ref } from "vue";
    
    //selected menu
    const onSeledcted = () => {
        menuStore().onSelectedKeys(['admin-users']);
    };

    //get data table
    const list_data = ref([]);
    const getListData = () => {
        axios.get('http://127.0.0.1:8000/api/users').then(function (response) {
            list_data.value = response.data;
        }).catch(function (error) {
            console.log(error);
        });
    };
    onSeledcted();
    getListData();
    console.log('data', list_data)
</script>