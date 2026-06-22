# Guide de Compilation et Soumission aux Stores
## AppelUnTaxi — Apps Mobile

---

## Ce que vous avez dans ce dossier

```
mobile/
├── client/          ← App pour les clients
│   ├── android/     ← Projet Android
│   ├── ios/         ← Projet iOS
│   └── ...
├── chauffeur/       ← App pour les chauffeurs
│   ├── android/     ← Projet Android
│   ├── ios/         ← Projet iOS
│   └── ...
└── .github/
    └── workflows/
        ├── build-android.yml        ← Compilation automatique des AAB
        └── generate-keystore.yml   ← Générer les keystores (1 fois)
```

---

## MÉTHODE RECOMMANDÉE — GitHub Actions (sans Android Studio)

> Idéal si vous n'avez pas de PC Windows/Mac ou ne voulez pas installer Android Studio.
> GitHub compile les apps à votre place et vous donne les fichiers `.aab` à télécharger.

### ÉTAPE A — Générer les keystores (1 fois seulement)

> Le keystore est comme un "sceau officiel" qui identifie votre app sur le Play Store.
> **⚠️ IMPORTANT : Gardez précieusement les valeurs que vous allez copier — si vous les perdez, vous ne pourrez plus mettre à jour votre app.**

1. Allez sur **github.com/stephanedesmarteau/appeluntaxi-mobile**
2. Cliquez sur l'onglet **Actions**
3. Dans la liste à gauche, cliquez sur **"🔑 Générer les Keystores (1 fois seulement)"**
4. Cliquez sur le bouton **"Run workflow"** → **Run workflow**
5. Attendez ~1 minute que la tâche se termine (icône verte ✅)
6. Cliquez sur la tâche terminée → cliquez sur **"Générer les 2 keystores"**
7. Déroulez la section **"Encoder en Base64 et afficher les valeurs des secrets"**
8. Vous verrez 8 valeurs à copier (chauffeur + client) — copiez-les dans un endroit sûr

### ÉTAPE B — Enregistrer les secrets GitHub

1. Sur GitHub, allez dans **Settings** (du repo) → **Secrets and variables** → **Actions**
2. Cliquez **"New repository secret"** et ajoutez ces 8 secrets :

| Nom du secret | Valeur à copier depuis les logs |
|---|---|
| `CHAUFFEUR_KEYSTORE_BASE64` | La longue chaîne de lettres/chiffres après `--- SECRET: CHAUFFEUR_KEYSTORE_BASE64 ---` |
| `CHAUFFEUR_KEYSTORE_PASSWORD` | Le code après `--- SECRET: CHAUFFEUR_KEYSTORE_PASSWORD ---` |
| `CHAUFFEUR_KEY_ALIAS` | `appeluntaxi-chauffeur` |
| `CHAUFFEUR_KEY_PASSWORD` | Même valeur que `CHAUFFEUR_KEYSTORE_PASSWORD` |
| `CLIENT_KEYSTORE_BASE64` | La longue chaîne après `--- SECRET: CLIENT_KEYSTORE_BASE64 ---` |
| `CLIENT_KEYSTORE_PASSWORD` | Le code après `--- SECRET: CLIENT_KEYSTORE_PASSWORD ---` |
| `CLIENT_KEY_ALIAS` | `appeluntaxi-client` |
| `CLIENT_KEY_PASSWORD` | Même valeur que `CLIENT_KEYSTORE_PASSWORD` |

### ÉTAPE C — Compiler les apps Android

**Automatiquement** : Chaque fois que vous faites un `git push` sur la branche `main`, les 2 apps se compilent automatiquement.

**Manuellement** :
1. Allez dans **Actions** → **"🚀 Build Android AAB"**
2. Cliquez **"Run workflow"**
3. Choisissez : `both` (les deux), `chauffeur` ou `client`
4. Optionnel : entrez un numéro de version (ex: `1.0.1`) et un code de version (ex: `2`)
5. Cliquez **"Run workflow"**
6. Attendez ~5-10 minutes
7. Téléchargez les fichiers `.aab` depuis la section **Artifacts** en bas de la page

---

## MÉTHODE ALTERNATIVE — Android Studio (si vous avez un PC/Mac)

### Prérequis
- Télécharger **Android Studio** : https://developer.android.com/studio (gratuit)
- Installer sur Windows ou Mac

### Compilation
1. Ouvrez Android Studio
2. **File → Open** → choisissez `mobile/client/android/` (app client)
3. Attendez la synchronisation Gradle (quelques minutes)
4. **Build → Generate Signed Bundle/APK → Android App Bundle**
5. Créez un **keystore** (gardez-le précieusement !)
   - Alias : `appeluntaxi-client`
   - Mot de passe fort
6. Build → vous obtenez un fichier `.aab`
7. Répétez pour `mobile/chauffeur/android/`

---

## ÉTAPE 1 — Ajouter les icônes

1. Allez sur **https://appicon.co**
2. **App Client** : téléversez cette image :
   `https://assets.macaly-user-data.dev/t4Q7pZzri9NUw3_YFHOwy9dn/xl2pje5yqmqcmh6m4cfhu3gl/wapSUG-QqtmCAmdwY7hLw/generated-sdvXu8mO.jpeg`
3. **App Chauffeur** : téléversez cette image :
   `https://assets.macaly-user-data.dev/t4Q7pZzri9NUw3_YFHOwy9dn/xl2pje5yqmqcmh6m4cfhu3gl/6fD-ZzWDY-fZoKaf5_NyR/generated-peQBYvVI.jpeg`
4. Cochez iOS + Android, téléchargez
5. Copiez dans :
   - **Android** : `android/app/src/main/res/mipmap-*/`
   - **iOS** : `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

---

## ÉTAPE 2 — Soumettre sur Google Play

1. Créez un compte sur **play.google.com/console** (**25 USD une fois**)
2. **Créer une application** → AppelUnTaxi
3. Remplissez les fiches :
   - **Titre** : AppelUnTaxi — Taxi Rive Sud
   - **Description courte** : Réservez votre taxi sur la Rive Sud de Montréal
   - **Description longue** : Service de taxi professionnel couvrant Longueuil, Brossard, Chambly et la vallée du Richelieu. Réservation en ligne 24/7, tarification gouvernementale, suivi GPS en temps réel.
   - **Catégorie** : Voyages et navigation
4. Téléversez le `.aab` dans **Production**
5. Répétez pour l'app Chauffeur

---

## ÉTAPE 3 — Compiler l'app iOS

### Prérequis
- Un **Mac** est obligatoire
- Télécharger **Xcode** depuis l'App Store Mac (gratuit)
- Compte **Apple Developer** à `developer.apple.com` (**130$/an**)

### Ajouter les permissions iOS
1. Ouvrez `mobile/client/ios/App/App/Info.plist` dans Xcode
2. Ajoutez le contenu de `mobile/client/ios-info-plist-additions.xml`
3. Répétez pour `mobile/chauffeur/`

### Compilation
1. Ouvrez Xcode
2. **File → Open** → choisissez `mobile/client/ios/App.xcworkspace`
3. Sélectionnez votre équipe dans **Signing & Capabilities**
4. **Product → Archive**
5. **Distribute App → App Store Connect**
6. Répétez pour `mobile/chauffeur/ios/`

---

## ÉTAPE 4 — Soumettre sur l'App Store

1. Connectez-vous sur **appstoreconnect.apple.com**
2. **+ Nouvelle app** pour chaque app
3. Fiches à remplir :
   - **Nom** : AppelUnTaxi / AppelUnTaxi Chauffeur
   - **Sous-titre** : Taxi Rive Sud de Montréal
   - **Mots-clés** : taxi,rive sud,longueuil,brossard,chambly,transport
   - **Description** : (même texte que Google Play)
   - **Catégorie** : Navigation
4. Téléversez les captures d'écran (iPhone 6.5" requis)
5. Soumettez pour révision Apple (1-3 jours)

---

## Captures d'écran requises

Prenez des captures d'écran sur votre téléphone depuis :
- **Client** : `https://www.appeluntaxi.com/client`
- **Chauffeur** : `https://www.appeluntaxi.com/chauffeur`

Tailles requises :
- **iPhone** : 1290×2796 pixels (iPhone 15 Pro Max)
- **Android** : 1080×1920 minimum

---

## Mises à jour futures

La beauté de cette architecture : **toute mise à jour du site www.appeluntaxi.com s'applique automatiquement dans les apps** sans republier sur les stores ! Vous publiez une nouvelle version aux stores seulement si vous changez les permissions ou les configurations natives.

---

## Support

Pour toute question technique sur la compilation, consultez :
- Capacitor : https://capacitorjs.com/docs
- Google Play : https://support.google.com/googleplay/android-developer
- Apple : https://developer.apple.com/help/app-store-connect/
