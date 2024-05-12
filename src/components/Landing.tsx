"use client"

import { useEffect, useRef, type FC } from "react"
import classes from "./Landing.module.scss"

const Landing: FC = () => {
	const lnNode = useRef<HTMLDivElement>(null)

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

				if (lnNode.current) {
					if (prev && next) {
						lnNode.current.innerHTML = `
						${prev}
							<span class=${tagClass}>
								${input.replace("<", "&lt;").replace("_", "<br />")}<div class=${
							classes.cursor
						}></div>
							</span>
						${next}
					`
					} else {
						lnNode.current.innerHTML = `
						<span class=${tagClass}>
							${input}<div class=${classes.cursor}></div>
						</span>
					`
					}
				}
			} else {
				clearInterval(interval)
			}
		}, 150)
	}

	const typeAnim = (): void => {
		let timeout: number

		typing("section", classes.inner)
		timeout = 150 * ("section".length + 3)

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<div>
						<span class=${classes.first_tag} style="display: inline">section</span>
						<div class="${classes.cursor}"></div>
					</div>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
					<div class="${classes.cursor} ${classes.cursor_corr} ${classes.single_tab}"></div>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			typing(
				"<Heading",
				`"${classes.inner} ${classes.single_tab}"`,
				`<span class=${classes.first_tag}>section</span>`,
				`<span class=${classes.close_tag}>section</span>`
			)
		}, timeout)
		timeout += 150 * ("<Heading".length + 2)

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
						<span class="${classes.single_tag} ${classes.single_tab}">Heading<div class=${classes.cursor}></div></span>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
						<span class="${classes.single_tag} ${classes.single_tab}">Heading
						<div class=${classes.cursor}></div></span>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			let symbols: string[] = "title=".split("")
			let index: number = 0
			let text: string = ""

			const interval = setInterval(() => {
				if (index < symbols.length) {
					text += symbols[index]
					index++

					if (lnNode.current)
						lnNode.current.innerHTML = `
							<span class=${classes.first_tag}>section</span>
								<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>${text}</i><div class=${classes.cursor}></div></span>
							<span class=${classes.close_tag}>section</span>
							`
				} else {
					clearInterval(interval)
				}
			}, 150)
		}, timeout)
		timeout += 150 * ("title=".length + 3)

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
						<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>title</i><em>=</em><b>"<div class=${classes.cursor}></div>"</b></span>
					<span class=${classes.close_tag}>section</span>
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

					if (lnNode.current)
						lnNode.current.innerHTML = `
							<span class=${classes.first_tag}>section</span>
								<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>title</i><em>=</em><b>"${text}<div class=${classes.cursor}></div>"</b></span>
							<span class=${classes.close_tag}>section</span>
							`
				} else {
					clearInterval(interval)
				}
			}, 150)
		}, timeout)
		timeout += 150 * ("Hello!".length + 3)

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
					<div>
					<span class="${classes.single_tag} ${classes.single_tab}" style="display: inline-block">Heading <i>title</i><em>=</em><b>"Hello!"</b></span><div class=${classes.cursor}></div>
					</div>

					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
						<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>title</i><em>=</em><b>"Hello!"</b></span>
						<div class="${classes.cursor} ${classes.cursor_corr} ${classes.single_tab}"></div>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
						<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>title</i><em>=</em><b>"Hello!"</b></span>
						<div class=${classes.space}></div>
						<div class="${classes.cursor} ${classes.cursor_corr} ${classes.single_tab}"></div>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
						<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>title</i><em>=</em><b>"Hello!"</b></span>
						<div class=${classes.space}></div>
						<span class="${classes.inner} ${classes.single_tab}">p<div class=${classes.cursor}></div></span>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
						<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>title</i><em>=</em><b>"Hello!"</b></span>
						<div class=${classes.space}></div>
						<div>
							<span class="${classes.first_tag} ${classes.single_tab}" style="display: inline-block">p</span>
							<div class=${classes.cursor}></div>
						</div>
						<span class="${classes.close_tag} ${classes.single_tab}">p</span>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 450

		setTimeout(() => {
			if (lnNode.current)
				lnNode.current.innerHTML = `
					<span class=${classes.first_tag}>section</span>
						<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>title</i><em>=</em><b>"Hello!"</b></span>
						<div class=${classes.space}></div>
						<span class="${classes.first_tag} ${classes.single_tab}">p</span>
						<div class="${classes.cursor} ${classes.cursor_corr} ${classes.double_tab}"></div>
						<span class="${classes.close_tag} ${classes.single_tab}">p</span>
					<span class=${classes.close_tag}>section</span>
					`
		}, timeout)
		timeout += 300

		setTimeout(() => {
			typing(
				"My name is Svyatoslav._I am a full-stack web developer.",
				`"${classes.inner} ${classes.double_tab}"`,
				`<span class=${classes.first_tag}>section</span>
				<span class="${classes.single_tag} ${classes.single_tab}">Heading <i>title</i><em>=</em><b>"Hello!"</b></span>
				<div class=${classes.space}></div>
				<span class="${classes.first_tag} ${classes.single_tab}">p</span>`,
				`<span class="${classes.close_tag} ${classes.single_tab}">p</span>
				<span class=${classes.close_tag}>section</span>`
			)
		}, timeout)
	}

	useEffect(() => {
		typeAnim()
	})

	return (
		<section className={classes.landing}>
			<div ref={lnNode} className={`wrapper ${classes.wrapper}`}></div>
		</section>
	)
}

export default Landing
