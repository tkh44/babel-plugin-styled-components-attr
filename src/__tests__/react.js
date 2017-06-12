/* eslint-disable jsx-quotes,no-useless-escape,no-template-curly-in-string */
/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import styled, { css } from 'styled-components'

describe('react', () => {
  test('attr', () => {
    const H1 = styled.h1`
      font-size: attr(fontSize);
      margin: attr(margin rem, 4);
    `

    const Title = ({title}) => {
      return (
        <H1 fontSize={48}>
          {title}
        </H1>
      )
    }

    const tree = renderer
      .create(
        <Title/>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('call expression', () => {
    const H1 = styled('h1')`
      font-size: attr(fontSize);
      margin: attr(margin rem, 4);
    `

    const tree = renderer
      .create(
        <H1 className={'legacy__class'}>
          hello world
        </H1>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('function in expression', () => {
    const fontSize = 20
    const H1 = styled('h1')`
      font-size: ${fontSize}px;
    `

    const H2 = styled(H1)`font-size: ${({scale}) => fontSize * scale}`

    const tree = renderer
      .create(
        <H2 scale={2} className={'legacy__class'}>
          hello world
        </H2>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
