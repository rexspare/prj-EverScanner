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
    QR_CODE = "QR_CODE"
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
  

export {
    SCREENS,
    ALERT_HEADER,
    ALERT_TYPES
}