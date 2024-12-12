import axios from "axios";

const API_URL = "http://localhost:5000/posts";

export const Get_posts = "GET_POSTS";
export const Create_posts = "CREATE_POSTS";
export const Update_posts = "UPDATE_POSTS";
export const Delete_posts = "DELETE_POSTS";

export const GetpostFun = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({
      type: Get_posts,
      payload: response.data,
    });
  } catch (error) {
    console.error("Get post Error", error);
  }
};

export const CreatepostFun = (i) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, i);
    dispatch({
      type: Create_posts,
      payload: response.data,
    });
  } catch (error) {
    console.error("Create post Error", error);
  }
};

export const UpdatepostFun = (id, updatedItem) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedItem);
    dispatch({
      type: Update_posts,
      payload: response.data,
    });
  } catch (error) {
    console.error("Update post Error", error);
  }
};

export const DeletepostFun = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({
      type: Delete_posts,
      payload: id,
    });
  } catch (error) {
    console.error("Delete post Error", error);
  }
};
