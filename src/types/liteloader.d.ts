// see: https://liteloaderqqnt.github.io/docs/liteloader-api.html
export {};

interface Manifest {
  manifest_version: number;
  type: "extension" | "theme" | "framework";
  name: string;
  slug: string;
  description: string;
  version: string;
  icon?: string | null;
  authors: {
    name: string;
    link: string;
  }[];
  dependencies?: {
    [slug: string]: string;
  };
  platform: ("win32" | "darwin" | "linux")[];
  injects?: {
    renderer: string;
    preload: string;
    main: string;
  };
  repository?: {
    repo: string;
    branch: string;
    release: {
      tag: string;
      file?: string;
    };
  };
}

interface PluginInfo {
  manifest: Manifest;
  incompatible: boolean;
  disabled: boolean;
  path: {
    plugin: string;
    data: string;
    injects: {
      renderer: string;
      preload: string;
      main: string;
    };
  };
}

declare global {
  interface Window {
    LiteLoader: {
      path: {
        root: string;
        profile: string;
        data: string;
        plugins: string;
      };
      versions: {
        qqnt: string;
        liteloader: string;
        node: string;
        chrome: string;
        electron: string;
      };
      os: {
        platform: string;
      };
      package: {
        liteloader: string;
        qqnt: string;
      };
      config: {
        LiteLoader: {
          disabled_plugins: string[];
        };
      };
      plugins: {
        [slug: string]: PluginInfo;
      };
      api: {
        config: {
          set: (slug: string, new_config: Record<string, unknown>) => void;
          get: (
            slug: string,
            default_config: Record<string, unknown>,
          ) => Record<string, unknown>;
        };
        disablePlugin: (slug: string) => void;
        openExternal: (
          url: string,
          options?: OpenExternalOptions,
        ) => Promise<void>;
        openPath: (path: string) => Promise<string>;
      };
    };
  }
}
