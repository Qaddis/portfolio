export const getSlug = (text: string): string => {
	return text.toLowerCase().trim().replaceAll(" ", "-").replaceAll('"', "")
}
