import React, { useState } from 'react'

const Clock = () => {
    const [fecha, setFecha] = useState();

    setInterval(() => {
        // let today = new Date()
        // const dmy = today.getDay() + today.getFullYear() + '/' + (today.getMonth() +1) + '/' + today.getDate();
        return setFecha(Date().toLocaleString())
        // return setFecha(dmy)
    }, 1000);

    return (
        <div className='date-container text-center text-info border-0 mt-4'>
            <p>{fecha}</p>
        </div>
    )
}

export default Clock