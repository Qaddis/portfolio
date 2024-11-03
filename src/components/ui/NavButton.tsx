import { isTransitionAtom } from "@/store/store"
import { useSetAtom } from "jotai"
import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import type { AnchorHTMLAttributes, PropsWithChildren } from "react"
import styles from "./button.module.scss"

interface IProps
	extends PropsWithChildren,
		LinkProps,
		Exclude<AnchorHTMLAttributes<HTMLAnchorElement>, LinkProps> {
	href: string
}

async function sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export default function PageLink({ children, href, ...props }: IProps) {
	const router = useRouter()
	const setTransition = useSetAtom(isTransitionAtom)

	const handleClick = async (
		evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
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
