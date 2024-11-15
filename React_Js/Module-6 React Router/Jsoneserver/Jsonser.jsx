import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Styleddiv1,
  Styleddiv2,
  AddUser,
  Divfortitle,
  Styleddivcontainer,
  Divmaincontainer,
  Tabletr,
  CommonButton,
} from "../src/Jsonser.styles";
import Modal1 from "../src/Modal1";
import Modal2 from "../src/Modal2";

function Jsonser() {
  const [id, setId] = useState("");
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
  });
  const [userdata, setUserdata] = useState([]);
  // const [id, setId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  //----for modal2 of view
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const viewData = (user) => {
    setSelectedUser(user);
    setIsModal2Open(true);
  };

  const close2Modal = () => {
    setIsModal2Open(false);
    setSelectedUser(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setData({ name: "", lastname: "", email: "" });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setData({
      name: "",
      lastname: "",
      email: "",
    });
    setIsEditing(false);
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const display = () => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => setUserdata(res.data));
  };
  useEffect(() => {
    display();
  }, []);

  const savedata = (e) => {
    e.preventDefault();

    const userData = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
    };

    if (isEditing) {
      axios.put(`http://localhost:4000/users/${id}`, userData).then((res) => {
        console.log(res);
      });
    } else {
      axios
        .post(" http://localhost:4000/users/", userData)
        .then((res) => console.log(res));
    }
    closeModal();
    display();
    resetForm();
    setIsEditing(false);
  };

  const editData = (id) => {
    openModal();
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((res) => {
        setData(res.data);
        setId(id);
        setIsEditing(true);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  };
  const deleteData = (id) => {
    axios
      .delete("http://localhost:4000/users/" + id)
      .then((res) => console.log(res));
    display();
  };

  return (
    <>
      <Divmaincontainer>
        <Styleddiv1>
          <Divfortitle>
            <h2>React Crud Operation</h2>
            <h2 style={{ color: "yellow" }}>Json Server</h2>
          </Divfortitle>
          <Styleddivcontainer>
            <Styleddiv2>
              <AddUser onClick={openModal}> Add User</AddUser>
              <Modal1 isOpen={isModalOpen} onClose={closeModal}>
                <form action="#" method="post" onSubmit={savedata}>
                  <h3>Jsonserver</h3>
                  <label htmlFor="">Name:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handlechange}
                    value={data.name}
                  />
                  <br />
                  <br />

                  <label htmlFor="">Last name:</label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    onChange={handlechange}
                    value={data.lastname}
                  />
                  <br />
                  <br />

                  <label htmlFor="">Email:</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    onChange={handlechange}
                    value={data.email}
                  />
                  <br />
                  <br />

                  {/* <label htmlFor="">Age:</label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    onChange={handlechange}
                    value={data.age}
                  />
                  <br />
                  <br /> */}
                  <input type="submit" value="save" />
                </form>
                <button onClick={closeModal}> Close Modal</button>
              </Modal1>

              <table
                style={{ borderCollapse: "collapse", border: "2px solid #ccc" }}
              >
                <tr>
                  <th style={{ border: "2px solid #ccc", padding: "8px" }}>
                    Id
                  </th>
                  <th style={{ border: "2px solid #ccc", padding: "8px" }}>
                    Name
                  </th>
                  <th style={{ border: "2px solid #ccc", padding: "8px" }}>
                    Last Name
                  </th>
                  <th style={{ border: "2px solid #ccc", padding: "8px" }}>
                    Email
                  </th>
                  {/* <th style={{ border: "2px solid #ccc", padding: "8px" }}>
                    Age
                  </th> */}
                  <th style={{ border: "2px solid #ccc", padding: "8px" }}>
                    Action
                  </th>
                </tr>
                {userdata.map((i) => {
                  return (
                    <Tabletr>
                      <td style={{ border: "2px solid #ccc", padding: "8px" }}>
                        {i.id}
                      </td>
                      <td style={{ border: "2px solid #ccc", padding: "8px" }}>
                        {i.name}
                      </td>
                      <td style={{ border: "2px solid #ccc", padding: "8px" }}>
                        {i.lastname}
                      </td>{" "}
                      <td style={{ border: "2px solid #ccc", padding: "8px" }}>
                        {i.email}
                      </td>
                      {/* <td style={{ border: "2px solid #ccc", padding: "8px" }}>
                        {i.age}
                      </td> */}
                      <td
                        style={{
                          border: "2px solid #ccc",
                          padding: "8px",
                          display: "flex",
                          gap: "5px",
                        }}
                      >
                        <CommonButton
                          style={{ backgroundColor: "#2ba2c7" }}
                          onClick={() => editData(i.id)}
                        >
                          Update
                        </CommonButton>
                        <CommonButton
                          style={{ backgroundColor: "#ff4b4b" }}
                          onClick={() => deleteData(i.id)}
                        >
                          Delete
                        </CommonButton>
                        <CommonButton
                          style={{ backgroundColor: "#4caf50" }} // Color for the view button
                          onClick={() => viewData(i)}
                        >
                          View
                        </CommonButton>
                      </td>
                    </Tabletr>
                  );
                })}
              </table>
              <Modal2
                isOpen={isModal2Open}
                onClose={close2Modal}
                user={selectedUser}
              />
            </Styleddiv2>
          </Styleddivcontainer>
        </Styleddiv1>
      </Divmaincontainer>
    </>
  );
}

export default Jsonser;
