'use strict'

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
class TaskQueue {
    constructor(delayMs) {
        this.delayMs = delayMs;
        this.tasks = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    run() {
        let promiseChain = Promise.resolve();

        this.tasks.forEach((task) => {
            promiseChain = promiseChain
                .then(() => task())
                .then((result) => {
                    console.log(result);
                    return delay(this.delayMs);
                });
        });

        return promiseChain.then(() => "Усі завдання завершено");
    }
}

const queue = new TaskQueue(1000);

queue.addTask(() => Promise.resolve("Task 1 виконано"));
queue.addTask(() => Promise.resolve("Task 2 виконано"));
queue.addTask(() => Promise.resolve("Task 3 виконано"));

queue.run().then((message) => {
    console.log(message);
});


