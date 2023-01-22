import React, { useEffect, useState } from "react";

function Display() {
  let [bots, setBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000")

      .then((resp) => resp.json())
      .then(bots => setBots(bots))
  }, [])

  return (
    
 
  )
}

export default Display;