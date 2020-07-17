//Github class

class Github {
    constructor(){
        this.client_id = `72971c12be7365fde4ed`;
        this.client_secret = `f97bb397e94526387d39ce04e046185e25d98ccb`;
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_Secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}