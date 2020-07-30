import React, { Component } from "react";
import Header from "./header";
import "./excelOutput.css";

class ExcelOutput extends Component {
  state = {
    districtId: "",
    localBodyId: "",
    localBodyData: [],
    wardData: [],
  };

  districtHandler = (event) => {
    this.setState({ districtId: event.target.value });
    this.localBodyDataUpdater();
  };
  localBodyDataUpdater = () => {
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
  localBodyHandler = (event) => {
    console.log(this.state.districtId);
  };

  render() {
    return (
      <div className="container">
        <Header />
        <div className="output-body">
          <div className="selection">
            <div className="district">
              <label htmlFor="district">District</label>
              <select
                id="district"
                name="district"
                onChange={this.districtHandler}
              >
                <option value="" selected>
                  select district
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
            <div className="local-body">
              <label htmlFor="local-body">Local Body</label>
              <select
                id="local-body"
                name="local-body"
                onChange={this.localBodyHandler}
              >
                <option>select local body</option>
                {console.log(this.state.localBodyData)};
                {this.state.localBodyData.map((item, key) => (
                  <option key={item} value={key}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="ward">
              <label htmlFor="ward">Ward</label>
              <select id="ward" name="ward"></select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExcelOutput;
