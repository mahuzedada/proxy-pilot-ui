export interface SSLCertificate {
  id: string;
  createdAt: string;
  updatedAt: string;
  domain: string;
  certificateStatus: string;
  targetDomain: string;
  issuedDate: string;
  expiryDate: string;
  proxyStatus: string;
}
