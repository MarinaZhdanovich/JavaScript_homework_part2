const initialData = [
  { id: 1, name: "Кардио тренировка", time: "08:00 - 09:00", maxParticipants: 20, currentParticipants: 10 },
  { id: 2, name: "Силовая тренировка", time: "10:00 - 11:00", maxParticipants: 15, currentParticipants: 7 },
  { id: 3, name: "Танцевальная тренировка", time: "11:00 - 12:00", maxParticipants: 30, currentParticipants: 28 },
];

if (!localStorage.getItem('classes')) {
  localStorage.setItem('classes', JSON.stringify(initialData));
}

const classes = JSON.parse(localStorage.getItem('classes'));
displayClasses(classes);

function displayClasses(classes) {
  const schedule = document.querySelector('.schedule-list');
  schedule.innerHTML = "";

  classes.forEach(item => {
    const classElement = document.createElement("li");
    classElement.className = "list-group-item d-flex justify-content-between align-items-center";

    classElement.innerHTML = `
      <div>
          <h2>${item.name}</h2>
          <p>${item.time}</p>
          <p>Максимум: ${item.maxParticipants}, Записано: ${item.currentParticipants}</p>
      </div>
      <div>
          <button class="write-btn btn btn-success" data-id="${item.id}">
              ${item.currentParticipants < item.maxParticipants ? "Записаться" : "Нет свободных мест"}
          </button>
          <button class="cancel-btn btn btn-danger" data-id="${item.id}" style="display: ${item.currentParticipants > 0 ? 'inline' : 'none'};">
              Отменить запись
          </button>
      </div>
    `;
    schedule.appendChild(classElement);

    const writeBtn = classElement.querySelector('.write-btn');
    if (writeBtn) {
      writeBtn.addEventListener('click', () => {
        const classes = JSON.parse(localStorage.getItem('classes'));
        const classToWrite = classes.find(item => item.id === Number(writeBtn.dataset.id));

        if (classToWrite.currentParticipants < classToWrite.maxParticipants) {
          classToWrite.currentParticipants++;
          localStorage.setItem('classes', JSON.stringify(classes));
          displayClasses(classes);
        }
      });
    }

    const cancelBtn = classElement.querySelector('.cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        const classes = JSON.parse(localStorage.getItem('classes'));
        const classToCancel = classes.find(item => item.id === Number(cancelBtn.dataset.id));

        if (classToCancel.currentParticipants > 0) {
          classToCancel.currentParticipants--;
          localStorage.setItem('classes', JSON.stringify(classes));
          displayClasses(classes);
        }
      });
    }
  });
}