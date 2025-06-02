<script>
    import { onMount } from 'svelte'; 
    let cards=$state([])
    async function fetchData(){
        console.log("test-----------------------------------")
        try{
            console.log("test2-----------------------------------")
            const data = await fetch('http://localhost:5174');
            console.log(data)
            console.log("test3-----------------------------------")
            cards= await data.json()
            console.log("test4-----------------------------------")

            console.log($state.snapshot(cards))
        }catch(e){
            console.log(e)
        }

    }
    onMount(() => {
      fetchData()
    });
    let index = $state(0);
    let showBack = $state(false);
    console.log($state.snapshot(cards))
    console.log($state.snapshot(cards[index]))
    let currentCard = $derived(cards[index])

    function nextCard(){
        if (index<cards.length-1){
            index++
        }
        showBack=false
    }
    function prevCard(){
        if (index>0){
            index--
        }
        showBack=false
    }
    
</script>
<h1>Study flashcards</h1>
<button onclick={()=>(showBack=!showBack)}>
    <div>
        {#if cards.length>0}
        {#if showBack}
            <p>{cards[index].back}</p>
        {:else}
            <p>{cards[index].front}</p>
        {/if}
        {/if}
    </div>
</button>
<div>
    <button onclick={prevCard}>previous</button>
    <button onclick={nextCard}>next</button>
</div>
