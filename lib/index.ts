
import Odbc = require('Odbc');

export class HfsqlConnection {
    public driver: string;
    public serverName: string;
    public serverPort: string;
    public user: string;
    public password: string;
    public database: string;

    public constructor(d?: string, sn?: string, sp?: string, u?: string, p?: string, db?: string) {
        if(d) { this.driver = d; } else { this.driver = 'HFSQL'; }
        if(sn) { this.serverName = sn; } else { this.serverName = 'localhost'; }
        if(sp) { this.serverPort = sp; } else { this.serverPort = '4900'; }
        if(u) { this.user = u; } else { this.user = 'Admin'; }
        if(p) { this.password = p; } else { this.password = ''; }
        if(db) { this.database = db; } else { this.database = ''; }
    }

    public getConnectionString() {
        return 'DRIVER={'+ this.driver +'};Server Name='+ this.serverName +';Server Port='+ this.serverPort +';Database='+ this.database +';UID='+ this.user +';PWD='+this.password;
    }
}

// export class HfsqlFile {
//     private name: string;
//     private items: HfsqlItem[] = new Array<HfsqlItem>();

//     // Constructeur
//     public constructor(n: string) {
//         this.name = n;
//     }
// }
// export class HfsqlItem {
//     private name: string;
//     private type: string = '';

//     // Constructeur
//     public constructor(n: string) {
//         this.name = n;
//     }
// }

export class HfsqlController {

    // Variables globales du controller HFSQL
    private cnx: HfsqlConnection = new HfsqlConnection();
    private db = Odbc();
    private connected: boolean = false;

    // Constructeur (vide)
    public constructor() { }

    // Méthode permettanr de savoir si on est connecté à une BDD ou pas
    public EstConnecte() {
        return this.connected;
    }

    // Méthode d'initilisation du controller
    public HDecritConnexion(dc: HfsqlConnection) {
        // Possible que si on n'est pas connecté
        if(!this.connected) {
            this.cnx = dc;
        }

        return true;
    }

    // Méthode de connexion au serveur
    public HOuvreConnexion(dc?: HfsqlConnection) {

        // Si la description d'une connexion est passée en parametres, on décrit la connexion
        if(dc) { this.HDecritConnexion(dc); }

        // Si on est déjà connecté à une BDD, on se déconnecte
        if(this.connected) {
            this.HFermeConnexion();
        }

        // Lance la connexion à la BDD
        this.db.openSync(this.cnx.getConnectionString());
        this.connected = true;
    }

    // Méthode de déconnexion du serveur
    public HFermeConnexion() {
        // Si la connexion est déjà fermée
        if(!this.connected) { return; }

        // Fermeture de la connexion
        this.db.close(err => {
            if(err) {
                return err;
            } else {
                this.connected = false;
                return true;
            }
        })
    }


    //////////////////////////////////
    //  Méthode manuelle
    //////////////////////////////////
    public HExecuteRequeteSQL(query: string) {
        return this.db.querySync(query);
    }

    //////////////////////////////////
    //
    //  LECTURE
    //
    //////////////////////////////////

    // Méthode de lecture d'un fichier
    public HLit(filename: string) {
        return this.db.querySync("select * from " + filename);
    }

    // Méthode de lecture du premier enregistrement d'un fichier
    public HLitPremier(filename: string) {
        return this.db.querySync("select top 1 * from " + filename);
    }

    // Méthode de lecture du dernier enregistrement d'un fichier
    public HLitDernier(filename: string) {
        return this.db.querySync("select last 1 * from " + filename);
    }

    // Méthode de recherche d'un enregistrement dans un fichier donné sur une rubrique donnée
    public HLitRecherche(filename: string, item: string, value: string) {
        return this.db.querySync("select last 1 * from " + filename + " where " + filename + "." + item + " = " + value);
    }

    // Méthode de recherche d'un enregistrement dans un fichier donné sur une rubrique donnée
    public HLitRecherchePremier(filename: string, item: string, value: string) {
        var results = this.db.querySync("select top 1 * from " + filename + " where " + filename + "." + item + " = " + value);
        if(results.length > 0) {
            return results[0];
        } else {
            return undefined;
        }
    }

    // Méthode de recherche d'un enregistrement dans un fichier donné sur une rubrique donnée
    public HLitRechercheDernier(filename: string, item: string, value: string) {
        var results = this.db.querySync("select last 1 * from " + filename + " where " + filename + "." + item + " = " + value);
        if(results.length > 0) {
            return results[0];
        } else {
            return undefined;
        }
    }

    // Méthode de récupération du nombre d'enregistrement dans un fichier
    public HNbEnr(filename: string) {
        var results = this.db.querySync("select count(*) from " + filename);
        if(results.length > 0) {
            return results[0];
        } else {
            return undefined;
        }
    }
}