"use client"

import type { SetActiveType } from "@/app/page"
import Heading from "@/components/ui/Heading"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import styles from "./contacts.module.scss"

interface IProps {
	setActive: SetActiveType
}

export default function Contacts({ setActive }: IProps) {
	const contactsRef = useRef<HTMLDivElement>(null)
	const contactsInView = useInView(contactsRef, { amount: 1 })

	useEffect(() => {
		if (contactsInView) setActive("contacts")
	}, [contactsInView])

	return (
		<section id="contacts" ref={contactsRef} className={styles.contacts}>
			<Heading>Контакты</Heading>

			<p>
				Если вы хотите связаться со мной для обсуждения проекта, предложения
				сотрудничества или задать вопрос, воспользуйтесь контактами, указанными
				ниже. Я всегда открыт для новых возможностей и готов обсудить любые
				идеи.
			</p>

			<ul className={styles["contacts-list"]}>
				<li>
					<a target="_blank" href="mailto:svyatoslavb1107@gmail.com">
						<svg>
							<use xlinkHref="#email-logo"></use>
						</svg>
					</a>
				</li>
				<li>
					<a target="_blank" href="https://vk.com/qaddis">
						<svg>
							<use xlinkHref="#vk-logo"></use>
						</svg>
					</a>
				</li>
				<li>
					<a target="_blank" href="https://t.me/qaddis">
						<svg>
							<use xlinkHref="#telegram-logo"></use>
						</svg>
					</a>
				</li>
				<li>
					<a target="_blank" href="https://github.com/Qaddis">
						<svg>
							<use xlinkHref="#github-logo"></use>
						</svg>
					</a>
				</li>
			</ul>

			<h3>
				Спасибо за проявленный интерес!
				<br />
				Надеюсь на плодотворное сотрудничество.
			</h3>
		</section>
	)
}
