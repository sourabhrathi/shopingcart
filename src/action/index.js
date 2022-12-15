export const incNumber=(item)=>{
    return{
        type:"INCREMENT",
        payload:item
    }
}

export const DLT=(id)=>{
      return{
        type:"DLT_ITEM",
        payload:id
      }
}