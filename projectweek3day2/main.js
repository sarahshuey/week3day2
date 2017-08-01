// const custresults = customers.results;
// let pic = custresults[0].picture.thumbnail;
// let firstName = custresults[0].name.first;
// let lastName = custresults[0].name.last;
// let fullName = `${firstName} ${lastName}`
// let custemail = custresults[0].email;
// const custloc = custresults[0].location;
// let street = custloc.street;
// let city = custloc.city;
// let state = custloc.state;
// let zip = custloc.postcode;
// let address = `${city} , ${state} ${zip}`
// let phone = custresults[0].phone;
// let social = custresults[0].id.value;
customers.results.forEach(function(person) {

  let template =
    `
<div class = 'custbox'>
<img class = 'pics'src="${person.picture.large}">
<p class = 'name'> ${person.name.first} ${person.name.last}
</p>
<p class = 'email'> ${person.email}>
</p>
<div class = 'fulladd'>
<p>${person.location.street}
</p>
<p>${person.location.city}, ${person.location.state} ${person.location.postcode}
</p>
<p>${person.phone}
</p>
</div>
<p class = 'ss'> ${person.id.value}
</p>
</div>
`

let article = document.createElement('article')
article.className = 'article'
article.innerHTML = template
  let shell = document.querySelector('.container');
  shell.appendChild(article);

});
