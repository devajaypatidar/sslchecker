import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [domain, setDomain] = useState("");
  const [sslData, setSslData] = useState(null);
  const [error, setError] = useState(null);

  const handleCheckSSL = async () => {
    setSslData(null);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5000/api/ssl/check", {
        domain,
      });
      setSslData(response.data);
      setDomain("");
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "An error occurred while checking the SSL certificate."
      );
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SSL Certificate Checker</h1>

      <input
        type="text"
        className={styles.input}
        value={domain}
        placeholder="Enter domain (e.g., example.com)"
        onChange={(e) => setDomain(e.target.value)}
      />

      <button className={styles.button} onClick={handleCheckSSL}>
        Check SSL
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {sslData && (
        <div className={styles.result}>
          <h2>SSL Certificate Details</h2>
          <p>
            <strong>Validity Status:</strong> {sslData.validityStatus}
          </p>
          <p>
            <strong>Expiration Date:</strong> {sslData.expirationDate}
          </p>
          <p>
            <strong>Issuer Details:</strong>{" "}
            {sslData.issuerDetails?.O || "Unknown"}
          </p>
          <p>
            <strong>Subject Details:</strong>{" "}
            {sslData.subjectDetails?.CN || "Unknown"}
          </p>
          <p>
            <strong>Valid for Domain:</strong>{" "}
            {sslData.isValidForDomain ? "Yes" : "No"}
          </p>
          <p>
            <strong>CA Validity Check:</strong>{" "}
            {sslData.caValidityCheck ? "Yes" : "No"}
          </p>
          <p>
            <strong>Self-Signed:</strong> {sslData.isSelfSigned ? "Yes" : "No"}
          </p>
          <p>
            <strong>CRL/OCSP Status:</strong>{" "}
            {sslData.crlOcspStatus || "Not Checked"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
