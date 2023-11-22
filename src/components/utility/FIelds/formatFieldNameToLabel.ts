export default function formatFieldNameToLabel(input?: string): string {
  if (!input) {
    return '';
  }
  // Replace hyphens with spaces and split by spaces
  let words = input.replace(/-/g, ' ').split(' ');

  // Handle camelCase and PascalCase by inserting spaces before capital letters
  words = words.flatMap((word) => word.split(/(?=[A-Z])/));

  // Capitalize the first letter of each word and join them with a space
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
