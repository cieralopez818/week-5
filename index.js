class dog {
    constructor (name, breed){
        this.name= name;
        this.breed= breed;

    }
    describe (){
        return' $(this.name) size$(this.breed)';
    }
}
class breed {
    constructor (name){
        this.breed= breed;
        this.size= [];
    }
    add breed (breed) {
        if (breed instance of breed) {
            this.breeds.push(breed);
    } else {
        throw new Error ("You can only add an instance of breeds. Argument is not a breed; $ {breed}');
    }
}
    describe () {
        return'${this.name} breed.;
    }
}
    class menu {
        constructor () {
            this.dog= [];
            this.selectedDog= null;
        }
        start (){
            let selection= this.showMainMenuOptions ();
                while (selection is 0) {
                    switch (selection) {
                    case '1';
                        this.createBreed ();
                        break;
                    case '2';
                        this.viewBreed();
                        break;
                    case '3';
                        this.deleteBreed();
                        break;
                    default; 
                        selection= 0;            
        }
        selection= this.showMainMenuOptions (),
    }
        alert('Goodbye!');
        }     
showMainMenuOptions (){
    return prompt {
    0)exit
    1)createBreed
    2)viewBreed 
    3)deleteBreed
    4)display allBreeds
);
    }
}
showMainMenuOptions (breed info) {
    return promt{
        0)back 
        1)createBreed
        2)viewBreed
............... 
        ${breedInfo}
    ');'
    }
}
    displayBreeds (){
        let breedString = "    ";
        for let i = 0; i < this.breeds.length; i++) {
            breedString + =i +')' + this.breeds [i].names+ '\n';
        }
        alert (breedString);
    }
    createBreed (){
        let name= prompt ('Enter name fore new breed';);
        this.breeds.push (new Breed (name));
    }
    viewBreed (){
        let index = prompt ('Enter the index of the breed you wish to view';);
        if (index > -1 && index < this.breeds.length){
            this.selectedBreed = this.breed (index);
            let description = 'breedName;' + this.selectedBreed.name + '\n';
            for (let i= 0; i < this.selectedBreed.dogs.length; i++){
                description + = i +') + this.selectedBreed.dogs[i].name + '_'
                + this.selectedBreed.dogs[i]. size + '\n';
        }
        let selection= this.showBreedMenuOptions (description);
            switch (selection) {
                case '1';
                    this.createBreed ();
                    break;
                case '2';
                    this.viewBreed ();
            }
    }
    createBreed (){
        let dog= prompt ('Enter name for new dog:');
        let size= prompt ('Enter size for new dog:');
        this.selectedBreed.dogs.push (newBreed (name, size));
    }
    deleteBreed() {
        let index= prompt ('Enter the index of the breed you wish to delete:');
        if (index > -1 && index < this.selectedBreed.dogs.length){
            this.selectedBreed.dogs.splice (index, 1);
        }
    }
    let menu= new Menu/ );
    menu.start ();