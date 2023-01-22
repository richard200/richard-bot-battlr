import React from "react";

// const botTypeClasses = {
//   Assault: "icon military",
//   Defender: "icon shield",
//   Support: "icon plus circle",
//   Medic: "icon ambulance",
//   Witch: "icon magic",
//   Captain: "icon star",
// };

function BotCard({ bot }) {
  return (

 <div className="card col-4">
    <div className="card-body">
 
   
          <h3 className="date">Name: {bot.name}</h3>
        
          <h3 className="description">Description: {bot.health}</h3>
       
          <h3 className="category">Damage: {bot.damage}</h3>
       
          <h3 className="amount">Armor: {bot.armor}</h3>
       
        {/* <th>
          <h3 className="amount">BotClass: {bot.bot_class}</h3>
        </th> */}
     
          <h3 className="amount"></h3>
          <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            {/* Catchphrase: {bot.catchphrase}</h3> */}
      
      
          <img src={bot.avatar_url} alt="url" className="img"> 

          </img>
        
        {/* <th>
          <h3 className="amount">Created At: {bot.created_at}</h3>
        </th>
        <th>
          <h3 className="amount">Updated At: {bot.updated_at}</h3>
        </th> */}
 
  </div>
  </div>
   );
  }

  export default BotCard;
//   return (
//     <div className="ui column">
//       <div className="ui card" key={bot.id} onClick={() => clickEvent(bot)}>
//         <div className="image">
//           <img alt="oh no!" src={bot.avatar_url} />
//         </div>
//         <div className="content">
//           <div className="header">
//             {bot.name}
//             <i className={botTypeClasses[bot.bot_class]} />
//           </div>
//           <div className="meta text-wrap">
//             <small>{bot.catchphrase}</small>
//           </div>
//         </div>
//         <div className="extra content">
//           <span>
//             <i className="icon heartbeat" />
//             {bot.health}
//           </span>

//           <span>
//             <i className="icon lightning" />
//             {bot.damage}
//           </span>
//           <span>
//             <i className="icon shield" />
//             {bot.armor}
//           </span>
//           <span>
//             <div className="ui center aligned segment basic">
//               <button
//                 className="ui mini red button"
//                 onClick={(event) => {
//                   event.stopPropagation();
//                   deleteBot(bot);
//                 }}
//               >
//                 x
//               </button>
//             </div>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BotCard;
// import React from "react";

//  <div className="card">
//     <div className="card-body">

// <div className="row">
// <div className="col">
//         <span>Name: {name}</span>
//         </div>
//         <div className="col">
//         <span>Health: {health}</span>
//         </div>
//         <div className="col">
//         <span>Damage: {damage}</span>
//         </div>
//         <div className="col">
//         <span>Armor: {armor}</span>
//         </div>
//         <div className="col">
//         <span>Class: {bot_class}</span>
//         </div>
//         <div className="col">
//         <span>Catchphrase: {catchphrase}</span>
//         </div>
//         <div className="col">
//         <span>Image: {avatar_url}</span>
//         </div>
//         <div className="col">
//         <span>Created: {created_at}</span>
//         </div>
//         <div className="col">
//         <span>Updated: {updated_at}</span>
//         </div>
//         {/* <td>{amount}</td> */}
      
//     </div>
//     </div>
//     </div>
  
