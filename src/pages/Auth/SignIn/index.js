import React from 'react'
import { Container, Form } from './styles'
import Button from '../../../components/Button'

function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Welcome</h1>

        <label htmlFor="email">
          E-mail
          <input id="email" type="text" name="email" />
        </label>

        <label htmlFor="password">
          Password
          <input id="password" type="password" name="password" />
        </label>

        <Button size="big">Enter</Button>
      </Form>
    </Container>
  )
}

export default SignIn
