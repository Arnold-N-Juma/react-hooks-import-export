import React from "react";
import howManyParks from "./parks/howManyParks";
import { wildlife, trees } from "./parks/RockyMountain";
export default function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  wildlife()
  console.log(trees)
  return <div>
    <h1>Colorado State Parks!</h1>
  
  </div> ;
}
