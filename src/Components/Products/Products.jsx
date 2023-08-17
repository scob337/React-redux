    import { useState, useEffect } from "react";
    import Card from "react-bootstrap/Card";
    import { useDispatch } from "react-redux";
    import { NavLink } from "react-router-dom";
    import { ADD } from "../../rtk/CartShop-Slice";

    function Products() {
    const dispatch = useDispatch();
    const [Data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((respo) => respo.json())
        .then((data) => {
            setData(data);
        });
    }, []);

    return (
        <>
        <div className="container row d-flex mx-auto justofy-content-center align-items-center mt-5">
            <h1
            className="title fw-bolder d-flex justify-content-center py-3 btn btn-dark"
            style={{ width: "100%" }}
            >
            New Products
            </h1>
            <div
            className="row d-flex justify-content-center"
            style={{ width: "100%" }}
            >
            {Data.map((el) => {
                return (
                <div
                    className="d-flex justify-content-center col-lg-3 col-md-4 col-sm-6   col-xs-12 text-align-center"
                    key={el.id}
                >
                    <Card style={{ width: "15rem" }}>
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
                        <Card.Text>{el.description.substring(0, 35)}</Card.Text>
                        <p className="lead fw-bold">${el.price}</p>
                        <div className="buttons d-flex gap-2">
                        <NavLink
                            to={`/products/${el.id}`}
                            className="btn btn-outline-success"
                            style={{ fontSize: "11px ", fontWeight: "700" }}
                        >
                            Viwe Details{" "}
                            <i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                        <button
                            className="btn btn-outline-success"
                            style={{ fontSize: "11px ", fontWeight: "700" }}
                            onClick={() => dispatch(ADD(el))}
                        >
                            ADD To Card
                        </button>
                        </div>
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

    export default Products;
