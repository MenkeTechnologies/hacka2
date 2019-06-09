/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'EMAIL_UPDATE':
      return{
        ...state,
        email: action.email
      };
    case 'PASS_UPDATE':
      return{
        ...state,
        password: action.pass
      }
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };
    case 'SIGNUP_ACTION':
      console.log("MEOW");
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password,
        biography: action.biography,
      };
    case 'LOGGED_IN':
      console.log("logging in")
      return{
        ...state,
        user_info: action.payload,
        status: "logged in"
      }
    default:
      return {
        status: "not logged in",
        ride: ['usera', 'userb', 'userc']
      };
  }
};
