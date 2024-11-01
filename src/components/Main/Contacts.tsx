"use client"

import type { Transition } from "framer-motion"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import Heading from "@/components/ui/Heading"
import styles from "./scss/contacts.module.scss"

type ContactType = {
	title: string
	link: string
	svg: `#${string}-logo`
}

export default function Contacts() {
	const contacts: ContactType[] = [
		{
			title: "Моя электронная почта",
			link: "mailto:svyatoslavb1107@gmail.com",
			svg: "#email-logo"
		},
		{
			title: "Мой профиль в ВКонтакте",
			link: "https://vk.com/qaddis",
			svg: "#vk-logo"
		},
		{
			title: "Мой профиль в Telegram",
			link: "https://t.me/qaddis",
			svg: "#telegram-logo"
		},
		{
			title: "Мой профиль на Github",
			link: "https://github.com/Qaddis",
			svg: "#github-logo"
		}
	]

	const transition: Transition = {
		duration: 0.25,
		type: "spring",
		damping: 8
	}

	const linksRef = useRef<HTMLUListElement>(null)
	const linksInView = useInView(linksRef, { amount: 0.5, once: true })

	const partingRef = useRef<HTMLHeadingElement>(null)
	const partingInView = useInView(partingRef, {
		once: true,
		amount: 0.35,
		margin: "50% 0px 0px 0px"
	})

	return (
		<section className={styles.contacts}>
			<Heading>Контакты</Heading>

			<p>
				Если вы хотите связаться со мной для обсуждения проекта, предложения
				сотрудничества или задать вопрос, воспользуйтесь контактами, указанными
				ниже. Я всегда открыт для новых возможностей и готов обсудить любые
				идеи.
			</p>

			<ul ref={linksRef} className={styles["contacts-list"]}>
				{contacts.map((item, index) => (
					<motion.li
						initial={false}
						animate={
							linksInView
								? { opacity: 1, scale: 1 }
								: { opacity: 0, scale: 0.3 }
						}
						transition={{ ...transition, delay: index / 5 }}
						key={index}
					>
						<a title={item.title} target="_blank" href={item.link}>
							<svg>
								<use xlinkHref={item.svg}></use>
							</svg>
						</a>
					</motion.li>
				))}
			</ul>

			<motion.h3
				ref={partingRef}
				initial={false}
				animate={
					partingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "50%" }
				}
				transition={transition}
			>
				Спасибо за проявленный интерес!
				<br />
				Надеюсь на плодотворное сотрудничество.
			</motion.h3>
		</section>
	)
}
