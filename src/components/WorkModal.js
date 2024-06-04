import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { worksImage } from "../data/works/WorksImage";
import { worksVideo } from "../data/works/WorksImage";
import { worksText } from "../data/works/WorksText";
import { demoLink } from "../data/works/WorksLink";
import { sourceLink } from "../data/works/WorksLink";

function WorkModal({ work }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <button className="work-modal-button" onClick={handleShow}>
          More Detail
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{work}</Modal.Title>
        </Modal.Header>
        {worksVideo(work) ? (
          <iframe
            src={worksVideo(work)}
            width="100%"
            height="380"
            className="px-4 py-2"
            allow="autoplay"
            title="work video"
          ></iframe>
        ) : (
          <img className="modal-image" src={worksImage(work)} alt={work} />
        )}
        <Modal.Body style={{ whiteSpace: "pre-wrap" }} className="px-5">
          {worksText(work)}
        </Modal.Body>
        <Modal.Footer>
          <div style={{ margin: "0 auto" }}>
            {demoLink(work) ? (
              <button
                className="modal-link-button"
                onClick={() => {
                  window.open(demoLink(work));
                }}
              >
                Demo Link
              </button>
            ) : null}
            {sourceLink(work) ? (
              <button
                className="modal-link-button"
                onClick={() => {
                  window.open(sourceLink(work));
                }}
              >
                Source Code
              </button>
            ) : null}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WorkModal;
