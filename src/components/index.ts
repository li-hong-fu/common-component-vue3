/*
 * @Description:
 * @Author: lihongfu
 * @Date: 2023-11-08 19:13:01
 * @LastEditTime: 2024-02-02 09:16:28
 * @LastEditors: lihongfu
 */
/**
 * Component组件自动注册
 */
import { App, defineComponent } from 'vue';

const install = async (app: App): Promise<void> => {
    const requireComponent = import.meta.glob('../components/**/*.vue');
    const componentPaths = Object.keys(requireComponent);

    componentPaths.forEach(async (fileName) => {
        const componentModule: any = await requireComponent[fileName]();
        const component = (componentModule.default ||
            componentModule) as typeof componentModule.default;
        const componentName = component.name;

        app.component(componentName, defineComponent(component));
    });
};

export default install;
