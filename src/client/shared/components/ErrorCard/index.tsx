import rickAndMortyError404 from "../../assets/images/rick-and-morty-404.png";

import "./index.scss";

const ErrorCard = () => {
  return (
    <div className="rick-and-morty__error">
      <img src={rickAndMortyError404} alt="error-404" />
    </div>
  );
};

export default ErrorCard;
