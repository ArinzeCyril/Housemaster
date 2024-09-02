const NewsLetter = () => {
  return (
    <div className="nl">
      <h1>Newsletter</h1>
      <p>Get Notified Instantly for New Listings</p>
      <form className="nl-form">
        <input className="nl-inp-txt" type="text" placeholder="Enter Your Email..." />
        <input className="nl-inp-sub" type="submit" value="Subscribe" />
      </form>
    </div>
  )
}

export default NewsLetter