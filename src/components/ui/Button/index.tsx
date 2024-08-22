import type { ButtonHTMLAttributes, PropsWithChildren } from "react"
import styles from "./button.module.scss"

interface IProps
	extends PropsWithChildren,
		ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button(props: IProps) {
	return (
		<button className={styles.button} {...props}>
			{props.children}
		</button>
	)
}
