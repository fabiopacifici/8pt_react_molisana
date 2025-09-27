import AppLogo from "./AppLogo";
import footer_menu from "../data/footer_menu";
/* const footer_menu = [
  {
    id: 1,
    title: 'Pastificio',
    list: [
      {
        id: 1, 
        text: 'il Pastificio',
        link: '#'
      },
      {
        id: 2,
        text: 'il Pastificio',
        link: '#'
      },
      {
        id: 3,
        text: 'il Pastificio',
        link: '#'
      },
      {
        id: 4,
        text: 'il Pastificio',
        link: '#'
      },
      {
        id: 5,
        text: 'il Pastificio',
        link: '#'
      }
    ]
  },
  {
    id:2,
    title: 'Products',
    list: [
      {
        id: 1,
        text: 'Le Classiche',
        link: '#'
      },
      {
        id: 2,
        text: 'Le Classiche',
        link: '#'
      },
      {
        id: 3,
        text: 'Le Classiche',
        link: '#'
      },
      {
        id: 4,
        text: 'Le Classiche',
        link: '#'
      },
      {
        id: 5,
        text: 'Le Classiche',
        link: '#'
      }
    ]
  }
]
 */
export default function AppFooter() {

  return (
    <footer>

      <div className="container">
        <div className="row">
          <div className="col">
            <AppLogo slogan={'La pasta buona buona'} />
          </div>

          {/* First iteration for the menus */}
          {footer_menu.map(menu => (

            <div className="col" key={menu.id}>
              <h3>{menu.title}</h3>
              
              {/* Second iteration for each sum menu list */}
              <ul>
                {
                  menu.list.map(list_item =>

                    <li key={list_item.id}>
                      <a href={list_item.link}>{list_item.text}</a>
                    </li>

                  )
                }
              </ul>
            </div>

          ))}

          {/*    <div className="col">
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
          </div> */}
        </div>

      </div>

    </footer>
  )
}