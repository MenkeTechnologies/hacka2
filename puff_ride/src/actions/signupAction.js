/* 
  src/actions/simpleAction.js
*/
/*
Action creators
*/

export function signupActionCreator(name, email, password, biography) {
    return {
        type: 'SIGNUP_ACTION',
        payload: [
            name: name_state,
            email: email_state,
            password: password_state,
            biography: biography_state
        ]
    }
}

export function schedulerActionCreator(dow, orig, des, time, start, end, driver) {
    return {
        type: 'SCHEDULE_ACTION',
        payload: {
            dow, orig, des, time, start, end, driver
        }

    }
}