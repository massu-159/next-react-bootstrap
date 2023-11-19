'use client'

import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import Link from "next/link";
import InfoIcon from '@mui/icons-material/Info';

const SetAppContainer = () => {

  return (
    <Link
      href={"/family/" + "/links/" + "/feature-permissions"}
      className="border rounded-3 shadow-sm text-decoration-none text-dark cursor-pointer"
    >
        <Container>
          <Row>
            <Col
              xs={4}
              sm={3}
              className="d-flex justify-content-center align-items-center"
            >
              <h2>画像</h2>
            </Col>
            <Col
              xs={7}
              sm={8}
              className="d-flex flex-column justify-content-between"
            >
            <h1>iOS / Android</h1>
            </Col>
            <Col
              xs={1}
              sm={1}
              className="d-flex justify-content-end align-items-center"
            >
                <div className="d-flex">
                  <OverlayTrigger
                    key="child-application-links-overlay-trigger"
                    placement={"top"}
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