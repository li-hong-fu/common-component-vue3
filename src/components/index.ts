/**
 * Component组件自动注册
 */
import { App, defineComponent } from 'vue';

const install = async (app: App): Promise<void> => {
    const requireComponent = import.meta.glob('../components/**/*.vue');
    const componentPaths = Object.keys(requireComponent);

    componentPaths.forEach(async (fileName) => {
        const componentModule = await requireComponent[fileName]();
        const component = (componentModule.default ||
            componentModule) as typeof componentModule.default;
        const componentName = component.name;

        app.component(componentName, defineComponent(component));
    });
};

export default install;
