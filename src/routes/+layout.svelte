<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '../theme.postcss';
	// import '.../theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	// import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	// Most of your app wide CSS should be put in this file
	
	import Header from "$lib/components/header/Header.svelte";
	
	// import {AppBar, AppShell, storeHighlightJs } from "@skeletonlabs/skeleton";
	// import hljs from 'highlight.js';
	// import 'highlight.js/styles/github-dark.css'
	// storeHighlightJs.set(hljs);
</script>



<Header />

<slot />

<!-- <AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<a data-sveltekit-preload-data="tap" href="/">
				<h3 class="text-left">Charlottes Verden</h3>
			</a>
		</AppBar>
	</svelte:fragment>
	
	<slot />

	<svelte:fragment slot="footer">
		<AppBar>
			<a data-sveltekit-preload-data="tap" href="/about">
				About us
			</a>
		</AppBar>
	</svelte:fragment>
</AppShell> -->