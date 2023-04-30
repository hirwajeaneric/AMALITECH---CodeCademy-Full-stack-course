const Dog = require('./Dog');

const main = () => {
    let harley = new Dog("Harley Marting")

    const halley = new Dog('Halley');
    console.log(halley.name); // Print name value to console
    console.log(halley.behavior); // Print behavior value to console
    halley.incrementBehavior(); // Add one to behavior
    console.log(halley.name); // Print name value to console
    console.log(halley.behavior); // Print behavior value to console

}

main();