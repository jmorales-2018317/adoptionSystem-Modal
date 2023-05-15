import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import axios from "axios";
import Modal1 from "../components/Modal1";

export const AnimalsPage = () => {
  const [animals, setAnimals] = useState([{}]);
  const [user, setUser] = useState([]);

  const headers = {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getUser = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/user/get");
      if (data.user) {
        setUser(data.user);
        console.log(data.user);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getAnimals = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/animal/get", {
        headers: headers,
      });
      if (data.animals) {
        setAnimals(data.animals);
        console.log(data.animals);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error getting animals");
    }
  };

  const addAnimal = async () => {
    try {
      let animal = {
        name: document.getElementById("inputName").value,
        description: document.getElementById("inputDescription").value,
        age: document.getElementById("inputAge").value,
        type: document.getElementById("inputType").value,
        user: document.getElementById("inputUser").value,
      };

      const { data } = await axios.post(
        "http://localhost:3000/animal/save",
        animal
      );
      if (data.message) {
        getAnimals();
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const addIt = async () => {
    handleClose();
    addAnimal();
  };

  useEffect(() => {
    getUser();
    getAnimals();
  }, []);

  return (
    <>
      <main>
        <div className="left binding color">
          <p>CONTROL ANIMALS</p>
        </div>
        <button className="btn btn-success mb-5" onClick={handleOpen}>
          Add Animal
        </button>

        <Modal1
          open={open}
          handleClose={handleClose}
          user = {user}
          addIt = {addIt}
        />

        <div className="row g-0 justify-content-center">
          {animals.map(({ name, description, age }, i) => {
            return (
              <Card
                key={i}
                title={name}
                description={description}
                age={age}
              ></Card>
            );
          })}
        </div>
      </main>
    </>
  );
};
