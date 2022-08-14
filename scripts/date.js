let months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];


const setDate = () => {
    console.log('date.js LOADED');

    //TODAYS DAY
    const currentDay = new Date().toLocaleString(
            'default', {weekday: 'long'}
    );
    let dayElement = document.getElementById('dayOfWeek');
    let dayNow = document.createTextNode(currentDay);
    dayElement.appendChild(dayNow);

    //TODAYS MONTH/DAY/YEAR
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();

    const monthString = months[month];
    
    let dateEnding;
    const checkDayEnding = () => {
        if (day === 1 || day === 21 || day === 31) {
            dateEnding = 'st';
        } else if (day === 2 || day === 22) {
            dateEnding = 'nd';
        } else if (day === 3 || day === 23) {
            dateEnding = 'rd';
        } else {
            dateEnding = 'th';
        }
        return dateEnding;
    }
    checkDayEnding();

    let dateElement = document.getElementById('todaysDate');
    let dateNow = document.createTextNode(`${monthString}, ${day}${dateEnding} ${year}`);
    dateElement.appendChild(dateNow);

};
setDate();