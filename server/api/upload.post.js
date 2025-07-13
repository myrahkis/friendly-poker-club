import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
import { defineEventHandler } from "h3";
import { resolve } from "path";

export default defineEventHandler(async (event) => {
  if (event.node.req.headers["content-type"]) {
    event.node.req.headers["content-type"] =
      event.node.req.headers["content-type"];
  }

  const form = new IncomingForm({ multiples: true });
  const uploadDir = resolve(process.cwd(), "public", "uploads");

  await fs.mkdir(uploadDir, { recursive: true });

  return new Promise((resolvePromise, rejectPromise) => {
    form.parse(event.node.req, async (err, fields, files) => {
      if (err) {
        return rejectPromise(err);
      }

      const fileArray = Array.isArray(files.photos)
        ? files.photos
        : [files.photos];

      try {
        for (const file of fileArray) {
          const oldPath = file.filepath;
          const newPath = resolve(uploadDir, file.originalFilename);
          await fs.rename(oldPath, newPath);
        }
        resolvePromise({ status: "ok", count: fileArray.length });
      } catch (e) {
        rejectPromise(e);
      }
    });
  });
});
