import React from "react";
import Collection from "./BotList";

function BotsCollection({bots}) {
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
           
    <div className="card " >
  <div className="card-body">
 <small>
  {botsList}
 </small>
  {/* <div className="ui column">
      <div className="ui card" key={botsList.id}>
        <div className="image">
          <img alt="oh no!" src={botsList.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {botsList.name}
          </div>
          <div className="meta text-wrap">
            <small>{botsList.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {botsList.health}
          </span>

          <span>
            <i className="icon lightning" />
            {botsList.damage}
          </span>
          <span>
            <i className="icon shield" />
            {botsList.armor}
          </span>
          <span>
           
          </span>
        </div>
      </div>
    </div> */}

  </div>
</div>
</div>
       
    
  );
}

export default BotsCollection;