<script>
	import { onNavigate } from '$app/navigation';
	import '../app.postcss';
	import Header from './Header.svelte';

	// TODO: Remove ts-expect-error when the View Transition API is typed
	onNavigate((navigation) => {
		// @ts-expect-error View Transition API isn't typed yet
		if (!document.startViewTransition) return;
		return new Promise((fulfil) =>
			// @ts-expect-error View Transition API isn't typed yet
			document.startViewTransition(async () => {
				fulfil();
				await navigation.complete;
			})
		);
	});
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/7003bffa3f.js" crossorigin="anonymous"></script>
	<meta name="title" content="Hugo Korte" />
	<meta
		name="description"
		content="Hugo Korte's Portfolio. Read about me, see my work and connect with me!"
	/>
	<meta name="keywords" content="Portfolio, Work, Programming, Software, Hugo Korte" />
	<meta name="robots" content="index, follow" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="language" content="English" />
	<meta name="revisit-after" content="30 days" />
	<meta name="author" content="Hugo Korte" />
</svelte:head>

<Header />
<main class="m-4 mt-[10rem] md:mx-16 lg:mx-32 xl:mx-48">
	<slot />
</main>
