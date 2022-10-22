import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightNav = () => {
  // Using Auth Context 
  const {providerLogIn} = useContext(AuthContext);

  // Creating Google Provider 
  const provider = new GoogleAuthProvider();

  // Google Sign in handler 
  const GoogleSignInHandler = () =>{
    providerLogIn(provider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.error(error);
    })
  }
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={GoogleSignInHandler} variant="outline-primary" className="mb-2">
          <FaGoogle></FaGoogle> Sign in with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Sign in with Github
        </Button>
      </ButtonGroup>
      <div>
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook>
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter>
            Dapibus ac facilisis in
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp>
            Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin></FaLinkedin>
            Porta ac consectetur ac
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram></FaInstagram>
            Vestibulum at eros
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="carousel">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightNav;
