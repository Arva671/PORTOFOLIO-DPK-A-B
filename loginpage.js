const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  const userExists = users.find((user) => user.email === email);

  if (userExists) {
    alert('Email sudah terdaftar!');
  } else {
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registrasi berhasil!');
    window.location.href = 'signin.html';
  }
});

const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  const user = users.find((user) => user.email === email && user.password === password);

  if (user) {
    alert(`Selamat datang, ${user.name}!`);
    window.location.href = 'produk.html';
  } else {
    alert('Email atau password salah!');
  }
});

document.getElementById('signinForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('signinEmail').value;
  const password = document.getElementById('signinPassword').value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    alert(`Selamat datang, ${user.name}!`);
    window.location.href = 'produk.html';
  } else {
    alert('Email atau password salah!');
  }
});
