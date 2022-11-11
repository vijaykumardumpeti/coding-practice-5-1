// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  btnFunction = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state

    const btnText = isSubscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you!Happy Learning</p>
        <div>
          <button
            onClick={this.btnFunction}
            className="btn-style"
            type="button"
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
