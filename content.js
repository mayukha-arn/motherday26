if (!document.getElementById('little-buddy')) {
  const buddy = document.createElement('div');
  buddy.id = 'little-buddy';
  buddy.innerHTML = `
    <div id="buddy-svg-wrap">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 300" width="120" height="107">
        <style>
          @keyframes kb { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
          @keyframes kw { 0%,100%{transform:rotate(-8deg)} 50%{transform:rotate(26deg)} }
          @keyframes ke { 0%,88%,100%{transform:scaleY(1)} 94%{transform:scaleY(0.08)} }
          .k-girl { animation:kb 2s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 100%; animation-delay:.3s }
          .k-mom  { animation:kb 2.3s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 100% }
          .k-wave { animation:kw 1.5s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 0% }
          .k-eye1 { animation:ke 4s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 50% }
          .k-eye2 { animation:ke 4s ease-in-out infinite; transform-box:fill-box; transform-origin:50% 50%; animation-delay:.9s }
        </style>

        <!-- GIRL -->
        <g class="k-girl">
          <ellipse cx="82" cy="108" rx="9" ry="12" fill="#1a1a1a" transform="rotate(-25,82,108)"/>
          <rect x="76" y="103" width="8" height="5" rx="2" fill="#1a1a1a"/>
          <ellipse cx="79" cy="101" rx="7" ry="4" fill="#222" transform="rotate(-20,79,101)"/>
          <ellipse cx="86" cy="99" rx="7" ry="4" fill="#222" transform="rotate(20,86,99)"/>
          <circle cx="83" cy="100" r="3" fill="#333"/>
          <ellipse cx="118" cy="108" rx="9" ry="12" fill="#1a1a1a" transform="rotate(25,118,108)"/>
          <rect x="116" y="103" width="8" height="5" rx="2" fill="#1a1a1a"/>
          <ellipse cx="114" cy="101" rx="7" ry="4" fill="#222" transform="rotate(-20,114,101)"/>
          <ellipse cx="121" cy="99" rx="7" ry="4" fill="#222" transform="rotate(20,121,99)"/>
          <circle cx="117" cy="100" r="3" fill="#333"/>
          <circle cx="100" cy="130" r="28" fill="#f5c9a0" stroke="#d4956a" stroke-width="1.5"/>
          <ellipse cx="100" cy="112" rx="26" ry="18" fill="#1a1a1a"/>
          <ellipse cx="76" cy="125" rx="8" ry="14" fill="#1a1a1a"/>
          <ellipse cx="124" cy="125" rx="8" ry="14" fill="#1a1a1a"/>
          <g class="k-eye1">
            <circle cx="90" cy="131" r="5" fill="#222"/>
            <circle cx="110" cy="131" r="5" fill="#222"/>
            <circle cx="92" cy="129" r="1.5" fill="white"/>
            <circle cx="112" cy="129" r="1.5" fill="white"/>
          </g>
          <ellipse cx="82" cy="140" rx="7" ry="4" fill="#f4a0a0" opacity="0.55"/>
          <ellipse cx="118" cy="140" rx="7" ry="4" fill="#f4a0a0" opacity="0.55"/>
          <path d="M92 146 Q100 154 108 146" fill="none" stroke="#9b4e2e" stroke-width="2" stroke-linecap="round"/>
          <rect x="76" y="156" width="48" height="50" rx="12" fill="#2a2a2a"/>
          <rect x="97" y="160" width="6" height="40" rx="3" fill="#3a3a3a" opacity="0.5"/>
          <rect class="k-wave" x="59" y="159" width="13" height="28" rx="6" fill="#2a2a2a"/>
          <rect x="124" y="168" width="26" height="11" rx="5" fill="#f5c9a0" stroke="#d4956a" stroke-width="1"/>
          <rect x="78" y="202" width="44" height="22" rx="6" fill="#7bafd4"/>
          <line x1="100" y1="204" x2="100" y2="222" stroke="#5a8fb0" stroke-width="1"/>
          <rect x="80" y="222" width="13" height="28" rx="6" fill="#f5c9a0" stroke="#d4956a" stroke-width="1"/>
          <rect x="97" y="222" width="13" height="28" rx="6" fill="#f5c9a0" stroke="#d4956a" stroke-width="1"/>
          <ellipse cx="87" cy="251" rx="11" ry="7" fill="white" stroke="#ddd" stroke-width="1"/>
          <ellipse cx="103" cy="251" rx="11" ry="7" fill="white" stroke="#ddd" stroke-width="1"/>
        </g>

        <!-- MOM -->
        <g class="k-mom">
          <ellipse cx="225" cy="145" rx="34" ry="55" fill="#1a1a1a"/>
          <circle cx="225" cy="118" r="32" fill="#d4895a" stroke="#b5693a" stroke-width="1.5"/>
          <ellipse cx="225" cy="96" rx="30" ry="22" fill="#1a1a1a"/>
          <ellipse cx="197" cy="120" rx="9" ry="22" fill="#1a1a1a"/>
          <ellipse cx="253" cy="122" rx="9" ry="20" fill="#1a1a1a"/>
          <g class="k-eye2">
            <circle cx="214" cy="119" r="5.5" fill="#222"/>
            <circle cx="236" cy="119" r="5.5" fill="#222"/>
            <circle cx="216" cy="117" r="1.8" fill="white"/>
            <circle cx="238" cy="117" r="1.8" fill="white"/>
          </g>
          <ellipse cx="205" cy="129" rx="8" ry="4.5" fill="#d4895a" opacity="0.4"/>
          <ellipse cx="245" cy="129" rx="8" ry="4.5" fill="#d4895a" opacity="0.4"/>
          <path d="M216 136 Q225 145 234 136" fill="none" stroke="#7a3e1e" stroke-width="2" stroke-linecap="round"/>
          <rect x="196" y="148" width="58" height="80" rx="14" fill="#1e1e1e"/>
          <polygon points="225,152 210,165 225,170" fill="#2a2a2a"/>
          <polygon points="225,152 240,165 225,170" fill="#2a2a2a"/>
          <circle cx="218" cy="180" r="3" fill="#444"/>
          <circle cx="232" cy="180" r="3" fill="#444"/>
          <circle cx="218" cy="196" r="3" fill="#444"/>
          <circle cx="232" cy="196" r="3" fill="#444"/>
          <circle cx="218" cy="212" r="3" fill="#444"/>
          <circle cx="232" cy="212" r="3" fill="#444"/>
          <rect x="196" y="202" width="58" height="6" rx="2" fill="#161616"/>
          <rect x="150" y="158" width="46" height="12" rx="6" fill="#1e1e1e"/>
          <rect x="254" y="155" width="13" height="34" rx="6" fill="#1e1e1e"/>
          <rect x="256" y="186" width="28" height="22" rx="6" fill="#8B4513" stroke="#6b3410" stroke-width="1.5"/>
          <path d="M261 186 Q270 178 279 186" fill="none" stroke="#6b3410" stroke-width="2"/>
          <rect x="200" y="224" width="18" height="36" rx="7" fill="#9e9e9e"/>
          <rect x="232" y="224" width="18" height="36" rx="7" fill="#9e9e9e"/>
          <line x1="203" y1="228" x2="215" y2="258" stroke="#777" stroke-width="1" opacity="0.6"/>
          <line x1="208" y1="226" x2="217" y2="258" stroke="#777" stroke-width="1" opacity="0.6"/>
          <line x1="235" y1="228" x2="247" y2="258" stroke="#777" stroke-width="1" opacity="0.6"/>
          <line x1="240" y1="226" x2="249" y2="258" stroke="#777" stroke-width="1" opacity="0.6"/>
          <ellipse cx="209" cy="261" rx="13" ry="7" fill="#1a1a1a"/>
          <ellipse cx="241" cy="261" rx="13" ry="7" fill="#1a1a1a"/>
        </g>

        <!-- JOINED HANDS -->
        <circle cx="163" cy="174" r="9" fill="#f5c9a0" stroke="#d4956a" stroke-width="1.5"/>
        <circle cx="152" cy="174" r="9" fill="#f5c9a0" stroke="#d4956a" stroke-width="1.2"/>
      </svg>
    </div>
    <div id="buddy-emotes"></div>
  `;
  document.body.appendChild(buddy);

  const emotes = ['❤️', '💕', '🌟', '✨', '😊', '💖'];
  let i = 0;
  setInterval(() => {
    const el = document.getElementById('buddy-emotes');
    const span = document.createElement('span');
    span.textContent = emotes[i % emotes.length];
    span.className = 'bb-emote-pop';
    el.innerHTML = '';
    el.appendChild(span);
    i++;
  }, 3000);
}