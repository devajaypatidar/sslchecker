const express = require("express");
const { checkSslCertificate } = require("../controllers/sslController");

const router = express.Router();

router.post("/check", checkSslCertificate);

module.exports = router;
