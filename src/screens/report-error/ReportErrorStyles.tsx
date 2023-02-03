import deepmerge from 'deepmerge';
import { StyleSheet } from 'react-native';
import ResponsiveStylesSheet from 'react-native-responsive-stylesheet';
import { ScaledSheet } from 'react-native-size-matters';

import Utils from '../../utils/Utils';

export default function computeStyleSheet(): StyleSheet.NamedStyles<any> {
  const commonColor = Utils.getCurrentCommonColor();
  const commonStyles = ScaledSheet.create({
    container: {
      height: '100%',
      backgroundColor: commonColor.containerBgColor,
      paddingBottom: '15@s'
    },
    scrollView: {
      width: '100%',
      flex: 1
    },
    scrollViewContentContainer: {
      flexGrow: 1,
      width: '100%',
      alignItems: 'center',
      paddingVertical: '5@s'
    },
    headerContainer: {
      marginBottom: '10@s'
    },
    spinner: {
      flex: 1,
      justifyContent: 'center',
      color: commonColor.textColor
    },
    iconContainer: {
      flex: 1,
      marginTop: '15@s',
      alignItems: 'center'
    },
    reportErrorIcon: {
      color: commonColor.danger
    },
    formContainer: {
      flex: 3,
      alignItems: 'center',
      padding: '10@s'
    },
    buttonContainer: {
      flex: 1,
      width: '94%'
    },
    input: {
      height: '40@s',
      width: '94%',
      marginTop: '15@s',
      paddingLeft: '10@s',
      paddingRight: '10@s',
      borderWidth: 0.6,
      borderColor: commonColor.textColor
    },
    descriptionInput: {
      width: '94%',
      alignItems: 'flex-start',
      height: '210@s',
      paddingLeft: '10@s',
      marginLeft: '10@s',
      marginRight: '10@s',
      marginTop: '15@s',
      borderWidth: 0.6,
      borderColor: commonColor.textColor
    },
    inputText: {
      flex: 1,
      fontSize: '15@s',
      color: commonColor.textColor
    },
    descriptionText: {
      paddingTop: '12@s',
      fontSize: '15@s',
      color: commonColor.textColor
    },
    sendButton: {
      marginTop: '15@s',
      backgroundColor: commonColor.danger
    },
    sendTextButton: {
      color: 'white',
      textAlign: 'center',
      fontSize: '16@s'
    },
    errorMobileText: {
      fontSize: '12@s',
      marginLeft: '20@s',
      color: commonColor.danger,
      alignSelf: 'flex-start'
    },
    errorSubjectText: {
      fontSize: '12@s',
      marginLeft: '20@s',
      color: commonColor.danger,
      alignSelf: 'flex-start'
    },
    errorDescriptionText: {
      fontSize: '12@s',
      marginLeft: '20@s',
      color: commonColor.danger,
      alignSelf: 'flex-start'
    },
    clearButton: {
      width: '90%',
      marginVertical: '5@s'
    },
    clearButtonText: {
      fontSize: '12@s',
      color: commonColor.primary,
      width: '100%',
      textAlign: 'right',
      padding: '5@s'
    }
  });
  const portraitStyles = {};
  const landscapeStyles = {
    input: {
      width: '80%'
    },
    descriptionInput: {
      width: '80%'
    },
    buttonContainer: {
      width: '80%'
    }
  };
  return ResponsiveStylesSheet.createOriented({
    landscape: deepmerge(commonStyles, landscapeStyles) as StyleSheet.NamedStyles<any>,
    portrait: deepmerge(commonStyles, portraitStyles) as StyleSheet.NamedStyles<any>
  });
}
