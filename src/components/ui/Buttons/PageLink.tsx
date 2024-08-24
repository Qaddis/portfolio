import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { PropsWithChildren } from "react"
import styles from "./button.module.scss"

interface IProps extends PropsWithChildren, LinkProps {
	href: string
	title?: string
}

export default function PageLink({ children, href, title, ...props }: IProps) {
	const router = useRouter()

	const handleClick = async (
		evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	): Promise<void> => {
		evt.preventDefault()
		router.push(href)
	}

	return (
		<Link
			onClick={handleClick}
			className={styles.button}
			href={href}
			title={title}
			{...props}
		>
			{children}
		</Link>
	)
}
