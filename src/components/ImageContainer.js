import React from 'react'
import NasaImage from './NasaImage'
import ImageData from './ImageData'
import styled from 'styled-components'

// styled component for wrapper div
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default (props) => {
    const { data } = props

    return (
        <Div>
            <NasaImage url={data.hdurl}/>
            <ImageData data={data}/>
        </Div>
    )

}