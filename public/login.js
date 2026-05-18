const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    message.textContent='Please enter a valid email and password (min 6 characters).';
    message.style.color='red';
    return;
  }
  message.textContent='Logging in...';
  message.style.color='blue';
});
