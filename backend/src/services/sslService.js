const https = require("https");

exports.getCertificateDetails = async (domain) => {
  return new Promise((resolve, reject) => {
    const options = {
      host: domain,
      port: 443,
      method: "GET",
      rejectUnauthorized: false,
    };

    const req = https.request(options, (res) => {
      const certificate = res.socket.getPeerCertificate();

      if (!certificate || Object.keys(certificate).length === 0) {
        return reject(new Error("The site does not provide a certificate"));
      }

      const isValidForDomain = certificate.subject.CN === domain;
      const isSelfSigned = certificate.issuer.CN === certificate.subject.CN;

      const result = {
        validityStatus: res.socket.authorized ? "Valid" : "Invalid",
        expirationDate: certificate.valid_to,
        issuerDetails: certificate.issuer,
        subjectDetails: certificate.subject,
        isValidForDomain,
        caValidityCheck: !isSelfSigned,
        isSelfSigned,
        crlOcspStatus: null,
      };

      resolve(result);
    });

    req.on("error", (error) => {
      reject(new Error(`Failed to fetch SSL certificate: ${error.message}`));
    });

    req.end();
  });
};
