const initialState={
  carts:[]
};
const changeTheNumber=(state=initialState,action)=>{
  switch(action.type){
    case "INCREMENT": 

    const ItemIndex=state.carts.findIndex((item)=>item.id === action.payload.id);
    
    if(ItemIndex >=0 ){
      state.carts[ItemIndex].qnty+=1
    }
     else{
      const temp = {...action.payload,qnty:1}
 return{
      ...state,
      carts:[
        ...state.carts,temp
      ]
    }


    }

   
    case "DLT_ITEM":
    const data=state.carts.filter((el)=>el.id === action.payload);
    return{
      ...state,
      carts:data
    }
    
   
    default :return state;

  }
}
export default changeTheNumber;