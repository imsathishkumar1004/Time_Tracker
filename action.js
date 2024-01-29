const min = document.getElementById('minute');
const sec = document.getElementById('sec');
const hour = document.getElementById('Hour');
const button = document.getElementById('timer-button');
const tasks = document.getElementById('task');
const description = document.getElementById('desc');
const table = document.getElementById('table');
const calendar = document.getElementById('start');

let timers;

function final_time() {
    if (button.textContent === 'START') {
        button.textContent = 'STOP';
        let s = 0;
        let m = 0;
        let h = 0;
        timers = setInterval(function () {
            s++;
            if (s >= 60) {
                s = 0;
                m++;
                if (m >= 60) {
                    m = 0;
                    h++;
                }
            }
            sec.textContent = s.toString().padStart(2, '0');
            min.textContent = m.toString().padStart(2, '0');
            hour.textContent = h.toString().padStart(2, '0');
        }, 1000);
    } else if (button.textContent === 'STOP') {
        button.textContent = 'START';
        table.innerHTML += `<tr class="row">
            <td>${tasks.value}</td>
            <td>${description.value}</td>
            <td>${hour.textContent}:${min.textContent}:${sec.textContent}</td>
            <td>${calendar.value}</td
        </tr>`;
        clearInterval(timers);
        sec.textContent = '00';
        min.textContent = '00';
        hour.textContent = '00';
        tasks.value ='';
        description.value ='';

    }
}

button.addEventListener('click', final_time);
