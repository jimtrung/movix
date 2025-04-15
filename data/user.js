const users = [{
  "userid": 1,
  "email": "trung@gmail.com", 
  "password": "123",
  "pack": "none",
}]

export function Login(email, password) { 
  const user = users.find(user => user.email === email && user.password === password); 
  if (user) {
    return user; 
  } else {
    return null; 
  }
}