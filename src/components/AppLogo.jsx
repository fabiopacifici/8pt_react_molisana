import molisanaLogo from '../assets/img/logo.png'

export default function AppLogo({ slogan }) {

  console.log(slogan);
  
  return (
    <>
      <img width={'240'} src={molisanaLogo} alt="" />
      {slogan && <p>{slogan}</p>}
    </>
  )
}