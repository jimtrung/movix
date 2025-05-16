const users = JSON.parse(localStorage.getItem('users')) || [{ 
  "email": "trung@gmail.com",
  "password": "trung123",
  "pack": "luxury",
}];

export function Login(email, password) {
  users.forEach(user => {
    if (user.email === email && user.password === password) {
      localStorage.setItem('email', email);
      return user;
    } else if (user.email === email && user.password !== password) {
      throw new Error("Sai mật khẩu");
    } else {
      throw new Error("Không tìm thấy người dùng"); 
    }
  });
}

export function Signup(email, password) {
  if (email === "" || password === "") {
    throw new Error("Vui lòng nhập đủ thông tin!");
  }
  users.forEach(user => {
    if (user.email === email) { 
      throw new Error("Người dùng đã tồn tại"); 
    }
  });
  
  const newUser = {
    "email": email,
    "password": password,
    "pack": "none"
  }
  users.push(newUser);
  localStorage.setItem('email', email);
  localStorage.setItem('users', JSON.stringify(users));
  window.location.href = 'signup2a.html';
}

export function LogOut() {
  document.querySelectorAll('.logout').forEach(e => {
    e.addEventListener('click', () => {
      localStorage.setItem('email', ""); 
    });
  });
}

export function SetPack(email, pack) {
  users.forEach(user => {
    if (user.email === email) {
      user.pack = pack;
    }
  });
  localStorage.setItem('users', JSON.stringify(users));
}

export function FindUser(email) {
  let foundUser;
  users.forEach(user => {
    if (user.email === email) {
      foundUser = user;
    }
  });
  if (foundUser === undefined) {
    throw new Error("Cannot find user");
  }
  return foundUser;
}