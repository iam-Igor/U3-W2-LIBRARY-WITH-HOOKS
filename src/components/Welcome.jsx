import { Row, Col,Alert } from "react-bootstrap"

const Welcome = ()=> {


return(

    <Row className="mt-3">
<Col>
{[
        'primary',
       
      ].map((variant) => (
        <Alert key={variant} variant={variant} className="text-center">
          Welcome in my first React Library powered by Bootstrap-React!
          
        </Alert>
      ))}
</Col>

    </Row>

)
}

export default Welcome