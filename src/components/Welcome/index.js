// Write your code here
import Component from 'react'
import './index.css'

class Welcome extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you!Happy Learning</p>
        <div>
          <button className="btn-style" type="button">
            Subscribe
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
