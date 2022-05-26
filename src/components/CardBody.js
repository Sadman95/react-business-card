import React, { useState } from "react";

const CardBody = () => {
  const [popup, setPopup] = useState(false);
  const [editName, setEditName] = useState(false);
  const [editNum, setEditNum] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [info, setInfo] = useState({
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
    name: "Test name",
    email: "test@mail.com",
    number: "###-###-###",
  });

  const handleOnBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (!value) {
      return;
    }
    setInfo({
      ...info,
      [name]: value,
    });
    if (name === "imageUrl") {
      setPopup(false);
    }
    if (name === "name") {
      setEditName(false);
    }
    if (name === "email") {
      setEditEmail(false);
    }
    if (name === "number") {
      setEditNum(false);
    }
  };

  return (
    <div className="absolute p-4 -translate-x-1/2 -translate-y-1/2 bg-gray-600 rounded shadow shadow-white top-1/2 left-1/2">
      <div className="object-cover m-auto mb-4 rounded-full w-44 h-44">
        {popup ? (
          <input
            placeholder="Enter image URL"
            name="imageUrl"
            onBlur={handleOnBlur}
            type="text"
            className="w-full p-2 bg-white rounded"
          />
        ) : (
          <>
            {Object.entries(info).length > 0 && (
              <img
                onClick={() => setPopup(true)}
                className="object-cover w-full h-full p-1 border-2 rounded-full"
                src={info.imageUrl}
                alt=""
              />
            )}
          </>
        )}
      </div>
      <div className="flex justify-between gap-24 text-white align-middle">
        <p onClick={() => setEditName(true)}>
          Name:
          {editName ? (
            <input
              placeholder="Enter your name"
              name="name"
              onBlur={handleOnBlur}
              type="text"
              className="p-2 ml-2 text-black bg-white rounded"
            />
          ) : (
            <span>{info.name}</span>
          )}
        </p>
        <div>
          <p className="mb-2" onClick={() => setEditNum(true)}>
            Phone Number:
            {editNum ? (
              <input
                placeholder="Enter your number"
                name="number"
                onBlur={handleOnBlur}
                type="number"
                className="p-2 ml-2 text-black bg-white rounded"
              />
            ) : (
              <span>{info.number}</span>
            )}
          </p>
          <p onClick={() => setEditEmail(true)}>
            Email:
            {editEmail ? (
              <input
                placeholder="Enter your email"
                name="email"
                onBlur={handleOnBlur}
                type="email"
                className="p-2 ml-2 text-black bg-white rounded"
              />
            ) : (
              <span> {info.email}</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardBody;
