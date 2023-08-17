    import React,{useState , useEffect} from 'react'
    import { useDispatch } from 'react-redux';
    import { useParams } from 'react-router-dom'
    import {ADD} from '../../rtk/CartShop-Slice'

    export default function Product() {

        const {id} = useParams();

    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`).then(respo => respo.json())
        .then(data => {
            setProduct(data)
        })
    },[id])


        return (
        <div className="container py-5 d-flex">
            <div className="col-6 ">
            <img
                src={Product.image}
                alt=""
                style={{ width: "100%", height: "70vh", objectFit: "contain" }}
            />
            </div>

            <div className="details col-6">
            <h5 className="py-5">{Product.category} .</h5>
            <h6 className="rating">
                Rating : {Product.rating && Product.rating.rate}{" "}
                <i className="fa-solid fa-star"></i>
            </h6>
            <h1 className="title">{Product.title}</h1>
            <h6> ${Product.price}</h6>
            <p className="Desc lead py-5">{Product.description}</p>
            <button
                className="btn btn-outline-success"
                onClick={() => dispatch(ADD(Product))}
            >
                ADD To Cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
            </div>
        </div>
        );
    }
