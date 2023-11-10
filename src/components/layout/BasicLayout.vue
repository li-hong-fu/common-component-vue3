<template>
    <div>
        <BasicLayoutSider></BasicLayoutSider>
        <div class="right-container">
            <BasicLayoutHeader></BasicLayoutHeader>
        </div>
    </div>

    <!-- <el-container>
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
    </el-container> -->
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
