import React from 'react'

const Card = ({id, name, email}) => {
    return (
        <div className="card text-center zoom" style={{width: "18rem", height: "23rem"}}>
            <img alt="avatar" src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card
