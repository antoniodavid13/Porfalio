const cache = new Map();

async function loadFragment(url) {
  if (cache.has(url)) return cache.get(url);

  const p = fetch(url, { credentials: "same-origin" })
    .then(r => {
      if (!r.ok) throw new Error(`Error ${r.status} al cargar ${url}`);
      return r.text();
    });
  cache.set(url, p);
  return p;
}

function resolveUrl(base, relative) {
  try { return new URL(relative, base).toString(); }
  catch { return relative; }
}

async function hydrateIncludes() {
  const nodes = document.querySelectorAll("[data-include]");
  await Promise.all([...nodes].map(async el => {
    const src = el.getAttribute("data-include");
    const url = resolveUrl(document.baseURI, src);
    try {
      const html = await loadFragment(url);
      el.innerHTML = html;
      el.dispatchEvent(new CustomEvent("included", { detail: { url } }));
    } catch (err) {
      console.error(err);
      el.innerHTML = `
        <div role="alert" style="padding:.5rem;border:1px solid #e99">
          No se pudo cargar: <code>${src}</code>
        </div>`;
    }
  }));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", hydrateIncludes);
} else {
  hydrateIncludes();
}





