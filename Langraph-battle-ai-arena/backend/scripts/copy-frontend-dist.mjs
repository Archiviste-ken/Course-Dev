import fs from "node:fs";
import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const backendRoot = path.resolve(__dirname, "..");
const frontendDistDir = path.resolve(backendRoot, "..", "frontend", "dist");
const backendPublicDir = path.resolve(backendRoot, "public");

if (!fs.existsSync(frontendDistDir)) {
  throw new Error(
    `Frontend dist folder not found at ${frontendDistDir}. Run \"npm --prefix ../frontend run build\" first.`,
  );
}

await rm(backendPublicDir, { recursive: true, force: true });
await mkdir(backendPublicDir, { recursive: true });
await cp(frontendDistDir, backendPublicDir, { recursive: true });

console.log(
  `Copied frontend build from ${frontendDistDir} to ${backendPublicDir}`,
);
