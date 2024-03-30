// Electron 主进程 与 渲染进程 交互的桥梁
import { contextBridge } from "electron";

// 在window对象下导出只读对象
contextBridge.exposeInMainWorld("plugin_booth", {});
