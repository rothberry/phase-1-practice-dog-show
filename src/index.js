// ! GLOBAL
const DOGS_URL = "http://localhost:3000/dogs/"

const tableBody = document.getElementById("table-body")
const editForm = document.getElementById("dog-form")

const fetchAllDogs = () => {
	fetch(DOGS_URL)
		.then((res) => res.json())
		.then((dogsArray) => {
			console.log(dogsArray)
			dogsArray.forEach((dogObj) => createDogRow(dogObj))
		})
}

const fetchOneDog = () => {
	fetch(DOGS_URL + 1)
		.then((res) => res.json())
		.then((dog) => createDogRow(dog))
}

const testApi = () => {
	fetch("http://localhost:3000/api")
		.then((res) => res.json())
		.then((response) => {
			console.log(response.data)
		})
}
const createDogRow = (dogData) => {
	/* 
  <tr>
    <td>Dog *Name*</td>
    <td>*Dog Breed*</td>
    <td>*Dog Sex*</td>
    <td><button>Edit</button></td>
    </tr>
  */
	const { name, breed, sex } = dogData
	//  const name = dogData.name
	//  const breed = dogData.breed
	//  const sex = dogData.sex
	const newRow = document.createElement("tr")
	const nameTd = document.createElement("td")
	const breedTd = document.createElement("td")
	const sexTd = document.createElement("td")
	const editTd = document.createElement("td")
	const editBtn = document.createElement("button")

	nameTd.textContent = name
	breedTd.textContent = breed
	sexTd.textContent = sex

	editBtn.textContent = "SHOW"

	editBtn.addEventListener("click", (e) => {
		// console.log({name, breed, sex})
		// editForm.name.value = name
		// editForm.breed.value = breed
		// editForm.sex.value = sex

		document.getElementById("dog-name").textContent = name
		document.getElementById("dog-breed").textContent = breed
		document.getElementById("dog-sex").textContent = sex
	})
	editTd.append(editBtn)

	newRow.append(nameTd, breedTd, sexTd, editTd)
	tableBody.prepend(newRow)
}

const init = () => {
	fetchAllDogs()
	editForm.addEventListener("submit", (e) => {
		e.preventDefault()
		const newDogObj = {
			name: e.target.name.value,
			breed: e.target.breed.value,
			sex: e.target.sex.value,
		}
    console.log(newDogObj)
    createDogRow(newDogObj)
	})
	// fetchOneDog()
	// testApi()
}

init()
