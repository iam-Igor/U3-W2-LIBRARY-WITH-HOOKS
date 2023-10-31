const SingleComment = ({ book, element, refresh }) => {
  const deleteItem = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + element,

      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGJkMWY2ZTNkZDAwMTQ5NWU0MzQiLCJpYXQiOjE2OTgzMTkzMTQsImV4cCI6MTY5OTUyODkxNH0.q1fd5b4QJ1ktJteiPZJeY_CF5ZVC-sQi71fC1JR-8k8",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("eliminato");
        } else {
          throw new Error();
        }
      })
      .then(refresh)
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="comments-container d-flex justify-content-between align-items-center">
      <p className="m-0">
        {book.comment} | Rating: {book.rate}
      </p>
      <i className="bi bi-trash3" onClick={deleteItem}></i>
    </div>
  );
};

export default SingleComment;
