const promesse = fetch('https://jsonplaceholder.typicode.com/users');

console.log(promesse);

promesse.then((response) => {
    console.log(response);
});

const usersData = response.json();
console.log(usersData);
usersData.then((utilisateurs) => {
    console.log(utilisateurs);
    console.log(utilisateurs[1].name);
    console.log(utilisateurs[1].address.street);
    console.log(utilisateurs[1].address.geo.lat);
    }
    );