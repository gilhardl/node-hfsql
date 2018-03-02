# node-hfsql

Une interface synchrone pour nodejs permettant la manipulation d'une base de donnée HyperFileSQL (Windev). 

## Pré-requis

### Visual C++ Build environment

- **Option 1** : `Installer Visual C++ Build Tools` avec l'option d'installation par défaut. (http://landinghub.visualstudio.com/visual-cpp-build-tools)
- **Option 2** : Installer `Visual Studio 2015` et sélectionner Common Tools for Visual C++ pendant l'installation.
- **Option 3** : Si vous `déjà installé Visual Studio 2015` sans installer les Common Tools for Visual C++ pendant l'installation : 
	- File -> New -> Project, 
	- Séléctionner une des options dans Templates -> Other Languages -> Visual C++ 
	- Cliquez sur Ok
	- Visual Studio devrait vous proposer d'installer Common Tools pour Visual C++ en affichant un message :
		- "Install Missing Features" / "You need the Universal Windows App Development Tools to develop Windows app projects."
> 💡 [Windows Vista / 7 only] requires .NET Framework 4.5.1

### Python environment
- Install Python 2.7 (v3.x.x is not supported)
- Run `npm config set python python2.7`

### ODBC driver for HFSQL
- **Option 1** : `Installer le Serveur HFSQL` et cocher "Installer le driver ODBC pour HFSQL" à la fin de l'installation.
- **Option 2** : Si vous  `avez déjà un serveur HFSQL installé` et que vous n'avez pas installé le driver OBDC pour HFSQL pendant l'installation :
	- Vous pouvez installer seulement le driver ODBC (http://www.pcsoft.fr/st/telec/modules-communs-22/wx22_52j.htm)

### Ajouter HFSQL aux sources de données ODBC de Windows
Lancer l'`administrateur de sources de données ODBC` (ODBCAD32.exe ou ODBCAD646.exe) :
    - **Etape 1** : Sélectionner l'onglet "Sources de données utilisateur"
    - **Etape 2** : Cliquer sur "Ajouter", sélectionner le driver "HFSQL"/"HyperfileSQL"
    - **Etape 3** : Cliquer sur "Terminer" et ne remplir que le nom de la source de données : "HFSQL"

### Définir la version de Visual C++ Build Tools utilisée par npm
Executer les commandes suivantes dans le répertoire de votre projet: 
- `npm config set msvs_version 2015`
- `npm install`