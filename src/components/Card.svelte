<script lang="ts">
	export let title: string;

	export let date: string;

	export let href: string;
</script>

<a {href} class="flex items-center w-full gap-2" target="_blank">
	<div class="border rounded-lg p-2 w-full h-26 flex flex-col gap-2">
		<h3>{title}</h3>
		<p>Publish date: {date}</p>
	</div>
</a>
