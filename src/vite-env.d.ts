/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPEN_WEATHER_MAP_API: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
