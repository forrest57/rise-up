export default class User {
  constructor(username, email, password, img) {
    this.username = username
    this.email = email
    this.password = password
    this.img = img || "1" 
  }
}
