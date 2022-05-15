import React from "react";
const Card = (props) => {
    const {name, email , id , phone} = props;
    return (

        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src = {`https://robohash.org/${id}?200x200`} alt="robot"/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
                <span>ID : {props.id}</span>
                <p>Phone : {phone}</p>
            </div>
        </div>

    );

}

export default Card;