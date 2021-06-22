import menu from "../images/menu-icon.svg"

const MenuButton = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={menu} alt="" />
      </button>
    </>
  )
}

export default MenuButton
