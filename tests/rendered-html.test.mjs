import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Iron Pot Plumbing homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Iron Pot Plumbing \| Plumbing Services in the Huonville Region<\/title>/i);
  assert.match(html, /Local plumbing,/);
  assert.match(html, /General Plumbing Maintenance/);
  assert.match(html, /Hot Water System Installations/);
  assert.match(html, /Blockages &amp; Drains/);
  assert.match(html, /CCTV Drain Camera/);
  assert.match(html, /Exposed &amp; Traditional Copper Work/);
  assert.match(html, /24\/7 Service/);
  assert.match(html, /href="tel:0447870939"/);
  assert.match(html, /href="mailto:ironpotplumbing@gmail.com"/);
  assert.match(html, /Serving the Huonville region/);

  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
  assert.doesNotMatch(html, /Greater Hobart|Southern Tasmania|Free Quote|Fully Insured|Licensed/i);
  assert.doesNotMatch(html, /Google 5\.0|Five-Star|14 Reviews|★★★★★/i);
});

test("keeps business content centralised and starter preview removed", async () => {
  const [page, businessData, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/business-data.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /import \{ business \} from "\.\/business-data"/);
  assert.match(businessData, /phoneHref: "tel:0447870939"/);
  assert.match(businessData, /serviceArea: "Huonville region"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await assert.rejects(access(new URL("app/_sites-preview", projectRoot)));
  await Promise.all([
    access(new URL("public/iron-pot-logo.jpg", projectRoot)),
    access(new URL("public/iron-pot-onsite.jpg", projectRoot)),
    access(new URL("public/og.png", projectRoot)),
  ]);
});
