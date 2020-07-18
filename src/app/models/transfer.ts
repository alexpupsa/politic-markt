export class Transfer {
    nume: string;
    partidSursa: string;
    partidDestinatie: string;
    linkPoza?: string;
    motiv: string;
    constructor(nume: string, partidSursa: string, partidDestinatie: string, motiv: string) {
        this.nume = nume;
        this.partidSursa = partidSursa;
        this.partidDestinatie = partidDestinatie;
        this.motiv = motiv;
    }
}