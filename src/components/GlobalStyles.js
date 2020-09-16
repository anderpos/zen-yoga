import { createGlobalStyle } from 'styled-components';

import baloo_tammudu_2regular_woff2 from '../fonts/balootammudu2/balootammudu2-regular-webfont.woff2';
import baloo_tammudu_2regular_woff from '../fonts/balootammudu2/balootammudu2-regular-webfont.woff';
import baloo_tammudu_2semibold_woff2 from '../fonts/balootammudu2/balootammudu2-semibold-webfont.woff2';
import baloo_tammudu_2semibold_woff from '../fonts/balootammudu2/balootammudu2-semibold-webfont.woff';
import baloo_tammudu_2bold_woff2 from '../fonts/balootammudu2/balootammudu2-bold-webfont.woff2';
import baloo_tammudu_2bold_woff from '../fonts/balootammudu2/balootammudu2-bold-webfont.woff';
import sfprotext_regular_webfont_woff2 from '../fonts/sfprotext/sfprotext-regular-webfont.woff2';
import sfprotext_regular_webfont_woff from '../fonts/sfprotext/sfprotext-regular-webfont.woff';


export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Baloo Tammudu 2';
    src: url(${baloo_tammudu_2regular_woff2}) format('woff2'),
         url(${baloo_tammudu_2regular_woff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Baloo Tammudu 2';
    src: url(${baloo_tammudu_2semibold_woff2}) format('woff2'),
         url(${baloo_tammudu_2semibold_woff}) format('woff');
    font-weight: 600;
    font-style: 600;
  }

  @font-face {
    font-family: 'Baloo Tammudu 2';
    src: url(${baloo_tammudu_2bold_woff2}) format('woff2'),
         url(${baloo_tammudu_2bold_woff}) format('woff');
    font-weight: bold;
    font-style: bold;
  }

  @font-face {
    font-family: 'SF Pro Text';
    src: url(${sfprotext_regular_webfont_woff2}) format('woff2'),
         url(${sfprotext_regular_webfont_woff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background-color:#ECF1FA;
    flex-direction: column;
    display: flex;
    min-width:1150px;        
    width: auto !important; 
    width:1150px;  
    font-family: 'Baloo Tammudu 2';
    color: #C3CBD5;
  }
`