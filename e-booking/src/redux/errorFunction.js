//jshint esversion:9
export const errorFunction = (dispatch, err, IS_AUTH) => {
  console.log({ errMessage: err.message })
  dispatch({
    type: IS_AUTH.REGISTER,
    isAuth: false,
  })
}
