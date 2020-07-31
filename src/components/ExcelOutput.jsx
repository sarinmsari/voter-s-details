import React, { Component } from "react";
import Header from "./header";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import "./excelOutput.css";

class ExcelOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: props.location.file,
      districtId: "",
      localBodyId: "",
      wardId: "",
      pollingBoothId: "",
      localBodyData: [],
      wardData: [],
    };
  }

  localBodyHandler = () => {
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

  fileHandler = (event) => {
    let fileObj = this.state.file;
    if (fileObj) {
      ExcelRenderer(fileObj, (error, resp) => {
        if (error) {
          console.log(error);
        } else {
          this.setState({
            cols: resp.cols,
            rows: resp.rows,
          });
        }
      });
    } else {
      alert("No file uploaded");
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

          <button
            type="submit"
            className="select-output-view-button"
            onClick={this.fileHandler}
          >
            View
          </button>
        </div>
        <div className="view-output">
          {this.state.rows && (
            <OutTable
              data={this.state.rows}
              columns={this.state.cols}
              tabelClassName="ExcelTable"
              tableHeaderRowClassName="Heading"
            />
          )}
        </div>
      </div>
    );
  }
}

export default ExcelOutput;
