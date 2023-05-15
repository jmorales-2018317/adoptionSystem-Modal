import React from "react";
import { Box, Modal, Typography } from "@mui/material";

const Modal1 = ({open, handleClose, user, addIt}) =>{

    const style = {
      position: "absolute",
      top: "8%",
      left: "35%",
      width: "50%",
      bgcolor: "white",
      p: 5,
    };

    return(
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1 className="text-center bg-success rounded-pill text-white">
              {" "}
              Add Animal{" "}
            </h1>
            <Typography>
              <p className="text-center" q>
                {" "}
                Fill each section with the animal data:{" "}
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputDescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputDescription"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputAge" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputAge"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputType" className="form-label">
                    Specie
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputType"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputUser" className="form-label">
                    Animal Owner
                  </label>
                  <select className="form-control" id="inputUser">
                    {user.map(({ _id, name }, e) => {
                      return (
                        <option key={e} value={_id}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </form>

              <div className="space-between">
                <button className="btn btn-success" onClick={() => addIt()}>
                  Add
                </button>
                <button className="btn btn-danger" onClick={handleClose}>
                  Cancel
                </button>
              </div>
            </Typography>
          </Box>
        </Modal>
    );
}

export default Modal1;