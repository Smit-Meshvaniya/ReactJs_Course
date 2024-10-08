import React, {  useState } from "react";
import "./Program3.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Program3 = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  const loadsavedata = (e) => {
    e.preventDefault();

    if (id !== "") {
      let res = data.map((i, index) => {
        if (index == id) {
          i = name;
        }
        return i;
      });
      setData(res);
    } else {
      setData([...data, name]);
    }
    setId("");
    setName("");
  
  };
  const deldata = (id) => {
    let res = data.filter((i, index) => {
      return index !== id;
    });
    setData(res);
  };

  const editdata = (id) => {
    let res = data.find((i, index) => {
      return index == id;
    });
    setName(res);
    setId(id);
  };

  return (
    <>
      <div className="divmain">
        <div className="div1">
          <form action="" method="post" onSubmit={loadsavedata}>
            <div className="div2">
              <h4 style={{ textDecoration: "underline", color: "white" }}>
                Grocery Shopping
              </h4>

              <div className="div3">
                {data.map((i, index) => {
                  return [
                    <div>
                      {i !== "" && (
                        <>
                          <input
                            type="text"
                            value={i}
                            className="datainput"
                            readOnly
                          />
                          <button
                            type="button"
                            className="iconbtn1"
                            onClick={() => deldata(index)}
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{ color: "#ffffff" }}
                            />
                          </button>
                          <button
                            type="button"
                            className="iconbtn1"
                            onClick={() => editdata(index)}
                          >
                            <FontAwesomeIcon
                              icon={faPenToSquare}
                              style={{ color: "#ffffff" }}
                            />
                          </button>
                        </>
                      )}
                    </div>,
                    <br />,
                  ];
                })}
              </div>

              <div className="div5">
                <input
                  className="inputclass"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" value="Add" className="addclass" />
              </div>
              <br />
              <button className="btnclass" onClick={(e) => setData([])}>Delete List</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Program3;
