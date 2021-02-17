import React from 'react'

export default (props) => {
    const { data } = props
    const style = {
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
    }

    const titleContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
    
    return (
        <div style={style}>
            <div style={titleContainerStyle}>
                <h1>{data.title}</h1>
                <h4>{data.date}</h4>
                <h4>{data.copyright}</h4>
            </div>
            <p>{data.explanation}</p>
        </div>
    )
}