import './index.css'

function Greeting({ firstName, lastName }) {
  return (
    <h1 className="greeting">
      Welcome back
      <br />
      {firstName} {lastName}!
    </h1>
  )
}

export default Greeting
