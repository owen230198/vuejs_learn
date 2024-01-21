<template>
    <a-menu mode="inline" :items="items"></a-menu>
</template>
<script setup>
    import { reactive, h } from 'vue';
    
    const items = reactive([
        {
            key: '1',
            label: h('a', { href: 'users' }, 'Tài khoản'),
            title: 'Tài khoản',
        },
        {
            key: '2',
            label: h('a', { href: 'roles' }, 'Vai trò'),
            title: 'Vai trò',
        },
        {
            key: '3',
            label: h('a', { href: 'settings' }, 'Setting'),
            title: 'Setting',
        }
    ]);
</script>