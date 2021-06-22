import { useState } from "react"
import { navbar } from "../data/navbar"

const Navbar = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(navbar)

  return (
    <>
      <ul className="navbar">
        {links.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  )
}

export default Navbar
