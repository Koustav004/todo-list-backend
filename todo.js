const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
        
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
};
const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    console.log(task, "Added successfully.");
}

const command = process.argv[2];
const arguments = process.argv[3];

if(command === "add") {
    if (arguments) {
        addTask(arguments);
    }else if (command === "list") {
        listTasks();
    } else if (command === "remove") {
        removeTask(parseInt(arguments));
    } else {
        console.log("Unknown command");
    }
}