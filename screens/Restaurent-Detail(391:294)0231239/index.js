import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_391_295} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8941/8fb5/df39ab01a33f1f566a5285fb202ac9d3"
        }}
        style={styles.ImageBackground_391_296}
      />
      <View style={styles.View_391_297}>
        <View style={styles.View_391_298}>
          <View style={styles.View_391_299} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f57/ac89/c3141c1a9f3a45d9737cc6bd3dfe6c49"
            }}
            style={styles.ImageBackground_391_300}
          />
        </View>
        <View style={styles.View_391_302}>
          <View style={styles.View_391_303} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2a0/ff6f/e6f64c362dc857ad71c579bbbd8ed917"
            }}
            style={styles.ImageBackground_391_304}
          />
        </View>
        <View style={styles.View_391_306}>
          <View style={styles.View_391_307}>
            <View style={styles.View_391_308} />
          </View>
          <View style={styles.View_391_309}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d255/8fb3/506371afce595d26c80e71811f00f186"
              }}
              style={styles.ImageBackground_391_310}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_391_314}>
        <Text style={styles.Text_391_314}>Westway</Text>
      </View>
      <View style={styles.View_391_315}>
        <View style={styles.View_391_316}>
          <Text style={styles.Text_391_316}>4.6 • </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3cea/3105/0680ebe8fd0f9bb94a2949d428227464"
          }}
          style={styles.ImageBackground_391_317}
        />
        <View style={styles.View_391_319} />
        <View style={styles.View_391_320}>
          <Text style={styles.Text_391_320}>15 min</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e452/9f46/46d488c5ac76453f1b65c29f07110afb"
          }}
          style={styles.ImageBackground_391_321}
        />
      </View>
      <View style={styles.View_391_323}>
        <View style={styles.View_I391_323_8_42}>
          <View style={styles.View_I391_323_8_43} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01a3/6210/1049063388899b33290616eafbc5ef32"
            }}
            style={styles.ImageBackground_I391_323_8_44}
          />
          <View style={styles.View_I391_323_8_45} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/74ae/0506/7bbf5ca1a6d1351a770f7b3696aadcaf"
          }}
          style={styles.ImageBackground_I391_323_8_46}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f8/f1fa/20424ab85cff51d754ab43e303ea9c6d"
          }}
          style={styles.ImageBackground_I391_323_8_50}
        />
        <View style={styles.View_I391_323_8_55}>
          <View style={styles.View_I391_323_8_56}>
            <Text style={styles.Text_I391_323_8_56}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_391_324}>
        <View style={styles.View_I391_324_25_13} />
        <View style={styles.View_I391_324_25_72} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e899/d0d7/3fc6c3d3a207880c7bbd31a70a715db5"
          }}
          style={styles.ImageBackground_I391_324_25_14}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/877d/b77a/1f8e9f95c72e2335420b6c1e73f53cf9"
          }}
          style={styles.ImageBackground_I391_324_25_30}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d42c/3652/974b9efc8729995d93759d38626d521c"
          }}
          style={styles.ImageBackground_I391_324_25_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ca1/d9b7/ed25bf9c38626a5386a258b96d2f3a87"
          }}
          style={styles.ImageBackground_I391_324_25_38}
        />
      </View>
      <View style={styles.View_391_325}>
        <Text style={styles.Text_391_325}>More info</Text>
      </View>
      <View style={styles.View_391_326}>
        <Text style={styles.Text_391_326}>See our menu</Text>
      </View>
      <View style={styles.View_391_327}>
        <Text style={styles.Text_391_327}>
          Healthy eating means eating a variety of foods that give you the
          nutrients you need to maintain your health, feel good, and have
          energy.
        </Text>
      </View>
      <View style={styles.View_391_328}>
        <Text style={styles.Text_391_328}>Westway Food Menu</Text>
      </View>
      <View style={styles.View_391_329} />
      <View style={styles.View_391_330} />
      <View style={styles.View_391_331} />
      <View style={styles.View_391_332}>
        <Text style={styles.Text_391_332}>Best Seller</Text>
      </View>
      <View style={styles.View_391_333}>
        <Text style={styles.Text_391_333}>Veg</Text>
      </View>
      <View style={styles.View_391_334}>
        <Text style={styles.Text_391_334}>Non-Veg</Text>
      </View>
      <View style={styles.View_391_335}>
        <Text style={styles.Text_391_335}>Beverages</Text>
      </View>
      <View style={styles.View_391_336} />
      <View style={styles.View_391_337} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dca/9317/4f1b0983f185bf06956f29f78724b900"
        }}
        style={styles.ImageBackground_391_338}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0dca/9317/4f1b0983f185bf06956f29f78724b900"
        }}
        style={styles.ImageBackground_391_341}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffa4/9d22/c7124107f6f1a43916b95cb81482d5e2"
        }}
        style={styles.ImageBackground_391_344}
      />
      <View style={styles.View_391_345} />
      <View style={styles.View_391_346}>
        <Text style={styles.Text_391_346}>50% OFF</Text>
      </View>
      <View style={styles.View_391_347}>
        <Text style={styles.Text_391_347}>Vegitable Salad</Text>
      </View>
      <View style={styles.View_391_348}>
        <Text style={styles.Text_391_348}>Burger with some</Text>
      </View>
      <View style={styles.View_391_349}>
        <Text style={styles.Text_391_349}>Price. 152.00</Text>
      </View>
      <View style={styles.View_391_350}>
        <Text style={styles.Text_391_350}>Price. 152.00</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bef8/e7f2/dbf17c27398603f6e9dc83ee546c3fe4"
        }}
        style={styles.ImageBackground_391_351}
      />
      <View style={styles.View_391_352}>
        <Text style={styles.Text_391_352}>In Pizza Mania</Text>
      </View>
      <View style={styles.View_391_353}>
        <Text style={styles.Text_391_353}>In Pizza Mania</Text>
      </View>
      <View style={styles.View_391_354}>
        <Text style={styles.Text_391_354}>Best sellers</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_391_295: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.27777777777777%"),
    top: hp("75.40983606557377%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_391_296: {
    width: wp("100.00000847710504%"),
    minWidth: wp("100.00000847710504%"),
    height: hp("50.13661619092598%"),
    minHeight: hp("50.13661619092598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.000004169068049863388%")
  },
  View_391_297: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("7.786885245901639%")
  },
  View_391_298: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_391_299: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(110, 128, 176, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_391_300: {
    width: wp("5.555555555555555%"),
    height: hp("2.73224043715847%"),
    top: hp("1.912568306010928%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888888888888893%")
  },
  View_391_302: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.222222222222214%"),
    top: hp("0%")
  },
  View_391_303: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(110, 128, 176, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  ImageBackground_391_304: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333357%")
  },
  View_391_306: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%")
  },
  View_391_307: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_391_308: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(110, 128, 176, 1)",
    borderWidth: 0.5,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16
  },
  View_391_309: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.333333333333343%"),
    top: hp("1.639344262295082%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_391_310: {
    width: wp("4.444444444444445%"),
    height: hp("2.73224043715847%"),
    top: hp("0.27322404371584597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1111111111111%")
  },
  View_391_314: {
    width: wp("38.611111111111114%"),
    top: hp("42.759562841530055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%")
  },
  Text_391_314: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_315: {
    width: wp("36.11111111111111%"),
    minWidth: wp("36.11111111111111%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("49.18032786885246%")
  },
  View_391_316: {
    width: wp("10.833333333333334%"),
    minWidth: wp("10.833333333333334%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.000000000000002%"),
    top: hp("0%")
  },
  Text_391_316: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_391_317: {
    width: wp("4.166666666666666%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_391_319: {
    width: wp("12.777777777777777%"),
    minWidth: wp("12.777777777777777%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.500000000000004%"),
    top: hp("0.1366120218579212%"),
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_391_320: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.77777777777778%"),
    top: hp("0%")
  },
  Text_391_320: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_391_321: {
    width: wp("4.166666666666666%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.500000000000004%")
  },
  View_391_323: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5.770492032577431%"),
    minHeight: hp("5.770492032577431%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I391_323_8_42: {
    flexGrow: 1,
    width: wp("6.757788128323025%"),
    height: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.25925360785591%"),
    top: hp("2.367943101893357%")
  },
  View_I391_323_8_43: {
    width: wp("6.111111111111111%"),
    minWidth: wp("6.111111111111111%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  ImageBackground_I391_323_8_44: {
    width: wp("0.3688994381162855%"),
    minWidth: wp("0.3688994381162855%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.388888888888886%"),
    top: hp("0.5009093571230361%")
  },
  View_I391_323_8_45: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1.0018215153386685%"),
    minHeight: hp("1.0018215153386685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5555555555555429%"),
    top: hp("0.2732240437158473%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I391_323_8_46: {
    flexGrow: 1,
    width: wp("4.0888722737630205%"),
    height: hp("1.4426228778609813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.26667107476129%"),
    top: hp("2.2728758431523226%")
  },
  ImageBackground_I391_323_8_50: {
    flexGrow: 1,
    width: wp("4.533335367838542%"),
    height: hp("1.3989073331238793%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999728732639%"),
    top: hp("2.3169387233713286%")
  },
  View_I391_323_8_55: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%"),
    top: hp("0.9562841530054645%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I391_323_8_56: {
    width: wp("15%"),
    minWidth: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054645%")
  },
  Text_I391_323_8_56: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_391_324: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("125.95628415300546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I391_324_25_13: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I391_324_25_72: {
    flexGrow: 1,
    width: wp("15.277777777777779%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.833333333333336%"),
    top: hp("2.4590163934426386%"),
    backgroundColor: "rgba(255, 0, 0, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_I391_324_25_14: {
    flexGrow: 1,
    width: wp("6.944456100463866%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.88888888888889%"),
    top: hp("4.508196721311478%")
  },
  ImageBackground_I391_324_25_30: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.27777777777777%"),
    top: hp("4.508196721311478%")
  },
  ImageBackground_I391_324_25_22: {
    flexGrow: 1,
    width: wp("6.25%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.055555555555555%"),
    top: hp("4.508196721311478%")
  },
  ImageBackground_I391_324_25_38: {
    flexGrow: 1,
    width: wp("5.7870366838243275%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.11111111111111%"),
    top: hp("4.508196721311478%")
  },
  View_391_325: {
    width: wp("18.055555555555554%"),
    top: hp("44.53551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.61111111111111%")
  },
  Text_391_325: {
    color: "rgba(255, 112, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_326: {
    width: wp("26.944444444444443%"),
    top: hp("117.89617486338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.72222222222223%")
  },
  Text_391_326: {
    color: "rgba(255, 112, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_327: {
    width: wp("83.33333333333334%"),
    top: hp("53.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%")
  },
  Text_391_327: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_328: {
    width: wp("52.22222222222223%"),
    top: hp("69.53551912568307%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%")
  },
  Text_391_328: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_329: {
    width: wp("28.888888888888886%"),
    minWidth: wp("28.888888888888886%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("75.40983606557377%"),
    backgroundColor: "rgba(255, 112, 0, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_391_330: {
    width: wp("17.22222222222222%"),
    minWidth: wp("17.22222222222222%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.166666666666664%"),
    top: hp("75.40983606557377%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_391_331: {
    width: wp("25.833333333333336%"),
    minWidth: wp("25.833333333333336%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.05555555555556%"),
    top: hp("75.40983606557377%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_391_332: {
    width: wp("20.27777777777778%"),
    top: hp("76.36612021857924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.777777777777777%")
  },
  Text_391_332: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_333: {
    width: wp("7.777777777777778%"),
    top: hp("76.36612021857924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.166666666666664%")
  },
  Text_391_333: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_334: {
    width: wp("18.055555555555554%"),
    top: hp("76.36612021857924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.22222222222222%")
  },
  Text_391_334: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_335: {
    width: wp("20.833333333333336%"),
    top: hp("76.36612021857924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91.94444444444444%")
  },
  Text_391_335: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_336: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("88.25136612021858%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_391_337: {
    width: wp("83.33333333333334%"),
    minWidth: wp("83.33333333333334%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("103.27868852459017%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_391_338: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("92.75956284153006%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.33333333333333%")
  },
  ImageBackground_391_341: {
    width: wp("6.666666666666667%"),
    height: hp("3.278688524590164%"),
    top: hp("107.78688524590163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.33333333333333%")
  },
  ImageBackground_391_344: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("88.25136612021858%"),
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_391_345: {
    width: wp("21.944444444444443%"),
    minWidth: wp("21.944444444444443%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("96.72131147540983%"),
    backgroundColor: "rgba(255, 112, 0, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_391_346: {
    width: wp("15.555555555555555%"),
    top: hp("97.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.38888888888889%")
  },
  Text_391_346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_347: {
    width: wp("30.833333333333336%"),
    top: hp("90.02732240437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77777777777778%")
  },
  Text_391_347: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_348: {
    width: wp("33.88888888888889%"),
    top: hp("105.05464480874316%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77777777777778%")
  },
  Text_391_348: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_349: {
    width: wp("23.61111111111111%"),
    top: hp("95.62841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77777777777778%")
  },
  Text_391_349: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_350: {
    width: wp("23.61111111111111%"),
    top: hp("110.65573770491804%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77777777777778%")
  },
  Text_391_350: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_391_351: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.333333333333332%"),
    top: hp("103.27868852459017%"),
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_391_352: {
    width: wp("23.333333333333332%"),
    top: hp("93.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77777777777778%")
  },
  Text_391_352: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_353: {
    width: wp("23.333333333333332%"),
    top: hp("108.06010928961749%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.77777777777778%")
  },
  Text_391_353: {
    color: "rgba(131, 131, 131, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_391_354: {
    width: wp("28.333333333333332%"),
    top: hp("82.92349726775956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.61111111111111%")
  },
  Text_391_354: {
    color: "rgba(55, 55, 55, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1012 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
