const customName = document.getElementById('customname');
const randomizeButton = document.querySelector('.randomize');
const story = document.querySelector('.story');



let insertX = ["Sally the Builder",
    "Pollo",
    "Joni"]

let insertY = ["Elmo's World",
    "Mystery Spot",
    "Mt.Rushmore"]

let insertZ = ["spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"]

let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk.When they got to :inserty:, they stared in horror for a few moments, then :insertz:.Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`




function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

randomizeButton.addEventListener("click",() =>{

    let itemX = randomValueFromArray(insertX)
    let itemY = randomValueFromArray(insertY)
    let itemZ = randomValueFromArray(insertZ)

    let newStory = storyText
    newStory = newStory.replaceAll(":insertx:", itemX)
    newStory = newStory.replace(":inserty:", itemY)
    newStory = newStory.replace(":insertz:", itemZ)
    
    if (customName.value !== ''){
        let name = customName.value;
        newStory = newStory.replace("Bob",name)
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(300 / 14) + " stones"
        let temperature = Math.round((94 - 32) * (5 / 9)) + " celsius"
        newStory = newStory.replace("300 pounds", weight )
        newStory = newStory.replace("94 fahrenheit", temperature)
    }
    story.textContent = newStory
    story.style.visibility = 'visible'
})