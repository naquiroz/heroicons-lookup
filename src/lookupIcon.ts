import { lookup as solidLookup } from "~/solidIcons"
import { lookup as outlineLookup } from "~/outlineIcons"
import { lookup as miniLookup } from "~/miniIcons"
import { HeroIcon, IconFormat, PossibleIcons, PossibleIconsArray } from "./types"

/**
 * Lookup an icon by its name. Useful when you want to import dynamically an icon, from a database, for instance.
 * @param iconName The name of the possible icon you wish to import dynamically. If the name does not exist, it will throw an error.
 * @param format The format of the icon you wish to import.
 * @returns A hero icon react component that you can render.
 */
export const lookupIcon = (iconName: PossibleIcons, format: IconFormat = "solid"): HeroIcon => {
  if (!PossibleIconsArray.includes(iconName)) {
    throw Error(
      `The icon name '${iconName}' you provided does not exist in the library. Please check the name and try again.`
    )
  }
  if (format === "solid") {
    return solidLookup[iconName]
  } else if(format =="mini") {
    return miniLookup[iconName]
  }
  return outlineLookup[iconName]
}
