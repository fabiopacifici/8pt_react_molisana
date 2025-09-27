// import with relative path
import reactLogo from './assets/react.svg'
// import with the absolute path
import viteLogo from '/vite.svg'
import molLogo from '/img/logo.png'
import molisanaLogo from './assets/img/logo.png'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'
import Alert from './components/Alert'
/* Centralization: Import the data */
import menu from './data/header_menu'
import footer_menu from './data/footer_menu'
import products from './data/products'

function App() {


  return (
    <>

      <AppHeader menu={menu} />

      <AppMain products={products}  />

      <AppFooter footer_menu={footer_menu} />


    </>
  )
}

export default App
