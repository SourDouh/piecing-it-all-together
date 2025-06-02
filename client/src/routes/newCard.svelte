<script>
    //import Page from "./+page.svelte";

let showAutofillButton = $state(false)
let definition = ""
let frontFace=$state("");
let backFace=$state("");
    //checkFrontFace()
let data=$state("")

async function postCard(){
    console.log("trying to add")
    console.log(JSON.stringify({front:frontFace, back:backFace}))
    console.log(frontFace)
    console.log(backFace)
    console.log('------------------------------------------------------------------------------------------------------')
    const response = await fetch('http://localhost:5174/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({front:frontFace, back:backFace})
});
}

function checkFrontFace(){
    console.log(frontFace)
    if(!(frontFace.includes(" "))){
    //check if its a word
        if(isWord(frontFace)){
            showAutofillButton=true
        }
    }else{
        showAutofillButton=false
    }
}

async function isWord(word){
    const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word);
        if (response.status=='404'){
            showAutofillButton=false
        }else{
            data = await response.json()
            console.log(data[0].meanings[0].definitions[0].definition);
            data=data[0].meanings
            definition=data[0].definitions[0].definition
        }
}
</script>
<h1>Add new flashcard</h1>
<form>
    <label>
		Words
		<input onkeyup={checkFrontFace} bind:value={frontFace} name="front" type="word">
	</label>
	<label>
		Definition
		<input name="back" bind:value={backFace} type="word">
	</label>
    <ul>
        {#if showAutofillButton}
                {#each data as def}
                    <li onclick={()=>(backFace=def.definitions[0].definition)}>{def.partOfSpeech}<br/>{def.definitions[0].definition}</li><br/>
                {/each}
        {/if}
    </ul>
    
    <button onclick={postCard}>Create Flashcard</button>
</form>
<h1>Modify cards</h1>

