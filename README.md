# SSL Certificate Checker

This project is a **Full-Stack SSL Certificate Checker** web application that allows users to check and validate SSL certificates for a given domain name. It provides essential details about the SSL certificate such as validity status, expiration date, issuer, and more. The project uses **Next.js** for the frontend and **Node.js** for the backend.

## Features

- **Input domain**: Users can input a domain name to check the SSL certificate.
- **SSL certificate details**: The app displays:
  - Validity status.
  - Expiration date.
  - Issuer details.
  - Subject details.
  - Domain validity check.
  - Certificate Authority (CA) validity check.
  - Verification that the certificate is not self-signed.
  - CRL/OCSP status (checking for revocation).
- **Error handling**: Provides user-friendly messages for invalid domains or network issues.
  
## Technology Stack

- **Frontend**: Next.js (React framework with server-side rendering)
- **Backend**: Node.js (Express.js)
- **SSL Certificate Fetching**: Uses Node.js's built-in `https` module to fetch and validate SSL certificates.
- **Styling**: CSS module for styling the user interface.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v14 or above)
- **npm** or **yarn**

### Installation

1. **Clone the repository**:

   ```
   git clone https://github.com/github/sslchecker.git
   cd ssl-certificate-checker
  

  2. **Install dependencies for both frontend and backend:**



```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```


## Example Output

After entering a domain, the following SSL certificate details will be displayed:

- Valid From: 2023-01-15
- Valid To: 2024-01-15
- Issuer: Let's Encrypt
- Subject: example.com
- Valid for Domain: Yes
- Self-Signed: No
- CRL/OCSP Status: Not Revoked

## Commands

To run the backend server:

```
cd backend
node app.js
```

To start the Next.js development server:

```
cd frontend
npm run dev
```

## Conclusion

This SSL Certificate Checker app provides a simple and efficient way to check the security status of a website's SSL certificate. It leverages Next.js for the frontend and Node.js for the backend, ensuring a smooth user experience and robust functionality.
