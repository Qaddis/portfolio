"use client"

import { useSetAtom } from "jotai"
import Link, { type LinkProps } from "next/link"
import { usePathname, useRouter } from "next/navigation"
import type { AnchorHTMLAttributes, PropsWithChildren } from "react"

import { PagesEnum } from "@/constants/navigation"
import sleep from "@/functions/sleep"
import { isTransitionAtom } from "@/store/store"
import styles from "./button.module.scss"

interface IProps
	extends PropsWithChildren,
		LinkProps,
		Exclude<AnchorHTMLAttributes<HTMLAnchorElement>, LinkProps> {
	href: PagesEnum
	param?: string
}

export default function NavButton({
	children,
	href,
	param,
	className,
	...props
}: IProps) {
	const router = useRouter()
	const path = usePathname()
	const setTransition = useSetAtom(isTransitionAtom)

	const to = param ? href + `/${param}` : href

	const handleClick = async (
		evt: React.MouseEvent<HTMLAnchorElement>
	): Promise<void> => {
		evt.preventDefault()

		if (path !== to) {
			setTransition(true)
			await sleep(550)
			router.push(to, { scroll: true })
		}
	}

	return (
		<Link
			className={className ? `${styles.button} ${className}` : styles.button}
			href={to}
			onClick={handleClick}
			{...props}
		>
			{children}
		</Link>
	)
}
