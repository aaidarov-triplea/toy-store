import styled from "../styles/VideoContent.module.css";
import { RiVideoFill } from "react-icons/ri";

const VideoContent = () => {
  return (
    <div className={styled.video}>
      <video autoPlay loop muted className={styled.video__content}>
        <source
          src="https://videos.pexels.com/video-files/6943076/6943076-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Ваш браузер не поддерживает видео.
      </video>
      <div className={styled.video__text}>
        <h6>About The Shop</h6>
        <h1>Watch Our Story</h1>
        <p>
          There is no magic formula to write perfect ad copy. It is based on a
          number of factors, including ad placement, demographic, even the
          consumer’s mood.
        </p>
        <a href="#" className={styled.video__link}>
          <RiVideoFill />
        </a>
      </div>
    </div>
  );
};

export default VideoContent;
