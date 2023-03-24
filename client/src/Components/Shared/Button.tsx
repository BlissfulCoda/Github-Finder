type ButtonTypes = {
  children: React.ReactNode;
  className: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  ...rest
}: ButtonTypes): JSX.Element {
  return <button {...rest}>{children}</button>;
}
