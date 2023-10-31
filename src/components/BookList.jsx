import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";

import history from "../data/history.json";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import CommentArea from "./CommentArea";

const BookList = () => {
  const [searchIndex, setSearchIndex] = useState("");
  const [selected, setSelected] = useState(false);
  const [book, setBook] = useState(scifi);
  const [elementID, setElementID] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const handleSearch = (value) => {
    setSearchIndex(value);
  };

  const handleClick = (value) => {
    setBook(value);
  };

  const changeSelect = (elemID) => {
    setElementID(elemID);
    setSelected(!selected);
  };

  const changeLoadingState = (param) => {
    setIsloading(param);
  };

  const filteredBooks = book.filter((book) =>
    book.title.toLowerCase().includes(searchIndex.toLowerCase())
  );

  return (
    <Container fluid>
      <Form className="d-flex w-50">
        <Form.Control
          type="text"
          placeholder="Type something.."
          className=" mr-sm-2  me-2"
          value={searchIndex}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Form>
      <Row>
        <Col>
          <h1 className="text-center">Select category</h1>
          <ul className="d-flex list-unstyled justify-content-evenly fw-bold">
            <li onClick={() => handleClick(history)}>History</li>
            <li onClick={() => handleClick(fantasy)}>Fantasy</li>
            <li onClick={() => handleClick(horror)}>Horror</li>
            <li onClick={() => handleClick(romance)}>Romance</li>
            <li onClick={() => handleClick(scifi)}>Scifi</li>
          </ul>
        </Col>
      </Row>
      <Container fluid className="flex-row d-flex ">
        <Row className="w-75">
          {filteredBooks.map((book, index) => {
            return (
              <Col md={3} xs={6} lg={3} className="my-2" key={index}>
                <SingleBook
                  book={book}
                  selected={changeSelect}
                  isLoading={changeLoadingState}
                  loadingState={isLoading}
                />
              </Col>
            );
          })}
        </Row>

        <CommentArea
          book={elementID}
          chosenBook={book}
          elementId={elementID}
          isLoading={isLoading}
        />
      </Container>
    </Container>
  );
};

export default BookList;
