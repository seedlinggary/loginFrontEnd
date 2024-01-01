import * as React from "react";
import  { useState } from 'react';
import { Text, StyleSheet, View, Image,TextInput, TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Login = () => {
  const [responseValue, setResponseValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
    const handleLoginPress = async () => {
      try {
        // Make an API request here
        const response = await fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
          }),
        });
  
        // Handle the response
        const data = await response.json();
        console.log('API response:', data);
        setResponseValue(data)
  
      } catch (error) {
        console.error('API request failed:', error);
      }
    };
    
  const handlePasswordChange = (text: string) => {
    setPasswordValue(text);
  };

  const handleEmailChange = (text: string) => {
    setEmailValue(text);
  };
  return (
    <View style={styles.login}>
      <View style={styles.form}>
        <View style={[styles.form1, styles.form1Border]}>
          <View style={[styles.form2, styles.form2Position]}>
            <View style={[styles.title, styles.labelFlexBox]}>
              <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>

            </View>
            <View style={[styles.inputs, styles.inputsSpaceBlock]}>
              <View style={styles.email}>
                <View style={[styles.inputContent, styles.form2Position]}>
                  <View style={[styles.icontext, styles.icontextPosition]}>
                    <Image style={styles.iconSmall1} resizeMode="cover" />
                    <Image
                      style={[styles.icon1, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/icon.png")}
                    />
                    <TextInput style={[styles.placeholder, styles.orTypo]}
                     placeholder="Email"
                     value={emailValue}
                     onChangeText={handleEmailChange}
                    />

                  </View>
                </View>
              </View>
              <View style={styles.password}>
                <View style={[styles.inputContent, styles.form2Position]}>
                  {/* <Image
                    style={[styles.viewIcon1, styles.iconLayout1]}
                    resizeMode="cover"
                    source={require("../assets/view.png")}
                  /> */}
                  <View style={[styles.icontext, styles.icontextPosition]}>
                    <Image
                      style={[styles.lockIcon1, styles.iconLayout1]}
                      resizeMode="cover"
                      source={require("../assets/lock.png")}
                    />
                      <TextInput
              style={[styles.placeholder, styles.orTypo, {borderWidth: 0}]}
              placeholder="Password"
              secureTextEntry={true}
              value={passwordValue}
              onChangeText={handlePasswordChange}
              // borderBottomColor="transparent"
            />
                  </View>
                </View>
              </View>
              <Text style={[styles.forgotPassword, styles.logInTypo]}>
                Forgot password?
              </Text>
            </View>
            <View style={[styles.buttons, styles.inputsSpaceBlock]}>
              <View style={styles.buttonsStack}>
                <View style={styles.frameParent}>
                  <View style={styles.frameGroup}>
                    <TouchableOpacity onPress={handleLoginPress}>
                    <View
                      style={[styles.jntButtonWrapper, styles.labelFlexBox]}
                      
                    >
                      <View style={styles.jntButton}>
                        <View style={[styles.button, styles.buttonFlexBox,
                           responseValue== 'Log In Failed'  && {backgroundColor: 'red'},
                           responseValue== 'Logged In'  && {backgroundColor: 'green'}]}>
                          <View style={[styles.content, styles.labelFlexBox]}>
                            <Image
                              style={[styles.warningIcon10, styles.iconLayout1]}
                              resizeMode="cover"
                            />
                            <Text style={[styles.label, styles.labelClr]}>
                              Log in
                            </Text>
                            <View style={styles.bage}>
                              <Image
                                style={styles.arrowTopIcon4}
                                resizeMode="cover"
                              />
                              <View
                                style={[styles.labelBody, styles.labelFlexBox]}
                              >
                                <Image
                                  style={styles.arrowLeftIcon4}
                                  resizeMode="cover"
                                />
                                <View
                                  style={[
                                    styles.labelTextIcon4,
                                    styles.labelFlexBox,
                                  ]}
                                >
                                  <Image
                                    style={styles.iconSmall1}
                                    resizeMode="cover"
                                  />
                                  <View style={styles.textspacer}>
                                    <Text style={styles.label1}>44</Text>
                                    <View style={styles.spacer2px4} />
                                  </View>
                                </View>
                                <Image
                                  style={styles.arrowLeftIcon4}
                                  resizeMode="cover"
                                />
                              </View>
                              <Image
                                style={styles.arrowTopIcon4}
                                resizeMode="cover"
                              />
                            </View>
                            <Image
                              style={[styles.warningIcon12, styles.iconLayout1]}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                      </TouchableOpacity>
                    <View
                      style={[styles.rectangleParent, styles.parentSpaceBlock]}
                    >
                      <View style={styles.frameLayout} />
                      <Text style={[styles.or, styles.orTypo]}> Or</Text>
                      <View style={[styles.frameItem, styles.frameLayout]} />
                    </View>
                    <View
                      style={[styles.buttonParent, styles.parentSpaceBlock]}
                    >
                      <View style={styles.jntButton}>
                      <TouchableOpacity >
                        <View style={[styles.button2, styles.buttonFlexBox]}>
                          <View style={[styles.content, styles.labelFlexBox]}>
                            <Image
                              style={[styles.googleIcon1, styles.iconLayout1]}
                              resizeMode="cover"
                              source={require("../assets/google.png")}
                            />
                            <Text style={styles.label2}>Google</Text>
                            <View style={styles.bage}>
                              <Image
                                style={styles.arrowTopIcon4}
                                resizeMode="cover"
                              />
                              <View
                                style={[styles.labelBody, styles.labelFlexBox]}
                              >
                                <Image
                                  style={styles.arrowLeftIcon4}
                                  resizeMode="cover"
                                />
                                <View
                                  style={[
                                    styles.labelTextIcon4,
                                    styles.labelFlexBox,
                                  ]}
                                >
                                  <Image
                                    style={styles.iconSmall1}
                                    resizeMode="cover"
                                  />
                                  <View style={styles.textspacer}>
                                    <Text style={styles.label1}>44</Text>
                                    <View style={styles.spacer2px4} />
                                  </View>
                                </View>
                                <Image
                                  style={styles.arrowLeftIcon4}
                                  resizeMode="cover"
                                />
                              </View>
                              <Image
                                style={styles.arrowTopIcon4}
                                resizeMode="cover"
                              />
                            </View>
                            <Image
                              style={[styles.warningIcon12, styles.iconLayout1]}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      </View>
                      <View style={styles.button3}>
                      <TouchableOpacity >
                        <View style={[styles.button2, styles.buttonFlexBox]}>
                          <View style={[styles.content, styles.labelFlexBox]}>
                            <Image
                              style={[styles.googleIcon1, styles.iconLayout1]}
                              resizeMode="cover"
                              source={require("../assets/social-icon.png")}
                            />
                            <Text style={styles.label2}>Facebook</Text>
                            <View style={styles.bage}>
                              <Image
                                style={styles.arrowTopIcon4}
                                resizeMode="cover"
                              />
                              <View
                                style={[styles.labelBody, styles.labelFlexBox]}
                              >
                                <Image
                                  style={styles.arrowLeftIcon4}
                                  resizeMode="cover"
                                />
                                <View
                                  style={[
                                    styles.labelTextIcon4,
                                    styles.labelFlexBox,
                                  ]}
                                >
                                  <Image
                                    style={styles.iconSmall1}
                                    resizeMode="cover"
                                  />
                                  <View style={styles.textspacer}>
                                    <Text style={styles.label1}>44</Text>
                                    <View style={styles.spacer2px4} />
                                  </View>
                                </View>
                                <Image
                                  style={styles.arrowLeftIcon4}
                                  resizeMode="cover"
                                />
                              </View>
                              <Image
                                style={styles.arrowTopIcon4}
                                resizeMode="cover"
                              />
                            </View>
                            <Image
                              style={[styles.warningIcon12, styles.iconLayout1]}
                              resizeMode="cover"
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={styles.haveNoAccountYetParent}>
                    <Text style={[styles.haveNoAccount1, styles.logInTypo]}>
                      Have no account yet?
                    </Text>
                    <View style={styles.button5}>
                    <TouchableOpacity >
                      <View style={[styles.button2, styles.buttonFlexBox]}>
                        <View style={[styles.content, styles.labelFlexBox]}>
                          <Image
                            style={[styles.warningIcon10, styles.iconLayout1]}
                            resizeMode="cover"
                          />
                          <Text style={styles.label2}>Register</Text>
                          <View style={styles.bage}>
                            <Image
                              style={styles.arrowTopIcon4}
                              resizeMode="cover"
                            />
                            <View
                              style={[styles.labelBody, styles.labelFlexBox]}
                            >
                              <Image
                                style={styles.arrowLeftIcon4}
                                resizeMode="cover"
                              />
                              <View
                                style={[
                                  styles.labelTextIcon4,
                                  styles.labelFlexBox,
                                ]}
                              >
                                <Image
                                  style={styles.iconSmall1}
                                  resizeMode="cover"
                                />
                                <View style={styles.textspacer}>
                                  <Text style={styles.label1}>44</Text>
                                  <View style={styles.spacer2px4} />
                                </View>
                              </View>
                              <Image
                                style={styles.arrowLeftIcon4}
                                resizeMode="cover"
                              />
                            </View>
                            <Image
                              style={styles.arrowTopIcon4}
                              resizeMode="cover"
                            />
                          </View>
                          <Image
                            style={[styles.warningIcon12, styles.iconLayout1]}
                            resizeMode="cover"
                          />
                        </View>
                      </View>
                        </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.backColor1, styles.form1Position]} />
        <View style={styles.illustration}>
          <Image
            style={[styles.backIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/back.png")}
          />
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/15.png")}
          />
        </View>
        <Text style={[styles.justACouple1, styles.labelClr]}>
          just a couple of clicks and we start
        </Text>
        <Text style={[styles.welcomeAboardMy1, styles.labelClr]}>
          Welcome aboard my friend
        </Text>
      </View>
      <Image
        style={[styles.logoIcon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form1Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  form2Position: {
    top: 0,
    position: "absolute",
  },
  labelFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  logInTypo: {
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
  },
  inputsSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  icontextPosition: {
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  iconLayout1: {
    width: 24,
    height: 24,
  },
  orTypo: {
    color: Color.textJntPrimaryTextLightColor,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.primaryText_size,
    textAlign: "left",
  },
  buttonFlexBox: {
    paddingVertical: 0,
    borderRadius: Border.br_21xl,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  labelClr: {
    color: Color.backgroundJntPrimaryBackground,
    textAlign: "center",
  },
  parentSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  frameLayout: {
    height: 1,
    backgroundColor: Color.schemasJntSecondaryDarkColorOLD,
    flex: 1,
  },
  form1Position: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logIn: {
    fontSize: 20,
    color: Color.schemasJntPrimaryColor,
  },
  title: {
    paddingBottom: Padding.p_13xl,
    justifyContent: "center",
  },
  iconSmall1: {
    width: 16,
    height: 16,
    display: "none",
  },
  icon1: {
    marginLeft: 8,
    height: 24,
  },
  placeholder: {
    marginLeft: 8,
  },
  icontext: {
    left: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContent: {
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    borderStyle: "solid",
  },
  email: {
    height: 40,
    alignSelf: "stretch",
  },
  viewIcon1: {
    right: 8,
    height: 24,
    marginTop: -12,
    top: "50%",
    position: "absolute",
  },
  lockIcon1: {
    height: 24,
  },
  password: {
    marginTop: 16,
    height: 40,
    alignSelf: "stretch",
  },
  forgotPassword: {
    marginTop: 16,
    fontSize: FontSize.primaryText_size,
    color: Color.schemasJntPrimaryColor,
  },
  inputs: {
    alignItems: "flex-end",
    overflow: "hidden",
  },
  warningIcon10: {
    height: 24,
    display: "none",
  },
  label: {
    textAlign: "center",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.primaryText_size,
    marginLeft: 8,
  },
  arrowTopIcon4: {
    width: 11,
    height: 5,
    borderRadius: Border.br_9xs,
    display: "none",
  },
  arrowLeftIcon4: {
    width: 5,
    height: 11,
    borderRadius: Border.br_9xs,
    display: "none",
  },
  label1: {
    fontSize: FontSize.small_size,
    textAlign: "center",
    fontFamily: FontFamily.latoRegular,
    color: Color.schemasJntPrimaryColor,
  },
  spacer2px4: {
    height: 2,
    alignSelf: "stretch",
  },
  textspacer: {
    marginLeft: 4,
    alignItems: "center",
  },
  labelTextIcon4: {
    padding: Padding.p_9xs,
    borderRadius: Border.br_9xs,
    height: 24,
    backgroundColor: Color.backgroundJntPrimaryBackground,
  },
  labelBody: {
    height: 24,
    overflow: "hidden",
  },
  bage: {
    borderRadius: Border.br_9xs,
    marginLeft: 8,
    display: "none",
    alignItems: "center",
    overflow: "hidden",
  },
  warningIcon12: {
    marginLeft: 8,
    height: 24,
    display: "none",
  },
  content: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_2xs,
    height: 40,
  },
  button: {
    paddingHorizontal: 96,
    backgroundColor: Color.schemasJntPrimaryColor,
  },
  jntButton: {
    flex: 1,
  },
  jntButtonWrapper: {
    opacity: 0.5,
    alignSelf: "stretch",
  },
  or: {
    marginLeft: 4,
  },
  frameItem: {
    marginLeft: 4,
  },
  rectangleParent: {
    width: 215,
    justifyContent: "center",
    alignItems: "center",
  },
  googleIcon1: {
    height: 24,
    overflow: "hidden",
  },
  label2: {
    textAlign: "center",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.primaryText_size,
    marginLeft: 8,
    color: Color.schemasJntPrimaryColor,
  },
  button2: {
    borderColor: Color.schemasJntPrimaryColor,
    paddingHorizontal: Padding.p_5xl,
    borderWidth: 1,
    borderStyle: "solid",
  },
  button3: {
    marginLeft: 8,
    flex: 1,
  },
  buttonParent: {
    alignSelf: "stretch",
  },
  frameGroup: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  haveNoAccount1: {
    color: "#7b7b7b",
    fontSize: FontSize.primaryText_size,
  },
  button5: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  haveNoAccountYetParent: {
    marginTop: 24,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  buttonsStack: {
    overflow: "hidden",
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  form2: {
    left: 732,
    borderTopRightRadius: Border.br_5xl,
    borderBottomRightRadius: Border.br_5xl,
    width: 486,
    paddingHorizontal: 64,
    paddingVertical: Padding.p_13xl,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.backgroundJntPrimaryBackground,
    height: 743,
  },
  form1: {
    borderRadius: Border.br_5xl,
    borderColor: Color.schemasJntSecondaryDarkColorOLD,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  backColor1: {
    width: "60.1%",
    right: "39.9%",
    borderTopLeftRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    backgroundColor: Color.schemasJntPrimaryColor,
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  backIcon: {
    height: "77.82%",
    width: "77.82%",
    top: "5.63%",
    right: "15.32%",
    bottom: "16.55%",
    left: "6.87%",
    opacity: 0.6,
  },
  icon2: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  illustration: {
    height: "48.05%",
    width: "29.31%",
    top: "18.51%",
    right: "53.78%",
    bottom: "33.45%",
    left: "16.91%",
    position: "absolute",
  },
  justACouple1: {
    top: "69.18%",
    left: "22.09%",
    lineHeight: 28,
    textAlign: "center",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.primaryText_size,
    position: "absolute",
  },
  welcomeAboardMy1: {
    top: "63.26%",
    left: "18.97%",
    fontSize: 24,
    lineHeight: 48,
    textAlign: "center",
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    color: Color.backgroundJntPrimaryBackground,
    position: "absolute",
  },
  form: {
    marginTop: -372,
    marginLeft: -609,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 1218,
    height: 743,
    top: "50%",
    position: "absolute",
  },
  logoIcon1: {
    height: "4.54%",
    width: "2.56%",
    top: "20.19%",
    right: "76.55%",
    bottom: "75.28%",
    left: "20.89%",
  },
  login: {
    backgroundColor: "#5769d4",
    height: 1080,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Login;
