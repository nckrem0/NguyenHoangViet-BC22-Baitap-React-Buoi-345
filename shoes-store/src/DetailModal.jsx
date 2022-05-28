import React from "react";
import { Modal, Button } from "react-bootstrap";

function DetailModal(props) {
    const { show, handleClose, product } = props;
    return (
        <Modal show={show} onHide={() => handleClose(false)} >
            <Modal.Header >
                <div>
                    <h3 className="modal-title">{product.name}</h3>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <img src={product.image} alt={product.name} className="card-img" width="100%" height="300px" />
                    <div>
                        <h5>Product Details</h5>
                        <p className="card-text"><span style={{fontWeight: "bold"}}>Price: </span><span style={{color:"red"}}>${product.price}</span></p>
                        <p className="card-text"><span style={{fontWeight: "bold"}}>Short Description: </span> {product.shortDescription}</p>
                        <p className="card-text"><span style={{fontWeight: "bold"}}>Description: </span>{product.description}</p>
                        <p className="card-text"><span style={{fontWeight: "bold"}}>Quantity: </span>{product.quantity}</p>

                    </div> 
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailModal;
