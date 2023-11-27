export default function (email: string): boolean | string {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email) || `${email} is not a valid email`;
}
