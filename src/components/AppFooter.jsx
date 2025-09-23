import AppLogo from "./AppLogo";


export default function AppFooter(){
  return (
    <footer>

      <div className="container">
        <div className="row">
          <div className="col">
            <AppLogo slogan={'La pasta buona buona'} />
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