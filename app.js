import express, { response } from "express";
const app = express();
export default app;
import employees, {
  getEmployee,
  getEmployees,
  getRandomEmployee,
} from "#db/employees";

// Sends string Hello employees
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Sends list of all employees in a response.
app.get("/employees", (req, res) => {
  const data = getEmployees();
  res.send(data);
});

// Sends a emplpoyee that was randomly generated.
app.get("/employees/random", (req, res) => {
  const data = getRandomEmployee();
  res.send(data);
});

// Sends a employee with a specific id in a response.
app.get("/employees/:id", (req, res) => {
  const { id } = req.params;
  const data = getEmployee(id);

  if (!data) {
    return res.status(404).send("There is no employee with that id!");
  }

  res.send(data);
});
