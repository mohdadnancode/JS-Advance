// fetch("https://catfact.ninja/fact")
// .then((res) => res.text())
// .then((res) => res.json())
// .then((txt) => console.log(txt))
// .catch(() => console.log("Failed"))


async function getCatFact(){
    const res = await fetch("https://catfact.ninja/fact")
    // console.log(res)
    const txt = await res.json();
    console.log(txt);
    
}

getCatFact();