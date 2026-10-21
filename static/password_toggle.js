const eyeIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></svg>';
const eyeOffIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3l18 18M10.6 6.1A11.3 11.3 0 0 1 12 6c6.4 0 10 6 10 6a14 14 0 0 1-3.2 3.7M6.1 6.9C3.4 8.7 2 12 2 12s3.6 6 10 6c1.3 0 2.5-.3 3.6-.8"/><path d="M10 10a2.5 2.5 0 0 0 3.5 3.5"/></svg>';

document.querySelectorAll('input[type="password"]').forEach((input) => {
  const field = document.createElement('span');
  field.className = 'password-field';
  field.style.display = 'block';
  input.parentNode.insertBefore(field, input);
  field.appendChild(input);

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'password-toggle';
  toggle.setAttribute('aria-label', 'Показать пароль');
  toggle.setAttribute('aria-pressed', 'false');
  toggle.innerHTML = eyeIcon;
  toggle.addEventListener('click', (event) => {
    event.preventDefault();
    const visible = input.type === 'password';
    input.type = visible ? 'text' : 'password';
    toggle.setAttribute('aria-label', visible ? 'Скрыть пароль' : 'Показать пароль');
    toggle.setAttribute('aria-pressed', String(visible));
    toggle.innerHTML = visible ? eyeOffIcon : eyeIcon;
    input.focus();
  });
  field.appendChild(toggle);
});
