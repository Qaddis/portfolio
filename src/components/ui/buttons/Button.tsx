"use client"

import type { ButtonHTMLAttributes, PropsWithChildren } from "react"

import styles from "./Button.module.scss"

interface IButtonProps
	extends PropsWithChildren,
		ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: IButtonProps) {
	return (
		<button className={styles.button} {...props}>
			{children}
		</button>
	)
}
