import React from 'react'
import styled from 'styled-components'

// styled component for the nasa image
const Img = styled.img`
    width: 40%;
    margin-top: 1rem;
`

export default (props) => {
    const { url } = props
    return (
        <Img src={url} alt='nasa' />
    )
}