import style from './ProductCard.module.css'

export default function ProductCard({name, image}){

  console.log(name, image);
  

  return (
    <div className={style.card}>
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  )
}