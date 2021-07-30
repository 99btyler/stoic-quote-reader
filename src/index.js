
function onClickButtonGenerate() {

    axios.get("https://stoicquotesapi.com/v1/api/quotes/random").then(response => {

        quote = response.data.body
        quoted = response.data.author

        document.querySelector("#stoic-quote-reader #quote").innerText = `"${quote}"`
        document.querySelector("#stoic-quote-reader #quoted").innerText = `- ${quoted}`


    })

}
