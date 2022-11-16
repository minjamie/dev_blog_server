function getEnumToArray(enumType) {
  return Object.keys(enumType)
    .filter((value) => isNaN(Number(value)) === false)
    .map((key) => `${key} : ${enumType[key]}`);
}

function getEnumTypeValues(enumType) {
  return Object.keys(enumType)
    .map((key) => enumType[key])
    .filter((value) => typeof value === 'number');
}

enum TEAM_TYPE {
  PLATFORM_DEV = 1,
}

enum LOGIN_ERROR_CODE {
  NOT_EXIST_ID,
  NOT_MATCH_AUTH_DATA,
  LOGIN_LOCK,
  LOGIN_UN_ACTIVE,
}

enum TOKEN_ERROR_CODE {
  NOT_EXIST_TOKEN,
  TOKEN_EXPIRED,
  NOT_VALID_TOKEN,
  NOT_ACCOUNT,
}

export {
  getEnumToArray,
  getEnumTypeValues,
  TEAM_TYPE,
  LOGIN_ERROR_CODE,
  TOKEN_ERROR_CODE,
};
