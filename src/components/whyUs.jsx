const WhyUs = () => {
  return (
    <div id="contact" className="why-us">
      <div className="why-brwn">
        <div className="why-texts">
          <div className="why-text why-t1">
            <h1>Why Housemaster?</h1>
            <hr />
          </div>
          <div className="why-text why-t2">
            <p>01</p>
            <p>A Good Environment</p>
            <p>helps with Productivity</p>
            <hr />
          </div>
          <div className="why-text why-t3">
            <p>02</p>
            <p>A Good Environment</p>
            <p>helps with Productivity</p>
            <hr />
          </div>
        </div>
        <div className="why-form">
          <h2>Housemaster Inquiry Form</h2>
          <form className="why-inpt">
            <div className="why-inqry">
              <label htmlFor="inquiry-type">Inquiry Type</label>
              <select className="why-pd" id="inquiry-type" name="inquiry-type" >
                <option value="rent" key="rent">Rent</option>
                <option value="select" key="select" selected>Select</option>
                <option value="buy" key="buy">Buy</option>
              </select>
            </div>
            <div className="why-fn">
              <label htmlFor="first-name">First Name</label>
              <input className="why-pd" type="text" required placeholder="Arinze" id="first-name" />
            </div>
            <div className="why-ln">
              <label htmlFor="last-name">Last Name</label>
              <input className="why-pd" type="text" required placeholder="Cyril" id="last-name" />
            </div>
            <div className="why-eml">
              <label htmlFor="email">Email</label>
              <input className="why-pd" type="email" required placeholder="abcdef@gh.ij" id="email" />
            </div>
            <div className="why-lctn">
              <label htmlFor="location">Location</label>
              <select className="why-pd" name="location" id="location">
                <option value="canada">Canada</option>
                <option value="france">France</option>
                <option value="ghana">Ghana</option>
                <option value="nigeria">Nigeria</option>
                <option value="select" selected>Select</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
              </select>
            </div>
            <div className="why-pty">
              <label htmlFor="property-type">Property Type</label>
              <select className="why-pd" name="property-type" id="property-type">
                <option value="three-rooms">Three Rooms Apartment</option>
                <option value="five-rooms">Five Rooms Duplex</option>
                <option value="five-rooms2">Five Rooms Semi Detached Duplex</option>
                <option value="show-room">Show Room</option>
                <option value="shop">Retail Store</option>
                <option value="hall">Hall</option>
                <option value="select" selected>Select</option>
              </select>
            </div>
            <div className="why-msg">
              <label htmlFor="message">Message</label>
              <textarea className="why-pd" name="message" id="message" ></textarea>
            </div>
            <input id="submit" type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default WhyUs