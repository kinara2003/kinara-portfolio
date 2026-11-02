const v=n=>`var(--${n})`
export default {content:['./index.html','./src/**/*.{ts,tsx}'],theme:{extend:{colors:{bg:v('bg'),bg2:v('bg2'),card:v('card'),accent:v('accent'),teal:v('teal'),ink:v('ink'),muted:v('muted'),line:v('line')},fontFamily:{sans:['Manrope','Inter','system-ui','sans-serif']}}}}
