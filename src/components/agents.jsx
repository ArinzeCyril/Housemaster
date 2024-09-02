const Agents = ({ Agnt1, Agnt2, Agnt3 }) => {
  return (
    <div id='agent' className='agnt'>
      <h1>Our Agents</h1>
      <div className='agnt-cards'>
        <div className='agnt-card'>
          <img src={Agnt1} alt='' />
          <div className='agnt-txt'>
            <h3>Mary Charlot</h3>
            <p>Sales Rep</p>
          </div>
        </div>
        <div className='agnt-card'>
          <img src={Agnt2} alt='' />
          <div className='agnt-txt'>
            <h3>Jane Holms</h3>
            <p>Sales Rep</p>
          </div>
        </div>
        <div className='agnt-card'>
          <img src={Agnt3} alt='' />
          <div className='agnt-txt'>
            <h3>Peter Scot</h3>
            <p>Sales Rep</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agents