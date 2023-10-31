import { Col, Row } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

const CommentArea = ({ book, chosenBook, elementId, isLoading }) => {
  // state = {
  //   allComments: [],
  //   isLoading: true,
  // };

  const [allComments, setAllComments] = useState([]);
  const [isLoading2, setIsloading] = useState(true);

  const getComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + book, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGJkMWY2ZTNkZDAwMTQ5NWU0MzQiLCJpYXQiOjE2OTgzMTkzMTQsImV4cCI6MTY5OTUyODkxNH0.q1fd5b4QJ1ktJteiPZJeY_CF5ZVC-sQi71fC1JR-8k8",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {
        console.log(data);
        const comments = data.map((singleComm) => ({
          comment: singleComm.comment,
          rate: singleComm.rate,
          elementId: singleComm._id,
        }));

        // this.setState({
        //   allComments: comments,
        //   isLoading: false,
        // });
        setAllComments(comments);
        setIsloading(false);
      })
      .catch((err) => {
        console.log("errore", err);
      });
  };

  // componentDidMount() {
  //   this.getComments();
  // }

  useEffect(() => {
    getComments();
  }, []);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.book !== this.props.book) {
  //     this.getComments();
  //   }
  // }

  useEffect(() => {
    getComments();
  }, [book]);

  return (
    <Row className="flex-column align-items-center pb-3 w-25">
      {elementId && (
        <>
          {" "}
          <CommentList
            book={allComments}
            chosenBook={chosenBook}
            refresh={getComments}
            thingsToShow={book}
            isLoading={isLoading}
          />
          <AddComment book={book} refresh={getComments} />
        </>
      )}
      {elementId === "" && (
        <>
          <Col className="text-center ">
            <h3>Comments</h3>
            <p className="fw-bold">No comments here</p>
            <p>Select a book to see comments and add yours</p>
          </Col>
        </>
      )}
    </Row>
  );
};

export default CommentArea;
