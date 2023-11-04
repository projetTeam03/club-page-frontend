import { createGlobalStyle } from "styled-components";

const GlobalSytle = createGlobalStyle`
//웹 폰트
/* @font-face {
  font-family: ;
  src: url();
} */

:root {
    --main-color: #0047ff;
  }

/* reset css */
body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0 ;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  font-size: 1.6rem;

	/* 임시 */
	text-align: center;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	overflow-x: hidden;
	.modal_bg {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100vw;
    height: 100vh;
		z-index: 1;
  }
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalSytle;
