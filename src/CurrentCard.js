import React,{useState} from "react";
import UserCard from "./UserCard";
const CurrentCard = ()=> {
const [count, setCount] =useState(0)

const prevCard = ()=>{
  if(count>0){
    setCount(count => count-=1)
  }else{
    setCount(count => count=24)
  }
}
const nextCard = ()=>{
  if(count<24){
    setCount(count => count+=1)
  }else{
    setCount(count => count=0)
  }
}
return(
<div>
<UserCard cardId = {count}/>

<div className="footer">
<button className ="navBtn" id="prevBtn" onClick={prevCard}> &lt; Previous</button>
<button className="updateBtn">Edit</button>
<button className="updateBtn">Delete</button>
<button className="updateBtn">New</button>
<button className ="navBtn" id="nextBtn" onClick={nextCard}>Next &gt;</button>
</div>
</div>
);
}

export default CurrentCard;