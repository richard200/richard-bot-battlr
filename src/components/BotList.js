import React from "react";

function Collection({
    name, health, damage, armor, bot_class, 
    catchphrase, avatar_url, created_at, updated_at}) {
    return (
      <tr>
        <td>{name}</td>
        <td>{health}</td>
        <td>{damage}</td>
        <td>{armor}</td>
        <td>{bot_class}</td>
        <td>{catchphrase}</td>
        <td>{avatar_url}</td>
        <td>{created_at}</td>
        <td>{updated_at}</td>
        {/* <td>{amount}</td> */}
      </tr>
    );
  }
  
  export default Collection;