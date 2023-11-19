'use client'

import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"

const List = [
  {id: "terms", title: "利用規約", isConsent: false},
  {id: "privacy", title: "プライバシーポリシー", isConsent: true},
]

const FormTest = () => {

  const [switchValues, setSwitchValues] = useState<{ [key: string]: boolean }>({})
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  // マウント時にスイッチの状態を初期化
  useEffect(() => {
    const initialSwitchValues: { [key: string]: boolean } = {}
    for (const consent of List) {
      initialSwitchValues[consent.id] = consent.isConsent
    }
    setSwitchValues(initialSwitchValues)
  }, [])

  // スイッチの状態を変更
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target

    console.log(id, checked)
    if (checked === false) {
      handleShow(id)
    } else {
      setSwitchValues({...switchValues, [id]: checked})
    }
  }

  // OK
  const handleOK = () => {
    setSwitchValues({...switchValues, [id]: false})
    setShow(false)
  };
  // モーダルの表示
  const handleShow = (id: string) => {
    setId(id);
    setShow(true);
  }

  // 送信
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(switchValues)
  }

  const consentList = List.map((consent) => (
    <Form.Group key={consent.id}>
      <Form.Check
        type="switch"
        id={consent.id}
        onChange={handleChange}
        defaultChecked={consent.isConsent}
        checked={switchValues[consent.id]}
        label={consent.title}
      >
      </Form.Check>
    </Form.Group>
  ))
  return (
    <Form onSubmit={handleSubmit}>
      {consentList}

      <Button type="submit">
        送信
      </Button>

      <Modal show={show}>
      <Modal.Dialog>
        <Modal.Header>
            <Modal.Title>{id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>Close</Button>
          <Button variant="primary" onClick={handleOK}>OK</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
    </Form>
  )
}

export default FormTest