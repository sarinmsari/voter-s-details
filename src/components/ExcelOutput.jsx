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
  };
  localBodyHandler = (event) => {
    console.log(this.state.districtId);

    if (this.state.districtId === "13") {
      this.setState({
        localBodyData: [
          "|select here",
          "13.1|Payyannur Municipality",
          "13.2|Cherupuzha",
          "13.3|Eramamkuttoor",
          "13.4| Kankole-Alapadamba",
          "13.5|Karivellur-Peralam",
          "13.6|Peringome",
          "13.7|Vayakkara",
          "13.8|Ramanthali<hr>",
          "13.9|Taliparamba Municipality",
          "13.10|Chapparapadavu",
          "13.11|Kurumathur",
          "13.12|Kolacherry",
          "13.13|Kuttiattoor",
          "13.14|Malapattam",
          "13.15|Mayyil",
          "13.16|Pariyaram<hr>",
          "13.17|Chengalayi",
          "13.18|Eruvassy",
          "13.19|Irikkur",
          "13.20|Payyavoor",
          "13.21|Sreekandapuram",
          "13.22|Alakode",
          "13.23|Naduvil",
          "13.24|Udayagiri",
          "13.25|Ulikkal<hr>",
          "13.26|Cherukunnu",
          "13.27|Cheruthazham",
          "13.28|Ezhome",
          "13.29|Kadannappalli-Panapuzha",
          "13.30|Kalliasseri",
          "13-31|Kannapuram",
          "13.32|Kunhimangalam",
          "13.33|Madayi",
          "13.34|Mattool",
          "13.35|Pattuvam<hr>",
          "13.36|Azhikode",
          "13.37|Chirakkal",
          "13.38|Narath",
          "13.39|Pallikkunnu",
          "13.40|Pappinisseri",
          "13.41|Puzhathi",
          "13.42|Valapattanam<hr>",
          "13.43|Kannur Municipality",
          "13.44|Chelora",
          "13.45|Edakkad",
          "13.46|Elayavoor",
          "13.47|Munderi<hr>",
          "13.48|Anjarakandy",
          "13.49|Chembilode",
          "13.50|Kadambur",
          "13.51|Muzhappilangad",
          "13.52|Peralasseri",
          "13.53|Dharmadam",
          "13.54|Pinarayi",
          "13.55|Vengad<hr>",
          "13.56|Thalassery Municipality",
          "13.57|Chockli",
          "13.58|Eranholi",
          "13.59|Kadirur",
          "13.60|New-Mahe",
          "13.61|Panniyannur<hr>",
          "13.62|Kuthuparamba Municipality",
          "13.63|Kariyad",
          "13.64|Kottayam -Malabar",
          "13.65|Kunnothuparambu",
          "13.66|Mokeri",
          "13.67|Panoor",
          "13.68|Pattiom",
          "13.69|Peringalam",
          "13.70|Thriprangottur<hr>",
          "13.71|Mattannur Municipality",
          "13.72|Chittariparamba",
          "13.73|Keezhallur",
          "13.74|Koodali",
          "13.75|Malur",
          "13.76|Mangattidam",
          "13.77|Kolayad",
          "13.78|Thillenkeri",
          "13.79|Padiyur-Kalliad<hr>",
          "13.80|Aralam",
          "13.81|Ayyankunnu",
          "13.82|Kanichar",
          "13.83|Keezhur-Chavassery",
          "13.84|Kelakam",
          "13.85|Kottiyoor",
          "13.86|Muzhakkunnu",
          "13.87|Payam",
          "13.88|Peravoor",
        ],
      });
    }
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
                <option>select local body</option>
                {console.log(this.state.localBodyData)}; }
                {this.state.localBodyData.map((e, key) => {
                  return (
                    <option key={key} value={e.CountryId}>
                      {e.CountryName}
                    </option>
                  );
                })}
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
