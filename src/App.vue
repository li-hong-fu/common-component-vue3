<template>
    <router-view v-slot="{ Component }">
        <keep-alive>
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </keep-alive>
    </router-view>
</template>

<script setup></script>

<style lang="less">
#app {
    height: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
