import { dirname } from "path";
import { fileURLToPath } from "url";

export const $filename = (url) => fileURLToPath(url);
export const $dirname = (url) => dirname($filename(url));