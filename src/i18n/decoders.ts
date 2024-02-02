import * as DIO from "io-ts/Decoder";
import { locales } from "./i18n-util";
import { Locales } from "./i18n-types";

export const LOCALES = ["en", "es"] as const;

type LOCALES = (typeof LOCALES)[number];

export const DIO_Locale: DIO.Decoder<
  unknown,
  Locales extends LOCALES ? Locales : never
> = DIO.literal(...LOCALES);
