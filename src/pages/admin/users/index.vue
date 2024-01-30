<template>
    <a-card title="Danh sách tài khoản">
        <a-table :columns="columns" :data-source="list_data">
            <template #bodyCell="{ column, index, record }">
                <template v-if="column.key === 'index'">
                    <span>
                        {{ index + 1 }}
                    </span>
                </template>
                <template v-if="column.key === 'status_id'" >
                    <span v-if="record.status_id == 1" class="text-primary">
                        Hoạt động
                    </span>
                    <span v-else class="text-danger">
                        Không hoạt động
                    </span>
                </template>
            </template>
        </a-table>
    </a-card>
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
    const columns = [
        {
            title: 'STT',
            key: 'index',
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'avatar',
            key: 'avatar',
        },
        {
            title: 'Tên TK',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Họ tên',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status_id',
            key: 'status_id',
        },
        {
            title: 'Chức năng',
            key: 'action',
        },
    ];
</script>