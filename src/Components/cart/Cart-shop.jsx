    import Table from "react-bootstrap/Table";
    import { useDispatch, useSelector } from "react-redux";
    import { decreaseCount, increaseCount, DELETE } from "../../rtk/CartShop-Slice";
    import { Link } from "react-router-dom";
    import { useEffect, useState } from "react";

    function CartShop() {
    const dispatch = useDispatch();
    const Iteems = useSelector((state) => state.Cart);
    const [item, setitem] = useState()
    const totalPrice = Iteems.reduce((acc, pro) => {
        acc += pro.price * pro.quantity;
        return acc;
    }, 0);
    useEffect(() => {
        const Items = <>

                    {Iteems.map((product) => (
            <tr key={product.id}>
                <td>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch(DELETE(product))}
                >
                    Delete
                </button>
                </td>
                <td>
                <img
                    src={product.image}
                    alt="This is"
                    style={{ width: "50px", height: "50px" }}
                />
                </td>
                <td>{product.title.substring(0, 30)}</td>
                <td>
                {" "}
                <i
                    class="fa-solid fa-plus"
                    onClick={() => dispatch(increaseCount(product))}
                ></i>
                <span style={{ userSelect: "none" }}>{product.quantity} </span>
                <i
                    class="fa-solid fa-minus"
                    onClick={() => dispatch(decreaseCount(product))}
                ></i>{" "}
                </td>
                <td> {product.price} $ </td>
            </tr>
            ))}
        </>
    setitem(Items)
    }, [Iteems]);

    return (
        <Table
        striped
        bordered
        hover
        variant="dark"
        style={{ width: "70%", margin: "30px auto" }}
        >
        <thead>
            <tr>
            <th>Delete</th>
            <th>Image</th>
            <th>Title</th>
            <th>count</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
{item}
        </tbody>
        <tfoot>
            <tr>
            {totalPrice === 0 ? (
                <td colSpan={5}>
                {" "}
                <h5>There is no products</h5>{" "}
                </td>
            ) : (
                <td
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                }}
                >
                <p>total : {totalPrice.toFixed(2)} $ </p>{" "}
                <td>
                    <Link
                    to="/checkout"
                    className="btn btn-success fw-6"
                    style={{ color: "#fff" }}
                    >
                    CheckOut{" "}
                    <i
                        class="fa-solid fa-truck-fast"
                        style={{ color: "#fff" }}
                    ></i>
                    </Link>
                </td>{" "}
                </td>
            )}
            </tr>
        </tfoot>
        </Table>
    );
    }

    export default CartShop;
