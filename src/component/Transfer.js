import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux';
import {incNumber} from '../action/index'

export default function Transfer(props) {
const dispatch=useDispatch()
    
const mode=props.mode;


    const [data, setdata] = useState([])
    const [item, setitem] = useState([])
const {id}=useParams();

const send=(e)=>{
dispatch(incNumber(e))
}

const fetch=()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res=>{
        setdata(res.data)
        setitem(res.data.rating)
        console.log(res.data)
    })
}

useEffect(()=>{
    fetch()
  },[])

  return (
    <>
    {mode?
    <div className='container hlw-3'>
        <div className='row '>
            <div className='col-md-5  p-5'>
            <img src={data.image} class="card-img-top" style={{width:'350px',height:'450px'}} alt="..."/>
            </div>
            <div className='col-md-7 p-5 text-light'>
                <p>Category: {data.category}</p>
                <p>Price: {data.price}</p>
                <p>Rate: {item.rate}</p>
                <p>Count: {item.count}</p>
                <p>Title: {data.title}</p>
               <button className='btn btn-danger my-4' onClick={()=>send(data)} >Add to cart</button>
            </div>
        </div>
    </div>:
    
    <div className='container hlw-31'>
    <div className='row '>
        <div className='col-md-5  p-5'>
        <img src={data.image} class="card-img-top" style={{width:'350px',height:'450px'}} alt="..."/>
        </div>
        <div className='col-md-7 p-5 text-dark'>
            <p>Category: {data.category}</p>
            <p>Price: {data.price}</p>
            <p>Rate: {item.rate}</p>
            <p>Count: {item.count}</p>
            <p>Title: {data.title}</p>
           <button className='btn btn-danger my-4' onClick={()=>send(data)} >Add to cart</button>
        </div>
    </div>
</div>
    }
    </>
  )
}
