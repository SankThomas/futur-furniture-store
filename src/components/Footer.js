import { useState } from "react"
import { socials } from "../data/socials"
import logo from "../images/footer-logo.svg"
import CTA from "./CTA"

const Footer = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(socials)

  return (
    <>
      <footer className="footer">
        <div>
          <img src={logo} alt="" />
        </div>

        <ul>
          {links.map(({ id, image }) => (
            <li key={id}>
              <img src={image} alt="Share on social media" />
            </li>
          ))}
        </ul>

        <div>
          <CTA />
        </div>
      </footer>
    </>
  )
}

export default Footer
