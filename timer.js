const hourElement = document.querySelector('.main__timer-element__hour');
        const minuteElement = document.querySelector('.main__timer-element__minutes');
        const secondElement = document.querySelector('.main__timer-element__secunds');

        let timeRemaining = 30 * 60 * 1000;

        function updateTimer() {
            const hours = Math.floor(timeRemaining / 3600000).toString().padStart(2, '0');
            const minutes = Math.floor((timeRemaining % 3600000) / 60000).toString().padStart(2, '0');
            const seconds = Math.floor((timeRemaining % 60000) / 1000).toString().padStart(2, '0');

            hourElement.textContent = hours;
            minuteElement.textContent = minutes;
            secondElement.textContent = seconds;

            timeRemaining -= 1000;

            if (timeRemaining < 0) {
                timeRemaining = 30 * 60 * 1000;
            }
        }

        setInterval(updateTimer, 1000);