import { Get_posts, Create_posts, Update_posts, Delete_posts } from "./Actions";

const initialState = {
  posts: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Get_posts:
      return {
        ...state,
        posts: action.payload,
      };
    case Create_posts:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case Update_posts:
      return {
        ...state,
        posts: state.posts.map((i) =>
          i.id === action.payload.id ? action.payload : i
        ),
      };
    case Delete_posts:
      return {
        ...state,
        posts: state.posts.filter((i) => i.id !== action.payload),
      };
    default:
      return state;
  }
};

export default Reducer;
