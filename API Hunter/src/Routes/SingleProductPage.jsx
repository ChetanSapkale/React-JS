import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Components/Loader"



function SingleProductPage(){
    const {id}=useParams()
    const [data,setdata]=useState({})
    const [loading,setloading]=useState(false)
 
    useEffect(()=>{
        setloading(true)
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
        .then((res)=>{
            setloading(false)
            setdata(res.data.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return loading ? <Loader/> : (
        
        <div data-testid="products-container" >   
            <div>
                <h2 data-testid="product-brand">{data.brand}</h2>
            </div>
            <div >
            <img src={data.img}data-testid="product-image" style={{height:"500px"}}/>
            </div>
            <div data-testid="product-category"><h3>{data.category}</h3>
            </div>
           
            <div data-testid="product-details"><b>{data.details}</b>
            </div><br />
            <div data-testid="product-price"><h3>{data.price}$</h3>
            </div>
          
            </div>
    )
}
export default SingleProductPage