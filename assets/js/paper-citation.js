(function () {
  if (window.__paperCitationInit) {
    return;
  }
  window.__paperCitationInit = true;

  const initCitationBlocks = async () => {
    let Cite = window.Cite;
    if (typeof Cite === "undefined") {
      if (typeof require === "function") {
        try {
          Cite = require("citation-js");
        } catch (err) {
          console.warn("citation.js is not available; skipping citation rendering", err);
          return;
        }
      } else {
        console.warn("citation.js is not available; skipping citation rendering");
        return;
      }
    }

    const containers = document.querySelectorAll(".paper-citation");
    if (!containers.length) {
      return;
    }

    const bibtexCache = new Map();
    const formatTemplates = {
      apa: { name: "apa", url: "/csl/apa.csl" },
      mla: { name: "mla", url: "/csl/modern-language-association.csl" },
      chicago: { name: "chicago-author-date", url: "/csl/chicago-author-date.csl" },
      ieee: { name: "ieee", url: "/csl/ieee.csl" },
    };

    const cslCache = new Map();
    const fetchCsl = (name, url) => {
      if (!cslCache.has(name)) {
        cslCache.set(
          name,
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to load CSL file ${name}: ${response.status}`);
              }
              return response.text();
            })
            .then((text) => {
              const config = Cite.plugins.config.get('@csl');
              config.templates.add(name, text);
              return true;
            })
        );
      }
      return cslCache.get(name);
    };

    const fetchBibtex = (path) => {
      if (!bibtexCache.has(path)) {
        bibtexCache.set(
          path,
          fetch(path)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Failed to load BibTeX file ${path}: ${response.status}`);
              }
              return response.text();
            })
            .then((text) => new Cite(text))
        );
      }
      return bibtexCache.get(path);
    };

    const renderCitation = async (entryCite, format) => {
      if (format === "bibtex") {
        return entryCite.format("bibtex").trim();
      }

      const templateInfo = formatTemplates[format];
      if (!templateInfo) {
        throw new Error(`Unsupported citation format: ${format}`);
      }

      await fetchCsl(templateInfo.name, templateInfo.url);

      const rendered = entryCite.format("bibliography", {
        template: templateInfo.name,
        format: "text",
        lang: "en-US",
      });
      return Array.isArray(rendered) ? rendered.join("\n").trim() : (rendered || "").trim();
    };

    const setActiveTab = (container, activeFormat) => {
      container.querySelectorAll(".citation-tab-btn").forEach((btn) => {
        const isActive = btn.dataset.format === activeFormat;
        btn.classList.toggle("hx-border-blue-500", isActive);
        btn.classList.toggle("hx-border-transparent", !isActive);
        btn.classList.toggle("hx-text-blue-600", isActive);
        btn.classList.toggle("dark:hx-text-blue-400", isActive);
        btn.classList.toggle("hx-text-gray-600", !isActive);
        btn.classList.toggle("dark:hx-text-gray-400", !isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });
    };

    const showCopySuccess = (element) => {
      if (!element) {
        return;
      }
      element.classList.remove("hx-hidden");
      setTimeout(() => {
        element.classList.add("hx-hidden");
      }, 2000);
    };

    containers.forEach((container) => {
      const bibtexKey = container.dataset.bibtexKey;
      const bibtexFile = container.dataset.bibtexFile;
      const citationTextEl = container.querySelector("#citation-text");
      const copyButton = container.querySelector("#copy-citation-btn");
      const copySuccess = container.querySelector("#copy-success");
      const tabButtons = container.querySelectorAll(".citation-tab-btn");

      if (!bibtexKey || !bibtexFile || !citationTextEl) {
        return;
      }

      const setCitationBody = (text) => {
        citationTextEl.textContent = text || "Citation unavailable.";
      };

      setCitationBody("Loading citation...");

      fetchBibtex(bibtexFile)
        .then((citeInstance) => {
          const entries = citeInstance.data || [];
          const match = entries.find(
            (entry) => entry.id === bibtexKey || entry["citation-key"] === bibtexKey
          );

          if (!match) {
            throw new Error(`BibTeX key '${bibtexKey}' not found in ${bibtexFile}`);
          }

          const entryCite = new Cite([match]);
          let currentFormat = "apa";

          const updateCitation = async (format) => {
            try {
              // Show a loading message while fetching CSL files
              if (format !== "bibtex") {
                setCitationBody("Formatting citation...");
              }
              const text = await renderCitation(entryCite, format);
              setCitationBody(text);
              currentFormat = format;
              setActiveTab(container, format);
            } catch (err) {
              console.error(err);
              setCitationBody("Unable to format citation.");
            }
          };

          updateCitation(currentFormat);

          tabButtons.forEach((btn) => {
            btn.addEventListener("click", async () => {
              const format = btn.dataset.format;
              if (!format || format === currentFormat) {
                return;
              }
              await updateCitation(format);
            });
          });
        })
        .catch((error) => {
          console.error(error);
          setCitationBody("Unable to load citation.");
        });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCitationBlocks);
  } else {
    initCitationBlocks();
  }
})();
