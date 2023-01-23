import React from "react";
import BotCard from "./BotCard";

function BotListArmy ({bots, removeBot, deleteBot}){

    const botArmy =  bots.map((bot)=>{
        return (
            <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={removeBot}
            deleteBot={deleteBot}
            />
        )
    })

    return(
        <div className= 'd-block p-2 bg-dark text-white army'>
            <strong>RICHARD'S BOT ARMY</strong>
            <div className="container mt-5">
                <div className="row army-row">
                    {botArmy}
                </div>
            </div>
        </div>
    )
}

export default BotListArmy