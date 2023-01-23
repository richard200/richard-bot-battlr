import React, { useEffect, useState } from "react";
import BotsCollection from "./BotCollection";
import BotListArmy from "./YourBotArmy";
function Display() {
  let [bots, setBot] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then(bots => setBot(bots))
  }, [])

  const enlistBot= (bot)=>{
    setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:true} : b)))
}
const removeBot =(bot)=>{
    setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:false} : b)))
}

const deleteBot = (bot)=>{
    const botRemoved =  bot.filter((b)=> b.id !==bot.id);
    setBot((bots)=>botRemoved)
}
  return (
    <div>
    <BotListArmy
            bots={bots.filter((b)=>b.army)}
            removeBot={removeBot}
            deleteBot={deleteBot}
            
            />
 <BotsCollection bots= {bots}
            enlistBot={enlistBot}
            deleteBot={deleteBot}
 />
 </div>
  )
}

export default Display;