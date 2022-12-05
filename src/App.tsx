import { CSVLink } from "react-csv";

const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
];

const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" }
];

const csvReport = {
  filename: "Report.csv",
  className: "btn-download",
  header: headers,
  data: data
};

function App() {
  return (
    <div className="App">
      <CSVLink {...csvReport}>輸出csv</CSVLink>
    </div>
  );
}

export default App;
