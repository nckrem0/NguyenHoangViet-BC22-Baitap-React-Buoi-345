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
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Price: ${product.price}</td>
                                </tr>
                                <tr>
                                    <td>Description: {product.description}</td>
                                </tr>
                                <tr>
                                    <td>Short Description: {product.shortDescription}</td>
                                </tr>
                                <tr>
                                    <td>Quantity: {product.quantity}</td>
                                </tr>
                            </tbody>
                        </table>
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
