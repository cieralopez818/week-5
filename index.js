class dog {
    constructor (name, breed){
        this.name= name;
        this.breed= breed;
    }

    describe() {
        //console.log(`${this.name} size ${this.breed}`)
        return `${this.name} size ${this.position}`;
    }
}
class breed {
    constructor (name){
        this.breed= breed;
        this.size= [];
    }
}
    class menu {
        constructor () {
            this.dog= [];
            this.selectedDog= null;
        }
        start (){
            let selection= this.showMainMenuOptions ();
                while (selection != 0) {
                    switch (selection) {
                    case '1':
                        this.createBreed ();
                        break;
                    case '2':
                        this.viewBreed();
                        break;
                    case '3':
                        this.deleteBreed();
                        break;
                    case '4':
                        this.displayBreed();
                    default: 
                        selection= 0;            
        }
        selection= this.showMainMenuOptions ()
    }
        alert('Goodbye!');
        }     
showMainMenuOptions (){
    return prompt (`
    0)exit
    1)createBreed
    2)viewBreed 
    3)deleteBreed
    4)display allBreeds
`);
    }

showMainMenuOptions (breedInfo) {
    return prompt (`
        0)back 
        1)createBreed
        2)viewBreed 
...............
        ${breedInfo}
`);
    }
    displayBreeds (){
        let breedString = '    ';
        for (let i = 0; i < this.breeds.length; i++) {
            breedString += i+ ') ' + this.breeds[i].names+ '\n';
        }
        alert (breedString);
    }
    createBreed (){
        let name= prompt ('Enter name fore new breed');
        this.breeds.push (new Breed(name));
    }
    viewBreed (){
        let index = prompt ('Enter the index of the breed you wish to view');
        if (index > -1 && index < this.breeds.length){
            this.selectedBreed = this.breed (index);
            let description = 'Breed Name: ' + this.selectedBreed.name + '\n';
            for (let i= 0; i < this.selectedBreed.dogs.length; i++){
                description += i +')' + this.selectedBreed.dogs[i].name + ''
                + this.selectedBreed.dogs[i]. size + '\n';
            }
        let selection= this.showBreedMenuOptions (description);
            switch (selection) {
                case '1':
                    this.createBreed ();
                    break;
                case '2':
                    this.viewBreed ();
           }   } }
    deleteBreed (){
        let index = prompt ('Enter the index of the breed you wish to delete:');
        if (index > -1 && index < this.breeds.length) {
            this.breeds.splice(index,1);
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
}   
    let menu= new Menu ();
    menu.start();