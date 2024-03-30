import { BrowserWindow } from "electron";

// 运行在 Electron 主进程 下的插件入口

// 创建窗口时触发

const onCreate = (window: BrowserWindow) => {
  // window 为 Electron 的 BrowserWindow 实例
  return window;
};

module.exports.onBrowserWindowCreated = onCreate;
