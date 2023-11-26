type Props = {
  email: string;
};
export default function PasswordResetEmailConfirmation({ email }: Props) {
  return (
    <div className="p-4 bg-green-100 text-green-700 mb-4 rounded">
      Check your inbox for email '{email}' to reset your password
    </div>
  );
}
