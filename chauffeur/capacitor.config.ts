import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.appeluntaxi.chauffeur',
  appName: 'AppelUnTaxi Chauffeur',
  // Pointe vers le site en production
  server: {
    url: 'https://www.appeluntaxi.com/chauffeur',
    cleartext: false,
    androidScheme: 'https',
  },
  // Dossier vide requis par Capacitor
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: '#1e3a8a',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#1e3a8a',
    },
    PushNotifications: {
      // Notifications de nouvelles courses
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#1e3a8a',
      sound: 'nouvelle_course.wav',
    },
    Geolocation: {
      // GPS continu pour la localisation du chauffeur
    },
  },
  android: {
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'appeluntaxi-chauffeur',
    },
    backgroundColor: '#1e3a8a',
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
    // Garder l'app active en arrière-plan pour recevoir les courses
    overrideUserAgent: 'AppelUnTaxiChauffeur/1.0',
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#1e3a8a',
    limitsNavigationsToAppBoundDomains: true,
    allowsLinkPreview: false,
    overrideUserAgent: 'AppelUnTaxiChauffeur/1.0',
  },
}

export default config
