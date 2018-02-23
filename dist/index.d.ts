import Odbc = require('Odbc');
export declare class DatabaseConnection {
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
    HDecritConnexion(dc: DatabaseConnection): boolean;
    HOuvreConnexion(dc?: DatabaseConnection): void;
    HFermeConnexion(): void;
    HLit(filename: string): Odbc.ResultRow[];
    HLitRecherchePremier(filename: string, item: string, value: string): Odbc.ResultRow[];
}
