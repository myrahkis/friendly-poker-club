import { promises as fs } from "fs";
import { defineEventHandler } from "h3";
import { resolve } from "path";

export default defineEventHandler(async () => {
  const uploadDir = resolve(process.cwd(), "public", "uploads");

  let files = [];

  try {
    files = await fs.readdir(uploadDir);
  } catch (e) {
    return [];
  }

  return files.map((name) => `/uploads/${name}`);
});
