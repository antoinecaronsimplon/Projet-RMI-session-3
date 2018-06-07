export interface IDataEdit{
    date : Date,                // date de la commande     
    numOrder: number,           // Numéro de la commande    
    numCodeCustom: number,      // Numéro client
    nameCustom: string,         // Nom du client
    CCIA_REV: string,           // Nom du commerciel ou revendeur
    emergency: boolean,         // Urgence de la commande
    info: string,               // Information complémentaire sur la commande
    subcontracting: object,     // { iseligist : boolean, isst: boolean}
    bcb: boolean,               // Licence du logiciel recu ?
    transfert: string,          
    color: string,              // Couleur de l'étui
    params: string,             // Champs pour les parametres
    prepa: string,              // Préparation de la commande 
    update : boolean,           // renouvellement d'une ancienne commande ?
    credit: boolean,            // Client à payé ?
    try: boolean,               // Essai effectué ?
    shipment: string,           // Destinataire de la commande / adresse ou livreur
    tracking: object,           // {num: number, numreturn : number}
    expedition: string,         // état de l'expédition
    order: object,              // { code: string , desc: string , qty: number }  
}