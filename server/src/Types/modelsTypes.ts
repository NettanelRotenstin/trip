import { constSchema } from "../Models/constModel";
import { daySchema } from "../Models/dayModel";
import { settingsSchema } from "../Models/settingsModel";

export type Const = ReturnType<() => typeof constSchema>

export type Day = ReturnType<()=> typeof daySchema>

export type Setting = ReturnType<()=> typeof settingsSchema>