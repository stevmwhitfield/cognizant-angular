export class Developer {
    constructor(
        public id: string | null,
        public firstName: string,
        public lastName: string,
        public favoriteLanguage: string,
        public yearStarted: number
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteLanguage = favoriteLanguage;
        this.yearStarted = yearStarted;
    }
}
