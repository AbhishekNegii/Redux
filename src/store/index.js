import {createStore} from "redux"

const counterReducer=(state={counter:0}, action)=>{
   let counter; 
    if(action.type==="increment")
    {
        return{
          counter: counter.state+1
        }
    }
    if(action.type==="decrement"){
        return {
            counter:counter.state-1
        }
    }
    
    return state;
}

const store=createStore(counterReducer)

export default store;


