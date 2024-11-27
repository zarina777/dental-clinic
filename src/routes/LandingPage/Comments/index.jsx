import React from "react";
import Container from "../../../components/Container";
import CommentPart from "./components/CommentPart";
import Rate from "./components/Rate";

const Comments = () => {
  return (
    <section id="reviews">
      <Container className="border-b-0">
        <Rate />
        <CommentPart />
      </Container>
    </section>
  );
};

export default Comments;
