// import with relative path
import reactLogo from './assets/react.svg'
// import with the absolute path
import viteLogo from '/vite.svg'
import molLogo from '/img/logo.png'
import molisanaLogo from './assets/img/logo.png'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'


function App() {


  return (
    <>
      {/*  <img src={viteLogo} className="logo" alt="Vite logo" /> */}

      <AppHeader />

      <AppMain />

      <AppFooter />


    </>
  )
}

export default App
