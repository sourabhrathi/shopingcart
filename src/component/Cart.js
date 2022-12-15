import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux"
import { DLT } from "../action";
import { useEffect } from "react";


const Cart = () => {
    const [price, setprice] = useState(0);

    const dispatch=useDispatch();

    const dlt=(id)=>{
 dispatch(DLT(id))
    }

  

    const value = useSelector((state) => {
        return (
            state.changeTheNumber.carts
        )
    })

    const total=()=>{
        let price=0;
       
        value.map((ele,k)=> {
            price=ele.price+price
        })
        setprice(price);
    };
    
    useEffect(()=>{
      total();
    },[])
    


    const data = value.length;
    return (
<>

            <div className="flex-basics-1 ">
       
           


            {data === 0 ? <h1>No data is available</h1> : <>
             
                        <div className='container hlw-abc'>
                            <h2 className="text-center" style={{color:'white'}}>Carts Item<hr/></h2>
                        <div className='row '>
                        {value.map((e, index) => {
                    return (
                        <>
                            <div className='col-md-4 mx-5 p-3'>
                            <img src={e.image} class="card-img-top" style={{width:'250px',height:'250px'}} alt="..."/>
                            </div>
                            <div className='col-md-5 p-3  text-light'>
                      
                                <p>Category: {e.category}</p>
                                <p>Price: {e.price}</p>
                                <p><strong>Quantity: {e.qnty}</strong></p>

                            <p><strong>Total:</strong>350</p>
                             
                            <div className="row my-1">
                                <div className="col-md-4">
                                    <div className="d-flex">
                                    <button className="btn btn-primary">-</button>
                                    <input type="text" style={{width:'100px'}} className="text-center" value={e.qnty}></input>
                                    <button className="btn btn-success">+</button>
                                    </div>
                                    <div className="my-1">
                                    <button className="btn btn-danger" onClick={()=>dlt(e.id)}>Remove</button>
                                </div>
                               
                                </div>
                              
                            </div>
                            
                            <hr/>
                            </div>
                        
                            </>
                            )
                       
                })}

                        </div>
                        <div className="row text-center bg-danger">
               <div className="col-md-12 text-white ">
               <p style={{fontSize:'30px',padding:'5px'}}>Total={price}</p> 
               </div>
           
           </div>
                    </div>
            
               </>
               
           
               
               }

                

                

        </div>

            
   </>
    )
}

export default Cart;