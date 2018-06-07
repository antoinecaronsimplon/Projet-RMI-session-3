export interface IDataView{ 
    date : Date,                // date de la commande     
    numOrder: number,           // Numéro de la commande    
    numCodeCustom: number,      // Numéro client
    nameCustom: string,         // Nom du client
    CCIA_REV: string,           // Nom du commerciel ou revendeur
    emergency: boolean,         // Urgence de la commande
    info: string,               // Information complémentaire sur la commande
    subcontracting: object,     // { iseligist: boolean, isst: boolean}
    bcb: string,                // Licence du logiciel recu ?
    transfert: string,         
    color: string,              // Couleur de l'étui
    params: string,             // Champs pour les parametres
    prepa: string,              // Préparation de la commande 
    update : boolean,           // renouvellement de la commande
    credit: boolean,            // Client à payé ?
    try: boolean,               // Essai effectué ?
    shipment: string,           // Destinataire de la commande / adresse ou livreur
    tracking: object,           // { num: number, numreturn: number }
    expedition: string,         // état de l'expédition
    LinkOrder: string,          // Commande lié

}