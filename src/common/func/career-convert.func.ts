import { getCurDate } from './date-convert.func';

function getCareerRange(licenseGetYear?: number) {
  let startCareerYear = 0;
  let endCareerYear = 0;

  if (!licenseGetYear) {
    return { startCareerYear, endCareerYear };
  }

  const currentYear = getCurDate().getFullYear();
  const yearCount = currentYear + 1 - licenseGetYear;
  if (yearCount > 20) {
    const yearDiff = Math.floor(yearCount / 10) * 10 + 10 - yearCount;
    startCareerYear = licenseGetYear - yearDiff;
    endCareerYear = startCareerYear + 9;
  } else {
    if (yearCount >= 1 && yearCount <= 3) {
      endCareerYear = currentYear;
    } else if (yearCount >= 4 && yearCount <= 6) {
      endCareerYear = currentYear - 3;
    } else if (yearCount >= 7 && yearCount <= 9) {
      endCareerYear = currentYear - 6;
    } else if (yearCount >= 10 && yearCount <= 12) {
      endCareerYear = currentYear - 9;
    } else if (yearCount >= 13 && yearCount <= 15) {
      endCareerYear = currentYear - 12;
    } else if (yearCount >= 16 && yearCount <= 18) {
      endCareerYear = currentYear - 15;
    } else {
      endCareerYear = currentYear - 18;
      startCareerYear = endCareerYear - 1;
    }
    startCareerYear = endCareerYear ?? endCareerYear - 2;
  }

  return { startCareerYear, endCareerYear };
}

export { getCareerRange };
