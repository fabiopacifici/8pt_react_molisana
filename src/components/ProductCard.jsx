import style from './ProductCard.module.css'

export default function ProductCard({ product }) {



  const { title, src } = product
  console.log(title, src);


  return (


    <div className="col">
      <div className={style.card}>
        <img src={src} alt="" />
        <h3>{title}</h3>
      </div>
    </div>

  )
}