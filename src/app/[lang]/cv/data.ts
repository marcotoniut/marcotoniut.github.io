// Month arg is 0-indexed: 0=Jan, 1=Feb, … 11=Dec
export const Meta = [
  {
    id: "vitvio",
    institution: "VitVio",
    dates: {
      start: new Date(2026, 0), // Jan 2026
    },
  },
  {
    id: "yld",
    institution: "YLD (Ledger)",
    dates: {
      start: new Date(2024, 4), // May 2024
      end: new Date(2025, 10), // Nov 2025
    },
  },
  {
    id: "abound",
    institution: "Abound (Render)",
    dates: {
      start: new Date(2022, 7), // Aug 2022
      end: new Date(2024, 2), // Mar 2024
    },
  },
  {
    id: "zelt",
    institution: "Zelt",
    dates: {
      start: new Date(2022, 3), // Apr 2022
      end: new Date(2022, 5), // Jun 2022
    },
  },
  {
    id: "prima",
    institution: "Prima Assicurazioni UK",
    dates: {
      start: new Date(2021, 0), // Jan 2021
      end: new Date(2022, 1), // Feb 2022
    },
  },
  {
    id: "moixa",
    institution: "Moixa Ltd.",
    dates: {
      start: new Date(2019, 5), // Jun 2019
      end: new Date(2020, 11), // Dec 2020
    },
  },
  {
    id: "freelancer-2016",
    dates: { start: new Date(2016, 0), end: new Date(2019, 4) }, // Jan 2016 – May 2019
  },
  {
    id: "propago",
    institution: "Propago AR",
    dates: { start: new Date(2014, 2), end: new Date(2015, 11) }, // Mar 2014 – Dec 2015
  },
  {
    id: "eventbrite",
    institution: "Eventbrite",
    dates: { start: new Date(2013, 4), end: new Date(2013, 10) }, // May 2013 – Nov 2013
  },
  {
    id: "freelancer-2010",
    dates: { start: new Date(2010, 0), end: new Date(2013, 4) }, // Jan 2010 – May 2013
  },
  {
    id: "estudio-minero",
    institution: "Estudio Minero",
    dates: { start: new Date(2008, 0), end: new Date(2010, 0) }, // Jan 2008 – Jan 2010
  },
] as const
