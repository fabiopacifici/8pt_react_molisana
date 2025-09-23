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


function App() {


  return (
    <>
      {/*  <img src={viteLogo} className="logo" alt="Vite logo" /> */}

      <AppHeader />

      <AppMain />

      <AppFooter />


      {/*       <div className="alert bg-danger">
        <ul>
          <li>
            error 1
          </li>
          <li>
            error 2
          </li>
          <li>
            error 3
          </li>
        </ul>
      </div>


      <div className="alert bg-success">
        <p>I did it! well done.</p>
      </div>
 */}


      <div className="container">

        <Alert type='danger'>
          <ul>
            <li>
              error 1
            </li>
            <li>
              error 2
            </li>
            <li>
              error 3
            </li>
          </ul>
        </Alert>


        <Alert type='success'>
          <p>Well done you did it!</p>
        </Alert>

      </div>



    </>
  )
}

export default App
