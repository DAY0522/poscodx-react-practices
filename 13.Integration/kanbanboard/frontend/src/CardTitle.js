import React, {useEffect, useState} from "react";
import {Card_Title, Card_Title_Open} from "./assets/scss/CardTitle.scss";

function CardTitle({title}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return <div className={`${Card_Title} ${isOpen ? Card_Title_Open : ""}`}
                onClick={handleClick}>{title}</div>;
}

export default CardTitle;
