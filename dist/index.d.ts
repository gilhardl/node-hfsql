import Odbc = require('Odbc');
export declare class HfsqlConnection {
    driver: string;
    serverName: string;
    serverPort: string;
    user: string;
    password: string;
    database: string;
    constructor(d?: string, sn?: string, sp?: string, u?: string, p?: string, db?: string);
    getConnectionString(): string;
}
export declare class HfsqlController {
    private cnx;
    private db;
    private connected;
    constructor();
    EstConnecte(): boolean;
    HDecritConnexion(dc: HfsqlConnection): boolean;
    HOuvreConnexion(dc?: HfsqlConnection): void;
    HFermeConnexion(): void;
    HExecuteRequeteSQL(query: string): Odbc.ResultRow[];
    HLit(filename: string): Odbc.ResultRow[];
    HLitPremier(filename: string): Odbc.ResultRow[];
    HLitDernier(filename: string): Odbc.ResultRow[];
    HLitRecherche(filename: string, item: string, value: string): Odbc.ResultRow[];
    HLitRecherchePremier(filename: string, item: string, value: string): Odbc.ResultRow | undefined;
    HLitRechercheDernier(filename: string, item: string, value: string): Odbc.ResultRow | undefined;
    HNbEnr(filename: string): Odbc.ResultRow | undefined;
}
