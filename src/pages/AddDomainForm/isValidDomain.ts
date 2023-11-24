export default function (value: string) {
  // Check if the value starts with http:// or https://
  if (/^(http:\/\/|https:\/\/)/.test(value)) {
    return 'Please remove http:// or https:// from the domain';
  }

  // Regular expression to validate the domain format
  const domainRegex =
    /^(?!:\/\/)([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-][a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  return domainRegex.test(value) || 'Invalid domain format';
}
