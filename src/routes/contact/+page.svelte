<script lang="ts">
	let subject: string, body: string;
</script>

<section class="flex flex-col-reverse md:flex-row justify-evenly items-center md:items-start pb-6">
	<div>
		<p class="font-semibold text-lg max-w-[45ch] mt-16">
			Please don't hesitate to contact me, wether it's via mail, github, linked in or any other
			platform.
		</p>
		<form class="flex flex-col mt-16">
			<label class="font-semibold text-lg" for="email">Subject</label>
			<input
				bind:value={subject}
				class="text-black rounded-md border-2 border-black"
				name="subject"
			/>

			<label class="font-semibold text-lg" for="body">Body</label>
			<textarea bind:value={body} class="text-black rounded-md border-2 border-black" name="body" />

			<a
				class="rounded-md px-3 py1.5 bg-white text-orange-500 text-lg font-semibold mt-8"
				href="mailto:hugokorteapple@gmail.com?subject={subject}&body={body}">Contact Me</a
			>
		</form>
	</div>

	<div class="text-center md:text-end">
		<h1 class="text-[clamp(2.50rem,10vw,8rem)] leading-tight font-extrabold">Contact</h1>
	</div>
</section>
