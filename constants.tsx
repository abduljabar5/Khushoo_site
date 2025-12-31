import React from 'react';

// Using the local file provided in the codebase
export const APP_SCREENSHOT_URL = "IMG_2271.PNG";

// Generated SVG Data URI for the Sujud Icon (Green to Yellow gradient)
const ICON_SVG = `
<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="grad1" x1="0" y1="128" x2="128" y2="0" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#10b981"/>
<stop offset="0.5" stop-color="#4ade80"/>
<stop offset="1" stop-color="#facc15"/>
</linearGradient>
</defs>
<path d="M28 96C28 96 36 32 72 32C104 32 116 80 116 96" stroke="url(#grad1)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 96H32" stroke="url(#grad1)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M108 96H116" stroke="url(#grad1)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`.trim().replace(/\n/g, '');

export const ASSETS = {
  screenshot: APP_SCREENSHOT_URL,
  icon: `data:image/svg+xml;utf8,${encodeURIComponent(ICON_SVG)}`,
  appStoreBadge: "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1276560000&h=775388c3479611f72782759942a00c7e"
};

export const APP_NAME = "Khushoo";
export const DOWNLOAD_LINK = "https://apps.apple.com/us/app/khushoo"; // Placeholder link
export const GITHUB_LINK = "https://github.com/abduljabar5/Khushoo123";
export const CONTACT_EMAIL = "support@khushoo.app";