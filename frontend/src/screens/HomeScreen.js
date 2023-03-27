import products from '../data/products'
import { Row, Col } from 'react-bootstrap'
import React from 'react';
import Product from '../components/Product';


function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);
    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
        {props.children}
      </div>
    );
  }

function HomeScreen() {

    return (

        <div>
            <Row>
    
                {products.map(product => (
                    <Col sm={12} md={6} lg={4} xl={3} variant='$primary' 
                    key={product._id}>
                        <FadeInSection>
                        <Product product={product} /> 
                        </FadeInSection>
                      
                    </Col>
                ))}
           

            </Row>
        </div>

    
    );
}

export default HomeScreen;