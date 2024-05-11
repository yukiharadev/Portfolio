import TextLine from "../TextLine";
import { ArrowDown } from "react-bootstrap-icons";

const HomePage = () => {
  return (
    <div className="text-center align-content-center home-page" id="home">
      <div className="text-sub">HELLO EVERYONE, I AM</div>
      <h1>Nguyen Viet Hoang</h1>
      <div className="text-animation-style">
        <TextLine />
      </div>
      <div className="arrow-down">
        <ArrowDown />
      </div>
    </div>
  );
};

export default HomePage;
