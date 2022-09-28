import NavBar from './navBar'
import TopContent from './topContent'
import TopSearch from './topSearch'

export default function Top() {
  return (
    <div id='home' className='top'>
        <div className='top-set'>
            <NavBar />
            <TopContent />
            <TopSearch />
        </div>
    </div>
  )
}
