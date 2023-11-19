import React from 'react'
import { Button, ButtonProps } from 'react-bootstrap'

type Props = {
  buttonText: React.ReactNode
  buttonProps: ButtonProps
}

export const DefaultButton = ({ buttonText, buttonProps}:Props) => {
  return (
    <>
      <Button {...buttonProps}>
        { buttonText }
    </Button>
    </>
  )
}