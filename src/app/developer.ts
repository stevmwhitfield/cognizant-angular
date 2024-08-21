export class Developer {
    constructor(
        public firstName: string,
        public lastName: string,
        public favoriteLanguage: string,
        public yearStarted: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteLanguage = favoriteLanguage;
        this.yearStarted = yearStarted;
    }
}
