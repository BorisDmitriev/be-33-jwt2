# BE-Sichere-Benutzerregistrierung-und-Login mit JSON Web Tokens und Zugriffskontrolle

## Was du tun wirst

In dieser erweiterten Übungsaufgabe wirst du eine Node.js-Anwendung entwickeln, um eine sichere Benutzerregistrierungs- und Login-Funktionalität zu implementieren. Du wirst das Tool express-generator (ohne View-Engine) verwenden, um das Projekt zu initialisieren. Als Datenbank wirst du MongoDB verwenden. Zusätzlich wirst du JSON Web Tokens (JWT) für die Authentifizierung und Zugriffskontrolle verwenden.

## Aufgaben - Alter Teil
```Markdown
### Task 1: Projekt initialisieren

Verwende das express-generator-Tool, um ein neues Express-Projekt ohne View-Engine zu erstellen. Nenne das Projekt "user-authentication-jwt". Gehe sicher, dass du die Option `--no-view` verwendest, um auf eine View-Engine zu verzichten.

### Task 2: Abhängigkeiten installieren

Navigiere in das Projektverzeichnis und installiere die erforderlichen Abhängigkeiten. Stelle sicher, dass du die neuesten Versionen von express, mongoose, bcrypt und jsonwebtoken verwendest.

### Task 3: MongoDB verbinden

Öffne die Datei `app.js` im Hauptverzeichnis des Projekts. Importiere mongoose in dieser Datei und stelle eine Verbindung zur MongoDB-Datenbank her. Überprüfe, ob die Verbindung erfolgreich hergestellt wurde.

### Task 4: Benutzer-Schema und Modell erstellen

Erstelle eine Datei `user.schema.js` und definiere darin das Benutzer-Schema mit den erforderlichen Feldern: Benutzername, E-Mail-Adresse und Passwort. Verwende dabei mongoose.

Erstelle eine weitere Datei `user.model.js` und importiere das Benutzer-Schema. Erstelle mit Hilfe des Schemas das Benutzer-Modell.

### Task 5: Registrierungsrouten implementieren

Erstelle eine POST-Route `/users/signup`, die es Benutzern ermöglicht, sich zu registrieren. Die Route sollte Benutzername, E-Mail-Adresse und Passwort als Anforderungsparameter erhalten. Implementiere die Validierung der Eingabedaten und speichere den Benutzer in der Datenbank. Verwende bcrypt, um das Passwort zu hashen, bevor du es in der Datenbank speicherst. Erzeuge außerdem ein JWT für den Benutzer und sende es in der Antwort zurück.

### Task 6: Login-Routen implementieren

Erstelle eine POST-Route `/users/login`, die es Benutzern ermöglicht, sich einzuloggen. Die Route sollte Benutzername und Passwort als Anforderungsparameter erhalten. Überprüfe die eingegebenen Anmeldeinformationen mit den in der Datenbank gespeicherten Daten und sende eine Erfolgsmeldung zurück, wenn die Anmeldeinformationen korrekt sind, oder eine Fehlermeldung, wenn sie falsch sind. Erzeuge außerdem ein JWT für den authentifizierten Benutzer und sende es in der Antwort zurück.

### Task 7: Token-Authentifizierung mit benutzerdefinierter Middleware

Erstelle eine benutzerdefinierte Middleware `authenticateToken`, die den JWT des Benutzers überprüft und den Benutzer in der `req.user`-Eigenschaft speichert, wenn der Token gültig ist. Verwende die `jsonwebtoken`-Bibliothek, um den Token zu überprüfen und zu decodieren.

### Task 8: Schützen von Routen mit Zugriffskontrolle

Erweitere die Middleware `authenticateToken`, um auch die Rollen des Benutzers zu überprüfen und den Zugriff auf geschützte Routen basierend auf den Rollen zu kontrollieren. Implementiere eine benutzerdefinierte Middleware `protectRoute` für den Schutz von Routen, die nur für bestimmte Benutzertypen zugänglich sein sollen.
```
## Aufgaben - Neuer Teil

### Task 9: Aktualisieren und Löschen von Benutzern

Erweitere das Benutzermodell und die Routen, um das Anzeigen, die Aktualisierung und das Löschen von einzelnen Benutzern zu ermöglichen. Achte darauf, dass Passwörter vor dem Speichern gehasht werden und dass nur bestimmte Benutzertypen diese Aktionen durchführen dürfen.

## Hinweise

- Achte darauf, den Code in Module zu organisieren und die besten Praktiken für die Code-Strukturierung zu beachten.
- Du kannst die offizielle Dokumentation von express-generator, express, mongoose, bcrypt und jsonwebtoken für weitere Informationen zur Verwendung und Implementierung konsultieren.
- Verwende geeignete Middleware, um die Anforderungsparameter zu validieren und die Datenbankverbindung herzustellen.
- Beachte die Sicherheitsaspekte bei der Verwendung von JSON Web Tokens, insbesondere die Sicherheit des verwendeten Geheimnisses (Secret) und das Ablaufdatum der Tokens.
- Implementiere Zugriffskontrolle sorgfältig und überprüfe die Rollen des Benutzers, bevor bestimmte Aktionen erlaubt werden.

Viel Erfolg bei der Implementierung der sicheren Benutzerregistrierungs- und Login-Funktionalität mit JSON Web Tokens und Zugriffskontrolle in deiner Node.js-Anwendung!
