function displayRecipe(response) {
    console.log("recipe generated");
    new Typewriter("#recipe", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateRecipe(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "3444d6bo8280055eta76fe9ea41a4f47";
    let context =
        "You are a great chef who knows how to cook many different dishes. You have travelled the world and can explain simply and quickly how to cook a simple meal with an ingredients list. Make sure to follow user instructions. do NOT show any hashtags. do NOT show any asterisks";
    let prompt = `User instructions: Generate a short and quick recipe with ingredients list. show in easy to follow bullet points with the following ingedient ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="blink">Generating a recipe with ${instructionsInput.value}...</div>`;

    console.log("Generating recipe");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayRecipe);
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateRecipe);
