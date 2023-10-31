import {Col} from "react-bootstrap"


const MyFooter =()=> {
    return(

<footer className="bg-primary flex-column align-items-center text-white mt-5 d-flex">
    <Col md={4} className="text-center">
<p>My react-library© 2023</p>
    </Col>
    <Col md={2} xs={8}>
    <ul className="list-unstyled d-flex justify-content-between">
        <li>About</li>
    <li>Contacts</li>
    <li>Work with us</li></ul>
    </Col>
</footer>




    )
}

export default MyFooter