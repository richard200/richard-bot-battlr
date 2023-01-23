import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot, deleteBot }) {
  // Your code here
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={addBot}
        deleteBot={deleteBot}
       
      />
    );
  });
  return (
    <div className="container mt-4">
      <div className="row">
      
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;

// import React from "react";
// // import Collection from "./BotCard";

// function BotsCollection({bot}) {
//   // let botsList = bots.map((item)=> {
//   //   return <Collection
//   //   key={item.id} 
//   //   name={item.name}
//   //   health ={item.health}
//   //   damage={item.damage}
//   //   armor={item.armor}
//   //   bot_class={item.bot_class}
//   //   catchphrase={item.catchphrase}
//   //   avatar_url={item.avatar_url}
//   //   created_at={item.created_at}
//   //   updated_at ={item.updated_at}
//   //   />;
//   // })
//   return (
//     <table className="table">
//     <tbody>
//       <tr>
//         <th>
//           <h3 className="date">{bot.name}</h3>
//         </th>
//         <th>
//           <h3 className="description">{bot.health}</h3>
//         </th>
//         <th>
//           <h3 className="category">{bot.damage}</h3>
//         </th>
//         <th>
//           <h3 className="amount">{bot.armor}</h3>
//         </th>
//         <th>
//           <h3 className="amount">{bot.bot_class}</h3>
//         </th>
//         <th>
//           <h3 className="amount">{bot.catchphrase}</h3>
//         </th>
//         <th className="avatarimg">
//           <img src={bot.avatar_url} alt="url" className="img">

//           </img>
//         </th>
//         <th>
//           <h3 className="amount">{bot.created_at}</h3>
//         </th>
//         <th>
//           <h3 className="amount">{bot.updated_at}</h3>
//         </th>
//       </tr>
//       {/* {botsList} */}
//     </tbody>
//   </table>
//    );
//   }

//   export default BotsCollection;
//     <div className="container mt-4">
// <div className="row">
  
//    {botsList}


// </div>

// </div>

//     <div className='col-3 p-2'>
           
//     <div className="card">
//   <div className="card-body">

//   {botsList}
//   </div>

 
// </div>
// </div> 
    
