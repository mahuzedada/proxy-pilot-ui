export default function () {
  const timestamp = Date.now(); // Gets the current timestamp
  const randomUUID = 'xxxx-4xxx-yxxx-xxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

  return `${timestamp}-${randomUUID}`;
}
