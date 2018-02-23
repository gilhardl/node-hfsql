"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Odbc = require("Odbc");
var DatabaseConnection = /** @class */ (function () {
    function DatabaseConnection(d, sn, sp, u, p, db) {
        if (d) {
            this.driver = d;
        }
        else {
            this.driver = 'HFSQL';
        }
        if (sn) {
            this.serverName = sn;
        }
        else {
            this.serverName = 'localhost';
        }
        if (sp) {
            this.serverPort = sp;
        }
        else {
            this.serverPort = '4900';
        }
        if (u) {
            this.user = u;
        }
        else {
            this.user = 'Admin';
        }
        if (p) {
            this.password = p;
        }
        else {
            this.password = '';
        }
        if (db) {
            this.database = db;
        }
        else {
            this.database = '';
        }
    }
    DatabaseConnection.prototype.getConnectionString = function () {
        return 'DRIVER={' + this.driver + '};Server Name=' + this.serverName + ';Server Port=' + this.serverPort + ';Database=' + this.database + ';UID=' + this.user + ';PWD=' + this.password;
    };
    return DatabaseConnection;
}());
exports.DatabaseConnection = DatabaseConnection;
var HfsqlController = /** @class */ (function () {
    // Constructeur (vide)
    function HfsqlController() {
        // Variables globales du controller HFSQL
        this.cnx = new DatabaseConnection();
        this.db = Odbc();
        this.connected = false;
    }
    // Méthode permettanr de savoir si on est connecté à une BDD ou pas
    HfsqlController.prototype.EstConnecte = function () {
        return this.connected;
    };
    // Méthode d'initilisation du controller
    HfsqlController.prototype.HDecritConnexion = function (dc) {
        // Possible que si on n'est pas connecté
        if (!this.connected) {
            this.cnx = dc;
        }
        return true;
    };
    // Méthode de connexion au serveur
    HfsqlController.prototype.HOuvreConnexion = function (dc) {
        // Si la description d'une connexion est passée en parametres, on décrit la connexion
        if (dc) {
            this.HDecritConnexion(dc);
        }
        // Si on est déjà connecté à une BDD, on se déconnecte
        if (this.connected) {
            this.HFermeConnexion();
        }
        // Lance la connexion à la BDD
        this.db.openSync(this.cnx.getConnectionString());
        this.connected = true;
    };
    // Méthode de déconnexion du serveur
    HfsqlController.prototype.HFermeConnexion = function () {
        var _this = this;
        // Si la connexion est déjà fermée
        if (!this.connected) {
            return;
        }
        // Fermeture de la connexion
        this.db.close(function (err) {
            if (err) {
                return err;
            }
            else {
                _this.connected = false;
                return true;
            }
        });
    };
    // Méthode de lecture d'un fichier
    HfsqlController.prototype.HLit = function (filename) {
        return this.db.querySync("select * from " + filename);
    };
    // Méthode de recherche d'un enregistrement dans un fichier donné sur une rubrique donnée
    HfsqlController.prototype.HLitRecherchePremier = function (filename, item, value) {
        return this.db.querySync("select top 1 * from " + filename + " where " + filename + "." + item + " = " + value);
    };
    return HfsqlController;
}());
exports.HfsqlController = HfsqlController;
