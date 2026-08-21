/* eslint-disable @next/next/no-img-element -- Local company assets are served directly for vinext dev stability. */
import { business } from "./business-data";

const navItems = [
  ["Services", "#services"],
  ["Why Us", "#why-us"],
  ["Our Work", "#our-work"],
  ["Service Area", "#service-area"],
  ["Contact", "#contact"],
] as const;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <main id="main-content">
        <section className="hero" id="top">
          <header className="site-header">
            <a className="brand" href="#top" aria-label={`${business.name} home`}>
              <img src="/iron-pot-logo.jpg" width="1001" height="1001" alt="" fetchPriority="high" />
              <span>Iron Pot Plumbing</span>
            </a>

            <nav className="desktop-nav" aria-label="Primary navigation">
              {navItems.slice(0, 4).map(([label, href]) => (
                <a href={href} key={href}>{label}</a>
              ))}
            </nav>

            <a className="header-call" href={business.phoneHref}>
              <span className="call-label">Call&nbsp;</span>{business.phone}
            </a>

            <details className="mobile-nav">
              <summary aria-label="Open navigation">
                <span></span><span></span><span></span>
              </summary>
              <nav aria-label="Mobile navigation">
                {navItems.map(([label, href]) => (
                  <a href={href} key={href}>{label}</a>
                ))}
              </nav>
            </details>
          </header>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Local plumbing · Snug &amp; Huonville region</p>
              <h1>Local plumbing,<br />done properly.</h1>
              <p className="hero-intro">
                Professional plumbing maintenance, hot water systems, drainage
                work, CCTV inspections and copper work from a local plumber based
                in Snug.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href={business.phoneHref}>
                  Call {business.phone}
                </a>
                <a className="text-link" href="#services">
                  View services <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <div className="hero-image-wrap">
              <img
                className="hero-image"
                src="/iron-pot-onsite.jpg"
                width="1536"
                height="2048"
                alt="Iron Pot Plumbing carrying out plumbing work inside a local property"
                fetchPriority="high"
                decoding="async"
              />
              <div className="hero-image-note">
                <span>Based in Snug</span>
                <strong>Serving the Huonville region</strong>
              </div>
            </div>
          </div>

          <div className="hero-marker" aria-hidden="true"><span>IPP</span></div>
        </section>

        <section className="services section" id="services">
          <div className="section-shell services-layout">
            <div className="section-intro">
              <p className="section-kicker">What we do</p>
              <h2>Plumbing services for the work that needs doing.</h2>
              <p>
                From everyday maintenance to drain inspections and detailed
                copper work, Iron Pot Plumbing provides practical help across
                the Huonville region.
              </p>
              <div className="hot-water-image">
                <img
                  src="/iron-pot-hot-water.jpg"
                  width="1200"
                  height="1800"
                  alt="Hot water systems available for installation"
                  loading="lazy"
                  decoding="async"
                />
                <span>Hot water system installations</span>
              </div>
            </div>

            <ol className="service-list">
              {business.services.map((service, index) => (
                <li className={index === business.services.length - 1 ? "service-item service-item-featured" : "service-item"} key={service.name}>
                  <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                  <span className="service-arrow" aria-hidden="true">↗</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="why section" id="why-us">
          <div className="section-shell why-layout">
            <div className="why-copy">
              <p className="section-kicker section-kicker-light">Built on local feedback</p>
              <h2>Why locals choose Iron Pot Plumbing.</h2>
              <p className="why-lead">
                These are the qualities customers consistently mention when
                describing their experience with Iron Pot Plumbing.
              </p>
              <div className="why-grid">
                {business.whyChooseUs.map((item, index) => (
                  <article className="why-item" key={item.title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="testimonial-panel" aria-label="Customer feedback">
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{business.testimonials[0].quote}</blockquote>
              <p>— {business.testimonials[0].name}</p>
              <div className="testimonial-secondary">
                <blockquote>{business.testimonials[1].quote}</blockquote>
                <p>— {business.testimonials[1].name}</p>
              </div>
            </aside>
          </div>
        </section>

        <section className="work section" id="our-work">
          <div className="section-shell">
            <div className="work-heading">
              <div>
                <p className="section-kicker">On the tools</p>
                <h2>Recent work.</h2>
              </div>
              <p>
                Real plumbing work, from careful copper installation to the
                work behind the walls.
              </p>
            </div>

            <div className="work-grid">
              <figure className="work-image work-image-large">
                <img
                  src="/iron-pot-copper-sink.jpg"
                  width="1504"
                  height="2016"
                  alt="Traditional copper plumbing installed beneath a window"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Traditional copper work</figcaption>
              </figure>
              <figure className="work-image work-image-top">
                <img
                  src="/iron-pot-rough-in.jpg"
                  width="1536"
                  height="2048"
                  alt="Plumbing rough-in work with copper and drainage pipework"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Work behind the walls</figcaption>
              </figure>
              <figure className="work-image work-image-bottom">
                <img
                  src="/iron-pot-copper-bath.jpg"
                  width="1504"
                  height="2016"
                  alt="Exposed copper plumbing beside a traditional bath"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Exposed copper detail</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="area section" id="service-area">
          <div className="section-shell area-layout">
            <div className="area-copy">
              <p className="section-kicker">Local service area</p>
              <h2>Based in Snug.<br />Working across the Huonville region.</h2>
              <p>
                Iron Pot Plumbing is based in Snug and provides local plumbing
                services across the Huonville region.
              </p>
              <a className="dark-button" href={business.phoneHref}>
                Call {business.phone}
              </a>
            </div>
            <div className="area-mark" aria-hidden="true">
              <div className="beacon-lines"><i></i><i></i><i></i></div>
              <span>SNUG</span>
              <strong>→</strong>
              <span>HUONVILLE<br />REGION</span>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-shell contact-layout">
            <div>
              <p className="section-kicker section-kicker-light">Get in touch</p>
              <h2>Need a local plumber?</h2>
              <p className="contact-intro">
                For plumbing maintenance, hot water systems, blocked drains,
                CCTV inspections, copper work and 24/7 service, get in touch
                with Iron Pot Plumbing.
              </p>
              <div className="contact-actions">
                <a className="primary-button" href={business.phoneHref}>Call {business.phone}</a>
                <a className="outline-button" href={business.emailHref}>Email Iron Pot Plumbing</a>
              </div>
            </div>

            <dl className="contact-details">
              <div><dt>Phone</dt><dd><a href={business.phoneHref}>{business.phone}</a></dd></div>
              <div><dt>Email</dt><dd><a href={business.emailHref}>{business.email}</a></dd></div>
              <div><dt>Based in</dt><dd>{business.location}</dd></div>
              <div><dt>Service area</dt><dd>{business.serviceArea}</dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <a className="footer-brand" href="#top" aria-label={`${business.name} home`}>
            <img src="/iron-pot-logo.jpg" width="1001" height="1001" alt="" loading="lazy" decoding="async" />
            <span><strong>Iron Pot Plumbing</strong><small>Snug, Tasmania</small></span>
          </a>

          <nav aria-label="Footer navigation">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          </nav>

          <div className="footer-contact">
            <a href={business.phoneHref}>{business.phone}</a>
            <a href={business.emailHref}>{business.email}</a>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>Iron Pot Plumbing</span>
          <span>Based in Snug · Huonville region</span>
        </div>
      </footer>

      <a className="mobile-call-bar" href={business.phoneHref}>
        <span>Call Iron Pot Plumbing</span>
        <strong>{business.phone}</strong>
      </a>
    </>
  );
}
