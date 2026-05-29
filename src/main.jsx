import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const features = [
  {
    title: "Strategi",
    text: "En skarp struktur for budskap, målgruppe og neste handling.",
  },
  {
    title: "Design",
    text: "Responsiv layout med tydelige CTA-er og et uttrykk som tåler å vises.",
  },
  {
    title: "Lansering",
    text: "Kode som er enkel å pushe, hoste og bygge videre på.",
  },
];

function App() {
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Nordlys Studio hjem">
          <span className="brand-mark" />
          Nordlys Studio
        </a>
        <nav aria-label="Hovedmeny">
          <a href="#services">Tjenester</a>
          <a href="#work">Arbeid</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Digital produktdesign</p>
            <h1 id="hero-title">Landingpages som føles raske, klare og levende.</h1>
            <p className="intro">
              Vi lager små, presise nettsider for ideer som skal testes,
              lanseres eller deles uten friksjon.
            </p>
            <div className="actions">
              <a className="button primary" href="#contact">
                Start prosjekt
              </a>
              <a className="button secondary" href="#work">
                Se eksempel
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Hva du får</p>
            <h2>Alt som trengs for en tydelig førsteversjon.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="work-band">
          <div>
            <p className="eyebrow">Preview klar</p>
            <h2>Bygget som en lett React-side.</h2>
          </div>
          <p>
            Vite gir rask lokal preview, enkel build og en ryddig struktur som
            kan kobles videre til GitHub Pages, Vercel eller en annen
            deploy-tjeneste.
          </p>
        </section>

        <section id="contact" className="section contact">
          <div>
            <p className="eyebrow">Neste steg</p>
            <h2>Klar for å teste GitHub-flyten.</h2>
          </div>
          <a className="button primary" href="mailto:hei@example.com">
            hei@example.com
          </a>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
