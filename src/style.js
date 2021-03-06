// @flow
/**
 * Created by budde on 27/02/2017.
 */
import { StyleSheet, Platform } from 'react-native'

const isIos = Platform.OS === 'ios'
export const constants = {
  colorRed: '#e55564',
  colorYellow: '#E5954C',
  appBackgroundColor: '#66d3d3',
  defaultTextColor: '#03414C',
  statusBarHeight: isIos ? 20 : 0,
  inputHeight: 45,
  inputMaxWidth: 300,
  darkTheme: '#1b8889',
  fieldFontFamily: isIos ? 'AvenirNextCondensed-Regular' : 'sans-serif-condensed'
}

export const fancyButton = StyleSheet.create({
  buttonView: {
    borderRadius: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: constants.inputHeight
  },
  enabledView: {
    backgroundColor: '#28aaba'
  },
  disabledView: {
    backgroundColor: '#d1d1d1'
  }
})

export const fancyFacebookButton = StyleSheet.create({
  button: {
    backgroundColor: '#0F6084'
  }
})

export const fancyGoogleButton = StyleSheet.create({
  button: {
    backgroundColor: '#7D1919'
  }
})

export const fancyImageTextButton = StyleSheet.create({
  button: {
    backgroundColor: '#7d3362'
  },
  view: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  image: {
    height: 20,
    width: 20,
    margin: 10,
    marginRight: 15,
    marginLeft: 15
  },
  text: {
    fontSize: 12,
    fontFamily: constants.fieldFontFamily,
    color: '#fff'
  },
  enabled: {
    color: '#fff'
  },
  disabled: {
    color: '#e2e2e2'
  }
})

export const fancyImageButton = StyleSheet.create({
  button: {
    backgroundColor: '#7d3362'
  },
  view: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 20,
    width: 20,
    margin: 10,
    marginRight: 15,
    marginLeft: 15
  },
  enabled: {
    color: '#fff'
  },
  disabled: {
    color: '#e2e2e2'
  }
})

export const fancyTextButton = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 12,
    fontFamily: constants.fieldFontFamily
  },
  enabled: {
    color: '#fff'
  },
  disabled: {
    color: '#e2e2e2'
  }
})

export const fancyTextInput = StyleSheet.create({
  label: {
    height: 20,
    color: constants.defaultTextColor
  },
  textInput: {
    height: constants.inputHeight,
    borderRadius: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 12,
    borderWidth: isIos ? 1 : 0,
    borderColor: constants.darkTheme
  },
  container: {
    alignSelf: 'stretch'
  }
})

export const app = StyleSheet.create({
  mainContainer: {
    backgroundColor: constants.appBackgroundColor,
    flex: 1
  }
})

export const authWebView = StyleSheet.create({
  webView: {
    backgroundColor: constants.appBackgroundColor
  },
  view: {
    flex: 1
  },
  button: {
    backgroundColor: constants.colorRed
  }
})

const navBarContainer = {
  backgroundColor: constants.colorRed,
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  paddingLeft: 20,
  paddingRight: 20,
  flexDirection: 'row',
  minWidth: 40
}

const navBarTitle = {
  fontSize: 20,
  color: '#fff'
}

const navBar = {
  backgroundColor: constants.colorRed
}

export const loggedInApp = StyleSheet.create({
  mainContainer: {
    backgroundColor: constants.appBackgroundColor,
    flex: 1
  },
  navBar,
  navBarContainer,
  navBarTitle,
  navBarIcon: {
    width: 20,
    height: 20,
    marginLeft: 20
  },
  content: {
    borderWidth: 1
  },
  activityIndicator: {
    flex: 1
  }
})

export const loader = StyleSheet.create({
  activityIndicator: {
    flex: 1
  }
})

export const offline = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smiley: {
    height: 210,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  smileyImage: {
    height: 150,
    resizeMode: 'contain'
  },
  offlineView: {
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20
  },
  message: {
    fontSize: 12,
    padding: 10
  }
})

export const login = StyleSheet.create({
  divider: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  dividerText: {
    fontWeight: 'bold',
    color: constants.defaultTextColor
  },
  header: {
    alignItems: 'center',
    paddingBottom: 5
  },
  headerText: {
    color: constants.defaultTextColor,
    fontSize: 20
  },
  optionsView: {
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingBottom: 50
  },
  optionView: {
    width: constants.inputMaxWidth,
    paddingBottom: 15
  },
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  logoView: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    height: 100,
    resizeMode: 'contain'
  },
  emailFormContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 30,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  input: {
    paddingBottom: 15,
    width: constants.inputMaxWidth
  },
  buttonInput: {
    paddingBottom: 5,
    paddingTop: 10,
    width: constants.inputMaxWidth
  },
  infoContainer: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 50,
    backgroundColor: constants.colorYellow
  },
  infoTitleText: {
    fontWeight: 'bold'
  },
  infoTopView: {
    flexDirection: 'row'
  },
  infoText: {
    color: '#fff',
    fontSize: 10
  },
  infoLinkText: {
    fontStyle: 'italic'
  },
  hintText: {
    fontSize: 12,
    color: '#fff',
    padding: 10
  },
  authFailedView: {
    backgroundColor: constants.colorRed,
    marginBottom: 30,
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  authFailedImage: {
    width: 15,
    height: 15,
    marginRight: 10
  },
  authFailedText: {
    fontSize: 12,
    color: '#fff',
    marginRight: 25
  }
})

export const loginApp = StyleSheet.create({
  mainContainer: {
    backgroundColor: constants.appBackgroundColor,
    flex: 1
  },
  navBar,
  navBarContainer,
  navBarTitle,
  navBarBack: {
    color: '#fff',
    fontSize: 16
  },
  webViewView: {
    flex: 1
  },
  webView: {
    backgroundColor: constants.appBackgroundColor
  },
  cancelView: {
    flex: 1
  },
  cancelButton: {
    backgroundColor: constants.colorRed
  }
})

export const qrCodeScanner = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    textAlign: 'center',
    maxWidth: 200,
    paddingBottom: 20,
    paddingTop: 20
  },
  image: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 200,
    maxHeight: 200
  }
})

export const qrCodeScannerCamera = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  camera: {
    flex: 1,
    alignSelf: 'stretch'
  }
})

export const settings = StyleSheet.create({
  container: {
    backgroundColor: '#66d3d3',
    flex: 1,
    flexDirection: 'column'
  },
  userView: {
    flex: 1,
    backgroundColor: '#44B7B4',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40
  },
  userImage: {
    marginLeft: 30,
    marginBottom: 10,
    marginRight: 30,
    borderRadius: 50,
    width: 100,
    height: 100
  },
  userNameView: {
    paddingTop: 5
  },
  userName: {
    color: constants.defaultTextColor,
    fontSize: 15
  },
  settingsView: {
    flex: 1,
    padding: 10
  },
  laundryView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  settingsHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    color: constants.defaultTextColor,
    fontSize: 20,
    padding: 5
  },
  settingsHeaderView: {},
  settingsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  settingsText: {
    color: constants.defaultTextColor,
    fontSize: 12
  },
  logOut: {
    padding: 20
  },
  textButton: {
    backgroundColor: constants.colorRed
  }
})

export const timetableTable = StyleSheet.create({
  container: {
    flex: 1
  },
  shadowIndicator: {
    position: 'absolute',
    left: 10,
    right: 10,
    top: 0,
    backgroundColor: 'rgba(44,76,75,0.4)'
  },
  indicator: {
    position: 'absolute',
    left: 10,
    right: 10,
    height: 2,
    backgroundColor: '#E54545'
  },
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  },
  cell: {
    flex: 1
  },
  createdCell: {
    backgroundColor: '#3aa07c'
  },
  deletedCell: {
    backgroundColor: '#3aa07c'
  },
  cellBg: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: constants.appBackgroundColor,
    backgroundColor: '#4DC4C1'
  },
  cellContainer: {
    flex: 1
  },
  unavailableCell: {
    backgroundColor: '#70d4d1'
  },
  bookedCell: {
    position: 'absolute',
    top: -1,
    bottom: -1,
    left: 0,
    right: 0,
    borderWidth: 0,
    backgroundColor: '#a04444'
  },
  myBookedCell: {
    backgroundColor: '#49a044'
  },
  marker: {
    width: 20,
    top: 41,
    height: 20,
    position: 'absolute',
    backgroundColor: constants.darkTheme,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3
  },
  markerText: {
    fontSize: 10,
    color: '#ffffff'
  }
})

export const timetable = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    flex: 1
  },
  dateView: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  arrowHeader: {
    height: 20,
    width: 20
  },
  arrowHeaderDisabled: {
    opacity: 0.1
  },
  dateHeader: {
    fontSize: 20,
    textAlign: 'center'
  },
  dateHeaderImage: {
    height: 15,
    width: 15,
    marginRight: 7
  },
  dateHeaderTouch: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  dateNavigator: {
    padding: 15,
    alignItems: 'center'
  },
  titleContainer: {
    height: 50
  },
  tableContainer: {
    alignSelf: 'stretch',
    flex: 1
  },
  headerText: {
    color: '#ffffff',
    fontSize: 12
  },
  headerRow: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10
  },
  headerCell: {
    backgroundColor: '#44B7B4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30
  },
  noMachinesView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noMachinesHeader: {
    fontSize: 20
  }
})

export const bookingList = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    borderTopWidth: 1,
    borderColor: constants.appBackgroundColor,
    backgroundColor: '#4DC4C1'
  },
  rowDeleted: {
    opacity: 0.2
  },
  time: {
    flexDirection: 'column',
    width: 50,
    borderRightWidth: 1,
    borderColor: constants.appBackgroundColor,
    backgroundColor: constants.colorYellow,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timeText: {
    color: '#ffffff'
  },
  machine: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10
  },
  headerRow: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30
  },
  headerText: {
    fontSize: 20
  },
  noBookingsView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activityIndicator: {
    flex: 1
  },
  scroll: {
    paddingTop: 10,
    paddingBottom: 20
  }
})

export const modal = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.5)'
  },
  window: {
    flex: 1,
    margin: 15,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  title: {
    alignItems: 'center'
  },
  titleText: {
    color: constants.defaultTextColor
  },
  buttonContainer: {
    marginTop: 20
  },
  button: {
    marginTop: 10
  },
  redButton: {
    backgroundColor: constants.colorRed
  }
})
