import React from "react";
import { Card } from "react-bootstrap";
import '../components/components.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded card-height">

            <a href={`/product/${product._id}`}>
                <Card.Img className="image-resize" src={product.image} />
            </a>
            <Card.Body>
                <Card.Title as="div">
                    <strong>
                        {product.name}
                    </strong>

                </Card.Title>
                <Card.Text>
                    <div className="my-2">
                    <FontAwesomeIcon className="star-color" icon={faStar} /> {product.rating}
                    </div>
                </Card.Text>
            </Card.Body>



        </Card>
    )

}
export default Product