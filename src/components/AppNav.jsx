export default function AppNav({menu}){


  return (

    <nav>
      {menu.map(item =>
        <a href={item.link} key={item.id} className={item.is_active ? 'active' : ''}>
          {item.text}
        </a>
      )}

    </nav>

  )
}