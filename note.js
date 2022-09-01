/* json.js */

//join google serce 
{
    const person = {
        name: {
            common: "John",
            fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
            street: "13/A St Joseph",
            house: 10,
        },
    };

    // John,Doe
    const stringifiedJson = JSON.stringify(person);
    // {"name":{"common":"John","fullName":["John","Doe"]},"age":32,"isMale":false,"address":{"street":"13/A St Joseph","house":10}}
    // console.log(stringifiedJson);
    const parsedJson = JSON.parse(stringifiedJson);
    // console.log(parsedJson);

    // Destructure objects
    const { name, age, isMale, address } = parsedJson;
    // console.log(name)
    const { common, fullName } = name;

    // Select the container
    const personContainer = document.getElementById("person-container");
    // Insert HTML
    personContainer.innerHTML = `
  <h2>Common Name:${common} </h2>
  <h3>Full name: ${fullName[0]} ${fullName[1]}</h3>
  <h3>Full name: ${fullName.join(" ")}</h3>
  <p>Age : ${age}</p>
  <p>Gender: ${isMale === true ? "Male" : "Female"}</p>
`
}

// ==================================================================================================

{
    const data = [
        {
            _id: "60795d4e0489a32f948c4167",
            name: "Honda Sedan",
            price: "132",
            description:
                "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Automatic",
            imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
        },
        {
            _id: "60795e440489a32f948c4168",
            name: "MitoSedan",
            price: "221",
            description:
                "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
            imageURL: "https://i.ibb.co/802Rwsq/Mito.png",
        },
        {
            _id: "60795fc20489a32f948c4169",
            name: "Isuzu Tacoma",
            price: "105",
            description:
                "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8 Bags, Transmission: Manual",
            imageURL: "https://i.ibb.co/SJK7QYs/isuzu.png",
        },
        {
            _id: "6079615d0489a32f948c416a",
            name: "Chevrolet Crossover",
            price: "434",
            description:
                "Vehicle Type: Crossover, Doors: 5, Seats: 7, Luggage: 5Suitcases / 5Bags, Transmission: Automatic",

        },
    ];


    //   Not Found image
    //   https://i.ibb.co/g9CSkZQ/image.png

    // console.log("connect")
    {/* <div class="col">
<div class="card">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</div>
</div>
</div> */}

    data.forEach(car => {

        // destructure
        const { name, price, imageURL, description } = car;
        // Capture the container
        const cardContainer = document.getElementById("card-container");
        // Create the div
        const singleCard = document.createElement("div");
        singleCard.classList.add("col");
        // Set innerHtml
        singleCard.innerHTML = `
      <div class="card">
        <img src="${imageURL ? imageURL : "https://i.ibb.co/g9CSkZQ/image.png"}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Car Name: ${name}</h5>
          <p class="card-text">Car Detail: ${description}</p>
          <button class="btn btn-primary">Car Price: ${price}</button>
        </div>
    </div>
  `
        // Append the div inside the container
        cardContainer.appendChild(singleCard)

    })
}

// ==================================================================================================
{
    const person = {
        found: 2,
        message: "Found 2 persons",
        result: [
            {
                name: {
                    common: "John",
                    fullName: ["John", "Doe"]
                },
                age: 32,
                isMale: false,
                address: {
                    street: "13/A St Joseph",
                    house: 10,
                },
            },
            {
                name: {
                    common: "Humayoun",
                    fullName: ["Humayoun", "Kabir"]
                },
                age: 33,
                isMale: false,
                address: {
                    street: "13/A St Lucia",
                    house: 11,
                },
            },
        ]
    };

    // [{.......},{........}]

    // Destructure
    const { found, message, result } = person;
    console.log(result)
    // without destructuring
    // person.result.forEach(singlePerson={})

    // display found results
    document.getElementById("results-found").innerText = `Found ${found} persons  ${message}`
    // loop through each object inside result
    result.forEach((singlePerson, index) => {
        console.log(singlePerson);
        // capture the container
        const cardContainer = document.getElementById("card-container");
        // Create the div where you want  to keep the data.
        const personCard = document.createElement("div");
        personCard.classList.add("col");
        personCard.innerHTML = `
    <div class="card shadow-lg">
        
        <div class="card-body">
          <h5 class="card-title">Common Name: ${singlePerson.name.common}</h5>
          <p class="card-text">age: ${singlePerson.age}</p>
          <p class="card-text">Street: ${singlePerson.address.street}, House No.: ${singlePerson.address.house}</p>
        </div>
    </div>
    `
        // Append the div inside the container
        cardContainer.appendChild(personCard);
    })
}
// ==================================================================================================
{
    const loadData = () => {
        // Fetch..pass an url 
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(data => displayUser(data.results[0]))
    }

    const displayUser = (person) => {
        // console.log(person);
        const { picture, name, email, location } = person;
        const { street } = location;
        const userContainer = document.getElementById("user-container")
        userContainer.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 h-100">
            <img src="${picture.large}" class="w-100 rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Name: ${person.name.title} ${person.name.first} ${person.name.last}</h5>
              <p class="card-text">Loaction: ${street.number}, ${street.name}</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    `
    }
}
// ==================================================================================================
// next == 2.40 minits
// ==================================================================================================
{
    document.getElementById("error-message").style.display = "none";
    document.getElementById("loading-spinner").style.display = "none";
    const searchBook = () => {
        const searchField = document.getElementById("input-field");
        const searchValue = searchField.value;
        searchField.value = "";
        if (searchValue === "") {
            document.getElementById("error-message").style.display = "block";
        } else {
            console.log(searchValue);
            document.getElementById("loading-spinner").style.display = "block";
            fetch(`http://openlibrary.org/search.json?q=${searchValue}`)
                .then((res) => res.json())
                .then((data) => displaySearchResult(data))
                .catch((error) => {
                    document.getElementById("error-message").style.display = "block";
                });
        }
    };

    const displaySearchResult = (books) => {
        document.getElementById("error-message").style.display = "none";
        document.getElementById("loading-spinner").style.display = "none";
        document.getElementById("heading").style.display = "none";

        // const searchedBooks = books.docs;
        if (books.numFound == 0) {
            // todo: show a message that says "No books found"
        }
        else {
            const resultContainer = document.getElementById("search-result");
            resultContainer.innerHTML = "";
            books.docs.forEach((singleBook) => {
                const { title, author_name, publish_date, cover_i, author_key } =
                    singleBook;
                const bookCard = document.createElement("div");
                bookCard.classList.add("col");
                bookCard.innerHTML = `
        <div class="card shadow-lg">
            <div class="">
            <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" alt=".." class="card-img-top w-full">
            </div>
            <div class="card-body">
            <h5 class="card-title">Book Title: ${title ? title : ""}</h5>
            <p class="card-text">Author: ${author_name[0]}</p>
            <p class="card-text">Publish date: ${publish_date[0]}</p>
            </div>
            <div class="card-footer"><button class="btn btn-outline btn-outline-success" onclick="loadAuthorDetail('${author_key[0]
                    }')">Author Detail</button></div>
        </div>
        `;

                resultContainer.appendChild(bookCard);
            });
        }
    };

    const loadAuthorDetail = (authId) => {
        console.log(authId);
        fetch(`https://openlibrary.org/authors/${authId}.json`)
            .then((res) => res.json())
            .then((data) => displayAuthorDetail(data));
    };

    const displayAuthorDetail = (author) => {
        window.scrollTo(0, 40);
        const { name, birth_date, bio } = author;
        const detailContainer = document.getElementById("author-detail");
        detailContainer.innerHTML = `
     <div>
        <h5 class="card-title">Author Name: ${name}</h5>
        <p class="card-text">Author DOB: ${birth_date ? birth_date : "N/a"}</p>
        <p class="card-text">Author Bio: ${bio ? bio : "N/a"}</p>
     </div>
     
     `;
    };
}
// ==================================================================================================
3.31
// ==================================================================================================
// ==================================================================================================
// ==================================================================================================
// ==================================================================================================
// ==================================================================================================
// ==================================================================================================
// ==================================================================================================
// ==================================================================================================
