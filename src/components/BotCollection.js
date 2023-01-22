import React from "react";
import Collection from "./BotList";

function BotCollection({bots}) {
  let botsList = bots.map((item)=> {
    return <Collection
    key={item.id} 
    name={item.name}
    health ={item.health}
    damage={item.damage}
    armor={item.armor}
    bot_class={item.bot_class}
    catchphrase={item.catchphrase}
    avatar_url={item.avatar_url}
    created_at={item.created_at}
    updated_at ={item.updated_at}
    />;
  })
  return (
   <div>
        {botsList}
        </div>
    
  );
}

export default BotCollection;