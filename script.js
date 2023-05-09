async function foo() {
  try {
    let res = await fetch('https://dog.ceo/api/breeds/image/random');
    let res1 = await res.json();
    console.log(res1);

    var ele = document.getElementById('img');
    ele.innerHTML = `<div class="card" >
    <img src="${res1.message}" class="card-img-top" alt="...">
    <div class="card-body">
    </div>
  </div>`;
  } catch (error) {
    console.log(error);
  }
}
foo();
