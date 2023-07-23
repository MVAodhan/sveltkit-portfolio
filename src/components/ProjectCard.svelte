<script lang="ts">
	export let title: string;
	export let description: string;
	export let href: string;
</script>

<a {href} target="_blank" class="flex items-center w-full gap-2">
	<div class="border rounded-lg p-2 w-full h-26 flex flex-col gap-2">
		{title}
		<p>{description}</p>
	</div>
</a>
