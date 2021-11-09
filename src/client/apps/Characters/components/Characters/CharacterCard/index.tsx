import { FC } from "react";

import "./index.scss";

interface IProps {
  gender?: string;
  image?: string;
  name?: string;
  species?: string;
  status?: string;
  openModal: () => void;
}

const CharacterCard: FC<IProps> = ({
  gender,
  image,
  name,
  species,
  status,
  openModal,
}) => {
  return (
    <div className="rick-and-morty__character_card" onClick={openModal}>
      <div className="rick-and-morty__character_card_name center">
        <h3>{name}</h3>
      </div>
      <div className="rick-and-morty__character_card_image img">
        <img src={image} alt={`${name}-image`} />
      </div>
      <div className="rick-and-morty__character_card_info">
        <p>
          Gender: <span>{gender}</span>
        </p>
        <p>
          Species: <span>{species}</span>
        </p>
        <p>
          Status: <span>{status}</span>
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
