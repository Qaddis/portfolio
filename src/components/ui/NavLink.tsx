import { useSetAtom } from "jotai"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import type { Dispatch, PropsWithChildren } from "react"

import { PagesEnum } from "@/constants/navigation"
import sleep from "@/functions/sleep"
import { burgerAtom, isTransitionAtom } from "@/store/store"
import styles from "./link.module.scss"

interface IProps extends PropsWithChildren {
	href: PagesEnum
	isBurger?: boolean
	setHeader?: Dispatch<boolean>
}

export default function NavLink({
	children,
	href,
	isBurger,
	setHeader
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
				router.push(href, { scroll: true })
			} else {
				setTransition(true)
				await sleep(550)
				router.push(href, { scroll: true })
			}
		}
	}

	return (
		<Link
			className={
				href === path ? `${styles.link} ${styles.active}` : styles.link
			}
			href={href}
			onClick={handleClick}
			onFocus={() => setHeader && setHeader(true)}
			title={`Перейти на страницу "${children}"`}
			aria-label={`Перейти на страницу "${children}"`}
		>
			{children}
		</Link>
	)
}
