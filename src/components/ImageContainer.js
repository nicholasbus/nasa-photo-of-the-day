import React from 'react'
import NasaImage from './NasaImage'
import ImageData from './ImageData'

export default (props) => {
    const { data } = props
    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
    return (
        <div style={style}>
            <NasaImage url={data.hdurl}/>
            <ImageData data={data}/>
        </div>
    )

}