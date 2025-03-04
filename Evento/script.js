document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTask = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const magicBox = document.getElementById("magicBox");

    addTask.addEventListener("click", () => {
        if (taskInput.value.trim() === "") return;

        const li = document.createElement("li");
        li.textContent = taskInput.value;
        li.addEventListener("click", () => li.classList.toggle("completed"));
        taskList.appendChild(li);
        taskInput.value = "";
    });

    magicBox.addEventListener("mouseenter", () => {
        magicBox.style.backgroundColor = getRandomColor();
        magicBox.textContent = "✨ ¡Magia! Tus tareas desaparecerán... (o no)";
        magicBox.style.transition = "background-color 0.5s, transform 0.5s";
        magicBox.style.transform = "rotate(5deg) scale(1.1)";
    });

    magicBox.addEventListener("mouseleave", () => {
        magicBox.style.backgroundColor = "";
        magicBox.textContent = "🎩 Pasa el mouse por aquí.";
        magicBox.style.transform = "rotate(0deg) scale(1)";
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});