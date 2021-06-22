import { useState, useEffect } from "react"
import Logo from "./Logo"
import MenuButton from "./MenuButton"
import Navbar from "./Navbar"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true)
    }
  }, [])

  return (
    <>
      <header className="header">
        <div className="logo">
          <Logo />
        </div>

        {isOpen && (
          <nav>
            <Navbar />
          </nav>
        )}

        <div className="menu-btn-container">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </>
  )
}

export default Header
