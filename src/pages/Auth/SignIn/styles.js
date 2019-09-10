import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 40px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.1);

  h1 {
    align-self: center;
    margin-bottom: 20px;
  }

  label {
    font-weight: 700;
    margin-bottom: 10px;
  }

  input {
    color: #333;
    background: #fff;
    border: 0;
    height: 44px;
    border-radius: 4px;
    margin-top: 5px;
    width: 100%;
    padding: 0 15px;
    font-weight: bold;
    display: block;
  }

  button {
    margin-top: 15px;
  }
`
