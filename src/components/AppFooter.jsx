import molisanaLogo from '../assets/img/logo.png'

export default function AppFooter(){
  return (
    <footer>

      <div className="container">
        <div className="row">
          <div className="col">
            <img src={molisanaLogo} alt="" />
          </div>
          <div className="col">

            <h3>Pastificio</h3>
            <ul>
              <li>
                <a href="">il Pastificio</a>
              </li>
              <li>
                <a href="">il Pastificio</a>
              </li>
              <li>
                <a href="">il Pastificio</a>
              </li>
              <li>
                <a href="">il Pastificio</a>
              </li>
              <li>
                <a href="">il Pastificio</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Products</h3>
            <ul>
              <li>
                <a href="">Le Classiche</a>
              </li>
              <li>
                <a href="">il Pastificio</a>
              </li>
              <li>
                <a href="">il Pastificio</a>
              </li>
              <li>
                <a href="">il Pastificio</a>
              </li>
              <li>
                <a href="">il Pastificio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}