// Prevent duplicate injection (e.g. on navigation)
if (!document.getElementById('little-buddy')) {
  const buddy = document.createElement('div');
  buddy.id = 'little-buddy';
  buddy.innerHTML = `
    <div class="buddy-body">
      <div class="buddy-face">
        <div class="eye left"></div>
        <div class="eye right"></div>
        <div class="mouth"></div>
      </div>
      <div class="buddy-arm left-arm"></div>
      <div class="buddy-arm right-arm"></div>
    </div>
    <div class="emotes" id="buddy-emotes"></div>
  `;
  document.body.appendChild(buddy);

  // Cycle through emotes every few seconds
  const emotes = ['❤️', '👋', '✨', '💕', '🌟', '😊'];
  let i = 0;

  setInterval(() => {
    const emoteEl = document.getElementById('buddy-emotes');
    const span = document.createElement('span');
    span.textContent = emotes[i % emotes.length];
    span.className = 'emote-pop';
    emoteEl.innerHTML = '';
    emoteEl.appendChild(span);
    i++;
  }, 3000);
}