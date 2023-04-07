 // An array that holds all the questions and possible answers, including the corrent answer.
const allQuestionsEasy = [
    {
      question: 'What is the captial of France?',
      answers: ['Strasbourg', 'Marseille', 'Paris', 'Montpellier', 2],
    },
    {
      question: 'What is the capital of Germany?',
      answers: ['Berlin', 'Bonn' , 'Baden-Baden', 'Munich', 0]
    },
    {
      question: 'What is the capital of Brazil?',
      answers: ['Sao Paolo', 'Rio de Janeiro', 'Fortaleza', 'Brazilia', 3]
    },
    {
      question: 'What is the capital of Norway?',
      answers: ['Bergen', 'Tromso' , 'Trondheim', 'Oslo', 3]
    },
    {
      question: 'What is the capital of Italy?',
      answers: ['Naples', 'Rome' , 'Milan', 'Palermo', 1]
    },
    {
      question: 'What is the capital of Japan?',
      answers: ['Tokyo', 'Kyoto' , 'Saporo', 'Osaka', 0]
    },
    {
      question: 'What is the capital of the United States of America?',
      answers: ['New York', 'Los Angeles' , 'Washington DC', 'Boston', 2]
    },
    {
      question: 'What is the capital of Ireland?',
      answers: ['Cork', 'Galway' , 'Waterford', 'Dublin', 3]
    },
    {
      question: 'What is the capital of Russia?',
      answers: ['Moskow', 'Saint Petersburg' , 'Vladivostok', 'Kazan', 0]
    },
    {
      question: 'What is the capital of Spain?',
      answers: ['Bilbao', 'Madrid' , 'Barcelona', 'Valencia', 1]
    }
  ];

  const allQuestionsIntermediate = [
    {
      question: 'What is the captial of Canada?',
      answers: ['Toronto', 'Vancouver', 'Ottowa', 'Quebec', 2],
    },
    {
      question: 'What is the capital of Hungary?',
      answers: ['Debrecen', 'Pecs' , 'Budapest', 'Szeged', 2]
    },
    {
      question: 'What is the capital of India?',
      answers: ['New Delhi', 'Mumbai', 'Bangalore', 'Jaipur', 0]
    },
    {
      question: 'What is the capital of New Zealand?',
      answers: ['Christchurch', 'Auckland' , 'Wellington', 'Hobbiton', 2]
    },
    {
      question: 'What is the capital of Peru?',
      answers: ['Cusco', 'Iquitos' , 'Huaraz', 'Lima', 3]
    },
    {
      question: 'What is the capital of Sweden?',
      answers: ['Stockholm', 'Gothenburg' , 'Malmö', 'Umea', 0]
    },
    {
      question: 'What is the capital of the Turkey?',
      answers: ['Istanbul', 'Ankara' , 'Antalya', 'Mersin', 1]
    },
    {
      question: 'What is the capital of Ukraine?',
      answers: ['Lviv', 'Odesa' , 'Kyiv', 'Donetsk', 2]
    },
    {
      question: 'What is the capital of Afganistan?',
      answers: ['Herat', 'Kabul' , 'Jalalabad', 'Kandahar', 1]
    },
    {
      question: 'What is the capital of Austria?',
      answers: ['Salzburg', 'Graz' , 'Vienna', 'Linz', 2]
    }
  ];

const allQuestionsAdvanced = [
    {
      question: 'What is the capital of Switzerland?',
      answers: ['Bern', 'Geneva' , 'Zürich', 'Lausanne', 0]
    },
    {
      question: 'What is the capital of Argentina?',
      answers: ['La Plata', 'Rosario' , 'Buenos Aires', 'Quilmes', 2]
    },
    {
      question: 'What is the capital of Bulgaria?',
      answers: ['Plovdiv', 'Burgas' , 'Sofia', 'Ruse', 2]
    },
    {
      question: 'What is the capital of Ecuador?',
      answers: ['Guayaquil', 'Ambato' , 'Portoviejo', 'Quito', 3]
    },
    {
      question: 'What is the capital of Georgia?',
      answers: ['Tiblisi', 'Poti' , 'Batumi', 'Gori', 0]
    },
    {
      question: 'What is the capital of Malaysia?',
      answers: ['Kuching', 'Kuala Lumpur' , 'Johor Bahru', 'Ipoh', 1]
    },
    {
      question: 'What is the capital of Morocco?',
      answers: ['Rabat', 'Marrakesh' , 'Casalanca', 'Tangier', 0]
    },
    {
      question: 'What is the capital of Jamaica?',
      answers: ['Montego Bay', 'Port Antonio', 'Santa Cruz', 'Kingston', 3]
    },
    {
      question: 'What is the capital of North Macedonia?',
      answers: ['Prilep', 'Veles' , 'Skopje', 'Shtip', 2]
    },
    {
      question: 'What is the capital of Guatemala?',
      answers: ['Quetzaltenango', 'Escuintla' , 'Guatemala City', 'Mixco', 2]
    }
  ];
  
  const allQuestionsExpert = [
    {
      question: 'What is the capital of Lichtenstein?',
      answers: ['Vaduz', 'Schaan' , 'Triesen', 'Balzers', 0]
    },
    {
      question: 'What is the capital of Lesotho?',
      answers: ['Thaba-Tseka', 'Maseru' , 'Mafeteng', 'Malealea', 1]
    },
    {
      question: 'What is the capital of Burkina Faso?',
      answers: ['Koudougou', 'Bobo-Dioulasso' , 'Banfora', 'Ouagadougou', 3]
    },
    {
      question: 'What is the capital of Tuvalu?',
      answers: ['Vaiaku', 'Lolua' , 'Funafuti', 'Asau', 2]
    },
    {
      question: 'What is the capital of Tanzania?',
      answers: ['Dar Es Salaam', 'Dodoma' , 'Tanga', 'Morgoro', 1]
    },
    {
      question: 'What is the capital of Myanmar?',
      answers: ['Mandalay', 'Yangon' , 'Naypyidaw', 'Sagaing', 2]
    },
    {
      question: 'What is the capital of Maldives?',
      answers: ['Male City', 'Addu City' , 'Fuvahmulah City', 'Kulhudhuffushi City', 0]
    },
    {
      question: 'What is the capital of Malta?',
      answers: ['Victoria', 'Zabbar', 'Cospicua', 'Valletta', 3]
    },
    {
      question: 'What is the capital of Guyana?',
      answers: ['Linden', 'Bartica' , 'Georgetown', 'Buxton', 2]
    },
    {
      question: 'What is the capital of Papa New Guinea?',
      answers: ['Lea', 'Popondetta' , 'Madang', 'Port Moresby', 3]
    }
  ];
  
