const searchBook = async () => {
    spenerDiv(true);
    const inputSerceItem = document.getElementById('serce-feeld').value;
    const red = await fetch(`http://openlibrary.org/search.json?title=${inputSerceItem}`);
    const data = await red.json();
    const worning = document.getElementById("worning")
    if (data.docs.length === 0) {
        spenerDiv(false);
        worning.classList.remove('d-none');
    } else {
        worning.classList.add('d-none');
    }
    displaySerceRejult(data.docs);
}
const displaySerceRejult = books => {
    books = books.slice(0, 10)
    const cardDaynamic = document.getElementById('card-daynamic');
    cardDaynamic.innerHTML = "";
    books.forEach(book => {
        const { title, author_name, publish_date, cover_i, author_key } = book;
        const cirdDiv = document.createElement('div');
        cirdDiv.classList.add("col");
        cirdDiv.innerHTML = `
                <div class="card">
                <img src="https://covers.openlibrary.org/a/id/${cover_i}-M.jpg" class="card-img-top w-full h-50" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"> Book Title : ${title}</h5>
                        <p class="card-text">author_name : ${author_name[0]} </p>
                        <p class="card-text">publish_date : ${publish_date[0]} </p>
                        <button onclick="parBookDetails('${author_key[0]}')" type="button" class="btn w-100 btn-primary btn-sm">Small button</button>
                    </div>
                </div>
        `;
        cardDaynamic.appendChild(cirdDiv);
    });
    spenerDiv(false);
}
const parBookDetails = async (authorId) => {
    const red = await fetch(`https://openlibrary.org/authors/${authorId}.json`);
    const data = await red.json();
    othorDetails(data);
}
const othorDetails = datas => {
    window.scrollTo(0, 40);
    const { name, birth_date, last_modified, } = datas
    const Details = document.getElementById('Othor-details');
    Details.innerHTML = `
                     <div class="card-body">
                        <h5 class="card-title">Name : ${name}</h5>
                        <p class="card-text">birth_date : ${birth_date ? birth_date : 'not a date of birth '}</p>
                        <p class="card-text">value : ${last_modified.value}</p>
                    </div>
    `;

}
const spenerDiv = (spener) => {
    const spenerSection = document.getElementById('spener');
    if (spener) {
        spenerSection.classList.remove('d-none');
    } else {
        spenerSection.classList.add('d-none');
    }
}

// searchBook("hallo");