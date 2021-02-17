import React from 'react'

export default (props) => {
    const { url } = props
    const style = {
        width: '40%',
        marginTop: '1rem'
    }
    return (
        <img src={url} alt='nasa' style={style} />
    )
}