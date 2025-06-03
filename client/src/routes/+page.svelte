<script>
    import Study from './study.svelte';
    import NewCard from './newCard.svelte';
    let studying = false
</script>
<div>
    <button onclick={()=>(studying=false)}>Make new card</button>
    <button onclick={()=>(studying=true)}>Study</button>
</div>
<div>
    {#if studying}
        <Study></Study>
    {:else}
        <NewCard></NewCard>
    {/if}
</div>

