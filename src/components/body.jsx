import Properties from './prperties'
import Explore from './explore'
import WhyUs from './whyUs'
import Testimonial from './testimonial'
import Agents from './agents'
import NewsLetter from './newsLetter'
import Prptes1 from '../img/prptes/prptes1.png'
import Prptes2 from '../img/prptes/prptes2.png'
import Prptes3 from '../img/prptes/prptes3.png'
import Prptes4 from '../img/prptes/prptes4.png'
import Prptes5 from '../img/prptes/prptes5.png'
import Prptes6 from '../img/prptes/prptes6.png'
import Expl1 from '../img/expl/expl1.png'
import Expl2 from '../img/expl/expl2.png'
import Expl3 from '../img/expl/expl3.png'
import Expl4 from '../img/expl/expl4.png'
import Expl5 from '../img/expl/expl5.png'
import Expl6 from '../img/expl/expl6.png'
import Expl7 from '../img/expl/expl7.png'
import Expl8 from '../img/expl/expl8.png'
import Expl9 from '../img/expl/expl9.png'
import Expl10 from '../img/expl/expl10.png'
import Expl11 from '../img/expl/expl11.png'
import Expl12 from '../img/expl/expl12.png'
import Tsmny1 from '../img/tsmny/tsmny1.png';
import Tsmny2 from '../img/tsmny/tsmny2.png';
import Tsmny3 from '../img/tsmny/tsmny3.png';
import Agnt1 from '../img/agnt/agnt1.png';
import Agnt2 from '../img/agnt/agnt2.png';


const Body = () => {
  return (
    <div className='body'>
      <Properties 
        Prptes1={Prptes1} 
        Prptes2={Prptes2}
        Prptes3={Prptes3}
        Prptes4={Prptes4}
        Prptes5={Prptes5}
        Prptes6={Prptes6}
      />
      <Explore 
        Expl1={Expl1}
        Expl2={Expl2}
        Expl3={Expl3}
        Expl4={Expl4}
        Expl5={Expl5}
        Expl6={Expl6}
        Expl7={Expl7}
        Expl8={Expl8}
        Expl9={Expl9}
        Expl10={Expl10}
        Expl11={Expl11}
        Expl12={Expl12}
      />
      <WhyUs />
      <Testimonial 
        Tsmny1={Tsmny1}
        Tsmny2={Tsmny2}
        Tsmny3={Tsmny3}
      />
      <Agents 
        Agnt1={Agnt1}
        Agnt2={Agnt2}
      />
      <NewsLetter />
    </div>
  )
}

export default Body