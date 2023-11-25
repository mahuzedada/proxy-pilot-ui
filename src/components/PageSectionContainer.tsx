type Props = { children };
export default function PageSectionContainer({ children }: Props) {
  return (
    <div className="text-gray-800 dark:text-white bg-white dark:bg-gray-800 shadow-md dark:shadow-lg rounded px-8 pt-6 pb-8 mb-4">
      {children}
    </div>
  );
}
