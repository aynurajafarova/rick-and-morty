import { FC } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { ICharacterItem } from "../../models";

import "./index.scss";

interface IProps {
  open: boolean;
  handleClose: () => void;
  singleCharacter: ICharacterItem;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "#dddddd",
  boxShadow: 24,
  p: 4,
  display: "flex",
  borderRadius: "10px",
};

const CharacterModal: FC<IProps> = ({ open, singleCharacter, handleClose }) => {
  const { name, gender, image, location, origin, species, status } =
    singleCharacter;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        className="rick-and-morty__modal"
      >
        <Fade in={open}>
          <Box sx={style} className="rick-and-morty__modal__content">
            <div className="rick-and-morty__modal__content__img img">
              <img src={image} alt={`${name}-image`} />
            </div>
            <div className="rick-and-morty__modal__content__details">
              <p>
                Name: <span>{name}</span>
              </p>
              <p>
                Gender: <span>{gender}</span>
              </p>
              <p>
                Status: <span>{status}</span>
              </p>
              <p>
                Location: <span>{location?.name}</span>
              </p>
              <p>
                Origin: <span>{origin?.name}</span>
              </p>
              <p>
                Species: <span>{species}</span>
              </p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CharacterModal;
