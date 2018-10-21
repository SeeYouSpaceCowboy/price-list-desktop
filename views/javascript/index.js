document.getElementById('itemAddForm').addEventListener('submit', e => {
  e.preventDefault()

  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  let body = JSON.stringify({
    name: "Apple",
    price: 0.59,
    unitPrice: 0.59,
    unit: "apple",
    location: "Ideals, 100-48",
    date: "18102018",
  })

  fetch("http://localhost:5000/api/items", {
    method: "POST",
    headers,
    body
  })
  .then(response => response.json())
  .then(item => {
    document.getElementById("root").innerHTML = item.name
  })
  .catch(err => new Error(err.message))
})
