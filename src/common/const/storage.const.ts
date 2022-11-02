export const STORAGE_INFO = {
  CONTAINER: {
    COMMENT: 'comment',
    COMPANY: 'company',
    CONSULTING: 'consulting',
    EDETAILING: 'edetailing',
    EVENT: 'event',
    MANAGER: 'manager',
    NOTIFICATION: 'notification',
    USER: 'user',
    WEBINAR: 'webinar',
    TEMP: 'temp',
  },
  DIR: {
    COMMENT: {
      CONTENT: 'content',
    },
    COMPANY: {
      BANNER: 'banner',
      THUMBNAIL: 'thumbnail',
    },
    CONSULTING: {
      QUESTION: 'question',
    },
    EDETAILING: {
      THUMBNAIL: 'thumbnail',
      CONTENT: 'content',
    },
    EVENT: {
      BANNER: 'banner',
      THUMBNAIL: 'thumbnail',
      CONTENT: 'content',
    },
    MANAGER: {
      PROFILE: 'profile',
    },
    NOTIFICATION: {
      NOTI: 'noti',
    },
    USER: {
      HOSPITAL: 'hospital',
      DOCTOR: 'doctor',
      STUDENT: 'student',
    },
    WEBINAR: {
      SPEAKER: 'speaker',
      WEBINARINFO: 'webinarinfo',
    },
  },
} as const;
