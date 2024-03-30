import CompanyList from "./CompanyList.jsx";
import CompanyForm from "./CompanyForm.jsx";

import { useState, useEffect } from "react";

const CompanyBrowser = (props) => {
  // initially the companies array will be empty
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    // Here we are using a json file in the public folder.
    // In a real-world example, you’d use the URL of a web API
    const url = "../../public/companies-tech.json";
    if (companies.length <= 0) {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setCompanies(data))
        .catch((err) => console.error(err));
    }
  }, []);

  // {
  //   name: "FaceBook",
  //   symbol: "FB",
  //   sector: "Internet Software",
  //   hq: "Menlo Park, California",
  //   description: "Description for Facebook",
  // },
  // {
  //   name: "Alphabet Inc Class A",
  //   symbol: "GOOG",
  //   sector: "Information Technology",
  //   hq: "Mountain View, California",
  //   description: "Description for Google/Alphabet",
  // },
  // {
  //   name: "Apple",
  //   symbol: "AAPL",
  //   sector: "Information Technology",
  //   hq: "Cupertino, California",
  //   description: "Description for Apple",
  // },
  // {
  //   name: "AT&T",
  //   symbol: "T",
  //   sector: "Telecommunications Services",
  //   hq: "Dallas, Texas",
  //   description: "Description for AT&T",
  // },
  //]);

  // indicates the selected company being edited in the form
  const [selected, setSelected] = useState(null);
  // changes the selected company
  const changeSelectedCompany = (symbol) => {
    const sel = companies.find((c) => c.symbol == symbol);
    setSelected(sel);
  };
  // updates state to reflect changes made in editing form
  const saveCompany = (comp) => {
    const newCompanies = [...companies];
    const indx = newCompanies.findIndex((c) => c.symbol == comp.symbol);
    if (indx >= 0) newCompanies[indx] = comp;
    setCompanies(newCompanies);
    setSelected(comp);
  };

  return (
    <div className="container grid grid-cols-7 gap-4 text-lg text-gray-500 m-4 bg-gray-700 ">
      <div className="col-span-2 ">
        <CompanyList data={companies} changeCompany={changeSelectedCompany} />
      </div>

      <CompanyForm data={selected} save={saveCompany} />
    </div>
  );
};

export default CompanyBrowser;
