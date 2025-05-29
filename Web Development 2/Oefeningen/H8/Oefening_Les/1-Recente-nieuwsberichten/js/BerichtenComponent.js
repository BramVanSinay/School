import BerichtenRepository from "./BerichtenRepository.js"
export default class BerichtenComponent{
    #berichtenRepository
    #url
    constructor(){
        this.#url = 'https://data.stad.gent/api/explore/v2.1/catalog/datasets/recente-nieuwsberichten-van-stadgent/records?select=nieuwsbericht%2Ctitel%2Cpublicatiedatum&limit=5';
        this.#getData();
    }
    async #getData(){
        const response = await fetch(this.#url);
        const result = await response.json();
        this.#berichtenToHTML(result);
        const berichten = result.records.map(
            this.#berichtenRepository.addBericht(
                records.fields.publicatiedatum,
                records.fields.titel,
                records.fields.nieuwsbericht
            )
        );
    }
    #berichtenToHTML(berichten){
        
    }
}