"use client"

import { motion, type Transition, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"

import styles from "./scss/landing.module.scss"
import gif from "/public/terminal.gif"

export default function Landing() {
	const landingRef = useRef<HTMLDivElement>(null)
	const landingInView = useInView(landingRef, { once: true, amount: 0.5 })

	const typeRef = useRef<HTMLDivElement>(null)

	const typing = (
		text: string,
		tagClass: string,
		prev?: string,
		next?: string
	): void => {
		const symbols: string[] = text.split("")
		let index: number = 0
		let input: string = ""

		const interval = setInterval(() => {
			if (index < symbols.length) {
				input += symbols[index]
				index++

				if (typeRef.current) {
					typeRef.current.innerHTML = `
					${prev ? prev : ""}
					<span class=${tagClass}>
						${input.replace("<", "&lt;").replace("_", "<br />")}<div class=${
						styles.cursor
					}></div>
					</span>
					${next ? next : ""}
					`
				}
			} else {
				clearInterval(interval)
			}
		}, 150)
	}

	const typeAnim = (): void => {
		let timeout: number

		typing("section", styles.inner)
		timeout = 150 * ("section".length + 3)

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<div>
					<span class=${styles.first_tag} style="display: inline">section</span><div style="display: inline-block;" class="${styles.cursor}"></div><span class=${styles.close_tag} style="display: inline">section</span>
					</div>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
					<div class="${styles.cursor} ${styles.cursor_corr} ${styles.single_tab}"></div>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			typing(
				"<Heading",
				`"${styles.inner} ${styles.single_tab}"`,
				`<span class=${styles.first_tag}>section</span>`,
				`<span class=${styles.close_tag}>section</span>`
			)
		}, timeout)
		timeout += 150 * ("<Heading".length + 2)

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
						<span class="${styles.single_tag} ${styles.single_tab}">Heading<div class=${styles.cursor}></div></span>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
						<span class="${styles.single_tag} ${styles.single_tab}">Heading
						<div class=${styles.cursor}></div></span>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			let symbols: string[] = "text=".split("")
			let index: number = 0
			let text: string = ""

			const interval = setInterval(() => {
				if (index < symbols.length) {
					text += symbols[index]
					index++

					if (typeRef.current)
						typeRef.current.innerHTML = `
							<span class=${styles.first_tag}>section</span>
								<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>${text}</i><div class=${styles.cursor}></div></span>
							<span class=${styles.close_tag}>section</span>
							`
				} else {
					clearInterval(interval)
				}
			}, 150)
		}, timeout)
		timeout += 150 * ("title=".length + 3)

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
						<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"<div class=${styles.cursor}></div>"</b></span>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			let symbols: string[] = "Hello!".split("")
			let index: number = 0
			let text: string = ""

			const interval = setInterval(() => {
				if (index < symbols.length) {
					text += symbols[index]
					index++

					if (typeRef.current)
						typeRef.current.innerHTML = `
							<span class=${styles.first_tag}>section</span>
								<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"${text}<div class=${styles.cursor}></div>"</b></span>
							<span class=${styles.close_tag}>section</span>
							`
				} else {
					clearInterval(interval)
				}
			}, 150)
		}, timeout)
		timeout += 150 * ("Hello!".length + 3)

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
					<div>
					<span class="${styles.single_tag} ${styles.single_tab}" style="display: inline-block">Heading <i>text</i><em>=</em><b>"Hello!"</b></span><div class=${styles.cursor}></div>
					</div>

					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
						<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"Hello!"</b></span>
						<div class="${styles.cursor} ${styles.cursor_corr} ${styles.single_tab}"></div>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
						<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"Hello!"</b></span>
						<div class=${styles.space}></div>
						<div class="${styles.cursor} ${styles.cursor_corr} ${styles.single_tab}"></div>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
						<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"Hello!"</b></span>
						<div class=${styles.space}></div>
						<span class="${styles.inner} ${styles.single_tab}">p<div class=${styles.cursor}></div></span>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
						<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"Hello!"</b></span>
						<div class=${styles.space}></div>
						<div>
							<span style="display: inline-block;" class="${styles.first_tag} ${styles.single_tab}" style="display: inline-block">p</span><div style="display: inline-block;" class=${styles.cursor}></div><span style="display: inline-block;" class="${styles.close_tag}">p</span>
						</div>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
					<span class=${styles.first_tag}>section</span>
						<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"Hello!"</b></span>
						<div class=${styles.space}></div>
						<span class="${styles.first_tag} ${styles.single_tab}">p</span>
						<div class="${styles.cursor} ${styles.cursor_corr} ${styles.double_tab}"></div>
						<span class="${styles.close_tag} ${styles.single_tab}">p</span>
					<span class=${styles.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			typing(
				"My name is Svyatoslav.",
				`"${styles.inner} ${styles.double_tab}"`,
				`<span class=${styles.first_tag}>section</span>
				<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"Hello!"</b></span>
				<div class=${styles.space}></div>
				<span class="${styles.first_tag} ${styles.single_tab}">p</span>`,
				`<span class="${styles.close_tag} ${styles.single_tab}">p</span>
				<span class=${styles.close_tag}>section</span>`
			)
		}, timeout)
		timeout += 150 * ("My name is Svyatoslav.".length + 2)

		setTimeout(() => {
			if (typeRef.current)
				typeRef.current.innerHTML = `
				<span class=${styles.first_tag}>section</span>
					<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"Hello!"</b></span>
					<div class=${styles.space}></div>
					<span class="${styles.first_tag} ${styles.single_tab}">p</span>
						<span class="${styles.inner} ${styles.double_tab}">My name is Svyatoslav.</span>
					<div class="${styles.cursor} ${styles.cursor_corr} ${styles.double_tab}"></div>
					<span class="${styles.close_tag} ${styles.single_tab}">p</span>
				<span class=${styles.close_tag}>section</span>`
		}, timeout)
		timeout += 150

		setTimeout(() => {
			typing(
				"I am a front-end web developer.",
				`"${styles.inner} ${styles.double_tab}"`,
				`<span class=${styles.first_tag}>section</span>
				<span class="${styles.single_tag} ${styles.single_tab}">Heading <i>text</i><em>=</em><b>"Hello!"</b></span>
				<div class=${styles.space}></div>
				<span class="${styles.first_tag} ${styles.single_tab}">p</span>
				<span class="${styles.inner} ${styles.double_tab}">My name is Svyatoslav.</span>
				`,
				`<span class="${styles.close_tag} ${styles.single_tab}">p</span>
				<span class=${styles.close_tag}>section</span>`
			)
		}, timeout)
	}

	const transition: Transition = {
		duration: 0.35,
		type: "spring",
		damping: 7
	}

	useEffect(() => {
		if (landingInView && window.innerWidth > 525) typeAnim()
	}, [landingInView])

	return (
		<section ref={landingRef} className={styles.landing}>
			<div ref={typeRef} className={styles["type-animation"]}></div>

			<div className={styles.mobile}>
				<motion.div
					initial={false}
					animate={
						landingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "20%" }
					}
					transition={transition}
					className={styles["gif-wrapper"]}
				>
					<Image
						className={styles.gif}
						src={gif}
						alt="Terminal gif"
						unoptimized
					></Image>
				</motion.div>
				<motion.h2
					initial={false}
					animate={
						landingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "50%" }
					}
					transition={transition}
					className={styles.greeting}
				>
					Привет!
				</motion.h2>
				<motion.h3
					initial={false}
					animate={
						landingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "50%" }
					}
					transition={transition}
					className={styles.meeting}
				>
					Меня зовут <b>Святослав</b>.
					<br />Я <span>front-end web</span> <b>разработчик</b>.
				</motion.h3>
			</div>
		</section>
	)
}
