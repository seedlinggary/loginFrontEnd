import * as React from "react";
import  { useState } from 'react';

import { Text, StyleSheet, Image, View,TextInput, TouchableOpacity } from "react-native";
import { FontSize, Border, FontFamily, Color, Padding } from "../GlobalStyles";

const IPhone1415Pro1 = () => {
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
    const handleLoginPress = async () => {
      console.log({
        email: emailValue,
        password: passwordValue, 
      })
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
  
        // Add your logic to handle the API response here
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
    <View style={styles.iphone1415Pro1}>
      <Text style={styles.logIn}>Log in</Text>
      <View style={[styles.inputs, styles.inputsPosition]}>
        <View style={styles.email}>
          <View style={[styles.inputContent, styles.button2Border]}>
            <View style={[styles.icontext, styles.parentFlexBox]}>
              <Image style={styles.iconSmall1} resizeMode="cover" />
              <Image
                style={[styles.icon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/icon.png")}
              />
                                  <TextInput style={[styles.placeholder, styles.orTypo]}
                     placeholder="Email"
                     value={emailValue}
                     onChangeText={handleEmailChange}
                    />
              {/* <Text style={[styles.placeholder, styles.orTypo]}>Email</Text> */}
            </View>
          </View>
        </View>
        <View style={styles.password}>
          <View style={[styles.inputContent, styles.button2Border]}>
            <Image
              style={[styles.viewIcon1, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/view.png")}
            />
            <View style={[styles.icontext, styles.parentFlexBox]}>
              <Image
                style={[styles.lockIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/lock.png")}
              />
                                    <TextInput
              style={[styles.placeholder, styles.orTypo]}
              placeholder="Password"
              secureTextEntry={true}
              value={passwordValue}
              onChangeText={handlePasswordChange}
            />
              {/* <Text style={[styles.placeholder, styles.orTypo]}>Password</Text> */}
            </View>
          </View>
        </View>
        <Text style={[styles.forgotPassword, styles.orTypo]}>
          Forgot password?
        </Text>
      </View>
      <View style={[styles.buttons, styles.parentFlexBox]}>
        <View style={styles.buttonsStack}>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>

              <View style={styles.jntButtonWrapper}>
                <View style={styles.jntButton}>
            <TouchableOpacity onPress={handleLoginPress}>
                  <View style={[styles.button, styles.buttonFlexBox]}>
                    <View style={styles.content}>
                      <Image
                        style={[styles.warningIcon10, styles.iconLayout]}
                        resizeMode="cover"
                      />
                      <Text style={[styles.label, styles.labelTypo]}>
                        Log in
                      </Text>
                      <View style={styles.bage}>
                        <Image
                          style={styles.arrowTopIcon4}
                          resizeMode="cover"
                        />
                        <View style={styles.labelBody}>
                          <Image
                            style={styles.arrowLeftIcon4}
                            resizeMode="cover"
                          />
                          <View style={styles.labelTextIcon4}>
                            <Image
                              style={styles.iconSmall1}
                              resizeMode="cover"
                            />
                            <View style={styles.textspacer}>
                              <Text style={[styles.label1, styles.labelTypo]}>
                                44
                              </Text>
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
                        style={[styles.warningIcon12, styles.iconLayout]}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
              </TouchableOpacity>
                </View>
              </View>
              <View style={[styles.rectangleParent, styles.parentSpaceBlock]}>
                <View style={styles.frameLayout} />
                <Text style={[styles.or, styles.orTypo]}> Or</Text>
                <View style={[styles.frameItem, styles.frameLayout]} />
              </View>
              <View style={[styles.buttonParent, styles.parentSpaceBlock]}>
                <View style={styles.jntButton}>
                <TouchableOpacity >

                  <View style={[styles.button2, styles.buttonFlexBox]}>
                    <View style={styles.content}>
                      <Image
                        style={[styles.googleIcon1, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/google.png")}
                      />
                      <Text style={[styles.label2, styles.labelTypo]}>
                        Google
                      </Text>
                      <View style={styles.bage}>
                        <Image
                          style={styles.arrowTopIcon4}
                          resizeMode="cover"
                        />
                        <View style={styles.labelBody}>
                          <Image
                            style={styles.arrowLeftIcon4}
                            resizeMode="cover"
                          />
                          <View style={styles.labelTextIcon4}>
                            <Image
                              style={styles.iconSmall1}
                              resizeMode="cover"
                            />
                            <View style={styles.textspacer}>
                              <Text style={[styles.label1, styles.labelTypo]}>
                                44
                              </Text>
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
                        style={[styles.warningIcon12, styles.iconLayout]}
                        resizeMode="cover"
                      />
                    </View>
                  </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.button3}>
                <TouchableOpacity >

                  <View style={[styles.button2, styles.buttonFlexBox]}>
                    <View style={styles.content}>
                      <Image
                        style={[styles.googleIcon1, styles.iconLayout]}
                        resizeMode="cover"
                        source={require("../assets/social-icon.png")}
                      />
                      <Text style={[styles.label2, styles.labelTypo]}>
                        Facebook
                      </Text>
                      <View style={styles.bage}>
                        <Image
                          style={styles.arrowTopIcon4}
                          resizeMode="cover"
                        />
                        <View style={styles.labelBody}>
                          <Image
                            style={styles.arrowLeftIcon4}
                            resizeMode="cover"
                          />
                          <View style={styles.labelTextIcon4}>
                            <Image
                              style={styles.iconSmall1}
                              resizeMode="cover"
                            />
                            <View style={styles.textspacer}>
                              <Text style={[styles.label1, styles.labelTypo]}>
                                44
                              </Text>
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
                        style={[styles.warningIcon12, styles.iconLayout]}
                        resizeMode="cover"
                        />
                    </View>
                  </View>
                        </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.haveNoAccountYetParent, styles.parentFlexBox]}>
              <Text style={[styles.haveNoAccount1, styles.orTypo]}>
                Have no account yet?
              </Text>
              <View style={styles.button5}>
              <TouchableOpacity >

                <View style={[styles.button2, styles.buttonFlexBox]}>
                  <View style={styles.content}>
                    <Image
                      style={[styles.warningIcon10, styles.iconLayout]}
                      resizeMode="cover"
                    />
                    <Text style={[styles.label2, styles.labelTypo]}>
                      Register
                    </Text>
                    <View style={styles.bage}>
                      <Image style={styles.arrowTopIcon4} resizeMode="cover" />
                      <View style={styles.labelBody}>
                        <Image
                          style={styles.arrowLeftIcon4}
                          resizeMode="cover"
                        />
                        <View style={styles.labelTextIcon4}>
                          <Image style={styles.iconSmall1} resizeMode="cover" />
                          <View style={styles.textspacer}>
                            <Text style={[styles.label1, styles.labelTypo]}>
                              44
                            </Text>
                            <View style={styles.spacer2px4} />
                          </View>
                        </View>
                        <Image
                          style={styles.arrowLeftIcon4}
                          resizeMode="cover"
                        />
                      </View>
                      <Image style={styles.arrowTopIcon4} resizeMode="cover" />
                    </View>
                    <Image
                      style={[styles.warningIcon12, styles.iconLayout]}
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
      <Image
        style={styles.logoIcon1}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputsPosition: {
    width: 300,
    marginLeft: -149.5,
    left: "50%",
    position: "absolute",
  },
  button2Border: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  orTypo: {
    textAlign: "left",
    fontSize: FontSize.primaryText_size,
  },
  buttonFlexBox: {
    paddingVertical: 0,
    borderRadius: Border.br_21xl,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  labelTypo: {
    fontFamily: FontFamily.latoRegular,
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
  logIn: {
    marginLeft: -26.5,
    top: 152,
    fontSize: 20,
    textAlign: "center",
    left: "50%",
    color: Color.schemasJntPrimaryColor,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    position: "absolute",
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
    color: Color.textJntPrimaryTextLightColor,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    marginLeft: 8,
  },
  icontext: {
    left: 8,
    flexDirection: "row",
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  inputContent: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_5xs,
    borderColor: Color.colorLightgray,
    position: "absolute",
  },
  email: {
    height: 40,
    alignSelf: "stretch",
  },
  viewIcon1: {
    right: 8,
    height: 24,
    top: "50%",
    marginTop: -12,
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
    color: Color.schemasJntPrimaryColor,
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
  },
  inputs: {
    top: 232,
    alignItems: "flex-end",
    overflow: "hidden",
  },
  warningIcon10: {
    height: 24,
    display: "none",
  },
  label: {
    color: Color.backgroundJntPrimaryBackground,
    fontSize: FontSize.primaryText_size,
    fontFamily: FontFamily.latoRegular,
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
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.backgroundJntPrimaryBackground,
  },
  labelBody: {
    height: 24,
    alignItems: "center",
    flexDirection: "row",
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
    alignItems: "center",
    flexDirection: "row",
    height: 40,
  },
  button: {
    backgroundColor: Color.schemasJntPrimaryColor,
    paddingHorizontal: 96,
  },
  jntButton: {
    flex: 1,
  },
  jntButtonWrapper: {
    opacity: 0.5,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  or: {
    marginLeft: 4,
    color: Color.textJntPrimaryTextLightColor,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
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
    fontSize: FontSize.primaryText_size,
    fontFamily: FontFamily.latoRegular,
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
    alignItems: "center",
    alignSelf: "stretch",
  },
  haveNoAccount1: {
    color: "#7b7b7b",
    textAlign: "left",
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
  },
  button5: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  haveNoAccountYetParent: {
    marginTop: 24,
    alignSelf: "stretch",
  },
  frameParent: {
    alignSelf: "stretch",
  },
  buttonsStack: {
    overflow: "hidden",
    flex: 1,
  },
  buttons: {
    top: 394,
    flexDirection: "row",
    width: 300,
    marginLeft: -149.5,
    left: "50%",
    position: "absolute",
  },
  logoIcon1: {
    height: "5.75%",
    width: "12.53%",
    top: "7.98%",
    right: "43.71%",
    bottom: "86.27%",
    left: "43.77%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone1415Pro1: {
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.backgroundJntPrimaryBackground,
  },
});

export default IPhone1415Pro1;
