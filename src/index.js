const init = () => {
    // Grab the form element
    const inputForm = document.querySelector("form");

    // Prevent Default 
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();

        //Access Form Input
        const input = document.querySelector("input#searchByID").value;
        console.log(input);

        //Set Up Fetch Request
        fetch(`http://localhost:3000/movies/${input}`)
        .then((response) => response.json())
        .then((data) => {

            //Grab HTML Elements to Change
            const title = document.querySelector("section#movieDetails h4");
            const summary = document.querySelector("section#movieDetails p");

            //Update Elements Based on Data
            title.textContent = data.title;
            summary.textContent = data.summary;

        });
})};

document.addEventListener('DOMContentLoaded', init);