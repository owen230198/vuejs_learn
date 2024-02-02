<template>
    <div class="admin_menu">
        <a-menu 
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            mode="inline">
            <router-link v-for="item in items" :key="item.key" :to="{name:item.key}">
                <a-menu-item :key="item.key">
                    <font-awesome-icon :icon="['fas', item.icon ]" />
                    {{ item.label }}
                </a-menu-item>
            </router-link>
        </a-menu>
    </div>
</template>
<script setup>
    import { reactive } from 'vue'
    import { storeToRefs } from 'pinia'
    import { menuStore } from "@/stores/admin/menu.js"
    const store = menuStore()
    storeToRefs(store)
    const items = reactive([
        {
            key: 'admin-users',
            label: 'Tài khoản',
            title: 'Tài khoản',
            icon: 'user'
        },
        {
            key: 'admin-roles',
            label: 'Vai trò',
            title: 'Vai trò',
            icon: 'ticket'
        },
        {
            key: 'admin-settings',
            label: 'Setting',
            title: 'Setting',
            icon: 'gear'
        }
    ])
</script>