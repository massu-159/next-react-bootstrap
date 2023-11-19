import Container from './container'
import { DefaultButton } from './Button'
import SetAppContainer from './setAppContainer'
import FormTest from './form'

export default function Home() {
  return (
    <main>
      <div className='center'>
        {/* <Container
          buttons={[
            <DefaultButton key="1" buttonProps={{variant: "primary"}} buttonText="Primary"/>,
            <DefaultButton key="2" buttonProps={{variant: "secondary"}} buttonText="Secondary"/>,
        ]}
        >
          <p>ここにchildrenが入ります</p>
        </Container> */}

        {/* <SetAppContainer></SetAppContainer> */}
        <FormTest></FormTest>

      </div>

    </main>
  )
}
