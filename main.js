
//Question Class
class Question{
    #answer;
    #id;
    constructor(id,title,image,choices,answer){
        this.#id=id,
        this.title=title,
        this.image=image,
        this.choices=choices,
        this.#answer=answer
    }
 
}



// Quiz Questions Array using Question class
const examQuestions = [
    new Question(
        1, 
        "What is the name of this animal?", 
        "whale.jpg", 
        ["Blue Whale", "Humpback Whale", "Sperm Whale"], 
        "Blue Whale"
    ),
    new Question(
        2, 
        "Which country's flag is this?", 
        "japan-flag.jpg", 
        ["China", "South Korea", "Japan"], 
        "Japan"
    ),
    new Question(
        3, 
        "What city is shown in this image?", 
        "barcelona.jpg", 
        ["Madrid", "Barcelona", "Valencia"], 
        "Barcelona"
    ),
    new Question(
        4, 
        "What type of animal is this?", 
        "lion.jpg", 
        ["Tiger", "Lion", "Leopard"], 
        "Lion"
    ),
    new Question(
        5, 
        "What type of landmark is this?", 
        "pyramid.jpg", 
        ["Castle", "Pyramid", "Tower"], 
        "Pyramid"
    ),
    new Question(
        6, 
        "What planet is this?", 
        "mars.jpeg", 
        ["Jupiter", "Mars", "Venus"], 
        "Mars"
    ),
    new Question(
        7, 
        "What is this country?", 
        "eiffel_tower.jpg", 
         ["Germany", "France", "Italy"],
        "France"
    ),
    new Question(
        8, 
       "What is this a popular type of?",
        "Taco.jpg", 
        ["Burger", "Taco", "Pizza"],
        "Taco"
        ),
    new Question(
        9, 
        "What is this an example of?",
        "sunflower.jpg", 
        ["Tree", "Flower", "Grass"],
        "Flower"
    ),
    new Question(
        10, 
        "What mountain is this?", 
        "everest.jpg", 
        ["K2", "Mount Everest", "Mount Kilimanjaro"], 
        "Mount Everest"
    )
];

