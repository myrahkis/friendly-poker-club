import { sendRedirect } from "h3";

export default defineEventHandler((event) => {
  const host = event.node.req.headers.host || "";
  
  if (host.startsWith("www.")) {
    const newHost = host.replace(/^www\./, "");
    const path = event.node.req.url || "/";
    return sendRedirect(event, `https://${newHost}${path}`, 301);
  }
});
