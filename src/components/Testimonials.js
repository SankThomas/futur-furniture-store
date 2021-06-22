import pictureMobile from "../images/mobile/testimonial.jpg"
import pictureDesktop from "../images/desktop/testimonial.jpg"

const Testimonials = () => {
  return (
    <>
      <div>
        <h2
          style={{
            textAlign: "center",
            fontSize: 36,
            marginTop: 20,
          }}
        >
          Testimonials
        </h2>
        <section className="testimonials">
          <div>
            <p>
              Yet remarkably appearance get him his projection. Diverted
              endeavor bed peculiar men the not desirous. Acuteness abilities
              ask can offending furnished fulfilled sex. Warrant fifteen exposed
              ye at mistake. Blush since so in noisy still built up an again. As
              young ye hopes no he place means. Partiality diminution gay yet
              entreaties admiration. In mr it he mention perhaps attempt pointed
              suppose. Unknown ye chamber of warrant of norland arrived.
            </p>
            <h3>
              Cathleen Granger, <span>CEO Nike</span>
            </h3>
          </div>

          <div>
            <picture>
              <source media="(min-width: 768px)" srcSet={pictureDesktop} />
              <img src={pictureMobile} alt="" />
            </picture>
          </div>
        </section>
      </div>
    </>
  )
}

export default Testimonials
