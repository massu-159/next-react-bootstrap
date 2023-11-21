'use client'

import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Link from "next/link";
import InfoIcon from '@mui/icons-material/Info';

const SetAppContainer = () => {

  return (
    <Link
      href={"#"}
      className="border rounded-3 shadow-sm text-decoration-none text-dark cursor-pointer my-5"
    >
        <Container>
          <Row>
            <Col
              className="d-flex justify-content-center align-items-center"
            >
              <h2>画像</h2>
            </Col>
            <Col
              className="d-flex justify-content-end align-items-center"
            >
                <div className="d-flex">
                  <OverlayTrigger
                    key="child-application-links-overlay-trigger"
                    placement={"top-end"}
                    overlay={
                      <Tooltip id="child-application-links-tooltip">
                        <div>
                          お子様は、このアプリを使用できません。
                        </div>
                      </Tooltip>
                    }
                  >
                    <InfoIcon></InfoIcon>
                  </OverlayTrigger>
                </div>
            </Col>
          </Row>
        </Container>
    </Link>
  );
};

export default SetAppContainer;