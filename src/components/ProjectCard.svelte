<script lang="ts">
	export let title: string;
	export let description: string;
	export let href: string;
	export let repoLink: string | null = null;
</script>

<div class="border rounded-lg p-2 w-full h-26 flex flex-col gap-2">
	<a {href} target="_blank" class="flex items-center w-full gap-2">
		{title}
	</a>
	<p>{description}</p>
	{#if repoLink !== null}
		<a href={repoLink} target="_blank">Repo</a>
	{/if}
</div>
