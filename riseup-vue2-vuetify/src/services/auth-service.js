import axios from "axios"

const API_URL = "http://localhost:4000/api/auth/"

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data))
        }

        return response.data
      })
  }

  logout() {
    localStorage.removeItem("user")
  }
  updateImg(user) {
    let localUser= JSON.parse(localStorage.getItem('user'))
    localUser.img= user.img
    localStorage.setItem("user", JSON.stringify(localUser))
    return axios.post(API_URL + "update", {
      id: user.id,
      img: user.img,
    })
  }
  register(user) {
    return axios.post(API_URL + "signup", {
      username: user.username,
      email: user.email,
      password: user.password,
      img: "",
    })
  }
}

export default new AuthService()
