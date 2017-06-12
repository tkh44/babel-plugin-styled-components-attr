/* eslint-disable jsx-quotes,no-useless-escape,no-template-curly-in-string */
/* eslint-env jest */
const plugin = require('../index')
const babel = require('babel-core')

describe('emotion/babel', () => {
  describe('babel styled component', () => {
    test('something else', () => {
      const basic = `
         const a = \`color: attr(height);\`
      `
      const {code} = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('empty', () => {
      const basic = `
         styled('input')\`\`
      `
      const {code} = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('css tag', () => {
      const basic = `css\`
        margin: attr(margin px, 16);
        padding: attr(padding em, 16);
        font-size: attr(fontSize ch, 8);
        width: attr(width %, 95);
        height: attr(height vw, 90);
        display: attr(display, flex);
      \``
      const {code} = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('basic', () => {
      const basic = `
         styled('input')\`
         height: $\{props => props.height};
         margin: attr(margin);
         padding: attr(padding em, 16);
         color: blue;
        \`
      `
      const {code} = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })



    test('member expression', () => {
      const basic = `styled.input\`
       margin: attr(margin);
       color: #ffffff;
       height: \$\{props => props.height * props.scale\};
       width: attr(width);
       color: blue;
       display: \$\{flex\};
      \``
      const { code } = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('with value type', () => {
      const basic = `styled('input')\`
        margin: attr(margin px);
      \``
      const { code } = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('with default value', () => {
      const basic = `styled('input')\`
        margin: attr(margin, 16);
      \``
      const { code } = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('with value type and default value', () => {
      const basic = `styled('input')\`
        margin: attr(margin px, 16);
      \``
      const { code } = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('with value type', () => {
      const basic = `styled.input.attrs({ type: 'text' })\`
        margin: attr(margin px);
      \``
      const {code} = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('kitchen sink', () => {
      const basic = `styled('input')\`
        margin: attr(margin px, 16);
        padding: attr(padding em, 16);
        font-size: attr(fontSize ch, 8);
        width: attr(width %, 95);
        height: attr(height vw, 90);
        display: attr(display, flex);
      \``
      const { code } = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })

    test('all value types', () => {
      const basic = `styled('input')\`
        margin: attr(margin em);
        margin: attr(margin ex);
        margin: attr(margin px);
        margin: attr(margin rem);
        margin: attr(margin vw);
        margin: attr(margin vh);
        margin: attr(margin vmin);
        margin: attr(margin vmax);
        margin: attr(margin mm);
        margin: attr(margin cm);
        margin: attr(margin in);
        margin: attr(margin pt);
        margin: attr(margin pc);
        margin: attr(margin %);
      \``
      const {code} = babel.transform(basic, {
        plugins: [plugin]
      })
      expect(code).toMatchSnapshot()
    })
  })
})
