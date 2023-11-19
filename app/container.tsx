import React, { ReactComponentElement } from 'react'
import { Button } from 'react-bootstrap'

type Props = {
  children: React.ReactNode
  buttons: ReactComponentElement<typeof Button>[]
}
const Container = ({children, buttons}:Props) => {
  return (
    <div>
      <div>
        {children}
      </div>
      <div>
        {buttons}
      </div>
    </div>
  )
}

export default Container