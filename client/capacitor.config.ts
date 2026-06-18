import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.appeluntaxi.client',
  appName: 'AppelUnTaxi',
  // Pointe vers le site en production
  server: {
    url: 'https://www.appeluntaxi.com/client',
    cleartext: false,
    androidScheme: 'https',
  },
  // Dossier vide requis par Capacitor
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 2500,
      launchAutoHide: true,
      backgroundColor: '#1e40af',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      splashFullScreen: true,
      splashImmersive: true,
    },
    StatusBar: {
      style: 'LIGHT',
      backgroundColor: '#1e40af',
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#1e40af',
      sound: 'taxi_arrive.wav',
    },
    Geolocation: {
      // Géolocalisation pour le client (adresse de départ automatique)
    },
  },
  android: {
    buildOptions: {
      keystorePath: 'release.keystore',
      keystoreAlias: 'appeluntaxi-client',
    },
    backgroundColor: '#1e40af',
    allowMixedContent: false,
    captureInput: true,
    webContentsDebuggingEnabled: false,
  },
  ios: {
    contentInset: 'automatic',
    backgroundColor: '#1e40af',
    limitsNavigationsToAppBoundDomains: true,
    allowsLinkPreview: false,
  },
}

export default config
