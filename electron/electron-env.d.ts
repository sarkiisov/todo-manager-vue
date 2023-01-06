declare namespace NodeJS {
  interface ProcessEnv {
    VITE_DEV_SERVER_URL: string;
    DIST_ELECTRON: string;
    DIST: string;
    PUBLIC: string;
  }
}
