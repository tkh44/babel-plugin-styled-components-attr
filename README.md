# babel-plugin-styled-components-attr


use the CSS attr function in your styled-components code.



[![npm version](https://badge.fury.io/js/babel-plugin-styled-components-attr.svg)](https://badge.fury.io/js/babel-plugin-styled-components-attr)
[![Build Status](https://travis-ci.org/tkh44/babel-plugin-styled-components-attr.svg?branch=master)](https://travis-ci.org/tkh44/babel-plugin-styled-components-attr)
[![codecov](https://codecov.io/gh/tkh44/babel-plugin-styled-components-attr/branch/master/graph/badge.svg)](https://codecov.io/gh/tkh44/babel-plugin-styled-components-attr)

<img style="max-height: 200px;" src="https://user-images.githubusercontent.com/662750/27061725-7bfa4d92-4fa3-11e7-8e7b-cf40e1a5bd21.png"/>

```jsx
const Input = styled.input`
  color: attr(color);
  width: attr(width %);
  margin: attr(margin px, 16);
`
```

## Install

```bash
npm install -S babel-plugin-styled-components-attr
```


**.babelrc**
```json
{
  "plugins": [
    "styled-components-attr"
  ]
}
```

#### attr

The [attr](https://developer.mozilla.org/en-US/docs/Web/CSS/attr) CSS function is supported in
a basic capacity. I will be adding more features, but PRs are welcome.

```css
/* get value from `width` prop */
width: attr(width vw);

/* specify type or unit to apply to value */
width: attr(width vw);

/* fallback value if props.width is falsey */
width: attr(width vw, 50);
```

```jsx
const H1 = styled.h1`
  font-size: attr(fontSize px);
  margin: attr(margin rem, 4);
  font-family: sans-serif;
  color: ${colors.pink[5]};
  @media (min-width: 680px) {
    color: attr(desktopColor);
  }
`

const Title = ({ title, scale }) => {
  return (
    <H1 fontSize={16 * scale} desktopColor={colors.gray[5]}>
      {title}
    </H1>
  )
}
```

##### Value types
*checked is supported*
 
- [x] em
- [x] ex
- [x] px
- [x] rem
- [x] vw
- [x] vh
- [x] vmin
- [x] vmax
- [x] mm
- [x] cm
- [x] in
- [x] pt
- [x] pc
- [x] %
- [ ] string
- [ ] color
- [ ] url
- [ ] integer
- [ ] number
- [ ] length
- [ ] deg
- [ ] grad
- [ ] rad
- [ ] time
- [ ] s
- [ ] ms
- [ ] frequency
- [ ] Hz
- [ ] kHz





