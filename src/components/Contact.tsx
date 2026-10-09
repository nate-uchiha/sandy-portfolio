export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__inner">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">

          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#f7c948]">
              Contact
            </p>

            <h2 className="contact__heading mt-8">
              LET&apos;S
              <br />
              TALK.
            </h2>
          </div>

          <div className="self-end">

            <a
              href="mailto:sandy98818@gmail.com"
              className="contact__link"
            >
              <span className="contact__label">
                Email
              </span>

              <span className="contact__value">
                sandy98818@gmail.com
              </span>
            </a>

            <a
              href="tel:+010881848154"
              className="contact__link"
            >
              <span className="contact__label">
                Phone
              </span>

              <span className="contact__value">
                +91 98818 48154
              </span>
            </a>

            <a
              href="LINKEDIN_URL_HERE"
              target="_blank"
              rel="noreferrer"
              className="contact__link"
            >
              <span className="contact__label">
                LinkedIn
              </span>

              <span className="contact__value">
                LinkedIn Profile ↗
              </span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}