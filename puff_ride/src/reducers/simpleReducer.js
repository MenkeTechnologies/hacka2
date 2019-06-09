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
      console.log("Signed up");
      return {
        ...state,
        name: action.name,
        email: action.email,
        password: action.password,
        biography: action.biography,
      };
    case 'DASH_MATCHED':
      console.log("Dash matched triggered")
      return {
        ...state,
        unmatched: action.payload
      };
    case 'DASH_UNMATCHED':
      console.log("Dash unmatched triggered")
      console.log(action.payload)
      return {
        ...state,
        matched: action.payload
      };
    case 'LOGGED_IN':
      console.log("logging in")
      return{
        ...state,
        user_info: action.payload,
        status: "logged in"
      }
    default:
      if(state.status ==="logged in"){
        return{
          ...state
        }
      }else{return {
        status: "not logged in",
        ride: ['usera', 'userb', 'userc'],
        matched: ['schedule1', 'schedule2', 'schedule3'],
        unmatched:['schedule4', 'schedule5', 'schedule6']
      };
    }
  }
};
