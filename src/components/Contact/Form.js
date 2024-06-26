import React from "react";
import Form from "react-bootstrap/Form";

export default function TextForm() {
  return (
    <Form
      action="https://formspree.io/f/xdorkzol"
      method="POST"
      className="p-3 mb-3"
    >
      <Form.Label className="form-title"> Contact me: </Form.Label>
      <Form.Control
        className="form-input"
        type="text"
        required
        name="message"
        placeholder="Your name"
        autoFocus
      />
      <Form.Control
        className="form-input"
        type="email"
        required
        name="email"
        placeholder="Your email"
      />
      <Form.Control
        className="form-input"
        required
        name="message"
        placeholder="Type your message"
        as="textarea"
        rows={7}
      />
      <div className="text-center">
        <button type="submit" className="form-button work-modal-button">
          Send
        </button>
      </div>
    </Form>
  );
}
