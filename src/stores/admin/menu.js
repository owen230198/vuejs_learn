import { defineStore } from 'pinia';
export const menuStore = defineStore('menuId', {
    state: () => ({
        selectedKeys: [],
        openKeys: []
    }),
    actions: {
        onSelectedKeys(data) {
            this.selectedKeys = data;
        },
        doOpenKeys(data) {
            this.openKeys = data;
        }
    }
});