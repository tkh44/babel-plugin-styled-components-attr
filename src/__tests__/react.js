/* eslint-disable jsx-quotes,no-useless-escape,no-template-curly-in-string */
/* eslint-env jest */
import 'jest-styled-components'
import React from 'react'
import renderer from 'react-test-renderer'
import styled, { css } from 'styled-components'

describe('react', () => {
  test('attr', () => {
    const baseText = css`color: attr(color, #a9e34b);`

    const H1 = styled.h1`
      font-size: attr(fontSize);
      margin: attr(margin rem, 4);
      ${baseText}
    `

    const Title = ({ title }) => {
      return (
        <H1 color="#495057" fontSize={48}>
          {title}
        </H1>
      )
    }

    const tree = renderer.create(<Title />).toJSON()

    expect(tree).toMatchStyledComponentsSnapshot()
  })

  test('call expression', () => {
    const Input = styled.input`
      color: attr(color);
      width: attr(width %);
      margin: attr(margin px, 16);
    `

    const H1 = styled('h1')`
      font-size: attr(fontSize);
      margin: attr(margin rem, 4);
    `

    const tree = renderer
      .create(
        <H1 className={'legacy__class'}>
          hello world
          <Input color="#ffffff" width={48} margin={16} />
        </H1>
      )
      .toJSON()

    expect(tree).toMatchStyledComponentsSnapshot()
  })

  test('function in expression', () => {
    const fontSize = 20
    const H1 = styled('h1')`
      height: attr(height);
      font-size: ${fontSize}px;
    `

    const H2 = styled(H1)`font-size: ${({ scale }) => fontSize * scale}`

    const tree = renderer
      .create(
        <H2 scale={2} height={48} className={'legacy__class'}>
          hello world
        </H2>
      )
      .toJSON()

    expect(tree).toMatchStyledComponentsSnapshot()
  })

  test('default value does not show when real value is 0', () => {
    const H1 = styled('h1')`
      height: attr(height px, 99);
    `

    const tree = renderer.create(<H1 height={0} />).toJSON()

    expect(tree).toMatchStyledComponentsSnapshot()
  })
})
