import React, {useEffect, useState} from "react";
import Card from "./Card";
import {Card_List} from "./assets/scss/CardList.scss";
import data from "./assets/json/data";
import card from "./Card";

function CardList() {

    const [cards, setCards] = useState(null);
    const [todoCards, setTodoCards] = useState(null);
    const [doingCards, setDoingCards] = useState(null);
    const [doneCards, setDoneCards] = useState(null);

    const fetchCards = async () => {
        try {
            const response = await fetch("/kanbanboard/card", {
                method: "get",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: null,
            });

            const jsonResult = await response.json();

            if (!response.ok || jsonResult.response === 'fail') {
                throw new Error(`${response.status} ${jsonResult.message}`);
            }

            setCards(jsonResult.data);
            setTodoCards(jsonResult.data.filter(card => card.status === "ToDo"));
            setDoingCards(jsonResult.data.filter(card => card.status === "Doing"));
            setDoneCards(jsonResult.data.filter(card => card.status === "Done"));

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <>
            <div className={Card_List}>
                <h1>To Do</h1>
                {todoCards?.map((card) => (
                    <Card
                        no={card.no}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <div className={Card_List}>
                <h1>Doing</h1>
                {doingCards?.map((card) => (
                    <Card
                        no={card.no}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <div className={Card_List}>
                <h1>Done</h1>
                {doneCards?.map((card) => (
                    <Card
                        no={card.no}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </>
    );
}

export default CardList;
