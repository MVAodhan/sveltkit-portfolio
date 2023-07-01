export async function load() {
	const res = await fetch('https://dev.to/api/articles?username=suiteasdesign');

	const data = await res.json();
	return {
		articles: data
	};
}
