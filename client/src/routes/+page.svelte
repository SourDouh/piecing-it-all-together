<script>
    import Study from './study.svelte';
    import NewCard from './newCard.svelte';

    // async function fetchData(){
    //     cards = await fetch('http://localhost:5173/', {method: 'GET'});
    //     cards= await cards.json()
    // }
    // let cards;
    // fetchData()
    let studying = false
    //export const 
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

