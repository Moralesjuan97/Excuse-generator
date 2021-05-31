window.onload = () => {
    document.querySelector("#excuse").innerHTML = generateexcuse();

};

function generateexcuse() {

    var who = ["The dog", "My grandma", "His turtle", "My bird"];
    var action = ["ate", "peed", "crushed", "broke"];
    var what = ["my homework", "the keys", "the car"];
    var when = [
        "before the class",
        "right on time",
        "when I finished",
        "during my lunch",
        "while I was praying"
    ];

    var whoIndex = Math.floor(Math.random() * who.length);
    var actionIndex = Math.floor(Math.random() * action.length);
    var whatIndex = Math.floor(Math.random() * what.length);
    var whenIndex = Math.floor(Math.random() * when.length);

    return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];

};
