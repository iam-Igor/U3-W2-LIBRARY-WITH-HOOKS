import { Col, Spinner } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({
  book,
  chosenBook,
  refresh,
  thingsToShow,
  isLoading,
}) => {
  return (
    <>
      {" "}
      {thingsToShow && (
        <Col key={book.elementId} className="col-9">
          <hr></hr>
          <p className="fw-bold">Comments</p>
          {isLoading && <Spinner animation="border" variant="danger" />}
          {book.map((comment) => {
            return (
              <SingleComment
                key={comment.elementId}
                book={comment}
                element={comment.elementId}
                refresh={refresh}
              />
            );
          })}
        </Col>
      )}
    </>
  );
};

export default CommentList;
