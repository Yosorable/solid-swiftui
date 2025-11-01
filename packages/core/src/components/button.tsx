import { BaseProps } from "./props/base_props";

interface ButtonProps extends BaseProps {
  color?: string
}

export function Button(props: ButtonProps): JSX.Element {
  return <ss_button {...props} />
}