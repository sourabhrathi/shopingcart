import axios from 'axios'
import React,{useState} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function App(props) {
  const mode=props.mode;

  const [data, setdata] = useState([])
  const [item, setitem] = useState([])

  const fetch=()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      setdata(res.data)
      console.log(res.data)
    })
  }

  const fetch2=()=>{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res=>{
      setitem(res.data)
    })
  }

  useEffect(()=>{
    fetch()
    fetch2()
  },[])

  const handleclick=(e)=>{
    axios.get(`https://fakestoreapi.com/products/category/${e}`)
    .then((res)=>{
      setdata(res.data)
    })
  }
  
  return (
    <>

    <div className={mode?' mt-sld':'mt-sld-1'}>
{mode?
        <div className=''>
        <div className='row mx-2 text-center'>
            <div className='col-md-12'>
                <h1 className='text-white'>store<hr/></h1>
            </div>
        </div>
<div className='row text-center'>
  <div className='col-md-6 d-flex justify-content-between'>
  {item.map((e,index)=>{
                            return(
                                <p className="cate-box " style={{cursor:'pointer',color:'white',textDecoration:'underline'}} onClick={()=>handleclick(e)} key={index}>{e}</p>
                            )
                        })}
  </div>
</div>

        <div className='row '>
{data.map((e)=>{
  return(
    
   
    <div className='col-md-4 my-2 '>
      <Link to={`transfer/${e.id}`} style={{textDecoration:'none'}}>
        
    <div class="card mx-3 black-wat"  style={{width: "18rem"}}>
    <img src={e.image} class="card-img-top black-wat" alt="..." height="300px"/>
    <div class="card-body ">
      <h5 class="card-title text-white">{e.category}</h5>
      <p class="card-text text-white">{e.description.slice(0,100)}.</p>
     <div className='row'>
      <div className='col-md-12 d-flex justify-content-between'>
        <p style={{color:'red'}}>Price:{e.price}</p>
     
     </div>
     </div>
    </div>
 </div>
 
 </Link>
  </div>
  

  
  )
})}

    </div>
    </div>:

<div className=''>
<div className='row mx-2 text-center'>
    <div className='col-md-12'>
        <h1 className='text-dark'>store<hr/></h1>
    </div>
</div>
<div className='row text-center'>
<div className='col-md-6 d-flex justify-content-between'>
{item.map((e,index)=>{
                    return(
                        <p className="cate-box " style={{cursor:'pointer',color:'white',textDecoration:'underline'}} onClick={()=>handleclick(e)} key={index}>{e}</p>
                    )
                })}
</div>
</div>

<div className='row '>
{data.map((e)=>{
return(


<div className='col-md-4 my-2 '>
<Link to={`transfer/${e.id}`} style={{textDecoration:'none'}}>

<div class="card mx-3 black-wat-1"  style={{width: "18rem"}}>
<img src={e.image} class="card-img-top black-wat" alt="..." height="300px"/>
<div class="card-body ">
<h5 class="card-title text-dark">{e.category}</h5>
<p class="card-text text-dark">{e.description.slice(0,100)}.</p>
<div className='row'>
<div className='col-md-12 d-flex justify-content-between'>
<p style={{color:'red'}}>Price:{e.price}</p>

</div>
</div>
</div>
</div>

</Link>
</div>



)
})}

</div>
</div>

}


    </div>
    </>
  )
}



