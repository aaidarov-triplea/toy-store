import styled from "../styles/SocialMedia.module.css";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className={styled.socialmediaContent}>
      <a href="#">
        <FaSquareXTwitter />
      </a>
      <a href="#">
        <FaFacebookSquare />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaPinterest />
      </a>
      <a href="#">
        <FaYoutube />
      </a>
    </div>
  );
};

export default SocialMedia;
