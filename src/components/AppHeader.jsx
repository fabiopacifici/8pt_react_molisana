
import molisanaLogo from '../assets/img/logo.png'
import AppLogo from './AppLogo'

export default function AppHeader() {

  return (
    <>

      <header>
        <AppLogo />
        <nav>
          <a href="">Home</a>
          <a href="" className='active'>Prodotti</a>
          <a href="">Chi Siamo</a>
          <a href="">Contatti</a>
        </nav>
      </header>

    </>
  )
}