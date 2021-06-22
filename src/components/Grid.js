import { useState } from "react"
import { grid } from "../data/grid"

const Grid = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(grid)

  return (
    <>
      <section className="grid">
        {cards.map(({ id, title, image, text, price }) => (
          <article key={id}>
            <img src={image} alt={title} />
            <div>
              <h3>{title}</h3>
              <p>{price}</p>
            </div>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </>
  )
}

export default Grid
