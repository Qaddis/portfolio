import { useSetAtom } from "jotai"
import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"
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
}

export default function NavButton({ children, href, ...props }: IProps) {
	const router = useRouter()
	const setTransition = useSetAtom(isTransitionAtom)

	const handleClick = async (
		evt: React.MouseEvent<HTMLAnchorElement>
	): Promise<void> => {
		evt.preventDefault()

		setTransition(true)
		await sleep(550)
		router.push(href)
	}

	return (
		<Link
			onClick={handleClick}
			className={styles.button}
			href={href}
			{...props}
		>
			{children}
		</Link>
	)
}
