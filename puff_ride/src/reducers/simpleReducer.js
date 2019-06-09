/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };
    case 'SIGNUP_ACTION':
      console.log("MEOW");
      return {
        email: action.payload.email,
        name: action.payload.name,
        biography: action.payload.biography,
        password: action.payload.password,
      };
    default:
      return {
        status: "not logged in",
      };
  }
};
