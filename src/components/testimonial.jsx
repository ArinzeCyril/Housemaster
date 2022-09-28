const Testimonial = ({ Tsmny1, Tsmny2, Tsmny3 }) => {
  return (
    <div className="testimony">
      <div className="tsmny-qute-up">"</div>
      <div className="tsmny">
        <h1>Testimonials</h1>
        <div className="cards">
          <div className="card">
            <div className="card-p">
              <p>A Good Environment</p>   
              <p>helps with Productivity</p>
            </div>
            <div className="card-user">
              <img src={Tsmny1} alt="" />
              <div className="card-user-dtil">
                <p>Elizabeth Charles</p>
                <div className="rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-p">
              <p>A Good Environment</p>   
              <p>helps with Productivity</p>
            </div>
            <div className="card-user">
              <img src={Tsmny2} alt="" />
              <div className="card-user-dtil">
                <p>Elizabeth Charles</p>
                <div className="rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-p">
              <p>A Good Environment</p>   
              <p>helps with Productivity</p>
            </div>
            <div className="card-user">
              <img src={Tsmny3} alt="" />
              <div className="card-user-dtil">
                <p>Elizabeth Charles</p>
                <div className="rating">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tsmny-qute-dn">"</div>
    </div>
  )
}

export default Testimonial