window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`

for (let i = 1; i <= 5; i++) {
  const p = new Promise((resolve) => {
    const time = Math.floor(Math.random() * 5) + 1; // 1–5 seconds

    setTimeout(() => {
      resolve(`Promise ${i} resolved in ${time} seconds`);
    }, time * 1000);
  });

  window.promises.push(p);
}

Promise.any(window.promises)
  .then((result) => {
    document.getElementById("output").innerText = result;
  })
  .catch(() => {
    document.getElementById("output").innerText = "All promises failed!";
  });