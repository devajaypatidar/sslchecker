const parseCertificate = (certificate) => {
  return {
    validFrom: certificate.valid_from,
    validTo: certificate.valid_to,
    issuer: certificate.issuer,
    subject: certificate.subject,
    isValidForDomain: certificate.subject.CN,
    isSelfSigned: certificate.issuer.CN === certificate.subject.CN,
  };
};

module.exports = {
  parseCertificate,
};
