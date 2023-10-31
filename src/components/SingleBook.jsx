import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const SingleBook = ({ book, selected, isLoading, loadingState }) => {
  // state = {
  //   selected: false,
  // };

  const [selected2, setSelected] = useState(false);

  const handleClickcard = () => {
    // this.setState({
    //   selected: !this.state.selected,
    // });
    setSelected(!selected2);
  };

  return (
    <Card className={selected2 ? "glow h-100" : "h-100"}>
      <Card.Img variant="top" src={book.img} className="h-75" />
      <Card.Body>
        <Card.Title className="fs-6">{book.title}</Card.Title>
        <Card.Text>Category: {book.category}</Card.Text>
        <Button
          variant="success"
          onClick={() => {
            handleClickcard();

            selected(book.asin);
          }}
        >
          Show Comments
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
