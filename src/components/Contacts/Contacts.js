import React from 'react';
import './Contacts.css';
import Logo from "./Logo.png"
import Footer from './Footer/Footer';

const Contacts = () => {
  return (
    <div className="contacts-container" id='contacts'>
      <div className="contacts-background"></div>
      <div className='contacts-content'>
        <div className='contact-img-container'><img className="logocontacts-img" src={Logo} alt="Logo" /></div>
        <div className="contacts-sidebar">
        <div className="contact-block self-pickup">
  <a
<<<<<<< HEAD
    href="https://www.google.com/maps/dir//49.8175344,24.0019046/@49.817152,24.0018107,17.75z/data=!4m2!4m1!3e0?entry=ttu"
=======
    href="https://www.google.com/maps/place/@49.8217632,24.0062074,17z/data=!3m1!4b1!4m6!3m5!1s0x473ae785ed9ca18f:0x8093ff9d7e42b924!8m2!3d49.8217598!4d24.0087823!16s%2Fg%2F11l5b4dsz9?entry=ttu"
>>>>>>> 338712e785a9c24c9fc41a330717adbbbff6d760
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg fill="#000000" height="80px" width="80px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
      <g>
        <g>
          <path d="M256.001,101.02c-39.388,0-71.432,32.045-71.432,71.432c0,39.388,32.045,71.432,71.432,71.432
            c39.388,0,71.432-32.045,71.432-71.432C327.433,133.065,295.389,101.02,256.001,101.02z M256,213.445
            c-22.603,0-40.993-18.389-40.993-40.993s18.389-40.993,40.993-40.993s40.993,18.39,40.993,40.993
            C296.993,195.056,278.603,213.445,256,213.445z"/>
        </g>
      </g>
      <g>
        <g>
          <path d="M403.703,302.096h-63.715c28.369-43.321,43.249-87.709,43.249-129.644c0-70.159-57.079-127.238-127.238-127.238
            s-127.238,57.079-127.238,127.238c0,41.935,14.881,86.323,43.249,129.644h-63.715L0,466.786h512L403.703,302.096z
             M159.202,172.453c-0.001-53.377,43.423-96.8,96.798-96.8s96.799,43.424,96.799,96.799c0,53.343-28.498,101.699-52.407,132.872
            c-0.767,0.999-1.533,1.977-2.3,2.955c-0.781,0.997-1.563,1.981-2.344,2.956c-0.249,0.31-0.498,0.623-0.747,0.931
            c-0.777,0.963-1.552,1.914-2.327,2.854c-0.249,0.301-0.497,0.604-0.745,0.903c-0.774,0.935-1.546,1.857-2.315,2.767
            c-0.242,0.287-0.485,0.573-0.727,0.858c-0.774,0.911-1.549,1.81-2.313,2.696c-0.229,0.265-0.458,0.528-0.686,0.79
            c-0.775,0.889-1.545,1.766-2.311,2.63c-0.216,0.244-0.431,0.485-0.646,0.727c-0.777,0.871-1.549,1.731-2.315,2.574
            c-0.19,0.209-0.378,0.415-0.567,0.622c-0.783,0.859-1.563,1.708-2.333,2.537c-0.162,0.174-0.324,0.347-0.485,0.521
            c-0.791,0.85-1.578,1.687-2.353,2.505c-0.123,0.129-0.244,0.256-0.365,0.383c-0.808,0.849-1.607,1.684-2.394,2.497
            c-0.074,0.077-0.147,0.151-0.222,0.228c-0.827,0.853-1.645,1.69-2.445,2.502c-0.018,0.018-0.036,0.036-0.053,0.054
            c-5.135,5.2-9.71,9.54-13.394,12.908C229.93,329.862,159.202,257.301,159.202,172.453z M124.712,332.535h69.609
            c22.376,27.534,43.37,45.907,50.029,51.489c0.002,0.002,0.004,0.003,0.006,0.005c0.241,0.202,0.465,0.389,0.668,0.557
            c0.014,0.011,0.025,0.021,0.04,0.032c0.396,0.328,0.721,0.596,0.96,0.789c0.019,0.016,0.03,0.025,0.05,0.041
            c0.191,0.155,0.329,0.266,0.4,0.323c0.007,0.006,0.024,0.019,0.03,0.024l0.002,0.001h0.001l0.01,0.008l9.486,7.575l9.486-7.575
            l0.01-0.008h0.001l0.002-0.001c0.006-0.005,0.022-0.018,0.03-0.024c0.071-0.057,0.209-0.167,0.4-0.323
            c0.018-0.015,0.029-0.024,0.05-0.041c0.238-0.194,0.564-0.462,0.96-0.789c0.014-0.011,0.025-0.021,0.04-0.032
            c0.203-0.168,0.426-0.355,0.668-0.557c0.002-0.001,0.004-0.003,0.006-0.005c6.66-5.583,27.653-23.955,50.029-51.489h69.609
            l68.264,103.811H56.448L124.712,332.535z"/>
        </g>
      </g>
    </svg>
    <p>Самовивіз</p>
  </a>
</div>
<div className="contact-block telegram">
  <a href="https://web.telegram.org/a/#795295778" target="_blank" rel="noopener noreferrer">
  <svg  viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg"  preserveAspectRatio="xMidYMid">
		<g>
				<path d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z" fill="#40B3E0">

</path>
				<path d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308" fill="#FFFFFF">

</path>
				<path d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475" fill="#D2E5F1">

</path>
				<path d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624" fill="#B5CFE4">

</path>
		</g>
</svg>
    <p>Телеграм</p>
  </a>
</div>
<div className="contact-block instagram">
<<<<<<< HEAD
  <a href="https://www.instagram.com/hookah.paradise.lviv/" target="_blank" rel="noopener noreferrer">
=======
  <a href="https://www.instagram.com/hookah.paradise.lv/" target="_blank" rel="noopener noreferrer">
>>>>>>> 338712e785a9c24c9fc41a330717adbbbff6d760
  <svg  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"/>
<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"/>
<rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"/>
<path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)">
<stop stop-color="#B13589"/>
<stop offset="0.79309" stop-color="#C62F94"/>
<stop offset="1" stop-color="#8A3AC8"/>
</radialGradient>
<radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)">
<stop stop-color="#E0E8B7"/>
<stop offset="0.444662" stop-color="#FB8A2E"/>
<stop offset="0.71474" stop-color="#E2425C"/>
<stop offset="1" stop-color="#E2425C" stop-opacity="0"/>
</radialGradient>
<radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)">
<stop offset="0.156701" stop-color="#406ADC"/>
<stop offset="0.467799" stop-color="#6A45BE"/>
<stop offset="1" stop-color="#6A45BE" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>
    <p>Інстаграм</p>
  </a>
</div>
<div className="contact-block phone-number">
  <a href="tel:+380 68 684 80 12" >
  <svg width="80px" height="80px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet">

<path d="M120.44 34.72C115.11 28.18 96.41 16.23 64 16.23S12.89 28.18 7.56 34.72S1.97 48.87 2.23 54.28c.01.3.06.75.15 1.27c.63 3.61 1.72 6.2 16.52 6.2c15.79 0 17.54-3.89 17.64-6.74c.16-4.64.71-10.79 2.8-12.09c2.47-1.52 4.58-6.93 24.67-7.24c20.09.32 22.2 5.72 24.67 7.24c2.1 1.3 2.64 7.44 2.8 12.09c.1 2.85 1.85 6.74 17.64 6.74c14.79 0 15.89-2.6 16.52-6.2c.09-.52.13-.97.15-1.27c.24-5.41-.01-13.01-5.35-19.56z" fill="#c62828">

</path>

<path d="M109.11 65.76c-9.45 0-20.34-1.1-20.63-9.64a2.99 2.99 0 0 1 2.89-3.1a3.008 3.008 0 0 1 3.1 2.89c.04 1.16 1.55 3.85 14.64 3.85c15.53 0 16.73-6.08 16.73-6.08c.99 2.44 3.28 11.21-16.73 12.08z" fill="#912221">

</path>

<path d="M18.88 64.76c9.45 0 20.34-1.1 20.63-9.64a2.99 2.99 0 0 0-2.89-3.1a3.008 3.008 0 0 0-3.1 2.89c-.04 1.16-1.55 3.85-14.64 3.85c-15.53 0-16.73-6.08-16.73-6.08c-.96 2.22-3.28 11.21 16.73 12.08z" fill="#912221">

</path>

<path d="M98.04 30.12c-5.26-2.18-15.79-5.14-34.04-5.14s-28.77 2.96-34.04 5.14c-1.73.71-1.89 3.07-.29 4.04c2.99 1.82 6.71 5.29 7.67 11.62c.03.21.09.4.15.59c.42-1.64 1-2.92 1.83-3.43c2.47-1.52 4.58-6.93 24.67-7.24c20.09.32 22.2 5.72 24.67 7.24c.83.51 1.41 1.79 1.83 3.43c.06-.19.12-.38.15-.59c.96-6.32 4.68-9.8 7.67-11.62c1.61-.97 1.46-3.33-.27-4.04z" fill="#912221">

</path>

<path d="M119.54 46.36c-2.05-5.01-3.8-7.1-9.62-9.4c-2.1-.83-3.36-2.37-2.84-3.65c.52-1.28 1.88-1.73 4.05-1.16c6.09 1.58 10.73 7.29 10.74 13.99c-.01 3.12-1.53 2.17-2.33.22z" fill="#f44336">

</path>

<path d="M10.41 36.32c.38 1.27 2.86.21 5.87-.03c4.17-.33 5.4.97 7.25 2.91c1.55 1.63 3.77 1.66 4.59.55c.83-1.11.34-2.34-1.09-4.07c-1.06-1.29-5.63-4.36-12.38-2.54c-1.53.43-4.64 1.84-4.24 3.18z" fill="#f44336">

</path>

<path d="M18.89 95.61v21.29c0 3.92 3.38 7.1 7.54 7.1h75.14c4.16 0 7.54-3.18 7.54-7.1V95.12l-90.22.49z" fill="#c62828">

</path>

<path d="M108.89 92.03s-7.81-36.32-9.07-42.74s-3.45-8.31-7.15-8.37c-2.49-.04-5.12-1.75-5.56-4.82c-.44-3.03-.54-4.81-.72-6.15c-.18-1.34-.13-3.3-2.05-3.3h-3.81c-1.7 0-1.84.33-2.12 2.73c-.28 2.41-.66 7.05-1.6 9.37c-.81 1.99-2.95 2.17-4.17 2.17H55.35c-1.21 0-3.36-.18-4.17-2.17c-.94-2.32-1.33-6.97-1.6-9.37c-.28-2.41-.42-2.73-2.12-2.73h-3.81c-1.91 0-1.86 1.96-2.05 3.3c-.18 1.34-.28 3.12-.72 6.15c-.45 3.07-3.07 4.78-5.56 4.82c-3.7.06-5.89 1.95-7.15 8.37S19.1 92.03 19.1 92.03c-1.05 7.07 1.4 10.03 14.08 10.03H94.8c12.7 0 15.15-2.96 14.09-10.03z" fill="#ff4638">

</path>

<g>

<path d="M88.5 58.82l-3.72-6.07l-8.24-1.42l-3 1.79c-.7.42-1.57.39-2.25-.05l-1.55-1.02l-11.41.09l-1.19.86c-.69.5-1.62.53-2.34.09l-2.74-1.68l-12.56 7.41l-4.47 25.5l.21 4.61c.04.94.82 1.68 1.76 1.68h54.01c.94 0 1.72-.74 1.76-1.68l.21-4.61l-4.48-25.5z" fill="#4e342e">

</path>

<g fill="#f5f5f5">

<path d="M78.64 72.46h10.31c.97 0 1.71-.88 1.54-1.83l-.95-5.45c-.13-.75-.78-1.29-1.54-1.29H78c-.94 0-1.66.82-1.55 1.75l.65 5.45c.08.78.75 1.37 1.54 1.37z">

</path>

<path d="M59.39 60.4h9.35c.89 0 1.61-.75 1.56-1.64l-.31-5.95a1.56 1.56 0 0 0-1.56-1.48H59.7c-.83 0-1.52.65-1.56 1.48l-.31 5.95c-.05.89.67 1.64 1.56 1.64z">

</path>

<path d="M69.75 76.97H58.38c-.83 0-1.52.65-1.56 1.48l-.28 5.45c-.05.89.67 1.64 1.56 1.64h11.93c.89 0 1.61-.75 1.56-1.64l-.28-5.45a1.56 1.56 0 0 0-1.56-1.48z">

</path>

<path d="M58.79 72.46h10.54c.89 0 1.61-.75 1.56-1.64l-.28-5.45a1.56 1.56 0 0 0-1.56-1.48h-9.98c-.83 0-1.52.65-1.56 1.48l-.28 5.45c-.04.89.67 1.64 1.56 1.64z">

</path>

<path d="M48.51 76.97H37.63c-.76 0-1.41.55-1.54 1.29l-.95 5.45c-.17.96.57 1.83 1.54 1.83h11.19c.79 0 1.46-.59 1.55-1.38l.65-5.45c.1-.92-.62-1.74-1.56-1.74z">

</path>

<path d="M39.05 72.46h10.43c.79 0 1.46-.59 1.55-1.38l.65-5.45c.11-.93-.61-1.75-1.55-1.75H40.01c-.76 0-1.41.55-1.54 1.29l-.95 5.45c-.18.96.56 1.84 1.53 1.84z">

</path>

<path d="M77.26 60.4h9.66c.97 0 1.71-.88 1.54-1.83l-1.04-5.95c-.13-.75-.78-1.29-1.54-1.29h-9.33c-.94 0-1.66.82-1.55 1.75l.71 5.95c.09.78.76 1.37 1.55 1.37z">

</path>

<path d="M52.42 59.02l.71-5.95c.11-.93-.61-1.75-1.55-1.75h-9.46c-.76 0-1.41.55-1.54 1.29l-1.04 5.95c-.17.96.57 1.83 1.54 1.83h9.79c.79.01 1.46-.58 1.55-1.37z">

</path>

<path d="M78.06 78.72l.65 5.45c.09.79.76 1.38 1.55 1.38h11.06c.97 0 1.71-.88 1.54-1.83l-.95-5.45c-.13-.75-.78-1.29-1.54-1.29H79.61c-.93-.01-1.66.81-1.55 1.74z">

</path>

</g>

</g>

</svg>
    <p>Номер телефону</p>
  </a>
</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;