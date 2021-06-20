//Task 7//
/*let user ='Jhon Doe';
console.log(user);

let student = 'Natali';
console.log(student);

user = student; //В консоль значение 'Natali'//
console.log(user);

//Task 8//
let test = 1;
++test;
test += 1;
console.log(test); //В консоле значение 3//
test -= 1;
console.log(test); //В консоле значение 2//
console.log(Boolean(test)); //В консоле значение 'true'//

//Task 9//
const arr = [2, 3, 5, 8];
let result = 1;
for(let i = 0; i<arr.length; i++) {
    result *= arr[i];
};
console.log('result', result);

//Task 10
const arr10 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < arr10.length; ++i) {
    if(arr10[i] > 5 && arr10[i] < 10) {
    console.log(arr10[i]);
    }
}

//Task 11
const arr11 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < arr11.length; ++i) {
    if(!(arr11[i] % 2)) {
        console.log(arr11[i]);
    }
}
//Lesson-3
//Task 5
const palidrome = (str) => {
    strReverse = str.split('').reverse().join('')
        if(strReverse == str) {
            return 'true';
        }else {
            return 'false';
        }
    }
console.log(palidrome('rhagdt'))

//Task 6
const min = (a,b) => {
    return (a < b) ? a : b
}
console.log(min(15,120));

const max = (a,b) => {
    if(a > b) {
        return a
    }else {
        return b
    }
}
console.log(max(52,21));

//Task 7
const arr = [20,33,30,48,50,88,75,69,10,100];
const addZero = (arr) => {
for(let i = 0; i < arr.length; i++){
    if(!(arr[i] % 10)){
        arr[i] = ('' + arr[i].replaceAll('0', 'zero'))
    }
}
return arr
}
console.log(addZero(arr));*/

//Lesson-4
//Task-5 console.log(sum(5)(2)); // 7
function sum(a) {
    return function(b) {
        return (a + b)
    }
}
console.log(sum(5)(2))

//Task-6 Покрасьте абзацы по клику (событие click)
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const Paragraphs = document.querySelectorAll('p');
const changeColor = function() {
    let x = 0;
    return function(e) {
        e.target.style.color = colors[x];
        x++;
        if(x == colors.length) {
            x = 0;
        }
    }
}
for(let i = 0; i < Paragraphs.length; i++) {
    Paragraphs[i].addEventListener('click', changeColor());
}

//Lesson-5
//Task 5. Преобразование формата даты
const date = '2020-11-26';
const newDate = date => {
    return date.split('-').reverse().join('.')
}
console.log(newDate(date));

//Task 6. Поиск объектов размещения
const data = [
    {
      country: 'Russia',
      city: 'Saint Petersburg',
      hotel: 'Hotel Leopold',
    },
    {
      country: 'Spain',
      city: 'Santa Cruz de Tenerife',
      hotel: 'Apartment Sunshine',
    },
    {
      country: 'Slowakia',
      city: 'Vysokie Tatry',
      hotel: 'Villa Kunerad',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hostel Friendship',
    },
    {
      country: 'Indonesia',
      city: 'Bali',
      hotel: 'Ubud Bali Resort&SPA',
    },
    {
      country: 'Netherlands',
      city: 'Rotterdam',
      hotel: 'King Kong Hostel',
    },
    {
      country: 'Marocco',
      city: 'Ourika',
      hotel: 'Rokoko Hotel',
    },
    {
      country: 'Germany',
      city: 'Berlin',
      hotel: 'Hotel Rehberge Berlin Mitte',
    },
  ];
  const listData = str => {
      const arr = [];
      for(let i = 0; i < data.length; i++) {
          const currentStr = `${data[i].country}, ${data[i].city}, ${data[i].hotel}`;
          if(currentStr.includes(str)) {
              arr.push(currentStr)
          }
      }
      return arr;
    }
    console.log(listData('Germany'));

//Task 7.
const hotels = [
    {
      name: 'Hotel Leopold',
      city: 'Saint Petersburg',
      country: 'Russia',
    },
    {
      name: 'Apartment Sunshine',
      city: 'Santa Cruz de Tenerife',
      country: 'Spain',
    },
    {
      name: 'Villa Kunerad',
      city: 'Vysokie Tatry',
      country: 'Slowakia',
    },
    {
      name: 'Hostel Friendship',
      city: 'Berlin',
      country: 'Germany',
    },
    {
      name: 'Radisson Blu Hotel',
      city: 'Kyiv',
      country: 'Ukraine',
    },
    {
      name: 'Paradise Hotel',
      city: 'Guadalupe',
      country: 'Mexico',
    },
    {
      name: 'Hotel Grindewald',
      city: 'Interlaken',
      country: 'Switzerland',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Virgin Hotel',
      city: 'Chicago',
      country: 'USA',
    },
    {
      name: 'Grand Beach Resort',
      city: 'Dubai',
      country: 'United Arab Emirates',
    },
    {
      name: 'Shilla Stay',
      city: 'Seoul',
      country: 'South Korea',
    },
    {
      name: 'San Firenze Suites',
      city: 'Florence',
      country: 'Italy',
    },
    {
      name: 'The Andaman Resort',
      city: 'Port Dickson',
      country: 'Malaysia',
    },
    {
      name: 'Black Penny Villas',
      city: 'BTDC, Nuca Dua',
      country: 'Indonesia',
    },
    {
      name: 'Koko Hotel',
      city: 'Tokyo',
      country: 'Japan',
    },
    {
      name: 'Ramada Plaza',
      city: 'Istanbul',
      country: 'Turkey',
    },
    {
      name: 'Waikiki Resort Hotel',
      city: 'Hawaii',
      country: 'USA',
    },
    {
      name: 'Puro Hotel',
      city: 'Krakow',
      country: 'Poland',
    },
    {
      name: 'Asma Suites',
      city: 'Santorini',
      country: 'Greece',
    },
    {
      name: 'Cityden Apartments',
      city: 'Amsterdam',
      country: 'Netherlands',
    },
    {
      name: 'Mandarin Oriental',
      city: 'Miami',
      country: 'USA',
    },
    {
      name: 'Concept Terrace Hotel',
      city: 'Rome',
      country: 'Italy',
    },
    {
      name: 'Ponta Mar Hotel',
      city: 'Fortaleza',
      country: 'Brazil',
    },
    {
      name: 'Four Seasons Hotel',
      city: 'Sydney',
      country: 'Australia',
    },
    {
      name: 'Le Meridien',
      city: 'Nice',
      country: 'France',
    },
    {
      name: 'Apart Neptun',
      city: 'Gdansk',
      country: 'Poland',
    },
    {
      name: 'Lux Isla',
      city: 'Ibiza',
      country: 'Spain',
    },
    {
      name: 'Nox Hostel',
      city: 'London',
      country: 'UK',
    },
    {
      name: 'Leonardo Vienna',
      city: 'Vienna',
      country: 'Austria',
    },
    {
      name: 'Adagio Aparthotel',
      city: 'Edinburgh',
      country: 'UK',
    },
    {
      name: 'Steigenberger Hotel',
      city: 'Hamburg',
      country: 'Germany',
    },
  ];
  const countries = hotels.reduce((acc, item) => {
      const result = {...acc};
      if(!result[item.country]){
          result[item.country] = []
      }
      if(!result[item.country].includes(item.city)){
          result[item.country].push(item.city)
      }
      return result
  },  {})
  console.log(countries)

  