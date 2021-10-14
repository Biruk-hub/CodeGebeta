import { ScaledSheet } from 'react-native-size-matters';
import ColorSchema from "../../Constants/ColorSchema";

export default ScaledSheet.create(
    {
        wrapper: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center',
            height: '40@s',
            backgroundColor: ColorSchema.white,
            borderRadius: '5@s',
            borderColor: ColorSchema.primary,
            borderWidth: 0.5,
            paddingHorizontal: '10@s',
            marginVertical: '5@s',
        },
        textStyle: {
            overflow: 'hidden',
        },
        lessonText: {
            fontSize: '9@s',
            color: ColorSchema.grey,
        },
        lessonTitle: {
            color: ColorSchema.secondary,
        },
        iconSize: {

        },
    }
);