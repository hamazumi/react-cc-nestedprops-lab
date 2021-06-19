import React, {Component} from 'react'
import Score from './Scores.jsx'

class Student extends Component {
    render() {
        const scores = this.props.scores.map((score, index) => {
            return <Score
                date={score.date}
                score={score.score}
                key={index}
            />
        })
        return(
            <div>
                <h1>Students Name: {this.props.name}</h1>

                <p>BIO: {this.props.bio} </p>

                {scores}
            </div>
        )
    }
}


export default Student