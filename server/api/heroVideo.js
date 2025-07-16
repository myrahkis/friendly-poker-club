import { createReadStream, statSync } from "fs";
import { defineEventHandler, getRequestHeader, setResponseHeaders } from "h3";
import { join } from "path";

export default defineEventHandler((event) => {
  const filePath = join(
    process.cwd(),
    "public",
    "videos",
    "hero-video-big.mp4"
  );
  const stat = statSync(filePath);
  const fileSize = stat.size;
  const range = getRequestHeader(event, "range");

  if (!range) {
    // console.log("no range!!!!!!!!!!");
    setResponseHeaders(event, {
      "Content-Type": "video/mp4",
      "Content-Length": fileSize.toString(),
    });
    return createReadStream(filePath);
  }

  const parts = range.replace(/bytes=/, "").split("-");
  const start = parseInt(parts[0], 10);
  const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

  const chunkSize = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${fileSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": chunkSize.toString(),
    "Content-Type": "video/mp4",
  };

  setResponseHeaders(event, headers);
  event.node.res.statusCode = 206;

  return createReadStream(filePath, { start, end });
});
