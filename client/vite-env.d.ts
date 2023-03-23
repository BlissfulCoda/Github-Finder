/// <reference types="vite/client" />
import "vite/client";

interface ImportMeta {
  hot: {
    accept: Function;
    dispose: Function;
  };
  env: {
    MODE: string;
    SNOWPACK_PUBLIC_NEW_ENV_VARIABLE: string;
    SNOWPACK_PUBLIC_ANOTHER_NEW_ENV_VARIABLE: string;
  };
}
