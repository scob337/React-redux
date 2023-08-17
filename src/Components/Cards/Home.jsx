    import { useState, useEffect } from "react";
    import Card from "react-bootstrap/Card";
    import Header from "../Header";
    import { NavLink } from "react-router-dom";
import { ADD } from "../../rtk/CartShop-Slice";
import { useDispatch } from "react-redux";
function Home() {
    const [Data, setData] = useState([]);
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((respo) => respo.json())
        .then((data) => {
            setData(data);
        });
    }, []);
    
    const dispatch = useDispatch()
    return (
        <>
        <Header />
        <div className="container row d-flex mx-auto justify-content-center align-items-center">
            <h1 className="d-flex justify-content-center fs-60" style={{ borderRadius:"20px", background:"#777" , padding:"20px" , color:"#fff"}} >
            Hot Products !!
            </h1>
            <div
            className="row d-flex justify-content-center flex-wrap-wrap"
            style={{ width: "100%" }}
            >
            {Data.map((el) => {
                return (
                <div className=" col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center" key={el.id}>
                    <Card style={{ width: "17rem" }}>
                    <Card.Img
                        variant="top"
                        src={el.image}
                        alt={el.title}
                        title={el.title}
                        draggable="false"
                    />
                    <Card.Body>
                        <Card.Title title={el.title} className="fs-13">
                        {el.title.substring(0, 15)}...{" "}
                        </Card.Title>
                        <Card.Text title={el.description.substring(28,100)}>{el.description.substring(0, 40)} ...</Card.Text>
                        <p className="lead fw-bold">${el.price}</p>

                        <NavLink
                        to={`/products/${el.id}`}
                        className="btn btn-outline-success"
                        style={{ fontSize:"13px" ,fontWeight: "700"}}
                        >
                        Buy Now! <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                        <button
                        className="btn btn-outline-success"
                        style={{ fontSize: "13px ", fontWeight: "700" , marginLeft:"5px" }}
                        onClick={() => dispatch(ADD(el))}
                        >
                        ADD To Card
                        </button>
                    </Card.Body>
                    </Card>
                </div>
                );
            })}
            </div>
        </div>
        </>
    );
    }

    export default Home;
