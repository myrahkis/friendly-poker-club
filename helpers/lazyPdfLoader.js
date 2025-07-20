let cached = null;

export async function loadPdfJs() {
  if (cached) return cached;

  const lib = await import("pdfjs-dist/build/pdf.mjs");
  const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url"))
    .default;

  lib.GlobalWorkerOptions.workerSrc = workerUrl;

  cached = lib;
  return lib;
}
