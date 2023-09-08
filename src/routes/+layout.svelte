<script>
	import { onNavigate } from '$app/navigation';
	import '../app.postcss';
	import Header from './Header.svelte';

	// TODO: Remove ts-expect-error when the View Transition API is typed
	onNavigate(() => {
		// @ts-expect-error View Transition API isn't typed yet
		if (!document.startViewTransition) return;
		// @ts-expect-error View Transition API isn't typed yet
		return new Promise((fulfil) => document.startViewTransition(() => new Promise(fulfil)));
	});
</script>

<svelte:head>
	<script src="https://kit.fontawesome.com/7003bffa3f.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />
<main>
	<slot />
</main>
