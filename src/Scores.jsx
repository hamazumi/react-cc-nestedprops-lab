import React, {Component} from 'react'

class Score extends Component {
    render() {
        return(
            <div>
               <h4>Score: {this.props.socre}</h4>

               <h6> Date: {this.props.date}</h6>
            </div>
        )
    }
}




export default Score