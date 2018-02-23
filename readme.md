
# node-hfsql

Une interface synchrone pour nodejs permettant la manipulation d'une base de donnée HyperFileSQL (Windev). 

## Pré-requis

### Visual C++ Build Environment

- **Option 1** : Install `Visual C++ Build Tools` using the Default Install option. (http://landinghub.visualstudio.com/visual-cpp-build-tools)
- **Option 2** : Install `Visual Studio 2015` and select Common Tools for Visual C++ during setup. This also works with the free Community and Express for Desktop editions.
- **Option 3** : If you `already have Visual Studio 2015 installed` and did not install the Common Tools for Visual C++ during setup, you can File -> New -> Project, pick any of the options under Templates -> Other Languages -> Visual C++ then Ok and Visual Studio will offer to install the Common Tools for Visual C++ with a "Install Missing Features" / "You need the Universal Windows App Development Tools to develop Windows app projects." dialog.
> 💡 [Windows Vista / 7 only] requires .NET Framework 4.5.1

----------------
----------------
----------------
----------------

Visual C++ Build Environment:
    Option 1: Install Visual C++ Build Tools using the Default Install option. 
      (http://landinghub.visualstudio.com/visual-cpp-build-tools)
    Option 2: Install Visual Studio 2015 and select Common Tools for Visual C++ during setup. 
      This also works with the free Community and Express for Desktop editions.
    Option 3: if you already have Visual Studio 2015 installed and did not install the Common
      Tools for Visual C++ during setup, you can File -> New -> Project, pick any of the
      options under Templates -> Other Languages -> Visual C++ then Ok and Visual Studio will
      offer to install the Common Tools for Visual C++ with a "Install Missing Features" / 
      "You need the Universal Windows App Development Tools to develop Windows app projects."
      dialog.

    💡[Windows Vista / 7 only] requires .NET Framework 4.5.1

Install Python 2.7 (v3.x.x is not supported), and run npm config set python python2.7 (or 
  see below for further instructions on specifying the proper Python version and path.)

Install ODBC driver for HFSQL
  http://www.pcsoft.fr/st/telec/modules-communs-22/wx22_52j.htm

Lancer l'administrateur de sources de données ODBC (ODBCAD32.exe ou ODBCAD646.exe)
    Etape 1: Sélectionner l'onglet "Sources de données utilisateur"
    Etape 2: Cliquer sur "Ajouter", sélectionner le driver "HFSQL"/"HyperfileSQL"
    Etape 3: Cliquer sur "Terminer" et ne remplir que le nom de la source de données : "HFSQL"

Launch cmd: 
  npm config set msvs_version 2015
  npm install

  
----------------
----------------
----------------
----------------

Made with https://stackedit.io/app