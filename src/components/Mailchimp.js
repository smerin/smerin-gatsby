import React, { useState } from "react";
import cx from "classnames";
import addToMailchimp from "gatsby-plugin-mailchimp";
import {
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";
import * as style from "./Mailchimp.module.scss";

const Mailchimp = ({ title }) => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [msg, setMsg] = useState();
  const [result, setResult] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const response = await addToMailchimp(email);
    console.log(response);

    setResult(response.result);
    setSubmitting(false);

    if (response.result === "success") {
      setEmail("");
    }
  };

  const success = result === "success";
  const error = result === "error";

  const msgClass = cx(style.message, {
    [style.success]: success,
    [style.error]: error
  });
  return (
    <div className={style.mailchimp}>
      {title && <h3>{title}</h3>}
      <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
        <fieldset disabled={submitting}>
          <div className={style.inputs}>
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email..."
            />
            <button type="submit">
              <FaPaperPlane />
            </button>
          </div>
        </fieldset>
      </form>
      {msg && (
        <div className={msgClass}>
          {success && <FaCheckCircle />}
          {error && <FaExclamationCircle />}
          <p dangerouslySetInnerHTML={{ __html: msg }} />
        </div>
      )}
    </div>
  );
};

export default Mailchimp;
