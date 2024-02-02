<!--
 * @Description: 
 * @Author: lihongfu
 * @Date: 2023-11-08 19:13:01
 * @LastEditTime: 2024-02-02 09:44:49
 * @LastEditors: lihongfu
-->
<template>
    <el-container>
        <BasicLayoutSider></BasicLayoutSider>
        <el-container class="right-container">
            <BasicLayoutHeader></BasicLayoutHeader>
            <el-main id="app-router">
                <router-view v-slot="{ Component }">
                    <keep-alive>
                        <transition name="fade" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </keep-alive>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'BasicLayout',
};
</script>

<style lang="less">
.el-container {
    height: 100%;
}
.right-container {
    flex-direction: column !important;
    background: #f0f2f5;

    .el-main {
        padding: 0;
    }
}

#app-router {
    height: 100%;
    position: relative;
    padding: 20px;
}
</style>
