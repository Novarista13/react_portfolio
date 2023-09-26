import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
          type="email"
          required=""
          placeholder="Your name"
          autoFocus=""
        />
        <Form.Control
          className="form-input"
          type="email"
          name="_replyto"
          required=""
          placeholder="Your email"
        />
        <Form.Control
          className="form-input"
          name="message"
          required=""
          placeholder="Type your message"
          as="textarea"
          rows={7}
        />
      <div className="text-center">
        <Button type="submit" className="form-button">
          Send
        </Button>
      </div>
    </Form>
  );
}
