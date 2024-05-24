// let doc = document.querySelector('.text')
// let promptText = prompt('write something! ')

// doc.innerHTML = promptText

// let wrapper = document.querySelector('.wrapper')

// let phones = [
//     {
//         id: 1,
//         title: 'iphone 15 pro ',
//         cost: '1000$',
//         religion: 'LLA',
//         photoURL: 'https://allgood.uz/storage/products/November2023/nAbovokjI95ZsJWwg6g8.webp'
//     },
//     {
//         id: 2,
//         title: 'iphone 15 pro ',
//         cost: '1000$',
//         religion: 'LLA',
//         photoURL: 'https://openshop.uz/public/storage/uploads/products/photos/202309/0B3iNqdLpJX4r0Zp0dIwdxF9GQWe535VxM6uPOd4.jpg'
//     },
//     {
//         id: 3,
//         title: 'iphone 15 pro ',
//         cost: '1000$',
//         religion: 'LLA',
//         photoURL: 'https://olcha.uz/image/400x400/products/supplier/stores/1/2023-09-13/r5rWorFXae6kEzgxMYznEwFRoBxpxZ93aPv6ib2jUWPQ4KfPjwqt3GSZNYt5.jpg'
//     },
//     {
//         id: 4,
//         title: 'iphone 15 pro ',
//         cost: '1000$',
//         religion: 'LLA',
//         photoURL: 'https://static2.o9.de/resource/blob/1504566/5c3b5b8ebb2d87e3933025c6e4cf870e/png/apple-iphone-15-pro-max-natur-gallerybild-1-data.webp'
//     },
//     {
//         id: 5,
//         title: 'iphone 15 pro ',
//         cost: '1000$',
//         religion: 'LLA',
//         photoURL: 'https://down-tw.img.susercontent.com/file/tw-11134207-7qul2-lf0xcqqt0oxza7'
//     },
//     {
//         id: 6,
//         title: 'iphone 15 pro ',
//         cost: '1000$',
//         religion: 'LLA',
//         photoURL: 'https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/ARcAAOSwklVlgyqS/$_12.JPG?set_id=880000500F'
//     },
//     {
//         id: 7,
//         title: 'iphone 15 pro ',
//         cost: '1000$',
//         religion: 'LLA',
//         photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLnMZ_6zj14SgjNmOD59SiajePliQj9FaZCKtZ8QHqTEwHurkpK_x8xJ1lMQaB-JrtSM&usqp=CAU'
//     },
//     {
//         id: 8,
//         title: 'iphone 15 pro ',
//         cost: '1000$',
//         religion: 'LLA',
//         photoURL: 'https://spb-apple.ru/image/cache/catalog/Add/Apple%20iPhone%2015%20Pro%20Max/iphone-15-pro-max-black1-700x700.jpg'
//     },
// ]

// const ReadCard = () => {
//     phones.map((v) => {
//         let card = document.createElement('div')
//         card.innerHTML = `<h3>${v.title}</h3> <p>${v.cost}</p> <p>${v.religion}</p> <img src="${v.photoURL}" style= "width: 200px; height: 200px; border-radius: 15px;">`
//         wrapper.appendChild(card)
//     })
// }

// ReadCard()

        function getRandomNumber() {
            return Math.floor(Math.random() * 100) + 1;
        }
        function updateRandomNumber() {
            let randomNumberElement = document.getElementById('random-number');
            randomNumberElement.textContent = getRandomNumber();
        }

        updateRandomNumber();