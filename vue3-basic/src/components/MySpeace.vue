<template>
    <el-container class="container">
        <div class="header">
            <el-menu mode="horizontal" class="menu" :default-active="1">
                <el-menu-item v-for="item in tabList" :key="item.id" :index="item.id.toString()">
                    {{ item.name }}
                </el-menu-item>
            </el-menu>
            <el-input placeholder="搜索" class="search" :suffix-icon="Search" />
            <el-avatar class="avatar" src="https://example.com/avatar.jpg" />
            <el-button>登录 | 注册</el-button>
        </div>
    
        <main class="main">
            <el-card class="profile-card">
                <div class="profile-header">
                    <el-avatar size="100" src="https://example.com/avatar.jpg" />
                    <div class="profile-info">
                        <h2>{{ userInfo.name }}</h2>
                        <p>{{ userInfo.email }}</p>
                    </div>
                </div>
                <el-divider />
                <div class="profile-details">
                    <el-row>
                        <el-col :span="12">
                            <h3>个人简介</h3>
                            <p>{{ userInfo.bio }}</p>
                        </el-col>
                        <el-col :span="12">
                            <h3>社交媒体</h3>
                            <el-tag v-for="platform in userInfo.social" :key="platform">{{ platform }}</el-tag>
                        </el-col>
                    </el-row>
                </div>
                <el-button type="primary" style="margin-top: 20px;">编辑资料</el-button>
            </el-card>
        </main>
    </el-container>
    </template>
    
    <script setup lang="ts">
    import { ref } from 'vue'
    import { Search } from '@element-plus/icons-vue'
    
    const tabList = ref([
        { id: 1, name: '首页' },
        { id: 2, name: '个人资料' },
        { id: 3, name: '设置' },
    ])
    
    const userInfo = ref({
        name: '张三',
        email: 'zhangsan@example.com',
        bio: '热爱编程，喜欢分享技术知识。',
        social: ['GitHub', 'Twitter', 'LinkedIn']
    })
    </script>
    
    <style scoped>
    .container {
        display: flex;
        flex-direction: column;
        background-color: #f2f3f5;
    }
    
    .header {
        display: flex;
        align-items: center;
        padding: 0 20px;
        height: 60px;
        background-color: #fff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    }
    
    .menu {
        flex-grow: 1;
    }
    
    .search {
        margin-left: 20px;
        margin-right: 20px;
        flex: 1;
    }
    
    .avatar {
        margin-left: 20px;
        margin-right: 10px;
    }
    
    .main {
        display: flex;
        justify-content: center;
        padding-top: 20px;
        background-color: #f2f3f5;
    }
    
    .profile-card {
        width: 600px;
    }
    
    .profile-header {
        display: flex;
        align-items: center;
    }
    
    .profile-info {
        margin-left: 20px;
    }
    
    .profile-details {
        margin-top: 20px;
    }
    </style>
