"use client"

import NavButton from "@/components/ui/NavButton"
import { PagesEnum } from "@/constants/navigation"

export default function NotFoundPage() {
	return (
		<section className="not-found">
			<h2>Упс... Ошибка 404</h2>
			<p>
				Страница не найдена <b>┐(‘～` )┌</b>
			</p>

			<NavButton href={PagesEnum.HOME} title="Перейти на главную страницу">
				На главную!
			</NavButton>
		</section>
	)
}
