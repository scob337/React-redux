    import React, { useState } from "react";
    // import { useSelector } from "react-redux";
    import { Col, Row } from "react-bootstrap";
import './checkout.css';
import { useSelector } from "react-redux";

    export default function CheckOut() {
    // const Iteems = useSelector((state) => state.Cart);
    // const totalPrice = Iteems.reduce((acc, pro) => {
    //     acc += pro.price * pro.quantity;
    //     return acc;
    // }, 0);

    const [Hide , setHide ] = useState(true);

    const Iteems = useSelector((state) => state.Cart)
    const totalPrice = Iteems.reduce((acc , pro) =>{
        acc += pro.price * pro.quantity
        return acc
    },0)

        const ShowAlert = ()=>{
            setHide(false)
            setTimeout(()=>{
                setHide(true)
                document.location.replace('/')
            }, 4000)
        }
    return (
        <>
        <Row className="check-container  ">
            <Col className="Iteems-total ">
            <div className="headr">
                <h1>Total Price : {totalPrice.toFixed(2)} $</h1>
            </div>
            <div className="items">
                <div className="titles">
                    <h6>Image</h6>
                    <h6>Title</h6>
                    <h6>Count</h6>
                </div>
                {Iteems.map(el => {
                    return(
                        <>

                        <div className="item">
                            <div className="img">
                                <img src={el.image} alt="" />
                            </div>
                            <div className="title">
                                <h3>{el.title.substring(0,30)}</h3>
                            </div>
                            <h5 className="count">
                            {el.quantity} x
                            </h5>
                        </div>
                        </>
                    )
                })}
            </div>
            </Col >
            <Col className="Credit-info ">
            <div className="head">
                <h1 className="title-payment">Payment Method</h1>
                <img
                src="https://png.pngitem.com/pimgs/s/535-5353928_payments-mastercard-visa-paypal-american-express-hd-png.png"
                alt="Payment-Methods"
                
                />
            <div id="Done" className={Hide? "Alert" : "Alert active"}  >
        <h3>Your Order has been confirmed</h3>
        <h6>
        Your Order has been confirmed successfully
You will be contacted within one day
        </h6>
        </div>
            </div>
            <div className="inputs">
                <div className="input">
                <label htmlFor="name">Card holder Name</label>
                <input type="text" id="name" />
                </div>
                <div className="input credits">

                <div className="input">
                <label htmlFor="credit">Credit Card number</label>
                <input type="number" id="credit"  />
                </div>


                <div className="input-cvv input">
                    <label htmlFor="cvv">CVV number</label>
                    <input type="number" id="cvv" maxLength={"3"} />
                    </div>

                    </div>

                    <div className="input">
                <label htmlFor="exp">Expiration date</label>
                <input type="date" id="exp" />
                </div>
                
        <button 
        onClick={()=> ShowAlert()}
        className="btn  w-50 my-auto fw-700" style={{backgroundColor:"#bd8532bb" , color:"#fff" , fontWeight:"700", fontSize:"20px"}}> Submit Order</button>
            </div>
            </Col>
        </Row>
        </>
    );
    }
