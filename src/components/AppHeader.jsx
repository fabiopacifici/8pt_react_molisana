
import AppLogo from './AppLogo'


export default function AppHeader() {

  const menu = [
    {
      id: 1,
      text: 'Home',
      link: '#',
      is_active: true
    },
    {
      id: 2,
      text: 'Prodotti',
      link: '#',
      is_active: false
    },
    {
      id: 3,
      text: 'Chi siamo',
      link: '#',
      is_active: false
    },
    {
      id: 4,
      text: 'Contatti',
      link: '#',
      is_active: false
    }

  ]
  //const menu = [<li>Home</li>, <li>Prodotti</li>, <li>Chi siamo</li>, <li>Contatti</li>]

  return (
    <>

      <header>
        {/* <ul>
          {menu.map(item=> <li>{item}</li>)}
        </ul> */}
        <AppLogo />
        <nav>
          {menu.map(item =>
            <a href={item.link} key={item.id} className={item.is_active ? 'active' : ''}>
              {item.text}
            </a>
          )}
          {/*  <a href="">Home</a>
          <a href="" className='active'>Prodotti</a>
          <a href="">Chi Siamo</a>
          <a href="">Contatti</a> */}
        </nav>
      </header>

    </>
  )
}