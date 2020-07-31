import React, { Component } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import "./excelOutput.css";

class ExcelOutput extends Component {
  state = {
    districtId: "",
    localBodyId: "",
    wardId: "",
    pollingBoothId: "",
    localBodyData: [],
    wardData: [],
  };

  localBodyHandler = () => {
    console.log("district id: " + this.state.districtId);

    if (this.state.districtId === "13") {
      this.setState({
        localBodyData: [
          "Payyannur Municipality",
          "Cherupuzha",
          "Eramamkuttoor",
          "Kankole-Alapadamba",
          "Karivellur-Peralam",
          "Peringome",
          "Vayakkara",
          "Ramanthali",
          "Taliparamba Municipality",
          "Chapparapadavu",
          "Kurumathur",
          "Kolacherry",
          "Kuttiattoor",
          "Malapattam",
          "Mayyil",
          "Pariyaram",
          "Chengalayi",
          "Eruvassy",
          "Irikkur",
          "Payyavoor",
          "Sreekandapuram",
          "Alakode",
          "Naduvil",
          "Udayagiri",
          "Ulikkal",
          "Cherukunnu",
          "Cheruthazham",
          "Ezhome",
          "Kadannappalli-Panapuzha",
          "Kalliasseri",
          "Kannapuram",
          "Kunhimangalam",
          "Madayi",
          "Mattool",
          "Pattuvam",
          "Azhikode",
          "Chirakkal",
          "Narath",
          "Pallikkunnu",
          "Pappinisseri",
          "Puzhathi",
          "Valapattanam",
          "Kannur Municipality",
          "Chelora",
          "Edakkad",
          "Elayavoor",
          "Munderi",
          "Anjarakandy",
          "Chembilode",
          "Kadambur",
          "Muzhappilangad",
          "Peralasseri",
          "Dharmadam",
          "Pinarayi",
          "Vengad",
          "Thalassery Municipality",
          "Chockli",
          "Eranholi",
          "Kadirur",
          "New-Mahe",
          "Panniyannur",
          "Kuthuparamba Municipality",
          "Kariyad",
          "Kottayam -Malabar",
          "Kunnothuparambu",
          "Mokeri",
          "Panoor",
          "Pattiom",
          "Peringalam",
          "Thriprangottur",
          "Mattannur Municipality",
          "Chittariparamba",
          "Keezhallur",
          "Koodali",
          "Malur",
          "Mangattidam",
          "Kolayad",
          "Thillenkeri",
          "Padiyur-Kalliad",
          "Aralam",
          "Ayyankunnu",
          "Kanichar",
          "Keezhur-Chavassery",
          "Kelakam",
          "Kottiyoor",
          "Muzhakkunnu",
          "Payam",
          "Peravoor",
        ],
      });
    } else {
      this.setState({ localBodyData: [] });
    }
  };

  wardHandler = () => {
    console.log("local body id: " + this.state.localBodyId);
    if (this.state.districtId === "13" && this.state.localBodyId === "53") {
      this.setState({
        wardData: [
          "Parappuram",
          "Edakkadavu",
          "Cherikkal",
          "Pinarayi North",
          "Olayambalam",
          "Venduttayi",
          "Kozhur",
          "Panunda",
          "Olayikkara",
          "Eruvatty",
          "Kappummal",
          "Penakimetta",
          "Panthakkapara",
          "Ummenchira",
          "Kizhakkumbhagum",
          "Padannakara",
          "Pinarayi Theru",
          "Kolad",
          "Pinarayi West",
        ],
      });
    } else {
      this.setState({ wardData: [] });
    }
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="select-body">
          <div className="selection">
            <div className="district select-box">
              <select
                id="district"
                name="district"
                onClick={this.localBodyHandler}
                onChange={(event) => {
                  this.setState({ districtId: event.target.value });
                }}
              >
                <option value="" selected>
                  select District
                </option>
                <option value="1">Thiruvananthapuram</option>
                <option value="2">Kollam</option>
                <option value="3">Pathanamthitta</option>
                <option value="4">Alappuzha</option>
                <option value="5">Kottayam</option>
                <option value="6">Idukki</option>
                <option value="7">Ernakulam</option>
                <option value="8">Thrissur</option>
                <option value="9">Palakkad</option>
                <option value="10">Malappuram</option>
                <option value="11">Kozhilode</option>
                <option value="12">Wayanad</option>
                <option value="13">Kannur</option>
                <option value="14">Kazargod</option>
              </select>
            </div>
            <div className="local-body select-box">
              <select
                id="local-body"
                name="local-body"
                onClick={this.wardHandler}
                onChange={(event) => {
                  this.setState({ localBodyId: event.target.value });
                }}
              >
                <option>select Local Body</option>
                {this.state.localBodyData.map((item, key) => (
                  <option key={key} value={key}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="ward select-box">
              <select
                id="ward"
                name="ward"
                onClick={console.log("ward id: " + this.state.wardId)}
                onChange={(event) => {
                  this.setState({ wardId: event.target.value });
                }}
              >
                <option>select Ward</option>
                {this.state.wardData.map((item, key) => (
                  <option key={key} value={key}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="pollingBooth select-box">
              <select
                id="pollingBooth"
                name="pollingBooth"
                onClick={console.log(
                  "polling booth id: " + this.state.pollingBoothId
                )}
                onChange={(event) => {
                  this.setState({ pollingBoothId: event.target.value });
                }}
              >
                <option>select Polling Booth</option>
                {this.state.wardData.map((item, key) => (
                  <option key={key} value={key}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Link to="/viewOutput">
            <button type="submit" className="select-output-view-button">
              View
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ExcelOutput;
