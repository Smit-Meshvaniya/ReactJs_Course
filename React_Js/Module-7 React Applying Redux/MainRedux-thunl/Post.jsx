import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetpostFun,
  CreatepostFun,
  UpdatepostFun,
  DeletepostFun,
} from "./Actions";
import styles from "./Post.module.css";

const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsstate.posts);

  // Creating new post
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  // Edit an post
  const [editdata, seteditData] = useState(null);
  const [editFields, setEditFields] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  useEffect(() => {
    dispatch(GetpostFun());
  }, [dispatch]);

  const handleCreate = () => {
    if (data.name && data.email && data.contact && data.address) {
      dispatch(CreatepostFun(data));
      setData({ name: "", email: "", contact: "", address: "" });
    }
  };

  const handleUpdate = () => {
    if (
      editFields.name &&
      editFields.email &&
      editFields.contact &&
      editFields.address
    ) {
      dispatch(UpdatepostFun(editdata.id, editFields));
      seteditData(null);
      setEditFields({ name: "", email: "", contact: "", address: "" });
    }
  };

  const handleDelete = (id) => {
    dispatch(DeletepostFun(id));
  };

  return (
    <div>
      <div>
        <h1>Redux-thunk With Json-Server</h1>

        {/* Create New post */}
        <h2>Create New post</h2>
        <div className={styles.input_field_style}>
          <input
            type="text"
            placeholder="Name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Contact"
            value={data.contact}
            onChange={(e) => setData({ ...data, contact: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
          <button onClick={handleCreate}>Add post</button>
          <br />
        </div>

        {/* Edit Existing post */}
        {editdata && (
          <div className={styles.input_field_style} style={{marginTop:"10px"}}>

            <h2 style={{color:"white"}}>Edit post</h2>
            <input
              type="text"
              value={editFields.name}
              onChange={(e) =>
                setEditFields({ ...editFields, name: e.target.value })
              }
              placeholder="Name"
            />
            <input
              type="email"
              value={editFields.email}
              onChange={(e) =>
                setEditFields({ ...editFields, email: e.target.value })
              }
              placeholder="Email"
            />
            <input
              type="text"
              value={editFields.contact}
              onChange={(e) =>
                setEditFields({ ...editFields, contact: e.target.value })
              }
              placeholder="Contact"
            />
            <input
              type="text"
              value={editFields.address}
              onChange={(e) =>
                setEditFields({ ...editFields, address: e.target.value })
              }
              placeholder="Address"
            />
            <button onClick={handleUpdate}>Update post</button>
          </div>
        )}

        {/* post List */}
        <table className={styles.NewpostList}>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
            <td>Address</td>
          </tr>
          {posts.map((i) => {
            return (
              <tr className={styles.ListClass}>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.contact}</td>
                <td>{i.address}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => {
                      seteditData(i);
                      setEditFields(i);
                    }}
                    className={styles.button}
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(i.id)}
                    className={styles.button}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Post;
