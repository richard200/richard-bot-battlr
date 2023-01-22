import React, { useEffect, useState } from "react";
import BotsCollection from "./BotCollection";

function Display() {
  let [bot, setBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then(bot => setBots(bot))
  }, [])

  return (
    
 <BotsCollection bots = {bot}/>
  )
}

export default Display;