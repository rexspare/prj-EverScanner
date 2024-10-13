enum SCREENS {
  ONBOARDING = "ONBOARDING",
  APP = "APP",
  SCANNER = "SCANNER",
  GENERATE = "GENERATE",
  HISTORY = "HISTORY",
  SETTING = "SETTING",
  LANGUAGE = "LANGUAGE",
  GENERATE_CODE = "GENERATE_CODE",
  OPEN_FILE = "OPEN_FILE",
  QR_CODE = "QR_CODE",
  PRIVACY = "PRIVACY"
}

enum ALERT_TYPES {
  SUCCESS = 'success',
  WARNING = "error",
  DANGER = "error",
  INFO = "info"
}
enum ALERT_HEADER {
  SUCCESS = 'SUCCESS!',
  WARNING = "WARNING!",
  DANGER = "ERROR!",
  INFO = "INFO"
}

enum ASYNC_KEYS {
  HISTORY = "#HISTORY",
  SCANNED = "#SCANNDED",
  VIBRATE = "#VIBRATE",
  LANGUAGE = "#LANGUAGE",
  ONBOARDING = "#ONBOARDING",
}

enum QR_TYPE {
  TEXT = "TEXT",
  WEBSITE = "WEBSITE",
  WIFI = "WIFI",
  EMAIL = "EMAIL",
  WHATSAPP = "WHATSAPP",
  TWITTER = "TWITTER",
  INSTAGRAM = "INSTAGRAM",
  TELEPHONE = "TELEPHONE",
  LOCATION = "LOCATION",
  EVENT = "EVENT",
  CONTACT = "CONTACT",
  BUSINESS = "BUSINESS",
  SCANNED = "SCANNED"
}

export {
  SCREENS,
  ALERT_HEADER,
  ALERT_TYPES,
  ASYNC_KEYS,
  QR_TYPE
}