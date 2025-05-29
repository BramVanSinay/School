export default class Bericht {
    #publicatiedatum;
    #titel;
    #url;

    constructor(publicatiedatum, titel, url){
        publicatiedatum = this.#publicatiedatum;
        titel = this.#titel;
        url = this.#url;
    }
    get publicatiedatum(){
        return this.#publicatiedatum;
    }
    get titel(){
        return this.#titel;
    }
    get url(){
        return this.#url;
    }
    thoHTMLString(){
        
    }
}