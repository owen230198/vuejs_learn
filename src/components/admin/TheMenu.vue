<template>
    <a-menu mode="inline">
        <router-link v-for="item in items" :key="item.key" :to="{name:`admin-`+item.key}">
            <a-menu-item :key="item.key">
                {{ item.label }}
            </a-menu-item>
        </router-link>
    </a-menu>
</template>
<script setup>
    import { reactive, h } from 'vue';
    
    const items = reactive([
        {
            key: 'users',
            label: 'Tài khoản',
            title: 'Tài khoản',
        },
        {
            key: 'roles',
            label: 'Vai trò',
            title: 'Vai trò',
        },
        {
            key: 'settings',
            label: 'Setting',
            title: 'Setting',
        }
    ]);
</script>