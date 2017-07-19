import React from 'react'
import { Link } from 'react-router-dom'
import { FillScope } from '../containers/FillScope'
export const FillApp = () => {
    return <div>
        <Link to='/'
            style={{
                marginLeft: '40%',
                borderRadius: '3px',
                fontSize: '2em',
                padding: '8px',
                backgroundColor: 'wheat',
                height: '30px',
                width: '100px'
            }}>return Homepage</Link>
        <h1>FillDataHere</h1>
            <FillScope />
    </div>
}

