import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from "react";
import Link from "../Link";
import s from "./Button.module.scss";
import { TButton } from "./Button.types";

const Button: FC<TButton> = (props) => {
	const {
		children,
		isActive = false,
		isLink = false,
		variant = "primary",
		isAnchor = false,
		to = "/",
		className,
		...attr
	} = props;

	const cls = [s.button, isActive ? s.secondary : null, s[variant], className];

	return !isLink ? (
		<button
			type="button"
			className={cls.join(" ")}
			{...(attr as ButtonHTMLAttributes<HTMLButtonElement>)}
		>
			{children}
		</button>
	) : (
		<Link
			to={to}
			isAnchor={isAnchor}
			className={cls.join(" ")}
			{...(attr as AnchorHTMLAttributes<HTMLAnchorElement>)}
		>
			{children}
		</Link>
	);
};

export default Button;