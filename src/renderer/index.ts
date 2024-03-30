// 运行在 Electron 渲染进程 下的页面脚本
// 打开设置界面时触发

// `plugin_booth` 是插件的标识符，在 manifest.json 中定义
// FIXME: 是不是能用一个常量来替代 `plugin_booth`？进而更改为 window.LiteLoader.plugins[plugin_name].path.plugin
const pluginPath = window.LiteLoader.plugins.plugin_booth.path.plugin;

const onSettingWindowCreated = async (view: Element) => {
  // view 为 Element 对象，修改将同步到插件设置界面
  view.innerHTML = await (
    await fetch(`local:///${pluginPath}/setting.html`)
  ).text();
};

export { onSettingWindowCreated };
