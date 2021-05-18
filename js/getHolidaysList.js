const elHolidayList = document.getElementById('holiday-list');

getHolidaysList = async () => {
    const holidays = await fetch('http://localhost:3000/holidays');
    const holidaysArray = await holidays.json();
    
    holidaysArray.forEach((element, index) => {
        const listItem = document.createElement('li');
        const listItemRank = document.createElement('span');
        const listItemName = document.createElement('div');
        listItem.style.backgroundImage = `url('./img/${element.name}.jpg')`;
        listItemRank.appendChild(document.createTextNode(index+1));
        listItemName.appendChild(document.createTextNode(element.name));
        listItem.appendChild(listItemRank);
        listItem.appendChild(listItemName);
        elHolidayList.appendChild(listItem);
    });
}

getHolidaysList();