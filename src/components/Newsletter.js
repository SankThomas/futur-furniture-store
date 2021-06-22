const Newsletter = () => {
  return (
    <>
      {/* Buttondown */}
      {/* Convertkit */}
      <section className="newsletter">
        <h2>Subscribe to our newsletter</h2>
        <form>
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <button type="submit" className="btn-cta">
            Subscribe
          </button>
        </form>
      </section>
    </>
  )
}

export default Newsletter
