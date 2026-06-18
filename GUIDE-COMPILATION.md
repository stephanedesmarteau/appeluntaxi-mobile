# Guide de Compilation et Soumission aux Stores
## AppelUnTaxi — Apps Mobile

---

## Ce que vous avez dans ce dossier

```
mobile/
├── client/          ← App pour les clients
│   ├── android/     ← Projet Android (ouvrir dans Android Studio)
│   ├── ios/         ← Projet iOS (ouvrir dans Xcode)
│   └── ...
└── chauffeur/       ← App pour les chauffeurs
    ├── android/     ← Projet Android
    ├── ios/         ← Projet iOS
    └── ...
```

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

## ÉTAPE 2 — Compiler l'app Android

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

## ÉTAPE 4 — Soumettre sur Google Play

1. Créez un compte sur **play.google.com/console** (**30$ une fois**)
2. **Créer une application** → AppelUnTaxi
3. Remplissez les fiches :
   - **Titre** : AppelUnTaxi — Taxi Rive Sud
   - **Description courte** : Réservez votre taxi sur la Rive Sud de Montréal
   - **Description longue** : Service de taxi professionnel couvrant Longueuil, Brossard, Chambly et la vallée du Richelieu. Réservation en ligne 24/7, tarification gouvernementale, suivi GPS en temps réel.
   - **Catégorie** : Voyages et navigation
4. Téléversez le `.aab` dans **Production**
5. Répétez pour l'app Chauffeur

---

## ÉTAPE 5 — Soumettre sur l'App Store

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
