
const nameError = document.getElementById('name-error');
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("msg-error");
const submitError = document.getElementById('submit-error');

function validateName(){
  const name = document.getElementById('contact-name').value;
  if(name.length == 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
    nameError.innerHTML="Write full name";
    return false;
  }
  nameError.innerHTML='<i class="ph-bold ph-check-circle"></i>';
  return true;
}

function validatePhone(){
  const phone = document.getElementById('phone-number').value;
  if(phone.length == 0){
    phoneError.innerHTML = 'Phone number is required';
    return false;
  }
  if(!phone.match(/^\d{11}$/)){
    phoneError.innerHTML="Phone number is invalid";
    return false;
  }
  phoneError.innerHTML='<i class="ph-bold ph-check-circle"></i>';
  return true;
}

function validateEmail(){
  const email = document.getElementById('email-id').value;
  if(email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
    emailError.innerHTML="Email is invalid";
    return false;
  }
  emailError.innerHTML='<i class="ph-bold ph-check-circle"></i>';
  return true;
}

function validateMsg(){
  const msg = document.getElementById('msg-id').value;
  const required = 30;
  const left = required - msg.length;
  if (left > 0) {
    msgError.innerHTML = left + " more character required";
    return false;
  }
  msgError.innerHTML='<i class="ph-bold ph-check-circle"></i>';
  return true;
}

function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
    submitError.innerHTML='Please fix errors to submit';
    setTimeout(function(){
      submitError.innerHTML='';
    }, 3000);
    return false;
  }
  return true;
}

document.getElementById('contact-form').addEventListener('submit', async function(e){
  e.preventDefault();
  if(!validateForm()) return;

  const submitBtn = this.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-caption').textContent = 'Sending…';

  const payload = {
    name:    document.getElementById('contact-name').value.trim(),
    company: document.querySelector('input[name="Company"]').value.trim(),
    email:   document.getElementById('email-id').value.trim(),
    phone:   document.getElementById('phone-number').value.trim(),
    message: document.getElementById('msg-id').value.trim()
  };

  try {
    const res = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if(res.ok && data.ok){
      document.getElementById('success-modal-overlay').classList.add('is-visible');
      document.getElementById('contact-form').reset();
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-caption').textContent = 'Submit';
    } else {
      submitError.innerHTML = data.error || 'Something went wrong. Please try again.';
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-caption').textContent = 'Submit';
    }
  } catch(err){
    submitError.innerHTML = 'Network error. Please try again.';
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-caption').textContent = 'Submit';
  }
});

function closeSuccessModal() {
  document.getElementById('success-modal-overlay').classList.remove('is-visible');
}
