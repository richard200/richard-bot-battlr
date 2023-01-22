import React from "react";

function Collection({
    name, health, damage, armor, bot_class, 
    catchphrase, avatar_url, created_at, updated_at}) {
    return (
      
 <div className="card">
    <div className="card-body">

<div className="row">
<div className="col">
        <span>Name: {name}</span>
        </div>
        <div className="col">
        <span>Health: {health}</span>
        </div>
        <div className="col">
        <span>Damage: {damage}</span>
        </div>
        <div className="col">
        <span>Armor: {armor}</span>
        </div>
        <div className="col">
        <span>Class: {bot_class}</span>
        </div>
        <div className="col">
        <span>Catchphrase: {catchphrase}</span>
        </div>
        <div className="col">
        <span>Image: {avatar_url}</span>
        </div>
        <div className="col">
        <span>Created: {created_at}</span>
        </div>
        <div className="col">
        <span>Updated: {updated_at}</span>
        </div>
        {/* <td>{amount}</td> */}
      
    </div>
    </div>
    </div>
  
    );
  }
  
  export default Collection;