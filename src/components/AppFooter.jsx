import AppLogo from "./AppLogo";
import footer_menu from "../data/footer_menu";

export default function AppFooter({ footer_menu }) {

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

        </div>

      </div>

    </footer>
  )
}