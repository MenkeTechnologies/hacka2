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
        matched: action.payload
      };
    case 'DASH_UNMATCHED':
      console.log("Dash unmatched triggered")
      console.log(action.payload)
      return {
        ...state,
        unmatched: action.payload
      };
    case 'SCHEDULE_ACTION':
      console.log("Scheudle action issued")
      console.log(action.value.time)
      console.log(action.value.des)
      console.log(action.value.dow)
      return {
        ...state,
        dow : action.value.dow,
        orig : action.value.orig,
        des : action.value.des,
        time : action.value.time,
        start : action.value.start,
        end : action.value.end,
        driver : action.value.driver
      }
    case 'LOGGED_IN':
      console.log("logging in")
      return{
        ...state,
        user_info: action.payload,
        status: "logged in"
      }
    case 'RIDE_ACTION':
      console.log("ride action in reducer");
      return{
        ...state,
        status: "ride",
        ride: action.payload
      }
    case 'NEW_SCHEDULE':
      return{
        ...state,
        status: "new_schedule"
      }
    case 'BACK_TO_DASHBOARD':
      return{
        ...state,
        status: "dashboard"
      }
    case 'FINDMATCHING':
      return{
        ...state,
        matched_schedules:action.payload
      }
    default:
      if(state.status ==="logged in"){
        return{
          ...state
        }
      }else{return {
        status: "not logged in",
        ride: ['usera', 'userb', 'userc'],
        matched: [],
        unmatched:[],
        matched_schedules:[]
      };
    }
  }
};
