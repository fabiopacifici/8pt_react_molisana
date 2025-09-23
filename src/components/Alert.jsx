export default function Alert({ type, children }) {

  console.log(type);


  return (
    <div className={`alert bg-${type}`}>
      {/* Children go here */}
      {children}
    </div>
  )
}