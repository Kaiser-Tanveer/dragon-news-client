import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";

const NewsSummary = ({ news }) => {
  console.log(news);
  const { _id, title, image_url, rating, total_view, details, author } = news;
  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            src={author.img}
            className="me-2"
            style={{ height: "50px" }}
            roundedCircle
          />
          <div>
            <p className="mb-0">{author?.name}</p>
            <p>{author?.published_date}</p>
          </div>
        </div>
        <div className="me-2">
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}
              <Link to={`/news/${_id}`}>read more</Link>
            </>
          ) : (
            <>{details}</>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>
          <FaStar className="text-warning" />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye />
          <span className="ms-2">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummary;
