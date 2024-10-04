const sslService = require("../services/sslService");

exports.checkSslCertificate = async (req, res, next) => {
  const { domain } = req.body;

  if (!domain) {
    return res.status(400).json({ error: "Domain name is required" });
  }

  try {
    const sslData = await sslService.getCertificateDetails(domain);
    return res.status(200).json(sslData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};
