const debounce = (fn, delay = 1000) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay)
    }

}
const handler = async (e) => {
    console.log('event', e.target.value);
    const response = await fetch(`https://dummyjson.com/products/search?q=${e.target.value}`);
    const data = await response.json();

    console.log(data.products);
}

const debounced = debounce(handler, 1000);
const input = document.getElementById("input");

input.addEventListener("input", debounced);

