<script>
	// @ts-ignore
	import Github from '~icons/mdi/github';
	//@ts-ignore
	import Twitter from '~icons/basil/twitter-outline';
	// @ts-ignore
	import LinkedIn from '~icons/teenyicons/linkedin-outline';
	import Card from '../components/Card.svelte';
	import ProjectCard from '../components/ProjectCard.svelte';

	export let data;
	$: ({ articles } = data);
</script>

-

<main class="flex flex-col items-center">
	<section class="w-4/5 sm:w-4/5 flex flex-col items-center">
		<h1 class="text-2xl sm:text-4xl font-bold mt-10 text-center">Aodhan Hamilton</h1>
		<p class="flex flex-col items-center m-2">Fullstack Web Developer</p>
		<div class="flex gap-3">
			<a href="https://github.com/MVAodhan">
				<Github style="font-size: 25px" />
			</a>
			<a href="https://twitter.com/mvaodhan">
				<Twitter style="font-size: 25px; color: teal" />
			</a>
			<a href="https://www.linkedin.com/in/mvaodhan/">
				<LinkedIn style="font-size: 25px; color: #1275b3" />
			</a>
		</div>
		<p
			class="mt-5 px-2
			text-center mb-5 w-4/5"
		>
			I build web applications with TypeScript, React, and Node. Sometime I write about them too.
		</p>
		<div class="flex flex-col items-center w-full mb-10">
			<h3 class="text-2xl sm:text-3xl font-bold mb-30 text-center mb-5">Projects</h3>
			<div
				class="overflow-y-scroll sm:w-4/5 lg:w-3/5 w-full flex flex-col gap-y-10 h-[300px] overflow-x-hidden px-5 mb-5"
			>
				<ProjectCard
					href={'https://backgroundremove.netlify.app/'}
					title={'Bg Remove'}
					description={'A simple bg-remover in SvelteKit, using the replicate api and Supabase, with Github OAuth'}
				/>
				<ProjectCard
					href={'https://schedulewithjason.netlify.app'}
					title={'Schedule with Jason'}
					description={'A internal utility tool to help with scheduling of episodes for Learn with Jason'}
				/>
			</div>

			<h3 class="text-2xl sm:text-3xl font-bold mb-30 text-center mb-5">Articles</h3>
			<div
				class="overflow-y-scroll sm:w-4/5 lg:w-3/5 w-full flex flex-col gap-y-10 h-[300px] overflow-x-hidden items-center px-5"
			>
				{#each articles as article}
					<Card title={article.title} date={article.readable_publish_date} href={article.url} />
				{/each}
			</div>
		</div>
	</section>
</main>
