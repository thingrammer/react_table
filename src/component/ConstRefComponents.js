import React from 'react'
import { Button } from './Widget'
// import { CSSTransitionGroup } from 'react-transition-group'

export class ConstRefBox extends React.Component {
    componentDidMount() {
        this.props.getHeads(this.props.tableName)
    }
    render() {
        console.log(this.props.fieldList)
        console.log('refData', this.props.cRefData)
        const props = this.props
        return <div>
            <h2>{props.tableName}</h2>
            <ul>
                {props.fieldList &&
                    Object.entries(props.fieldList).map(
                        field => <li key={field}>{field[0] + '-------' + field[1]}</li>
                    )}
            </ul>
            <ul>
                {!this.props.cRefData ||
                    this.props.cRefData.reference.map(ele => Object.entries(ele)[0]).
                        map(ele => {
                            return < li key={ele[0]} >
                                {ele[1][0]}
                                <ul>
                                    {ele[1][1].map(e =>
                                        <li key={e}>
                                            {e}
                                        </li>
                                    )}
                                </ul>
                            </li>
                        })}
            </ul>
        </div>
    }
}