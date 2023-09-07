<script>
	import { onNavigate } from '$app/navigation';
	import '../app.postcss';
	import Header from './Header.svelte';

	onNavigate(() => {
		if (!document.startViewTransition) return;
		return new Promise((fulfil) => document.startViewTransition(() => new Promise(fulfil)));
	});
</script>

<Header />
<main>
	<slot />
</main>
