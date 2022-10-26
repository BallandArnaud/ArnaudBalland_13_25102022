import { Link } from 'react-router-dom'
import './index.css'

function Error() {
  return (
    <main className="main errorPage">
      <h1>404 Error</h1>
      <h5>It seems this page no longer exists.</h5>
      <Link to="/">Go back to home page</Link>
    </main>
  )
}

export default Error
