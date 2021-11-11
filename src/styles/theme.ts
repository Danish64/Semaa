import { palette } from "./palette";
const defaultTheme = {
    color: {
        appBackground: palette.white,
        appPrimary: palette.primary,
        appSecondary: palette.secondary,
        appDanger: palette.red,
        appSuccess: palette.green,
        appCaution: palette.yellow,
    },
    spacing: {
        S: 8, 
        M: 12,
        L: 16,
        ...
    },
};
export const useTheme = () => defaultTheme