const elHolidayName1 = document.getElementById('holiday-name-1');
const elHolidayName2 = document.getElementById('holiday-name-2');
const elHolidayImage1 = document.getElementById('holiday-image-1');
const elHolidayImage2 = document.getElementById('holiday-image-2');
const elHolidayButton1 = document.getElementById('holiday-button-1');
const elHolidayButton2 = document.getElementById('holiday-button-2');
const elSkipVoteButton = document.getElementById('skip-vote');

getTwoHolidays = async () => {
    const holidays = await fetch('http://localhost:3000/match');
    const holidaysArray = await holidays.json();
    
    elHolidayName1.innerHTML = holidaysArray.holiday1.name;
    elHolidayName2.innerHTML = holidaysArray.holiday2.name;

    elHolidayImage1.style.backgroundImage = `url('./img/${holidaysArray.holiday1.name}.jpg')`;
    elHolidayImage2.style.backgroundImage = `url('./img/${holidaysArray.holiday2.name}.jpg')`;
}

vote = async (holiday1, holiday2) => {
    const voteResult = await fetch(`http://localhost:3000/vote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify({holiday1, holiday2}),
    });
}

getTwoHolidays();

elHolidayButton1.addEventListener('click', (e) => {
    e.preventDefault();
    vote(elHolidayName1.innerHTML, elHolidayName2.innerHTML);
    getTwoHolidays();
});

elHolidayButton2.addEventListener('click', (e) => {
    e.preventDefault();
    vote(elHolidayName2.innerHTML, elHolidayName1.innerHTML);
    getTwoHolidays();
});
    
elSkipVoteButton.addEventListener('click', (e) => {
    e.preventDefault();
    getTwoHolidays();
});
    