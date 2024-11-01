import { burgerAtom, isTransitionAtom } from "@/store/store"
import { useSetAtom } from "jotai"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import type { Dispatch, PropsWithChildren } from "react"
import styles from "./link.module.scss"

interface IProps extends PropsWithChildren {
	href: string
	isBurger?: boolean
	tabIndex?: number
	setHeader?: Dispatch<boolean>
}

async function sleep(ms: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, ms))
}

export default function NavLink({
	children,
	href,
	isBurger,
	setHeader,
	tabIndex
}: IProps) {
	const path = usePathname()
	const router = useRouter()
	const setBurger = useSetAtom(burgerAtom)
	const setTransition = useSetAtom(isTransitionAtom)

	const handleClick = async (
		evt: React.MouseEvent<HTMLAnchorElement>
	): Promise<void> => {
		evt.preventDefault()

		if (href !== path) {
			if (isBurger) {
				setBurger(false)
				await sleep(150)
				setTransition(true)
				await sleep(550)
				router.push(href)
			} else {
				setTransition(true)
				await sleep(550)
				router.push(href)
			}
		}
	}

	return (
		<Link
			href={href}
			title={`Перейти на страницу "${children}"`}
			onClick={handleClick}
			className={
				href === path ? `${styles.link} ${styles.active}` : styles.link
			}
			onFocus={() => setHeader && setHeader(true)}
			tabIndex={tabIndex}
		>
			{children}
		</Link>
	)
}
