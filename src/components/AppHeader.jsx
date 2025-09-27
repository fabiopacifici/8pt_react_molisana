
import AppLogo from './AppLogo'
//import menu from '../data/header_menu'
import AppNav from './AppNav'
export default function AppHeader({menu}) {

  return (
    <>

      <header>

        <AppLogo />

        <AppNav menu={menu} /> 
       
      </header>

    </>
  )
}