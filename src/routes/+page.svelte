<script>
	// @ts-ignore
	import Github from '~icons/mdi/github';
	//@ts-ignore
	import Twitter from '~icons/basil/twitter-outline';
	import Card from '../components/Card.svelte';

	export let data;
	$: ({ articles } = data);
	$: console.log(articles[0]);
</script>

<section class="w-screen sm:w-4/5 flex flex-col items-center">
	<h1 class="text-2xl sm:text-4xl font-bold mt-10 text-center">Aodhan Hamilton</h1>
	<p class="flex flex-col items-center m-2">Fullstack Web Developer</p>
	<div class="flex gap-3">
		<a href="https://github.com/MVAodhan">
			<Github style="font-size: 25px" />
		</a>
		<a href="https://twitter.com/mvaodhan">
			<Twitter style="font-size: 25px; color: teal" />
		</a>
	</div>
	<p
		class="mt-5 px-2
        text-center mb-5"
	>
		I build web applications with JavaScript, React, and Node. Sometime I write about them too.
	</p>
	<div
		class="overflow-y-scroll sm:w-4/5 w-full flex flex-col gap-y-10 mt-20 md:mt-40items-center h-[300px] overflow-x-hidden items-center"
	>
		{#each articles as article}
			<a href={article.url} target="_blank" class="w-full">
				<Card title={article.title} date={article.readable_publish_date} />
			</a>
		{/each}
	</div>
</section>
