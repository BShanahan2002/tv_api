const body = document.querySelector("body");

const container = document.querySelector(".container");

const url = "https://api.tvmaze.com/schedule?country=GB&date=2023-04-14";

fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);

    // for (let index = 0; index < data.length; index++) {
    //     const element = data[index];
    //     console.log(`Program Name: ${element.show.name}, Program type: ${element.show.type}`);
    // }

    data.map((obj) => {
        const showName = obj.show.name;
        const showTime = obj.airtime;
        const showUrl = obj.show.officialSite;
        const showImg = obj.show.image.original;

        let card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("p-3");
        card.style.width = '18rem';
        card.style.display = "inline-block";
        card.style.margin = "2rem";

        container.appendChild(card);

        let image = document.createElement("img");
        image.src = `${showImg}`;
        image.classList.add("card-img-top");
        card.appendChild(image);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        let title = document.createElement("h5");
        title.textContent = `${showName}`;
        title.classList.add('class-title');
        cardBody.appendChild(title);

        let time = document.createElement("p");
        time.textContent = `Program Time: ${showTime}`;
        time.classList.add('card-text');
        cardBody.appendChild(time);

        let link = document.createElement("a");
        link.href = `${showUrl}`;
        link.textContent = `Click Here!`;
        link.classList.add('btn');
        link.classList.add('btn-primary');
        cardBody.appendChild(link);
    })

}).catch((error) => {
    console.log(error);
});